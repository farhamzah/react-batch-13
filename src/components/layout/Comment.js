import React, { Component } from 'react';

class Comment extends Component {
    render() {
        return (
            
            <div className="media mb-3 mt-2">
              <img src="https://via.placeholder.com/200" class="mr-3" alt="..." />
              <div className="media-body">
                <h5 className="mt-0">Media heading</h5>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
              </div>
            </div>
          
        )
    }
}

export default Comment;