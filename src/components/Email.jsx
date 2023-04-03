import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

const Email = () => {
    const [showForm, setShowForm] = useState(false);

    const form = useRef();

    const serviceID = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    const handleButtonClick = () => {
        setShowForm(true);
        console.log(showForm)
    }

    const handleFormClose = () => {
        setShowForm(false);
    }

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(serviceID, templateID, form.current, publicKey)
            .then((result) => {
                alert('Email sent successfully!');
                setShowForm(false);
                console.log(result.text);
            }, (error) => {
                alert('Email failed to send!')
                console.log(error.text);
            });
    };

    return (
        <>
            <button
                onClick={handleButtonClick}
                type="button"
                className="btn btn-primary btn-lg"
            >
                Get In Touch!
            </button>
            {showForm && (
                <div className="container">
                    <div className="modal" tabIndex={-1}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h2 className="modal-title">Contact Form</h2>
                                    <button
                                        onClick={handleFormClose}
                                        type="button"
                                        className="btn-close"
                                        aria-label="Close"></button>
                                </div>
                                <form
                                    ref={form}
                                    onSubmit={sendEmail}
                                // className="modal-form pt-4"
                                >
                                    <label className="pt-3 d-flex">Name</label>
                                    <input
                                        className="form-control"
                                        type="text"
                                        name="from_name"
                                    />
                                    <label className="pt-2">Message</label>
                                    <textarea
                                        className="form-control"
                                        name="message"
                                    />
                                    <label className="pt-2">Contact Email or Phone</label>
                                    <textarea
                                        className="form-control"
                                        type="text"
                                        name="contact_us"
                                    />
                                    <div className="modal-footer">
                                        <button type="submit">Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Email