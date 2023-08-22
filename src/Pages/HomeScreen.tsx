import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HomeScreen = () => {
  return (
    <Container>
      <Main>
        <Card to={`iiuu99/article`}>
          <Content>
            <Title>title</Title>
            <Sub>description</Sub>
            <Div />
            <div>
              <Cat>category</Cat>
            </div>
          </Content>
          <Images />
        </Card>
      </Main>
    </Container>
  );
};

export default HomeScreen;

const Cat = styled.div`
  width: 100px;
  height: 30px;
  border-radius: 20px;
  background-color: purple;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
`;

const Div = styled.div`
  flex: 1;
`;

const Images = styled.img`
  width: 40%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  border: 1px solid silver;
`;

const Sub = styled.div`
  font-size: 15px;
  font-weight: 400;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
`;

const Content = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
`;
const Card = styled(Link)`
  width: 500px;
  min-height: 150px;
  border-radius: 5px;
  border: 1px solid silver;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  margin: 10px 10px;
  text-decoration: none;
  color: black;
`;

const Main = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 100%;
`;
