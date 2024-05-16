// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

// function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     console.log("ScrollToTop effect triggered");
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }

// export default ScrollToTop;


export const scrollToTop = () => {
  window.scrollTo(0, 0);
};
