import React from 'react'
import BannerHome from '../components/BannerHome'
import { useSelector } from 'react-redux'
import Card from '../components/Card'
// import Card from '../components/Card'

const Home = () => {
  const trendingMovies = useSelector(state => state.movieoData.bannerData)
  // console.log("trenddddddd",trendingMovies)
  return (
    <div>
      <BannerHome/>
      <div className=" container mx-auto  px-3  my-10 tex">
        <h2 className='text-xl font-bold'>Trending Show</h2>
      <div className="grid grid-cols-[repeat(auto-fit,230px)] gap-6">
      {
        trendingMovies.map((data, index)=>{
          return(
            <div className="">
            <Card key={data.id} data={data} index={index+1} trending={true}></Card>
            </div>
          )
        })
      }
      </div>
      </div>
    </div>
  )
}

export default Home