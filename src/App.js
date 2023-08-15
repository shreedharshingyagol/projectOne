import {
    Routes,
    Route,
    useNavigationType,
    useLocation,
  } from "react-router-dom";
  import HeaderMask from "./components/DataAnalyticsStyle01";
//   import DataAnalyticsStyle01 from "./pages/DataAnalyticsStyle01";
  import { useEffect } from "react";
  import { BrowserRouter as Router } from 'react-router-dom'
  
  function App() {
    const action = useNavigationType();
    const location = useLocation();
    const pathname = location.pathname;
  
    useEffect(() => {
      if (action !== "POP") {
        window.scrollTo(0, 0);
      }
    }, [action, pathname]);
  
    useEffect(() => {
      let title = "";
      let metaDescription = "";
  
      switch (pathname) {
        case "/":
          title = "";
          metaDescription = "";
          break;
      }
  
      if (title) {
        document.title = title;
      }
  
      if (metaDescription) {
        const metaDescriptionTag = document.querySelector(
          'head > meta[name="description"]'
        );
        if (metaDescriptionTag) {
          metaDescriptionTag.content = metaDescription;
        }
      }
    }, [pathname]);
  
    return (
      <Routes>
        <Route path="/" element={<HeaderMask />} />
        <Route path="/about" element={<div>hello</div>} />

      </Routes>
    );
  }
  export default App;
  