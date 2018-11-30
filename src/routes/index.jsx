import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import NavBar from '../screens/common/NavBar'
import HomePage from '../screens/App'
import TestComponent from '../screens/TestComponent'

export class appNavigation extends Component {
  render() {
    return (
      <div className="page">
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <div className="page">
              <NavBar />
              <main>
                <Switch>
                  <Route path="/test" component={TestComponent} />
                </Switch>
              </main>
            </div>
          )}
        />
      </div>
    )
  }
}

export default appNavigation
