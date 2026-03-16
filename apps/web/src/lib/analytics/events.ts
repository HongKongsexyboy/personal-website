export function trackPageView(pathname: string) {
  console.info("[analytics] page_view", { pathname });
}

export function trackProjectClick(slug: string) {
  console.info("[analytics] project_click", { slug });
}

export function trackResumeDownload() {
  console.info("[analytics] resume_download");
}
