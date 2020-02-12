import React, { Component } from "react";
// import axios from "../../axios";
// import Post from "../../components/Post/Post";
import Posts from "./Posts/Posts";
// import FullPost from "../Blog/FullPost/FullPost";
import NewPost from "./NewPost/NewPost";
import "./Blog.css";
import { Route, NavLink, Switch } from "react-router-dom";

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink exact to="/" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink exact to={{ pathname: "/new", hash: "#submit" }}>
                  New
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/new" exact component={NewPost} />
          <Route path="/posts"  component={Posts} />
          {/* <Route path="/:id" exact component={FullPost} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
