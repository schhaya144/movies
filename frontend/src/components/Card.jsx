import React from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import {Link} from 'react-router-dom'


const Card = ({data,trending,index}) => {
    const imageURL = useSelector(state => state.movieoData.imageURL)
    console.log(data)
  return (
    <div className='w-full min-w-[230px] max-w-[230px] rounded h-80 overflow-hidden relative'>
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

            <div className='absolute bottom-0 h-14 backdrop-blur-3xl w-full bg-black/60 p-2'>

                  <h2 className='text-ellipsis line-clamp-1 text-lg font-semibold '>{data?.title || data?.name}</h2>
                  <div className='text-sm text-neutral-400 flex justify-between'>
                    <p > {moment(data.release_date || data.first_air_date).format("MMMM Do YYYY") } </p>
                    <p className='bg-black p-1 mb-1 text-xs'>Rating : {Number(data.vote_average).toFixed(1)}</p>
                  </div>
            </div>
      
    </div>
  )
}

export default Card