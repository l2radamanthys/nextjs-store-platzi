import { env } from "app/config/env";
import { revalidateTag } from "next/cache";

export async function POST(request: Request) {
  const body = await request.json();
  const { tag, token } = body;
  console.log("token", env.CACHE_TOKEN, token);
  if (!tag || !token)
    return new Response("Missing tag or token", { status: 400 });

  if (token !== env.CACHE_TOKEN) {
    return new Response("Invalid token", { status: 401 });
  }

  revalidateTag(tag);
  return Response.json({ success: true });
}
