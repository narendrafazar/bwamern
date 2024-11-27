import React, { Component } from "react"; // shortcut buat import react dengan cepat => rfc
import Header from "parts/header";

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
      </>
    );
  }
}
