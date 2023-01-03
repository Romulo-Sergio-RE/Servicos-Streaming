import { Container } from "./styled";
import { useApiStreaming } from "../../../context/apiStreamingContext";

export const ModalCardHomePage = (props) =>{


    const apiStreaming = useApiStreaming()
    const updateStreaming = () =>{
        props.setModal()
        apiStreaming.updateStremingService(props.id, "PAGO", props.value, props.date)
    }
    const deleteStreaming = () =>{
        props.setModal()
        apiStreaming.deleteStremingService(props.id)
    }

    return(
        <Container>
            <div className="modal__container">
                <h3 className="modal__title">{props.title}</h3>

                <div className="container__info">
                    <p className="container__info--date">Data de Vencimento: {props.date}</p>
                    <p className="container__info--status">Status: {props.status}</p>
                    <p className="container__info--value">Valor do Streaming: {props.value}</p>
                </div>

                <div>
                    <div className="modal__btn">
                        <button 
                            disabled={props.status === "PAGO"? true :false}
                            className="modal__btn--Add" 
                            onClick={updateStreaming}
                        >Pagar</button>
                        <button className="modal__btn--Cancelar" onClick={props.setModal}>Cancelar</button>
                    </div>
                    <button className="btnDelete" onClick={deleteStreaming}>deletar</button>
                </div>
            </div>
        </Container>
    )
}
