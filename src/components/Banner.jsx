import { Carousel, Image, Button, Nav } from "react-bootstrap";
import StatusJar from "./StatusJar";

const banner_test = [
  {
    id: 81,
    monobank_id: "12rtyfg6вhjhаghghjh",
    title: "Savings Jar with album images PUT",
    tags: [
      { id: 1, name: "drons" },
      { id: 2, name: "test" },
    ],
    volunteer: "Serhii",
    title_img:
      "http://res.cloudinary.com/df3shcgqu/image/upload/v1704548530/jar_title_img/lus9jiktbmn0tpxc7a1b.png",
    description:
      "In by an appetite no humoured returned informed. Possession so comparison inquietude he he conviction no decisively. Marianne jointure attended she hastened surprise but she. Ever lady son yet you very paid form away. He advantage of exquisite resolving if on tolerably. Become sister on in garden it barton waited on.", 
    img_alt: "title image PUT method",
    goal: 45000,
    current_sum: 4567,
    date_added: "2024-01-06T11:25:49.756687+02:00",
  },
  {
    id: 82,
    monobank_id: "12rtyfg6вhjhаghdfgdfg",
    title: "Savings Jar with album images 3",
    description:
      "In by an appetite no humoured returned informed. Possession so comparison inquietude he he conviction no decisively. Marianne jointure attended she hastened surprise but she. Ever lady son yet you very paid form away. He advantage of exquisite resolving if on tolerably. Become sister on in garden it barton waited on.",
    tags: [],
    volunteer: "Serhii",
    title_img:
      "http://res.cloudinary.com/df3shcgqu/image/upload/v1704533179/jar_title_img/bdt8d6wmhsgz9srnahn5.png",
    img_alt: null,
    goal: 67985464,
    current_sum: 4567,
    date_added: "2024-01-06T11:26:16.928974+02:00",
  },
  {
    id: 83,
    monobank_id: "12rtyfg6вhjhаghdfghjjk",
    title: "Savings Jar with album images 4",
    description:
      "In by an appetite no humoured returned informed. Possession so comparison inquietude he he conviction no decisively. Marianne jointure attended she hastened surprise but she. Ever lady son yet you very paid form away. He advantage of exquisite resolving if on tolerably. Become sister on in garden it barton waited on.",
    tags: [{ id: 2, name: "test" }],
    volunteer: "Serhii",
    title_img:
      "http://res.cloudinary.com/df3shcgqu/image/upload/v1704533214/jar_title_img/yahdhjldfbujd06fjctz.png",
    img_alt: "sdfgsddgsldfjksdljg",
    goal: 5678896,
    current_sum: 5678,
    date_added: "2024-01-06T11:26:53.024902+02:00",
  },
  {
    id: 84,
    monobank_id: "12rtyfg6вhjhаghdfghcvcvb",
    title: "Savings Jar with album images 5",
    description:
      "In by an appetite no humoured returned informed. Possession so comparison inquietude he he conviction no decisively. Marianne jointure attended she hastened surprise but she. Ever lady son yet you very paid form away. He advantage of exquisite resolving if on tolerably. Become sister on in garden it barton waited on.",
    tags: [{ id: 2, name: "test" }],
    volunteer: "Serhii",
    title_img:
      "http://res.cloudinary.com/df3shcgqu/image/upload/v1704533240/jar_title_img/phfmffutwl3acfxk9reg.png",
    img_alt: "sdfgsddgsldfjksdljg",
    goal: 56768856,
    current_sum: 67686,
    date_added: "2024-01-06T11:27:19.110277+02:00",
  },
  {
    id: 85,
    monobank_id: "12rtyfg6вhjhаghdfghcбвдрн",
    title: "Savings Jar with album images 6",
    description:
      "In by an appetite no humoured returned informed. Possession so comparison inquietude he he conviction no decisively. Marianne jointure attended she hastened surprise but she. Ever lady son yet you very paid form away. He advantage of exquisite resolving if on tolerably. Become sister on in garden it barton waited on.",
    tags: [{ id: 2, name: "test" }],
    volunteer: "Serhii",
    title_img:
      "http://res.cloudinary.com/df3shcgqu/image/upload/v1704534458/jar_title_img/wh3f7yo9a5bs8kt60w0y.png",
    img_alt: null,
    goal: 87679656,
    current_sum: 3400,
    date_added: "2024-01-06T11:47:36.401951+02:00",
  },
];

function Banner() {
  return (
    <Carousel data-bs-theme="dark">
      {banner_test?.map((jar) => (
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
                <Button className="bg-orange rounded-pill mt-2 w-100 justify-content-start">
                  <Nav.Link href="#donate">donate to a good cause</Nav.Link>
                </Button>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Banner;
