import React, {Component} from 'react';
import Twitter from './Twitter';
// import Tumblr from './components/Tumblr';
// import Yelp from './components/Yelp';

class NavBar extends Component{


    render(){
        return(
            <div className="nav-container">
                <div className="navbox">
                    <Twitter />
                    {/* <div className="twitter">
                        <Twitter />

                    </div>
                    <div className="tumblr">
                        <Tumblr />
                    </div>
                    <div className="yelp">
                        <Yelp />
                    </div> */}
                    
                </div>
            </div>



        )



    }


}

export default NavBar;