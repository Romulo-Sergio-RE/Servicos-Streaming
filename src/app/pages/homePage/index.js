import { memo,useState } from "react";
import { GroupCardsStreamingService } from "../../components/GroupCardsStreamingService/index";
import Header from "../../components/header";
import InputSearch from "../../components/inputs/inputsSearch";
import Title from "../../components/title";
import { useApiStreaming } from "../../context/apiStreamingContext";
import { Container } from "./styled";

const HomePage = () =>{

    return(
        <Container>  
            <Header internal={true}/> 
            <Title title={"My Streaming"}/>
            <GroupCardsStreamingService />
        </Container>
    )
}
export default memo(HomePage);

