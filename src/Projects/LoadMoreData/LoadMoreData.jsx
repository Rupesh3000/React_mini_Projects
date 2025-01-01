import React, { useEffect, useState } from 'react'

export default function LoadMoreData() {
    // const [loading, setLoading] = useState(false);
    // const [product, setProduct] = useState([]);
    // const [count, setCount] = useState(0);

    // useEffect(() => {
    //     let isMounted = true;
    //     setLoading(true);

    //     fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`)
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             if (isMounted) {
    //                 if (data && data.products && data.products.length ) {

    //                     setProduct(data);
    //                 } else {
    //                     // Handle no data or invalid data structure
    //                     console.log("No products or invalid data structure received");
    //                     alert("No products or invalid data structure received")
    //                     setProduct({ products: [] }); // Set an empty array or appropriate fallback
    //                 }
    //                 setLoading(false);
    //             }
    //         })
    //         .catch(error => {
    //             if (isMounted) {
    //                 console.error("Error fetching data: ", error);
    //                 alert('Something went wrong');
    //                 setLoading(false);
    //             }
    //         });

    // }, []);


    // if (loading) {
    //     return <div>loading data please wait</div>
    // }


    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);

    async function fetchProducts() {
        try {
            setLoading(true);
            const response = await fetch(
                `https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20
                }`
            );

            const result = await response.json();

            if (result && result.products && result.products.length) {
                setProducts(result);
                setLoading(false);
            }

            console.log(result);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading data ! Please wait.</div>;
    }

    console.log(products);
    return (
        <>
            <div className="wrapper">
                <div className="container flex flex-wrap gap-2">
                    {
                        products.map((item) => (
                            <div className="product" key={item.id}>
                                <img src={item.thumbnail} alt={item.title} />
                                <p>{item.title}</p>
                            </div>

                        ))
                    }
                </div>
            </div>
        </>
    )
}
