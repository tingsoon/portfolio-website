import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
// import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
// import CardFooter from "components/Card/CardFooter.jsx";

import projectStyle from "assets/jss/material-kit-react/views/landingPageSections/projectStyle.jsx";

import beats from "assets/img/faces/BeatsByTings.png";
import eat from "assets/img/faces/EatHawkerLah.png";
import petgram from "assets/img/faces/PetGram.png";
import tetris from "assets/img/faces/Tetris.png";

class ProjectSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Projects</h2>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <Card plain>
                <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                  <a href="https://beats-by-tings-b.herokuapp.com/login">
                  <img src={beats} alt="..." style={{height: "250px", width: "520px", display: "block", objectFit: "contain"}} />
                  </a>
                </GridItem>
                <h4 className={classes.cardTitle}>
                  <a className={classes.projectLinks} href="https://beats-by-tings-b.herokuapp.com/login">
                  Beats By Tings
                  </a>
                  <br />
                  <small className={classes.smallTitle}>Built with : React.js, Node.js, Express.js, Bootstrap</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                      A web app built using Spotify API to mimic the original Spotify App. Users are able to search for artists
                      and songs. Songs can be previewed by clicking on the song title itself.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Card plain>
                <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                <a href="https://gentle-bayou-82749.herokuapp.com/">
                <img src={eat} alt="..." style={{height: "250px", width: "520px", display: "block", objectFit: "contain"}} />
                </a>
                </GridItem>
                <h4 className={classes.cardTitle}>
                  <a className={classes.projectLinks} href="https://gentle-bayou-82749.herokuapp.com/">
                  EatHawkerLah
                  </a>
                  <br />
                  <small className={classes.smallTitle}>Built with : Node.js, Express.js, React, BootStrap, PostgreSQL</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                    A web application aimed for foodies to search for the best Hawker Centres in Singapore. Users are also
                    able to comment on what are the <i>DIE-DIE-MUST-TRY</i> dishes for each Hawker Centres.

                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Card plain>
                <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                  <a href="https://petgram-ga-project3.herokuapp.com/">
                  <img src={petgram} alt="..." style={{height: "250px", width: "520px", display: "block", objectFit: "contain"}} />
                  </a>
                </GridItem>
                <h4 className={classes.cardTitle}>
                  <a className={classes.projectLinks} href="https://petgram-ga-project3.herokuapp.com/">
                  PetGram
                  </a>
                  <br />
                  <small className={classes.smallTitle}>Built with : Ruby on Rails, Bootstrap, PostgreSQL</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                      A place where you can upload, comment, posts the cutest pets in the world.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Card plain>
                <GridItem xs={12} sm={12} md={12} className={classes.itemGrid}>
                  <a href="https://tingsoon.github.io/tetris_game/">
                  <img src={tetris} alt="..." style={{height: "250px", width: "520px", display: "block", objectFit: "contain"}} /> 
                  </a>
                </GridItem>
                <h4 className={classes.cardTitle}>
                  <a className={classes.projectLinks} href="https://tingsoon.github.io/tetris_game/">
                  Tetris Game
                  </a>
                  <br />
                  <small className={classes.smallTitle}>Built with : HTML, CSS, Javascript</small>
                </h4>
                <CardBody>
                  <p className={classes.description}>
                      A Tetris game built using Javascript, HTML and CSS. Difficulty increases as you play along.
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(projectStyle)(ProjectSection);
