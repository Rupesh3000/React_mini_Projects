import { useState } from 'react'
import Accordian from './Projects/Accordian/Accordian'
import ColorGenerator from './Projects/ColorGenerator/ColorGenerator'
import ImageSlider from './Projects/ImageSlider/ImageSlider'
import LoadMoreData from './Projects/LoadMoreData/LoadMoreData'


function App() {

  return (
    <>
      {/* <Accordian /> */}

      {/* <ColorGenerator /> */}

      <ImageSlider url={'https://picsum.photos/v2/list?page=2&limit=10'}/>


      {/* <LoadMoreData /> */}
    </>
  )
}

export default App
