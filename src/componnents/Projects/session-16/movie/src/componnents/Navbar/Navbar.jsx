import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Navbar.css';

export default function Navbar() {
  const [dataAbi, setDataAbi] = useState([]); // لتخزين نتائج البحث
  const [searchTerm, setSearchTerm] = useState(''); // نص البحث

  // دالة لجلب البيانات من TMDB
  const getData = async () => {
    if (!searchTerm) {
      setDataAbi([]); // لو input فاضي، نمسح النتائج
      return;
    }

    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=00c5b7e66df84ff7f49aeffc489707c2&language=en-US&page=1`,
        { params: { query: searchTerm } }
      );
      setDataAbi(data.results);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // لما input يتغير، نعمل fetch أو نمسح النتائج لو فاضي
  useEffect(() => {
    getData();
  }, [searchTerm]);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">🎬<span className='cl-danger'>Mov</span>ies</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/movies">Movies</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tv">TV Shows</Link>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={(e) => e.preventDefault()}>
              <input 
                className="form-control me-2" 
                type="search" 
                placeholder="Search for a movie..." 
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </form>
          </div>
        </div>
      </nav>

      {/* عرض نتائج البحث فقط لو فيه نص */}
      {searchTerm && (
        <div className="search-results container mt-3">
          {dataAbi.length > 0 ? (
            <div className="row">
              {dataAbi.map((movie) => (
                <div key={movie.id} className="col-md-3 mb-3">
                  <div className="card">
                    <img 
                      src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : 'https://via.placeholder.com/500x750'} 
                      className="card-img-top" 
                      alt={movie.title} 
                    />
                    <div className="card-body">
                      <h5 className="card-title">{movie.title}</h5>
                      <p className="card-text">Rating: {movie.vote_average}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center mt-3">No results found.</p>
          )}
        </div>
      )}
    </>
  );
}
