import React, { Component } from 'react';
import CommentForm from './CommentForm';

class Hactive8 extends Component {
    render (){
        return(
        <form className="form-container border p-2">
          <div className="form-group">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#"><h4>QTemu</h4></a>
                <a className="navbar-brand" href="#">Create Meetup</a>
                <a className="navbar-brand" href="#">Explore</a>
                <form className="form-inline">
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Login</button>
                </form>
            </nav>
                     </div>
            <br></br>
            {/*<form className="form-container2 border p-2row">*/}
            {/*<div className="form-group">*/}
            <div className="row">
            <div className="media mb-3 mt-2">
              <img src="https://via.placeholder.com/180" class="mr-3" alt="..." />
              <div className="media-body">
                <h5 className="mt-0">Hacktive8 Meetup</h5>
                <label>Location     Jakarta</label><br></br>
                <label>Member 1078</label><br></br>
                <label>Organizer Adhy Wiranata</label><br></br>
                <button type="button" class="btn btn-primary">Join Us</button>
              </div>
            </div>
            </div>
            {/*</div>*/}
        {/*</form>*/}
        <br></br>
        <div>
          <h6>Next Meetup</h6>         
            </div>
            <div className="container-fluid border p-2">
                Awesome meetup and event<br></br>
                25 January 2019<br></br>
                Hello JavaScript & Node.js Ninjas!<br></br>
                Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018!<br></br>
                The meetup format will contain some short stories and technical talks.<br></br>
                if you have a short announcement you'd like to share with the audience, you may do so during open mic announcements.<br></br>
                remember to bring a photo ID to get thought building security.<br></br><hr></hr>

                see you there!<br></br>
                Best, Hengki, Giovanni, Sofian, Riza, Agung, The JakartaJS Organizer<br></br>
            </div>
            <div>
                <br></br>
          <h6>About Meetup</h6>
          </div>
         
            <div className="container-fluid">
                Come and Meet other developers interested in the JavaScript and it's library in the Greater Jakarta Area<br></br>
                Twitter: @JakartaJS and we use the hastag #Jakartajs
            </div>
            <br></br>
            <div>
            <h6>Members</h6>
          </div>
            <div className="container-fluid border p-2">       
                <div className="media">
                    <div className="media-left">
                    <img src="https://via.placeholder.com/100" class="mr-3" alt="..." />
                </div>
                <div className="media-body">
                <h4 className="media-heading">Organizer</h4>
                <label>Adhi Wiranata</label>
                </div>
                </div>
            </div>
            <br></br>
            <div>
            <h6>Past Meetups</h6>
          </div>
         
                <div class="container">
<div className="row">
        <div class="col-md-4 bg border p-2">
            27 November 2017 <br></br><hr></hr>
            #39 JakartaJS April meetup with kumparan<br></br>
            <h6>139 <span class="badge badge-secondary">went</span></h6>
            <button type="button" class="btn btn-primary">View</button>
        </div>
        <div className="col-md-4 bg border p-2">
        27 Oktober 2017 <br></br><hr></hr>
            #39 JakartaJS April meetup with blibli<br></br>
            <h6>113 <span class="badge badge-secondary">went</span></h6>
            <button type="button" class="btn btn-primary">View</button>
        </div>
        <div className="col-md-4 bg border p-2">
        27 September 2018 <br></br><hr></hr>
            #39 JakartaJS April meetup with hactive8<br></br>
            <h6>110 <span class="badge badge-secondary">went</span></h6>
            <button type="button" class="btn btn-primary">View</button>
        </div>
    </div>
</div>
<div>
<hr></hr>
Copyright Hacktive8 2018

</div>
             
          
          </div>
        
            <div>     
            </div>
    
        </form>
        )
        }
    }












export default Hactive8;