import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy,Suspense } from "react";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { LayoutLoader } from "./components/loaders/Loaders";

// Lazy load the components
const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
const NotFound = lazy(() => import("./pages/NotFound"));

let user = true;

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={ <LayoutLoader /> }>
      <Routes>
        <Route element={<ProtectedRoute user={user} />}>
        <Route path="/" element={<Home />} />
        <Route path="/chat/:chatId" element={<Chat />} />
        <Route path="/groups" element={<Groups />} />
        </Route>
        
        <Route path="/login" element={ <ProtectedRoute user={!user} redirect="/"> 
          <Login />
        </ProtectedRoute> } />
        <Route path="*" element={ <NotFound/> } />
      </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
