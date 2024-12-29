import { useState } from 'react'
import Accordian from './Projects/Accordian/Accordian'
import ColorGenerator from './Projects/ColorGenerator/ColorGenerator'
import ImageSlider from './Projects/ImageSlider/ImageSlider'


function App() {

  return (
    <>
      {/* <Accordian /> */}

      {/* <ColorGenerator /> */}

      <ImageSlider url={'https://picsum.photos/v2/list?page=2&limit=10'}/>
    </>
  )
}

export default App
