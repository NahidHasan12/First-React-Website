import { NavLink } from "react-router-dom"
import "./style.css"

export const Header = () => {
    return (
        <div className="header-dark">
            <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
                <div className="container">
                    <a className="navbar-brand" href="#">Netflix.2</a>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1">
                        <span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse"
                        id="navcol-1">
                        <ul className="nav navbar-nav">
                            <li className="nav-item" role="presentation">
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item" role="presentation">
                                <NavLink className="nav-link" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item" role="presentation">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>
                            <li className="nav-item" role="presentation">
                                <NavLink className="nav-link" to="/movie">Movie</NavLink>
                            </li>
                            <li className="dropdown">
                                <NavLink className="dropdown-toggle nav-link dropdown-toggle" data-toggle="dropdown" aria-expanded="false" href="#">Category </NavLink>
                                <div className="dropdown-menu" role="menu">
                                    <NavLink className="dropdown-item" role="presentation" to="#">First Item</NavLink>
                                    <NavLink className="dropdown-item" role="presentation" to="#">Second Item</NavLink>
                                    <NavLink className="dropdown-item" role="presentation" to="#">Third Item</NavLink>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline mr-auto" target="_self">
                            <div className="form-group">
                                <label htmlFor="search-field"><i className="fa fa-search"></i></label>
                                <input className="form-control search-field" type="search" name="search" id="search-field" />
                            </div>
                        </form>
                        <span className="navbar-text"><a href="#" className="login">Log In</a></span>
                        <NavLink className="btn btn-light action-button" role="button" to="#">Sign Up</NavLink>
                    </div>
                </div>
            </nav>
        </div>
    
    )
}