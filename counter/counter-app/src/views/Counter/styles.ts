import styled, {createGlobalStyle} from "styled-components";
import MuiButton from "@mui/material/Button";
import MuiContainer from "@mui/material/Container";
import MuiBox from "@mui/material/Box";
import MuiCard from "@mui/material/Card"

export const Root = styled.div`
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;
    
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
`;

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        background-color: #f0f0f0;
    }`;

export const Button = styled(MuiButton)`
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #007bff;
    cursor: pointer;
    transition: border-color 0.25s;
`;

Button.defaultProps = {
    type: "button",

};

export const H1 = styled.h1`
    font-size: 3.2em;
    line-height: 1.1;
    text-align: center;
`;

export const Container = styled(MuiContainer)`
    display: flex;
    justify-content: center;
    max-width: 1000px;
`;

export const Box = styled(MuiBox)`
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
`;

export const Card = styled(MuiCard)`
    margin: 1em;
    padding: 0.5em;
    max-width: 400px;
`;