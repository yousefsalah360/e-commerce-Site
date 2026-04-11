import { useState } from "react";

function Login() {
  const [currState, setCurrState] = useState("Sign Up");

  const onSubmitHandler =async (event) => {
    event.preventDefault();
    
  }

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currState === "login" ? (
        ""
      ) : (
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-800 "
          placeholder="Name"
          required
        />
      )}
      <input
        type="email"
        className="w-full px-3 py-2 border border-gray-800 "
        placeholder="Email"
        required
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800 "
        placeholder="Password"
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot password?</p>
        {currState === "login" ? (
          <p className="cursor-pointer" onClick={() => setCurrState("Sign Up")}>
            Create an account
          </p>
        ) : (
          <p className="cursor-pointer" onClick={() => setCurrState("login")}>
            Login
          </p>
        )}
      </div>
      <button className="w-full bg-black text-white py-2 rounded-full mt-4 cursor-pointer">
        {currState === "login" ? "Sign in" : "Sign Up"}
      </button>
    </form>
  );
}

export default Login;
