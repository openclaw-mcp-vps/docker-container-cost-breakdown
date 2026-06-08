import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Docker Container Cost Breakdown",
  description: "See exactly what each Docker container costs. Track resource usage and calculate the exact cloud cost for each container in your infrastructure."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e6ed1f26-2284-4f55-955c-2d66dd97152f"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
