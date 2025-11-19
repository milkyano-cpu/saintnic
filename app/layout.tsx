import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Manrope, Urbanist } from "next/font/google";
import { getUser, getTeamForUser } from "@/lib/db/queries";
import { SWRConfig } from "swr";

export const metadata: Metadata = {
  title: "Saint Nic | Specialty Coffee & Brunch in Oakleigh",
  description:
    "Saint Nic serves specialty coffee and modern brunch in the heart of Oakleigh. Open 365 days. Visit us at 38 Portman St.",
};

export const viewport: Viewport = {
  maximumScale: 1,
};

const manrope = Manrope({ subsets: ["latin"] });
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-urbanist",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`bg-white dark:bg-gray-950 text-black dark:text-white ${urbanist.className}`}
    >
      <body className="min-h-[100dvh] bg-white w-full overflow-x-hidden">
        <SWRConfig
          value={{
            fallback: {
              // We do NOT await here
              // Only components that read this data will suspend
              "/api/user": getUser(),
              "/api/team": getTeamForUser(),
            },
          }}
        >
          {children}
        </SWRConfig>
      </body>
    </html>
  );
}
