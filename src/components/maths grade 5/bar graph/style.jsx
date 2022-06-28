import styled, { css } from 'styled-components'

export const QuestionHolder = styled.div`
    width : 45vw;
    margin: 10% auto;
    margin-bottom : 1%;
    padding : 30px;
    border-radius: 15px;
    background-color: rgba(77, 204, 204, 0.445);
`;

export const Container = styled.div`
    width : 50vw;
    min-height : 35vh;
    margin : 5% auto;
    margin-bottom : 1%;
    display : flex;
    flex-direction : column;
    justify-content : flex-end;
    background-image : url(${(props)=>props.paper});
    background-size : 100% 100%;
    background-repeat : no-repeat;
`;

export const MainContainer = styled.div`
    display : flex;
    justify-content : space-between;
    width : 100%;
    height : 100%;
`;

export const BlackLine = styled.div`
    width : 100%;
    height :5px;
    background-color : grey;
`;

export const BarChartContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;

export const Number = styled.span`
    font-size: 1.5rem;
    text-align: center;
    color: ${(props)=>props.color}
`;

export const Chart = css`
  margin-top: 10px;
  width: 56px;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 420px) {
    width: 34px;
  }
`;

export const MakeBar = styled.div`
    min-height: ${(props)=>props.height}%;
    background-image: linear-gradient(
        to bottom,
        ${(props) => props.colors[0]},
        ${(props) => props.colors[1]}
      );
    ${Chart}

`;
export const Holder2 = styled.div`
      width : 25vw;
      color : white;
`;
export const MakeRadio = styled.div`
      width : 10%;
      margin-bottom: 1%;
      background-image : linear-gradient(
        to bottom,
        ${(props)=> props.colors[0]},
        ${(props)=> props.colors[1]}
      );
`;
