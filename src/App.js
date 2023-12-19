//App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import moviesData from "./data/MoviesData";

import Detail from "./routes/Detail";

import "./App.css";
import "./css/Controller.css";
import "./css/Decade.css";
import "./css/Character.css";
import "./css/Keyword.css";
import "./css/People.css";
import "./css/SwitchAndDesignEditor.css";
// import { Switch } from "react-router-dom/cjs/react-router-dom.min";

const App = () => {
  const [movies, setMovies] = useState(moviesData);
  {
    /*  텍스트 사이즈 input 정의 */
  }
  const [textSize, setTextSize] = useState(40);

  const handleSizeChange = (event) => {
    setTextSize(parseInt(event.target.value));
  };
  {
    /*  텍스트 종류 input 정의 */
  }
  const [style1Checked, setStyle1Checked] = React.useState(false);
  const [style2Checked, setStyle2Checked] = React.useState(false);
  const [style3Checked, setStyle3Checked] = React.useState(false);
  const [style4Checked, setStyle4Checked] = React.useState(false);
  const [style5Checked, setStyle5Checked] = React.useState(false);
  const [style6Checked, setStyle6Checked] = React.useState(false);

  const handleStyle1Change = () => {
    setStyle1Checked(true);
    setStyle2Checked(false);
    setStyle3Checked(false);
    setStyle4Checked(false);
    setStyle5Checked(false);
    setStyle6Checked(false);
  };

  const handleStyle2Change = () => {
    setStyle1Checked(false);
    setStyle2Checked(true);
    setStyle3Checked(false);
    setStyle4Checked(false);
    setStyle5Checked(false);
    setStyle6Checked(false);
  };

  const handleStyle3Change = () => {
    setStyle1Checked(false);
    setStyle2Checked(false);
    setStyle3Checked(true);
    setStyle4Checked(false);
    setStyle5Checked(false);
    setStyle6Checked(false);
  };

  const handleStyle4Change = () => {
    setStyle1Checked(false);
    setStyle2Checked(false);
    setStyle3Checked(false);
    setStyle4Checked(true);
    setStyle5Checked(false);
    setStyle6Checked(false);
  };

  const handleStyle5Change = () => {
    setStyle1Checked(false);
    setStyle2Checked(false);
    setStyle3Checked(false);
    setStyle4Checked(false);
    setStyle5Checked(true);
    setStyle6Checked(false);
  };

  const handleStyle6Change = () => {
    setStyle1Checked(false);
    setStyle2Checked(false);
    setStyle3Checked(false);
    setStyle4Checked(false);
    setStyle5Checked(false);
    setStyle6Checked(true);
  };
  {
    /*  리셋 버튼 정의 */
  }
  const handleReset = () => {
    window.location.reload();
  };
  {
    /*  필터 정의 */
  }
  const [activeFilters, setActiveFilters] = useState({
    decade: [],
    actor: [],
    director: [],
    source: [],
    scenario: [],
    adaptation: [],
    character: [],
    keyword: [],
  });

  const decades = [
    "1950s",
    "1960s",
    "1970s",
    "1980s",
    "1990s",
    "2000s",
    "2010s",
    "2020s",
  ];

  const actors = ["테스트 배우"];
  const directors = ["테스트 감독"];
  const sources = ["테스트 원작"];
  const scenarios = ["테스트 각본"];
  const adaptations = ["테스트 각색"];
  const characters = ["테스트 캐릭터"];
  const keywords = ["테스트 키워드"];

  const handleFilterChange = (section, filter, isChecked) => {
    let updatedFilters = { ...activeFilters };
    {
      /* 연도 필터 연결 */
    }
    if (section === "decade" && filter === "All" && isChecked) {
      updatedFilters.decade = ["All"];
    } else if (
      section === "decade" &&
      filter !== "All" &&
      isChecked &&
      updatedFilters.decade.includes("All")
    ) {
      updatedFilters.decade = updatedFilters.decade.filter(
        (f) => f !== "All" && f !== filter
      );
    } else if (section === "decade" && !isChecked && filter === "All") {
      updatedFilters.decade = [];
    } else {
      updatedFilters[section] = isChecked
        ? filter === "All"
          ? [filter]
          : [...updatedFilters[section], filter]
        : updatedFilters[section].filter((f) => f !== filter);
    }

    const isOtherFilterSelected = updatedFilters.decade.some(
      (f) => f !== "All" && !decades.includes(f)
    );
    if (isOtherFilterSelected && !updatedFilters.decade.includes("All")) {
      updatedFilters.decade = ["All"];
    }

    setActiveFilters(updatedFilters);
    applyFilters(updatedFilters);
  };

  const applyFilters = (filters) => {
    let filteredMovies = moviesData;

    if (filters.decade.length > 0 && !filters.decade.includes("All")) {
      filteredMovies = filteredMovies.filter((movie) => {
        return filters.decade.some((filter) => {
          const decade = parseInt(filter.substring(0, 4), 10);
          return movie.year >= decade && movie.year < decade + 10;
        });
      });
    }
    {
      /* 감독 필터 연결 */
    }
    if (filters.director.length > 0 && !filters.director.includes("All")) {
      filteredMovies = filteredMovies.filter((movie) =>
        filters.director.some((selectedDirector) =>
          movie.director.includes(selectedDirector)
        )
      );
    }
    {
      /* 배우 필터 연결 */
    }
    if (filters.actor.length > 0 && !filters.actor.includes("All")) {
      filteredMovies = filteredMovies.filter((movie) =>
        filters.actor.some(
          (selectedActor) => movie.actor && movie.actor.includes(selectedActor)
        )
      );
    }
    {
      /* 원작자 필터 연결 */
    }
    if (filters.source.length > 0 && !filters.source.includes("All")) {
      filteredMovies = filteredMovies.filter((movie) =>
        filters.source.some(
          (selectedSource) =>
            movie.source && movie.source.includes(selectedSource)
        )
      );
    }
    /* 각본 필터 연결 */
    if (filters.scenario.length > 0 && !filters.scenario.includes("All")) {
      filteredMovies = filteredMovies.filter((movie) =>
        filters.scenario.some(
          (selectedScenario) =>
            movie.scenario && movie.scenario.includes(selectedScenario)
        )
      );
    }
    {
      /* 각색 필터 연결 */
    }
    if (filters.adaptation.length > 0 && !filters.adaptation.includes("All")) {
      filteredMovies = filteredMovies.filter((movie) =>
        filters.adaptation.some(
          (selectedAdaptation) =>
            movie.adaptation && movie.adaptation.includes(selectedAdaptation)
        )
      );
    }
    {
      /* 캐릭터 필터 연결 */
    }
    if (filters.character.length > 0 && !filters.character.includes("All")) {
      filteredMovies = filteredMovies.filter((movie) =>
        filters.character.some(
          (selectedCharacter) =>
            movie.character && movie.character.includes(selectedCharacter)
        )
      );
    }
    {
      /* 키워드 필터 연결 */
    }
    if (filters.keyword.length > 0 && !filters.keyword.includes("All")) {
      filteredMovies = filteredMovies.filter((movie) =>
        filters.keyword.some(
          (selectedKeyword) =>
            movie.keyword && movie.keyword.includes(selectedKeyword)
        )
      );
    }
    setMovies(filteredMovies);
  };

  return (
    <Routes>
      <Route
        path={process.env.PUBLIC_URL + "/"}
        element={
          <Home
            decades={decades}
            characters={characters}
            keywords={keywords}
            actors={actors}
            directors={directors}
            sources={sources}
            scenarios={scenarios}
            adaptations={adaptations}
            activeFilters={activeFilters}
            handleFilterChange={handleFilterChange}
            handleReset={handleReset}
            handleSizeChange={handleSizeChange}
            textSize={textSize}
            movies={movies}
            style1Checked={style1Checked}
            style2Checked={style2Checked}
            style3Checked={style3Checked}
            style4Checked={style4Checked}
            style5Checked={style5Checked}
            style6Checked={style6Checked}
            handleStyle1Change={handleStyle1Change}
            handleStyle2Change={handleStyle2Change}
            handleStyle3Change={handleStyle3Change}
            handleStyle4Change={handleStyle4Change}
            handleStyle5Change={handleStyle5Change}
            handleStyle6Change={handleStyle6Change}
          />
        }
      />
      <Route
        path={process.env.PUBLIC_URL + "/rountes/detail/:id"}
        element={<Detail movies={movies} />}
      />
    </Routes>
  );
};

export default App;
