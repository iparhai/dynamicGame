// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css'
// import Card from './components/Card';
// import Question from './components/Question';
// import Selectmonth from './components/Selectmonth';
// import Selectyear from './components/Selectyear';
// import data from './components/data';
// import resultBg from './images/res_bg-01.png'
// import ShowResult from './components/ShowResult';


// const flexStyle = {
//   display: 'flex',
//   width: '50%',
//   // border: '1px solid red',
//   flexWrap: 'wrap',
//   justifyContent: 'center',
//   margin: '0 auto',
//   paddingTop: '10%'
// }
// const resultStyle = {
//   // backgroundColor: 'red',
//   width: '10%',
//   height: '10vh',
//   margin: '0 auto',
//   textAlilgn: 'center',
//   backgroundImage: `url(${resultBg})`,
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat'
// }

// const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August',
//   'September', 'October', 'November', 'December'];

// const year = [];
// function generatYear() {
//   for (var i = 1986; i <= 2050; i++) {
//     year.push(i);
//   }
//   // console.log(year);

// }
// generatYear();
// // const rmIndex = 1;
// const rmIndex = Math.floor(Math.random() * months.length);
// const randomDay = Math.floor(Math.random() * data.length);
// const randomMonth = months[rmIndex];
// // const randomYear = 1996;
// const randomYear = year[Math.floor(Math.random() * months.length)];

// var range = null;
// if ((rmIndex + 1) % 2 != 0) {
//   range = 31;
// } else {
//   if ((rmIndex + 1) == 2) {
//     range = 28;
//     if (randomYear % 4 == 0) {
//       range += 1;
//     }
//   }
//   else {
//     range = 30;
//   }
// }
// for (var i = 1; i <= range; i++) {
//   data.push(i);
// }
// // console.log(data);


// var ans = {
//   month: null,
//   year: null,
//   day: null
// };

// function myCard(c) {
//   // console.log(c)
//   var temp = { ...ans, day: c };
//   ans = temp;
//   console.log(ans)
// }

// function dummy(month) {
//   var temp = { ...ans, month: month };
//   ans = temp;
//   console.log(temp);
// }

// function myYear(m) {
//   var temp = { ...ans, year: m };
//   ans = temp;
//   console.log(temp);
// }


// function DateDaysMonth(props) {

  
//   return (
//     <>

//       <Question
//         dayIndex={randomDay}
//         randomMonth={randomMonth}
//         randomYear={randomYear}
//       />
//       <Selectmonth
//         handlemonth={(month) => dummy(month)}
//       // month = {dummy(data[randomDay])}
//       />

//       <Selectyear
//         handleyear={(m) => myYear(m)}
//       />

//       <ShowResult
//         monthRes={ans.month}
//       />

//       <div className="flex" style={flexStyle}>
//         {data.map((val, i) => {
//           return (
//             <Card
//               text={val}
//               QuestionVal={randomDay}
//               handleCard={(m) => myCard(m)}
//             />
//           );
//         })}


//       </div>
//       <div style={resultStyle}>
//         {/* <img src={} /> */}
//         <h1 style={{ textAlign: 'center', color: 'white', paddingTop: '10px' }} onClick={
//           () => {
//             if ((ans.month == randomMonth) && (ans.year == randomYear) && (ans.day == data[randomDay])) {
//               alert('you Pass');
//             }
//             else {
//               alert('fail');
//             }
//           }
//         }>Result</h1>
//       </div>
//     </>
//   );
// }

// export default DateDaysMonth;
