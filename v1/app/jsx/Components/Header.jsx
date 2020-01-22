var React = require('react');

module.exports = class extends React.Component {
  render() {
      let rand = Math.ceil(Math.random()*2);
      var bg = {backgroundImage: `url(app/img/2.jpg)`};
      return (
    <header className="intro-header" style={bg}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-lg-offset-0 col-md-12 col-md-offset-0">
                    <div className="site-heading">
                        <h2 className="hidden-xs general-top-header">The Coding Astronomer</h2>
                        <h3 className="visible-xs">The Coding Astronomer</h3>
                        <hr className="small"/>
                        <span className="subheading">The Site of Nathan Hoffman 
                        <br/><span className="hidden-xs">Programmer and Amateur Astronomer</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </header>
    );
  }
};