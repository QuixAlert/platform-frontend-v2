import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

const authRoutes = ['/home/*', '/adoption/*', '/animals/*', '/documents/*', '/help/*', '/users/*', '/reports/*', '/profile/*'];

function matchesWildcard(path: string, pattern: string): boolean {
    if (pattern.endsWith('/*')) {
        const basePattern = pattern.slice(0, -2);
        return path.startsWith(basePattern);
    }
    return path === pattern;
}

export async function middleware(request: NextRequest) {
    const login = 'http://localhost:3000'
    const { pathname, searchParams } = request.nextUrl;

    // Check if the user is being redirected to the home page
    const redirected = searchParams.has('redirected');

    if (pathname === '/' && redirected) {
        // Create a response to delete the cookie
        const response = NextResponse.next();
        response.cookies.delete('quixalert.auth.token');
        return response;
    }

    // Check if the path matches one of the authentication routes
    if (authRoutes.some(pattern => matchesWildcard(pathname, pattern))) {
        const token = request.cookies.get('quixalert.auth.token');

        if (token?.value) {
            // Token exists, proceed as usual
            return NextResponse.next();
        } else {
            // Token does not exist, redirect to login page with query parameter
            const redirectUrl = new URL(login, request.url);
            redirectUrl.searchParams.set('redirected', 'true');

            // Create a response to redirect
            const response = NextResponse.redirect(redirectUrl);
            return response;
        }
    }

    return NextResponse.next();
}