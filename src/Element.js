import React from 'react';

import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBaby } from '@fortawesome/free-solid-svg-icons'

const Element = ({ data }) => {
    console.log(data);
    return (
        <Container>
            <Img src={data.thumbnailUrl} />
            <SubContent>
                <Icon><FontAwesomeIcon style={styles.icon} icon={faBaby} /></Icon>
                <Titles>
                    <Title>{data.title}</Title>
                    <Subtitle>{data.title}</Subtitle>
                </Titles>
            </SubContent>
        </Container>
    )
};

export default Element;

const styles = {
    icon: {
        marginTop: "5px",
        color: "white",
        width: "40px",
        height: "26px",
        fontSize: "1.1em"
    }
}

const Container = styled.div`
    background: white;
    height: 180px;
    width: 180px;
    display: flex;
    flex-flow: column;
    border-radius: 10px;
    box-shadow: 0px 4px 4px 2px #ddd;
    margin: 10px;
    `;
const Img = styled.img`
        height: 125px;
        border-radius: 10px 10px 0px 0px;
    `;
const SubContent = styled.div`
        display: flex;
        flex-flow: row;
    `;
const Icon = styled.div`
    width: 40px;
    height: 40px;
    background: rgb(30, 173, 225);
    border-radius: 50px;
    margin: 8px 5px;
    `;
const Titles = styled.div`
    width: calc(100% - 50px);
    height: 45px;
    background: transparent;
    display: flex;
    flex-flow: column;
    padding: 5px;
    `;
const Title = styled.div`
    font-size: 0.6em;
    `;
const Subtitle = styled.div`
    font-size: 0.5em;
    `;