import React from "react";

interface FormControlProps {
  label: string;
  type: string;
  onChange: (value: string) => void;
}

const FormControl: React.FC<FormControlProps> = ({ label, type, onChange }) => {
  return (
    <div>
      <label>{label}: </label>
      <input type={type} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
};

interface LoginFormProps {
  onSubmit: (username: string, password: string) => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [credentials, setCredentials] = React.useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(credentials.username, credentials.password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl
        label="Username"
        type="text"
        onChange={(username) => {
          setCredentials({ ...credentials, username });
        }}
      />
      <FormControl
        label="Password"
        type="password"
        onChange={(password) => {
          setCredentials({ ...credentials, password });
        }}
      />
      <button type="submit">Login</button>
    </form>
  );
};
