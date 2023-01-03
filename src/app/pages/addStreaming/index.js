import { GroupCardsStreamingService } from "../../components/GroupCardsStreamingService/index";
import Header from "../../components/header";
import Title from "../../components/title";
import { Container } from "./styled";

const AddStreaming = () =>{
    return(
        <Container>
            <Header internal={true}/>
            <Title title={"Streaming Services"}/>
            <GroupCardsStreamingService typeCard={true}/>
        </Container>
    )
}
export default AddStreaming;
