var React = require('react');
var Project = require('./ChildComponents/Project.jsx')

module.exports = class extends React.Component {
    render() {
        return (<div className="general-fadein">
            <h1>My Projects</h1>
            <div>
                Below you can find a list of my projects.  Note that professional projects do not have links or any more detail provided for security/privacy.  If you are interested in finding out more about my professional career, please add me on <a target="_blank" className="generalLink" href="https://www.linkedin.com/in/nathan-hoffman-a75994111/">LinkedIn.</a>
            </div>

            <h2 className="project-header">2019</h2>
            <div className="row">
            <Project name="Vexmen Robotics Website (Current)"
                    summary="Creating a website for a local Brandywine robotics organization and their school kids."
                    tech="(Professional) MithrilJS, NodeJS"
                    image="vexmen.png"
                    link="http://google.com"
                    
                    />
            </div>

            <h2 className="project-header">2018</h2>
            <div className="row">
            <Project name="Forms System (BPM/Workflows)"
                    summary="Created a new BPM solution; it was a 2-3 year project that finished in 2018 involving: VueJS, Web Api, Azure Service Bus, SQL, and MongoDB Storage."
                    tech="(Professional) VueJS, Web Api, Azure Service Bus, SQL, and MongoDB Storage"
                    image="forms.png"
                    link="" />
                <Project name="Developer Admin Site"
                    summary="Created a simple administration site where we could monitor the run of several of our back-end services."
                    tech="(Professional) C# .Net Core 2.0, ReactJS, Gulp, Webpack"
                    link="" />
            </div>

            <h2 className="project-header">2017</h2>
            <div className="row">
            <Project name="Coding Astronomer (This Site)"
                    summary="A personal site (this site) to allow people who followed me on my Wordpress blog to find me."
                    tech="ReactJS, Bootstrap, CleanBlog Template"
                    image="codingastronomer.png"
                    link="" />

                <Project name="A Centralized Web Service"
                    summary="A web service designed to integrate several of our existing systems and redirect them to multiple point-of-sales during a point-of-sale transition."
                    tech="(Professional) C# Web Api, OAuth, Owin, NodeJS, ExpressJS, MongoDB"
                    link="" />
                <Project name="Operations Checklist Website"
                    summary="A website which turned an Operations checklist digital."
                    tech="(Professional) JQuery, C# MVC, SQL, Azure Services, Azure ServiceBus, Azure AD, ADAL.JS"
                    link=""
                    image="efc.PNG"
                    />
            </div>

            <h2 className="project-header">2016</h2>
            <div className="row">
                <Project name="Operations Reporting Website (DM Update)"
                    summary="My first professional use of ReactJS, and build tools like Gulp, Webpack, etc."
                    tech="ReactJS, C# Web API, Linq, Azure Services, Azure ServiceBus, Azure AD, Bootstrap"
                    image="dmupdate.png"
                    link="" 
                    />
                <Project name="Lost Wizard"
                    summary="I created a framework for PhaserJS which could parse files from the Tiled Map Editor, and use configuration files to create a game."
                    tech="JavaScript, PhaserJS"
                    image="lostwizard.png"
                    link="" />
                <Project name="Periodic Table"
                    summary="A ReactJS experiment to try and render a responsive table manually: it renders in three different forms."
                    tech="ReactJS"
                    image="periodictable.png"
                    link="" />
                <Project name="Revenue Management Pricing Website"
                    summary="Extremely complex multiple-table, multiple-screen auto-updating interface."
                    tech="(Professional) JQuery, C# MVC, Datatables"
                    image="arc.png"
                    link=""
                    />
            </div>

            <h2 className="project-header">2015</h2>
            <div className="row">
                <Project name="Accounting Check Website"
                    summary="An application for tracking and managing company checks."
                    tech="(Professional) JQuery, C# MVC, SQL"
                    image="path.png"
                    link=""/>
                <Project name="BPM Solution"
                    summary="My first professional coding project, I brought our BPM process inhouse to an open source solution."
                    tech="(Professional) JQuery, PHP, MySQL, ProcessMaker BPM, C# Console Applications"
                    image="workflows.png"
                    link="" 
                    />
                <Project name="Apollo Game"
                    summary="My first experiment with PhaserJS, themed as the Apollo Moon landings."
                    tech="JavaScript, PhaserJS"
                    link="" />
            </div>
            <h2 className="project-header">2008-2014</h2>
            <div className="row">
                <Project name="Night Ember"
                    summary="A simple unit conversion app for astronomical units"
                    tech="JQuery, My Own CSS/Design"
                    image="nightember.png"
                    link="" />

                <Project name="Webiota"
                    summary="An astronomy site, which led me to landing my first professional job in development. The domain lapsed, screenshots from the wayback machine."
                    tech="JQuery, PHP, JavaScript"
                    image="webiota.png"
                    link="" />
            </div>

            <h2 className="project-header">pre-2006 (High School)</h2>
            <div className="row">
                <Project name="Real-Estate Site"
                    summary="A simple website for a small real-estate company for a friend's dad, no longer available online."
                    tech="Plain HTML, My Own CSS/Design"
                    link="" />
                <Project name="Music Site"
                    summary="A simple website for a friend's dad's band, no longer available online."
                    tech="Plain HTML, JavaScript, some Flash, My Own CSS/Design"
                    link="" />
                <Project name="Blue Sky Envy Site"
                    summary="A simple website for a local band, no longer available."
                    tech="Plain HTML My Own CSS/Design"
                    link="" />
                    <Project name="Graphing Tool"
                    summary="A simple console application in C++ for outputting x,y plot files"
                    tech="C++"
                    link="" />
            </div>
        </div>);
    }
};