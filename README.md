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

## Git 分支管理策略

### 分支命名规范

```
main                          # 主分支，始终是最新稳定版本
member/<成员名>               # 成员个人开发分支，如 member/alice
version/<版本号>              # 版本发布分支，如 version/v1.0.0
```

### 分支说明

| 分支类型 | 命名示例 | 用途 |
|---------|---------|------|
| 主分支 | `main` | 最新稳定版本，禁止直接推送 |
| 成员分支 | `member/alice` | 个人开发空间，从 main 拉取 |
| 版本分支 | `version/v1.0.0` | 版本发布管理，接受 bugfix |

### 工作流程

```
1. 成员开始开发:
   main → member/<你的名字> (创建分支)

2. 在成员分支上开发并提交

3. 功能完成后发起 PR:
   member/<你的名字> → main (代码审查后合并)

4. 发布新版本:
   main → version/v1.1.0 (打标签 release)
```

---

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
