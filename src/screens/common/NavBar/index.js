import React, { Component } from 'react'

export class NavBar extends Component {
  render() {
    return (
      <header>
        <div className="navbar">
          Nav Bar
        </div>
        <ul class="sidenav">
          <li><a href="/manage" class="logo-container">Admin<i class="material-icons left">spa</i></a></li>
        </ul>
      </header>
    )
  }
}

export default NavBar