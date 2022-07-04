import getURLParams from '../../../utils/getURLParams';

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
    }
    
    problem = {...problem, question : 'Add the fraction'}

    if(dif == 'b'){
        problem = {...problem , generatedfraction1 : NumbersGenerate(1,5)}
        problem = {...problem , generatedfraction2 : NumbersGenerate(1,5)}
        problem = {...problem , answer : (new Fraction(problem.generatedfraction1.numerator,problem.generatedfraction1.denominator)).divide(new Fraction(problem.generatedfraction2.numerator,problem.generatedfraction2.denominator))}
    }
    else if(dif == 'i'){
        problem = {...problem , generatedfraction1 : NumbersGenerate(5,9)}
        problem = {...problem , generatedfraction2 : NumbersGenerate(5,9)}
        problem = {...problem , answer : (new Fraction(problem.generatedfraction1.numerator,problem.generatedfraction1.denominator)).divide(new Fraction(problem.generatedfraction2.numerator,problem.generatedfraction2.denominator))}        
    }
    else if(dif == 'a'){
        problem = {...problem , generatedfraction1 : NumbersGenerate(1,9)}
        problem = {...problem , generatedfraction2 : NumbersGenerate(1,9)}
        problem = {...problem , answer : (new Fraction(problem.generatedfraction1.numerator,problem.generatedfraction1.denominator)).divide(new Fraction(problem.generatedfraction2.numerator,problem.generatedfraction2.denominator))}        
    }

    const translate = {
        e : `Divide the fraction ${problem.generatedfraction1.numerator}/${problem.generatedfraction1.denominator} with ${problem.generatedfraction2.numerator}/${problem.generatedfraction2.denominator}`,
        u : `حصہ ${problem.generatedfraction1.numerator}/${problem.generatedfraction1.denominator} کو ${problem.generatedfraction2.numerator}/${problem.generatedfraction2.denominator} کے ساتھ شامل کریں`,
        a : `أضف الكسر ${problem.generatedfraction1.numerator} / ${problem.generatedfraction1.denominator} مع ${problem.generatedfraction2.numerator} / ${problem.generatedfraction2.denominator}`,
        p : `برخه ${problem.generatedfraction1.numerator}/${problem.generatedfraction1.denominator} د ${problem.generatedfraction2.numerator}/${problem.generatedfraction2.denominator} سره اضافه کړئ`,
        k : `분수 ${problem.generatedfraction1.numerator}/${problem.generatedfraction1.denominator} 를 ${problem.generatedfraction2.numerator}/${problem.generatedfraction2.denominator} 와 함께 추가`
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