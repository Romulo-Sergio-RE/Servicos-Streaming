import { createContext, useContext, useEffect, useState } from "react";
import { useApi } from "../hooks/useApi";
import { ref, set,remove, update, onValue } from "firebase/database";
import { db } from '../service/firebase';
import { auth } from '../service/firebase';
const ApiStreamingContext = createContext();

const ApiStreamingProvider = ({children}) =>{

    const[dataApi, setDataApi] = useState([]);
    const api = useApi();

    const authUser = auth;
    const dataDase = db;
    const[dataServiceStreaming, setDataServiceStreaming] = useState([]);

    const getStreaming = async () =>{
        const data = await api.getStreaming();
        setDataApi(data);
    }
    const addStreamingService = (id,name, icon, descrition, status, value, date) =>{
        set(ref(dataDase, `/${authUser.currentUser?.uid}/streamingService/${id}`),{
            id:id,
            name: name,
            icon: icon,
            descrition: descrition,
            status:status,
            value:value,
            date:date,
        });
    }
    const deleteStremingService = (id) =>{
        remove(ref(db, `/${authUser.currentUser?.uid}/streamingService/${id}`))
    }
    const updateStremingService = (id, status, value, date) =>{
        update(ref(dataDase, `/${authUser.currentUser?.uid}/streamingService/${id}`),{
            status: status,
            value: value,
            date: date,
        });
    }
    const readStreamingService = ()=>{
        onValue(ref(dataDase, `/${authUser.currentUser?.uid}/streamingService`), (snapshot)=>{
            setDataServiceStreaming([])
            const data = snapshot.val()
            if(data !== null){
                Object.values(data).map((services) => {
                    setDataServiceStreaming(oldServices => [...oldServices, services])
                })
            }
        })
    }
    useEffect(()=>{
        getStreaming();
        readStreamingService()
    },[])

    return(
        <ApiStreamingContext.Provider value={{
                dataApi,
                dataServiceStreaming,
                addStreamingService,
                deleteStremingService,
                updateStremingService,
                readStreamingService,
            }}>
            {children}
        </ApiStreamingContext.Provider>
    )
};
function useApiStreaming(){
    const context = useContext(ApiStreamingContext);
    return context;
}
export {ApiStreamingProvider, useApiStreaming}