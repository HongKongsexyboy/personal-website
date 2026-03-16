import { ContactPageView } from "@/features/contact/contact-page";
import { createMetadata } from "@/lib/seo/metadata";

export const metadata = createMetadata({
  title: "Contact",
  description: "联系表单、邮箱、社交链接和简历下载入口。",
  path: "/contact"
});

export default function ContactPage() {
  return <ContactPageView />;
}
