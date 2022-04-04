import React from 'react';
import { useSelector } from 'react-redux';
import { AiOutlineStar } from 'react-icons/ai';
import Header from './Header';

const Favorites = () => {
  const favItems = useSelector((state) => state.movie.fav);
  if (favItems.length === 0) {
    return (
      <div>
        <Header />
        {' '}
        <h2 style={{ color: 'white' }}> No favorites items found </h2>
        {' '}
      </div>
    );
  }
  return (
    <div>

      <Header />
      <div className="container">
        <div className="row p-4 mb-3">
          {favItems.map((item) => (
            <div className="col-3" key={item.id}>

              <div className="card mb-5">

                <div style={{ height: '275px' }} className="imageSize d-flex justify-content-center">

                  <img
                    src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    className="card-img-top img-fluid mx-auto"
                    alt="..."
                    style={{ height: '100%', width: 'auto' }}
                  />

                </div>

                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <AiOutlineStar />
                      <AiOutlineStar />
                      <AiOutlineStar />
                      <AiOutlineStar />
                      <AiOutlineStar />
                    </div>
                    <div
                      className="btn-group col"
                      role="group"
                      aria-label="Basic outlined example"
                    />
                  </div>

                  <h3 className="card-title mt-2">{item.title}</h3>
                  <div className="d-flex flex-column justify-content-between">
                    <h5>Description:</h5>

                    <p className="text-truncate">{item.overview}</p>
                  </div>
                  <p className="card-text">
                    Released Date:
                    {' '}
                    {Date}
                    {' '}
                  </p>
                  <button
                    type="submit"
                    className="btn btn-danger"
                  >
                    Delete
                  </button>

                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favorites;
