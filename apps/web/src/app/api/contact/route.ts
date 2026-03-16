import { validateContactPayload } from "@/lib/validation/contact";

export async function POST(request: Request) {
  const payload = await request.json();
  const validation = validateContactPayload(payload);

  if (!validation.isValid) {
    return Response.json(
      {
        ok: false,
        message: "Invalid contact payload"
      },
      { status: 400 }
    );
  }

  return Response.json({
    ok: true,
    message: "Contact form received"
  });
}
