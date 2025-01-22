import styled from "styled-components";

export const ResultsCon = styled.div`
  width: 100%;

  padding-top: 24px;
  padding-bottom: 40px;

  background: linear-gradient(to bottom, #7755ff, #6943ff, #2f2ce9);

  font-family: "HankenGrotesk";

  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;

  @media (min-width: 1280px) {
    width: 266px;

    padding-left: 56px;
    padding-right: 56px;
    padding-top: 38px;
    padding-bottom: 46px;

    border-radius: 32px;

    transform: translateX(32px);
  }

  & h3 {
    margin-bottom: 24px;

    font-weight: 700;
    color: #cac9ff;

    @media (min-width: 1280px) {
      margin-bottom: 36px;

      font-size: 24px;
    }
  }

  & h5 {
    margin-bottom: 8px;

    font-size: 24px;
    font-weight: 700;

    color: #fff;

    @media (min-width: 1280px){
        margin-bottom: 16px;

        font-size: 32px;
    }
  }

  & p {
    font-size: 16px;

    color: #cac9ff;

    @media (min-width: 1280px){
        font-size: 18px;
    }
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

  @media (min-width: 1280px){
    width: 200px;
    height: 200px;

    margin-bottom: 28px;
  }

  & > h4 {
    font-size: 40px;

    color: #fff;

    @media (min-width: 1280px){
        font-size: 56px;
    }
  }

  
`;
