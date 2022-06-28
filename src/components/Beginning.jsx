import React from "react";
import PropTypes from 'prop-types'
import getURLParams from "../utils/getURLParams";

class Beginning extends React.Component {
  state = {
    msg: 3,
    countDownSound: new Audio(this.props.soundEffect[0])
  };
  intervalRef;
  read = {
    e: "GO",
    u: "چلو",
    a: "اذهب",
    p: "لاړ شه",
    k: "가다"
  }
  componentDidMount() {
    this.intervalRef = setInterval(() => this.setState(this.handleCount), 1000);
    console.log(this.state.msg);
  }
  handleCount = prevState => {
    if (prevState.msg === 1) {
      if (getURLParams.lang == 'u')
        return { msg: this.read.u }

      else if (getURLParams.lang == "a")
        return { msg: this.read.a }

      else if (getURLParams.lang == "p")
        return { msg: this.read.p }
      else if (getURLParams.lang == "k")
        return { msg: this.read.k }
      else
        return {msg : this.read.e}
    }

    if (prevState.msg === "GO" || prevState.msg === "چلو" || prevState.msg == "اذهب" || prevState.msg == "لاړ شه" || prevState.msg == "가다") {
      return { msg: undefined };
    }
    return { msg: prevState.msg - 1 };
  };

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.msg === undefined) {
      clearInterval(this.intervalRef);
      this.props.isComplete();
      return false;
    }
    return true;
  }

  componentWillUnmount() {
    clearInterval(this.intervalRef);
  }
  getReady = {
    e: "GET READY...",
    u: "...تیار ہو جاؤ",
    a: "...إستعد",
    p: "...چمتو اوسه",
    k: "준비해..."
  }

  
  render() {
    { getURLParams.lang == 'e' && this.state.countDownSound.play() }
    return (
      <div>
        <h3>{getURLParams.lang == 'u' ? this.getReady.u :
          getURLParams.lang == "a" ? this.getReady.a :
            getURLParams.lang == "p" ? this.getReady.p :
              getURLParams.lang == "k" ? this.getReady.k : this.getReady.e} </h3>
        <h1>{this.state.msg}</h1>
      </div>
    );
  }
}
Beginning.propTypes = {
  isComplete: PropTypes.func.isRequired,
}

export default Beginning;
