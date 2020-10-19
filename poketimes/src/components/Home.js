import React, { Component } from "react";
import { Link } from "react-router-dom";
import PokeBall from "../pokeball.png";
import { connect } from "react-redux";
class Home extends Component {
  render() {
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map((post) => {
        return (
          <div className="post card" key={post.id}>
            <img src={PokeBall} alt="pokeball" />
            <div className="card-content">
              <Link to={"/" + post.id}>
                <span className="card-title">{post.title}</span>
                <p>{post.body}</p>
              </Link>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No Post yet</div>
    );
    return <div className="container">{postList}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};
export default connect(mapStateToProps)(Home);
