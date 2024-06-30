import GlobalStyle from "./styles/global.js"
import styled from "styled-components";
import Form from "./components/forms.js";
import Grid from "./components/grid.js";
import { useState, useEffect } from "react";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  aling-items: center;
  gap: 10px;
`

const Title = styled.h2``;

function App() {
  const [heroes, setHeroes] = useState([]);
  const [onEdit, setOnEdit] = useState(null);

  const getHeroes = async () => {
    try {
      const res = await axios.get("http://localhost:8000");
      setHeroes(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => { getHeroes()}, [setHeroes]);
  
  return (
    <>
      <Container>
        <Title>Heróes</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getHeroes={getHeroes} />
        <Grid heroes={heroes} setHeroes={setHeroes} setOnEdit={setOnEdit} />
      </Container>
      <GlobalStyle />
    </>
  )
}

export default App;
