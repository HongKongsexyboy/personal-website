import type { ProjectEntry } from "@/data/types";

export const projects: ProjectEntry[] = [
  {
    slug: "rendering-dashboard",
    title: "Rendering Dashboard",
    tagline: "统一渲染性能排查、采样数据和问题归因的内部仪表板。",
    summary:
      "面向技术团队的渲染分析平台，把性能采样、问题归因和排查路径汇总到同一套可视化工具中。",
    featured: true,
    status: "Internal",
    year: "2025",
    tags: ["渲染", "工具链", "性能"],
    stack: ["Unity", "C#", "Editor Tooling", "Telemetry"],
    background: [
      "团队在不同项目中积累了大量渲染性能排查经验，但数据来源分散、诊断口径不一致，导致排查效率受限。",
      "我希望把渲染采样、指标对比和问题归因沉淀为统一工具，减少重复劳动。"
    ],
    responsibilities: [
      "设计项目级性能数据模型和指标口径",
      "搭建编辑器端数据采集与展示流程",
      "输出可复用的排查模板和问题复盘机制"
    ],
    challenges: [
      {
        title: "采样口径不统一",
        problem: "不同场景和设备的采样粒度差异较大，导致横向对比价值不高。",
        solution: "抽象统一指标维度，并在导出阶段规范采样窗口与聚合策略。"
      },
      {
        title: "问题定位链路过长",
        problem: "从发现异常到回溯具体渲染阶段需要跨多个工具和日志系统。",
        solution: "把关键渲染阶段、告警阈值和关联日志整合到同一张问题视图里。"
      }
    ],
    screenshots: [
      {
        title: "Dashboard Overview",
        description: "整体仪表板布局占位，后续可替换为性能总览截图。"
      },
      {
        title: "Issue Drilldown",
        description: "问题定位视图占位，后续可替换为单问题分析页面截图。"
      }
    ],
    githubUrl: "https://github.com/your-name/rendering-dashboard"
  },
  {
    slug: "portfolio-system",
    title: "Portfolio System",
    tagline: "内容驱动的个人站点系统，统一承载项目、博客和个人品牌表达。",
    summary:
      "使用 Next.js App Router 构建的个人网站系统，支持项目案例、文章内容、SEO、分析和可扩展的设计系统。",
    featured: true,
    status: "Live",
    year: "2026",
    tags: ["Web", "SEO", "内容系统"],
    stack: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
    background: [
      "我希望个人网站不仅能展示页面，还能作为长期内容资产平台，沉淀项目、技术文章和职业品牌。",
      "因此在前期就把站点拆成多个内容域，并预留 SEO、分析和平台化扩展能力。"
    ],
    responsibilities: [
      "设计站点信息架构与多域路由方案",
      "建立内容数据模型与可复用 UI Design System",
      "打通项目详情页、博客路由、SEO 和部署骨架"
    ],
    challenges: [
      {
        title: "内容模型需要兼顾展示和扩展",
        problem: "项目、博客、关于我内容既要快速上线，也要方便长期维护。",
        solution: "将基础数据抽象为强类型对象，先用 data 层承载，后续可平滑迁移到 MDX 或 CMS。"
      },
      {
        title: "设计系统与业务页面同步演进",
        problem: "如果组件系统和页面实现脱节，后续维护会反复返工。",
        solution: "先建立统一 token 与基础组件，再让页面全部复用这一套组件体系。"
      }
    ],
    screenshots: [
      {
        title: "Home Hero",
        description: "首页头图区块占位，可替换为最终品牌视觉截图。"
      },
      {
        title: "Project Detail",
        description: "项目详情页占位，可替换为真实案例展示截图。"
      }
    ],
    githubUrl: "https://github.com/your-name/portfolio-system",
    demoUrl: "https://example.com/portfolio-system"
  },
  {
    slug: "unity-asset-pipeline",
    title: "Unity Asset Pipeline",
    tagline: "梳理资源导入、校验和发布流程，降低内容生产风险。",
    summary:
      "围绕 Unity 资源生产流程构建自动校验与发布约束体系，让内容团队能更稳定地交付资源版本。",
    status: "Internal",
    year: "2024",
    tags: ["Unity", "资源流程", "CI"],
    stack: ["Unity", "C#", "AssetPostprocessor", "CI"],
    background: [
      "项目中资源问题频繁出现在导入、命名、依赖和发布阶段，修复成本经常滞后到联调甚至上线前。",
      "因此需要一套尽早发现问题、并可沉淀规范的资源流程系统。"
    ],
    responsibilities: [
      "梳理资源生命周期和常见质量问题",
      "建立自动校验规则与错误提示机制",
      "将资源校验结果接入持续集成流程"
    ],
    challenges: [
      {
        title: "资源规范难以落地",
        problem: "规范文档存在，但执行过程依赖人工记忆和沟通。",
        solution: "把关键规范直接前置到导入校验和构建流程中，用工具代替口头约束。"
      },
      {
        title: "问题反馈不够及时",
        problem: "资源问题往往在后续流程才暴露，修复路径长、沟通成本高。",
        solution: "将错误提示映射到具体资源和规则项，让内容制作阶段就能快速定位和修复。"
      }
    ],
    screenshots: [
      {
        title: "Validation Panel",
        description: "资源校验面板占位，后续可替换为编辑器内工具截图。"
      }
    ],
    githubUrl: "https://github.com/your-name/unity-asset-pipeline"
  }
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
