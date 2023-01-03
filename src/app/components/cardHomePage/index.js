import { Container } from "./styled";
import { useState } from "react";
import { ModalCardHomePage } from "./modal/index.js";

export const CardHomePage = (props) =>{

    const[isOpenModal,setIsOpenModal] = useState(false);

    return(
        <>
            {isOpenModal?
                <ModalCardHomePage 
                    {...props}
                    setModal={()=>setIsOpenModal(!isOpenModal)}
                />
                :null
            }
            <Container>
                <h3 className="title">{props.title}</h3>
                <div className="card__container">
                    <img 
                        src={require(`../../assets/images/${props.pathImg}`)} 
                        alt={"Logo Netflix"}
                        className="card__img"
                    />
                    <button
                        onClick={()=>setIsOpenModal(!isOpenModal)} 
                        className="card__IconBtnAdd"
                    >{props.status}</button>
                    <button 
                        onClick={()=>setIsOpenModal(!isOpenModal)} 
                        className="card__btnAdd"
                    >{props.status}</button>
                </div>
            </Container>
        </>
    )
}