var React = require('react');

module.exports = class extends React.Component {
    render() {
        var st = {display: 'inline-block'};
        return (
            <span style={st} className={"fa fa-" + this.props.icon + " fa-stack-1x"}></span>
        );
    }
}