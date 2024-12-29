import React, { useState } from 'react'

function ColorGenerator({ noOfStars = 5 }) {
    const [color, setColor] = useState("Colors")
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)



    // random color generator 
    const randomColorUtility = (length) => Math.floor(Math.random() * length);
    const handleCreateRandomHexColor = () => {
        const hex = ['1', '2', '3', '4', '5', '6', '7', '8', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';
        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
        setColor(hexColor);
    };
    const handleCreateRandomRGBColor = () => {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);
        setColor(`rgb(${r},${g},${b})`);
    };


    // star rating 

    const handleRatingClick = (getCurrentIndex) => {
        setRating(getCurrentIndex)
    }
    const handleMouseEnter = (getCurrentIndex) => {
        setHover(getCurrentIndex)

    }
    const handleMouseLeave = () => {
        setHover(rating)
    }

    return (
        <div className="wrapper flex justify-center bg-yellow-400 h-screen">

            <div className="justify-center bg-red-300 w-full h-screen" style={{ backgroundColor: color }}>
                <div className='flex justify-center gap-3 mt-3'>
                    <button
                        onClick={handleCreateRandomHexColor}
                        className='bg-yellow-200 px-4 py-3 text-xl rounded-lg'>Generate Random HEX Color </button>
                    <button
                        onClick={handleCreateRandomRGBColor}
                        className='bg-yellow-200 px-4 py-3 text-xl rounded-lg'>Generate Random RGB Color </button>
                </div>

                <div className='flex justify-evenly items-center text-7xl mt-24'>
                    {color}

                    <div className='starRating text-9xl flex gap-1'>
                        {
                            [...Array(noOfStars)].map((_, index) => {
                                index += 1;
                                return <h1
                                    key={index}
                                    className={index <= (hover || rating) ? 'text-yellow-400': 'text-black'}
                                    onClick={() => handleRatingClick(index)}
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={() => handleMouseLeave()}
                                >
                                    *
                                </h1>
                            })
                        }
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ColorGenerator