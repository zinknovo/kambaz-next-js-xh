import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <main style={{ flexGrow: 1 }}>{children}</main>

        <footer
          style={{
            textAlign: "center",
            padding: "20px",
          }}
        >
          <p style={{ margin: 0 }}>Xintao Hu | CS5610.18616.202610</p>
          <a
            href="https://github.com/zinknovo/kambaz-next-js-xh"
            target="_blank"
          >
            GitHub
          </a>
        </footer>
      </body>
    </html>
  );
}
