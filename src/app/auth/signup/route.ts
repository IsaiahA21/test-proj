import { NextRequest, NextResponse } from "next/server";
// createRout
export async function POST(rew: NextRequest) {
    const url = new URL (req.url);
    return NextResponse.redirect(url.origin, 
        {status: 301}
    );
}