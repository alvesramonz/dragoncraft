import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Dashboard/Register";
import List from "../pages/Dashboard/List";
import Detail from "../pages/Dashboard/Detail";
import Edit from "../pages/Dashboard/Edit";

import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/dashboard" element={<Private Item={Dashboard} />} />
          <Route exact path="/dashboard/register" element={<Private Item={Register} />} />
          <Route exact path="/dashboard/list" element={<Private Item={List} />} />
          <Route exact path="/dashboard/list/:id" element={<Private Item={Detail} />} />
          <Route exact path="/dashboard/edit_dragon/:id" element={<Private Item={Edit} />} />
          
          {/* <Route exact path="/dashboard/search" element={<Private Item={Search} />} /> */}

          <Route path="/" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route path="*" element={<Signin />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
