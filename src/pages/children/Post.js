
import React from 'react';

class Post extends React.Component {

    render() {

        var formatDate = function (date){
            return (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
        }

        return (
            <div className="home-post-content">
                <a target="_blank" rel="noopener noreferrer" href={this.props.link}><h3 className="home-header">{this.props.title}</h3></a>
                <div>
                Posted on Medium: {formatDate(new Date(this.props.date))}
                </div>
                <p dangerouslySetInnerHTML={{__html: this.props.body.replace(/<img[^>]*>/g,"").replace(/<h3[^>]*>/g,"")}} />
                <ul className="pager">
                    <li className="next">
                        <a href={this.props.link} target="_blank" rel="noopener noreferrer">View Full Post (With Images)</a>
                    </li>
                </ul>
                <hr/>
            </div>
        );
    };
};

export default Post;