import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Loading } from "../components/index";
import { useAuth0 } from "@auth0/auth0-react";

const ProtectedRoute = ({ component, ...args }) => (
  <Route
    component={withAuthenticationRequired(component, {
      onRedirecting: () => 
      <Loading />, 
    })}
    {...args}
  />
);

export default ProtectedRoute;



// const ProtectedRoute = ({ setReload, children, ...rest}) => {
//   const { loginWithRedirect } = useAuth0();

//   const handleLogin = (event) => {
//     if(!event) return; 
//     loginWithRedirect();
//     setReload(prevState => !prevState); // toggle reload
//   }

//   const { isAuthenticated } = useAuth0();
//     return (
//       <Route
//         {...rest}
//         render={({ location }) =>
//           isAuthenticated ? (
//             children
//           ) : (
//               <Redirect
//                 to={handleLogin}
//               />
//             )
//         }
//       />
//     );


//   };