import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import axios from "axios";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({ onEdit, getHeroes, setOnEdit }) => {


    const ref = useRef();

    useEffect(() =>{
      if(onEdit) {
        const heroes = ref.current;

        heroes.nome.value =  onEdit.nome;
        heroes.planeta.value = onEdit.planeta;
        heroes.poder.value = onEdit.poder;
      }
    }, [onEdit]);

    const handleSubmit = async (e) => {
      e.preventDefault();

      const heroes = ref.current;

      if (onEdit) {
        await axios 
          .put("http://localhost:8000/" + onEdit.id, {
            nome: heroes.nome.value,
            planeta: heroes.planeta.value,
            poder: heroes.poder.value,
          })
      } else {
        await axios
          .post("http://localhost:8000/", {
            nome: heroes.nome.value,
            planeta: heroes.planeta.value,
            poder: heroes.poder.value,
          })
    }

    heroes.nome.value =  "";
    heroes.planeta.value = "";
    heroes.poder.value = "";

    setOnEdit(null);
    getHeroes();

    };
    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label>Nome</Label>
                <Input name="nome" />
            </InputArea>
            <InputArea>
                <Label>Planeta</Label>
                <Input name="planeta" />
            </InputArea>
            <InputArea>
                <Label>Poder</Label>
                <Input name="poder" />
            </InputArea>
            <Button type="submit">SALVAR</Button>
        </FormContainer>
    );
};

export default Form;