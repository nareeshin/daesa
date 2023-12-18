//Controller.js
import React from "react";
import FilterDecade from "./FilterDecade";
import FilterCharacter from "./FilterCharacter";
import FilterKeyword from "./FilterKeyword";
import FilterDirector from "./FilterDirector";
import FilterActor from "./FilterActor";
import FilterSource from "./FilterSource";
import FilterScenario from "./FilterScenario";
import FilterAdaptation from "./FilterAdaptation";

const Controller = ({
  decades,
  characters,
  keywords,
  actors,
  directors,
  sources,
  scenarios,
  adaptations,
  activeFilters,
  handleFilterChange,
  handleReset,
  handleSizeChange,
  textSize,
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
    <section className="Controller">
      <section className="ContainerCtr">
        {/*  * * * * * * * CtrA * * * * * *  */}
        <section className="CtrA">
          {/* 연도 섹션 */}
          <div className="DecadeSection">
            <h3 className="subtitle">
              DECADE
              <br />
              ⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙
            </h3>

            <div className="Decades filter-section">
              <FilterDecade
                filters={["All", ...decades]}
                onFilterChange={(filter, isChecked) =>
                  handleFilterChange("decade", filter, isChecked)
                }
              />
            </div>
          </div>
          {/* 캐릭터 섹션 */}
          <div className="CharacterSection">
            <div className="filter-section">
              <h3 className="subtitle">CHARACTER ⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙</h3>
              <FilterCharacter
                filters={characters}
                onFilterChange={(filter, isChecked) =>
                  handleFilterChange("character", filter, isChecked)
                }
              />
            </div>
          </div>
        </section>
        {/*  * * * * * * * CtrB * * * * * *  */}
        <section className="CtrB">
          {/* 키워드 섹션 */}
          <div className="KeywordSection">
            <div className="filter-section">
              <h3 className="subtitle">KEYWORD ⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙</h3>
              <FilterKeyword
                filters={keywords}
                onFilterChange={(filter, isChecked) =>
                  handleFilterChange("keyword", filter, isChecked)
                }
              />
            </div>
          </div>
        </section>
        {/*  * * * * * * * CtrC * * * * * *  */}
        <section className="CtrC">
          {/* 배우 섹션 */}
          <div className="filter-section">
            <FilterActor
              filters={actors}
              onFilterChange={(filter, isChecked) =>
                handleFilterChange("actor", filter, isChecked)
              }
            />
          </div>
          {/* 감독 섹션 */}
          <div className="filter-section">
            <FilterDirector
              filters={directors}
              onFilterChange={(filter, isChecked) =>
                handleFilterChange("director", filter, isChecked)
              }
            />
          </div>

          {/* 원작자 섹션 */}
          <div className="filter-section">
            <FilterSource
              filters={sources}
              onFilterChange={(filter, isChecked) =>
                handleFilterChange("source", filter, isChecked)
              }
            />
          </div>
          {/* 각본 섹션 */}
          <div className="filter-section">
            <FilterScenario
              filters={scenarios}
              onFilterChange={(filter, isChecked) =>
                handleFilterChange("scenario", filter, isChecked)
              }
            />
          </div>
          {/* 각색 섹션 */}
          <div className="filter-section">
            <FilterAdaptation
              filters={adaptations}
              onFilterChange={(filter, isChecked) =>
                handleFilterChange("adaptation", filter, isChecked)
              }
            />
          </div>
        </section>
        {/*  * * * * * * * CtrD * * * * * *  */}

        <section className="CtrD">
          <div className="SwitchOuter">
            <button className="BtnReset" onClick={handleReset}>
              <div className="ResetIcon">
                <svg
                  width="39"
                  height="36"
                  viewBox="0 0 149 126"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M88.3592 0C72.3642 0.0197584 57.0298 6.38122 45.7178 17.6896C34.4059 28.9981 28.0397 44.3306 28.015 60.3256V88.3592L14.0075 74.3517L0 88.3592L37.2693 125.255L74.7066 88.3592L60.6991 74.3517L46.6916 88.3592V60.3443C46.6916 37.372 65.3776 18.6767 88.3592 18.6767C111.341 18.6767 130.027 37.3626 130.027 60.3443C130.022 66.142 128.808 71.875 126.464 77.1777C124.12 82.4803 120.696 87.2362 116.412 91.1421L129 104.953C135.201 99.293 140.155 92.4033 143.547 84.723C146.94 77.0428 148.696 68.7403 148.704 60.3443C148.684 44.346 142.32 29.0087 131.007 17.6963C119.695 6.3838 104.357 0.0197692 88.3592 0Z"
                    fill="#888888"
                  />
                </svg>
              </div>{" "}
              <div className="ResetText">RESET</div>
            </button>
          </div>
          <div className="DesignEditor">
            <div className="Editors">
              <h3 className="subtitle">
                Design Editor ⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙
              </h3>
              <div className="Editor">
                {/* Dynamically apply the size using inline styles */}
                <span className="Scope">{textSize}</span>
                <input
                  type="range"
                  className="EditorInput"
                  min="20"
                  max="200"
                  step="1"
                  value={textSize}
                  onChange={handleSizeChange}
                />
                <span className="Scope">0</span>
                <span className="Param">Size</span>
              </div>
              <div className="Editor">
                {/* Dynamically apply the size using inline styles */}
                <span className="Scope">{textSize}</span>
                <input
                  type="range"
                  className="EditorInput"
                  min="20"
                  max="200"
                  step="1"
                  value={textSize}
                  onChange={handleSizeChange}
                />
                <span className="Scope">0</span>
                <span className="Param">Size</span>
              </div>
              <div className="Editor">
                {/* Dynamically apply the size using inline styles */}
                <span className="Scope">{textSize}</span>
                <input
                  type="range"
                  className="EditorInput"
                  min="20"
                  max="200"
                  step="1"
                  value={textSize}
                  onChange={handleSizeChange}
                />
                <span className="Scope">0</span>
                <span className="Param">Size</span>
              </div>
              <div className="Editor">
                {/* Dynamically apply the size using inline styles */}
                <span className="Scope">{textSize}</span>
                <input
                  type="range"
                  className="EditorInput"
                  min="20"
                  max="200"
                  step="1"
                  value={textSize}
                  onChange={handleSizeChange}
                />
                <span className="Scope">0</span>
                <span className="Param">Size</span>
              </div>

              <div className="Editor">
                {/* Style 1 폰트 스타일 변경 라디오 버튼 */}
                명조체{" "}
                <input
                  type="radio"
                  name="fontStyle"
                  checked={style1Checked}
                  onChange={() => handleStyle1Change()}
                />
              </div>
              <div className="Editor">
                Style 2{" "}
                <input
                  type="radio"
                  name="fontStyle"
                  checked={style2Checked}
                  onChange={() => handleStyle2Change()}
                />
              </div>
              <div className="Editor">
                Style 3{" "}
                <input
                  type="radio"
                  name="fontStyle"
                  checked={style3Checked}
                  onChange={() => handleStyle3Change()}
                />
              </div>
              <div className="Editor">
                Style 4{" "}
                <input
                  type="radio"
                  name="fontStyle"
                  checked={style4Checked}
                  onChange={() => handleStyle4Change()}
                />
              </div>
              <div className="Editor">
                Style 5{" "}
                <input
                  type="radio"
                  name="fontStyle"
                  checked={style5Checked}
                  onChange={() => handleStyle5Change()}
                />
              </div>
              <div className="Editor">
                Style 6{" "}
                <input
                  type="radio"
                  name="fontStyle"
                  checked={style6Checked}
                  onChange={() => handleStyle6Change()}
                />
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default Controller;
