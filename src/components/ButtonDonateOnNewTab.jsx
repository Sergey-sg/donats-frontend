import ButtonOnHover from "./ButtonOnHover";
import { monobankJarUrl } from "../assets/constants/urls";

const openNewTab = (url) => {
  window.open(url, "_blank", "noreferrer");
};

const ButtonDonateOnNewTab = ({ monobankId, ...otherProps }) => {
  const handleDonateClick = () => {
    openNewTab(`${monobankJarUrl}${monobankId}`);
  };

  return (
    <ButtonOnHover
      onClick={handleDonateClick}
      {...otherProps}
    >
      donate to a good cause
    </ButtonOnHover>
  );
};

export default ButtonDonateOnNewTab