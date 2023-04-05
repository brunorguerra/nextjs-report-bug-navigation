import Link from "next/link";
import React, { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html>
            <body>
                <header>
                    <h2>Layout Page - Header</h2>

                    <nav>
                        <Link href="/">Homepage</Link>
                        <br />
                        <Link href="/postList">PostList</Link>
                        <br />
                        <Link href="/postList/post">Post</Link>
                    </nav>
                </header>

                {children}
            </body>
        </html>
    );
}
