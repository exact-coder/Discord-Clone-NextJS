import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ModalProvider } from "@/components/providers/modal-provider";
import { cn } from "@/lib/utils";
import { SocketProvider } from "@/components/providers/socket-provider";
import { QueryPorvider } from "@/components/providers/query-provider";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discord || Team chat Application",
  description: "This is a the description of Discord",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={cn(
          font.className,"bg-white dark:bg-[#313338]"
        )}>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem storageKey="discord-theme">
            <SocketProvider>
              <ModalProvider />
                <QueryPorvider>
                  {children}
                </QueryPorvider>
            </SocketProvider>
          </ThemeProvider>
          
          </body>
      </html>
    </ClerkProvider>
  );
}
