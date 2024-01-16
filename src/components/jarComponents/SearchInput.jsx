import { useState } from "react";
import Form from "react-bootstrap/Form";

const SearchInput = ({ setFiltersParams, searchParam }) => {
  const [searchString, setSearchString] = useState(searchParam);
  const searchJars = (event) => {
    event.preventDefault();
    setFiltersParams({ search: searchString });
  };

  return (
    <Form onSubmit={(e) => searchJars(e)} className="mb-3">
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
