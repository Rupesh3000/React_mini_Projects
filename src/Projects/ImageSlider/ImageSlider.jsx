import React, { useState, useEffect } from 'react'
import useLocalStorage from './useLocalStorage';
import './theme.css'

export default function ImageSlider({ url, limit }) {

    const [images, setImages] = useState([]);
    const [errorMsg, setErrorMsg] = useState();
    const [currentSlider, setCurrentSlider] = useState(0)
    const [theme, setTheme] = useLocalStorage('theme', "dark");

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

    const handleToggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <>
            <div className="wrapper h-screen flex justify-center items-center" data-theme={theme}>
                <div className="container h-full flex flex-col justify-center items-center relative">

                    <div className='dark absolute top-7'>
                        <h1 className='text-2xl'>Love you Threethousand</h1>
                        <button
                            onClick={handleToggleTheme}
                            className='bg-gray-800 text-white px-4 text-xl py-1 mt-1  rounded-md'>Theme</button>
                    </div>

                    <i
                        onClick={handlePreviousImg}
                        className="ri-arrow-left-line text-3xl absolute left-16 top-1/2 p-3 bg-transparent cursor-pointer  text-center bg-slate-500 rounded-full z-10"></i>

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
                        className="ri-arrow-right-line text-3xl absolute right-16 top-1/2 p-3 bg-transparent cursor-pointer  text-center bg-slate-500 rounded-full"></i>
                </div>
            </div>
        </>
    )
}
