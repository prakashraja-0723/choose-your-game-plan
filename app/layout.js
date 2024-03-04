import "./globals.css";
import ReduxProvider from "@/redux/Provider";
import MainUi from "@/app/components/ui/MainUi";

export const metadata = {
  title: "Multi Step Form",
  description: "Fill form to get unlimited access.",
};

export default function RootLayout({ children }) {
  return (
    <ReduxProvider>
      <html lang="en">
        <body
          className={`w-screen h-screen lg:min-h-screen relative bg-magnolia overflow-hidden`}
        >
          <MainUi>{children}</MainUi>
        </body>
      </html>
    </ReduxProvider>
  );
}
