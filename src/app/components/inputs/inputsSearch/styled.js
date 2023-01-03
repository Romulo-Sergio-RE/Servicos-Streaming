import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    .input{
        .input__search{
            width: 18.75rem;
            height: 2.5rem;
            border-radius: 0.75rem;
            padding-left: 2.1875rem;
            font-size: 1.0625rem;
            font-weight: 300;
            font-family: 'Inter', sans-serif;
            border: none;
            ::placeholder{
                color: var(--color-second/0.2);
            }
            :focus{
                box-shadow: none;
                outline: 0;
            }
        }
        .icon__search{
            width: 1.125rem;
            height: 1.125rem;
            position: absolute;
            margin: 0.625rem 0 0 0.625rem;
            color: var(--color-second);
        }
    }
`;