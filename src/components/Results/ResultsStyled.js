import styled from "styled-components";

export const ResultsCon = styled.div`
  width: 100%;

  padding-top: 24px;
  padding-bottom: 40px;

  background: linear-gradient(to bottom, #7755ff, #6943ff, #2f2ce9);

  font-family: "HankenGrotesk";

  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;

  & h3 {
    margin-bottom: 24px;

    font-weight: 700;
    color: #cac9ff;
  }

  & h5 {
    font-size: 24px;
    font-weight: 700;

    margin-bottom: 8px;

    color: #fff;
  }

  & p {
    font-size: 16px;

    color: #cac9ff;
  }
`;

export const Circle = styled.div`
  width: 140px;
  height: 140px;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 24px;

  align-content: center;

  background: linear-gradient(to bottom, #4d21c9, #2521c9);

  border-radius: 50%;

  & > h4 {
    font-size: 40px;

    color: #fff;
  }

  
`;
