import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import AboutSection from "./Sections/AboutSection.jsx";
import ContactSection from "./Sections/ContactSection.jsx";
import ProjectSection from "./Sections/ProjectSection.jsx";

const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Welcome to tingsoon.me"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 1000,
            color: "info"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/background.gif")}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} style={{ textAlign: 'center'}}>
                <h1 className={classes.title}>Hello! I'm Ting Soon.</h1>
                <h1>
                  I'm a Full Stack Web Developer.
                </h1>
                <br />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <AboutSection />
            <ProjectSection />
            <ContactSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
