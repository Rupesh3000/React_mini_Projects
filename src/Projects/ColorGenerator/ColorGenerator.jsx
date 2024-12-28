import React, { useState } from 'react'

function ColorGenerator() {

    const [typeOfColor, setTypeOfColor] = useState("hex")
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

        console.log(hexColor);
    }
    return (
        <div className="wrapper flex justify-center bg-yellow-400">

            <div className=" container  justify-center bg-red-300">
                <div className='flex justify-center gap-3 mt-3'>
                    <button
                        onClick={handleCreateRandomHexColor}
                        className='bg-yellow-200 px-4 py-3 text-xl rounded-lg'>HEX Generator</button>
                    <button className='bg-yellow-200 px-4 py-3 text-xl rounded-lg'>RGB Color Generator</button>
                    <button className='bg-yellow-200 px-4 py-3 text-xl rounded-lg'>Rendom Color Generator</button>
                </div>
            </div>

        </div>
    )
}

export default ColorGenerator