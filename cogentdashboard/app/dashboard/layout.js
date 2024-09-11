import Sidebar from "../sections/sidebar/sidebar";
import "@/public/fonts/inter/stylesheet.css";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <div className={` flex w-[100vw] h-screen ${inter.className}  `}>
      <div className="  xl:w-[16.5rem] w-[12rem] min-w-[12rem] max-w-[12rem] xl:min-w-[16.5rem] xl:max-w-[16.5rem]  min-h-[100svh] max-h-[100svh] sticky  top-0 left-0">
        <Sidebar />
      </div>
      {/* <div className=" lg:hidden block w-[7rem]  h-[100svh] sticky left-0 z-[100]  top-0 "></div> */}
      <div className=" w-full max-w-full overflow-x-hidden h-full ">
        {children}
      </div>
    </div>
  );
}
