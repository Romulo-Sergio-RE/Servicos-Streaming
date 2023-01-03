import { useState } from "react";
import { Container } from "./styled";
import { useAuth } from "../../context/userAuthContext";
import { isEmpty } from "@firebase/util";

export const UpdateProfile = () =>{

    const[newName,setNewName] = useState("");
    const[newEmail,setNewEmail] = useState("");
    const[newPassword,setNewPassword] = useState("");
    const[formOpen,setFormOpen] = useState(false);
    const[btnOpen,setBtnOpen] = useState(false);

    const apiFirebase = useAuth();

    const changeModal = () =>{
        setFormOpen(!formOpen);
        setBtnOpen(!btnOpen);
    }
    const saveInfoUser = () =>{
        if(isEmpty(newName) && isEmpty(newEmail) && isEmpty(newPassword)){
            return alert("todos os campos estao vazio");
        }else{
            apiFirebase.userNameUpdate(newName);
            apiFirebase.userEmailUpdate(newEmail);
            apiFirebase.userPasswordUpdate(newPassword);
        }
        setNewName("");
        setNewEmail("");
        setNewPassword("");
    }

    return(
        <Container>
            <div className="containerForm">
                <div className="containerForm__labelInput">
                    <label className="containerForm__label">Nome: {apiFirebase.user?.displayName}</label>
                    <input 
                        className={formOpen? "containerForm__inputOpen" : "containerForm__input"}
                        value={newName}
                        onChange={(event) => setNewName(event.target.value)}
                        type={"text"} 
                        placeholder={"Digite seu novo nome"}
                    />
                </div>
                <div className="containerForm__labelInput">
                    <label className="containerForm__label">Email: {apiFirebase.user?.email}</label>
                    <input 
                        className={formOpen? "containerForm__inputOpen" : "containerForm__input"}
                        value={newEmail}
                        onChange={(event) => setNewEmail(event.target.value)}
                        type={"text"} 
                        placeholder={"Digite seu novo email"}
                    />
                </div>
                <div className="containerForm__labelInput">
                    <label className="containerForm__label">Password: ******</label>
                    <input 
                        className={formOpen? "containerForm__inputOpen" : "containerForm__input"}
                        value={newPassword}
                        onChange={(event) => setNewPassword(event.target.value)}
                        type={"password"} 
                        placeholder={"Digite sua nova senha"}
                        min={6}
                    />
                </div>
            </div>
            <button className={formOpen? "button__UpdateOpen" : "button__Update"} onClick={changeModal}>alterar meus dados</button>
            <div className={btnOpen? "containerButtonOpen" : "containerButton"}>
                <button className="containerButton__save" onClick={saveInfoUser}>salvar</button>
                <button className="containerButton__cancel" onClick={changeModal}>cancelar</button>
            </div>
        </Container>
    )
}