import { useState } from "react";
import { Container } from "./styled";
import { useApiStreaming } from "../../../context/apiStreamingContext";

export const ModalCardAddStreaming = (props) =>{

    const[valueStreaming, setValueStreaming] = useState("");
    const[dateStreaming, setDateStreaming] = useState("");

    const apiStreaming = useApiStreaming()

    const addStreaming = ()=>{
        props.setModal()
        apiStreaming.addStreamingService(props.id,props.title,props.pathImg,props.descrition,"Nao pago",valueStreaming,dateStreaming)
    } 
    return(
        <Container>
            <div className="modal__container">
                <h3 className="modal__title">{props.title}</h3>
                <div className="modal__inputLabel">
                    <label className="modal__label">Data de vencimento:</label>
                    <input 
                        className="modal__input"
                        value={dateStreaming}
                        onChange={(event) => setDateStreaming(event.target.value)}
                        type={"date"}
                        placeholder={"Digite o preco do seu servico"}
                    />
                    <label className="modal__label">Preco do Servico:</label>
                    <input 
                        className="modal__input"
                        value={valueStreaming}
                        onChange={(event) => setValueStreaming(event.target.value)}
                        type={"text"}
                        placeholder={"Digite o preco do seu servico"}
                    />
                </div>
                <div className="modal__btn">
                    <button className="modal__btn--Add" onClick={addStreaming}>Salvar</button>
                    <button className="modal__btn--Cancelar" onClick={props.setModal}>Cancelar</button>
                </div>
            </div>
        </Container>
    )
}
