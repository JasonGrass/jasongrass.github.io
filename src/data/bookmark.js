const template = {
  id: 0,
  title: "",
  description: "",
  url: "",
  icon: "",
  icon2: "",
};

export const activeBookmarks = [
  {
    id: 100,
    title: "个人博客",
    description: "个人博客，记录学习笔记等",
    url: "https://blog.jgrass.cc/",
    icon: "/assets/icons/avatar.png",
    icon2: "",
  },
  {
    id: 101,
    title: "博客园",
    description: "记录问题调查过程，学习笔记等",
    url: "https://www.cnblogs.com/jasongrass/",
    icon: "/assets/icons/cnblogs.svg",
    icon2:
      "https://is3-ssl.mzstatic.com/image/thumb/Purple113/v4/0b/63/72/0b6372b0-4a5d-43c5-347d-fb937a27dc81/source/512x512bb.jpg",
  },
  {
    id: 102,
    title: "Github",
    description: "个人开源项目",
    url: "https://github.com/JasonGrass",
    icon: "/assets/icons/github.svg",
    icon2:
      "https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png",
  },
  {
    id: 103,
    title: "Web tools",
    description: "为自己服务，偶尔用用的开发辅助工具页面",
    url: "https://tools.jgrass.xyz/",
    icon: "/assets/icons/tool-box.png",
    icon2:
      "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/tools.png",
  },
  {
    id: 104,
    title: "Rename",
    description: "在线文件批量重命名工具",
    url: "https://rename.jgrass.xyz/",
    icon: "/assets/icons/rename-256.ico",
    icon2:
      "https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/256x256/plain/tools.png",
  },
];

export const inactiveBookmarks = [
  {
    id: 201,
    title: "Blog",
    description: "使用 github pages 搭建的静态博客站点，已暂停维护",
    url: "https://jasongrass.github.io/blog",
    icon: "/assets/icons/blog.png",
    icon2: "https://www.accfb.org/wp-content/uploads/2018/06/Blog-icon.png",
  },
  {
    id: 202,
    title: "jottings",
    description: "一些使用 logseq 日志记录的随笔",
    url: "https://jasongrass.github.io/jottings",
    icon: "/assets/icons/creative-writing.png",
    icon2:
      "https://static.vecteezy.com/system/resources/previews/000/357/598/large_2x/vector-writing-icon.jpg",
  },
  {
    id: 203,
    title: "bat 批处理脚本教程",
    description: "一个 vuepress 的练习项目，介绍 bat 批处理脚本的使用",
    url: "http://jasongrass.github.io/bat-script-doc/",
    icon: "/assets/icons/bat.png",
    icon2:
      "https://icons.iconarchive.com/icons/icons8/halloween/256/bat-icon.png",
  },
];
