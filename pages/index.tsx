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

/**
 * 3-2
 * 第一个知识点：alias配置路径：在tsconfig里配置baseurl从而不需要再走相对路径这种'../'来往层级外面找文件夹了。
 * 第二个知识点：scss文件的文件名带module的话就意味着他这对当前模块生效因为build之后会有一段hash tag，所以一定不会出现对全局生效的情况
 * 而且引入样式可以使用：import styles from './index.module.scss';， 然后styles.类名来使用
 * 第三个知识点：Link组件是nextjs提供的导航工具
 */
