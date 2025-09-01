import { db } from "@/db";
import { media } from "@/db/schema/portfolio";
import { eq, desc } from "drizzle-orm";
import { NextResponse } from "next/server";

// GET /api/media - Get all media
export async function GET() {
  try {
    const allMedia = await db
      .select()
      .from(media)
      .orderBy(desc(media.createdAt));
    
    return NextResponse.json(allMedia);
  } catch (error) {
    console.error("Error fetching media:", error);
    return NextResponse.json(
      { error: "Failed to fetch media" },
      { status: 500 }
    );
  }
}

// POST /api/media - Upload media (admin only)
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const newMedia = await db
      .insert(media)
      .values({
        name: body.name,
        url: body.url,
        alt: body.alt,
        type: body.type,
        size: body.size,
        userId: body.userId,
      })
      .returning();
    
    return NextResponse.json(newMedia[0]);
  } catch (error) {
    console.error("Error uploading media:", error);
    return NextResponse.json(
      { error: "Failed to upload media" },
      { status: 500 }
    );
  }
}