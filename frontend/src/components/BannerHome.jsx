import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FaAnglesLeft } from "react-icons/fa6";
import { FaAnglesRight } from "react-icons/fa6";

const BannerHome = () => {
    const bannerData = useSelector(state => state.movieoData.bannerData)
    const imageURL = useSelector(state => state.movieoData.imageURL)
    const [currentImage, setCurrentImage]=useState(0)
    // console.log(bannerData)
    const handleNext=()=>{
     if(currentImage < bannerData.length - 1){
        setCurrentImage(preve => preve + 1)
     }
    }
    const handlePrevious=()=>{
        if(currentImage > 0){
            setCurrentImage(preve => preve - 1)
         }
    }
   useEffect(()=>{
      const interval= setInterval(()=>{
        if(currentImage < bannerData.length - 1){
            handleNext()
         }else{
            setCurrentImage(0)
         }
      },[5000])
      return()=>clearInterval(interval)
   },[bannerData,imageURL])
    return (
        <section className='w-full h-full '>
            <div className="flex min-h-full max-h-[95vh] overflow-hidden">
                {
                    bannerData.map((data, index) => {


                        return (
                            <div className="min-w-full min-h-[450px] lg:min-h-full overflow-hidden relative group transition-all" style={{transform:`translateX(-${currentImage*100}%)`}} key={index}>
                                <div className="w-full h-full">
                                    <img src={imageURL + data.backdrop_path} className='h-full w-full object-cover' />
                                </div>
                                {/* buton nex and previous image  */}
                                <div className="absolute top-0 h-full w-full  items-center hidden justify-between px-4 group-hover:lg:flex">
                                    <button onClick={handlePrevious} className='bg-white p-2 rounded-full z-10 text-black text-xl'><FaAnglesLeft/></button>
                                    <button onClick={handleNext} className='bg-white p-2 rounded-full z-10 text-black text-xl'><FaAnglesRight /></button>
                                </div>
                                <div className="absolute top-0  w-full h-full bg-gredient-to-t from-neutral-900 to-transparent">

                                </div>
                                <div className="container mx-auto">
                                <div className=" w-full absolute bottom-0 max-w--md px-3">
                                    <h2 className='font-bold text-white text-3xl drop-shadow-2xl'> {data?.title || data?.name}</h2>
                                    <p className='text-ellipsis line-clamp-3 my-2'>{data.overview}</p>
                                    <div className='flex items-center gap-4'>
                                        <p>Rating : {Number(data.vote_average).toFixed(1) || "rating"}+</p>
                                        <span>|</span>
                                        <p>view: {Number(data.vote_count).toFixed(0)}</p>
                                    </div>
                                    <button className='bg-white text-black font-bold rounded px-4 py-2 hover:bg-gradient-to-l from-red-700 to-orange-400 shadow-md transition-all hover:scale-105'>Play Now</button>
                                </div>
                                </div>
                               

                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default BannerHome