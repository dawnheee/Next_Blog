import AllPosts from "../../components/posts/all-posts";

const DUMMY_POSTS = [
  {
    slug: "Nextjs-starttt1",
    title: "Nextjs-시작하기",
    image: "리액트.png",
    excerpt: "Nextjs는 풀스택 앱을 서버 사이드 렌더링을 통해 만들 수 있다 ",
    date: "2022-10-22",
  },
  {
    slug: "Nextjs-starttt2",
    title: "Nextjs-시작하기",
    image: "괴물.png",
    excerpt: "Nextjs는 풀스택 앱을 서버 사이드 렌더링을 통해 만들 수 있다 ",
    date: "2022-11-22",
  },
  {
    slug: "Nextjs-starttt3",
    title: "Nextjs-시작하기",
    image: "괴물.png",
    excerpt: "Nextjs는 풀스택 앱을 서버 사이드 렌더링을 통해 만들 수 있다 ",
    date: "2022-11-22",
  },
  {
    slug: "Nextjs-starttt4",
    title: "Nextjs-시작하기",
    image: "리액트.png",
    excerpt: "Nextjs는 풀스택 앱을 서버 사이드 렌더링을 통해 만들 수 있다 ",
    date: "2022-11-22",
  },
];

function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
