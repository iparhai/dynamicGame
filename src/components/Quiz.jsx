import React from "react";
import AnswerModal from "./AnswerModal";
import { MathHelper } from "../utils";
import './Quiz.css'
import getURLParams from "../utils/getURLParams";
import urlParams from '../utils/getURLParams'
import TraceNum from './maths grade 1/tracingNumbers/TraceNum'
import AscOrder from "./maths grade 1/ascending/ascOrder";
import DscOrder from "./maths grade 1/descending/dscOrder";
import Ban from "./maths grade 1/beforeAfterNumber/ban";
import Bos from "./maths grade 1/biggerOrSmaller/bos";
import Cb from "./maths grade 1/countBackwards/cb";
import CountingNumbers from "./maths grade 1/countNumbers_1-9/CN";
import CountingNumbers_10_s from "./maths grade 1/CountingNumbers/CN";
import pG_10_19 from "./maths grade 1/countNumbers_10-19/pG_10_19";
import pG_20_29 from "./maths grade 1/countNumbers_20-29/pG_20_29";
import pG_30_39 from "./maths grade 1/countNumbers_30-39/pG_30_39";
import pG_40_49 from "./maths grade 1/countNumbers_40-49/pG_40_49";
import pG_50_59 from "./maths grade 1/countNumbers_50-59/pG_50_59";
import pG_60_69 from "./maths grade 1/countNumbers_60-69/pG_60_69";
import pG_70_79 from "./maths grade 1/countNumbers_70-79/pG_70_79";
import pG_80_89 from "./maths grade 1/countNumbers_80-89/pG_80_89";
import pG_90_99 from "./maths grade 1/countNumbers_90-99/pG_90_99";

import MatchingNumbersWithName from "./maths grade 1/matchingNumbersWithName/MNWN";
import Cao from "./maths grade 1/compareAndOrder/cao";
import CO from "./maths grade 1/countObjects/CO";
import Number_10_s_and_1_s from "./maths grade 1/10's_1's/CN";
import MatchingNumbersWithObjects from "./maths grade 1/matchingNumbersWithObjects/MNWO";
import ACO from "./maths grade 1/additionCountingObjects/ACO";
import SCO from "./maths grade 1/subtractionCountingObjects/SCO";
import AnalogTime from "./maths grade 1/AnalogTime/AnalogTime";
import LLL from "./maths grade 1/LongLongerLongest/LLL";
import Mlm from "./gameType/mlm/Mlm";
import Measurements from "./maths grade 1/measurements/measurements";
import IdentifyShape from "./maths grade 1/identifyShape/IdentifyShape";
import IdentifyPositions from "./maths grade 1/IdentifyPositions/IdentifyPositions";
import DigitalTime from "./maths grade 1/digitalTime/DigitalTime";
import DDM from "./maths grade 1/DateDaysMonth/DDM";
import NIW from "./maths grade 4/numberInWords/NIW";

// import from grade 3
import RomanNumber from "./grade3Maths/romanNumbers/romanNUmber";
import EvenOdd from './grade3Maths/EvenOdd/EvenOdd';
import PlaceVal_4 from './grade3Maths/PlaceValue/PlaceVal_4';
import NumberLine from './grade3Maths/NumberLine/Numberline';
import Compare from './grade3Maths/Compare/Compare';
import Descending from './grade3Maths/Descending/Descending';
import Ascending from './grade3Maths/Ascending/Ascending';
import Fraction from "./grade3Maths/identifyFraction/Fraction";
import UDFA from "./grade3Maths/UDFA/UDFA";
import UDFS from "./grade3Maths/UDFS/UDFS";
import PIMP from "./grade3Maths/Proper Improper Fraction/PIMP";
import PictographMostLeast from "./grade3Maths/PictoGraph/MostLeast/PictographMostLeast";
import PictoShop from './grade3Maths/PictoGraph/pictoShop/PictoShop';
import Radius from './grade3Maths/Geometry/Radius/Radius';
import Diameter from './grade3Maths/Geometry/Diameter/Diameter';
import Parameter from './grade3Maths/parameter/parameter';
// import Parameter from './grade3Maths/parameter/parameter';
// import Parameter from './grade3Maths/parameter/Parameter';
import ANU4D from './grade3Maths/addNumbersUpto4Digits/ANU4D';
import SUN4D from './grade3Maths/subNumbeersUpto4Digits/SNU4D';
import Multipli from './grade3Maths/multiplication/Multiplication';
import Div from './grade3Maths/division/Division';
import Length from './grade3Maths/Length/Length';
import GeometryShapes from './grade3Maths/GeometryShapes/GeometryShapes';



// import from grade 4

// import Parameter from './grade3Maths/parameter/parameter';
// import EvenOdd from './grade3Maths/EvenOdd/EvenOdd';
// import PlaceVal_4 from './grade3Maths/PlaceValue/PlaceVal_4';
// import NumberLine from './grade3Maths/NumberLine/Numberline';
// import Compare from './grade3Maths/Compare/Compare';
import ANU6D from "./maths grade 4/addNumbersUpto6Digits/ANU6D";
import SNU6D from "./maths grade 4/subNumbeersUpto6Digits/SNU6D";
import Multiplication from "./maths grade 4/multiplication/Multiplication";
import GeometryBox from './maths grade 4/GeometryBox/GeometryBox';
import Angles from './maths grade 4/Angles/Angles';
import Division from "./maths grade 4/division/Division";
import DMAS from "./maths grade 4/DMAS/DMAS";
import PAC from "./maths grade 4/primeAndComposite/PAC";
import LUC from "./maths grade 4/lengthUnitConversion/LUC";
import MUC from "./maths grade 4/massUnitConversion/MUC";
import ASM from "./maths grade 4/addSubtractMeasurments/ASM";
import PlaceValMillion from "./maths grade 4/PlaceValue/PlaceValMillion";
import MN from "./maths grade 4/missingNumbers/MN";
import CAO from "./maths grade 4/compareAndOrder/cao";
import TUC from "./maths grade 4/timeUnitConversion/TUC";
import TypeOfFraction from "./maths grade 4/TypesofFraction/TypeOfFraction";
import Add_SubFract from "./maths grade 4/AddSubFraction/Add_SubFract";
import MulFrac from "./maths grade 4/multiplyFractions/MulFrac";
import DivofFrac from './maths grade 4/DivisionofFraction/DivofFrac';
import SimplifyFrac from "./maths grade 4/SimplifyFractions/SimplifyFrac";
import Divisibility from "./maths grade 4/Divisibility/Divisibility";
import AST from "./maths grade 4/addSubTime/AST";
// import Shape from "./geometry/shape";

// import grade5 games
import Hcf from '../components/maths grade 5/HCF/Hcf';
import AddFract from './maths grade 5/adding fractions/AddFract';
import SubFract from './maths grade 5/subtracting fraction/SubFract';
import Mulfract from './maths grade 5/multiplication fraction/MulFract';
import Divfrac from './maths grade 5/dividing fractions/Divfrac';
import Bargraph from './maths grade 5/bar graph/Bargraph';
import Tally from './maths grade 5/Tally Chart/Tally';
import Average from './maths grade 5/Average Mean/Average';
import PAA from './maths grade 5/Parameter & Area/PAA';
import Thermo from './maths grade 5/Thermometer/Thermo';
import Multiply from './maths grade 5/Multiply/Multiply';
import Divide from './maths grade 5/Divide/Divide';
import BODMASS from './maths grade 5/BODMASS/BODMASS';
import ANU6D5 from './maths grade 5/addNumbersUpto6Digits/ANU6D';
import SNU6D5 from './maths grade 5/subNumbeersUpto6Digits/SNU6D';
import CompareG5 from './maths grade 5/Compare Order/Compare';
import Ratio from './maths grade 5/Ratios/Ratio';
import Geometry from './maths grade 5/Geometry/Geometry';
import AnglesG5 from './maths grade 5/AnglesG5/AnglesG5';
import Triangle from './maths grade 5/Triangles/Triangle';
import Complement from './maths grade 5/complementary/Complement';
import Lcm from './maths grade 5/LCM/Lcm';
import DTF from './maths grade 5/decimal to fraction/DTF';
import PTF from './maths grade 5/percentages in to fraction/PTF';
import RD from './maths grade 5/Rounded Decimals/RD';
// new Fraction game
import AddingFraction from './maths grade 5/Adding fraction(NEW)/AddingFractions';
import SubtractingFractionNew from './maths grade 5/Subtracting Fraction(NEW)/SubtractingFractions';
import MultiplyingFractionNew from './maths grade 5/Multiply fraction(NEW)/MultiplyingFractions';
import DividingFractionNew from './maths grade 5/Divide fraction(NEW)/DividingFractions';

class Quiz extends React.Component {
  _isMounted = false;
  _secondsIntervalRef;
  state = {
    modal: "",
    modalShowing: false,
    streaks: 0,
    units: 0
  };

  earnLife = () => {
    this.props.onEarnLife();
    this.showModal("success", "STREAK!! You won a life ♥");
    this.setState({
      streaks: 0,
      units: this.state.units < 3 ? this.state.units + 1 : 2
    });
  };

  correctAnswer = () => {
    if (this.state.streaks > 2) {
      this.earnLife();
    } else {
      this.showModal("success");
    }

    this._isMounted && this.props.onCorretAnswer();
    this.setState(state => {
      return {
        streaks: state.streaks + 1
      };
    });
    setTimeout(() => {

      this._isMounted &&
        this.setState({
          modalShowing: false,

        });
      if (this.props.lifes > 0) (this.answerInput && this.answerInput.focus());
    }, 2500);

  };
  componentDidUpdate() {
    if (this.state.totalProblems > getURLParams.limit) {
      this.props.onEndGame()
    }
  }
  componentDidMount() {
    this._isMounted = true;

    // this.answerInput.focus();
  }

  shouldComponentUpdate(nextProps) {
    if (this.props.lifes < 1) {
      this.props.onEndGame(this.state.points);
      return false;
    }
    return nextProps.lifes > -1;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }


  wrongAnswer = () => {
    this._isMounted && this.props.onWrongAnswer();
    this.setState({
      streaks: 0
    });
    this.showModal("error");
    setTimeout(() => {
      this._isMounted &&
        this.setState({
          modalShowing: false,
        });
      if (this.props.lifes > 0) (this.answerInput && this.answerInput.focus());
    }, 2500);
  };
  showModal = (type, text) => {
    this.setState({
      modal: <AnswerModal type={type} text={text} soundEffect={this.props.soundEffect} />,
      modalShowing: true
    });
  };
  renderGrade1Games = (gameName) => {
    if (gameName.toLocaleLowerCase() == "ascorder") {
      return <AscOrder onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "incorder") {
      return <AscOrder onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "dscorder") {
      return <DscOrder onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "decorder") {
      return <DscOrder onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "ban") {
      return <Ban onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "cb") {
      return <Cb onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} /> // can
    }
    else if (gameName.toLocaleLowerCase() == "bos") {
      return <Bos onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "cao") {
      return <Cao onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "cn_1_9") {
      return <CountingNumbers objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "cn_10_19") {
      return <CountingNumbers_10_s objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} problemGenerator={pG_10_19} />
    }
    else if (gameName.toLocaleLowerCase() == "cn_20_29") {
      return <CountingNumbers_10_s objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} problemGenerator={pG_20_29} />
    }
    else if (gameName.toLocaleLowerCase() == "cn_30_39") {
      return <CountingNumbers_10_s objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} problemGenerator={pG_30_39} />
    }
    else if (gameName.toLocaleLowerCase() == "cn_40_49") {
      return <CountingNumbers_10_s objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} problemGenerator={pG_40_49} />
    }
    else if (gameName.toLocaleLowerCase() == "cn_50_59") {
      return <CountingNumbers_10_s objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} problemGenerator={pG_50_59} />
    }
    else if (gameName.toLocaleLowerCase() == "cn_60_69") {
      return <CountingNumbers_10_s objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} problemGenerator={pG_60_69} />
    }
    else if (gameName.toLocaleLowerCase() == "cn_70_79") {
      return <CountingNumbers_10_s objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} problemGenerator={pG_70_79} />
    }
    else if (gameName.toLocaleLowerCase() == "cn_80_89") {
      return <CountingNumbers_10_s objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} problemGenerator={pG_80_89} />
    }
    else if (gameName.toLocaleLowerCase() == "cn_90_99") {
      return <CountingNumbers_10_s objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} problemGenerator={pG_90_99} />
    }
    else if (gameName.toLocaleLowerCase() == "n_10_1_s") {
      return <Number_10_s_and_1_s objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "mnwn") {
      return <MatchingNumbersWithName objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "mnwo") {
      return <MatchingNumbersWithObjects objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "co") {
      return <CO objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "analogtime") {
      return <AnalogTime objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "aco") {
      return <ACO objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "sco") {
      return <SCO objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    // else if (gameName.toLocaleLowerCase() == "lll") {
    //   return <LLL onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    // }
    else if (gameName.toLocaleLowerCase() == "mlm") {
      return <Measurements onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "idsh") {
      return <IdentifyShape onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "shpos") {
      return <IdentifyPositions onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "digiclock") {
      return <DigitalTime onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "ddm") {
      return <DDM onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }

  }
  renderGrade3Games = (gameName) => {
    if (gameName.toLocaleLowerCase() == "roman") {
      return <RomanNumber onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "fraction") {
      return <Fraction onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "addingfraction") {
      return <UDFA onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "subtractingfraction") {
      return <UDFS onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "pimp") {
      return <PIMP onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == 'pictographmostleast') {
      return <PictographMostLeast onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == 'pictoshop') {
      return <PictoShop onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == 'radius') {
      return <Radius onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == 'diameter') {
      return <Diameter onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == 'parameter') {
      return <Parameter onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == 'evenodd') {
      return <EvenOdd onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == 'placevalueof4digit') {
      return <PlaceVal_4 onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == 'numberline') {
      return <NumberLine onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == 'compare') {
      return <Compare onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == 'descending') {
      return <Descending onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == 'ascending') {
      return <Ascending onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == 'anu4d') {
      return <ANU4D onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == 'snu4d') {
      return <SUN4D onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == 'multi') {
      return <Multipli onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == 'div') {
      return <Div onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == 'length') {
      return <LUC onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == 'massweight') {
      return <MUC onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == 'geometryshapes') {
      return <GeometryShapes onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "ast") {
      return <AST onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "asm") {
      return <ASM onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
  }
  renderGrade4Games = (gameName) => {
    if (gameName.toLocaleLowerCase() == "niw") {
      return <NIW onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == 'anu6d') {
      return <ANU6D onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == 'snu6d') {
      return <SNU6D onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == 'multi') {
      return <Multiplication onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == 'divide') {
      return <Division onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == 'geometrybox') {
      return <GeometryBox onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == 'angles') {
      return <Angles onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == 'dmas') {
      return <DMAS onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "pac") {
      return <PAC onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "luc") {
      return <LUC onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "muc") {
      return <MUC onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "asm") {
      return <ASM onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == 'pvm') {
      return <PlaceValMillion onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == 'mn') {
      return <MN onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == 'cao') {
      return <CAO onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == 'tuc') {
      return <TUC onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "tyf") {
      return <TypeOfFraction onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "asf_w_u_d") {
      return <Add_SubFract onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "mul_of_fract") {
      return <MulFrac onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "div_of_fract") {
      return <DivofFrac onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "simplifyfrac") {
      return <SimplifyFrac onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "divisibility") {
      return <Divisibility onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if (gameName.toLocaleLowerCase() == "ast") {
      return <AST onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
  }

  renderGrade5Games = (gameName) => {
    if(gameName.toLocaleLowerCase() == "hcf"){
      return <Hcf onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if(gameName.toLocaleLowerCase() == 'addfrac'){
      return <AddFract onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if(gameName.toLocaleLowerCase() == 'subfrac'){
      return <SubFract onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if(gameName.toLocaleLowerCase() == 'mulfrac'){
      return <Mulfract onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if(gameName.toLocaleLowerCase() == 'divfrac'){
      return <Divfrac onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if(gameName.toLocaleLowerCase() == 'bargraph'){
      return <Bargraph onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if(gameName.toLocaleLowerCase() == 'tally'){
      return <Tally onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if(gameName.toLocaleLowerCase() == 'average'){
      return <Average onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if(gameName.toLocaleLowerCase() == 'paa'){
      return <PAA onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if(gameName.toLocaleLowerCase() == 'thermometer'){
      return <Thermo onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if(gameName.toLocaleLowerCase() == 'multiply'){
      return <Multiply onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if(gameName.toLocaleLowerCase() == 'divide'){
      return  <Divide onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if(gameName.toLocaleLowerCase() == 'bodmass'){
      return  <BODMASS onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if(gameName.toLocaleLowerCase() == 'anu6d'){
      return <ANU6D5 onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if(gameName.toLocaleLowerCase() == 'snu6d'){
      return  <SNU6D5 onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if(gameName.toLocaleLowerCase() == 'con'){
      return <CompareG5 onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if(gameName.toLocaleLowerCase() == 'ratio'){
      return <Ratio onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if(gameName.toLocaleLowerCase() == 'geometry'){
      return <Geometry onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if(gameName.toLocaleLowerCase() == 'angles'){
      return <AnglesG5 onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if(gameName.toLocaleLowerCase() == 'triangle'){
      return <Triangle onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if(gameName.toLocaleLowerCase() == 'time'){
      return <TUC onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if(gameName.toLocaleLowerCase() == 'ktm'){
      return <LUC onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if(gameName.toLocaleLowerCase() == 'comp'){
      return <Complement onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if(gameName.toLocaleLowerCase() == 'lcm'){
      return <Lcm onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if(gameName.toLocaleLowerCase() == 'dtf'){
      return <DTF onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if(gameName.toLocaleLowerCase() == 'ptf'){
      return <PTF onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if(gameName.toLocaleLowerCase() == 'rd'){
      return <RD onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if(gameName.toLocaleLowerCase() == 'n_add_frac'){
      return <AddingFraction onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if(gameName.toLocaleLowerCase() == 'n_sub_frac'){
      return <SubtractingFractionNew onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if(gameName.toLocaleLowerCase() == 'n_mul_frac'){
      return <MultiplyingFractionNew onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
    else if(gameName.toLocaleLowerCase() == 'n_div_frac'){
      return <DividingFractionNew onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} />
    }
  }
  renderGame = (grade, gameName) => {
    console.log(grade, gameName)
    if (grade == 1 || grade == "1") {
      return this.renderGrade1Games(gameName)
    }
    else if (grade == 2 || grade == "2") {

    }
    else if (grade == 3 || grade == "3") {
      return this.renderGrade3Games(gameName)
    }
    else if (grade == 4 || grade == "4") {
      return this.renderGrade4Games(gameName)
    }
    else if(grade == 5 || grade == "5"){
      return this.renderGrade5Games(gameName)
    }
  }
  render() {
    return (

      <section className="show-up" style={{ width: "100%", height: "100vh" }}>
        {/* <Hints currentProblem={this.state.problem}/> */}
        <div >
          {this.state.modalShowing ? (
            this.state.modal
          ) : (
            <div>
              {this.renderGame(getURLParams.grade, getURLParams.gameName)}
              {/* <SCO objectList={this.props.objectList} onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} /> */}
              {/* <Shape onCorrectAnswer={this.correctAnswer} onWrongAnswer={this.wrongAnswer} /> */}
              {/* <TraceNum /> */}
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default Quiz;
