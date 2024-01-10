import React, { useCallback, useEffect, useState } from "react";
import { fetchGetAllJars } from "../redux/jar/jarActions";
import { useLocation, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Card, Button, Nav, Row } from "react-bootstrap";
import queryString from "query-string";
import jarWithCoins from "../assets/images/jar-with-coins.png";
import StatusJar from "./StatusJar";
import SearchInput from "./SearchInput";

const Jars = () => {
  const dispatch = useAppDispatch();
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [filtersParams, setFiltersParams] = useState(
    queryString.parse(location.search)
  );
  const jars = useAppSelector((state) => state.jars);

  useEffect(() => {
    console.log("start useEffect jars list in Home");
    dispatch(fetchGetAllJars(filtersParams));
  }, [dispatch, filtersParams]);

  const setNewFilterParams = useCallback((param) => {
    const newParams = { ...filtersParams, ...param };
    setSearchParams(queryString.stringify(newParams));
    setFiltersParams(newParams);
  }, [filtersParams, setSearchParams, setFiltersParams]);

  return (
    <>
      <SearchInput setFiltersParams={setNewFilterParams} searchParam={filtersParams.search} />
      <Row className="justify-content-center mb-6">
        {jars?.map((jar) => (
          <Card key={jar.id} style={{ width: "25rem" }} className="mx-1 my-2">
            <Card.Body className="vstack gap-3">
              <Card.Title className="fs-6 fw-bolt">{jar.volunteer}</Card.Title>
              <img
                src={jarWithCoins}
                className="w-25 mx-auto"
                alt="Jar with coins"
              />
              <Nav.Link href={`/jar-detail/${jar.id}`}>
                <Card.Text className="text-center fs-4 mb-0 card-custom-height">
                  {jar.title}
                </Card.Text>
              </Nav.Link>
              <div className="vstack gap-2">
                <StatusJar currentSum={jar.current_sum} goal={jar.goal} />
                <Nav.Link
                  href={`/jar-detail/${jar.id}`}
                  className="fs-6 mb-auto"
                >
                  <Card.Text>
                    {jar.description.slice(0, 100)}
                    {jar.description.length < 100 ? "" : "..."}
                  </Card.Text>
                </Nav.Link>
                <Button className="bg-orange w-100 rounded-pill mt-2">
                  <Nav.Link href="#donate">donate to a good cause</Nav.Link>
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </>
  );
};

export default Jars;
