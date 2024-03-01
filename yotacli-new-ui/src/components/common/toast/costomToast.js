import React from 'react';
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const costomToast = ({ message, autoClose, onClose }) => {

    return (
        <ToastContainer position="top-right" transition={Slide} theme='light' >
            {toast.success(message, {
                autoClose, 
                onClose, 
                style:{width: "400px", marginTop: "25%", marginLeft: "-30%"}
                })}
        </ToastContainer>
    )
}

export default costomToast
