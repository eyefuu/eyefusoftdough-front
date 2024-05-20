// import "@/styles/globals.css";
// import type { AppProps } from "next/app";

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />;
// }


import Sidebar from "../components/admin-softdough/Sidebar";
import "../styles/globals.css";
import React from "react";
import { Kanit } from "next/font/google";
import { useRouter } from 'next/router';
import { NextUIProvider } from "@nextui-org/react";

const kanit = Kanit({
  subsets: ["thai", "latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

interface AppProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  return (
    <React.Fragment>
      <NextUIProvider>
        {pathname.includes("Login") ?
          <Component {...pageProps} />
          :
          <Sidebar className={kanit.className}>
            <Component {...pageProps} />
          </Sidebar>
        }
      </NextUIProvider>
    </React.Fragment>
  );
}

// เอมมาใหม่ติดแดง
// // import Sidebar from "@components/admin-softdough/Sidebar";
// import Sidebar from "../components/admin-softdough/Sidebar";
// // import Sidebar from "../components/staffpro/Sidebar";
// import "../styles/globals.css";
// import React from "react";
// import { Kanit } from "next/font/google";
// import { useRouter } from 'next/router';
// import {NextUIProvider} from "@nextui-org/react";
// // import { pages } from "next/dist/build/templates/app-page";

// const kanit = Kanit({
//   subsets: ["thai", "latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700"],
// });

// interface AppProps {
//   Component: React.ComponentType<any>;
//   pageProps: any;
// }
// // function App({ Component, pageProps }) {
// //   // ตรวจสอบหน้า login โดยให้ render โดยไม่ใส่ Sidebar
// //   if (Component.name === "LoginPage") {
// //     return <Component {...pageProps} />;
// //   }
// //   return (
// //     <React.Fragment>
// //       <Sidebar className={kanit.className}>
// //         <Component {...pageProps} />
// //       </Sidebar>
// //     </React.Fragment>
// //   );
// // }
// // export default App;
// export default function App({ Component, pageProps} : AppProps) {
//   const { pathname } = useRouter();
//   return (
//     <React.Fragment>
//       <NextUIProvider>
//       {pathname.includes("Login") ?
//         <Component {...pageProps} />
//         :
//         <Sidebar className={kanit.className}>
//           <Component {...pageProps} />
//         </Sidebar>
//       }
//       </NextUIProvider>

//     </React.Fragment>
//   );
// }