import { Container } from "./styled";
import { BsPlusLg } from 'react-icons/bs';
import { useState } from "react";
import { ModalCardAddStreaming } from "./modal/index.js";

export const CardAddStreaming = (props) =>{

    const[isOpenModal,setIsOpenModal] = useState(false);

    return(
        <>
            {isOpenModal?
                <ModalCardAddStreaming 
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
                    <BsPlusLg 
                        onClick={()=>setIsOpenModal(!isOpenModal)} 
                        className="card__IconBtnAdd"
                    />
                    <button onClick={()=>setIsOpenModal(!isOpenModal)} className="card__btnAdd"> adicionar </button>
                </div>
            </Container>
        </>
    )
}