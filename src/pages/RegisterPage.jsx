import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const RegisterPage = () => {
  let { registerUser } = useContext(AuthContext);
  return (
    <section>
      <h1>Registration Page</h1>
      <form onSubmit={registerUser}>
        <input type="text" name="username" placeholder="Enter username" />
        <input type="text" name="email" placeholder="Enter email" />
        <input type="text" name="password" placeholder="Enter password" />
        <input type="submit" />
      </form>
    </section>
  );
};

export default RegisterPage;
