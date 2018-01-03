import React, {Component} from 'react';
import NewsText from './/NewsText';


class News extends Component{

    render(){
        return(
            <div className="container">
                <div className="news-box">        
                    <NewsText />        
                </div>

            </div>

        )

    }

}

export default News;