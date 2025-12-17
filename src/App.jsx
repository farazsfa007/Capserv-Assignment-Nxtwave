import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import { usersData, loansData } from "./data/mockData";
import { setData } from "./utils/storage";


const App = () => {
useEffect(() => {
if (!localStorage.getItem("users")) {
setData("users", usersData);
setData("loans", loansData);
}
}, []);


return (
<Routes>
<Route path="/" element={<Navigate to="/login" />} />
<Route path="/login" element={<Login />} />
<Route path="/signup" element={<Signup />} />
<Route
path="/dashboard"
element={
<ProtectedRoute>
<Dashboard />
</ProtectedRoute>
}
/>
</Routes>
);
};


export default App;