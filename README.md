# self-resume/ 个人简历

[在线预览](https://alfxjx.github.io/self-resume/)

![pic](./src/assets/qrcode.png)

本项目是受[这个](https://github.com/jirengu-inc/animating-resume)的启发，本来是打算直接fork过来使用的，但是因为cli2的部署不知道为什么一直出问题，索性在cli3下，重新做了一下配置。

目前的就是在vue-cli@3下完成的。

> 部署方法

```
npm run build
cd dist
git init
git add -A
git commit -m "dist"
git push -f git@github.com:Alfxjx/self-resume.git master:gh-pages
```
