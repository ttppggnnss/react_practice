import React from "react";
import "../static/css/Inform.css";
import bodyStyle01 from "../static/image/bodyForm/form-style01.svg";
import pentaGraph from "../static/image/penta-graph.gif";
import contributionGraph from "../static/image/contribution-graph.jpg";

function Inform() {
  // function truncate(str, n) {
  //   return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  // }

  return (
    // background image
    <header className="inform">
      <div className="part">
        <img src={bodyStyle01} alt="bodyStyle" className="body-style" />
        <span className="body-rank">⭐⭐⭐</span>
      </div>
      <div className="part">
        <span className="body-name">하체발달형</span>
        <span className="body-description">
          바나나먹는몽키님은 대한민국에서 상위 35%에 속해있습니다. 현재 고객님의
          하체근력은 상당히 많이 발달했지만 BMI 지수가 조금 높아 식단조절과
          운동을 병행해야 되요. 또한, 팔과 상체 발달점수가 전체 점수에 비해 낮기
          때문에 저희 PTS는 상체 위주의 운동 코스를 추천드려요.
        </span>
      </div>
      <div className="part">
        <img src={pentaGraph} alt="penta-graph" className="penta-graph" />
      </div>
      <div className="part">
        <img
          src={contributionGraph}
          alt="contribution-graph"
          className="contribution-graph"
        />
      </div>
    </header>
  );
}

export default Inform;
