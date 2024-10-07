import styled from "styled-components";
import MuiCard from "@mui/material/Card";
import {Grid2} from "@mui/material";

export const ParentCard = styled(MuiCard)`
    margin: 1em;
    padding: 0.5em;
    max-width: 400px;
    border: 2px solid darkblue;
`;

export const Grid = styled(Grid2)`
    justify-content: center;
    align-items: center;
`;