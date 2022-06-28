import React from 'react';
import Button from '../components/Button';
// import Input from '../components/Input';
import { Session } from '../utils/storage'
import ReactTypingEffect from 'react-typing-effect';
import getURLParams from '../utils/getURLParams';


class Start extends React.Component {

    state = {
        player: "player",
        startGameSound: new Audio(this.props.soundEffect[3]),
    }
    setNameOfPlayer = (event) => {
        this.setState({ player: event.target.value })
    }
    clicked = () => {
        Session.set("onlinePlayer", this.state.player)
        this.state.startGameSound.pause()
        this.props.startPressed();
    }
    startGamePrompt = {
        e: "Press to start the game",
        u: "گیم شروع کرنے کے لیے بٹن دبائیں۔",
        a: "اضغط لبدء اللعبة",
        p: "د لوبې پیل کولو لپاره فشار ورکړئ",
        k: "게임을 시작하려면 누르세요"
    }
    startPrompt = {
        e: "Start",
        u: "شروع کریں",
        a: "يبدأ",
        p: "پیل",
        k: "시작"
    }
    render() {
        {
            getURLParams.lang == 'e' ? (
                this.state.startGameSound.play()
            ) :
                (
                    this.state.startGameSound.pause()
                )
        }
        return (
            <div >
                <div className="App-brandname">
                    <i className="fas fa-graduation-cap"></i>
                    <br />
                </div>
                <p>
                    {getURLParams.lang == 'u' ? this.startGamePrompt.u :
                        getURLParams.lang == "a" ? this.startGamePrompt.a :
                            getURLParams.lang == "p" ? this.startGamePrompt.p :
                                getURLParams.lang == "k" ? this.startGamePrompt.k : this.startGamePrompt.e}
                </p>
                <Button isClicked={this.clicked}>{getURLParams.lang == 'u' ? this.startPrompt.u :
                    getURLParams.lang == "a" ? this.startPrompt.a :
                        getURLParams.lang == "p" ? this.startPrompt.p :
                            getURLParams.lang == "k" ? this.startPrompt.k : this.startPrompt.e}</Button>
            </div>
        )
    }
}
export default Start;