import React from "react";

const LoginPage = () => {
  return (
    <div>
      <form>
        <input type="text" name="username" placeholder="Enter username" />
        <input type="text" name="password" placeholder="Enter password" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default LoginPage;
