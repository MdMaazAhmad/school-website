import React, { Suspense, lazy } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Placeholder from "./Components/Placeholder";
// import {  ConfigProvider } from 'antd';

// const Auth = lazy(() => import("./pages/Auth"));
// const SuperAdmin = lazy(() => import("./pages/SuperAdmin"));
// const UserManagement = lazy(() => import("./pages/UserManagement"));
// const IdManagement = lazy(() => import("./pages/IdManagement"));

export default function App() {
  return (
    <>
    {/* <ConfigProvider
  theme={{
    token:{
      colorIcon:"#fff",
    },
    components: {
      Modal: {
        headerBg:"#1877F2",
        titleColor	:"#fff"
      },
    },
  }}
> */}
      {/* <Router>
        <Suspense fallback={<Placeholder />}>
          <Routes>
            <Route path="/" element={<SuperAdmin />} />
            <Route path="/Login" element={<Auth />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/id-management" element={<IdManagement />} />
          </Routes>
        </Suspense>
      </Router>
      </ConfigProvider> */}
      <h1 className="text-5xl font-bold">maax</h1>
    </>
  );
}
