import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useParams } from "react-router-dom";
import ImageList from "../components/jarComponents/ImageList";
import { Row, Image } from "react-bootstrap";
import { fetchGetJarById } from "../redux/jar/jarActions";
import StatusJar from "../components/jarComponents/StatusJar";
import StatisticTableOfJar from "../components/jarComponents/StatisticTableOfJar";
import ButtonDonateOnNewTab from "../components/ButtonDonateOnNewTab";
import ScrollToTopOnPage from "../components/ScrollToTopOnPage";

const JarDetail = () => {
  const { jarId } = useParams();
  const jar = useAppSelector((state) => state.jar);
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log("start useEffect in JarDetail");

    dispatch(fetchGetJarById(jarId));
  }, [dispatch, jarId]);

  return (
    <>
      <ScrollToTopOnPage />
      <div className="position-relative d-flex justify-content-center align-items-center">
        <Image
          src={jar.title_img}
          alt={jar.img_alt}
          fluid
          className="object-fit-cover w-100 h-100"
          style={{ maxHeight: "50vh" }}
        />
        <div className="d-flex flex-wrap position-absolute top-0 start-0 mt-3 ms-5 ps-4">
          {jar.tags?.map((tag) => (
            <div key={tag.id} className="me-2">
              <div className="bg-teal-400 text-black px-2 py-1 rounded fs-6">
                {tag.name}
              </div>
            </div>
          ))}
        </div>
        <div className="position-absolute">
          <div className="fs-4 ms-5 mt-5 px-4 text-light rounded bg-transparent-black">
            {jar.title}
          </div>
        </div>
      </div>
      <Row className="p-4 mb-auto">
        <div className="w-75">
          <div className="text-start fs-5 ps-3">{jar.volunteer}</div>
          <br />
          <p className="text pe-4">{jar.description}</p>
          <ImageList images={jar.album} />
        </div>
        <div className="w-25 pe-5 pt-5">
          <StatusJar currentSum={jar.current_sum} goal={jar.goal} />
          <ButtonDonateOnNewTab
            monobankId={jar.monobank_id}
            className="w-100 rounded-pill mt-2"
            defaultBg={"bg-orange"}
            hoverBg={"bg-orange-dark"}
          />
        </div>
      </Row>
      <StatisticTableOfJar jarId={jar.id} />
    </>
  );
};

export default JarDetail;
