import { Fragment } from "react";
import Hero from "../components/home-page/hero";
import FeaturedPosts from "../components/home-page/featured-posts";

function HomePage() {
  const DUMMY_POSTS = [
    {
      slug: "Nextjs-시작하기",
      title: "Nextjs-시작하기",
      image: "Nextjs-시작하기.png",
      excerpt: "Nextjs는 풀스택 앱을 서버 사이드 렌더링을 통해 만들 수 있다 ",
      date,
    },
  ];
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;
