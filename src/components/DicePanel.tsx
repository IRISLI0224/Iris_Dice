import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Dice from "./Dice";
import { IDiceResults } from "../types/DiceResults";
import { setCookies, getCookies, removeCookies } from "../utils/cookies";
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
    width: 90%;
  }
`;

const DiceArea = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: center;
`;

const NotationPanel = styled.div`
  margin: auto;
  justify-content: center;
  padding: 20px;
  display: flex;
  margin-bottom: 10px;
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

const Input = styled.input`
  margin-left: 20px;
  opacity: 0.7;
  @media (max-width: 768px) {
    width: 50%;
    margin-left: 10px;
  }
`;

const initial = {
  Expression: "2d6+3",
  Dice: [1, 1],
  Total: 6,
  Time: new Date(),
} as IDiceResults;

const ListContainer = styled.div`
  height: auto;
  margin: auto;
  margin-bottom: 50px;
  text-align: center;
  width: 60%;
  background-color: rgba(34, 34, 34, 0.349);
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const ListTitle = styled.div`
  padding: 20px;
  color: #d8d8d8;
  font-size: 25px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Li = styled.li`
  padding: 2px;
  margin-top: 2px;
`;


const Result = styled.div`
  color: #1f0454;
  margin-bottom: 10px;
  font-size: 25px;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-content: space-between;
  align-items: flex-end;
  @media (max-width: 768px) {
    display: flex;
    align-content: space-between;
    align-items: center;
    flex-direction: column;
  }
`;

const Validate = styled.div`
  color: #be162c;
  font-size: 22px;
`;

export const DicePanel = () => {
  const [diceNumber, setDiceNumber] = useState(2);
  const [max, setMax] = useState(6);
  const [modifier, setModifier] = useState(3);
  const [result, setResult] = useState(6);
  const [dices, setDices] = useState([1, 2]);
  const [animate, setAnimate] = useState(false);
  const [expression, setExpression] = useState("2d6+3");
  const [diceLogs, setDiceLogs] = useState<IDiceResults[]>([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAnimate(false);
    }, 2000);
  }, [animate]);

  useEffect(() => {
    const diceResultsString = getCookies();
    const diceResults = diceResultsString
      ? JSON.parse(diceResultsString)
      : undefined;
    if (diceResults) setDiceLogs(diceResults);
  }, []);

  useEffect(() => {
    var currentResult = initial;
    currentResult.Expression = expression;
    currentResult.Dice = dices;
    currentResult.Total = Number(result);
    if (diceLogs.length < 1) {
      const diceResultsString = getCookies();
      const currentLogs = diceResultsString
        ? JSON.parse(diceResultsString)
        : undefined;
      if (currentLogs) {
        currentLogs.unshift(currentResult);
        setDiceLogs(currentLogs);
      } else {
        const currentLogs = diceLogs.slice();
        currentLogs.unshift(currentResult);
        setDiceLogs(currentLogs);
      }
    } else {
      const currentLogs = JSON.parse(JSON.stringify(diceLogs));
      currentLogs.unshift(currentResult);
      setDiceLogs(currentLogs);
    }
    if (diceLogs.length > 0) setCookies(JSON.stringify(diceLogs));
  }, [result]);

  const setData = async (value: any) => {
    const currentNumber =
      value.indexOf("d") > 0 ? value.split("d")[0] : value.split("D")[0];
    const currentMax =
      value.indexOf("d") > 0
        ? value.split("d")[1].split("+")[0]
        : value.split("D")[1].split("+")[0];
    const currentModifier = value.split("+")[1];
    setExpression(value);
    setDiceNumber(Number(currentNumber));
    setMax(Number(currentMax));
    setModifier(Number(currentModifier));
    const diceArray: number[] = [];
    for (var i = 0; i < Number(diceNumber); i++) {
      diceArray.push(1);
    }
    setDices(diceArray);
  };

  const handleDataChange = (event: any) => {
    const { value } = event.target;
    setExpression(value);
    if (
      !(
        (value.indexOf("d") < 0 && value.indexOf("D") < 0) ||
        value.indexOf("+") < 0
      )
    ) {
      setData(value);
    }
  };

  const handleOnBlur = (event: any) => {
    const { value } = event.target;
    if (
      (value.indexOf("d") < 0 && value.indexOf("D") < 0) ||
      value.indexOf("+") < 0
    ) {
      setError(true);
    } else {
      setError(false);
      setData(value);
    }
  };

  const handleDice = async () => {
    if (!error) {
      setData(expression);
      const dicesRandom = dices.slice();
      let currentDiceResult = 0;
      for (var i = 0; i < dices.length; i++) {
        const random = Math.round(Math.random() * (max - 1) + 1);
        dicesRandom[i] = random;
        currentDiceResult = currentDiceResult + random;
        if (i === dices.length - 1) {
          setDices(dicesRandom);
          setResult(currentDiceResult + Number(modifier));
          setAnimate(true);
        }
      }
    }
  };

  const handleClear = () => {
    removeCookies();
    window.location.reload();
  };

  return (
    <>
      <Container>
        <br />
        <br />
        <NotationPanel>
          <div>Expression: </div>
          <Input
            name="expression"
            placeholder="2d6+3"
            onChange={handleDataChange}
            onBlur={handleOnBlur}
          />
        </NotationPanel>
        {error ? <Validate>Please input a valid expression!</Validate> : null}
        <DiceArea>
          {dices.map((dice, index) => {
            return <Dice num={dice} showAnimate={animate} index={index} />;
          })}
        </DiceArea>
        <Button onClick={handleDice}>Click to Roll Dice</Button>
        <Result>Total: {result}</Result>
        <br />
      </Container>
      <ListContainer>
        <TitleBox>
          <div style={{ width: "120px" }}></div>
          <ListTitle>Your results:</ListTitle>
          <Button onClick={handleClear} style={{ width: "120px" }}>
            Clear Logs
          </Button>
        </TitleBox>
        {diceLogs.map((log, index) => {
          return (
            <div className={`List+${index}`}>
              {index !== 0 ? (
                <Li>
                  <Link
                    to={`/detail/${index}`}
                    style={{
                      textDecoration: "none",
                      color: "#1f0454",
                      marginBottom: "10px",
                      fontSize: "18px",
                    }}
                  >
                    Expression:{log.Expression} Total: {log.Total}
                  </Link>
                </Li>
              ) : null}
            </div>
          );
        })}
        <br />
        <br />
      </ListContainer>
    </>
  );
};
