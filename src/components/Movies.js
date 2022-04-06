/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchData from '../redux/action/MovieList';
import Header from './Header';
import Movie from './Movie';

const Movies = ({ setUser }) => {
  const searchedItem = useSelector((state) => state.movie.searchItem);
  const data = useSelector((state) => state.movie.movie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div>
      <Header setUser={setUser} />
      <div className="row p-4 mb-3">
        {searchedItem.length >= 1 ? searchedItem.map((data) => (
          <Movie
            key={data.id}
            posterPath={data.poster_path}
            title={data.title}
            desc={data.overview}
            date={data.release_date}
            id={data.id}
          />
        ))
          : data.map((data) => (
            <Movie
              key={data.id}
              posterPath={data.poster_path}
              title={data.title}
              desc={data.overview}
              date={data.release_date}
              id={data.id}
            />
          ))}
      </div>
    </div>
  );
};
export default Movies;
