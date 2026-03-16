import { ProjectsPageView } from "@/features/projects/projects-page";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "Projects",
  description: "项目列表、标签筛选、案例详情和技术复盘。",
  path: "/projects"
});

export default function ProjectsPage() {
  return <ProjectsPageView />;
}
