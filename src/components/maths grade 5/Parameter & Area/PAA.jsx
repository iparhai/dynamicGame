import React, { useState, useEffect } from 'react';
import problemGenerator from './problemGenerator';
import $ from 'jquery'
import tile from './images/tile2.webp';
import './PAA.css';
import { evaluate } from '../../../utils/math';




export default function PAA(props) {
    const [problem, setProblem] = useState(problemGenerator.generate);
    const [question, setQuestion] = useState(problem.question);
    const [length, setLength] = useState(problem.rows);
    const [breadth, setBreadth] = useState(problem.columns);

    const [columns, setColumns] = useState([{}]);
    const [rows, setRows] = useState([{}]);
    const [options, setOptions] = useState(problem.answer);

    const deleteRow = (idx) => {
        const temp = [...rows];
        temp.splice(idx, 1);
        setRows(temp);
    }

    useEffect(() => {
        $("#PAA__next").click(function () {
            $('.PAA__screen').css({
                opacity: '0.2',
                pointerEvents: 'none'
            })

            setTimeout(() => {
                $('.PAA_buttonHolder').fadeOut();
            }, 1000);

            setTimeout(() => {
                $(".PAA_options").css({
                    visibility: 'visible'
                }).fadeIn()
            }, 1500)
        })
    })

    const Evaluate = (obj) => {
        if (obj.correct == true) {
            props.onCorrectAnswer()
        } else {
            props.onWrongAnswer()
        }
    }
    return (
        <>
            <div className='PAA__question'>
                <h6>{problem.question}</h6>
            </div>
            <div className='PAA__screen'>
                <div className='PAA__figure'>
                    {
                        rows.map((_, idx) => {
                            return (
                                <>
                                    <div className='PAA__row'>
                                        {
                                            columns.map((o, i) => {
                                                return (
                                                    <div
                                                        className='PAA_column'
                                                        style={{
                                                            border: '2px solid red',
                                                            width: '20%'
                                                        }}
                                                    >
                                                        <img
                                                            src={tile}
                                                            width='100%'
                                                            style={{
                                                                height: '100%'
                                                            }}
                                                            onClick={
                                                                () => {
                                                                    const temp = [...columns];
                                                                    temp.splice(idx, 1);
                                                                    setColumns(temp);
                                                                }
                                                            }
                                                        />
                                                    </div>
                                                )
                                            })
                                        }
                                        <i
                                            className='fa fa-trash PAA__trash'
                                            onClick={() => deleteRow(idx)}
                                        ></i>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
            <div className='PAA_options'>
                {
                    options.map((obj, idx) => {
                        return (
                            <div class="button" onClick={() => Evaluate(obj)}>
                                <a href="#">{obj.num}</a>
                            </div>
                        )
                    })
                }
            </div>
            <div className='PAA_buttonHolder'>
                <div class="button">
                    <a href="#" onClick={() => setColumns([...columns, {}])}>ADD COLUMNS</a>
                </div>
                <div class="button">
                    <a href="#" onClick={() => setRows([...rows, {}])}>ADD ROWS</a>
                </div>

                <div class="button" id='PAA__next'>
                    <a href="#">NEXT</a>
                </div>
            </div>
        </>
    )
}
