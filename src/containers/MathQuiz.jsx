import React from 'react';
import Beginning from "../components/Beginning";
import Quiz from "../components/Quiz";
import Done from "../components/Done";
import Timmer from '../components/Timmer';
import Lifes from '../components/Lifes'
import Points from '../components/Points'
import "./MathQuiz.css"
import TableScore from '../components/TableScore';
import Loader from '../components/loader';
import Hints from '../components/Hints';
import GlobalState from '../components/HintsContext';
import { useEffect } from 'react';
import getAsset from '../utils/getAsset';
import getURLParams from '../utils/getURLParams';
import TutorialContext from '../components/TutorialContext';
// import Hints from '../components/Hints';


// class MathQuiz extends React.Component {


//   pauseSound = () => {

//   }


//   render() {
//   }
// }

// export default MathQuiz;


export default function MathQuiz(props) {

  const [isBeginningDone, setIsBeginningDone] = React.useState(false)
  const [isLoadingDone, setIsLoadingDone] = React.useState(false)
  const [lastPoints, setLastPoints] = React.useState(0)
  const [sound, setDound] = React.useState(new Audio(props.backgroundMusic))
  const [mute, setMute] = React.useState(false)
  const [provider, setProvider] = React.useState("")
  const [tutorial, setTutorial] = React.useState(getURLParams.tutorial == "0" ? false : true)

  const retryGame = () => {
    setIsBeginningDone(false)
    props.onRetryGame();
  }
  useEffect(() => {
    console.log("this is the provider ????? " + provider)
  }, [provider])
  const completeBeginning = () => {
    setIsBeginningDone(true)
  };
  const completeLoading = () => {
    setIsLoadingDone(true)
  }

  const handleSoundClick = () => {
    if (!sound.paused) {
      sound.pause()
      setMute(true)
    }
    else if (sound.paused) {
      sound.play()
      setMute(false)
    }
  }
  return (
    !props.isFinished ? (
      <GlobalState.Provider value={[provider, setProvider]}>
        <TutorialContext.Provider value={[tutorial, setTutorial]} >
          <div>
            {!isLoadingDone ? <Loader isComplete={completeLoading} /> : !isBeginningDone ? (
              <Beginning isComplete={completeBeginning} soundEffect={props.soundEffect} />
            ) : (
              <div className="noselect ">
                {/* <img src={this.state.images.map()} alt="learning" /> */}
                <div className="App-header-bar">
                  <span onClick={handleSoundClick}>
                    {mute ? <i className="fas fa-volume-mute" /> : <i className="fa fa-volume-up " />}
                  </span>
                  <Timmer {...props} />
                  <Lifes {...props} />
                  <Points {...props} />
                  {getURLParams.learn == "1" ? <Hints soundEffect={props.soundEffect} /> : null}

                  {/* 
              <span onClick={this.props.handleLanguageSwitch}>
                {this.props.isUrdu ? <i class="fa fa-language " aria-hidden="true" style={{color : "black"}}>اردو</i> : <i class="fa fa-language" aria-hidden="true" style={{color : "black"}}>English</i>}
              </span> */}
                </div>
                <div>
                  <Quiz {...props} objectList={props.objectList} soundEffect={props.soundEffect} />
                </div>
              </div>
            )}
          </div>
        </TutorialContext.Provider>
      </GlobalState.Provider>
    ) : (

      <Done {...props} retryGame={retryGame} isUrdu={props.isUrdu} >
        <TableScore {...props} />
      </ Done>
    )
  )
}
