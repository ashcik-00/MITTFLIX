import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { showDetails } from "../services/movieAPI";

const Details = () => {
  const { id } = useParams();

  const [details, setDetails] = useState({});

  useEffect(() => {
    showDetails(id)
      .then((res) => {
        setDetails(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="show-details">
      <img
        src={`https://image.tmdb.org/t/p/original${details?.backdrop_path}`}
        alt=""
      />
      <div className="show-details-inner">
        <h1>{details?.name}</h1>
        <div className="description">{details?.overview}</div>
        <button className="add-to-watchlist">+ Add to watch list</button>
      </div>
    </div>
  );
};

export default Details;
