import getURLParams from "../../../utils/getURLParams";

const dif = getURLParams.dif;

const generate = () => {
    let problem = {
        angles : [],
        question : ''
    }

    problem = {...problem, question:'Draw the angle with the help of protractor i.e.'}

    if(dif == 'b'){
        problem = {...problem, angles:[{angle:10,answer:80},{angle:20,answer:70},{angle:30,answer:60},{angle:40,answer:50},{angle:45,answer:55},{angle:60,answer:30},{angle:80,answer:10},{angle:90,answer:0},{angle:120,answer:330},{angle:145,answer:305}]}
    }
    else if(dif == 'i'){
        problem = {...problem,angles:[{angle:'right angle'},{angle:'acute angle'},{angle:'obtuse angle'}]}
    }
    else{
        problem = {...problem,angles:[]}
    }

    return problem
}

export default {generate};