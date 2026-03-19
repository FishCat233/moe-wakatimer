> [!WARNING]
> 
> 以下内容由 AI 编写，可能包含错误或不完整的信息。
>
> 具体情况请以源码为准。

<div align="center">

<h1>Moe Wakatimer</h1>

![GitHub Release](https://img.shields.io/github/v/release/FishCat233/moe-wakatimer) ![GitHub Downloads (all assets, all releases)](https://img.shields.io/github/downloads/FishCat233/moe-wakatimer/total)
[![wakatime](https://wakatime.com/badge/github/FishCat233/moe-wakatimer.svg)](https://wakatime.com/badge/github/FishCat233/moe-wakatimer)

<h5>一个基于 Cloudflare Workers 的 Wakatime 统计展示工具，将你的编程时间转换为可爱的 Moe Counter 风格显示。</h5>

![示例](https://count.getloli.com/get/@moe-wakatimer?theme=rule34)

</div>

## ✨ 特性

- 🔗 **无缝集成 Wakatime** - 自动获取你的编程时间统计
- 🎨 **多种主题选择** - 支持多种 Moe Counter 主题风格
- ⏱️ **灵活时间单位** - 支持秒、分钟、小时三种时间显示格式
- ☁️ **基于 Cloudflare Workers** - 快速、免费、全球部署
- 🔒 **安全可靠** - API Key 通过环境变量管理，无敏感信息泄露风险

## 🚀 快速开始

### 前置要求

- [Wakatime](https://wakatime.com/) 账户和 API Key
- [Cloudflare](https://cloudflare.com/) 账户
- [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) 工具

### 部署方式

#### 方式一：Dashboard 部署（推荐，更简单）

1. **创建新的 Worker**
   - 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - 进入 Workers & Pages → 创建 Worker
   - 给 Worker 命名（如 `moe-wakatimer`）

2. **上传代码**
   - 复制 `src/worker.js` 文件的内容 / *或者使用 cloudflare 连接 github 仓库上传也行*
   - 粘贴到 Dashboard 的代码编辑器中
   - 点击"保存并部署"

3. **配置环境变量**
   - 在 Worker 设置中找到"环境变量"
   - 添加变量：
     - **变量名**: `WAKATIME_API_KEY`
     - **值**: 你的 Wakatime API Key
   - 保存设置

4. **完成部署**
   - 你的 Worker 现在已部署完成
   - 记下 Worker 的 URL（格式如：`https://moe-wakatimer.your-subdomain.workers.dev`）

#### 方式二：命令行部署（适合开发者）

1. **克隆项目**
```bash
git clone https://github.com/your-username/moe-wakatimer.git
cd moe-wakatimer
```

2. **安装依赖**
```bash
npm install
```

3. **配置环境变量**
```bash
# 在 Cloudflare Workers 中设置环境变量
wrangler secret put WAKATIME_API_KEY
# 然后输入你的 Wakatime API Key
```

4. **部署到 Cloudflare**
```bash
wrangler deploy
```

## 📖 使用方法

部署完成后，你的 Worker 将提供一个 URL，可以通过以下参数自定义显示：

### 基本 URL
```
https://your-worker.your-subdomain.workers.dev/
```

### 可选参数

| 参数        | 说明             | 默认值       | 可选值                     |
| ----------- | ---------------- | ------------ | -------------------------- |
| `time_type` | 时间显示单位     | `hour`       | `second`, `minute`, `hour` |
| `theme`     | Moe Counter 主题 | `booru-lewd` | 见下方主题列表             |

### 使用示例

```bash
# 显示总编程小时数（默认）
https://your-worker.workers.dev/

# 显示总编程分钟数
https://your-worker.workers.dev/?time_type=minute

# 显示总编程秒数，使用 moebooru 主题
https://your-worker.workers.dev/?time_type=second&theme=moebooru
```

## 🎨 支持的主题

Moe Wakatimer 支持所有 [Moe Counter](https://count.getloli.com/) 主题，包括：

- `moebooru` - 萌娘百科风格
- `booru-lewd` - 萌娘百科风格（默认）
- `rule34` - Rule34 风格
- `gelbooru` - Gelbooru 风格
- `safebooru` - 安全版萌娘百科风格

## 🛠️ 开发

### 本地开发

```bash
# 启动本地开发服务器
npm run dev

# 或使用
npm start
```

### 项目结构

```
moe-wakatimer/
├── src/
│   └── worker.js          # 主 Worker 文件
├── wrangler.jsonc         # Wrangler 配置
├── package.json           # 项目配置
└── README.md             # 项目说明
```

## 🔧 API 参考

### 端点
- `GET /` - 获取 Wakatime 统计并重定向到 Moe Counter

### 查询参数
- `time_type` - 时间单位（second/minute/hour）
- `theme` - Moe Counter 主题名称

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 本项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 [MIT License](LICENSE)。

## 🙏 致谢

- [Wakatime](https://wakatime.com/) - 编程时间统计服务
- [Moe Counter](https://count.getloli.com/) - 可爱的计数器服务
- [Cloudflare Workers](https://workers.cloudflare.com/) - 无服务器计算平台

## 📞 联系

如有问题或建议，请通过以下方式联系：

- 提交 [Issue](https://github.com/your-username/moe-wakatimer/issues)
- 发送邮件：your-email@example.com

---

⭐ 如果这个项目对你有帮助，请给个 Star！
