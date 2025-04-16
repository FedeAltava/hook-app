import { useEffect } from "react";
import { useState } from "react";
import { Message } from "./Message";

export const SimpleFrom = () => {
    const [formState, setFormState ] = useState({
        username: 'ElBarto',
        email: 'elBartoLagarto@gmail.com'
    });

    const {username, email} = formState;

    const onInputChange = ({target}) =>{
        const {name, value}= target;
        setFormState({
            ...formState,
            [name]: value
        })
    }

    useEffect(()=>{

    },[])

  return (
    <>
      <h1>Formulario Simple</h1>
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
      {(username === 'ElBarto') && <Message />}
    </>

  );
};
