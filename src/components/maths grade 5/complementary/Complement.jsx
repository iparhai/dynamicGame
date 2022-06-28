import React, { useState, useCallback } from 'react';
import _set from 'lodash/set'
import AngleRange from 'react-angle-range';
import option from '../images/options.png';
import './Complement.css';

const defaultAngleRange = {
    example2: {
        from: 0,
        to: parseInt(Math.random()*90)+1,
    },
}

const modulus360 = (angle) => (
    (angle + 360) % 360
)

function Complement(props) {

    const [angleRange, setAngleRange] = useState(defaultAngleRange)

    const onChange = useCallback((prop, value) => {
        let updatedAngleRange = { ...angleRange }
        _set(updatedAngleRange, prop, value)
        setAngleRange(updatedAngleRange)
    }, [angleRange, setAngleRange])

    const onChangeAngleRangeExample2 = useCallback(({ from, to }) => {
        onChange('example2', { from, to })
    }, [onChange])

    const userAngle = angleRange.example2.to - angleRange.example2.from;
    const Evaluate = (userAngle, defaultAngle) => {
        // console.log(userAngle);
        // console.log(defaultAngle.example2.to);
        if(userAngle+defaultAngleRange.example2.to == 90){
            props.onCorrectAnswer()
        }else{
            props.onWrongAnswer()
        }
    }
    return (
        <div className='Geometry__main'>
            <div className='Geometry__question'>
                <h6>Find the complement of m&#8736;DEF={defaultAngleRange.example2.to}<sup>o</sup></h6>
            </div>
            <div className='Geometry__gameScreen'>
                <AngleRange
                    radius={150}
                    value={angleRange.example2}
                    onChange={onChangeAngleRangeExample2}
                    handlerRadius={10}
                    handlerRangeRadiusOffset={51}
                    limitFrom={{ min: 0, max: 90 }}
                    limitTo={{ min: 0, max: 90 }}
                    min={0}
                    max={90}
                    minOffset={0}
                    maxOffset={45}
                    isQuarterCircle
                />
                {/* <button onClick={()=>setAngleRange({...angleRange , from : from+1})}>Tangent1</button> */}
                <i
                    className='fa fa-paper-plane'
                    style={{
                        color : 'black',
                        position : 'absolute',
                        right : '10%',
                        bottom : '10%'
                    }}
                    onClick={()=>Evaluate(userAngle , defaultAngleRange)}
                ></i>
            </div>
            <div className='Geometry__Options'>
                <div className='opt1'>
                    <img src={option} width='100%' />
                    <h6>Angle  : {userAngle}°</h6>
                </div>
            </div>
        </div>
    )
}

export default Complement
