import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./hoc";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Signin from "./pages/Signin";
import Users from "./pages/Users";
import Clients from "./pages/Clients";
import Locations from "./pages/Locations";
import Products from "./pages/Products";
import CreateClient from "./pages/Clients/CreateClient";
import CreateUser from "./pages/Users/CreateUser";
import User from "./pages/Users/User";
import Client from "./pages/Clients/Client";
import CreateLocation from "./pages/Locations/CreateLocation";
import CreateProduct from "./pages/Products/CreateProduct";
import Schedules from "./pages/Schedules";
import CreateSchedule from "./pages/Schedules/CreateSchedule";
import Location from "./pages/Locations/Location";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/msl-panel"
          element={<PublicRoute component={<Signin />} />}
        />
        <Route
          path="/home"
          element={<PrivateRoute component={<Dashboard />} />}
        />
        <Route path="/users" element={<PrivateRoute component={<Users />} />} />
        <Route
          path="/user/:userId"
          element={<PrivateRoute component={<User />} />}
        />
        <Route
          path="/create-user"
          element={<PrivateRoute component={<CreateUser />} />}
        />
        <Route
          path="/client/:clientId"
          element={<PrivateRoute component={<Client />} />}
        />
        <Route
          path="/clients"
          element={<PrivateRoute component={<Clients />} />}
        />
        <Route
          path="/create-client"
          element={<PrivateRoute component={<CreateClient />} />}
        />
        <Route
          path="/schedules"
          element={<PrivateRoute component={<Schedules />} />}
        />
        <Route
          path="/create-schedule"
          element={<PrivateRoute component={<CreateSchedule />} />}
        />

        <Route
          path="/locations"
          element={<PrivateRoute component={<Locations />} />}
        />
        <Route
          path="/create-location"
          element={<PrivateRoute component={<CreateLocation />} />}
        />
        <Route
          path="/location/:locationId"
          element={<PrivateRoute component={<Location />} />}
        />
        <Route
          path="/products"
          element={<PrivateRoute component={<Products />} />}
        />
        <Route
          path="/create-product"
          element={<PrivateRoute component={<CreateProduct />} />}
        />
      </Routes>
    </HashRouter>
  );
};

export default App;
