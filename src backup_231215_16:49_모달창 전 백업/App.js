import React, { useState, BrowserRouter as Router, Route, Switch } from "react";

import MovieList from "./components/MovieList";
import FilterDecade from "./components/FilterDecade";
import FilterCharacter from "./components/FilterCharacter";
import FilterKeyword from "./components/FilterKeyword";
import FilterDirector from "./components/FilterDirector";
import FilterActor from "./components/FilterActor";
import FilterSource from "./components/FilterSource";
import FilterScenario from "./components/FilterScenario";
import FilterAdaptation from "./components/FilterAdaptation";

import moviesData from "./data/MoviesData";

import "./App.css";
import "./css/Controller.css";
import "./css/Decade.css";
import "./css/Character.css";
import "./css/Keyword.css";
import "./css/People.css";
import "./css/SwitchAndDesignEditor.css";

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
  const directors = [
    "강대진",
    "강우석",
    "강윤성",
    "강형철",
    "곽경택",
    "곽재용",
    "권칠인",
    "김경형",
    "김광식",
    "김기덕",
    "김기영",
    "김대승",
    "김도영",
    "김미조",
    "김병서",
    "김보라",
    "김성수",
    "김성훈",
    "김세인",
    "김수용",
    "김양희",
    "김용균",
    "김용화",
    "김용훈",
    "김종관",
    "김지운",
    "김지훈",
    "김창주",
    "김청기",
    "김초희",
    "김태균",
    "김태용",
    "김한민",
    "김현석",
    "김희정",
    "나홍진",
    "남궁선",
    "남기남",
    "류승완",
    "문소리",
    "민규동",
    "박광수",
    "박광현",
    "박누리",
    "박동훈",
    "박상호",
    "박송열",
    "박종원",
    "박지완",
    "박찬옥",
    "박찬욱",
    "박헌수",
    "박훈정",
    "방은진",
    "배창호",
    "변성현",
    "변영주",
    "봉준호",
    "부지영",
    "석래명",
    "손재곤",
    "송능한",
    "송해성",
    "신상옥",
    "신한솔",
    "양우석",
    "엄유나",
    "연상호",
    "오기환",
    "오승욱",
    "우민호",
    "원신연",
    "유하",
    "유현목",
    "윤가은",
    "윤성현",
    "윤제균",
    "윤종빈",
    "이경미",
    "이만희",
    "이명세",
    "이병헌",
    "이봉래",
    "이상용",
    "이석훈",
    "이성구",
    "이승원",
    "이옥섭",
    "이완민",
    "이용주",
    "이원석",
    "이일형",
    "이장호",
    "이재규",
    "이재한",
    "이정범",
    "이정재",
    "이정향",
    "이종석",
    "이준익",
    "이지은",
    "이창동",
    "이한",
    "이해영",
    "이해준",
    "임대형",
    "임상수",
    "임선애",
    "임순례",
    "임오정",
    "임찬상",
    "장선우",
    "장유정",
    "장윤현",
    "장재현",
    "장준환",
    "장진",
    "장항준",
    "장현수",
    "장훈",
    "전고운",
    "정가영",
    "정다원",
    "정윤수",
    "정윤철",
    "정인엽",
    "정재은",
    "정주리",
    "조근식",
    "조의석",
    "최국희",
    "최동훈",
    "최윤태",
    "최호",
    "추창민",
    "하길종",
    "한가람",
    "한재림",
    "한준희",
    "한형모",
    "허진호",
    "홍상수",
    "홍성은",
    "홍원찬",
    "홍은원",
    "황동혁",
  ];
  const sources = [
    "공지영",
    "구본한",
    "권비영",
    "귀여니",
    "김광림",
    "김대우",
    "김려령",
    "김세영",
    "김영수",
    "김지운",
    "김지헌",
    "김충식",
    "김태웅",
    "김호식",
    "김훈",
    "김희창",
    "모홍진",
    "무라카미 하루키",
    "미네기시 노부야키",
    "미야베 미유키",
    "박상연",
    "박영한",
    "박하",
    "박현욱",
    "뱅자맹 르그랑",
    "사라 워터스",
    "소재원",
    "아사다 지로",
    "에밀 졸라",
    "오영수",
    "오종우",
    "윤석주",
    "윤태호",
    "이가리시 다이스케",
    "이동철",
    "이만교",
    "이문열",
    "이범선",
    "이어령",
    "이지형(원안)",
    "이청준",
    "이현세",
    "자크 로브",
    "장 마르크 로셰트",
    "장유정",
    "장진",
    "장현도",
    "정비석",
    "조근식(원안)",
    "조남주",
    "조흔파",
    "주요섭",
    "주호민",
    "차범석",
    "최인호",
    "츠이야 가롱",
    "파올로 제노베제",
    "하일지",
    "허영만",
    "황석영",
    "후안 타라투토",
  ];
  const scenarios = [
    "강윤성",
    "강제규",
    "강지원",
    "강형철",
    "고은님",
    "곽경택",
    "곽일로",
    "곽재용",
    "구교환",
    "권성휘",
    "김경찬",
    "김광식",
    "김기영",
    "김다영",
    "김동우",
    "김동혁",
    "김미조",
    "김민석",
    "김민성",
    "김민수",
    "김보라",
    "김성민",
    "김성홍",
    "김성훈",
    "김세겸",
    "김세인",
    "김양희",
    "김용균",
    "김용화",
    "김용훈",
    "김은정",
    "김은희",
    "김정민",
    "김종관",
    "김중",
    "김지운",
    "김지혜",
    "김지훈",
    "김창주",
    "김초희",
    "김태균",
    "김태용",
    "김한민",
    "김해곤",
    "김현덕",
    "김현석",
    "김현정",
    "김휘",
    "김희정",
    "나현",
    "나홍진",
    "남궁선",
    "노혜영",
    "동희선",
    "류승완",
    "류용재",
    "류장하",
    "문소리",
    "문지원",
    "문충일",
    "민규동",
    "민동현",
    "박광현",
    "박누리",
    "박리다매",
    "박송열",
    "박수진",
    "박연선",
    "박은교",
    "박은영",
    "박정예",
    "박정우",
    "박종대",
    "박종원",
    "박주석",
    "박지성",
    "박지완",
    "박찬옥",
    "박찬욱",
    "박헌수",
    "박훈정",
    "배세영",
    "배창호",
    "백결",
    "백승재",
    "백철현",
    "변성현",
    "변승현",
    "변영주",
    "봉준호",
    "사무엘",
    "서유민",
    "서윤성",
    "서혜림",
    "성기영",
    "소재원",
    "손재곤",
    "손태웅",
    "송능한",
    "송예진",
    "송지호",
    "송해성",
    "송혜진",
    "신경일",
    "신동익",
    "신동환",
    "신봉승",
    "신연식",
    "신준호",
    "신한솔",
    "심산",
    "심성보",
    "안상훈",
    "안영수",
    "양우석",
    "엄성민",
    "엄유나",
    "연상호",
    "오승욱",
    "오승현",
    "오정미",
    "왕혜지",
    "우민호",
    "원향",
    "유동훈",
    "유승희",
    "유영아",
    "유일수",
    "유하",
    "윤가은",
    "윤덕원",
    "윤성현",
    "윤시몬",
    "윤제균",
    "윤종빈",
    "윤진호",
    "윤현호",
    "윤홍기",
    "이경미",
    "이경의",
    "이공주",
    "이기철",
    "이나라",
    "이만희",
    "이명세",
    "이문웅",
    "이병헌",
    "이송원",
    "이숙연",
    "이승원",
    "이옥섭",
    "이완민",
    "이용재",
    "이용주",
    "이원석",
    "이원재",
    "이원형",
    "이일형",
    "이장호",
    "이재순",
    "이재한",
    "이정범",
    "이정선",
    "이정재",
    "이정향",
    "이종용",
    "이지민",
    "이지은",
    "이지형",
    "이창동",
    "이한얼",
    "이해영",
    "이해준",
    "이형표",
    "임대형",
    "임상수",
    "임선애",
    "임성순",
    "임순례",
    "임오정",
    "임종재",
    "임준형",
    "임찬상",
    "임희재",
    "장국진",
    "장덕균",
    "장민석",
    "장선우",
    "장윤현",
    "장재현",
    "장준환",
    "장진",
    "장현수",
    "전고운",
    "전범성",
    "전철홍",
    "정가영",
    "정겨운",
    "정다원",
    "정서경",
    "정소영",
    "정윤섭",
    "정윤철",
    "정재은",
    "정주리",
    "정지우",
    "정진완",
    "정하용",
    "조명주",
    "조승희",
    "조의석",
    "조중훈",
    "조철현",
    "지상학",
    "차우진",
    "채윤석",
    "천진우",
    "최근호",
    "최동훈",
    "최석환",
    "최성현",
    "최윤태",
    "최인석",
    "최인호",
    "최호",
    "추남",
    "추식",
    "켈리 매스터슨",
    "하수진",
    "하준원",
    "한가람",
    "한경현",
    "한기현",
    "한아름",
    "한주희",
    "한준희",
    "한진원",
    "허성혜",
    "허인석",
    "허진호",
    "홍상수",
    "홍성은",
    "홍원찬",
    "홍윤정",
    "황동혁",
    "황성구",
    "황조윤",
  ];
  const adaptations = [
    "강건향",
    "강대규",
    "강유선",
    "곽정덕",
    "권혁재",
    "권효진",
    "김경찬",
    "김경형",
    "김다영",
    "김도영",
    "김동한",
    "김성민",
    "김성욱",
    "김승옥",
    "김영하",
    "김유진",
    "김인성",
    "김정곤",
    "김정훈",
    "김주호",
    "김준식",
    "김지운",
    "김지혜",
    "김진",
    "김창훈",
    "김창훈",
    "김한민",
    "김형주",
    "김효민",
    "노혜영",
    "류승완",
    "류훈",
    "마대윤",
    "마동석",
    "마동석",
    "민소연",
    "민소연",
    "민예지",
    "박수진",
    "박은교",
    "박정수",
    "박정수",
    "방은진",
    "배세영",
    "백경윤",
    "부지영",
    "서신혜",
    "서용호",
    "신동선",
    "신미혜",
    "신수정",
    "신현진",
    "신현진",
    "안성현",
    "양준호",
    "엄세윤",
    "여미정",
    "오기환",
    "오세혁",
    "원신연",
    "유성협",
    "유한철",
    "윤삼육",
    "윤순용",
    "윤제균",
    "윤제균",
    "윤제균",
    "윤제균",
    "윤필준",
    "윤홍기",
    "이광재",
    "이기성",
    "이병헌",
    "이상용",
    "이상용",
    "이상용",
    "이상우",
    "이석근",
    "이석훈",
    "이성호",
    "이수진",
    "이승연",
    "이신호",
    "이영종",
    "이영종",
    "이우정",
    "이원재",
    "이이령",
    "이인성",
    "이일형",
    "이재규",
    "이정범",
    "이정욱",
    "이정욱",
    "이정화",
    "이정화",
    "이종기",
    "이종석",
    "이청기",
    "이한",
    "이한",
    "이해영",
    "이해제",
    "이해준",
    "이해준",
    "이희우",
    "임순례",
    "임희재",
    "장민석",
    "장민혁",
    "장유정",
    "장준환",
    "장항준",
    "장항준",
    "장훈",
    "정우철",
    "정윤수",
    "정의목",
    "정재웅",
    "정준환",
    "조남사",
    "조슬예",
    "지상학",
    "진경",
    "최관영",
    "최관영",
    "최동훈",
    "최석환",
    "최진원",
    "추창민",
    "하일지",
    "한동욱",
    "한우정",
    "한재덕",
    "한재림",
    "허다중",
    "홍용호",
    "홍원찬",
    "황동혁",
    "황조윤",
  ];
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

                <div className="Editor">Style 1</div>
                <div className="Editor">Style 2</div>
                <div className="Editor">Style 3</div>
                <div className="Editor">Style 4</div>
                <div className="Editor">Style 5</div>
                <div className="Editor">Style 6</div>
              </div>
            </div>
          </section>
        </section>
      </section>

      {/*  * * * * * * * 영화 목록 * * * * * *  */}

      <section className="List">
        <div>
          <MovieList movies={movies} textSize={textSize} />
        </div>
      </section>
    </div>
  );
};

export default App;
