import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ClimbingBoxLoader } from "react-spinners";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Tv.css';

export default function Tv() {
  const [dataApi, setDataApi] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getData() {
    try {
      const { data } = await axios.get(
        'https://api.themoviedb.org/3/tv/popular?api_key=00c5b7e66df84ff7f49aeffc489707c2&language=en-US&page=1'
      );
      setDataApi(data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);
   const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 7,
    slidesToScroll: 7,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  if (loading) {
      return (
        <div className="bg-dark min-vh-100 d-flex justify-content-center align-items-center">
          <ClimbingBoxLoader color="#beb5b5" size={30} />
        </div>
      );
    } 

  const getRateColor = (rate) => {
    if (rate >= 7) return 'rate-high';
    if (rate >= 5) return 'rate-medium';
    return 'rate-low';
  };

  if (loading) return <h3 className="text-center text-white mt-5">Loading TV Shows...</h3>;

  return (
    <div className="bg-dark text-white p-3 min-vh-100">
        {/* ===== Slider ===== */}
        <Slider {...sliderSettings}>
          {dataApi.slice(0, 8).map((movie) => (
            <div key={movie.id} className="p-2">
              <img
                src={
                  movie.poster_path
                    ? "https://image.tmdb.org/t/p/w500" + movie.poster_path
                    : "https://via.placeholder.com/500x750?text=No+Image"
                }
                className="w-100 rounded"
                alt={movie.title}
              />
              <h6 className="text-center mt-2">{movie.title}</h6>
            </div>
          ))}
        </Slider>
      <div className="row g-4">
        {dataApi.map(tv => (
          <div className="col-md-3 col-sm-6 col-12" key={tv.id}>
            <div className="movie-card h-100">
              <div className="card-img-wrapper">
                <img
                  src={tv.poster_path ? "https://image.tmdb.org/t/p/w500" + tv.poster_path : "https://via.placeholder.com/500x750?text=No+Image"}
                  className="card-img-top"
                  alt={tv.name || "No Title"}
                />
                <div className={`rate-badge ${getRateColor(tv.vote_average)}`}>
                  ⭐ {tv.vote_average.toFixed(1)}
                </div>
              </div>
              <div className="card-body">
                <h5 className="card-title">{tv.name || "No Title"}</h5>
                <p className="card-text">{tv.overview ? tv.overview.slice(0, 90) + "..." : "No description"}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
