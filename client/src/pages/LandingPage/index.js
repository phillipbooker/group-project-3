import React, { Component } from "react";
import Hero from '../../components/Hero';
import Quote from '../../components/Quote';
import Story from '../../components/Story';

export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>LandingPage</h1>
            <Hero></Hero>
            <Quote></Quote>
            <Story></Story>
          </div>
        </div>
      </div>
    );
  }
}