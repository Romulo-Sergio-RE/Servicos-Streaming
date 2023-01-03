import { Container } from "./styled";
import { Form } from "../../components/form";
import Header from "../../components/header";

const SignInPage = () =>{
    return(
        <Container>
            <Header     
                 internal={false} 
                 arrowLeft={true}
            />
            <Form 
                typeForm={"signIn"}
            />
        </Container>
    )
}
export default SignInPage;