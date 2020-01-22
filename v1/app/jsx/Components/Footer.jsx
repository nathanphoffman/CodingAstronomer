var React = require('react');
var LgIcon = require('./../General/LgIcon.jsx');

module.exports = class extends React.Component {
    render() {

        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-lg-offset-0 col-md-12 col-md-offset-0">
                            <ul className="list-inline text-center">
                                <LgIcon target="_blank" address="https://medium.com/@nathanphoffman" icon="medium"/>
                                <LgIcon target="_blank" address="https://twitter.com/nathanphoffman" icon="twitter"/>
                                <LgIcon target="_blank" address="https://github.com/nathanphoffman" icon="github"/>
                                <LgIcon target="_blank" address="http://stackoverflow.com/users/4266442/nate" icon="stack-overflow"/>
                                <LgIcon target="_blank" address="https://www.linkedin.com/in/nathan-hoffman-a75994111/" icon="linkedin"/>
                                <br/>
                            </ul>
                            <p className="copyright text-muted">
                                All original content by Nathan P Hoffman,{" "}
                                <a target="_blank" href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA 2.0</a>
                                <div>I converted the <a target="_blank" href="http://startbootstrap.com/template-overviews/clean-blog/">Clean Blog</a> template to ReactJS. You can find the React adaptation I did on GitHub: 
                                <a target="_blank" href="https://github.com/webiota/NodeBlog-React">ReactJS</a></div>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
};