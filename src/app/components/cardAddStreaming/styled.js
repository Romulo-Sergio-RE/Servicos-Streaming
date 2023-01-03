import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: center;
    flex-direction: column;
    .title{
        font-size: 1.125rem;
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        padding: 0.625rem;
        color: var(--color-fourth);
        text-transform: uppercase;
    }
    .card__container{
        width: 18.75rem;
        height: 4.375rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: var(--color-third);
        border-radius: 0.625rem;
        padding: 0 1.5625rem;
        .card__img{
            width: 3.125rem;
            height: 3.125rem;
            border-radius: 0.5rem;
        }
        .card__subtitle{
            font-size: 1.375rem;
            font-family: 'Inter', sans-serif;
            font-weight: 700;
        }
        .card__IconBtnAdd{
            width: 1.5rem;
            height: 1.5rem;
            color: red;
        }
        .card__btnAdd{
            display: none;
            cursor: pointer;
        }
    }
    @media screen and (min-width: 426px) {
        .card__container{
            width: 12.5rem;
            height: 9.375rem;
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-direction: column;
            background-color: var(--color-third);
            border-radius: 0.625rem;
            padding: 0 1.5625rem;
            margin: 0 1.25rem;
            .card__img{
                width: 4.6875rem;
                height: 4.6875rem;
                border-radius: 0.5rem;
            }
            .card__btnAdd{
                display: block;
                width: 6.25rem;
                height: 2.1875rem;
                border-radius: 0.5rem;
                border: none;
                text-transform: uppercase;
                background-color: var(--color-second);
                color: var(--color-fourth);
                font-family: 'Inter', sans-serif;
                cursor: pointer;
            }
            .card__IconBtnAdd{
                display: none;
            }
        }
    }
`;
