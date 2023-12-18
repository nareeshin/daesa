//MovieList.js
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "../css/Modal.css";
import "../css/MovieList.css";

const MovieList = ({
  movies,
  textSize,
  style1Checked,
  style2Checked,
  style3Checked,
  style4Checked,
  style5Checked,
  style6Checked,
}) => {
  const [trCount, setTrCount] = useState(0);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const modalStyle = {
    content: {
      background: "black",
      width: "50vw",
      height: "60vh",
      margin: "auto",
      zIndex: 1000000,
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      zIndex: 999,
    },
  };
  const getDialogueClassName = () => {
    const baseClassName = "ListData Dialogue";
    let additionalClassName = "";

    if (style1Checked) {
      additionalClassName = "style-1";
    } else if (style2Checked) {
      additionalClassName = "style-2";
    } else if (style3Checked) {
      additionalClassName = "style-3";
    } else if (style4Checked) {
      additionalClassName = "style-4";
    } else if (style5Checked) {
      additionalClassName = "style-5";
    } else if (style6Checked) {
      additionalClassName = "style-6";
    }

    return `${baseClassName} ${additionalClassName}`;
  };
  /* * * * * * * * PRINT * * * * * * * * */

  // handlePrintModalContent 함수 내의 코드
  const handlePrintModalContent = async () => {
    const printableModalContent = document.getElementById(
      "printable-modal-content"
    );

    if (printableModalContent) {
      // 새로운 창 열기
      const printWindow = window.open("", "_blank");

      // 스타일시트 로드
      printWindow.document.write(
        '<link rel="stylesheet" href="/print/Print.css" type="text/css" />'
      );

      const dynamicStyles = await getDynamicStyles();
      printWindow.document.write("<html><head><title>Print</title>");
      printWindow.document.write(dynamicStyles);
      printWindow.document.write(
        " <link rel='preconnect' href='https://fonts.googleapis.com'>"
      );
      printWindow.document.write(
        "    <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin>"
      );
      printWindow.document.write(
        " <link href='https://fonts.googleapis.com/css2?family=Grandiflora+One&display=swap' rel='stylesheet'>"
      );
      printWindow.document.write(
        "  <link rel='stylesheet' href='./NectoMono-Regular.woff2' type='font/woff2' />"
      );

      printWindow.document.write("</head><body>");

      if (selectedMovie) {
        const dynamicClass = style1Checked
          ? "style-1"
          : style2Checked
          ? "style-2"
          : style3Checked
          ? "style-3"
          : style4Checked
          ? "style-4"
          : style5Checked
          ? "style-6"
          : style5Checked
          ? "style-6"
          : "";
        printWindow.document.write(
          `<div id="printable-modal-content" class="${dynamicClass}">`
        );
        printWindow.document.write(
          `<p style="font-size: 40px;">${selectedMovie.dialogue}</p>`
        );
        printWindow.document.write("</div>");
      }

      printWindow.document.write("</body></html>");
      printWindow.document.close();
      window.setTimeout(() => {
        printWindow.print();
      }, 500);
    }
  };
  const getDynamicStyles = async () => {
    let dynamicStyles = "<style>";
    dynamicStyles += `
    @font-face {
      font-family: "Neutronic";
      src: url("./print/NeutronicHangeul-Regularv0.3.woff2") format("woff2");
    }
    #printable-modal-content{
      font-size: 100px;
    }
  `;
    if (style1Checked) {
      dynamicStyles += `
      .style-1 p{
        color: #ff0000; 
        font-family: 'Grandiflora One', cursive;

      }
    `;
    }

    if (style2Checked) {
      dynamicStyles += `
      .style-2 {
        color: #00ff00;
        font-family: 'Neutronic', san-serif;
      }
    `;
    }
    if (style3Checked) {
      dynamicStyles += `
      .style-3 p{
        color: blue; 
        font-family: 'Grandiflora One', cursive;

      }
    `;
    }
    if (style1Checked) {
      dynamicStyles += `
      .style-4 p{
        color: purple; 
        font-family: 'Grandiflora One', cursive;

      }
    `;
    }
    if (style1Checked) {
      dynamicStyles += `
      .style-5 p{
        color: tomato; 
        font-family: 'Grandiflora One', cursive;

      }
    `;
    }
    if (style1Checked) {
      dynamicStyles += `
      .style-6 p{
        color: navy;
        font-family: 'Grandiflora One', cursive;

      }
    `;
    }

    dynamicStyles += "</style>";
    return dynamicStyles;
  };
  /* * * * * * * * PRINT END* * * * * * * * */
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
          </tr>
        </thead>
      </table>
      <table className="TBodyTable">
        <tbody className="ListContainer">
          {movies.map((movie) => {
            return (
              <tr key={movie.id} onClick={() => openModal(movie)}>
                <td className="ListData Year">{movie.year}</td>
                <td className="ListData Movie">{movie.title}</td>
                <td
                  className={getDialogueClassName()}
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
              </tr>
            );
          })}
        </tbody>
      </table>
      {trCount === 0 && <p className="DataResult">검색 결과가 없습니다.</p>}
      {trCount > 0 && (
        <p className="DataResult">검색 결과: {trCount} 개의 데이터</p>
      )}

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Movie Detail Modal"
        style={modalStyle}
      >
        <button className="CloseButton" onClick={closeModal}>
          Close
        </button>
        {selectedMovie && (
          <div id="printable-modal-content">
            <Link to={`/`} key={selectedMovie.id}>
              <h2 className="ModalTitle">{selectedMovie.title}</h2>
              <p className="ModalText">Year: {selectedMovie.year}</p>
              <p
                style={{
                  fontSize: "40px",
                }}
                className={getDialogueClassName()}
              >
                {selectedMovie.dialogue}
              </p>
              <p className="ModalText">{selectedMovie.actor}</p>
              <p className="ModalText">{selectedMovie.director}</p>
              <p className="ModalText">{selectedMovie.source}</p>
              <p className="ModalText">{selectedMovie.scenario}</p>
              <p className="ModalText">{selectedMovie.adaptation}</p>
              <p className="ModalText">{selectedMovie.clip}</p>
              <p className="ModalText">{selectedMovie.commentary}</p>
            </Link>
          </div>
        )}
        <button className="PrintButton" onClick={handlePrintModalContent}>
          Print Modal Content
        </button>
      </Modal>
    </div>
  );
};

export default MovieList;
