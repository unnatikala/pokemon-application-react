import styled from "styled-components";

export const CardWrapper = styled.div`
  overflow: hidden;
  height: auto;
  border-radius: 15px;
  font-family: "Roboto", sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
  border-radius: 5px;
  width: 30%;
  padding: 20px;
`;

export const StyledH3 = styled.h3`
  margin: 0px;
  font-size: 16px;
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: end;
`;

export const StyledDivList = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

export const StyledParagraph = styled.p`
  padding: 10px;
  border: 1px solid;
  background-color: #3ab09e;
  color: white;
`;

export const StyledDivHome = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const StyledDivAlign = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const ButtonComponent = styled.button`
  height: 35px;
  background-color: #3ab09e;
  color: white;
  width: 10%;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: white;
  font-family: "Roboto", sans-serif;
  margin-top: 15px;
  margin-left: -9px;
`;

export const StyledOrderedList = styled.ol`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
