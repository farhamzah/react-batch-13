import React, { Component } from 'react';
import Home from './pages/Home';
import CreateMeetup from './pages/CreateMeetup';
import Explore from './pages/Explore';
import {  BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./store";

// import './App.css';

// import BaseHeader from './components/layout/BaseHeader';
// import Meetup from './components/layout/Meetup';
// import NextMeetup from './components/layout/NextMeetup';
// import About from './components/layout/About';
// import Members from './components/layout/Members';
// import Past from "./components/layout/Past";
// import BaseFooter from './components/layout/BaseFooter';
// //import Profile from './components/layout/Profile';
// import axios from "axios";
// import { Divider } from 'material-ui';
// import { cx, css } from 'emotion';


// const blueColor = css`
//   color: blue
//   `
// const greenColor = css`
//   color: green
//   `

// class App extends React.Component {  
//     constructor(props) {
//       super(props);
//       this.state = {
//         people: []
//       };
//     }
//     componentDidMount() {
//       axios
//         .get("https://swapi.co/api/people")
//         .then(response => {
//           this.setState({ people: response.data.results })
//           console.log(response.data)
//         } );
  // state = {
  //   blueColor: false
  // }

  // changeColor = () => {
  //   this.setState({
  //     blueColor: !this.state.blueColor
  //   })
  // }
    
  //   render() {
  //     console.log(this.state.blueColor, `<==================blueColor =======================`);
  //     return (
  //       <div classname="App">
  //       <header>
  //         <p className={cx(
  //           { [greenColor]: !this.state.blueColor},
  //           {[blueColor]: this.state.blueColor}
  //         )}>
  //           Edit <code></code> and save to reload.
  //         </p>
  //         <button id="increment" onClick={this.changeColor}>Change Color</button>
  //       </header>
  //       </div>
        // <React.Fragment>
        //   <h1>Fetching data...</h1>
        //   <ul>{this.state.people.map(p => <li>{p.name}</li>)}</ul>
        // </React.Fragment>
  //     )
  //   }
  // }

  class App extends Component {
  render(){
    return(
      <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component = {Home} />
          <Route exact path="/CreateMeetup" component = {CreateMeetup} />
        </Switch>
      </Router>
      </div>
    )
  }
    
  }
//   state = {
//     list:{
//       index0: "Qtemu",
//       index1: "Create Meetup",
//       index2: "Explore",
//       index3: "Login"
//     },
//     title:"Hacktiv8 Meetup",
//     paragraph1: "Location",
//     paragraph2: "Members",
//     paragraph3: "Organizers",
//     button1: "Join Us",
//     paragraph4:{
//       index0: "Jakarta, Indonesia",
//       index1: "1,078",
//       index2: "Adhy Wiranata"   
//     },
//     subTitle1: "Next Meetup",
//     paragraphNM: "Awesome meetup and event",
//     date: "25 January 2019", 
//     paragraphNM1: "Hello JavaScript & Node.js Ninjas", 
//     paragraphNM2: "Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018!",
//     paragraphNM3: "The meetup format will contain some short stories and technical talks.",
//     paragraphNM4: "If you have a short announcement you'd like to share with the audience, you may do so during open mic announcements.",
//     paragraphNM5: "Remember to bring a photo ID to get through building security.",
//     paragraphNM6: "-----",
//     paragraphNM7: "See you there!",
//     paragraphNM8: "Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers",

//     subTitle2: "About Meetup",
//     paragraphAB: "Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area.",
//     paragraphAB1: "Twitter: @JakartaJS and we use the hashtag #jakartajs",

//     subTitle3: "Members",
//     subTitle4: "See all",
//     title3: "Organizers",
//     paragraphM: "Adhy Wiranata",
//     paragraphM1: "4 others.",

//     subTitle5: "Past Meetups",
//     subTitle6: "See all",
//     date1: "27 November 2017",
//     paragraphP11: "#39 JakartaJS April Meetup with Kumparan",
//     paragraphP12: "139",
//     paragraphP13: "went",
//     button2: "View",

//     footer: "Copyright Hacktiv8 2018"
//   }

//   render() {
//     return (
//       <div className="App">
//         <BaseHeader
//           mainTitle={this.state.list.index0}
//           subTitle={this.state.list.index1}
//           title1={this.state.list.index2}
//           title2={this.state.list.index3} 
//         />
//         <Meetup
//           title={this.state.title}
//           paragraph1={this.state.paragraph1}
//           paragraph2={this.state.paragraph2}
//           paragraph3={this.state.paragraph3}
//           button1={this.state.button1}
//           paragraph40={this.state.paragraph4.index0}
//           paragraph41={this.state.paragraph4.index1}
//           paragraph42={this.state.paragraph4.index2}
//         />
//         <NextMeetup
//          subTitle1={this.state.subTitle1}
//          paragraphNM={this.state.paragraphNM}
//          date={this.state.date}
//          paragraphNM1={this.state.paragraphNM1}
//          paragraphNM2={this.state.paragraphNM2}
//          paragraphNM3={this.state.paragraphNM3}
//          paragraphNM4={this.state.paragraphNM4}
//          paragraphNM5={this.state.paragraphNM5}
//          paragraphNM6={this.state.paragraphNM6}
//          paragraphNM7={this.state.paragraphNM7}
//          paragraphNM8={this.state.paragraphNM8}
//          />
//         <About
//           subTitle2={this.state.subTitle2}
//           paragraphAB={this.state.paragraphAB}
//           paragraphAB1={this.state.paragraphAB1}
//         />
//         <Members
//           subTitle3={this.state.subTitle3}
//           subTitle4={this.state.subTitle4}
//           title3={this.state.title3}
//           paragraphM={this.state.paragraphM}
//           paragraphM1={this.state.paragraphM1}
//         />
//         <Past
//         subTitle5={this.state.subTitle5}
//         subTitle6={this.state.subTitle6}
//         date1={this.state.date1}
//         paragraphP11={this.state.paragraphP11}
//         paragraphP12={this.state.paragraphP12}
//         paragraphP13={this.state.paragraphP13}
//         button2={this.state.button2}
//         />
//         <BaseFooter
//         footer={this.state.footer}
//         />
//      </div>
//     );
//   }
// }

export default App;