import { Row } from "react-bootstrap";
import { useAppSelector } from "../redux/hooks";
import ButtonOnHover from "./ButtonOnHover";

const TagsList = ({ setFiltersParams }) => {
  const tags = useAppSelector((state) => state.tags);

  return (
    <Row className="justify-content-start ms-0 w-75">
      <ButtonOnHover
        className="w-auto me-2 mb-2"
        defaultBg={"bg-teal-400"}
        hoverBg={"bg-teal-600"}
        size="sm"
        onClick={(e) => setFiltersParams({ tags: "" })}
      >
        All collections
      </ButtonOnHover>
      {tags?.map((tag) => (
        <ButtonOnHover
          key={tag.id}
          defaultBg={"bg-teal-400"}
          hoverBg={"bg-teal-600"}
          size="sm"
          className="w-auto me-2 mb-2"
          onClick={(e) => setFiltersParams({ tags: tag.name })}
        >
          {tag.name}
        </ButtonOnHover>
      ))}
    </Row>
  );
};

export default TagsList;
