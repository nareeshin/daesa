const App = () => {
  return (
    <div className="App">
      <div className="DesignEditor">
        <div className="Editors">
          <h3 className="subtitle">Design Editor ⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙</h3>
          <div className="Editor">
            {/* Dynamically apply the size using inline styles */}
            <span className="Scope">20</span>
            <input
              type="range"
              className="EditorInput"
              min="1"
              max="10"
              step="1"
            />
            <span className="Scope">0</span>
            <span className="Param">Size</span>
          </div>
        </div>
      </div>
      <section className="List">
        <div>
          <MovieList movies={movies} />
        </div>
      </section>
    </div>
  );
};

export default App;
