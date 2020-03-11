import React from "react";
import cx from "classnames";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


// core components
import styles from "../../assets/jss/material-dashboard-pro-react/layouts/adminStyle";

//Page components
import HomePage from "../../pages/home-page.component";
import WeddingPage from "../../pages/wedding-page/wedding-page.component";
import LoginPage from "../../pages/login-page/login-page.component";
import Dashboard from "../../pages/dashboard-page/dashboard.component";
import Guests from "../../pages/guests/guests.components";
import AddGuestPage from "../../pages/add-guest-page/add-guest-page.components";
import TimelinePage from "../../pages/TimelinePage/TimelinePage.js";
import TimelineOverviewPage from "../../pages/TimelineOverview/TimelineOverviewPage";
import RegisterPage from '../../pages/RegisterPage/RegisterPage.js';

//Router
import {withRouter} from "react-router-dom";

//Redux
import {connect} from "react-redux";
import { setTestValue } from "../../redux/redux-test/redux-test.actions";


var ps;

const useStyles = makeStyles(styles);

function DashboardLayout(props) {
  const { setTestValue } = props;
  // states and functions
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [miniActive, setMiniActive] = React.useState(false);
  const [color, setColor] = React.useState("blue");
  const [bgColor, setBgColor] = React.useState("black");
  // const [hasImage, setHasImage] = React.useState(true);
  const [fixedClasses, setFixedClasses] = React.useState("dropdown");
  // styles
  const classes = useStyles();
  const mainPanelClasses =
    classes.mainPanel +
    " " +
    cx({
      [classes.mainPanelSidebarMini]: miniActive,
      [classes.mainPanelWithPerfectScrollbar]:
        navigator.platform.indexOf("Win") > -1
    });
  // ref for main panel div
  const mainPanel = React.createRef();
  // effect instead of componentDidMount, componentDidUpdate and componentWillUnmount
  React.useEffect(() => {
    setTestValue("jedan")
    
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", resizeFunction);

    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  });
  // functions for changeing the states from components

  const getRoute = () => {
    return window.location.pathname !== "/admin/full-screen-maps";
  };

  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={mainPanelClasses} ref={mainPanel}>
        {/* On the /maps/full-screen-maps route we want the map to be on full screen - this is not possible if the content and conatiner classes are present because they have some paddings which would make the map smaller */}
        <div className={classes.content}>
          <div className={classes.container}>
            <Switch>
              <Route exact path="/" component={LoginPage} />
              <Route exact path="/home-page" component={HomePage} />
              <Route path="/timeline" component={TimelineOverviewPage} />
              <Route exact path="/wedding-page" component={WeddingPage} />
              <Route exact path="/login-page" component={LoginPage} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/guests" component={Guests} />
              <Route exact path="/add-guest-page" component={AddGuestPage} />
              <Route exact path="/signup" component={RegisterPage} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = ({value}) => ({
  reduxValue: value

})

const mapDispatchToProps = dispatch => ({
  setTestValue: value => dispatch(setTestValue(value))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardLayout));