import Header from "../../components/header";
import Title from "../../components/title";
import { UpdateProfile } from "../../components/UpdateProfile";
import { Container } from "./styled"

const ProfileUser = () =>{
    return(
        <Container>
            <Header internal={true}/>
            <Title title={"Profile"}/>
            <UpdateProfile />
        </Container>
    )
}
export default ProfileUser;