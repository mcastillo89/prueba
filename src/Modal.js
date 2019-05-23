import React from 'react';
import styled from "styled-components";

const Modal = ({ data, handleCloseModal }) => {

    return (
        <React.Fragment>
            {data &&
                <a onClick={handleCloseModal}>
                    <Overlay >
                        <Content>
                            <Img src={data.thumbnailUrl} />
                            <Title>{data.title}</Title>
                            <Description>{data.title}</Description>
                        </Content>
                    </Overlay>
                </a>
            }
        </React.Fragment>

    );
}

export default Modal;

const Overlay = styled.div`
    width: 100%;
    height: 100%;
    z-index: 99;
    background: rgba(0,0,0,0.5);
    position: absolute;
    top: 0px; 
    left: 0px;
    display:flex;
    align-items: center;
    justify-content: center;
`
const Content = styled.div`
    height: 300px;
    width: 500px;
    border-radius: 10px 10px 10px 10px;
`
const Img = styled.div`
    height: 140px;
    width: 100%;
    background: #eee;
    background-image: url(${props => props.src});
    background-size: cover;
    border-radius: 10px 10px 0px 0px;
`
const Title = styled.div`
    height: 50px;
    background: #1a75bb;
    line-height: 50px;
    padding-left: 20px;
    font-size: 1.2em;
    font-weight: bold;
    color: white;
`
const Description = styled.div`
    height: 70px;
    background: white;
    padding: 20px;
    border-radius: 0px 0px 10px 10px;
`