import users from "../../json/users.json";

export async function GET() {
  return new Response(JSON.stringify(users));
}
