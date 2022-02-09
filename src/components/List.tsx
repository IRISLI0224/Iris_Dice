import React from "react";
import styled from "styled-components";
import { getCookies } from "../utils/cookies";



const ListContainer = styled.div`
  height: auto;
  margin: auto;
  margin-bottom: 50px;
  text-align: center;
  width: 60%;
  background-color: rgba(34, 34, 34, 0.349);
  border-radius: 10px;
`;

const ListTitle = styled.div`
  padding: 20px;
  color: #d8d8d8;
  font-size: 25px;
`;

export const List = () => {
  const diceResultsString =getCookies();
  const diceResults =diceResultsString?JSON.parse(diceResultsString):undefined;

  return (
    <ListContainer>
      <ListTitle>Your results:</ListTitle>
      {diceResults.map((log, index) => {
        return (
          <li>
            <a href="/rolls/1">log.Expression</a>
          </li>
        );
      })}
    </ListContainer>
  );
};
