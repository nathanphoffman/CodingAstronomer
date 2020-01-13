var React = require('react');

module.exports = class extends React.Component {
        render() {
                return (<div className="general-fadein">
                        <h1>About Me</h1>
                        <div className="about-center">
                                <img className="about-image" src="app/img/nate.jpg" />
                        </div>
                        <h2>Programming</h2>
                        <div>
                                In the late 80s I was born into a basement which was flooded with Commodore 64 Amiga hardware and software from my dad’s closed computer shop business.  For many years, my brother and I discovered treasures from the shop in old boxes and storage.  In my preteen years my dad handed me the Second Edition C book by Brian Kernighan and Dennis Ritchie, and I began building both my first programs and my first computers. By high school I was creating websites for friends who had parents with businesses, and building computers for their families. I joined computer LAN groups and hosted one of my own.  Today, many years later, I continue my career in code, having worked as an Application Developer for a REIT company and a Senior Software Developer for a startup.  I also find myself coding in my spare time and my code can be found on GitHub.  Currently my main talents are in the web specifically with React, Vue, C#, Node, MongoDB and the cloud services Azure and AWS.
                        </div>

                        <h2>Astronomy</h2>
                        <div>
                                When I was young, my dad would look at the nightsky through a small spotting scope at planets, planets that I had seen on science programs or Star Trek.  I remember being utterly fascinated that one could see something as distant as a planet through nothing more than glass, and today I am sitting near a 10 inch diameter newtonian reflector, german equatorial mount, and 2 other telescopes, making treks every year far away from city lights.  While I am not stargazing, I am staying up-to-date with space news and looking back at the 1960s when spaceflight and science were the rage of a generation.
                        </div>
                        <h2>Other Interests</h2>
                        <div>
                                I have had many other hobbies, though none as long or consistent as my love of programming and astronomy.  Among them are: board gaming, video gaming, hiking, studying literary classics like Tolkien, and appreciating painters like Bob Ross.  You may notice my paint brush link tribute up in the navbar.  Give it a go for a random episode!
                        </div>
                </div>);
        }
};