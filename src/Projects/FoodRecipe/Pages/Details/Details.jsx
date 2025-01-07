import React from 'react'
import { useParams } from 'react-router-dom'

export default function Details() {
    const {id} = useParams()
  return (
      <div className='text-center bg-gray-600 px-5 text-white m-4'>User : {id}</div>
  )
}
