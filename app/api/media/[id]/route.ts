import { db } from "@/db";
import { media } from "@/db/schema/portfolio";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

// GET /api/media/[id] - Get specific media
export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  try {
    const mediaItem = await db
      .select()
      .from(media)
      .where(eq(media.id, id))
      .limit(1);
    
    if (mediaItem.length === 0) {
      return NextResponse.json(
        { error: "Media not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(mediaItem[0]);
  } catch (error) {
    console.error("Error fetching media:", error);
    return NextResponse.json(
      { error: "Failed to fetch media" },
      { status: 500 }
    );
  }
}

// PUT /api/media/[id] - Update media (admin only)
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    
    const updatedMedia = await db
      .update(media)
      .set({
        name: body.name,
        url: body.url,
        alt: body.alt,
        type: body.type,
        size: body.size,
        updatedAt: new Date(),
      })
      .where(eq(media.id, params.id))
      .returning();
    
    if (updatedMedia.length === 0) {
      return NextResponse.json(
        { error: "Media not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json(updatedMedia[0]);
  } catch (error) {
    console.error("Error updating media:", error);
    return NextResponse.json(
      { error: "Failed to update media" },
      { status: 500 }
    );
  }
}

// DELETE /api/media/[id] - Delete media (admin only)
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const deletedMedia = await db
      .delete(media)
      .where(eq(media.id, params.id))
      .returning();
    
    if (deletedMedia.length === 0) {
      return NextResponse.json(
        { error: "Media not found" },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ message: "Media deleted successfully" });
  } catch (error) {
    console.error("Error deleting media:", error);
    return NextResponse.json(
      { error: "Failed to delete media" },
      { status: 500 }
    );
  }
}