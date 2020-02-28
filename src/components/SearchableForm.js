import React, { Component } from "react";
import "isomorphic-fetch";

export default class SearchableForm extends Component {
  constructor() {
    super();
    this.state = { query: "" };
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.handleSubmit(this.state.query);
  };

  handleChange = event => {
    event.persist();
    this.setState({ query: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input id="query" type="search" onChange={this.handleChange} />
        <input type="submit" value="Search" />
      </form>
    );
  }
}
