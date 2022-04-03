import React from 'react'

const Favotites = () => {
    
  return (
    <div className="col-3">
      <div className="card mb-5">
        <div style={{ height: '275px' }}>

          <img
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
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

          <h3 className="card-title mt-2">{title}</h3>
          <div className="d-flex flex-column justify-content-between">
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
          >
            Add to Favroites
          </button>

        </div>
      </div>
    </div>
  )
}

export default Favotites;
