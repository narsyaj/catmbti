import React from 'react';
import styled from 'styled-components';
import { ProgressBar, Button } from 'react-bootstrap'
import { QuestionData } from '../assets/data/questiondata';

const Question = () => {
    return (
        <Wrapper>
            <ProgressBar variant="danger" now={80} style={{marginTop: '20px'}}/>
            <Title>{QuestionData[0].title}</Title>
            <ButtonGroup>
                <Button style={{width:"40%", minHeight: "200px", fontSize:"15pt"}}>{QuestionData[0].answera}</Button>
                <Button style={{width:"40%", minHeight: "200px", fontSize:"15pt", marginLeft: "20px"}}>{QuestionData[0].answerb}</Button>
            </ButtonGroup>
        </Wrapper>
    )
}

export default Question;

const Wrapper = styled.div`
    height: 100vh;
    width: 100%
`

const Title = styled.div`
    font-size: 30pt;
    text-align: center;
    margin-top: 40px;
`

const ButtonGroup = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`