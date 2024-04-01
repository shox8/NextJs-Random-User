import users from "../json/users.json";

export async function GET() {
  const randomNumber = Math.floor(Math.random() * users.length);

  const user = JSON.stringify({
    ...users[randomNumber],
    displayPhoto: "https://i.pravatar.cc/500",
  });

  return new Response(user, { status: 200 });
}
