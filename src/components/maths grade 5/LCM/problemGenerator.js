import getURLParams from '../../../utils/getURLParams';

const dif = getURLParams.dif;


// const checkComposite = (s) => {
//     if(s==1){
//         return false
//     }else if(s==2){
//         return false
//     }else if(s==3){
//         return false
//     }

//     for (var x = 2; x < s; x++) {
//         if ((s % 2 == 0)||(s%3==0)) {
//           return true;
//         }
//       }
//     return false;
// }

const range = (start,end) => {
    let array = [];
    for(start;start<=end;start++){
            array.push(start)
    }
    console.log(array);
    return  array;
}

const generate = () => {
    let problem = {
        number1 : [],
        question : ''
    }

    if(dif == 'b'){
        problem = {...problem, number1 : [36,54,33,55,52,78,16,24,27,48,18,25]}
        // problem = {...problem, number2 : range(10,26)}
    }
    else if(dif == 'i'){
        problem = {...problem, number1 : [36,54,33,55,52,78,16,24,27,48,18,25]}
        // problem = {...problem, number2 : range(10,26)}
    }
    else if(dif == 'a'){
        problem = {...problem, number1 : [36,54,33,55,52,78,16,24,27,48,18,25]}
        // problem = {...problem, number2 : range(10,26)}
    }

    return problem
}

export default {generate}