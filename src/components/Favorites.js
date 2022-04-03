import React from 'react';

const Favotites = () => (
  <div className="col-3">
    <div className="card mb-5">
      <div style={{ height: '275px' }}>

        <img
          src=""
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

        <h3 className="card-title mt-2">Title</h3>
        <div className="d-flex flex-column justify-content-between">
          <h5>Description:</h5>

          <p className="text-truncate">Desc</p>
        </div>
        <p className="card-text">
          Released Date:
          {' '}
          {Date}
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
);

export default Favotites;
