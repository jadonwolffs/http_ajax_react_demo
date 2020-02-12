import React, { Component } from "react";
import Posts from "./Posts/Posts";
// import NewPost from "./NewPost/NewPost";
import "./Blog.css";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import asyncComponent from '../../hoc/asyncComponent';
const AsyncNewPost = asyncComponent(()=>import("./NewPost/NewPost"));
class Blog extends Component {
  state = {
    auth: true
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
            <Route path="/new" exact component={AsyncNewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          <Route render={()=><h1>Not found</h1>}/>
          {/* <Redirect from="/" to="/posts" /> */}
          {/* <Route path="/:id" exact component={FullPost} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
