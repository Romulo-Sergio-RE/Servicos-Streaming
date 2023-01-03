
import { memo } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { Container } from "./styled"

const InputSearch = (props) =>{

    return(
        <Container>
            <div  className={"input"}>
                <AiOutlineSearch 
                    className={"icon__search"}
                />
                <input 
                    value={props.searchInput}
                    onChange={(event)=> props.setSearchInput(event.target.value)}
                    type={"text"}
                    placeholder={"Search Streaming"}
                    className={"input__search"}
                />
            </div>
        </Container>
    )
}
export default memo(InputSearch);