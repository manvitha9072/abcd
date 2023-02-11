import React from 'react'

export default function Login() {
  return (
    <div>
        <div className="container my-lg-5">
        <div className="row">
            <div className="col-lg-6">
                <img className="img-fluid"
                    src="https://www.drupal.org/files/project-images/Disable%20Login%20Page-Icon.png" />
            </div>
            <div className="col-lg-6 p-5">
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown"
                        aria-expanded="false">Select User</button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Admin</a></li>
                        <li><a className="dropdown-item" href="#">Event Organizer</a></li>
                    </ul>
                </div>
                <form>
                    <div className="p-3">
                        <label for="exampleInputEmail1" className="form-label">Username:</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Enter username here"/>
                    </div>
                    <div className="p-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                            placeholder="Enter password here"/>
                    </div>
                    <div className="form-check p-3">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Remeber Me</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
    </div>
  )
}
