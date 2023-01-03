import styled from "styled-components";

export const ContainerInternal = styled.div`
    width: 100%;
    .nav__menuOpen{
        height: 2.5rem;
        background-color: var(--color-second);
        display: flex;
        align-items: center;
        justify-content: right;
        .link{
            display: none;
            font-size: 1.125rem;
            font-weight: 500;
            font-family: 'Inter', sans-serif;
        }
        .icone__close{
            display: none;
        }
        .icone__menu{
            width: 1.5rem;
            height: 1.5rem;
            color: var(--color-fourth);
            margin-right: 0.625rem;
        }
    }
    .nav__Down{
        width: 100%;
        height: 13.125rem;
        background-color: var(--color-second);
        display: flex;
        align-items: flex-end;
        justify-content: initial;
        flex-direction: column;
        position: absolute;
        z-index: 2;
        .link{
            width: 100%;
            height: 2.5rem;
            display: flex;
            background-color: var(--color-second);
            align-items: center;
            justify-content: center;
            color: var(--color-fourth);
            text-decoration: none;
            font-size: 1.125rem;
            font-weight: 500;
            font-family: 'Inter', sans-serif;
            :active{
                color: var(--color-second);
                background-color: var(--color-third);
            }
        }
        .icone__close{
            display: block;
            width: 1.5rem;
            height: 1.5rem;
            color: var(--color-fourth);
            margin: 0.625rem 0.625rem 0.9375rem 0;
        }
        .icone__menu{
            display: none;
        }
    }

    @media screen and (min-width: 426px) {
        .nav__menuDown{
            display: none;
        }
        .nav__menuOpen{
            justify-content: center;
            height: 3.75rem;
            .link{
                display: block;
                text-decoration: none;
                color: var(--color-fourth);
                margin: 0 0.625rem;
            }
            .icone__menu{
                display: none;
            }
        }
    }
`;

export const Container = styled.div`
    width: 100%;
    .nav__menuOpen{
        height: 2.5rem;
        background-color: var(--color-second);
        display: flex;
        align-items: center;
        justify-content: right;
        flex-direction: row-reverse;
        .container{
            display: none;
        }
        .icone__close{
            display: none;
        }
        .icone__menu{
            width: 1.5rem;
            height: 1.5rem;
            color: var(--color-fourth);
            margin-right: 0.625rem;
        }
        .arrowLeft{
            display: none;
        }
        
    }
    .nav__Down{
        width: 100%;
        height: 11.25rem;
        background-color: var(--color-second);
        display: flex;
        align-items: flex-end;
        justify-content: initial;
        flex-direction: column;
        position: absolute;
        z-index: 2;
        .arrowLeft{
            display: none;
        }
        .container{
            width: 100%;
            height: 6.25rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: column;
        }
        .container__btn{
            width: 50%;
            height: 2.5rem;
            text-transform: uppercase;
            font-weight: 700;
            font-family: 'Inter', sans-serif;
            border: none;
            margin: 0.3125rem 0 0 0;
            background-color: var(--color-third);
            border-radius: 0.75rem;
        }
        .icone__close{
            display: block;
            width: 1.5rem;
            height: 1.5rem;
            color: var(--color-fourth);
            margin: 1.4375rem 0.625rem 0 0;
        }
        .icone__menu{
            display: none;
        }
    }
    @media screen and (min-width: 700px) {
        .nav__menuOpen{
            flex-direction: row;
            align-items: center;
            justify-content: ${(props)=>{
                if(props.showUpArrowLeft){
                    return "space-between"
                }else{
                    return "end"
                }
            }};
            height: 3.75rem;
            .icone{
                display: none;
            }
            .arrowLeft{
                display: ${(props)=>{
                    if(props.showUpArrowLeft){
                        return "flex"
                    }else{
                        return "none"
                    }
                }};
                margin:  0 1.25rem;
                color: var(--color-fourth);
                width: 1.5rem;
                height: 1.5rem;
                cursor: pointer;
            }
            .container{
                display: flex;
                margin:  0 1.25rem;
            }
            .icone__menu{
                display: none;
            }
            .container{
                width: 14.375rem;
                height: 6.25rem;
                display: flex;
                align-items: center;
                justify-content: space-around;
                flex-direction: row;
            }
            .container__btn{
                width: 6.25rem;
                height: 2.5rem;
                text-transform: uppercase;
                font-weight: 700;
                font-family: 'Inter', sans-serif;
                border: none;
                margin: 0.3125rem 0 0 0;
                background-color: var(--color-third);
                border-radius: 0.75rem;
                cursor: pointer;
            }
        }
        
    }

`;
