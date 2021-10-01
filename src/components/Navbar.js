
        import React from 'react'
        import PropTypes from 'prop-types'
        export default function Navbar(props){
            return(
                    <nav class={`navbar navbar-expand-lg navbar-${props.mode} bg-dark`}>
          <div class="container-fluid">
            <a class="navbar-brand" href="#">{props.title}</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a  class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
           
                <li class="nav-item">
                  <a class="nav-link disabled" href="/About">{props.about}</a>
                </li>
              </ul>
              <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
              <div class={`form-check form-switch text-${props.mode==='light' ?'dark':'light'}`}>
  <input className="form-check-input" onClick={props.toglemode}type="checkbox" id="flexSwitchCheckDefault"/>
  <label class="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Darkmode</label>
</div>
            </div>
          </div>
        </nav>
            )
        }
        
        Navbar.propTypes = {title:PropTypes.string.isRequired,
        about:PropTypes.string}
        Navbar.defaultProps={
            title:'Set Title',
            about:'About text'
        }
    
