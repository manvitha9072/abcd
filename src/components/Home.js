import React from 'react'

export default function home() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top py-3 bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Event management System</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/assignment">Assignment</a>
                    </li>
                </ul>
                <a className="btn btn-secondary" type="submit" href="/login">Login</a>
            </div>
        </div>
    </nav>
    <div style={{backgroundColor:"#989898"}}>
        <div>
            <div className="row mx-lg-3 my-lg-3">
                <div className="col-lg-6">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://img.freepik.com/premium-vector/hackathon-hack-marathon-coding-event-glitch-poster-saturated-binary-data-code-flux_102902-967.jpg?w=2000"
                                    className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://st.depositphotos.com/1038076/4805/i/600/depositphotos_48050431-stock-photo-webinar.jpg"
                                    className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://thearchitectsdiary.com/wp-content/uploads/2020/10/rmm-designs-feat.jpg"
                                    className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="col-lg-6">
                    <section className="cards">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h3 className="card-title mb-3">Event-1</h3>
                                        <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            Cumque illum ad odit cum corporis ratione enim quae sit praesentium veniam!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h3 class="card-title mb-3">Event-2</h3>
                                        <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            Cumque illum ad odit cum corporis ratione enim quae sit praesentium veniam!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 my-4">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h3 className="card-title mb-3">Event-3</h3>
                                        <p className="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                            Cumque illum ad odit cum corporis ratione enim quae sit praesentium veniam!
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 my-4">
                                <div className="card">
                                    <div className="card-body text-center">
                                        <h3 className="card-title mb-3">Event-4</h3>
                                        <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                            Est esse mollitia nam odio id minus eum, dolore ea veritatis dicta.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <div className="scroll text-light bg-dark">
                <marquee behavior="scroll" direction="left">INFORMATION REGARDING UPCOMING EVENTS Lorem ipsum dolor, sit
                    amet consectetur adipisicing elit. Sed corporis repellat distinctio, voluptas a nulla?</marquee>
            </div>
            <section id="about">
                <div className="about-us p-3">
                    <h4 className="text-center">About Us</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, architecto magnam corporis
                        necessitatibus quia ex sunt asperiores dolore consequuntur tenetur cum voluptates et natus
                        repellat!
                    </p>
                </div>
            </section>
            <section id="contact my-5">
                <div className="bg-secondary contact">
                    <h3 className="text-center">Contact Us</h3>
                    <div className="footer-info p-3">
                        <ul>
                            <i className="bi bi-envelope text-dark"></i><span className="fw-bold">Email:-</span>abc@gmail.com
                            <br/><br/>
                            <i className="bi bi-phone text-dark"></i><span className="fw-bold">Phone
                                number:-</span>9012345678
                        </ul>
                    </div>
                </div>
            </section>
        </div>
        <footer className="p-4 bg-dark text-white text-center position-relative">
            <div className="container">
                Copyright &copy; 2022
            </div>
        </footer>
        </div>
    </div>
    )
}
