var React = require('react');
var LgIcon = require('./../General/LgIcon.jsx');

module.exports = class extends React.Component {
    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-lg-offset-0 col-md-12 col-md-offset-0 text-center">
                        <LgIcon address="#tag/web" icon="chrome"/>
                        <LgIcon address="#tag/application" icon="server"/>
                        <LgIcon address="#tag/space" icon="space-shuttle"/>
                        <br className="visible-xs"/>
                        <hr/>
                    </div>
                </div>
            </div>
        );
    }
};