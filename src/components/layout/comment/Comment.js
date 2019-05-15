import React, { Component } from 'react';

class Comment extends Component {
  State = {
    img src="https://via.placeholder.com/150",
    altImg: "avatar",
    media: {
      heading: "Media heading",
      //Paragraph:  "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus."
    }
  }
  render() {
    return (
      <div className="media mb-3 mt-2">
        <img src={this.state.imgSrc} class="mr-3" alt={this.state.altImg} />
        <div className="media-body">
          <h5 className="mt-0">{this.state.media.heading}</h5>
         {this.state.media.paragraph}
        </div>
      </div>
    );
  }
}

export default Comment;
