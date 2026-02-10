import "./globals.css";
import { AppContextProvider } from "@/context/contexts";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className=" w-full " 
      >
        <AppContextProvider>

        {children}
        </AppContextProvider>
      </body>
    </html>
  );
}
