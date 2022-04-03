import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchData from '../redux/action/MovieList';
import Movie from './Movie';

const Movies = () => {
  const data = useSelector((state) => state.movie.movie);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div className="row p-4 mb-3">
      {data.map((data) => (
        <Movie
          key={data.id}
          posterPath={data.poster_path}
          title={data.title}
          desc={data.overview}
          date={data.release_date}
        />
      ))}
    </div>
  );
};
export default Movies;
