import { Navigate } from "react-router-dom";
import Button from "../../components/Buttons/Button";
import useAuth from "../../hooks/useAuth";
import { ALL_ROLES } from "../../types/constants";
import Logo from "../../components/Logo/Logo";
import LogoBG from "../../components/Logo/LogoBG";

const Login = () => {
  const { user, loginUser } = useAuth();

  if (user) {
    return <Navigate to={`/`} replace />;
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="card flex flex-col gap-y-8 bg-gray-600 border border-blue-500 shadow-lg p-4 rounded items-center w-1/2 h-1/2 justify-center">
        <LogoBG />

        <div className="actions flex items-center flex-col gap-y-3">
          <Button
            onClick={() => {
              loginUser({
                role: ALL_ROLES.ADMIN,
                username: "Oliver",
                email: "oliver@panasonic.com",
              });
            }}
            text="Login as Admin"
            variant="primary"
            classes="font-bold w-full w-44 py-3"
          />
          <Button
            onClick={() => {
              loginUser({
                role: ALL_ROLES.CUSTOMER,
                username: "Esther",
                email: "esther@panasonic.com",
              });
            }}
            text="Login as Customer"
            variant="success"
            classes="font-bold w-full w-44 py-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
