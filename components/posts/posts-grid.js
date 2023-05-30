import React from "react";
import classes from "./post-grid.module.css";
import PostItem from "./post-item";

function PostsGrid(props) {
  const { post } = props;
  return (
    <ul className={classes.grid}>
      {post.map((post) => {
        <PostItem key={post.slug} post={post} />;
      })}
    </ul>
  );
}

export default PostsGrid;
