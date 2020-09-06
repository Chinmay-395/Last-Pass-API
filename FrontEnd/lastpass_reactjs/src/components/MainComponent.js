import React, { Component } from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { connect } from 'react-redux';


import HomePage from "./home/HomePage"
import AboutPage from "./about/AboutPage"
import Header from "./common/Header"
import PageNotFound from "./PageNotFound"


export default function MainComponent() {
  return (
    <div className="App container">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={AboutPage} />
        {/* <Redirect to="/" /> */}
        <Route component={PageNotFound} />
      </Switch>
    </div>
  )
}
