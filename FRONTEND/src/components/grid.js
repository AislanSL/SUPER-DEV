import React from "react";
import styled from "styled-components";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa";

const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`
const Thead = styled.thead``;

const Tbody = styled.tbody``;

const Tr = styled.tr``;

const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};

`;

const Grid = ({ heroes, setHeroes, setOnEdit }) => {

    const handleEdit = (item) => {
        setOnEdit(item);
    }

    const handleDelete = async (id) => {
        await axios
          .delete("http://localhost:8000/" + id)
          .then(({ data }) => {
            const newArray = heroes.filter((heroes) => heroes.id !== id);
    
            setHeroes(newArray);
          })
          .catch(({ data }) => console.error(data));
    
        setOnEdit(null);
      };

    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>Planeta</Th>
                    <Th>Poder</Th>
                </Tr>
            </Thead>
            <Tbody>
                {heroes.map((item, i) => (
                    <Tr key={i}>
                        <Td width="30%">{item.nome}</Td>
                        <Td width="30%">{item.planeta}</Td>
                        <Td width="50%">{item.poder}</Td>
                        <Td width="5%">
                            <FaEdit onClick={() => handleEdit(item)}/>
                        </Td>
                        <Td width="5%">
                            <FaTrash onClick={() => handleDelete(item.id)} />
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
};

export default Grid;