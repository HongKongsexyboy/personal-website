export async function GET() {
  const resumeUrl = process.env.RESUME_URL || "https://example.com/resume.pdf";

  return Response.redirect(resumeUrl, 302);
}
