import getURLParams from '../../../utils/getURLParams';
import problemGenerator from '../../grade3Maths/UDFS/problemGenerator';
import teeth1 from './images/teeth.png';
import teeth2 from './images/teeth2.png';

const dif = getURLParams.dif;
const lang = getURLParams.lang;

const NumbersGenerate = (start,end) => {
    var numbers = [];
    for(var i = start ; i<=end ; i++){
        numbers.push(i)
    }
    const random1 = Math.floor(Math.random()*numbers.length);
    const random2 = Math.floor(Math.random()*numbers.length);

    const checkifSimilar = (a,b) => {
        let randoms = {
            r1 : a,
            r2 : b
        }
        if(a==b){
            randoms = {...randoms,r1:a}
            randoms = {...randoms,r2:b-1}
            if((a==0)&&(b==0)){
                randoms = {...randoms,r1:a}
                randoms = {...randoms,r2:b+1}
            }
        }
        else if(a>b){
            randoms = {...randoms,r1:b}
            randoms = {...randoms,r1:a}
        }
        else{
            randoms = {...randoms,r1:a}
            randoms = {...randoms,r2:b}
        }

        return randoms;
   }

    const newrandoms = checkifSimilar(random1,random2);
    
    let fraction = {
        numerator : numbers[newrandoms.r1],
        denominator : numbers[newrandoms.r2]
    }

    // console.log(numbers.length)
    // console.log(fraction)
    // console.log(fraction)
    return fraction;
}

const generate = () => {
    var Fraction = require('fractional').Fraction;
    let problem = {
        question : '',
        generatedfraction1 : {},
        generatedfraction2 : {},
        answer : {},
        background : ''
    }
    
    problem = {...problem, question : 'Subtract the fraction'}

    if(dif == 'b'){
        problem = {...problem , generatedfraction1 : NumbersGenerate(1,5)}
        problem = {...problem , generatedfraction2 : NumbersGenerate(1,5)}
        problem = {...problem , answer : (new Fraction(problem.generatedfraction1.numerator,problem.generatedfraction1.denominator)).subtract(new Fraction(problem.generatedfraction2.numerator,problem.generatedfraction2.denominator))}        
        problem = {...problem , background : `${teeth1}`}
    }
    else if(dif == 'i'){
        problem = {...problem , generatedfraction1 : NumbersGenerate(5,9)}
        problem = {...problem , generatedfraction2 : NumbersGenerate(5,9)}
        problem = {...problem , answer : (new Fraction(problem.generatedfraction1.numerator,problem.generatedfraction1.denominator)).subtract(new Fraction(problem.generatedfraction2.numerator,problem.generatedfraction2.denominator))}        
        problem = {...problem , background : `${teeth2}`}
    }
    else if(dif == 'a'){
        problem = {...problem , generatedfraction1 : NumbersGenerate(1,9)}
        problem = {...problem , generatedfraction2 : NumbersGenerate(1,9)}
        problem = {...problem , answer : (new Fraction(problem.generatedfraction1.numerator,problem.generatedfraction1.denominator)).subtract(new Fraction(problem.generatedfraction2.numerator,problem.generatedfraction2.denominator))}        
        problem = {...problem , background : `${teeth2}`}
    }

    const translate = {
        e : `Subtract the fraction ${problem.generatedfraction2.numerator}/${problem.generatedfraction2.denominator} from ${problem.generatedfraction1.numerator}/${problem.generatedfraction1.denominator}`,
        u : `${problem.generatedfraction2.numerator}/${problem.generatedfraction2.denominator} کو ${problem.generatedfraction1.numerator}/${problem.generatedfraction1.denominator} سے گھٹائیں`,
        a : `اطرح الكسر ${problem.generatedfraction2.numerator} / ${problem.generatedfraction2.denominator} من ${problem.generatedfraction1.numerator} / ${problem.generatedfraction1.denominator}`,
        p : `برخه ${problem.generatedfraction2.numerator}/${problem.generatedfraction2.denominator} له ${problem.generatedfraction1.numerator}/${problem.generatedfraction1.denominator} څخه کم کړئ`,
        k : `${problem.generatedfraction1.numerator}/${problem.generatedfraction1.denominator} 에서 분수 ${problem.generatedfraction2.numerator}/${problem.generatedfraction2.denominator} 빼기`
    } 
    if (lang == 'a') {
        problem = { ...problem, question: translate.a }
    } else if (lang == 'u') {
        problem = { ...problem, question: translate.u }
    } else if (lang == 'p') {
        problem = { ...problem, question: translate.p }
    } else if(lang == 'k') {
        problem = { ...problem, question: translate.k }
    } else{
        problem = { ...problem, question: translate.e }
    }

    return problem;
}

export default {generate};