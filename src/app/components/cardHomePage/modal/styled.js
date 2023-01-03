import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    background-color: rgba(37, 37, 37, 0.45);
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row-reverse;
    position: fixed;
    .iconClose{
        color: var(--color-fourth);
        margin: 0 0 0 0.625rem;
    }
    .modal__container{
        width: 15.625rem;
        height: 28.125rem;
        background-color: var(--color-second);
        border-radius: 0.625rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        .modal__title{
            font-family: 'Inter', sans-serif;
            color: var(--color-fourth);
        }
        .container__info{
            width: 15.625rem;
            height: 9.375rem;
            font-family: 'Inter', sans-serif;
            color: var(--color-fourth);
            font-size: 1rem;
            display: flex;
            align-items: baseline;
            justify-content: space-around;
            flex-direction: column;
            padding: 1.5625rem;
        }

        .modal__btn{
            width: 10.625rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .modal__btn--Add{
                width: 5rem;
                height: 2.1875rem;
                border: none;
                border-radius: 0.625rem;
                background-color: var(--color-third);
                color: var(--color-second);
                text-transform: uppercase;
                font-family: 'Inter', sans-serif;
                font-weight: 700;
                cursor: pointer;
                :disabled{
                    cursor: default;
                }
            }
            .modal__btn--Cancelar{
                width: 5rem;
                height: 2.1875rem;
                border: none;
                border-radius: 0.625rem;
                background-color: red;
                color: var(--color-fourth);
                text-transform: uppercase;
                font-family: 'Inter', sans-serif;
                font-weight: 700;
                cursor: pointer;
            }
        }
        .btnDelete{
            width: 10.625rem;
            height: 2.1875rem;
            background-color: var(--color-third);
            color: var(--color-second);
            text-transform: uppercase;
            font-family: 'Inter', sans-serif;
            font-weight: 700;
            cursor: pointer;
            border: none;
            border-radius: 0.625rem;
            margin-top: 0.625rem;
        }
    }
    @media screen and (min-width: 480px) {
        .modal__container{
            width: 21.875rem;
            .container__info{
                padding: 0;
            }
        }
    }
    @media screen and (min-width: 720px) {
        .modal__container{
            width: 25rem;
        }
    }
`;
