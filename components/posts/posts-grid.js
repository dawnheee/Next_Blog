import React from "react";
import classes from "./post-grid.module.css";

function PostsGrid(props) {
  const { post } = props;
  return (
    <ul className={classes.grid}>
      {post.map((post) => {
        <PostItem />;
      })}
    </ul>
  );
}

export default PostsGrid;
