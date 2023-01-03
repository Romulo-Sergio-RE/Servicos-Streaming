import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ContainerInternal,Container } from "./styled";
import { AiOutlineClose, AiOutlineMenu,AiOutlineArrowLeft } from 'react-icons/ai';
import { Link } from "react-router-dom";
import { useAuth } from "../../context/userAuthContext";

const Header = (props) =>{

    const[Nav, setNav] = useState(true)
    const user = useAuth()

    const navigate = useNavigate()

    const login = () =>{
        navigate("/signIn")
    }
    const cadastrar = () =>{
        navigate("/register")
    }
    const returnLandPage = () =>{
        navigate("/")
    }

    return(
        <>
            {props.internal?
                <ContainerInternal> 
                    <div className={Nav ? "nav__menuOpen" :"nav__Down"}>
                        <div>
                            <AiOutlineClose 
                                className={"icone__close"}
                                onClick={()=>setNav(!Nav)}
                            />
                            <AiOutlineMenu 
                                className={"icone__menu"}
                                onClick={()=>setNav(!Nav)}
                            />
                        </div>
                        <Link to={"/home"} className={"link"}>Home</Link> 
                        <Link to={"/profile"} className={"link"}>Perfil</Link> 
                        <Link to={"/addStreming"} className={"link"}>Streaming Services</Link>
                        <Link className={"link"} onClick={user.logoutUser}>Sair</Link>
                    </div>
                </ContainerInternal>
                :
                <Container showUpArrowLeft={props.arrowLeft}> 
                    <div className={Nav ? "nav__menuOpen" :"nav__Down"}>
                        <div className="icone">
                            <AiOutlineClose 
                                className={"icone__close"}
                                onClick={()=>setNav(!Nav)}
                            />
                            <AiOutlineMenu 
                                className={"icone__menu"}
                                onClick={()=>setNav(!Nav)}
                            />
                        </div>  
                        <AiOutlineArrowLeft 
                            className="arrowLeft"
                            onClick={returnLandPage}
                        />
                        <div className="container">
                            <button className="container__btn" onClick={login}>Entrar</button>
                            <button className="container__btn" onClick={cadastrar}>Cadastrar</button>
                        </div>
                    </div>
                </Container>
            }
        </>
    )
}
export default Header;