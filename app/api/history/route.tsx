// app/api/history/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/Schema';
import { eq } from 'drizzle-orm';

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get('email');
  if (!email) return NextResponse.json([], { status: 400 });

  try {
    const records = await db
      .select()
      .from(AIOutput)
      .where(eq(AIOutput.createdBy, email))
      .orderBy(AIOutput.createdAt);

    return NextResponse.json(records);
  } catch (error) {
    console.error('[HISTORY_FETCH_ERROR]', error);
    return NextResponse.json([], { status: 500 });
  }
}
