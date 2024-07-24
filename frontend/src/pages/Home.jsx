import React from "react";
import BannerHome from "../components/BannerHome";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import HorizontalScrollCard from "../components/HorizontalScrollCard";
// import Card from '../components/Card'

const Home = () => {
  const trendingMovies = useSelector((state) => state.movieoData.bannerData);

  // console.log("trenddddddd",trendingMovies)
  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard data={trendingMovies} heading={"Trending"}/>
    </div>
  );
};

export default Home;
