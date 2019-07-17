var React = require('react');
var Post = require('./ChildComponents/Post.jsx');

module.exports = class extends React.Component {

    componentWillMount() {

        var self = this;
        var posts = [];
        var maxPosts = 5;

        var url = 'https://medium.com/feed/@nathanphoffman';
        feednami.load(url, function (result) {
            if (result.error) {
                console.log(result.error);
            } else {
                var posts = result.feed.entries;
                if (posts.length > maxPosts) posts = posts.slice(0, maxPosts);
                console.log(posts);

                self.setState({ loaded: true });
                // purposeful set timeout to delay the load
                setTimeout(() => { self.setState({ posts: posts, loaded: false }) }, 750);
            }
        });
    }

    render() {

        var postRender = [];
        if (this.state && this.state.posts) this.state.posts.forEach((post) => {
            postRender.push(<Post
                title={post.title}
                body={post.description}
                link={post.link}
                date={post.date}
                ></Post>);
        });

        if (this.state && this.state.posts) return (<div className="general-fadein">
            <div className="home-introText">
                Welcome! Below are my last posts on Twitter and Medium,
                     you can see my <a className="generalLink" href="#projects">projects here</a> and access my resume/about
                     page at the links above.
                </div>

            {postRender}

            <a href="https://medium.com/@nathanphoffman" target="_blank"><h3>More Posts on Medium</h3></a>
            You can see all of my posts on my Medium account, you can access it by clicking on the title or {" "}
            <a href="https://medium.com/@nathanphoffman" target="_blank">by clicking here</a>.
            </div>);
        else if (this.state && this.state.loaded) return (<div className="general-fadeout">Loading Medium Posts...</div>)
        else return (<div>Loading Medium Posts...</div>);
    };
};
