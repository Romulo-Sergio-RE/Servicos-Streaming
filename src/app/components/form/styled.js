import styled from "styled-components";

export const ContainerSignIn = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    .container__form{
        width: 17.5rem;
        height: ${(props) =>{
            if(props.height){
                return '20.625rem';
            }else{
                return '23.75rem';
            }
        }};
        background-color: var(--color-second);
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        border-radius: 0.75rem;
        font-family: 'Inter', sans-serif;
        box-shadow: 0.0625rem 0.125rem 0.9375rem var(--color-fourth);
    }
    .title{
        color: var(--color-fourth);
        text-transform: uppercase;
        margin: 0 0 0.625rem 0;
    }
    .form{
        display: flex;
        align-items: baseline;
        justify-content: center;
        flex-direction: column;
    }
    .form__label{
        color: var(--color-fourth);
    }
    .form__input{
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
    .form__btn{
        width: 15.625rem;
        height: 2.5rem;
        border-radius: 0.75rem;
        border: none;
        background-color: var(--color-third);
        text-transform: uppercase;
        font-weight: 700;
        cursor: pointer;
        margin: 0.9375rem 0 0 0;
    }
    .form__btnRegister{
        color: var(--color-fourth);
        text-decoration: none;
        margin: 0.9375rem 0 0 0;
    }
    .form__btnRegister--link{
        color: var(--color-third);
        text-decoration: none;
        text-transform: uppercase;
    }
`;