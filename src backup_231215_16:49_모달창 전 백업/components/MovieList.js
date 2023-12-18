import React, { useState, useEffect } from "react";

const MovieList = ({ movies, textSize }) => {
  const [trCount, setTrCount] = useState(0);

  useEffect(() => {
    calculateTrCount();
  }, [movies]);

  const calculateTrCount = () => {
    const tbodyTable = document.querySelector(".TBodyTable");

    if (tbodyTable) {
      const trCount = tbodyTable.querySelectorAll("tr").length;
      setTrCount(trCount);
    }
  };
  return (
    <div className="TableContainer">
      <table className="TheadTable">
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
      </table>
      <table className="TBodyTable">
        <tbody className="ListContainer">
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td className="ListData Year">{movie.year}</td>
              <td className="ListData Movie">{movie.title}</td>
              <td
                className="ListData Dialogue"
                style={{
                  fontSize: `${textSize}px`,
                }}
              >
                {movie.dialogue}
              </td>
              <td className="ListData Actor">{movie.actor}</td>
              <td className="ListData Director">{movie.director}</td>
              <td className="ListData Source">{movie.source}</td>
              <td className="ListData Scenario">{movie.scenario}</td>
              <td className="ListData Adaptation">{movie.adaptation}</td>
              <td className="ListData Clip">{movie.clip}</td>
              <td className="ListData Commentary">{movie.commentary}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {trCount === 0 && <p className="DataResult">검색 결과가 없습니다.</p>}
      {trCount > 0 && (
        <p className="DataResult">검색 결과: {trCount} 개의 데이터</p>
      )}
    </div>
  );
};

export default MovieList;
