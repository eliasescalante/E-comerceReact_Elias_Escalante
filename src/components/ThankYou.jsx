import React from "react";
import { useParams } from "react-router-dom";

const ThankYou = () => {
    const { trackingCode } = useParams();

    return (
        <div>
            <h2>¡Gracias por tu compra!</h2>
            <p>Te avisaremos cuando tu producto esté en viaje.</p>
            <p>Código de seguimiento: <strong>{trackingCode}</strong></p>
        </div>
    );
};

export default ThankYou;
