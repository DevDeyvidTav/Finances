import { keyframes } from "styled-components";
import styled from "styled-components";

const animate = keyframes `
    0%{
        transform: translateX(-100px);
        opacity: 0;
    }
    50%{
        opacity: 0.3;
    }
    100%{
        transform: translateX(0);
        opacity: 1;
    }
`

export const Container = styled.div `
    width: 100%;
    margin-bottom: 25px;
    animation: ${animate} .5s;

`
;