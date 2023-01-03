import Header from "../../components/header";
import { Container } from "./styled";

const LandPage = () =>{
    return(
        <Container>
            <Header 
                internal={false} 
                arrowLeft={false}
            /> 
            <div className="container">
                <h2 className="container__title">My Streaming</h2>
                <div className="container__info">
                    <p className="container__infoText">
                        My streaming is a platform where we can managing our Streaming services to have an organization whether they were paid or not and what services are being used.
                    </p>
                    <img 
                        className="container__infoImg"
                        src={require("../../assets/images/landPage.png")} 
                        alt={"garota vendo video"}
                    />
                </div>
            </div>
        </Container>
    )
}
export default LandPage;


