'use client'
import styles from './Form.module.css'
import { useState } from "react"
import emailjs from '@emailjs/browser';
import { FiSend } from 'react-icons/fi';

export default function Form() {
    const [formData, setFormData] =  useState({
        user_name: "",
        user_email: "",
        message: "",
    })
    const [loading, setLoading] = useState(false)
    const [statusMessage, setStatusMessage]  =  useState("")

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
    }))
    }

    const sendEmail = (e)  =>{
        e.preventDefault() //previne o recarregamento da pagina
        setLoading(true) // ativa o loading
        setStatusMessage("")//limpa a mensagem anterior

        // Verifica se todos os campos estão preenchidos
        if (!formData.from_name || !formData.from_email || !formData.subject || !formData.message) {
        setStatusMessage("Por favor, preencha todos os campos.");
        setMessageColor(styles.error);
        setLoading(false);
        return;
        }

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
            formData,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        )
        .then ((result)  =>{
            console.log('SUCESSO!', result.text);
            setStatusMessage("Mensagem enviada com sucesso!")
            setFormData({
                from_name: "",
                from_email: "",
                subject: "",
                message: "",
            })
        }, (error) =>{
            console.log('ERRO...', error.text);
            setStatusMessage("Falha ao enviar a mensagem. Tente novamente.")
            
        })
        .finally(()=>{
            setLoading(false)
        })

    }

    return (
        <div className={styles.contactForm}>
            <form onSubmit={sendEmail}>
                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Seu nome</label>
                        <input
                        type="text"
                        id="name"
                        name="from_name" // O 'name' deve corresponder às chaves do formData
                        placeholder="Seu nome"
                        value={formData.from_name} // Conecta o valor ao estado
                        onChange={handleChange} // Atualiza o estado ao digitar
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">Seu e-mail</label>
                        <input
                        type="email"
                        id="email"
                        name="from_email"
                        placeholder="john@example.com"
                        value={formData.from_email}
                        onChange={handleChange}
                        />
                    </div>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="message">Mensagem</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Olá, gostaria de discutir um projeto..."
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                </div>
                <button type="submit" className={styles.submitButton} disabled={loading}>
                {loading ? 'Enviando...' : (
                    <>
                    <FiSend />
                    Enviar mensagem
                    </>
                )}
                </button>
                {statusMessage && <p className={`${styles.statusMessage} ${messageColor}`}>{statusMessage}</p>}
            </form>
        </div>
    )
}
