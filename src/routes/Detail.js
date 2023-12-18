import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "react-modal";

Modal.setAppElement("#root"); // root 엘리먼트를 모달의 기준으로 설정

const Detail = ({ movies }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const selectedMovie = movies.find((m) => m.id === id);
    setMovie(selectedMovie);
  }, [id, movies]);

  if (!movie) {
    return <p>영화를 찾을 수 없습니다.</p>;
  }

  return (
    <Modal
      isOpen={true} // 모달이 열려 있는지 여부
      onRequestClose={() => {
        // 모달을 닫을 때 호출되는 함수
        // 여기에 모달을 닫기 위한 로직을 추가할 수 있습니다.
      }}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)", // 배경의 어두운 정도
        },
        content: {
          width: "800px", // 모달의 너비
          maxHeight: "80%", // 모달의 최대 높이
          margin: "auto", // 수평 가운데 정렬
          overflowY: "auto", // 세로 스크롤이 필요한 경우 스크롤을 표시
        },
      }}
    >
      <h2>{movie.title}</h2>
      <table>
        <tbody>
          <tr>
            <td>Year</td>
            <td>{movie.year}</td>
          </tr>
          <tr>
            <td>Movie</td>
            <td>{movie.title}</td>
          </tr>
          <tr>
            <td>Dialogue</td>
            <td style={{ fontSize: "56px" }}>{movie.dialogue}</td>
          </tr>
          {/* 나머지 영화 정보에 대한 행 추가 */}
        </tbody>
      </table>
    </Modal>
  );
};

export default Detail;
