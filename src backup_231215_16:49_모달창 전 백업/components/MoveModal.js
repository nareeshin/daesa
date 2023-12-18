import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const MovieModal = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state?.movie;

  if (!movie) {
    // If there's no movie data, redirect to the main page
    navigate("/");
    return null;
  }

  return (
    <div className="Modal">
      <div className="ModalContent">
        <span className="CloseButton" onClick={() => navigate(-1)}>
          &times;
        </span>
        <p className="ModalData Actor">{movie.actor}</p>
        <p className="ModalData Director">{movie.director}</p>
        <p className="ModalData Source">{movie.source}</p>
        <p className="ModalData Scenario">{movie.scenario}</p>
        <p className="ModalData Adaptation">{movie.adaptation}</p>
        <p className="ModalData Clip">{movie.clip}</p>
        <p className="ModalData Commentary">{movie.commentary}</p>
      </div>
    </div>
  );
};

export default MovieModal;
