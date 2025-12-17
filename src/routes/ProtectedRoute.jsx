import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
const user = localStorage.getItem("currentUser");
return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;