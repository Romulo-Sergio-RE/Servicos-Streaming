import styled from "styled-components";

export const Container = styled.div`
    .container{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-family: 'Inter', sans-serif;
        margin-top: 1.5625rem;
    }
    .container__title{
        font-size: 2rem;
        color: var(--color-fourth);
    }
    .container__info{
        
    }
    .container__infoText{
        width: 12.5rem;
        text-align: center;
        color: var(--color-fourth);
        margin-top: 1.5625rem;
    }
    .container__infoImg{
        width: 12.5rem;
        height: 12.5rem;
        margin-top: 1.25rem;
        border-radius: 1.25rem;
        outline: 0.25rem solid var(--color-second);
    }
    @media screen and (min-width: 37.5rem) {
        .container__info{
            width: 35.625rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 1.875rem;
        }
        .container__infoText{
            width: 18.75rem;
            color: var(--color-fourth);
            margin-top: 1.5625rem;
            font-size: 1.5rem;
        }
        .container__infoImg{
            width: 15.625rem;
            height: 12.5rem;
        }
    }
    @media screen and (min-width: 63.75rem) {
        .container__info{
            width: 43.75rem;
            margin-top: 2.5rem;
        }
        .container__infoText{
            width: 18.75rem;
            color: var(--color-fourth);
            margin-top: 1.5625rem;
            font-size: 1.5rem;
        }
        .container__infoImg{
            width: 18.75rem;
            height: 15.625rem;
        }
    }
`;
