import React, {useContext, useEffect} from 'react';
import egg from './egg.png';
import Items from './Items';
import ProblemGenerator from './ProblemGenerator';
import GlobalState from '../../../HintsContext';
import getURLParams from "../../../../utils/getURLParams";
import './style.css'


let dif = getURLParams.dif;
let objects = [
    [{ name: '1', img: egg }]
    ,
    [{ name: '2', img: egg }, { name: '2', img: egg }, { name: '2', img: egg }, { name: '2', img: egg }, { name: '2', img: egg }]
    ,
    [{ name: '3', img: egg }, { name: '3', img: egg }, { name: '3', img: egg }, { name: '3', img: egg }, { name: '3', img: egg }, { name: '3', img: egg }, { name: '3', img: egg }]
    ,
    [{ name: '4', img: egg }, { name: '4', img: egg }, { name: '4', img: egg }, { name: '4', img: egg }, { name: '4', img: egg }, { name: '4', img: egg }, { name: '4', img: egg }, { name: '4', img: egg }, { name: '4', img: egg }]
];
// objects = objects.sort(() => 0.5 - Math.random(0))

// const days = ['first', 'last', 'first two', 'last two'];
// const randomDays = days[Math.floor(Math.random() * days.length)];
        // const question = [
        //     `How many eggs are sold on the ${randomDays} day?`,
        //     `On which day the least number of eggs are sold?`,
        //     `What is the difference in the number of eggs sold in last two days?`];
        // const randomQuestions = question[Math.floor(Math.random() * question.length)];

export default function PictoShop(props) {
    const [days, setDays] = React.useState([
        'first', 'last', 'first two', 'last two'
    ])
    const [randomDays, setRandomDays] = React.useState(days[Math.floor(Math.random()*days.length)]);
    const [question, setQuestion] = React.useState(
        [
                `How many eggs are sold on the ${randomDays} day?`,
                `On which day the least number of eggs are sold?`,
                `What is the difference in the number of eggs sold in last two days?`]
    );
    
    const [randomQuestions, setRandomQuestions] = React.useState(question[Math.floor(Math.random()*question.length)]);

    const [value, setValue] = React.useState(0);
    const optionDays = ['Day1', 'Day2', 'Day3', 'Day4']
    const Increment = () => {
        dif == 'a'?
        setValue(value + 5)
        :
        setValue(value + 1)
    }
    const Decrement = () => {
        if (value > 0) {
            dif == 'a'?
            setValue(value + 5)
            :
            setValue(value + 1)
        }
        else {
            setValue(value)
        }
    }
    const difficulty = dif=='b'?2:dif=='i'?3:5;
    const [hintState, setHintState] = useContext(GlobalState);
    useEffect(() => {
          setHintState(` Read the word problem and solve the problem. Here each egg refers to five eggs `)
    });
    const Check = (obj) => {
        let firstDay = ((objects[0].length) * difficulty);
        let secondDay = ((objects[1].length) * difficulty);
        let thirdDay = ((objects[2].length) * difficulty);
        let fourthDay = ((objects[3].length) * difficulty);
        // console.log(fourthDay)
        if ((randomQuestions == `How many eggs are sold on the ${randomDays} day?`) && (randomDays == 'first')) {
            if (value == firstDay) {
                //    return alert('Pass')
                return props.onCorrectAnswer()
            }
            // return alert('Fail')
            return props.onWrongAnswer()
        }
        else if ((randomQuestions == `How many eggs are sold on the ${randomDays} day?`) && (randomDays == 'last')) {
            if (value == fourthDay) {
                //    return alert('Pass')
                return props.onCorrectAnswer()
            }
            // return alert('Fail')
            return props.onWrongAnswer()
        }
        else if ((randomQuestions == `How many eggs are sold on the ${randomDays} day?`) && (randomDays == 'first two')) {
            if (value == firstDay + secondDay) {
                //    return alert('Pass')
                return props.onCorrectAnswer()
            }
            // return alert('Fail') 
            return props.onWrongAnswer()
        }
        else if ((randomQuestions == `How many eggs are sold on the ${randomDays} day?`) && (randomDays == 'last two')) {
            if (value == thirdDay + fourthDay) {
                //    return alert('Pass')
                return props.onCorrectAnswer()
            }
            // return alert('Fail') 
            return props.onWrongAnswer()
        }
        else if (randomQuestions == `What is the difference in the number of eggs sold in last two days?`) {
            if (value == fourthDay-thirdDay) {
                //    return alert('Pass')
                return props.onCorrectAnswer()
            }else{
                //    return alert('Fail')
                return props.onWrongAnswer()
            }
        }
        else if (randomQuestions == `On which day the least number of eggs are sold?`) {
            if (obj == 'Day1') {
                //    return alert('Pass')
                return props.onCorrectAnswer()
            }
            //    return alert('Fail')
            return props.onWrongAnswer()
        }

    }
    
    return (
        <>
            <div className="Question"
                style={{
                    width: '60vw',
                    margin: '10% auto 0%',
                    textAlign: 'center',
                    backgroundColor: 'rgba(36,208,226,0.2)',
                    borderRadius: '15px',
                    paddingTop: '20px',
                    paddingBottom: '20px',
                }}
            >
                <ProblemGenerator
                    question={randomQuestions}
                />
            </div>
            <div className='Hint'>
                <i class="fa fa-bullhorn" aria-hidden="true"></i> Here 1 egg means {difficulty} eggs
            </div>
            <div style={{ width: '50vw', margin: '2% auto 0%' }}>
                {
                    objects.map((obj,idx)=>{
                        return(
                            <div style={{ border: 'none', width: '50vw', display: 'flex' , margin:'1%'}}>
                                <div className='div1'>
                                    Day
                                </div>
                                <div className='div2'>
                                    {
                                        obj.map((o,i)=>{
                                            return <Items Key = {i} image={o.img}/>
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
                {
                    randomQuestions !== `On which day the least number of eggs are sold?` ?
                        <div style={{ border: 'none', width: '50vw', display: 'flex', marginTop: '0 auto',justifyContent:'center' }}>
                            <div className='minus' onClick={() => Decrement()}><i className='fa fa-angle-double-down'></i></div>
                            <div className='show'>{value}</div>
                            <div className='plus' onClick={() => Increment()}><i className='fa fa-angle-double-up'></i></div>
                            <div className='check' onClick={() => Check()}>
                                <i className='fa fa-paper-plane'></i>
                            </div>
                        </div>
                        :
                        <div style={{ border: 'none', width: '50vw', display: 'flex', margin: '1% auto', justifyContent: 'center' }}>
                            {optionDays.map((obj, idx) => {
                                return <div className='days' onClick={() => Check(obj)}>{obj}</div>
                            })
                            }
                        </div>
                }
            </div>

        </>
    )
}
