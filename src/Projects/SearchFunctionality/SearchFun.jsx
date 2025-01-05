import React, { useEffect, useState } from 'react'
import Suggesion from './Suggesion';


export default function SearchFun() {

    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);

    const [searchPara, setSearchPara] = useState('')
    const [showDropdown, setShowDropdown] = useState(false)
    const [filteredUser ,setFilteredUser] = useState([])


    useEffect(() => {
        let isMounted = true;
        setLoading(true);

        fetch("https://dummyjson.com/users")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (isMounted) {
                    if (data && data.users && data.users.length) setUsers(data.users.map(usersItem => usersItem.firstName));

                    else {
                        // Handle no data or invalid data structure
                        console.log("No products or invalid data structure received");
                        alert("No products or invalid data structure received")
                        setUsers({ products: [] }); // Set an empty array or appropriate fallback
                    }
                    setLoading(false);
                }
            })
            .catch(error => {
                if (isMounted) {
                    console.error("Error fetching data: ", error);
                    alert('Something went wrong');
                    setLoading(false);
                }
            });

    }, []);

    const handleChange = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchPara(query)

        if (query.length > 1) {
            const filteredData = users && users.length ? 
                users.filter(item => item.toLowerCase().indexOf(query) > -1)
                : []
            
            setFilteredUser(filteredData)
            setShowDropdown(true)
        } else {
            setShowDropdown(false)
        }
    }

    console.log(users , filteredUser);
    return (
        <>
            <div className="wrapper h-screen flex justify-center items-center">
                <div className='container flex  flex-col h-full'>
                    <input type="text"
                        value={searchPara}
                        placeholder='search users....'
                        onChange={handleChange}
                        className='py-2 px-3 border-spacing-1 text-xl bg-slate-700-700'
                    />
                    {
                         <Suggesion data={filteredUser}/>
                   }

                </div>
            </div>

        </>
    )
}
