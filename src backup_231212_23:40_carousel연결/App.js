import React, { useState } from "react";
import MovieList from "./components/MovieList";
import FilterCheckboxesDecade from "./components/FilterCheckboxesDecade";
import FilterCheckboxesCharacter from "./components/FilterCheckboxesCharacter";
import FilterCheckboxesKeyword from "./components/FilterCheckboxesKeyword";
import FilterCheckboxesDirector from "./components/FilterCheckboxesDirector";
import FilterCheckboxesActor from "./components/FilterCheckboxesActor";
import FilterCheckboxesSource from "./components/FilterCheckboxesSource";
import FilterCheckboxesScenario from "./components/FilterCheckboxesScenario";
import FilterCheckboxesAdaptation from "./components/FilterCheckboxesAdaptation";

import moviesData from "./data/MoviesData"; // Import moviesData
import "./App.css";
import "./css/CtrAB.css";
import "./css/CtrC.css";
import "./css/CtrD.css";

const App = () => {
  const [movies, setMovies] = useState(moviesData);

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

  const actors = [
    "공민정",
    "김보연",
    "김옥빈",
    "공승연",
    "김상경",
    "김승호",
    "김미숙",
    "김진규",
    "김선영",
    "김상호",
    "김아중",
    "김윤석",
    "기주봉",
    "구교환",
    "고수",
    "권상우",
    "강민준",
    "김남길",
    "강소라",
    "강동원",
    "김영민",
    "김새벽",
    "김응수",
    "권해효",
    "곽도원",
    "김성규",
    "김영철",
    "김소희",
    "김미경",
    "YS",
    "김동욱",
    "구봉서",
    "강혜정",
    "김성옥",
    "강선희",
    "김병순",
    "고은아",
    "감우성",
    "김수철",
    "강하늘",
    "김정은",
    "강수연",
    "김우빈",
    "김의성",
    "강예원",
    "고현정",
    "김우성",
    "김가희",
    "김민희",
    "김영옥",
    "공효진",
    "김탄현",
    "김태리",
    "김하늘",
    "김해숙",
    "김향기",
    "김현숙",
    "김혜수",
    "김혜자",
    "김환희",
    "김효진",
    "김희선",
    "김희애",
    "나문희",
    "나카무라 유코",
    "남주혁",
    "노재신",
    "도금봉",
    "류덕환",
    "류승룡",
    "류승범",
    "류준열",
    "마동석",
    "문성근",
    "문소리",
    "문숙",
    "문승아",
    "문정숙",
    "민효린",
    "박보검",
    "박보영",
    "박성웅",
    "박소담",
    "박송열",
    "박영규",
    "박영서",
    "박원상",
    "박정민",
    "박중훈",
    "박진주",
    "박철민",
    "박해일",
    "방은진",
    "배두나",
    "배성우",
    "배유람",
    "배중식",
    "배창호",
    "백윤식",
    "변요한",
    "변희봉",
    "보이스오버",
    "봉태규",
    "설경구",
    "소지섭",
    "손석구",
    "손예진",
    "송강호",
    "송영창",
    "송중기",
    "신성일",
    "신하균",
    "신현종",
    "심은경",
    "심은하",
    "심혜진",
    "안길강",
    "안성기",
    "안소영",
    "안재홍",
    "안지혜",
    "양익준",
    "엄정화",
    "엄태웅",
    "여포",
    "염정아",
    "염혜란",
    "예수정",
    "오달수",
    "오우리",
    "옥자연",
    "원빈",
    "유순철",
    "유승호",
    "유아인",
    "유준상",
    "유지태",
    "유해진",
    "유호정",
    "윤경호",
    "윤계상",
    "윤문섭",
    "윤여정",
    "윤인자",
    "윤정희",
    "이기우",
    "이동휘",
    "이레",
    "이문식",
    "이미연",
    "이범수",
    "이병헌",
    "이선균",
    "이성경",
    "이성민",
    "이성재",
    "이솜",
    "이승현",
    "이시영",
    "이신영",
    "이영미",
    "이영애",
    "이은심",
    "이재인",
    "이정은",
    "이정재",
    "이정현",
    "이제훈",
    "이주영",
    "이준기",
    "이준혁",
    "이철민",
    "이해영",
    "이혜영",
    "이효제",
    "이희준",
    "임선우",
    "임수정",
    "임시완",
    "임은경",
    "임지호",
    "장동건",
    "장동휘",
    "장미희",
    "장백지",
    "장진영",
    "장혜진",
    "전도연",
    "전종서",
    "전지현",
    "전혜진",
    "정경호",
    "정려원",
    "정만식",
    "정성화",
    "정애화",
    "정우성",
    "정유미",
    "정은채",
    "정재영",
    "조승우",
    "조여정",
    "조연",
    "조우진",
    "조은지",
    "조인성",
    "조정석",
    "조진웅",
    "조한선",
    "주선태",
    "주진모",
    "지창욱",
    "진경",
    "차승원",
    "차태현",
    "천우희",
    "천호진",
    "최명길",
    "최민식",
    "최성은",
    "최수영",
    "최우식",
    "최은희",
    "최재성",
    "최준영",
    "탕웨이",
    "틸다 스윈튼",
    "하정우",
    "하지원",
    "한가인",
    "한석규",
    "한예리",
    "허장강",
    "허준호",
    "현빈",
    "황신혜",
    "황정민",
    "황정순",
  ];
  const directors = ["강대진", "봉준호", "강우석"];
  const sources = ["원작자1", "원작자2", "원작자3"];
  const scenarios = ["각본1", "각본2", "각본3"];
  const adaptations = ["각색1", "각색2", "각색3"];
  const characters = [
    "영화감독",
    "왕",
    "직업 여성",
    "북한군",
    "학생",
    "광대",
    "노인",
    "과부",
    "형사",
    "조폭",
    "가장",
    "청춘",
    "부인",
    "군인",
    "식모",
    "검사",
    "병사",
    "독립군",
    "변호사",
    "양아치",
    "장군",
  ];
  const keywords = [
    "가정",
    "가족",
    "결혼",
    "계급",
    "고독",
    "고백",
    "교육",
    "교훈",
    "내레이션",
    "노동",
    "당부",
    "도박",
    "독백",
    "밈",
    "반문",
    "범죄",
    "분단",
    "사랑",
    "사투리",
    "사회",
    "설득",
    "성역할",
    "세계",
    "세태",
    "섹스",
    "순애보",
    "술주정",
    "시간",
    "언어유희",
    "여성",
    "연애",
    "영화",
    "외국어",
    "외도",
    "욕망",
    "욕설",
    "유언",
    "이념",
    "이별",
    "인생",
    "인연",
    "전쟁",
    "정치",
    "종교",
    "지혜",
    "직업",
    "퀴어",
    "패러디",
    "학교",
    "항변",
    "허세",
  ];

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
    <div className="App">
      {/*  * * * * * * * 컨트롤러 * * * * * *  */}
      <section className="Controller">
        <section className="ContainerCtr">
          {/*  * * * * * * * CtrA * * * * * *  */}
          <section className="CtrA">
            {/* 연도 섹션 */}
            <div className="DecadesOuter">
              <h3 className="subtitle">
                DECADE
                <br />
                ⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙
                <br />
                ⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙
                <br />
                ⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙
              </h3>

              <div className="Decades filter-section">
                <FilterCheckboxesDecade
                  filters={["All", ...decades]}
                  onFilterChange={(filter, isChecked) =>
                    handleFilterChange("decade", filter, isChecked)
                  }
                />
              </div>
            </div>
            {/* 캐릭터 섹션 */}
            <div className="CharactersOuter">
              <div className="filter-section">
                <h3 className="subtitle">CHARACTER ⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙</h3>
                <FilterCheckboxesCharacter
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
            <div className="filter-section">
              <h3 className="subtitle">KEYWORD ⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙</h3>
              <FilterCheckboxesKeyword
                filters={keywords}
                onFilterChange={(filter, isChecked) =>
                  handleFilterChange("keyword", filter, isChecked)
                }
              />
            </div>
          </section>
          {/*  * * * * * * * CtrC * * * * * *  */}
          <section className="CtrC">
            {/* 감독 섹션 */}
            <div className="filter-section">
              <FilterCheckboxesDirector
                filters={directors}
                onFilterChange={(filter, isChecked) =>
                  handleFilterChange("director", filter, isChecked)
                }
              />
            </div>

            {/* 배우 섹션 */}
            <div className="filter-section">
              <FilterCheckboxesActor
                filters={actors}
                onFilterChange={(filter, isChecked) =>
                  handleFilterChange("actor", filter, isChecked)
                }
              />
            </div>

            {/* 원작자 섹션 */}
            <div className="filter-section">
              <FilterCheckboxesSource
                filters={sources}
                onFilterChange={(filter, isChecked) =>
                  handleFilterChange("source", filter, isChecked)
                }
              />
            </div>
            {/* 각본 섹션 */}
            <div className="filter-section">
              <FilterCheckboxesScenario
                filters={scenarios}
                onFilterChange={(filter, isChecked) =>
                  handleFilterChange("scenario", filter, isChecked)
                }
              />
            </div>
            {/* 각색 섹션 */}
            <div className="filter-section">
              <FilterCheckboxesAdaptation
                filters={adaptations}
                onFilterChange={(filter, isChecked) =>
                  handleFilterChange("adaptation", filter, isChecked)
                }
              />
            </div>
          </section>
          {/*  * * * * * * * CtrD * * * * * *  */}
          <section className="CtrD">
            {" "}
            <div className="SwitchOuter">
              <button className="BtnReset">
                🔁
                <br />
                RESET
              </button>
              <button className="BtnDarkLight">SWITCH</button>
            </div>
            <div className="DesignEditor">
              <div className="Editors">
                <h3 className="subtitle">
                  Design Editor ⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙⦙
                </h3>
                <div className="Editor">
                  <span className="Scope">ON</span>
                  <input
                    type="range"
                    className="EditorInput"
                    min="1"
                    max="10"
                    step="1"
                  />
                  <span className="Param">가장</span>
                </div>
                <div className="Editor">
                  <span className="Scope"> ON</span>
                  <input
                    type="range"
                    className="EditorInput"
                    min="1"
                    max="10"
                    step="1"
                  />
                  <span className="Param">검사</span>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
      {/*  * * * * * * * 영화 목록 * * * * * *  */}

      <section className="List">
        <div>
          <MovieList movies={movies} />
        </div>
      </section>
    </div>
  );
};

export default App;
