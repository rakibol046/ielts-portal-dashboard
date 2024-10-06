
import "./globals.css";
import { cookies } from "next/headers";
import SideNavigationSeparator from "./components/Nav";
import Header from "./components/Header";
import { redirect } from "next/navigation";
import Login from "./components/Login"

export const metadata = {
  title: "IELTS Portal",
  description: "IELTS Portal Dashboard",
};

const user = false;

export default function RootLayout({ children }) {
  // if (!user) {
  //   redirect("/login")
  // } 
  const cookieStore = cookies();
  // const user = cookieStore.get("user");
  return (
    <html lang="en">
      <body className={``}>
        {user? <div className="flex">
          <div className="flex-none lg:w-72 lg:h-screen">
            <SideNavigationSeparator />
          </div>
          <main className="flex-1">
            <Header />
            <div className="content p-5">{children}</div>
          </main>
        </div>: <div><Login /></div>}
      </body>
    </html>
  );
}
