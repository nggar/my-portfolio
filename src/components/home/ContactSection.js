const ContactSection = () => {
    return (
        <div className="container--black container--full-width">
            <div className="container">
                <div className="contact-section section-padding section-margin">
                    <div>
                        <h2 className="heading-2 heading-2--white">Get in touch and <span>let's talk</span> about your project
                        </h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur nulla dolor illo veniam corporis. Exercitationem.</p>
                    </div>
                    <div>
                        <a href="#" className="circle-arrow circle-arrow--white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactSection;