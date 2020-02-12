import React, { Component } from "react";
import axios from "axios";

import "./FullPost.css";

class FullPost extends Component {
  state = {
    loadedPost: null
  };
  componentDidMount() {
    this.loadData();
  }
  componentDidUpdate(){
    this.loadData();
  }
  loadData(){
    if (this.props.match.params.id) {
      if (
        this.state.loadedPost === null ||
        (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id)
      ) {
        axios
          .get("/posts/" + this.props.match.params.id)
          .then(response => {
            console.log(response);
            this.setState({ loadedPost: response.data });
          }).catch(error=>{
              console.log(error);
              
          });
      }
    }
  }
  deleteHandler = id => {
    axios
      .delete("/posts/" + id)
      .then(response => {
        console.log(response);
      }).catch();
  };
  render() {
    let post = null;
    if (this.props.match.params.id) {
      post = <p style={{ textAlign: "center" }}>Loading</p>;
    }
    if (this.state.loadedPost === null) {
      post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    } else {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <div className="Edit">
            <button
              className="Delete"
              onClick={() => this.deleteHandler(this.props.match.params.id)}
            >
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
