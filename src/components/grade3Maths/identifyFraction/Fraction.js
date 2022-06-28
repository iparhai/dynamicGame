import React, { useState, useContext, useEffect } from 'react';
import './Fraction.css'
// importing stone image
import bg_stone from './images/stone-01.png';
// importing component
import Stones from './Stones';
import ProblemGenerator from './ProblemGenerator';
import GlobalState from '../../HintsContext';

//numerator consists of odd numbers
const numerator = [];
for(var j=0;j<=20;j++){
  numerator.push(2*j+1);
}

// denominator consists of even numbers
const denominator=[];
for(var i=1;i<=21;i++){
  denominator.push(i*2);
}

// Function that maps numerator & denominator array in to fraction array 
const fraction1 = numerator.map((obj,idx)=>{
  return { n: obj, d: denominator[idx]}
})
// const Rindex = Math.floor(Math.random()*fraction1.length);

function Fraction(props) {
  const [Rindex, setRindex] = useState(parseInt(Math.random()*fraction1.length));
  console.log(fraction1)
  const [check,setCheck] = useState([]);
  const add=(obj1)=>{
    if(check.length == 0){
      setCheck([...check,obj1]);
    }else{
      setCheck([...check])
    }

  }
  const deleteObj=(idx)=>{
    setCheck(check.slice(0, idx).concat(check.slice(idx + 1)));
  }
  const [hintState, setHintState] = useContext(GlobalState);
  useEffect(() => {
        setHintState(` click on the fraction tile that is equals to ${fraction1[Rindex].n} by ${fraction1[Rindex].d}`)
  });
  console.log(check)
  const stoneStyle = {
    width:'6vw',
    height : '10vh',
    backgroundImage: `url(${bg_stone})`,
    backgroundSize : '100% 100%',
    margin:'2px',
    padding:'5px',
    color: 'white',
    fontSize: '70%',
    textAlign: 'center',
    fontWeight : 'bold'
    // borderRadius : '55px'
  }
  const displayStyle = {
    width:'60vw',
    height:'11vh',
    border : '4px dotted white',
    borderRadius : '12px',
    margin:'1vh auto 1vh',
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'center'
  }
  return (
    <div style={{position:'relative'}}>
      <div
        style={{
          width: '40vw',
          margin : '15vh auto 1vh',
          textAlign : 'center',
          backgroundColor : 'rgba(36,208,226,0.2)',
          borderRadius :'15px',
          padding : '5%'
        }}>
        <ProblemGenerator
          numerator={fraction1[Rindex].n}
          denominator={fraction1[Rindex].d}
        />
      </div>
      <div style={{...displayStyle}}>
        {
          check.map((obj,idx)=>{
            return(
              <Stones
                stoneOfStyle={stoneStyle}
                numerator={obj.n}
                denominator={obj.d}
                function={() => deleteObj(idx)}
              />
            );
          })
        }
      </div>

      <div className='StoneDiv'>
        {
        fraction1.map((obj,idx)=>{
          return(
            <Stones 
              stoneOfStyle = {stoneStyle}
              numerator = {obj.n}
              denominator = {obj.d}
              function = {()=>add(obj)}
            />
          );
        })
        }
      </div>

      {/* <div style={{width:'60%',display:'flex',justifyContent:'center',margin:'0 auto',padding:'5px'}}> */}
        <button
          className='resButton'
          style={{
            padding: '10px',
            fontSize: '30px',
            color: 'rgba(255,228,196)',
            border: 'none',
            backgroundColor: 'rgb(0,255,0)',
            borderRadius: '15px',
            boxShadow: '2px 2px rgba(255,228,196)'
          }}
          onClick={()=>{
            if((fraction1[Rindex].n == check[0].n)&&(fraction1[Rindex].d == check[0].d)){
              // alert('Passed')
              props.onCorrectAnswer();
            }else if((fraction1[Rindex].n !== check[0].n)&&(fraction1[Rindex].d !== check[0].d)){
              // alert('Fail')
              props.onWrongAnswer();
            }else{
              alert("drag some fraction");
            }
          }}
          ><i className='fa fa-paper-plane'></i></button>
      {/* </div> */}
    </div>
  );
}

export default Fraction;