import styled from "styled-components";

export const Container = styled.h2`
    margin: 1.25rem 0;
    @media screen and (min-width: 426px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    @media screen and (min-width: 480px) {
        display: grid;
        grid-template-columns: auto auto;
    }
    @media screen and (min-width: 720px) {
        grid-template-columns: auto auto auto;
    }
`;