import { ThemeProvider } from "next-themes";
import "../globals.css"
import { ColorThemeProvider } from "@/components/ColorThemeContext";

export default async function RootLayout({ children, params}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ColorThemeProvider>
        <main lang={params?.locale} className="bg-main">
          {children}
        </main>
      </ColorThemeProvider>
    </ThemeProvider>
  );
}
