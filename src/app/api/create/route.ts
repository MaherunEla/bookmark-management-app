import { NextResponse } from "next/server";
import prisma from "@/app/utils/connect";

export const GET = async () => {
  try {
    const creates = await prisma.create.findMany();
    return NextResponse.json(creates);
  } catch (error) {
    console.error("Error fetching creates data", error);
    return NextResponse.json(
      { error: "Failed to fetch create data" },
      { status: 500 }
    );
  }
};

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const res = await prisma.create.create({
      data: data,
    });
    return NextResponse.json(res, { status: 201 });
  } catch (error) {
    console.error("Error creating create", error);
    return NextResponse.json(
      { error: "Failed to create create" },
      { status: 500 }
    );
  }
}
