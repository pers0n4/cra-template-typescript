import React, { ChangeEvent } from "react";
import { useAuthContext } from "context/Auth";
import { signin } from "store/auth";

interface InputState {
  username: string;
  password: string;
}

const initialState: InputState = {
  username: "",
  password: "",
};

const Signin: React.FC = () => {
  const [inputs, setInputs] = React.useState<InputState>(initialState);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const { state, dispatch } = useAuthContext();

  return (
    <div>
      <input type="text" name="username" onChange={handleInputChange} />
      <input type="password" name="password" onChange={handleInputChange} />
      <button
        type="button"
        onClick={() => dispatch(signin(inputs.username, inputs.password))}
      >
        Signin
      </button>
      <p>{state.authenticated ? "true" : "false"}</p>
    </div>
  );
};

export default Signin;
