import React from 'react';
import image from '../assets/images/Logo.png';
import ContentWrapper from './ContentWrapper';
import ContentCat from './ContentCat';
import ContentProducts from './ContentProducts';
// import Users from './Users';
import LastMovieInDb from './LastMovieInDb';
import ContentRowMovies from './ContentRowMovies';
import ContentUsers from './ContentUsers';
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';


function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-dark accordion sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-50" src={image} alt="Clothx"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                    <i className="fas fa-home"></i>
                        <span>Home</span></Link>
                </li>
                <li className="nav-item active">
                    <a className="nav-link" href="http://localhost:3030/" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-chart-line"></i>
                        <span> ir a Clothx  </span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Menú</div>

                {/*<!-- Nav Item - Categorias -->*/}
                <li className="nav-item">
                <Link className="nav-link" to="/ContentCat">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Categorías</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Ultimo producto -->*/}
                {/* <li className="nav-item">
                    <Link className="nav-link" to="/LastMovieInDb">
                    <i className="fas fa-pen"></i>
                        <span>Ultimo producto</span></Link>
                </li> */}

                {/*<!-- Nav Item - Productos -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/ContentProducts">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Productos</span></Link>
                </li>

                {/*<!-- Nav Item - Usuarios -->*/}
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/ContentUsers">
                <i className="fas fa-user"></i>
                        <span>Usuarios</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}

            {/*<!-- Microdesafio 1 -->*/}
            {/*<!--<Route exact path="/">
                <ContentWrapper />
            </Route>
            <Route path="/GenresInDb">
                <GenresInDb />
            </Route>
            <Route path="/LastMovieInDb">
                <LastMovieInDb />
            </Route>
            <Route path="/ContentRowMovies">
                <ContentRowMovies />
            </Route>*/}
            {/*<!-- End Microdesafio 1 -->*/}

            {/*<!-- End Microdesafio 2 -->*/}
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/ContentCat">
                    <ContentCat />
                </Route>
                <Route path="/ContentProducts">
                    <ContentProducts />
                </Route>
                <Route path="/LastMovieInDb">
                    <LastMovieInDb />
                </Route>
                <Route path="/ContentRowMovies">
                    <ContentRowMovies />
                </Route> 
                <Route path="/ContentUsers">
                    <ContentUsers />
                </Route>
                <Route component={NotFound} />
            </Switch>
            {/*<!-- End Microdesafio 2 -->*/}
        </React.Fragment>
    )
}
export default SideBar;