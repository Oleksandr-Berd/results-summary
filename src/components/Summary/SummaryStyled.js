import styled from "styled-components";

export const SummaryCon = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 24px;
  padding-bottom: 30px;

  text-align: left;
  font-family: "HankenGrotesk";

  background-color: #fff;

  @media (min-width: 1280px) {
    width: 266px;

    padding-left: 72px;
    padding-right: 40px;
    padding-top: 38px;
    padding-bottom: 32px;

    border-top-right-radius: 32px;
    border-bottom-right-radius: 32px;
  }
  & > h3 {
    margin-left: 2px;
    margin-bottom: 24px;

    font-size: 18px;
    font-weight: 700;
    color: #303b59;

    @media (min-width: 1280px) {
      margin-bottom: 28px;

      font-size: 24px;
    }
  }
`;

export const SummaryList = styled.ul`
  & div {
    display: flex;
    flex-direction: row;
  }
`;

export const ListItem = styled.li`
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 17px;
  padding-bottom: 18px;

  margin-bottom: 24px;

  display: flex;
  flex-direction: row;

  justify-content: space-between;

  font-weight: 700;
  font-size: 16px;
  color: #303b59;
  background-color: ${({ content }) =>
    content === "red"
      ? "rgb(255, 85, 85, 0.25)"
      : content === "yellow"
      ? "rgb(255, 178, 30, 0.25)"
      : content === "green"
      ? "rgb(0, 187, 143, 0.25)"
      : "rgb(17, 37, 214, 0.25)"};

  border-radius: 12px;

  @media (min-width: 1280px){
margin-bottom: 41px;

    font-size: 18px;
  }

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  & svg {
    margin-right: 12px;
  }

  & h4 {
    color: ${({ content }) =>
      content === "red"
        ? "rgb(255, 85, 85)"
        : content === "yellow"
        ? "rgb(255, 178, 30)"
        : content === "green"
        ? "rgb(0, 187, 143)"
        : "rgb(17, 37, 214)"};
  }

  & span {
    opacity: 0.5;
  }
`;

export const Button = styled.button`
  width: 100%;

  padding-top: 16px;
  padding-bottom: 16px;

  background-color: #303b59;
  color: #fff;
  font-size: 18px;
  font-weight: 700;

  border-radius: 128px;

  transition: background-color 1s linear;
  &:hover,
  &:focus,
  &:active {
    background: linear-gradient(to bottom, #7755ff, #6943ff, #2f2ce9);

    cursor: pointer;
  }
`;
