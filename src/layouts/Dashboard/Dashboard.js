/*
v.0.1.
- getRoutes updated with additional prop of "exact = true|false"
v.0.2 changed path naming for top level layout logic
v.0.2.1 cleaned up components, removed test values for Redux

*/
import React from "react";
import cx from "classnames";

//Redux
import { connect } from "react-redux";
import { setTestValue } from "../../redux/redux-test/redux-test.actions";

// Routes
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import routes from "../../routes";

// Components
import AdminNavbar from "../../components/Navbars/AdminNavbar";
import Footer from "../../components/Footer/Footer";

// Scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// MUI stuff
import { makeStyles } from "@material-ui/core/styles";

// CSS and style
import styles from "../../assets/jss/material-dashboard-pro-react/layouts/adminStyle";

const useStyles = makeStyles(styles);

var ps;

function HomeDashboard(props) {
  const { setTestValue, ...rest } = props;
  // states and functions
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [miniActive, setMiniActive] = React.useState(false);

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

  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      setMobileOpen(false);
    }
  };

  const getActiveRoute = routes => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].collapse) {
        let collapseActiveRoute = getActiveRoute(routes[i].name);
        if (collapseActiveRoute !== activeRoute) {
          return collapseActiveRoute;
        }
      } else {
        if (window.location.href.indexOf(routes[i].path) !== -1) {
          return routes[i].name;
        }
      }
    }
    return activeRoute;
  };

  // Refactored getRoutes to have "exact" prop as well (true|false), this will be important with parametric URLs
  const getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/dashboard") {
        return (
          <Route
            exact={prop.exact}
            path={prop.layout + prop.path} //Changed from {prop.path} so it works with layout logic
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <div className={classes.wrapper}>
      <div className={mainPanelClasses} ref={mainPanel}>
        <AdminNavbar
          miniActive={miniActive}
          {...rest}
          brandText={getActiveRoute(routes)}
        />
        <div className={classes.content}>
          <div className={classes.container}>
            <Switch>
              {getRoutes(routes)}
              <Redirect from="/dashboard" to="/dashboard/event" />
            </Switch>
          </div>
        </div>
        <Footer fluid />
      </div>
    </div>
  );
}

const mapStateToProps = ({ value }) => ({
  reduxValue: value
});

const mapDispatchToProps = dispatch => ({
  setTestValue: value => dispatch(setTestValue(value))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(HomeDashboard)
);
