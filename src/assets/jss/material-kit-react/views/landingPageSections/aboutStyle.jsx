import { cardTitle, title } from "assets/jss/material-kit-react.jsx";

const aboutStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center"
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "10px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    color: "#999",
    margin: "15px 0"
  },
  facepic: {
    height: "250px",
    width: "auto",
    borderRadius: "50%"
  },
  cardTitle,
  smallTitle: {
    color: "#6c757d"
  },
  itemGrid: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  skillIcon: {
    height: "120px",
    width: "120px"
  }
};

export default aboutStyle;
