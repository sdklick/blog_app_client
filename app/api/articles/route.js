export async function GET() {
  const res = await fetch(`${process.env.API_BASE_URL}/articles`);
  const data = await res.json();
  return Response.json(data);
}
