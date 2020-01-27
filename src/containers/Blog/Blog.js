import React, { Component } from "react";
import axios from "axios";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";

class Blog extends Component {
  state = {
    posts: []
  };
  componentDidMount() {
    axios.get("http://jsonplaceholder.typicode.com/posts").then(response => {
      console.log(response);
      this.setState({posts:response.data})
    });
  }
  render() {
    return (
      <div>
        <section className="Posts">
          <Post />
          <Post />
          <Post />
        </section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
