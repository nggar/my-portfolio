import aboutmeImg from '../../assets/images/about-photo.jpg';

const AboutMe = () => {
    return (
        <div className="main-container">
            <div className="container">
                <div className="about-me section-padding section-margin">
                    <h1 className="heading-1">I'm Enggar, a React Js developer from central java, Indonesia</h1>
                    <div className="about-me__info">
                        <div className="about-me__img">
                            <img src={aboutmeImg} alt="me" />
                        </div>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi id natus doloremque eveniet facilis quam quod non nihil voluptates in velit, et nostrum fugit animi deleniti tempore optio! Dolorum, dolore.
                            <br />
                            <br />
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo fuga esse doloremque soluta, qui saepe libero ullam nostrum unde. Veniam repellendus delectus rem corporis quia, ad maiores facilis eligendi unde corrupti nisi in totam voluptate mollitia, magnam, eius harum dolorum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;