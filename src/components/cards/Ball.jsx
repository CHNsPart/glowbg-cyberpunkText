import React,{ useState } from 'react'
import { TbDiamondsFilled } from 'react-icons/tb'

const Ball = () => {
  const [active, setActive] = useState(false)
  
  const selected = "rounded-full right-20 absolute z-50 bottom-11 h-20 w-20 bg-clip-padding backdrop-filter backdrop-blur-xl backdrop-brightness-30 bg-opacity-30 flex justify-center items-center border-8 border-white cursor-pointer"
  const notSelected = ""

  return (
    <>    
        <div className='rounded-full right-20 absolute z-50 bottom-11 h-20 w-20 backdrop-blur-xl backdrop-brightness-130 bg-red-500 bg-opacity-30 flex justify-center items-center border-8 border-white cursor-pointer'>
            <TbDiamondsFilled size={50} 
                className='rotate-0' 
            />
        </div>
        <div className='rounded-full right-20 mr-[6rem] absolute z-50 bottom-11 h-20 w-20 bg-clip-padding backdrop-filter backdrop-blur-xl backdrop-brightness-50 bg-opacity-30 flex justify-center items-center border-8 border-white cursor-pointer'>
            <TbDiamondsFilled size={50} 
                className='rotate-45' 
            />
        </div>
        <div className='rounded-full right-20 mr-[12rem] absolute z-50 bottom-11 h-20 w-20 bg-clip-padding backdrop-filter backdrop-blur-xl backdrop-brightness-50 bg-opacity-30 flex justify-center items-center border-8 border-white cursor-pointer'>
            <TbDiamondsFilled size={50} 
                className='-rotate-45' 
            />
        </div>
        <div className='rounded-full right-20 mr-[18rem] absolute z-50 bottom-11 h-20 w-20 bg-clip-padding backdrop-filter backdrop-blur-xl backdrop-brightness-50 bg-opacity-30 flex justify-center items-center border-8 border-white cursor-pointer'>
            <TbDiamondsFilled size={50} 
                className='rotate-90' 
            />
        </div>
    </>
  )
}

export default Ball