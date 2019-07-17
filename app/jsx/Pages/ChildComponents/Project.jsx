var React = require('react');

module.exports = class extends React.Component {
    render() {

        if (this.props.image) var image = (<img className="project-image" src={"app/img/" + this.props.image} />);
        var content = (<div><h3>{this.props.name}</h3>
            <span className="project-techText">{this.props.tech}</span>
            <div>{this.props.summary}</div></div>);


        var body = null;

        if(this.props.image) body = (<div className="row"><div className="col-md-4 hidden-sm hidden-xs project-image-row">{image}</div>
            <div className="col-md-8">{content}</div></div>)
        else body = (<div className="row"><div className="col-md-12">{content}</div></div>)

        return (<div className="col-md-6 project">
            {body}
        </div>);
    }
};