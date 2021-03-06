import React from "react";
import styled from "styled-components/macro";
import dayjs from "dayjs";
import Snowfall from "react-snowfall";

const Main = styled.main`
  height: 100%;

  padding: 0 1rem;
  box-sizing: border-box;

  background-image: url("./images/snow.svg");
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: auto 50vh;
  background-color: #f1f3f5;

  @media screen and (max-height: 600px) {
    background: none;
  }
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 50vh;

  @media screen and (max-height: 600px) {
    height: 100%;
  }
`;

const CheerMessage = styled.p`
  font-family: "NanumBarunpen";
  font-size: 2rem;

  color: #495057;

  @media screen and (max-width: 560px) {
    font-size: 1.4rem;
    margin: 0.2rem 0;
  }

  @media screen and (max-height: 600px) {
    margin: 0.2rem 0;
  }
`;

const DDayText = styled.p`
  font-family: "NanumBarunpen";
  font-size: 7rem;
  margin: 0;
`;

const ToChristmas = styled.small`
  font-family: "NanumBarunpen";
  font-size: 1.5rem;
  color: #868e96;
`;

export default function HomePage() {
  const dday = Math.floor(dayjs().diff(dayjs("2020-12-25"), "day", true));
  const ddayString =
    dday === 0 ? "-DAY" : dday < 0 ? dday.toString() : "+" + dday;

  return (
    <Main>
      <Snowfall color="#ced4da" />
      <ContentBox>
        <CheerMessage>조금 특별했던 2020, 수고 많으셨습니다! 🎄</CheerMessage>
        <DDayText>D{ddayString}</DDayText>
        <ToChristmas>크리스마스까지</ToChristmas>
      </ContentBox>
    </Main>
  );
}
