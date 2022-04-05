import React from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineStar } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux';
import Header from './Header';
import AddToFav from '../redux/action/AddToFav';

const Product = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const userId = params.id;
  const data = useSelector((state) => state.movie.movie);
  // eslint-disable-next-line eqeqeq
  const clickedItem = data.filter((x) => x.id == userId);
  console.log(clickedItem);

  return (
    <div>
      <Header />
      {clickedItem.map((item) => (
        <div className="row p-5 m-5 moviepage-container" key={item.id}>
          <div className="col-4">

            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              className="card-img-top img-fluid"
              style={{ height: 'auto', width: '100%' }}
              alt="Movie"
            />
            <button
              type="submit"
              className="btn btn-primary mt-3"
              onClick={() => {
                dispatch(AddToFav(item.id));
              }}
            >
              Add to Favroites
            </button>

          </div>

          <div className="col-4 m-auto">
            <div className="card-body">
              <div className="row">
                <h3 className="card-title mt-2">{item.title}</h3>
                <div className="col">
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
                <div className="d-flex flex-column justify-content-between w-5">

                  <p>
                    {item.overview}
                  </p>
                  <p>
                    Released Date:
                    {item.release_date}
                  </p>
                  <p>
                    Original Title:
                    {item.original_title}
                  </p>
                  <p>
                    Vote Average:
                    {item.vote_average}
                  </p>
                  <p>
                    Vote Count:
                    {item.vote_count}
                  </p>
                  <p>
                    Popularity:
                    {item.popularity}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Product;
