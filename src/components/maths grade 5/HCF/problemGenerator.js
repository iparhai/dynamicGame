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
        problem = {...problem, number1 : [16,28,27,36,24,56,28,42,44,66,52,78]}
        // problem = {...problem, number2 : range(10,26)}
    }

    return problem
}

export default {generate}