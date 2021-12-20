import React from "react";
import "./App.css";
import Nav from "./components/views/Nav";
import Todos from "./components/views/Todos";
import Info from "./components/views/Info";
import Blogs from "./components/views/Blogs";
import DetailBlogs from "./components/views/DetailBlogs";
import NotFound from "./components/views/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const info = {
    avatar: "https://lethinh2003.xyz/upload/avatar_4965.png",
    name: "Le Thinh",
    age: 18,
    school: "HCMUE",
  };
  return (
    <Router>
      <div className="App">
        <Nav />

        <header className="App-header">
          <Switch>
            <Route path="/react_redux_todo/" exact>
              <Info info={info} />
            </Route>
            <Route path="/react_redux_todo/blogs" exact>
              <Blogs />
            </Route>
            <Route path="/react_redux_todo/blogs/:id" exact>
              <DetailBlogs />
            </Route>
            <Route path="/react_redux_todo/todos">
              <Todos />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
