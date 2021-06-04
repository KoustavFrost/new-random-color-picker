import styled from 'styled-components';

export const ButtonTypeOne = styled.button`
    border: none;
    color: white;
    background-color: green;
    padding: 1rem 2rem;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 1rem;
    cursor: pointer;
`;

export const ColorIdDiv = styled.div`
    font-size: 2rem;
    color: black;
    font-weight: 600;
    text-align: center;
`;

export const MainDiv = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : 'white'};
    position: absolute; 
    top: 0; 
    left: 0;
`;