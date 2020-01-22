var React = require('react');

module.exports = class extends React.Component {

  ross() {
      // shortest bob ross method I have put together:
      var r=d=>Math.random()*d+1|0;var u=`Bob+Ross+Season+${r(31)}+Episode+${r(13)}`;window.open(`//google.com/search?q=${u}&btnI`);
  }

  render() {

    const topStyle = {
        paddingTop: '10px',
        textAlign: 'right',
        paddingRight: '25px'
      };

      return (
    <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
        <div className="container-fluid">
            <div className="navbar-header page-scroll">
                <a className="navbar-brand" href="index.html">The Coding Astronomer</a>
                <div style={topStyle} className="hidden-lg hidden-md hidden-sm" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="icon-bar">
                        <a href="#">
                        <i className="fa fa-home" aria-hidden="true"></i></a>
                    </span>
                    <span className="icon-bar">
                        <a href="#projects">
                        <i className="fa fa-file-text" aria-hidden="true"></i></a>
                    </span>
                    <span className="icon-bar">
                        <a href="#about">
                        <i className="fa fa-question-circle" aria-hidden="true"></i></a>
                    </span>
                    <span className="icon-bar">
                        <a href="javascript:void(0)" onClick={this.ross}>
                        <i className="fa fa-paint-brush" aria-hidden="true"></i></a>
                    </span>
                </div>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <a href="#">Home (Latest Posts)</a>
                    </li>
                    <li>
                        <a href="#projects">Code Projects</a>
                    </li>
                    <li>
                        <a href="#about">About Me</a>
                    </li>
                    <li className="hidden-xs hidden-sm">
                        <a href="javascript:void(0)" onClick={this.ross}><i className="fa fa-paint-brush" aria-hidden="true"></i></a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>)
  }
};

