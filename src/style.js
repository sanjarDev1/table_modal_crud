import styled from "styled-components";
import {  FiTrash2 } from "react-icons/fi";
import { ImPencil } from "react-icons/im";
import { Input } from 'antd'


export const Wrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`
export const Icon1 = styled(FiTrash2)`
width: 20px;
height: 20px;
margin-right: 20px;
:active{
  transform: scale(0.8);
}
`;

export const Icon2 = styled(ImPencil)`
width:20px;
height: 20px;
:active{
  transform: scale(0.8);
}
`


export const Table = styled.table`
width: 50%;
border: 1px solid rgba(0,0,0,0.5);
color: #6B7280;
`

export const Text =styled.div`
color: black;
font-weight: ${({bold})=>bold && 600};
`

export const Th = styled.th`
/* margin-left: 10px; */
padding-left: 10px;
text-align: left;

`

export const Thead = styled.thead`
background-color: rgba(0,0,0,0.2);
height: 50px;
text-align: start;
`;

export const Tr = styled.tr`
margin-left: 20px;
border: 1px solid rgba(0,0,0,0.5);
`

export const Td =styled.td`
padding-left: 10px;
`

export const Active = styled.div`
padding: 5px;
background-color: ${({status})=> {switch (status) {
    case "ACTIVE":
      return "#D1FAE5";
    case "INACTIVE":
      return "#FEF3C7";
    case "OFFLINE":
      return "#FEE2E2";
    default:
      return "red";
  }}};
color:${({status})=> {switch (status) {
    case "ACTIVE":
      return "#065F46";
    case "INACTIVE":
      return "#92400E";
    case "OFFLINE":
      return "#B95959";  
    default:
      return "#fff";
  }}} ;
border-radius:10px;
text-align: center;
font-weight: 700;
`;



export const InputAnt = styled(Input)`
width: 90%;
`

export const InputWrapper = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
margin-bottom: 10px;
`