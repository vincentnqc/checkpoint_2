import React from "react";
import { Switch, Route, Redirect } from "react-router";
import cookie from "cookie";
import Login from "./Containers/Login";
import { Link } from "react-router-dom";
import Addbusiness from "./Containers/Addbusiness";
import Details from "./Containers/Details";
import Blog from "./Components/Blog";
import Teachers from "./Containers/Teachers";
import Schedule from "./Components/Schedule";
import Instruments from "./Containers/Instruments";
import Lesson from "./Containers/Lesson";
import New from "./Containers/New";

const CheckAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {

        
        if (CheckAuth()) {

          // console.log(
          //   "ieieie",
          //   rest,
          //   props,
          //   rest.path == "/New"
          // );

          // if (rest.path=="/new" || rest.path == "/New"){
          //   console.log("PROPSWASTRUE")
          //   props.history.push("/New")
          // }

          // else {return <Component {...props} />}
          return <Component {...props} />; //';;
        } else {
          console.log("login false")
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Blog} />
      <Route path="/login" component={Login} />
      <Route path="/Instructors" component={Teachers} />
      <ProtectedRoute path="/Schedule" component={Schedule} />
      <Route path="/Instruments" component={Instruments} />
      <Route path="/Lesson/:Intruments" component={Lesson} />
      <ProtectedRoute path="/New" component={New} />
    </Switch>
  );
};

export default Router;
