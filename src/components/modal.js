import React from "react";
import modal from "../modal.css"
import picters from "./telegramAva.jpg"



const Modal = (props) => {
    const {handleModalClose} = props
    return(
        <div className={"modal active"} onClick={handleModalClose}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>
                <div className="containers">
                    <img src= {picters} alt="MSHeHeH" className="images"/>
                    <div className="overlays">
                        <div className="texts">@MSHeHeH</div>
                    </div>
                </div>
            
                
            </div>
        </div>
    );
}

export default Modal;