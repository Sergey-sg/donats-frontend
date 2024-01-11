import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
import ButtonOnHover from "./ButtonOnHover";

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => {
  return (
    <ButtonOnHover
      defaultBg={"bg-teal-400"}
      hoverBg={"bg-teal-600"}
      size="sm"
      className="rounded float-end"
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children} &#x25bc;
    </ButtonOnHover>
  );
});

const orderingOptions = { 
  "-date_added": "First new",
  "date_added": "First old",
  "fill_percentage": "First less filled",
  "-fill_percentage": "First more filled"
};

const OrderingDropDownMenu = ({ setFiltersParams, orderingParam }) => {
  const [selectedOrder, setSelectedOrder] = useState(orderingOptions[orderingParam]);

  const handleSelect = (event, order) => {
    setSelectedOrder(event.target.textContent);
    setFiltersParams(order);
  };

  const renderDropdownItems = () => {
    return Object.entries(orderingOptions).map(([key, label]) => (
      <Dropdown.Item key={key} onClick={(e) => handleSelect(e, { ordering: key })}>
        {label}
      </Dropdown.Item>
    ));
  };

  return (
    <Dropdown className="w-25" align={{ lg: 'end' }}>
      <Dropdown.Toggle as={CustomToggle}>
        {selectedOrder || "Ordering"}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {renderDropdownItems()}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default OrderingDropDownMenu;
