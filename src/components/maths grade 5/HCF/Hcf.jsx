import React from 'react';
import { useEffect } from 'react';
import Sprite from './Sprite';
import problemGenerator from './problemGenerator';
// import _ from 'underscore'
import './Hcf.css';
import getURLParams from '../../../utils/getURLParams';


const lang = getURLParams.lang;

export default function Hcf(props) {
    const [problem, setProblem] = React.useState(problemGenerator.generate());
    // const [hcfNumbers, setHcfNumbers] = React.useState([18,30]);

    const randomIndex1 = Math.floor(Math.random() * problem.number1.length);
    const randomIndex2 = Math.floor(Math.random() * problem.number1.length);

    const [num1, setNum1] = React.useState(problem.number1[randomIndex1]);
    const [num2, setNum2] = React.useState(problem.number1[randomIndex2]);

    const [translate, setTranslate] = React.useState({
        e: `Find Hcf of ${num1} & ${num2} by prime factorization method`,
        a: `أوجد Hcf لـ $ {num1} و $ {num2} بطريقة التحليل الأولي`,
        p: `د اصلي فکتور کولو میتود په واسطه د ${num1} او ${num2} Hcf ومومئ`,
        u: `پرائم فیکٹرائزیشن طریقہ سے ${num1} اور ${num2} کا Hcf تلاش کریں۔`,
        k: `소인수분해 방법으로 ${num1} & ${num2}의 Hcf 찾기`,
    })

    const [drop1, setDrop1] = React.useState([]);
    const [drop2, setDrop2] = React.useState([]);
    const [userAnswer, setUserAnswer] = React.useState([]);
    const [travel, setTravel] = React.useState(0);
    const [tiles, setTiles] = React.useState([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15
    ]);

    const primeFactors = (n) => {
        const factors = [];
        let divisor = 2;

        while (n >= 2) {
            if (n % divisor == 0) {
                factors.push(divisor);
                n = n / divisor;
            } else {
                divisor++;
            }
        }
        return factors;
    }

    const factofNumber1 = primeFactors(num1);
    const factofNumber2 = primeFactors(num2);

    var Hcf;
    for (let i = 1; i <= num1 && i <= num2; i++) {

        // check if is factor of both integers
        if (num1 % i == 0 && num2 % i == 0) {
            Hcf = i;
        }
    }

    const Add = (o) => {
        if (travel == 0) {
            setDrop1([...drop1, o])
        }
        else if (travel == 12) {
            setDrop2([...drop2, o])
        }
        else if (travel == 24) {
            setUserAnswer([...userAnswer, o]);
        }
    }
    const MoveToTrash = (o, idx) => {
        if (travel == 0) {
            setDrop1(drop1.slice(0, idx).concat(drop1.slice(idx + 1)))
        } else if (travel == 12) {
            setDrop2(drop2.slice(0, idx).concat(drop2.slice(idx + 1)));
        } else if (travel == 24) {
            setUserAnswer(userAnswer.slice(0, idx).concat(userAnswer.slice(idx + 1)))
        }
    }
    useEffect(() => {
        if (drop1.length === factofNumber1.length) {
            if (drop1.join('') == factofNumber1.join('')) {
                setTravel(travel + 12)
            } else {
                setTravel(travel);
            }
        } else if (drop1.length > factofNumber1.length) {
            setTravel(0);
        }
    }, [drop1]);

    useEffect(() => {
        if (drop2.length === factofNumber2.length) {
            if (drop2.join('') == factofNumber2.join('')) {
                setTravel(travel + 12)
            } else {
                setTravel(travel - 12)
            }
        } else if (drop2.length > factofNumber2.length) {
            setTravel(travel - 12)
        }
    }, [drop2]);

    const mapDropTargets = () => {
        if (travel == 0) {
            return (
                drop1.map((obj, idx) => {
                    return (
                        <div onClick={() => MoveToTrash(obj, idx)}>
                            <h4>{obj}</h4>
                        </div>
                    )
                })
            )
        } else if (travel == 12) {
            return (
                drop2.map((obj, idx) => {
                    return (
                        <div onClick={() => MoveToTrash(obj, idx)}>
                            <h4>{obj}</h4>
                        </div>
                    )
                })
            )
        } else if (travel == 24) {
            return (
                userAnswer.map((obj, idx) => {
                    return (
                        <h4 onClick={() => MoveToTrash(obj, idx)}>{obj}</h4>
                    )
                })
            )
        }
    }

    const Evaluate = () => {
        const user = userAnswer.join('');
        if (user == Hcf) {
            setTravel(travel + 56)
            setTimeout(() => {
                props.onCorrectAnswer();
            }, 1000);
        } else {
            setTravel(0)
            setTimeout(() => {
                props.onWrongAnswer();
            }, 1000);
        }
    }


    console.log(factofNumber1);
    console.log(factofNumber2);
    console.log(Hcf);


    return (
        <div className='hcfMainDiv'>
            <div className='hcfQuestion'>
                {/* Find Hcf of <span>{num1}</span> & <span>{num2}</span> by prime factorization method */}
                {
                    lang == 'e' ?
                        <h6>
                            {translate.e}
                        </h6>
                    :
                    lang == 'a'?
                        <h6>
                            {translate.a}
                        </h6>
                    :
                    lang == 'p'?
                        <h6>
                            {translate.p}
                        </h6>
                    :
                    lang == 'u'?
                        <h6>
                            {translate.u}
                        </h6>
                    :
                        <h6>
                            {translate.k}
                        </h6>
                }
            </div>
            <div className='hcfGame'>
                <div className='numberprimefactors'>
                    <h5>
                        {
                            travel == 0 ? `Enter prime factors of ${num1}`
                                :
                                travel == 12 ? `Enter prime factors of ${num2}`
                                    :
                                    'Now what will be the HCF'
                        }
                    </h5>
                    <div className='primefactorsdrop1'>
                        {
                            mapDropTargets()
                        }
                    </div>
                </div>
                <i className='fa fa-paper-plane checkBtn' onClick={() => Evaluate()}></i>
                {
                    travel == 24 ?
                        <div className='ShowFactors'>
                            <div>
                                <h6 className='head'>Prime factors of {num1}</h6>
                                <div>
                                    {
                                        drop1.map((obj, idx) => {
                                            return (
                                                <h6 className='subhead'>
                                                    {obj}
                                                </h6>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div>
                                <h6 className='head'>Prime factors of {num2}</h6>
                                <div>
                                    {
                                        drop2.map((obj, idx) => {
                                            return (
                                                <h6 className='subhead'>
                                                    {obj}
                                                </h6>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        : ''
                }
                <div className='SpriteHolder'>
                    <Sprite
                        travel={travel}
                    />
                </div>
                <div className='tilesDiv'>
                    {
                        tiles.map((obj) => {
                            return (
                                <div>
                                    <h4 onClick={() => Add(obj)}>{obj}</h4>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
