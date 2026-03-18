# 基因猎人整合包构建教程

## 前置准备

### 开发工具
- **Visual Studio Code**
  - 本体：[下载链接](https://code.visualstudio.com/download)
  - 必要插件：
    - [TypeScript Next](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next) - 版本6.0以下
    - [ProbeJS](https://marketplace.visualstudio.com/items?itemName=Prunoideae.probejs)（可选）- 最新版本，带来快速热重载和自动导包功能

### 版本控制
- **Git**：[下载链接](https://git-scm.com/)
- **GitHub Desktop**（可选）：[下载链接](https://desktop.github.com/download/) - 带来高速的git推送速度

### 网络工具
- **Clash**：稳定的网络连接

### 游戏启动器
- **Polymerium**：[GitHub仓库](https://github.com/d3ara1n/Polymerium) - 游戏启动器，提供关键构建选项

## 快速构建

### 使用 Polymerium

```bash
git clone https://github.com/Ver-shift/gene_hunter_2.0.git ~/.trident/instances/gene_hunter_2.0
```

克隆完成后，在 Polymerium 中就能看到 **Gene Hunter 2.0** 实例，直接运行即可开始构建。



## 初级开发入门

1. 在启动器内找到整合包实例。使用vscode打开`.trident\instances\gene_hunter_2.0\build`文件夹作为vscode的工作区，即可正常开发。

2. 提交准备：
   1. 配置文件：将更改后的配置文件手动放入`import/config`文件夹(不要将所有配置文件全部放入)。
   2. kubejs文件脚本：通常会自动同步进入`import`文件夹。

3. 提交或者导出整合包：将需要导出或者提交的文件放入`import`文件夹，即可同步或者导出为整合包压缩文件。

## 高级开发

### 📁 项目结构

```
gene_hunter_2.0/
├── build/          # 构建相关文件
├── import/         # 导出为整合包压缩文件时的内容文件夹
├── live/           # 缓存层
├── persist/        # 持久化层
├── .gitignore      # Git忽略配置
├── profile.json    # 关键资源mod配置文件
└── README.md       # 项目说明文档
```

见以下信息
https://github.com/d3ara1n/Polymerium/discussions/60#discussioncomment-15355545




> 💡 **提示**: 确保所有工具都正确安装并配置好网络连接，以获得最佳构建体验。
