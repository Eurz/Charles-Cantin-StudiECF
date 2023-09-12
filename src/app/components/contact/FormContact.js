'use client'
import React, { useState } from 'react'

function FormContact() {
    const [subject, setSubject] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')

    const onHandleInput = (e) => {
        setFirstName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target
        const formData = new FormData(form)

        const formJson = Object.fromEntries(formData.entries())
        console.log(formJson)
    }
    return (
        <form className="" onSubmit={handleSubmit}>
            <div className="form-line">
                <label htmlFor="firstName" className="form-label">
                    Objet
                </label>
                <div className="grow">
                    <select name="subject" className="input">
                        <option value="devis">Demande de devis</option>
                        <option value="advice">Demande de renseignemnts</option>
                    </select>
                </div>
            </div>

            <div className="form-line">
                <label htmlFor="firstName" className="form-label">
                    Nom
                </label>
                <div className="grow">
                    <input
                        type="text"
                        name="firstName"
                        className="input"
                        onChange={onHandleInput}
                        value={firstName}
                    />
                </div>
            </div>
            <div className="form-line">
                <label htmlFor="lastName" className="form-label">
                    Prénom
                </label>
                <div className="grow">
                    <input type="text" name="lastName" className="input" />
                </div>
            </div>
            <div className="form-line">
                <label htmlFor="phone" className="form-label">
                    Tél
                </label>
                <div className="grow">
                    <input type="text" name="phone" className="input" />
                </div>
            </div>
            <div className="form-line">
                <label htmlFor="subject" className="form-label">
                    Email
                </label>
                <div className="grow">
                    <input type="email" name="email" className="input" />
                </div>
            </div>
            <div className="form-line">
                <span className="form-label"></span>
                <div className="grow">
                    <button className="btn" type="submit">
                        Send
                    </button>
                </div>
            </div>
        </form>
    )
}

export default FormContact
