import { NextResponse } from "next/server";
import users from "../../json/users.json";

export async function GET() {
  return NextResponse.json(users, { status: 200 });
}
