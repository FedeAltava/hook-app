
import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {
  const { onInputChange, onInputReset, username, email, password} = useForm({
    
      username: "",
      email: "",
      password: "",
    
  });

  // const { username, email, password} = formState; 

  return (
    <>
      <h1>Formulario Con Custom Hook</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="fede@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      <input
        type="password"
        className="form-control mt-2"
        placeholder="TuFukingPassword"
        name="password"
        value={password}
        onChange={onInputChange}
      />
      
      <button className="btn btn-primary mt-2" onClick={onInputReset}>Borrar</button>

    </>
  );
};
