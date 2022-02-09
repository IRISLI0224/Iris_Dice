import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Dice from "../components/Dice";
import { getCookies } from "../utils/cookies";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: auto;
  margin: auto;
  margin-bottom: 50px;
  text-align: center;
  width: 60%;
  background-color: #edf6ff6b;
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const DiceArea = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: center;
`;

const MainPanel = styled.div`
  padding: 10px;
  height: auto;
  margin: auto;
  text-align: center;
  width: 80%;
  background-image: -webkit-linear-gradient(-90deg, #5e85fc 0%, #c46dfd 100%);
  border-radius: 10px;
  margin-top: 10%;
`;

const Button = styled.button`
  background-color: #1f0454;
  color: #fff;
  border: none;
  display: inline-block;
  padding: 0.875em 1em;
  font-weight: 400;
  font-size: 1em;
  border-radius: 4px;
  line-height: 1;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Result = styled.div`
  color: #1f0454;
  margin-bottom: 10px;
  font-size: 22px;
`;
const SubTitle = styled.h2`
  color: #e9e9e9;
`;

export const Detail = () => {
  const diceResultsString = getCookies();
  const diceResults = diceResultsString
    ? JSON.parse(diceResultsString)
    : undefined;
  const index = useParams().id;
  const currentResult = index ? diceResults[Number(index) - 1] : undefined;
  const time = new Date(currentResult?.Time).toLocaleString();

  return (
    <MainPanel>
      <SubTitle>Result of Roll {index}</SubTitle>
      <Container>
        <br />
        <br />
        <DiceArea>
          {currentResult?.Dice?.map((dice, index) => {
            return <Dice num={dice} showAnimate={true} index={index} />;
          })}
        </DiceArea>
        <Result>Expression: {currentResult?.Expression}</Result>
        <Result>Total: {currentResult?.Total}</Result>
        <Result>Time: {time}</Result>
        <Link to="/">
          <Button>Back to Home Page</Button>
        </Link>
        <br />
        <br />
      </Container>
    </MainPanel>
  );
};
