import { Outlet, useLocation } from "react-router-dom";
import { Suspense, useEffect } from "react";

import Navigation from "./Navigation";

const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    document.title = location.pathname.slice(1).split("/")[0].toUpperCase();
  }, [location.pathname]);
  return (
    <div>
      <Navigation />
      <section className="outlet">
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </section>
    </div>
  );
};

export default Layout;
