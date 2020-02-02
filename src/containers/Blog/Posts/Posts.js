import React, { Component } from "react";
import axios from "../../../axios";
import Post from "../../../components/Post/Post";
import styles from "./Posts.module.css";
import {Link} from 'react-router-dom';

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
        <Link to={"/posts/"+post.id} key={post.id}>
        <Post
            style={styles.Posts}
          
          title={post["title"]}
          author={post["author"]}
          clicked={() => this.postSelectedHandler(post["id"])}
        />
        </Link>
      );
    });
    return <section className="Posts">{posts}</section>;
  }
}
export default Posts;
