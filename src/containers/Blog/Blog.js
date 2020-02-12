import React, { Component } from "react";
// import axios from "../../axios";
// import Post from "../../components/Post/Post";
import Posts from "./Posts/Posts";
// import FullPost from "../Blog/FullPost/FullPost";
import NewPost from "./NewPost/NewPost";
import "./Blog.css";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

class Blog extends Component {
  state = {
    auth: false
  };
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
          {this.state.auth ? (
            <Route path="/new" exact component={NewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          <Redirect from="/" to="/posts" />
          {/* <Route path="/:id" exact component={FullPost} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
