import { Row } from "react-bootstrap";
import { useAppSelector } from "../redux/hooks";
import ButtonOnHover from "./ButtonOnHover";

const TagsList = ({ setFiltersParams }) => {
  const tags = useAppSelector((state) => state.tags);

  return (
    <Row className="justify-content-start">
      <ButtonOnHover
        className="w-auto me-1"
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
          className="w-auto mx-1"
          onClick={(e) => setFiltersParams({ tags: tag.name })}
        >
          {tag.name}
        </ButtonOnHover>
      ))}
    </Row>
  );
};

export default TagsList;
