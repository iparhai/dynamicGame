import React,{ useState, useContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ProblemGenerator from './ProblemGenerator';
import Items from './Items';
import objects from './Data';
import GlobalState from '../../../HintsContext';
import './style.css'
const basket = ['animals','vehicles'];
const ran = basket[Math.floor(Math.random()*basket.length)];
// const ran = 'animals';
console.log(ran);


function PictographMostLeast(props){
    const [count,setCount] = useState([]);
    const [hintState, setHintState] = useContext(GlobalState);
    useEffect(() => {
          setHintState(` Count the objects that match with question and then select the answer`)
    });
    const animals = [{length:objects[0].Lion.length,name:'Lion'},{length:objects[0].Cat.length,name:'Cat'},{length:objects[0].Zebra.length,name:'Zebra'},{length:objects[0].Girrafe.length,name:'Girrafe'}];
    const vehicles = [{length:objects[1].Car.length,name:'Car'},{length:objects[1].Cycle.length,name:'Cycle'},{length:objects[1].Truck.length,name:'Truck'},{length:objects[1].Bike.length,name:'Bike'}];
    const question = [`Which ${ran} are most in number`,`Which ${ran} are least in number`];
    const qran = question[Math.floor(Math.random()*question.length)];
    const Counter = (obj) => {
        setCount([...count,obj.name])
    }
    const Check = (length) =>{
        console.log(length)
        if (qran == `Which ${ran} are most in number`) {
            if (length >= 6) {
                // alert('Pass')
                props.onCorrectAnswer();
            } else {
                // alert('Fail')
                props.onWrongAnswer();
            }
        }else if(qran == `Which ${ran} are least in number`){
            if (length <= 2) {
                // alert('Pass')
                props.onCorrectAnswer();
            } else {
                // alert('Fail')
                props.onWrongAnswer();
            }
        }
    }
    console.log(count)
    const Row1 = () => {
        if (ran == 'animals') {
            return (
                objects[0].Lion.map((obj, idx) => {
                    return <Items Key={idx} image={obj.img} count={()=>Counter(obj)} />
                })
            )
        } else if (ran == 'vehicles') {
            return (
                objects[1].Car.map((obj, idx) => {
                    return <Items Key={idx} image={obj.img} count={()=>Counter(obj)} />
                })
            )
        }
    }
    const Row2 = () => {
        if (ran == 'animals') {
            return (
                objects[0].Cat.map((obj, idx) => {
                    return <Items Key={idx} image={obj.img} count={()=>Counter(obj)} />
                })
            )
        } else if (ran == 'vehicles') {
            return (
                objects[1].Cycle.map((obj, idx) => {
                    return <Items Key={idx} image={obj.img} count={()=>Counter(obj)} />
                })
            )
        }
    }
    const Row3 = () => {
        if (ran == 'animals') {
            return (
                objects[0].Zebra.map((obj, idx) => {
                    return <Items Key={idx} image={obj.img} />
                })
            )
        } else if (ran == 'vehicles') {
            return (
                objects[1].Truck.map((obj, idx) => {
                    return <Items Key={idx} image={obj.img} />
                })
            )
        }
    }
    const Row4 = () => {
        if (ran == 'animals') {
            return (
                objects[0].Girrafe.map((obj, idx) => {
                    return <Items Key={idx} image={obj.img} />
                })
            )
        } else if (ran == 'vehicles') {
            return (
                objects[1].Bike.map((obj, idx) => {
                    return <Items Key={idx} image={obj.img} />
                })
            )
        }
    }
    const Answer = () => {
        if (ran == 'animals') {
            return (
                animals.map((obj, idx) => {
                return <button className='btnCheck' onClick={() => Check(obj.length)}>{obj.name}</button>
            })
            )
        } else if(ran == 'vehicles') {
            return (vehicles.map((obj, idx) => {
                return <button className='btnCheck' onClick={() => Check(obj.length)}>{obj.name}</button>
            })
            )
        }
    }
    return(
       <>
        <div className="Question"
            style={{
                width: '60vw',
                margin: '10% auto 1%',
                textAlign: 'center',
                backgroundColor: 'rgba(36,208,226,0.2)',
                borderRadius: '15px',
                padding: '5px',
            }}
        >
            <ProblemGenerator
                qran = {qran}
                ran = {ran}
            />
        </div>
        <div style={{width:'50vw',margin:'2% auto 1%'}}>
            <div style={{border:'none',width:'50vw',display:'flex'}}>
                <div className='div1'>{ran=='animals'?'Lion':'Car'}</div>
                <div className='div2'>
                    {Row1()}
                </div>
            </div>
            <div style={{border:'none',width:'50vw',display:'flex',marginTop:'1%'}}>
                <div className='div1'>{ran=='animals'?'Cat':'Cycle'}</div>
                <div className='div2'>
                    {Row2()}
                </div>
            </div>
            <div style={{border:'none',width:'50vw',display:'flex',marginTop:'1%'}}>
                <div className='div1'>{ran=='animals'?'Zebra':'Truck'}</div>
                <div className='div2'>
                    {Row3()}                    
                </div>
            </div>
            <div style={{border:'none',width:'50vw',display:'flex',marginTop:'1%'}}>
                <div className='div1'>{ran=='animals'?'Girrafe':'Bike'}</div>
                <div className='div2'>
                    {Row4()}
                </div>
            </div>
        </div>
        <div className='AnswerDiv'>
            {
               Answer()
            }
        </div>
       </>
    );
}

export default PictographMostLeast;