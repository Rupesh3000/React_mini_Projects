import React, { useState, useEffect } from 'react'

export default function ImageSlider({ url, limit }) {

    const [images, setImages] = useState([]);
    const [errorMsg, setErrorMsg] = useState();
    const [currentSlider, setCurrentSlider] = useState(0)

    const fetchImages = async (getUrl) => {
        try {
            const response = await fetch(getUrl)
            const data = await response.json()

            setImages(data)
        } catch (e) {
            setErrorMsg(e.message)
        }
    }
    useEffect(() => {
        if (url !== '') fetchImages(url)
    }, [url])

    const handlePreviousImg = () => {
        setCurrentSlider(currentSlider === 0 ? currentSlider - images.length - 1 : currentSlider - 1)
    }

    const handleNextImg = () => {
        setCurrentSlider(currentSlider === images.length - 1 ? 1 : currentSlider + 1)
    }

    return (
        <>
            <div className="wrapper h-screen flex justify-center items-center">
                <div className="container h-full flex justify-center items-center relative">

                    <i
                        onClick={handlePreviousImg}
                        className="ri-arrow-left-line text-3xl absolute left-16 top-1/2 p-3 bg-transparent cursor-pointer  text-center bg-slate-400 rounded-full z-10"></i>

                    <div className="slider w-2/3 relative h-2/3">
                        {
                            images && images.length ? images.map((image, index) => {
                                return <img
                                    key={image.id}
                                    src={image.download_url}
                                    alt=""
                                    className={currentSlider === index ? `w-full h-full` : `hidden`} /> 
                            })
                                : null
                        }

                    </div>

                    <i
                        onClick={handleNextImg}
                        className="ri-arrow-right-line text-3xl absolute right-16 top-1/2 p-3 bg-transparent cursor-pointer  text-center bg-slate-400 rounded-full"></i>
                </div>
            </div>
        </>
    )
}
