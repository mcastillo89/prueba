import React, { useState, useEffect, useCallback } from 'react';
import logo from './logo.svg';
import './App.css';

import styled from "styled-components";
import axios from "axios";

import Element from "./Element";
import Modal from "./Modal";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

const config = {
  headers: { 'Authorization': "Bearer 09d23abf0c1d10e37592819dd8157ee06f22c0d308a8906d21e25c0de4f838859e0d5c1337aca40103b028ec81e948c6be382fce7c82d6ad273ad4fcd16e8f58" }
};

function App() {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState(1);
  const [modal, setModal] = useState(null);

  const getFetchUrl = useCallback(() => {
    return "https://jsonplaceholder.typicode.com/photos?albumId=" + query;
  }, [query]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(getFetchUrl(), config);
      setData(result.data);

    }
    fetchData();
  }, [getFetchUrl])

  const handleChangeQuery = (newDay) => {
    if (newDay < 1 || newDay > 5) return;
    setQuery(newDay);
  }

  const handleDetail = (e) => {
    console.log(e);
    setModal(e);
  }

  const handleCloseModal = () => {
    setModal(null);
  }

  return (
    <React.Fragment>
      <Modal data={modal} handleCloseModal={handleCloseModal} />
      <HeaderS>
        <UL>
          <LI ><BtnList active={query === 1} onClick={() => console.log(1)}>Dia 1</BtnList></LI>
          <LI ><BtnList active={query === 2} onClick={() => console.log(1)}>Dia 2</BtnList></LI>
          <LI ><BtnList active={query === 3} onClick={() => console.log(1)}>Dia 3</BtnList></LI>
          <LI ><BtnList active={query === 4} onClick={() => console.log(1)}>Dia 4</BtnList></LI>
          <LI ><BtnList active={query === 5} onClick={() => console.log(1)}>Dia 5</BtnList></LI>
        </UL>
      </HeaderS>
      <Main>
        <Left>
          <BtnLeft onClick={() => handleChangeQuery((query - 1))}> <FontAwesomeIcon style={{ marginTop: "5px" }} icon={faAngleLeft} /></BtnLeft>
        </Left>
        <Container>
          <CurrentDay>Dia {query}</CurrentDay>
          {data && data.map((e, k) => k < 4 ? <Element handleDetail={handleDetail} data={e} /> : null)}
        </Container>
        <Rigth>
          <BtnRight onClick={() => handleChangeQuery((query + 1))}><FontAwesomeIcon style={{ marginTop: "5px" }} icon={faAngleRight} /></BtnRight>
        </Rigth>
      </Main>escape
      <FooterS></FooterS>
    </React.Fragment>
  );
}

export default App;

const Main = styled.div`
      background: red;
      height: calc(100% - 80px);
      display: flex;
      flex-flow: row;
    `;

const HeaderS = styled.div`
      background: #1a75bb;
      height: 50px;
      display: block;
    `;
const FooterS = styled.div`
      background: white;
      height:30px;
      display: block;
    `;

const Container = styled.div`
      background: white;
      flex: 3 1 60%;
      order: 2;
      height: 100%;
      display: flex;
      flex-flow: wrap;
      align-items: flex-start;
      align-content: flex-start;
      justify-content: center;
    `;

const Left = styled.div`
      background: white;
      height: 100%;
      width: 100%;
      flex: 1 6 20%;
      order: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    `;

const Rigth = styled.div`
      background: white;
      height: 100%;
      width: 100%;
      flex: 1 6 20%;
      order: 3;
      display: flex;
      align-items: center;
      justify-content: center;
    `;
const UL = styled.ul`
      margin: 0px;
      padding: 0px;
      margin-left: 100px;
    `;

const LI = styled.li`
      display: inline;
    `;
const BtnList = styled.button`
        background: transparent;
        border: none;
        height: 50px;
        padding: 0px 21px;
        color: white;
        border-bottom: 3px solid white;
        cursor: pointer;
        &:focus {outline:0;}
    
    ${({ active }) => !active && `
      color: #dddddd;
      border-bottom: none;
    `}
      `;

const BtnLeft = styled.button`
        background: rgb(117, 183, 83);
        border: 0px; 
        height: 50px;
        width: 50px;
        border-radius: 25px;
        font-size: 2em;
        color: rgba(255, 255, 255, .7);
        cursor: pointer;
        &:focus {outline:0;}
      `
const BtnRight = styled.button`
        background: rgb(117, 183, 83);
        border: 0px; 
        height: 50px;
        width: 50px;
        border-radius: 25px;
        font-size: 2em;
        color: rgba(255, 255, 255, .7);
        cursor: pointer;
        &:focus {outline:0;}
      `
const CurrentDay = styled.div`
  width: 100%;
  margin-left: 10px;
    margin-bottom: 20px;
    font-size: 1.2em;
    font-weight: bold;
    margin-top: 100px;
    color: #1a75bb;
`