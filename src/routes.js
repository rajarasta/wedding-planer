/*Routes ver 0.1 Josip Rastočić
-started adding routes logic
-all routes take same icon


TODO: Routes ver 0.2 - solve login and register logic in single separate layout
-changed layout for login and register to /auth

TODO: Routes ver 0.3 - solve invitaion with :invitationID

*/
/* 
Importes all posible components and views. Layout logic is solved on top level on index.js and app.js.
In every layout the possible routes taken from that layout will be solved git getRoutes call.
This is used so aditional logic can be applied with names and paths of routes.
TODO: solve index.js and app.js so different layouts are for authentication vs loged user UI. Use existing component, fix naming.
*/

//home-dashboard layout
import HomePage from "./pages/home-page.component";  //added
import WeddingPage from "./pages/wedding-page/wedding-page.component"; //added
import Dashboard from "./pages/dashboard-page/dashboard.component"; //added
import Guests from "./pages/guests/guests.components"; //added
import AddGuestPage from "./pages/add-guest-page/add-guest-page.components"; //added
import InviteOverviewPage from "./pages/InviteOverviewPage/InviteOverviewPage";  //added

//Auth layout
import Login from "./pages/login/login.component"; //added
import Signup from "./pages/signup/signup.component"; //added

// @material-ui/icons
import Image from "@material-ui/icons/Image";

var routes = [
  {
    path: "/home-page",
    name: "Home",
    icon: Image,
    component: HomePage,
    layout: "/home-dashboard"
  },
  {
    path: "/wedding-page",
    name: "Wedding",
    icon: Image,
    component: WeddingPage,
    layout: "/home-dashboard"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Image,
    component: Dashboard,
    layout: "/home-dashboard"
  },
  {
    path: "/guests",
    name: "Guests",
    icon: Image,
    component: Guests,
    layout: "/home-dashboard"
  },
  {
    path: "/add-guest-page",
    name: "Add Guest",
    icon: Image,
    component: AddGuestPage,
    layout: "/home-dashboard"
  },
  {
    path: "/invite-overview-page",
    name: "Invite",
    icon: Image,
    component: InviteOverviewPage,
    layout: "/home-dashboard"
  },
  {
    path: "/login-page",
    name: "Login",
    icon: Image,
    component: Login,
    layout: "/auth"
  },
  {
    path: "/signup",
    name: "Signup",
    icon: Image,
    component: Signup,
    layout: "/auth"
  }

];

export default routes;
