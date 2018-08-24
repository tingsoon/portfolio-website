import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";


import contactStyle from "assets/jss/material-kit-react/views/landingPageSections/contactStyle.jsx";

class ContactSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Contact</h2>
            <div className={classes.linkSpacing}>
              <Button justIcon round color="github" href="mailto:a.tingsoon@gmail.com?Subject=Hello%20there">
              <i
                className={" fas fa-envelope"}
              />
              </Button>
              <a className={classes.links} href="mailto:a.tingsoon@gmail.com?Subject=Hello%20there">a.tingsoon@gmail.com</a>
            </div>
            <div className={classes.linkSpacing}>
              <Button justIcon round color="github" href="https://www.github.com/tingsoon">
              <i
                className={" fab fa-github"}
              />
              </Button>
              <a className={classes.links} href="https://www.github.com/tingsoon">github.com/tingsoon</a>
            </div>
            <div className={classes.linkSpacing}>
              <Button justIcon round color="github" href="https://www.linkedin.com/in/angtingsoon/">
              <i
                className={" fab fa-github"}
              />
              </Button>
              <a className={classes.links} href="https://www.linkedin.com/in/angtingsoon/">linkedin.com/in/angtingsoon</a>
            </div>
          </GridItem>
        </GridContainer>
        <div className={classes.linebreak}/>
      </div>
    );
  }
}

export default withStyles(contactStyle)(ContactSection);
