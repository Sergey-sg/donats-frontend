import RegistrationForm from "../components/loginRegisterComponents/RegistrationForm";
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <div className="mb-auto p-4">
      <RegistrationForm />
      <Link to={"/login"} className="float-end">Do you have an account?</Link>
    </div>
  );
};

export default Registration;
