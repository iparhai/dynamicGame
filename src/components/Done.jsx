import React from "react";
import PropTypes from 'prop-types'
import getURLParams from "../utils/getURLParams";

const style = {
  buttonRetry: {
    fontSize: "1.5em",
    color: "white",
    fontFamily: "fantasy",
    cursor: "pointer"
  },
  otherButton: {
    color: "white",
    fontFamily: "fantasy",
    cursor: "pointer",
    fontSize: "1em",
    margin: "0.1em auto 3em"
  },
  divider: {
    height: 0,
    border: "0.5px solid #61dafb"
  },
  poinstStyle: {
    color: "black",
    fontWeight: "bold"
  }
};

class Done extends React.Component {
  gameOverEnglish = "GAME OVER"
  gameOverUrdu = "!!!کھیل ختم"

  finalScoreEnglish = "FINAL SCORE"
  finalScoreUrdu = "حتمی اسکور"

  retryEnglish = "RETRY"
  retryUrdu = "دوبارہ کوشش کریں"

  finalScore = {

    e: "FINAL SCORE",
    u: "آخری سکور",
    a: "النتيجة النهائية",
    p: "وروستۍ نمرې",
    k: "최종 점수"

  }
  gameOver = {

    e: "GAME OVER",
    u: "کھیل ختم",
    a: "انتهت اللعبة",
    p: "د لوبې پای",
    k: "게임 끝"

  }
  retry = {
    e: "RETRY",
    u: "دوبارہ کوشش کریں۔",
    a: "أعد المحاولة",
    p: "بیا هڅه وکړئ",
    k: "다시 해 보다"
  }
  render() {
    const { divider, buttonRetry, otherButton, poinstStyle } = style;
    return (
      <div>
        <h1>{getURLParams.lang == 'u' ? this.gameOver.u :
          getURLParams.lang == "a" ? this.gameOver.a :
            getURLParams.lang == "p" ? this.gameOver.p :
              getURLParams.lang == "k" ? this.gameOver.k : this.gameOver.e}</h1>
        <hr style={divider} />
        <h3>
          {getURLParams.lang == 'u' ? this.finalScore.u :
            getURLParams.lang == "a" ? this.finalScore.a :
              getURLParams.lang == "p" ? this.finalScore.p :
                getURLParams.lang == "k" ? this.finalScore.k : this.finalScore.e} <b style={poinstStyle}>{this.props.points}</b>
        </h3>
        <br />
        <h3 style={buttonRetry} onClick={this.props.retryGame}>
          {getURLParams.lang == 'u' ? this.retry.u :
            getURLParams.lang == "a" ? this.retry.a :
              getURLParams.lang == "p" ? this.retry.p :
                getURLParams.lang == "k" ? this.retry.k : this.retry.e}
        </h3>
        {/* <h5 style={otherButton} onClick={this.props.onReStartGame}>
        Another player
      </h5> */}
        {this.children}
      </div>
    );
  }
}

Done.propTypes = {
  points: PropTypes.number.isRequired,
  retryGame: PropTypes.func.isRequired,
  onReStartGame: PropTypes.func.isRequired
}

export default Done;
