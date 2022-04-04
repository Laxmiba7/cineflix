/* eslint-disable react/prop-types */
import React from 'react';
// import { AiOutlineStar } from 'react-icons/ai';
import ReactStars from 'react-rating-stars-component';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import AddToFav from '../redux/action/AddToFav';

const Movie = (props) => {
  // const [rating, setRating] = useState('[]');
  const dispatch = useDispatch();
  const {
    title, posterPath, desc, date, id,
  } = props;
  const ratingChanged = (rating) => {
    alert(`You have given ${rating} star for us`);
    // setRating(rating);
    localStorage.setItem('rating', JSON.stringify(rating));
  };
  return (
    <div className="col-3">
      <div className="card mb-5">
        <div style={{ height: '275px' }} className="imageSize d-flex justify-content-center">
          <Link to={`/movie/${id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${posterPath}`}
              className="card-img-top img-fluid mx-auto"
              alt="..."
              style={{ height: '100%', width: 'auto' }}
            />
          </Link>
        </div>

        <div className="card-body">
          <div className="row">
            <ReactStars count={5} size={30} isHalf onChange={ratingChanged} />
            <div
              className="btn-group col"
              role="group"
              aria-label="Basic outlined example"
            />
          </div>

          <h3 className="card-title mt-2"><Link to="/product" style={{ textDecoration: 'none', color: '#000' }}>{title}</Link></h3>
          <div className="d-flex flex-column justify-content-between" style={{ color: '#000' }}>
            <h5>Description:</h5>

            <p className="text-truncate">{desc}</p>
          </div>
          <p className="card-text">
            Released Date:
            {' '}
            {date}
            {' '}
          </p>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={() => {
              dispatch(AddToFav(id));
            }}
          >
            Add to Favroites
          </button>

        </div>
      </div>
    </div>
  );
};
export default Movie;
