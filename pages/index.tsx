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

/**
 * 3-3
 * 第一个知识点：在scss里引入样式：@import 'antd/dist/antd.css'
 * 第二个知识点，使用useRouter来获取当前的路径, 使用const { pathname } = useRouter();来获取路径名
 */

/**
 * 4-3
 * 第一个知识点： 居中的一种写法：
 *  position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
 * 第二个知识点：input的属性是有name的，那么在e.target就可以既拿到value也可以拿到name。
    其中一个可以利用的办法是：将field设置为name一样的值，这样就可以：
    const { name, value } = e?.target;
    setForm({
      ...form,
      [name]: value,
    });
    第三个知识点： css嵌套选择器应该意思就是子组件选择器
 */

/**
 * 4-4
 * 知识点：
 * setState可以传入回调函数来拿到最新的state的值：
 * setCount((count) => {
        return count - 1;
   });
 */

/**
* 4-5
第一个知识点：
  axios实例request的方法(fetch文件)：
  axios.create({
    baseURL: '/',
  });
  requestInstance.interceptors.request.use(
    (config) => config,
    (error) => Promise.reject(error),
  );
  requestInstance.interceptors.response.use(response => {
    if (response?.status === 200) {
      return response?.data
    } else {
      return {
        code: -1,
        msg: 'unknown error',
        data: null,
      }
    }
  }), (error: any) => Promise.reject(error);
  来配置axios的request实例。导出以后，引入，然后直接request.post就可以使用封装好的axios了

  第二个知识点：
  request的url路由，和文件路径是一样的，比如说：
  request.post('/api/user/sendVerifyCode');
  那么就在文件夹api/user下面新建一个文件叫sendVerifyCode，然后在文件里导出一个函数/return promise出来
  但是返回的格式必须是：
  res.status(200).json({
    code: 0,
    data: '123'
  })
*/
