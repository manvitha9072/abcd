import React from 'react'

function Status() {
    return (
        <>
            <div className="container-filud">
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">University Event Management</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Request for event</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Know status</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Past Events</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="row mx-lg-5">
                <div className="col-lg-3">
                    <div className="card my-3 mx-sm-3" style={{width: "18rem"}}>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Event 1</li>
                            <li className="list-group-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aut
                                molestiae impedit eum perferendis incidunt nihil, temporibus dolorum quo minus? Delectus
                                totam
                                voluptas ab recusandae?</li>
                            <li className="list-group-item">Status: Declined</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card my-3" style={{width: "18rem"}}>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Event 2</li>
                            <li className="list-group-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aut
                                molestiae impedit eum perferendis incidunt nihil, temporibus dolorum quo minus? Delectus
                                totam
                                voluptas ab recusandae?</li>
                            <li className="list-group-item">Status: Approved</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card my-3" style={{width: "18rem"}}>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Event 3</li>
                            <li className="list-group-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aut
                                molestiae impedit eum perferendis incidunt nihil, temporibus dolorum quo minus? Delectus
                                totam
                                voluptas ab recusandae?</li>
                            <li className="list-group-item">Status: Declined</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card my-3" style={{width: "18rem"}}>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Event 4</li>
                            <li className="list-group-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aut
                                molestiae impedit eum perferendis incidunt nihil, temporibus dolorum quo minus? Delectus
                                totam
                                voluptas ab recusandae?</li>
                            <li className="list-group-item">Status: Declined</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card my-3" style={{width: "18rem"}}>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Event 5</li>
                            <li className="list-group-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aut
                                molestiae impedit eum perferendis incidunt nihil, temporibus dolorum quo minus? Delectus
                                totam
                                voluptas ab recusandae?</li>
                            <li className="list-group-item">Status: Declined</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card my-3" style={{width: "18rem"}}>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Event 6</li>
                            <li className="list-group-item">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aut
                                molestiae impedit eum perferendis incidunt nihil, temporibus dolorum quo minus? Delectus
                                totam
                                voluptas ab recusandae?</li>
                            <li className="list-group-item">Status: Approved</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Status;