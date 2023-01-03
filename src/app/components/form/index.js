import { useState } from "react";
import { ContainerSignIn } from "./styled";
import { useAuth } from "../../context/userAuthContext";
import { Link, useNavigate } from "react-router-dom";

export const Form = (props) =>{
    const userAuth = useAuth()
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()
    const signIn =  () =>{
        userAuth.signInUser(email, password)
    }
  
    const register =  () =>{
        userAuth.registerUser(name, email, password)
        navigate("/signIn")
    }


    return(
        <>
            {props.typeForm === "signIn"?
                <ContainerSignIn height="true">
                    <div className="container__form">
                        <h3 className="title">login</h3>
                        <div className="form"> 
                            <label className="form__label">Email:</label>
                            <input 
                                className="form__input"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                type={"email"}
                                placeholder={"Digite seu email"}
                                required
                            />
                        </div>
                        <div className="form">
                            <label className="form__label">Senha:</label>
                            <input 
                                className="form__input"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                type={"password"}
                                placeholder={"Digite sua password"}
                                required
                            />
                        </div>
                        <button type={"submit"} onClick={signIn} className="form__btn">Entrar</button>
                        <p className="form__btnRegister">Nao possui conta?
                            <Link to={"/register"} className="form__btnRegister--link" > Cadastrar</Link>
                        </p>
                    </div>
                </ContainerSignIn>
            :
                <ContainerSignIn>  
                    <div className="container__form">
                        <h3 className="title">Register</h3>
                        <div className="form">
                            <label className="form__label">Nome:</label>
                            <input 
                                className="form__input"
                                value={name}
                                onChange={(event)=> setName(event.target.value)}
                                type={"text"}
                                placeholder={"Digite seu nome"}
                            />
                        </div>  
                        <div className="form">
                            <label className="form__label">Email:</label>
                            <input 
                                className="form__input"
                                value={email}
                                onChange={(event)=> setEmail(event.target.value)}
                                type={"email"}
                                placeholder={"Digite seu email"}
                            />
                        </div>  
                        <div className="form">
                            <label className="form__label">Senha:</label>
                            <input 
                                className="form__input"
                                value={password}
                                onChange={(event)=> setPassword(event.target.value)}
                                type={"password"}
                                placeholder={"Digite sua senha"}
                            />
                        </div>  
                        <button type={"submit"} onClick={register} className="form__btn">Cadastrar</button>
                    </div>
                </ContainerSignIn>
            }
        </>
        
    )
}
