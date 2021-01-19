// 1. 首先安装typescript包：yarn add typescript -D
// 2. 指定编译: yarn tsc 01-getting-started.ts
// 备注：
// 可通过`yarn tsc --init`初始化typescript配置文件
// 然后在执行`yarn tsc`命令使用配置文件编译整个项目
const hello = (name: string) => {
  console.log(`Hello ，${name}`);
};
hello("Typescript");
