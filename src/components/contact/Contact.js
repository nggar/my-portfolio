import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { pageTransition } from '../utils/animations';
import emailjs from '@emailjs/browser';

const Result = () => {
    return (
        <div className="success-message">
            <p>Your message has been submitted.
                <br />
                I will get back to you within 24-48 hours.
            </p>
        </div>
    )
}

const Contact = () => {
    const form = useRef();
    const [result, setResult] = useState( false );
    const [submitting, setSubmitting] = useState( false );

    const sendEmail = ( e ) => {
        e.preventDefault();

        setSubmitting( !submitting );

        setInterval( () => {
            emailjs.sendForm( 'service_kszicoj', 'template_xcmp23h', form.current, 'iNGxGanKGHQq4dx1L' )
                .then( ( result ) => {
                    console.log( result.text );
                }, ( error ) => {
                    console.log( error.text );
                } );
            e.target.reset();
            setResult( !result );
        }, 2000 );
    };

    return (
        <motion.div variants={pageTransition} initial='hidden' animate='show' exit='exit' className="main-container">
            <div className="container">
                <div className="contact section-padding section-margin">
                    <div className="contact__left">
                        <h1 className="heading-1">Get in touch</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex accusantium a nesciunt natus unde quibusdam?</p>
                        <div className="socials">
                            <a className='link-arrow' href='https://github.com/nggar'>
                                <div className="link-arrow__text">Github</div>
                                <div className="link-arrow__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke='currentColor' strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </a>
                            <a className='link-arrow' href='https://google.com'>
                                <div className="link-arrow__text">Linkedin</div>
                                <div className="link-arrow__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke='currentColor' strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </a>
                            <a className='link-arrow' href='https://www.instagram.com/nggar.j/'>
                                <div className="link-arrow__text">Instagram</div>
                                <div className="link-arrow__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke='currentColor' strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                    </div>

                    <div className="contact__right">
                        <div className="status">{result ? <Result /> : <form ref={form} onSubmit={sendEmail}>
                            <input className='input input__name' type="text" placeholder='Full name' maxLength='256' name='user_name' required />
                            <input className='input input__email' type="Email" placeholder='Email address' maxLength='256' name='user_email' required />
                            <textarea className='input input__textarea' maxLength='5000' name="message" placeholder='Message' required></textarea>
                            <button className='link-arrow' type='submit' value='send message'>
                                <div className="link-arrow__text">{submitting ? 'Please wait...' : 'Send message'}</div>
                                <div className="link-arrow__icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke='currentColor' strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </button>
                        </form>}</div>
                    </div>
                </div>
                <div className="copyright section-margin">
                    <p>Created  by Enggar Jihandoko, © 2022</p>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact;