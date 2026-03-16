# Platform Notes

- 日志：当前使用 `console.info` 占位，可替换为真实采集系统。
- 错误监控：建议后续接入 Sentry 或同类平台。
- 环境变量：建议补充 `.env.example` 和部署平台配置。
- 部署流水线：已提供 GitHub Actions 占位工作流。
- 安全头：已在 `apps/web/next.config.mjs` 中添加基础响应头。
