//Home.js
import React from "react";
import Controller from "../components/Controller";
import MovieList from "../components/MovieList";

const Home = ({
  decades,
  characters,
  keywords,
  actors,
  directors,
  sources,
  scenarios,
  adaptations,
  commentary,
  activeFilters,
  handleFilterChange,
  handleReset,
  handleSizeChange,
  textSize,
  movies,
  style1Checked,
  style2Checked,
  style3Checked,
  style4Checked,
  style5Checked,
  style6Checked,
  handleStyle1Change,
  handleStyle2Change,
  handleStyle3Change,
  handleStyle4Change,
  handleStyle5Change,
  handleStyle6Change,
}) => {
  return (
    <>
      <Controller
        decades={decades}
        characters={characters}
        keywords={keywords}
        actors={actors}
        directors={directors}
        sources={sources}
        scenarios={scenarios}
        adaptations={adaptations}
        commentary={commentary}
        activeFilters={activeFilters}
        handleFilterChange={handleFilterChange}
        handleReset={handleReset}
        handleSizeChange={handleSizeChange}
        textSize={textSize}
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

      <section className="List">
        <div>
          <MovieList
            movies={movies}
            textSize={textSize}
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
        </div>
      </section>
    </>
  );
};

export default Home;
