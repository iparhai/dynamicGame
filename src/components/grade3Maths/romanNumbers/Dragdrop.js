import React, { useState , createContext, useContext , useEffect}  from "react";
import Items from './items';
import './Dragdrop.css';
import { useDrop } from "react-dnd";
import { useSound } from 'use-sound';
import GlobalState from '../../HintsContext';
// importing stones
import one from './images/oneRoman.png';
import five from './images/fiveRoman.png';
import ten from './images/tenRoman.png';
import dropSound from '../Sounds/drop.wav';
import getURLParams from "../../../utils/getURLParams";

const dif = getURLParams.dif;

const stones = [
    {roman : 'I' , url : one},
    {roman : 'V' , url : five},
    {roman : 'X' , url : ten}
]

function addinBasket(basket,item,playRemoveEffect){
   playRemoveEffect() 
   return [...basket, item]
}
function Dragdrop(props){
    const [question,setQuestion] = useState([
        {num : 1,roman : 'I'},
        {num : 2,roman : 'II'},
        {num : 3,roman : 'III'},
        {num : 4,roman : 'IV'},
        {num : 5,roman : 'V'},
        {num : 6,roman : 'VI'},
        {num : 7,roman : 'VII'},
        {num : 8,roman : 'VIII'},
        {num : 9,roman : 'IX'},
        {num : 10,roman : 'X'},
        {num : 11,roman : 'XI'},
        {num : 12,roman : 'XII'},
        {num : 13,roman : 'XIII'},
        {num : 14,roman : 'XIV'},
        {num : 15,roman : 'XV'},
        {num : 16,roman : 'XVI'},
        {num : 17,roman : 'XVII'},
        {num : 18,roman : 'XVIII'},
        {num : 19,roman : 'XIX'},
        {num : 20,roman : 'XX'},
    ]);
    const [random,setRandom] = useState(Math.floor(Math.random()*question.length));
    const [RandomQuestion,setRandomQuestion] = useState(question[random].num);
    const [basket,setBasket] = useState([]);
    const [playbackRate, setPlaybackRate] = React.useState(0.5);
    const [playRemoveEffect] = useSound(dropSound,{ playbackRate ,volume: 0.2 });
    // const [dropSound] = useSound(trashSound);
    const [hintState, setHintState] = useContext(GlobalState);
    useEffect(() => {
        setHintState("Lets Drag roman numbers to create the pattern of the given number")
    });
    const [{ isOver }, dropRef] = useDrop({
        accept: 'stone',
        drop: (item) => setBasket((basket) => 
                            !basket.includes(item) ?  addinBasket(basket,item,playRemoveEffect): basket),
        collect: (monitor) => ({
            // isOver: playRemoveEffect()
        })
    });
    const makeCloseMessage = i => () => {
        // dropSound();
        playRemoveEffect();
        setBasket(
            basket.slice(0, i).concat(basket.slice(i + 1))
        );
        console.log(i)
      }
    // console.log(basket);
    return(
        <div>
            <div className="Question"
             style={{
                width: '60%',
                height : 'auto',
                margin : '8% auto 1%',
                textAlign : 'center',
                backgroundColor : 'rgba(36,208,226,0.2)',
                borderRadius :'15px',
                padding : '2%'
                }}
            >
                <h6>What will be the roman numeral for {RandomQuestion}?</h6>
            </div>
            {/* Basket Where stones are dropped */}
            <div className="myBasket" ref={dropRef}
                style ={{
                    width : '70%',
                    // border : '1px solid red',
                    height : '100px',
                    display: "flex",
                    justifyContent : 'center',
                    margin : '0 auto'
                }}
            >
                {
                    
                    basket.map((obj,idx)=>{
                        
                        return(
                            <Items 
                                roman={obj.roman}
                                url = {obj.url}
                                close={makeCloseMessage(idx)}
                            />
                        );
                    })
                }
                {isOver || <button className="pulse" style={{width:'10%',fontSize : '1.3em',color:'white',border:'none',borderRadius: "0.1em",}}>
                        <i className="fa fa-dropbox"></i>
                    </button>}
            </div>
            
            {/* dragable stones */}
            <div className="myStones" style ={{
                    width : '70%',
                    // border : '1px solid red',
                    // height : '20%',
                    display: "flex",
                    justifyContent : 'center',
                    margin : '30px auto',
                    cursor : 'grab'
                }}>
                {
                stones.map((obj,idx)=>{
                    return(
                        <Items 
                            roman={obj.roman}
                            url = {obj.url}
                        />
                    );
                })
                }
                <button className="Button"
            style={{
                background: "none",
                padding: "15px",
                border: "none",
                // borderRadius: "0.6em",
                color : 'white',
                fontSize : '50px',
                marginLeft: '15px'
            }}
            
            onClick={
                () => {
                    var total = '';
                    basket.forEach(item => {
                        total += item.roman;  
                    })
                    console.log(total);
                    if (total == question[random].roman) {
                        // alert('you Pass');
                        props.onCorrectAnswer();
                    } else{
                        // alert('you Fail')
                        props.onWrongAnswer();
                    }
                }
            }><i className="fa fa-paper-plane"></i></button>
            </div>
        </div>
    );
}

export default Dragdrop;