import React, { useEffect, useState } from 'react'

function GitHubProfileFinder() {
    const [userData, setUserData] = useState([]);
    const [user, setUser] = useState('');
    const [loading, setLoading] = useState(false);

    const fetchGitHubUser = async () => {
        try {
            setLoading(true)
            const response = await fetch(`https://api.github.com/users/${user}`);
            if (!response.ok) {
                throw new Error("User not found");
            }
            const data = await response.json();
            setUserData(data);
            setLoading(false)
        } catch (err) {
            console.log(err); <input type="text"
                value={user}
                name='search-github'
                placeholder='Search GitHub User...'
                className='py-3 px-4 rounded-2xl dark:placeholder-gray-700'
                onChange={e => setUser(e.target.value)}
            />

        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
                <div className="text-center">
                    {/* Spinner */}
                    <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>

                    {/* Loading Text */}
                    <h1 className="text-white text-2xl mt-5 font-bold">Loading...</h1>
                    <p className="text-white/80 mt-2">
                        Please wait while we load the content for you.
                    </p>
                </div>
            </div>
        )
    }

    
    const handleSearchUser = () => {
        fetchGitHubUser()
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            fetchGitHubUser(); // Call the fetch function
        }
    };


    return (
        <div className='wrapper flex items-center justify-center h-screen'>
            <div className="container bg-gray-700 h-full flex justify-center items-center flex-col gap-11">
                <div className="search-container ">

                    <input type="text"
                        value={user}
                        name='search-github'
                        placeholder='Search GitHub User...'
                        className='py-3 px-4 rounded-2xl dark:placeholder-gray-700'
                        onChange={e => setUser(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />

                    <button
                        onClick={handleSearchUser}
                        className='py-2 px-3 text-xl bg-teal-300 ml-3 rounded-3xl'
                    >Search</button>
                </div>
                <div className="info-container flex gap-11">
                    <div className="avtar-box">
                        <img src={userData.avatar_url} alt=""
                            className='w-64 h-64 bg-black rounded-full object-cover'
                        />
                    </div>

                    <div className="details-box text-2xl text-white">
                        <h1 className='mb-3'>Name : {userData.login}</h1>
                        <p className='mb-3'>public Repo : {userData.public_repos}</p>
                        <p>followers : {userData.followers}</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default GitHubProfileFinder;