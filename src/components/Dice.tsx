import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const DiceDisplay = styled(motion.div).attrs(() => ({
  initial: false,
  variants,
}))`
  text-align: center;
  height: 80px;
  width: 80px;
  background-color: #edf6ff;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  @media (max-width: 768px) {
    height: 50px;
    width: 50px;
  }
`;

const variants = {
  start: {
    rotate: [0, 360, 0, 0, 0],
    transition: { duration: 3 },
  },
  end: {},
};

const DiceNumber = styled.div`
  font-size: 30px;
  margin-top: 22px;
  @media (max-width: 768px) {
    font-size: 30px;
    margin-top: 12px;
  }
`;

const Dice = ({ num, showAnimate, index }) => {
  return (
    <>
      <DiceDisplay animate={showAnimate ? "start" : "end"}>
        <DiceNumber> {num}</DiceNumber>
      </DiceDisplay>
    </>
  );
};

export default Dice;
