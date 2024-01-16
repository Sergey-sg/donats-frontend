import LoginForm from "../components/loginRegisterComponents/LoginForm";
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="mb-auto p-4">
      <LoginForm />
      <Link to="/registration" className="float-end">Create a new account</Link>
    </div>
  );
};

export default Login;
