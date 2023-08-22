import React, { useState } from "react";
import styled from "styled-components";

const CreateArticle = () => {
  const [title, setTitle] = useState<string>("");
//   const [title, setTitle] = useState<string>("");
//   const [title, setTitle] = useState<string>("");
//   const [title, setTitle] = useState<string>("");
  return (
    <div>
      <center
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Input
          placeholder="Enter Article Title"
          value={title}
          onChange={(e: any) => {
            setTitle(e.target.value);
          }}
        />
        <Input
          placeholder="Enter Article Description"
          value={title}
          onChange={(e: any) => {
            setTitle(e.target.value);
          }}
        />
        <Input
          placeholder="Enter Article Category"
          value={title}
          onChange={(e: any) => {
            setTitle(e.target.value);
          }}
        />
         <br />
         <br />
         <div>
            Content
         </div>
         <br />
         <br />
        <Button>Publish</Button>
      </center>
    </div>
  );
};

export default CreateArticle;

const Button = styled.div`
  width: 130px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid black;
  font-weight: 700;
  outline: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  background-color: black;
  color: white;
  align-items: center;
  transition: all 400ms;

  :hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  outline: none;
  border-radius: 5px;
  padding-left: 10px;
  border: 1px solid silver;
  margin: 10px;
`;
