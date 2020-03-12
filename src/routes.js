/*
Routes ver 0.1 Josip Rastočić
-started adding routes logic
-all routes take same icon

ver 0.2 Igor Pavlović
- renamed page components to more readable names
- adjusted routes accordingly


TODO: Routes ver 0.2 - solve login and register logic in single separate layout
TODO: Routes ver 0.3 - solve invitaion with :invitationID


*/
/* 
Importes all posible components and views. Layout logic is solved on top level on index.js and app.js.
In every layout the possible routes taken from that layout will be solved git getRoutes call.
This is used so aditional logic can be applied with names and paths of routes.
TODO: solve index.js and app.js so different layouts are for authentication vs loged user UI. Use existing component, fix naming.
*/

//home-dashboard layout
import Home from "./pages/Home/Home"; //added
import Wedding from "./pages/Wedding/Wedding"; //added
import Dashboard from "./pages/Dashboard/Dashboard"; //added
import Guests from "./pages/Guests/Guests"; //added
import AddGuest from "./pages/AddGuest/AddGuest"; //added
import AddEvent from "./pages/AddEvent/AddEvent"; //added
import Invites from "./pages/Invites/Invites"; //added

//Auth layout
import Login from "./pages/Login/Login"; //added
import Signup from "./pages/Signup/Signup"; //added

// @material-ui/icons
import Image from "@material-ui/icons/Image";

var routes = [
  {
    exact: true,
    path: "/home",
    name: "Home",
    icon: Image,
    component: Home,
    layout: "/home-dashboard"
  },
  {
    exact: true,
    path: "/wedding",
    name: "Wedding",
    icon: Image,
    component: Wedding,
    layout: "/home-dashboard"
  },
  {
    exact: true,
    path: "/dashboard",
    name: "Dashboard",
    icon: Image,
    component: Dashboard,
    layout: "/home-dashboard"
  },
  {
    exact: true,
    path: "/event/add",
    name: "Add Event",
    icon: Image,
    component: AddEvent,
    layout: "/home-dashboard"
  },
  {
    exact: true,
    path: "/event/:eventId/guests",
    name: "Guests",
    icon: Image,
    component: Guests,
    layout: "/home-dashboard"
  },
  {
    exact: true,
    // Adjusted route since guests are added to specific events
    path: "/event/:eventId/add_guest",
    name: "Add Guest",
    icon: Image,
    component: AddGuest,
    layout: "/home-dashboard"
  },
  {
    // Has to be last in the "event" tree of routes
    // Must be false to pick up all routes for this event as a fallback
    exact: false,
    // Fallback to main event dashboard
    // TODO Make event dashboard or add apropriate component
    path: "/event/:eventId/",
    name: "Event Dashboard",
    icon: Image,
    component: Dashboard,
    layout: "/home-dashboard"
  },
  {
    exact: true,
    path: "/invites",
    name: "Invites",
    icon: Image,
    component: Invites,
    layout: "/home-dashboard"
  },
  {
    exact: true,
    path: "/signup",
    name: "Signup",
    icon: Image,
    component: Signup,
    layout: "/home-dashboard"
  },
  {
    exact: true,
    path: "/login",
    name: "Login",
    icon: Image,
    component: Login,
    layout: "/home-dashboard"
  },
  // Ovaj path mora uvijek biti zadnji ili mora biti "exact path", inače će sjebati sve routove iza sebe -> svi URLovi se mogu matchati na http://localhost:3000/*
  {
    exact: true,
    path: "/",
    name: "Login",
    icon: Image,
    component: Login,
    layout: "/home-dashboard"
  }
];

export default routes;
