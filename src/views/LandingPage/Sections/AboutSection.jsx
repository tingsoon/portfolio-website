import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Quote from "components/Typography/Quote.jsx";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
// import Button from 'components/CustomButtons/Button.jsx';

import aboutStyle from "assets/jss/material-kit-react/views/landingPageSections/aboutStyle.jsx";

// import images
import face from "assets/img/IMG_2535.jpg";
import html5 from "assets/img/html5.png";
import javascript from "assets/img/javascript.png";
import nodejs from "assets/img/nodejs.png";
import postgresql from "assets/img/postgresql.png";
import rails from "assets/img/rails.png";
import react from "assets/img/react.png";
import ruby from "assets/img/ruby.png";
import css3 from "assets/img/css3.png";



class AboutSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <img src={face} alt="..." className={classes.facepic} />
            <h4 className={classes.cardTitle}>
                  Ang Ting Soon
                  <br />
                  <small className={classes.smallTitle}>Web Developer</small>
                </h4>
            <h2 className={classes.title}>About Me</h2>
            {/* <h5 className={classes.subtitle} style={{ color: '#343F4E'}}> */}
            <Quote
            text="I bring a unique perspective to the teams that I work with due to my background as an enginner. 
            I'm on a journey to hone not only my programming and coding skills but my own self-growth, 
            eventually creating helpful and innovative solutions." />
  
            
            <h5 className={classes.description}>
            A full stack web developer with 2 years of engineering experience. 
            I have a logical mind with practical approach to problem solving and a drive to see projects to completion. 
            I have strong technical skills and I have a genuine interest in Web Development.
            I love challenges and I am a strong believer of <i>"Aut viam inveniam aut faciam"</i>, which translates to "I shall either find a way or make one".
            </h5>
            <br />
          </GridItem>
        </GridContainer>
        <div>
        <h2 className={classes.title}>Skills</h2>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4} >
              <Card plain>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={html5} alt="..."  className={classes.skillIcon} />
                    </GridItem>
                    <CardBody>
                      <h4 className={classes.cardTitle}>
                        HTML5
                        <br />
                      </h4>
                    </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4} >
              <Card plain>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={react} alt="..." className={classes.skillIcon} />
                    </GridItem>
                    <CardBody>
                      <h4 className={classes.cardTitle}>
                        JSX
                        <br />
                      </h4>
                    </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4} >
              <Card plain>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={css3} alt="..." className={classes.skillIcon}  />
                    </GridItem>
                    <CardBody>
                      <h4 className={classes.cardTitle}>
                        CSS3
                        <br />
                      </h4>
                    </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4} >
              <Card plain>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={react} alt="..." className={classes.skillIcon}  />
                    </GridItem>
                    <CardBody>
                      <h4 className={classes.cardTitle}>
                        React
                        <br />
                      </h4>
                    </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4} >
              <Card plain>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={javascript} alt="..." className={classes.skillIcon}  />
                    </GridItem>
                    <CardBody>
                      <h4 className={classes.cardTitle}>
                        Javascript
                        <br />
                      </h4>
                    </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4} >
              <Card plain>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={nodejs} alt="..." className={classes.skillIcon}  />
                    </GridItem>
                    <CardBody>
                      <h4 className={classes.cardTitle}>
                        Node
                        <br />
                      </h4>
                    </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4} >
              <Card plain>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={ruby} alt="..." className={classes.skillIcon}  />
                    </GridItem>
                    <CardBody>
                      <h4 className={classes.cardTitle}>
                        Ruby
                        <br />
                      </h4>
                    </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4} >
              <Card plain>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={rails} alt="..." className={classes.skillIcon}  />
                    </GridItem>
                    <CardBody>
                      <h4 className={classes.cardTitle}>
                        Rails
                        <br />
                      </h4>
                    </CardBody>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4} >
              <Card plain>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                      <img src={postgresql} alt="..." className={classes.skillIcon}  />
                    </GridItem>
                    <CardBody>
                      <h4 className={classes.cardTitle}>
                        PostgreSQL
                        <br />
                      </h4>
                    </CardBody>
                </Card>
              </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(aboutStyle)(AboutSection);
