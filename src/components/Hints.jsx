import React, { useContext } from "react";
import { useEffect } from "react";
import './Hints.css'
import $ from "min-jquery";

// import onClickOutside from 'react-onclickoutside'
import GlobalState from "./HintsContext";
import getURLParams from "../utils/getURLParams";
// import instructionGIF from '../assets/gif/instructions.gif'
function Hints(props) {
    const [hint, setHint] = useContext(GlobalState);
    const [showHint, setShowHint] = React.useState(true)
    const [complete, setComplete] = React.useState(false)
    const [hintAudio, setHintAudio] = React.useState(null)
    const toggleHint = (value) => {
        setShowHint(value)
    }
    useEffect(() => {
        // const values = "http://172.16.57.32/dynamic"
        if (!hintAudio) return;
        hintAudio.play()
    }, [])
    useEffect(() => {
        // if (!hint || hint.length == 0) return
        if (!hint || hint.length == 0) return
        const islamicGreetings = getURLParams.lang == 'u' || getURLParams.lang == "a" ||
            getURLParams.lang == "p" || getURLParams.lang == "e" ? "Assalamualaikum Learner!" :
            ""
        $.ajax({
            url: `https://nano-softs.com/iParhai/audioCheck/audio.php?tkn=0x39075829057823769567243697826971657864378&lang=${getURLParams.lang}&text=${islamicGreetings} + ${hint}`,
            type: "get",
            complete: function (response) {
                setComplete(true)
            },
            error: function (err) {
                console.log(err)
            }
        });
    }, [hint])

    // english [lang=en]
    // arabic [lang=ar]
    // urdu [lang=ur]

    useEffect(() => {
        const url = "https://nano-softs.com/iParhai/audioCheck/combined.mp3?id=" + Math.random()
        if (complete) {
            setHintAudio(new Audio(url))
        }
    }, [complete])

    useEffect(() => {
        // hintAudio.setAttribute('id','audioIntro2');
        if (!hintAudio) return
        if (!showHint) hintAudio.pause()
        else hintAudio.play()
    }, [showHint])

    useEffect(() => {
        if (!hintAudio) return
        console.log(hintAudio)
        hintAudio.play()
    }, [hintAudio])

    if (hintAudio) {
        hintAudio.onended = () => {
            setShowHint(false)
        }
    }
    const hintText = {
        e: "Hint",
        u: "اشاره",
        a: "تَلمِيح",
        p: "اشاره"
    }
    return (
        <div>
            {showHint ? <i onClick={() => { toggleHint(!showHint) }} className="fa fa-pause"> &nbsp; {
                getURLParams.lang == 'u' ? hintText.u :
                    getURLParams.lang == "a" ? hintText.a :
                        getURLParams.lang == "p" ? hintText.p : hintText.e
            }</i>
                : <i onClick={() => { toggleHint(!showHint) }} className="fa fa-play"> &nbsp; {
                    getURLParams.lang == 'u' ? hintText.u :
                        getURLParams.lang == "a" ? hintText.a :
                            getURLParams.lang == "p" ? hintText.p : hintText.e
                }</i>}
        </div>
    );
}


export default Hints;
{/* <div >
{showHint &&
    <div class="thought " onClick={() => { toggleHint(!showHint) }} style={{ top: "0", left: "0", width: "100%", height: "100%", backgroundColor: "rgba(0,0,0,0.9)", color: "red", zIndex: 5 }}>
        <img src={instructionGIF} style={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                margin: "auto",
                maxWidth: "800px",
                width: "60%",
                position: "absolute"
            }} />
    </div>}
</div> */}