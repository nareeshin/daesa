// src/components/MovieList.js
import React from "react";

const MovieList = ({ movies }) => {
  return (
    <table>
      <thead>
        <tr className="indexContainer">
          <th id="indexYear" className="index">
            연도
          </th>
          <th id="indexMovie" className="index">
            영화제목
          </th>
          <th id="indexDialogue" className="index">
            대사
          </th>
          <th id="indexActor" className="index">
            배우
          </th>
          <th id="indexDirector" className="index">
            감독
          </th>
          <th id="indexSource" className="index">
            원작
          </th>
          <th id="indexScenario" className="index">
            각본
          </th>
          <th id="indexAdaptation" className="index">
            각색
          </th>
          <th id="indexClip" className="index">
            클립영상
          </th>
          <th id="indexCommentary" className="index">
            해설
          </th>
        </tr>
      </thead>
      <tbody className="ListContainer">
        {movies.map((movie) => (
          <tr key={movie.id}>
            <td>{movie.year}</td>
            <td>{movie.title}</td>
            <td>{movie.dialogue}</td>
            <td>{movie.actor}</td>
            <td>{movie.director}</td>
            <td>{movie.source}</td>
            <td>{movie.scenario}</td>
            <td>{movie.adaptation}</td>
            <td>{movie.clip}</td>
            <td>{movie.commentary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MovieList;
