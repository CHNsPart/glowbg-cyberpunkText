import React from 'react'
import Ball from './Ball'
import Lottie from "lottie-react";
import designer from "../../assets/designer.json"



const Profile = () => {
  return (
    <div className='relative'> 
        <div className='min-h-[401px] min-w-[888px] bg-brandBrown p-10 rounded-[50px]'>
            <div className='grid justify-between grid-cols-2 w-full'>
                <div>
                    <p className='font-space font-bold text-[50px] text-left'>
                        UI/UX Designer
                    </p> 
                    <p className='font-space text-[25px] text-left'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    </p> 
                </div>
                <div className='justify-end place-self-center'>
                    <p className='font-space font-bold text-black text-[50px] text-left'>
                        <Lottie
                        // initial={{ opacity:0, y:200 }}
                        // animate={{ opacity:100, y:0 }}
                        // transition={{
                        //   duration: 1,
                        //   delay: 1,
                        //   transition: "easeInOut",
                        //   //ease: [0, 0.71, 0.2, 1.01]
                        // }}   
                        //className='row-span-4 justify-self-center absolute opacity-20'
                        animationData={JSON.parse(JSON.stringify(designer))} 
                        loop={true} 
                        autoplay={true}
                        style={{ width: 250, height: 200 }}  
                      />
                    </p>  
                </div>
            </div>
        </div>
    <div 
        className='bg-white h-2 absolute bottom-20 z-50 w-full'
    />
    <div 
        className='h-10 absolute bottom-20 right-0 z-50 w-1/2 origin-left grid grid-col-1 grid-rows-1 justify-end items-center'
    />
     <Ball/>
    </div>
  )
}

export default Profile