import React from 'react';

class Project extends React.Component {
    render() {
        let lnk = null;
        if(this.props.link) lnk = (<a target="_blank" rel="noopener noreferrer" href={this.props.link}><i className="fa fa-external-link"></i> {this.props.name}</a>)

        if (this.props.image) var image = (<img alt={this.props.name} className="project-image" src={"app/img/" + this.props.image} />);
        var content = (<div><h3>{lnk || this.props.name}</h3>
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

export default Project;