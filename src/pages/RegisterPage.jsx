import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const RegisterPage = () => {
  let { registerUser } = useContext(AuthContext);
  return (
    <div>
      <p>Heyyy</p>
      <form onSubmit={registerUser}>
        <input type="text" name="username" placeholder="Enter username" />
        <input type="text" name="email" placeholder="Enter email" />
        <input type="text" name="password" placeholder="Enter password" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default RegisterPage;
