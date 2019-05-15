import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

class BaseHeader extends Component {

  render() {
    const { mainTitle, subTitle, title1, title2} = this.props;
    return (
      <ul className="nav fixed-top justify-content-between text-white-50 py-3 px-2">
        <Link to="../page"><li className="nav-item text-white font-weight-bold mr-5 ml-2">{mainTitle}</li></Link>
        <Link to="/CreateMeetup"><li className="nav-item mr-5">{subTitle} </li></Link>
        <Link to="/Explore"><li className="nav-item">{title1}</li></Link>
        <li className="nav-item flex-grow-1 text-right mr-2">{title2}</li>
      </ul>
    );
  }
}

BaseHeader.propTypes = {
  mainTitle: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
};
export default BaseHeader;
// import React from "react";
// import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// //import MenuIcon from "@material-ui/icons/Menu";

// const styles = {
//   root: {
//     flexGrow: 1
//   },
//   grow: {
//     flexGrow: 1
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 10
//   }
// };

// function ButtonAppBar(props) {
//   const { classes } = props;
//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" color="inherit" className={classes.grow}>
//             Qtemu
//           </Typography>
//           <Typography variant="h7" color="inherit" className={classes.grow}>
//             Create Meetup
//           </Typography>
//           <Typography variant="h7" color="inherit" className={classes.grow}>
//             Explore
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

// ButtonAppBar.propTypes = {
//   classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(ButtonAppBar);
