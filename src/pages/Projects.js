
import React from 'react';
import Project from './children/Project';
import './project.css';

class Projects extends React.Component {
    render() {
        return (<div className="general-fadein">
            <h1>My Projects</h1>
            <div>
                Below you can find a list of my projects.  If you are interested in finding out more about my professional career, please add me on <a target="_blank" rel="noopener noreferrer" className="generalLink" href="https://www.linkedin.com/in/nathan-hoffman-a75994111/">LinkedIn.</a>  If you want to see other more minor personal projects I have worked on, you can visit <a target="_blank" rel="noopener noreferrer" className="generalLink" href="https://github.com/nathanphoffman">my Personal GitHub.</a>. 
            </div>


            <h2 className="project-header">2020</h2>
            <div className="row">

            <Project name="CleanBlog React v2"
                    summary="Updating my personal website (this site) to use the latest version of React, and cleaning some things up."
                    tech="React, Bootstrap"
                    image="codingastronomer.png"
                    link="" />

            <Project name="Vue Calendar"
                    summary="Creating a calendar with Node, MongoDB, Vue and pure-CSS."
                    tech="Node, Mongo, Vue, CSS"
                    image=""
                    link="" />

            </div>

            <h2 className="project-header">2019</h2>
            <div className="row">
            <Project name="Vexmen Robotics Website"
                    summary="Created a website for a local Brandywine robotics organization and their school kids."
                    tech="(Professional) MithrilJS, NodeJS, Webscraper"
                    image="vexmen.png"
                    link="http://order.vexmen.com/#!/order" />

            <Project name="JetSense.AI Facebook Integration"
                    summary="Setup an integration between Facebook and JetSense's chatbot services."
                    tech="(Professional) C# .NET Core 2.2, AWS DynamoDB, FB Graph API, FB Messenger."
                    image="facebook.png"
                    link="" />

            <Project name="Irrational Calculator"
                    summary="Created a console application on 24 hour notice as a sample of my work, calculates irrational numbers."
                    tech="C# .NET Core 2.2"
                    image="console.png"
                    link="https://github.com/nathanphoffman/IrrationalCalculator" />
            </div>

            <h2 className="project-header">2018</h2>
            <div className="row">
            <Project name="Forms System (BPM/Workflows)"
                    summary="Created a BPM solution; it was a 3 year project, completed in 2018 and touched almost every department."
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
                    summary="A website which turned an Operations checklist digital and streamlined the foreclosure process."
                    tech="(Professional) JQuery, C# MVC, SQL, Azure Services, Azure ServiceBus, Azure AD, ADAL.JS"
                    link=""
                    image="efc.PNG"
                    />
            </div>

            <h2 className="project-header">2016</h2>
            <div className="row">
                <Project name="Operations Reporting Website (DM Update)"
                    summary="My first professional use of ReactJS, and build tools like Gulp, Webpack, etc."
                    tech="(Professional) ReactJS, C# Web API, Linq, Azure Services, Azure ServiceBus, Azure AD, Bootstrap"
                    image="dmupdate.png"
                    link="" 
                    />
                <Project name="Lost Wizard"
                    summary="I created a framework for PhaserJS which could parse files from the Tiled Map Editor, and used configuration files to create a game."
                    tech="JavaScript, PhaserJS"
                    image="lostwizard.png"
                    link="/examples/lostwizard/index.html" />
                <Project name="Periodic Table"
                    summary="A ReactJS experiment to try and render a responsive table manually: it renders in three different forms."
                    tech="ReactJS"
                    image="periodictable.png"
                    link="/examples/periodictable/index.html" />
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
                    link="/examples/nightember/index.html" />

                <Project name="Webiota"
                    summary="An astronomy site, which led me to landing my first professional job in development. The domain lapsed, screenshots from the wayback machine."
                    tech="JQuery, PHP, JavaScript"
                    image="webiota.png"
                    link="" />

                <Project name="Photo Gallery"
                    summary="A simple site using a photo gallery library to show off some of my photos."
                    tech="JQuery, PHP, JavaScript"
                    image="gallery.png"
                    link="/examples/photogallery/index.html" />
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

export default Projects;