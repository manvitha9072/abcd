import React from 'react'

function Accepted() {
    return (
        <div>
            <div class="container-filud">
                <nav id="navbar-example2" class="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
                    <a class="navbar-brand " href="#">University Event Management</a>
                    <ul class="nav nav-pills ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="#scrollspyHeading1">Book an event</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#scrollspyHeading2">Refreshments</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#scrollspyHeading3">Notifications</a>
                        </li>
                    </ul>
                </nav>
                <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-root-margin="0px 0px -40%"
                    data-bs-smooth-scroll="true" class="scrollspy-example bg-body-tertiary p-3 rounded-2" tabindex="0">
                    <h4 id="scrollspyHeading1">Book an event</h4>
                    <form>
                        <div class="input-group my-3">
                            <span class="input-group-text">Name of the event: </span>
                            <input type="text" placeholder="Enter name here" />
                        </div>
                        <div class="input-group my-3">
                            <span class="input-group-text">
                                <span>Select Venue: </span>
                                <select class="venue">
                                    <option>Select Venue</option>
                                    <option>Keshav Memorial Auditiorium</option>
                                    <option>Keshav Memorial Mini Audtorium</option>
                                    <option>NGIT Auditorium</option>
                                    <option>KMEC Auditorium</option>
                                </select>
                            </span>
                        </div>
                        <div class="input-group my-3">
                            <span class="input-group-text">Selelct Date: </span>
                            <input type="date" />
                        </div>
                        <div class="input-group my-3">
                            <span class="input-group-text">Select time slot: </span>
                            <select class="time-slot">
                                <option>Select time slot</option>
                                <option>7:00-9:00</option>
                                <option>10:00-12:00</option>
                                <option>13:00-15:00</option>
                                <option>16:00-18:00:</option>
                            </select>
                        </div>
                        <div class="my-3">
                            <label for="quantity">Refreshments:</label>
                            <div class="form-check mx-8">
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                    <label class="form-check-label" for="flexRadioDefault1">
                                        Yes
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                                        checked />
                                    <label class="form-check-label" for="flexRadioDefault2">
                                        No
                                    </label>
                                </div>
                            </div>
                        </div>
                        <a href="#" class="btn btn-primary">Block Slot</a>
                    </form>
                    <hr />
                    <form>
                        <h4 id="scrollspyHeading2">Refreshments</h4>
                        <p class="text-muted">(Please select the required refreshments and mention the quantity)</p>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                No refreshmnets required
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                Samosa
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked />
                            <label class="form-check-label" for="flexCheckChecked">
                                Beverages
                                <div class="form-check mx-8">
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1">
                                            Maaza
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="flexRadioDefault"
                                            id="flexRadioDefault2" checked />
                                        <label class="form-check-label" for="flexRadioDefault2">
                                            Tea
                                        </label>
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div class="input-group my-3">
                            <label for="quantity">Number of participants:&nbsp;&nbsp; </label>
                            <input type="number" id="quantity" name="quantity" min="1" max="1000" />
                        </div>
                        <a href="#" class="btn btn-primary">Confirm order</a>
                    </form>
                    <hr />
                    <h4 id="scrollspyHeading3">Notifications</h4>
                    <div class="mx-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                project_skl@gmail.com
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                jack@gmail.com
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                mike@gmail.com
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                tina@gmail.com
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                kmitoffice@gmail.com
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                ngit@gmail.com
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                mike@gmail.com
                            </label>
                        </div>
                    </div>
                    <br />
                    <a href="#" class="btn btn-primary">Select all</a>
                    <a href="#" class="btn btn-primary">Notify selected</a>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default Accepted;