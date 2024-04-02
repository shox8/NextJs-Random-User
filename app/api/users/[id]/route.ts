import { NextRequest, NextResponse } from "next/server";
import users from "../../../json/users.json";

export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  const user = users.find((user) => user.id === parseInt(params.id));
  return NextResponse.json(user, { status: 200 });
}
