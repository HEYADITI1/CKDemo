import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Counter from "./pages/Counter";
import DigitalWatch from "./pages/DigitalWatch";
import ProtectedRoute from "./pages/ProtectedRoute";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>


        <Route path="/" element={<Login />} />

        <Route path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }
        >
          <Route path="counter" element={<Counter />} />
          <Route path="watch" element={<DigitalWatch />} />

        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
