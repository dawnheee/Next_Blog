import React from "react";
import ReactMarkdown from "react-markdown";
import PostHeader from "./post-header";

const DUMMY_POST = {
  slug: "Nextjs-starttt4",
  title: "Nextjs-시작하기",
  image: "리액트.png",
  excerpt: "Nextjs는 풀스택 앱을 서버 사이드 렌더링을 통해 만들 수 있다 ",
  date: "2022-11-22",
  content: "# 안녕하세요 저는 서희입니다.",
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;
  return (
    <article>
      <PostHeader title={DUMMY_POST.slug} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
