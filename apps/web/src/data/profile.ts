import type { Profile } from "@/data/types";

export const profile: Profile = {
  name: "你的名字",
  role: "游戏客户端 / 图形与工具链工程师",
  location: "China / Remote",
  tagline: "把复杂系统拆解为稳定、清晰、可迭代的产品能力。",
  summary:
    "聚焦 Unity、渲染工程化与交互体验，擅长从需求分析、架构设计到交付落地的完整工程链路。",
  bio: [
    "我长期关注游戏客户端架构、渲染性能和开发体验，喜欢把难以维护的流程重构成可复用的工程能力。",
    "这个站点会持续沉淀我的项目案例、技术文章、学习记录和个人品牌内容。"
  ],
  strengths: [
    "能从需求、架构、实现、性能到交付做全链路推进",
    "擅长复杂问题建模，能够把项目难点转成明确的工程方案",
    "兼顾技术深度与表达能力，适合沉淀项目案例和长期内容资产"
  ],
  experience: [
    {
      company: "Example Studio",
      title: "高级客户端开发",
      period: "2023 - 至今",
      summary: "负责游戏客户端系统、性能优化、编辑器工具和关键技术方案落地。"
    },
    {
      company: "Example Team",
      title: "Unity 开发工程师",
      period: "2020 - 2023",
      summary: "参与项目架构演进、资源流程建设与跨团队协作开发。"
    }
  ]
};
