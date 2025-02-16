/*
import React, { useState } from "react";

const CheckoutForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulación del pago
        alert("Pago realizado con éxito 🎉");
        onSubmit(); // Aquí podrías limpiar el carrito
    };

    return (
        <div className="container mt-5">
            <h2>Formulario de Pago</h2>
            <form onSubmit={handleSubmit} className="p-4 border rounded">
                <div className="mb-3">
                    <label className="form-label">Nombre Completo</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Correo Electrónico</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Número de Tarjeta</label>
                    <input
                        type="text"
                        name="cardNumber"
                        className="form-control"
                        maxLength="16"
                        pattern="\d{16}"
                        required
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="16 dígitos sin espacios"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Fecha de Expiración</label>
                    <input
                        type="month"
                        name="expiryDate"
                        className="form-control"
                        required
                        value={formData.expiryDate}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">CVV</label>
                    <input
                        type="text"
                        name="cvv"
                        className="form-control"
                        maxLength="3"
                        pattern="\d{3}"
                        required
                        value={formData.cvv}
                        onChange={handleChange}
                        placeholder="3 dígitos"
                    />
                </div>
                <button type="submit" className="btn btn-success w-100">
                    Pagar
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;
*/

import React, { useState } from "react";
import Swal from 'sweetalert2';

const CheckoutForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Simulación del pago
        Swal.fire({
            title: '¡Transacción completada con éxito!',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        }).then(() => {
            onSubmit(); // Llamar a la función onSubmit que se pasa como prop
        });
    };

    return (
        <div className="container mt-5">
            <h2>Formulario de Pago</h2>
            <form onSubmit={handleSubmit} className="p-4 border rounded">
                <div className="mb-3">
                    <label className="form-label">Nombre Completo</label>
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        required
                        value={formData.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Correo Electrónico</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Número de Tarjeta</label>
                    <input
                        type="text"
                        name="cardNumber"
                        className="form-control"
                        maxLength="16"
                        pattern="\d{16}"
                        required
                        value={formData.cardNumber}
                        onChange={handleChange}
                        placeholder="16 dígitos sin espacios"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Fecha de Expiración</label>
                    <input
                        type="month"
                        name="expiryDate"
                        className="form-control"
                        required
                        value={formData.expiryDate}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">CVV</label>
                    <input
                        type="text"
                        name="cvv"
                        className="form-control"
                        maxLength="3"
                        pattern="\d{3}"
                        required
                        value={formData.cvv}
                        onChange={handleChange}
                        placeholder="3 dígitos"
                    />
                </div>
                <button type="submit" className="btn btn-success w-100">
                    Pagar
                </button>
            </form>
        </div>
    );
};

export default CheckoutForm;