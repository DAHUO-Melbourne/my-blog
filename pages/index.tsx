import type { NextPage } from 'next';

const Home: NextPage = () => {
  return <div>this is homepage</div>;
};

export default Home;

/**
 * 3-1 路由：
 * 1. 所有的路由页面，必须在pages文件夹下
 * 2. index 路由：
 * pages/index.js，路由就是/
 * pages/blog/index.js，路由就是/blog
 * 也就是说index文件自动忽略文件名，直接用他的文件夹名字（不包括pages）
 * 3. 嵌套路由：
 * pages/blog/first-post.js那么就是/blog/first-post
 * pages/dashboard/settings/username.js, 那么路由就是dashboard/settings/username
 * 这种情况下，命名不是index，也没有拿中括号[]包裹，就是文件名也作为路由
 * 4. 动态路由：
 * pages/blog/[slug].js 那么就是/blog/匹配所有值：blog/hello-world
 * pages/[username]/settings.js 那么就是首项(pages与settings中间这一项)的值是动态的：/:username/settings(/foo/settings)
 * pages/post/[...all].js，带...就意思是后面是什么值，几级路由都可以匹配(上面两项只能匹配一级的路由)：/post/2020/id/title
 */
