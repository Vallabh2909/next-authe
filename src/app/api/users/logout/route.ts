import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    const response = NextResponse.json(
      { message: "Successfully Logged Out" },
      { status: 200 }
    );
    response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    return response;
  } catch (error) {
    return NextResponse.json(
      { message: "Something Went Wrong!" },
      { status: 500 }
    );
  }
}
