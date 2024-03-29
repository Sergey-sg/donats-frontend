import React, { useCallback, useEffect, useState } from "react";
import { fetchGetAllJars } from "../../redux/jar/jarActions";
import { useLocation, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import queryString from "query-string";
import jarWithCoins from "../../assets/images/jar-with-coins.png";
import StatusJar from "./StatusJar";
import SearchInput from "./SearchInput";
import TagsList from "./TagsList";
import OrderingDropDownMenu from "./OrderingDropDownMenu";
import ButtonDonateOnNewTab from "../ButtonDonateOnNewTab";

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

  const setNewFilterParams = useCallback(
    (param) => {
      const newParams = { ...filtersParams, ...param };
      setSearchParams(queryString.stringify(newParams));
      setFiltersParams(newParams);
    },
    [filtersParams, setSearchParams, setFiltersParams]
  );

  return (
    <div className="mx-5">
      <div className="fs-2 my-3">Actives collections of donations:</div>
      <Row className="justify-content-between mb-2 w-100 mx-auto">
        <SearchInput
          setFiltersParams={setNewFilterParams}
          searchParam={filtersParams.search}
        />
        <TagsList setFiltersParams={setNewFilterParams} />
        <OrderingDropDownMenu
          setFiltersParams={setNewFilterParams}
          orderingParam={filtersParams.ordering}
        />
      </Row>
      <Row className="justify-content-center mb-6">
        {jars?.map((jar) => (
          <Card key={jar.id} style={{ width: "25rem" }} className="m-2">
            <Card.Body className="vstack gap-3">
              <Card.Title className="fs-6 fw-bolt">{jar.volunteer}</Card.Title>
              <img
                src={jarWithCoins}
                className="w-25 mx-auto"
                alt="Jar with coins"
              />
              <Link
                to={`/jar-detail/${jar.id}`}
                className="link-underline link-underline-opacity-0 text-black"
              >
                <Card.Text className="text-center fs-4 mb-0 card-custom-height">
                  {jar.title}
                </Card.Text>
              </Link>
              <div className="vstack gap-2">
                <StatusJar currentSum={jar.current_sum} goal={jar.goal} />
                <Link
                  to={`/jar-detail/${jar.id}`}
                  className="fs-6 mb-auto link-underline link-underline-opacity-0 text-black"
                >
                  <Card.Text>
                    {jar.description.slice(0, 100)}
                    {jar.description.length < 100 ? "" : "..."}
                  </Card.Text>
                </Link>
                <ButtonDonateOnNewTab
                  monobankId={jar.monobank_id}
                  className="w-100 rounded-pill mt-2"
                  defaultBg={"bg-orange"}
                  hoverBg={"bg-orange-dark"}
                />
              </div>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </div>
  );
};

export default Jars;
