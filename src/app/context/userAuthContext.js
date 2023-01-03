import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, 
         onAuthStateChanged,
         signInWithEmailAndPassword,
         signOut,
         updateProfile,
         updateEmail,
         updatePassword,} from "firebase/auth";
import { ref, set, update, } from "firebase/database";
import { db } from '../service/firebase';
import { auth } from '../service/firebase';
import { useNavigate } from "react-router-dom";
import { isEmpty } from "@firebase/util";

const UserAuthContext = createContext();

const UserAuthProvider = ({children}) =>{
    const authUser = auth;
    const dataDase = db;
    const navigate = useNavigate()
    const[user, setUser] = useState({})
    
    const signInUser = (email, password) =>{
        signInWithEmailAndPassword(authUser, email, password)
            .then(()=>{
                navigate("/home")
            })
            .catch((err) => alert(err.message))
    }
    const registerUser = (name, email, password) =>{
        createUserWithEmailAndPassword(authUser, email, password)
            .then(()=>{
                set(ref(dataDase, `/${auth.currentUser?.uid}`),{
                    name: name,
                    email: email,
                    password: password,
                });
                alert("usuario cadastrado com sucesso")
            })
            .catch((err) => alert(err.message))
    }
    const logoutUser = () =>{
        signOut(auth)
            .then(()=>{
                navigate("/")
            })
            .catch((err) => alert(err.message))
    }
    const userNameUpdate =(newName)=>{
        if(!isEmpty(newName)){
            updateProfile(auth.currentUser, {displayName: newName, })
                .then(() => {
                    update(ref(dataDase, `/${authUser.currentUser?.uid}`),{
                        name: newName,
                    });
                    alert("nome atualizdo")
                })
                .catch((err) => alert(err.message))
        }
    }
    const userEmailUpdate =(newEmail)=>{
        if(!isEmpty(newEmail)){
            updateEmail(authUser.currentUser, `${newEmail}`)
                .then(() => {
                    update(ref(dataDase, `/${authUser.currentUser?.uid}`),{
                        email: newEmail,
                    });
                    alert("email atualizdo")
                })
                .catch((err) => alert(err.message))
        }
    }
    const userPasswordUpdate =(newPassword)=>{   
        if(!isEmpty(newPassword)){
            updatePassword(authUser.currentUser, newPassword)
                .then(() => {
                    update(ref(dataDase, `/${authUser.currentUser?.uid}`),{
                        password: newPassword,
                    });
                    alert("senha atualizdo")
                })
                .catch((err) => alert(err.message))
        }    
    }
    
    useEffect(()=>{
        onAuthStateChanged(authUser,(user)=>{
            setUser(user);
        })
    },[])
    return(
        <UserAuthContext.Provider 
            value={
                {
                    user,
                    registerUser,
                    signInUser,
                    logoutUser,
                    userNameUpdate,
                    userEmailUpdate,
                    userPasswordUpdate,
                }
            }>
            {children}
        </UserAuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(UserAuthContext);
    return context;
}

export {UserAuthProvider, useAuth}