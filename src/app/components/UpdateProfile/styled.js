import styled from "styled-components";

export const Container = styled.div`
    width: 17.5rem;
    height: 20.625rem;
    background-color: var(--color-second);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 0.75rem;
    font-family: 'Inter', sans-serif;
    box-shadow: 0.0625rem 0.125rem 0.9375rem var(--color-fourth);
    .containerButton{
        visibility: hidden;
    }
    .containerButtonOpen{
        visibility: visible;
        width: 15.625rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: row;
        .containerButton__save{
            width: 80px;
            height: 2.5rem;
            border-radius: 0.625rem;
            border: none;
            background-color: var(--color-third);
            text-transform: uppercase;
            font-weight: 700;
            cursor: pointer;
        }
        .containerButton__cancel{
            width: 80px;
            height: 2.5rem;
            border-radius: 0.625rem;
            border: none;
            background-color: red;
            color: var(--color-fourth);
            text-transform: uppercase;
            font-weight: 700;
            cursor: pointer;
        }
    }
    .containerForm__labelInput{
        display: flex;
        align-items: baseline;
        justify-content: center;
        flex-direction: column;
        .containerForm__label{
            color: var(--color-fourth);
        }
        .containerForm__input{
            visibility: hidden;
            width: 15.625rem;
            height: 1.25rem;
        }
        .containerForm__inputOpen{
            visibility: visible;
            width: 15.625rem;
            height: 2.5rem;
            border-radius: 0.75rem;
            margin: 0.625rem 0;
            padding:  0 0 0 0.625rem;
            :focus{
                border: 0.1875rem solid var(--color-third);
                box-shadow: none;
                outline: 0;
            }
        }
    }
    .button__UpdateOpen{
        display: none;
        width: 15.625rem;
        height: 2.5rem;
    }
    .button__Update{
        display: block;
        width: 15.625rem;
        height: 2.5rem;
        border-radius: 0.75rem;
        border: none;
        background-color: var(--color-third);
        text-transform: uppercase;
        font-weight: 700;
        cursor: pointer;
    }
`;
