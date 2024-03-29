import { useEffect } from "react";
import { Carousel, Image } from "react-bootstrap";
import StatusJar from "./StatusJar";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { fetchGetJarsForBanner } from "../../redux/jar/jarActions";
import ButtonDonateOnNewTab from "../ButtonDonateOnNewTab";
import { Link } from "react-router-dom";

function Banner() {
  const dispatch = useAppDispatch();
  const banner = useAppSelector((state) => state.banner);

  useEffect(() => {
    console.log("start useEffect banner in Home");
    dispatch(fetchGetJarsForBanner());
  }, [dispatch]);

  return (
    <Carousel data-bs-theme="light">
      {banner?.map((jar) => (
        <Carousel.Item interval={50000} key={jar.id}>
          <div className="position-relative d-flex justify-content-center align-items-center">
            <Image
              src={jar.title_img}
              alt={jar.img_alt}
              fluid
              className="object-fit-cover w-100 h-100 blurred-image"
              style={{ maxHeight: "50vh" }}
            />
            <Carousel.Caption className="position-absolute top-0 start-0 mt-3 ms-5">
              <div className="d-flex flex-wrap ms-5 ps-4">
                {jar.tags?.map((tag) => (
                  <div key={tag.id} className="me-2">
                    <div className="bg-teal-400 text-black px-2 py-1 rounded fs-6">
                      {tag.name}
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to={`/jar-detail/${jar.id}`}
                className="link-underline link-underline-opacity-0"
              >
                <div className="w-50 text-start ms-5 mt-2 ps-4 text-light rounded bg-transparent-black">
                  <div className="fs-5">{jar.title}</div>
                  <div className="fs-6">
                    {jar.description.slice(0, 100)}
                    {jar.description.length < 100 ? "" : "..."}
                  </div>
                </div>
              </Link>
              <div className="w-25 ms-5 ps-4">
                <StatusJar currentSum={jar.current_sum} goal={jar.goal} />
                <ButtonDonateOnNewTab
                  monobankId={jar.monobank_id}
                  defaultBg={"bg-orange"}
                  hoverBg={"bg-orange-dark"}
                  className="rounded-pill mt-2 w-100 justify-content-start"
                />
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Banner;
