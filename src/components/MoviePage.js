import React from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineStar } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const Product = () => {
  const params = useParams();
  const userId = params.id;
  const data = useSelector((state) => state.movie.movie);
  // eslint-disable-next-line eqeqeq
  const clickedItem = data.filter((x) => x.id == userId);
  console.log(clickedItem);

  return (
    <div>

      {clickedItem.map((item) => (
        <div className="row p-5 m-5" key={item.id}>
          <div className="col-4">

            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              className="card-img-top img-fluid"
              style={{ height: 'auto', width: '100%' }}
              alt="Movie"
            />

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
                    {item.date}
                  </p>
                </div>
              </div>

              <button type="submit" className="btn btn-primary mt-4">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Product;
