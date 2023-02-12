import React from 'react'

function Past() {
    return (
        <div>
            <div class="container-filud">
                <nav class="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">University Event Management</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Request for event</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Know status</a>
                                </li>
                                {/* <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Past Events</a>
                                </li> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="row mx-lg-5 my-3">
                <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                aria-controls="panelsStayOpen-collapseOne">
                                Event 1
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
                            aria-labelledby="panelsStayOpen-headingOne">
                            <div class="accordion-body">
                                <b>Name of event:</b>Block Chain Workshop<br />
                                <b>Venue:</b> KMIT Auditorium<br />
                                <b>Start date:</b> 22-12-22<br />
                                <b>Time slot:</b> 5:00-6:30 pm<br />
                                <b>Number of participants:</b> 100<br />
                                <b>Refreshments:</b> Yes<br />
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseTwo">
                                Event 2
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingTwo">
                            <div class="accordion-body">
                                <b>Name of event:</b>Seminar by Alumini<br />
                                <b>Venue:</b> NGIT Auditorium<br />
                                <b>Start date:</b> 23-12-22<br />
                                <b>Time slot:</b> 3:30-5:00 pm<br />
                                <b>Number of participants:</b> 800<br />
                                <b>Refreshments:</b> No<br />
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseThree">
                                Event 3
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse"
                            aria-labelledby="panelsStayOpen-headingThree">
                            <div class="accordion-body">
                                <b>Name of event:</b>Motivational Session<br />
                                <b>Venue:</b> KMIT Auditorium<br />
                                <b>Start date:</b> 30-12-22<br />
                                <b>Time slot:</b> 8:30-10:00 pm<br />
                                <b>Number of participants:</b> 800<br />
                                <b>Refreshments:</b> No<br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Past;