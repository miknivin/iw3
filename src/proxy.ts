import { NextRequest, NextResponse } from 'next/server';

export const config = {
    matcher: '/((?!_next|_vercel|.*\\..*).*)', // Static files ഒഴികെ എല്ലാ routes-ഉം match ചെയ്യും
};

export async function proxy(req: NextRequest) {
    const isInMaintenanceMode = process.env.MAINTENANCE_MODE === 'true';

    if (isInMaintenanceMode) {
        // Maintenance page-ലേക്ക് infinite loop ഒഴിവാക്കാൻ
        if (req.nextUrl.pathname === '/maintenance') {
            return NextResponse.next();
        }

        const url = req.nextUrl.clone();
        url.pathname = '/maintenance';
        return NextResponse.rewrite(url);
    }

    return NextResponse.next();
}
