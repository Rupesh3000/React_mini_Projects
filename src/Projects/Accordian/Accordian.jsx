import React, { useState } from 'react'
import data from './Data'
function Accordian() {

    const [selector, setSelector] = useState()

    const handelSingleSelection = (currentId) => {
        setSelector(currentId === selector ? null : currentId)
    }
    return (<>
        <div className='wrapper flex justify-center'>
            <div className="item w-5/12 mt-10 p-5">
                {
                    data && data.length > 0 ?
                        data.map((dataItem) => (
                            <>
                                <div
                                    onClick={() => {
                                        return handelSingleSelection(dataItem.id)
                                    }}
                                    className="question  p-4 mb-3 text-2xl cursor-pointer  bg-orange-900 text-white rounded-md">
                                    <h1 className='inline-block text-2xl'>{dataItem.question}</h1>
                                    <div className='ans text-xl mt-3 px-3'>
                                        {selector === dataItem.id ?
                                            <div>{dataItem.answer}</div>
                                            : null}
                                    </div>
                                </div>

                            </>


                        ))
                        : <h1>Data is not found</h1>
                }
            </div>
        </div>
    </>
    )
}

export default Accordian
