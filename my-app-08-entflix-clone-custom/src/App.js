import React from "react";

import Nav from "./components/Nav";
import HealthVideo from "./components/HealthVideo";
import HealthClass from "./components/HealthClass";
import Inform from "./components/Inform";
import BestCoach from "./components/BestCoach";
import Coaches from "./components/Coaches";
import Footer from "./components/Footer";

import "./static/css/App.css";

function App() {
  return (
    <div className="app">
      {/* Nav */}
      <Nav />

      {/* Inform */}
      <Inform />

      {/* Health Video */}
      <HealthVideo
        title="바나나먹는몽키님에게 추천되는 상체 발달 운동법 >"
        keyword="pushup posture"
      />

      {/* Health Class */}
      <HealthClass
        title="바나나먹는몽키님이 관심있을 만한 클래스 >"
        keyword="yoga class"
      />

      {/* Best Coach */}
      <BestCoach
        title="이달의 우수 PT 코치"
        bestCoach={{
          title: "태 영 휘 트 니 스",
          subtitle: "태영휘트니스 - 정태영",
          description: [
            "한국체육대학교 사회체육학부 스포츠청소년지도학과 졸업",
            "대한보디빌딩협회 지도자 2급",
            "생활체육지도자3급",
          ],
        }}
      />

      {/* Coaches */}
      <Coaches title="바나나먹는몽키님과 성향이 일치하는 코치 >" />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
