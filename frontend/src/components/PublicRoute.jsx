import { Navigate } from "react-router-dom";

const hasValidToken = () => {
  const token = localStorage.getItem("token");
  return Boolean(token && token !== "undefined" && token !== "null");
};

function PublicRoute({ children }) {
  if (hasValidToken()) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

export default PublicRoute;
