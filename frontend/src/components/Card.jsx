import React from 'react'
import { useSelector } from 'react-redux'

const Card = ({data,trending,index}) => {
    const imageURL = useSelector(state => state.movieoData.imageURL)
  return (
    <div className='w-full max-w-[230px] rounded h-80 overflow-hidden relative'>
        <img src={imageURL+data?.poster_path} alt="" />
       
            <div className="absolute top-4">
               {
                 trending && (
                    <div className="py-1 px-4 bg-black/60 backdrop-blur-3xl rounded-r-full overflow-hidden">
                        #{index} Trending
                    </div>
                )
               }
            </div>
      
    </div>
  )
}

export default Card