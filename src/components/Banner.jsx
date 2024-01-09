import { useAppSelector } from "../redux/hooks";
import { Carousel, Image, Nav } from "react-bootstrap";
import StatusJar from "./StatusJar";
import ButtonOnHover from "./ButtonOnHover";



function Banner() {
  const banner = useAppSelector((state) => state.banner)

  return (
    <Carousel data-bs-theme="dark">
      {banner?.map((jar) => (
        <Carousel.Item interval={50000} key={jar.id}>
          <div className="position-relative d-flex justify-content-center align-items-center">
            <Image
              src={jar.title_img}
              alt={jar.img_alt}
              fluid
              className="object-fit-cover w-auto blurred-image"
              style={{ maxHeight: "40vh" }}
            />
            <Carousel.Caption className="text-dark position-absolute top-0 start-0 mt-3 ms-5">
              <div className="d-flex flex-wrap ms-5 ps-4">
                {jar.tags?.map((tag) => (
                  <div key={tag.id} className="me-2">
                    <div className="bg-teal-400 text-black px-2 py-1 rounded fs-6">
                      {tag.name}
                    </div>
                  </div>
                ))}
              </div>
              <Nav.Link href={`/jar-detail/${jar.id}`} className="w-50">
                <div className="text-start fs-5 ms-5 ps-4">{jar.title}</div>
                <div className="text-start fs-6 ms-5 ps-4">
                  {jar.description.slice(0, 100)}
                  {jar.description.length < 100 ? "" : "..."}
                </div>
              </Nav.Link>
              <div className="w-25 ms-5 ps-4">
                <StatusJar currentSum={jar.current_sum} goal={jar.goal} />
                <ButtonOnHover
                  defaultBg={"btn-outline-secondary"} 
                  hoverBg={"bg-light"}
                  className="text-black border-secondary rounded-pill mt-2 w-100 justify-content-start"
                >
                  <Nav.Link href="#donate">donate to a good cause</Nav.Link>
                </ButtonOnHover>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Banner;
