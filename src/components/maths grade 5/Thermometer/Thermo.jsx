import React from 'react';
import getURLParams from '../../../utils/getURLParams';
import problemGenerator from './problemGenerator';
import option from '../images/options.png';

const dif = getURLParams.dif;


function Thermo(props) {
	const [problem, setProblem] = React.useState(problemGenerator.generate);
	const [question, setQuestion] = React.useState(problem.question);
	const [display, setDisplay] = React.useState(problem.scale);
	const [options, setOptions] = React.useState(problem.options);

	const Evaluate = (object) => {
		if (object.status == true) {
			props.onCorrectAnswer()
		} else {
			props.onWrongAnswer()
		}
	}
	console.log(options)
	return (
		<div className='Geometry__main'>
			<div className='Geometry__question'>
				<h6>{question}</h6>
			</div>
			<div className='Geometry__gameScreen'>
				{
					dif == 'b' ?
						<h6 style={{
							width: '80%',
							color: 'black',
							fontSize: '200%',
							paddingTop: '20%',
							margin: '0 auto'
						}}>{display.toCel} &#8451;</h6>
						:
						<h6 style={{
							width: '80%',
							color: 'black',
							fontSize: '200%',
							paddingTop: '20%',
							margin: '0 auto'
						}}>{display.toFer} &#8457;</h6>
				}
			</div>
			<div className='Geometry__Options'>
				{
					options.map((o, i) => {
						return (
							<div className='opt1' onClick={() => Evaluate(o)}>
								<img src={option} width='100%' />

								{
									dif == 'b' ?
										<h6>{o.toFer} &#8457;</h6>
										:
										<h6>{o.toCel} &#8451;</h6>
										
								}
							</div>
						)
					})
				}
			</div>
		</div>
	)
}

export default Thermo
