import { useState } from "react";
// import { MdOutlineCancel } from "react-icons/md";
// import { RiSearchLine } from "react-icons/ri";
import Form from "react-bootstrap/Form";

const SearchInput = ({ setFiltersParams, searchParam }) => {
  const [searchString, setSearchString] = useState(searchParam);
  const searchJars = (event) => {
    event.preventDefault();
    setFiltersParams({ search: searchString });
  };

  return (
    <Form onSubmit={(e) => searchJars(e)} className="mx-5">
      <Form.Control
        type="text"
        id="search"
        placeholder="Search Jars on title"
        name="searchInvoice"
        value={searchString}
        className="mx-auto"
        onChange={(e) => setSearchString(e.target.value || "")}
      />
    </Form>
  );
};

export default SearchInput;
