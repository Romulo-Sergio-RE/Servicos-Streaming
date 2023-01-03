
import { useState,useEffect } from "react";
import { Container } from "./styled";
import { CardAddStreaming } from "../cardAddStreaming/index";
import { CardHomePage } from "../cardHomePage/index"
import { useApiStreaming } from "../../context/apiStreamingContext";
import InputSearch from "../inputs/inputsSearch";


export const GroupCardsStreamingService = (props) =>{
    const[search, setSearch] = useState("");
    const apiStreaming = useApiStreaming();

    const dataDBStreaming = useApiStreaming();

    const streamingFilter = apiStreaming.dataApi.filter((streaming) => 
        streaming.name.toLowerCase().includes(search.toLowerCase())
    )
    const streamingFilterHome = dataDBStreaming.dataServiceStreaming.filter((streaming) => 
        streaming.name.toLowerCase().includes(search.toLowerCase())
    )
    
    useEffect(()=>{
        dataDBStreaming.readStreamingService();
    },[])
    return(
        <>
            {props.typeCard === true?
                <div>
                    <InputSearch 
                        searchInput={search}
                        setSearchInput={setSearch}
                    />
                    <Container>
                        {
                            streamingFilter.map((info)=>{
                                return(
                                    <div key={info.name}>
                                        <CardAddStreaming 
                                            id={info.id}
                                            title={info.name}
                                            pathImg={info.icon}
                                            descrition={info.descrition}
                                        />
                                    </div>
                                )
                            })
                        }
                    </Container>    
                </div>
                :
                <div>
                    <InputSearch 
                        searchInput={search}
                        setSearchInput={setSearch}
                    />
                    <Container>
                        {
                            streamingFilterHome.map((info)=>{
                                return(
                                    <div key={info.id}>
                                        <CardHomePage 
                                            id={info.id}
                                            title={info.name}
                                            pathImg={info.icon}
                                            descrition={info.descrition}
                                            status={info.status}
                                            value={info.value}
                                            date={info.date}
                                        />
                                    </div>
                                )
                            })
                        }
                    </Container>
                </div>
            }
        </>
    )
}
