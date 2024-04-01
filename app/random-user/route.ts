import users from "../json/users.json";

export async function GET() {
  const randomNumber = Math.floor(Math.random() * users.length);

  const randomUser = users[randomNumber];

  const user = JSON.stringify({
    ...randomUser,
    displayPhoto: `https://avatar.iran.liara.run/public/${
      randomUser.gender === "male" ? "boy" : "girl"
    }`,
  });

  return new Response(user, { status: 200 });
}
