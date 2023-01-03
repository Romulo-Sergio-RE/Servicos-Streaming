import { Container } from "./styled";
import { Form } from "../../components/form";
import Header from "../../components/header";

const RegisterPage = () =>{
    return(
        <Container>   
            <Header 
                internal={false} 
                arrowLeft={true}
            /> 
            <Form />
        </Container>
    )
}
export default RegisterPage;