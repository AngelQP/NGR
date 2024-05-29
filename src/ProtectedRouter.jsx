import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

export const ProtectedRouter = () => {

  const { loading, isAuthenticated } = useAuth();

  if(loading) {
    // TODO: Hace el spinner con un loading
    return <h1>Loading ...</h1>
    // return <Navigate to="/login" replace />
  }
  if(!loading && !isAuthenticated) {
    return <Navigate to="/login" replace />
  }
  // if(!isAuthenticated) {
  //   return <Navigate to="/login" replace />
  // }

  return (
    <Outlet />
  )
}
