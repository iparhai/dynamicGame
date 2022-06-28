import React, {
    useState,
    useEffect
} from 'react';
import problemGenerator from './problemGenerator';
import './Tally.css'
import tile from './images/tile.jpg';
import zero from './images/zero.png';
import one from './images/one.png';
import two from './images/two.png';
import three from './images/three.png';
import four from './images/four.png';
import five from './images/five.png';



function Tally(props) {
    const [problem, setProblem] = useState(problemGenerator.generate());
    const [question, setQuestion] = useState(problem.questions);
    const [data, setData] = useState(problem.data);
    const [answer, setAnswer] = useState(problem.answer);
    const [options, setOptions] = useState(problem.options);

    const [userAnswer, setUserAnswer] = useState('');

    useEffect(() => {
        if (userAnswer.length > 2) {
            alert('Nooooo');
        }
    }, [userAnswer])

    const Validate = (object) => {
        if(object.a == answer){
            props.onCorrectAnswer()
        }else{
            props.onWrongAnswer()
        }
    }

    console.log(data);
    console.log(answer);
    console.log(options);
    return (
        <>
            <div className='Tally_question'>
                <h6>{question}</h6>
            </div>
            <div className='Tally_Container'>
                {
                    data.map((obj, idx) => {
                        return (
                            <div className='Tally_row'>
                                <div className='Tally_col1'><h6>{obj.entity}</h6></div>
                                <div className='Tally_col2'>
                                    {
                                        obj.name.map((o, i) => {
                                            return (
                                                <img
                                                    src={
                                                        o == 'zero' ?
                                                            zero :
                                                        o == 'one' ?
                                                            one :
                                                        o == 'two' ?
                                                            two :
                                                        o == 'three' ?
                                                            three :
                                                        o == 'four' ?
                                                            four :
                                                        five
                                                    }
                                                    width='10%'
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className='Tally_answer'>
                {
                    options.map((obj, idx) => {
                        return (
                            <div className='option' onClick={()=>Validate(obj)}>
                                <img src={tile} width='100%' />
                                <h4>{obj.a}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Tally;