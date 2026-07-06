import { NextResponse } from "next/server";
import { getDocumentById } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET(
  request: Request, 
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  
  const doc = await getDocumentById(id);
  
  if (!doc) {
    return NextResponse.json({ error: "Document not found" }, { status: 404 });
  }
  
  return NextResponse.json(doc);
}
