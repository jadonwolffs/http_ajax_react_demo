import React, { Component } from "react";
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import styles from "./Posts.module.css";

class Posts extends Component {
  state = {
    posts: []
  };

  componentDidMount() {
    axios.get("/posts").then(response => {
      //   console.log(response);
      const posts = response.data.slice(0, 4);
      const updatedPosts = posts.map(post => {
        return {
          ...post,
          author: "Max"
        };
      });
      this.setState({ posts: updatedPosts });
    });
  }

  postSelectedHandler = id => {
    this.setState({ selectedPost: id });
  };

  render() {
    let posts = this.state.posts.map(post => {
      return (
        <Post
            style={styles.Posts}
          key={post.id}
          title={post["title"]}
          author={post["author"]}
          clicked={() => this.postSelectedHandler(post["id"])}
        />
      );
    });
    return <section className="Posts">{posts}</section>;
  }
}
export default Posts;
