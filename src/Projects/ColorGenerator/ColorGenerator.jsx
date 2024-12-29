import React, { useState } from 'react'

function ColorGenerator() {
    const [color, setColor] = useState("#00000")


    const randomColorUitily = (length) => {
        return Math.floor(Math.random() * length)
    }
    const handleCreateRandomHexColor = () => {

        let hex = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F',];

        let hexColor = "#";

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUitily(hex.length)]

        }
        setColor(hexColor)
    }


    const handleCreateRandomRGBColor = () => {
        const r = randomColorUitily(256)
        const g = randomColorUitily(256)
        const b = randomColorUitily(256)

        setColor(`rgb(${r},${g},${b})`);
    }
    return (
        <div className="wrapper flex justify-center bg-yellow-400 h-screen">

            <div className="justify-center bg-red-300 w-full h-screen" style={{ backgroundColor: color }}>
                <div className='flex justify-center gap-3 mt-3'>
                    <button
                        onClick={handleCreateRandomHexColor}
                        className='bg-yellow-200 px-4 py-3 text-xl rounded-lg'>Generator Random HEX Color </button>
                    <button
                        onClick={handleCreateRandomRGBColor}
                        className='bg-yellow-200 px-4 py-3 text-xl rounded-lg'>Generator Random RGB Color </button>
                </div>

                <div className='flex justify-center items-center text-7xl mt-24'>
                    {color}
                </div>
            </div>

        </div>
    )
}

export default ColorGenerator