var React = require('react');

module.exports = class extends React.Component {
  render() {
    if(this.props.selected) return (
        <a href={this.props.address}>
            <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x"></i>
                <i className={"fa fa-" + this.props.icon + " fa-stack-1x fa-inverse"}></i>
            </span>
        </a>);
    else return (
        <a href={this.props.address} target={this.props.target || "_self"}>
            <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x fa-inverse"></i>
                <i className={"fa fa-" + this.props.icon + " fa-stack-1x"}></i>
            </span>
        </a>);
  }
}