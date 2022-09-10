import {useContext} from "react";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
  let {loginUser} = useContext(AuthContext)
  return (
    <section>
      <h1>Log in to your account</h1>
      <form onSubmit={loginUser}>
        <input type="text" name="username" placeholder="Enter username" />
        <input type="text" name="password" placeholder="Enter password" />
        <input type="submit" />
      </form>
    </section>
  );
};

export default LoginPage;
