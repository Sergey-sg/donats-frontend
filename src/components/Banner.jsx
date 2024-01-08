import { Carousel, Image } from "react-bootstrap";

const banner_test = [
  {
    id: 81,
    monobank_id: "12rtyfg6вhjhаghghjh",
    title: "Savings Jar with album images PUT",
    tags: [{ id: 1, name: "drons" }],
    volunteer: "Serhii",
    title_img:
      "http://res.cloudinary.com/df3shcgqu/image/upload/v1704548530/jar_title_img/lus9jiktbmn0tpxc7a1b.png",
    img_alt: "title image PUT method",
    goal: null,
    current_sum: null,
    date_added: "2024-01-06T11:25:49.756687+02:00",
  },
  {
    id: 82,
    monobank_id: "12rtyfg6вhjhаghdfgdfg",
    title: "Savings Jar with album images 3",
    tags: [],
    volunteer: "Serhii",
    title_img:
      "http://res.cloudinary.com/df3shcgqu/image/upload/v1704533179/jar_title_img/bdt8d6wmhsgz9srnahn5.png",
    img_alt: null,
    goal: null,
    current_sum: null,
    date_added: "2024-01-06T11:26:16.928974+02:00",
  },
  {
    id: 83,
    monobank_id: "12rtyfg6вhjhаghdfghjjk",
    title: "Savings Jar with album images 4",
    tags: [{ id: 2, name: "test" }],
    volunteer: "Serhii",
    title_img:
      "http://res.cloudinary.com/df3shcgqu/image/upload/v1704533214/jar_title_img/yahdhjldfbujd06fjctz.png",
    img_alt: "sdfgsddgsldfjksdljg",
    goal: null,
    current_sum: null,
    date_added: "2024-01-06T11:26:53.024902+02:00",
  },
  {
    id: 84,
    monobank_id: "12rtyfg6вhjhаghdfghcvcvb",
    title: "Savings Jar with album images 5",
    tags: [{ id: 2, name: "test" }],
    volunteer: "Serhii",
    title_img:
      "http://res.cloudinary.com/df3shcgqu/image/upload/v1704533240/jar_title_img/phfmffutwl3acfxk9reg.png",
    img_alt: "sdfgsddgsldfjksdljg",
    goal: null,
    current_sum: null,
    date_added: "2024-01-06T11:27:19.110277+02:00",
  },
  {
    id: 85,
    monobank_id: "12rtyfg6вhjhаghdfghcбвдрн",
    title: "Savings Jar with album images 6",
    tags: [{ id: 2, name: "test" }],
    volunteer: "Serhii",
    title_img:
      "http://res.cloudinary.com/df3shcgqu/image/upload/v1704534458/jar_title_img/wh3f7yo9a5bs8kt60w0y.png",
    img_alt: null,
    goal: null,
    current_sum: 3400,
    date_added: "2024-01-06T11:47:36.401951+02:00",
  },
];

function Banner() {
  return (
    <Carousel data-bs-theme="dark">
      {banner_test?.map((jar) => (
        <Carousel.Item interval={5000} key={jar.id}>
          <div className="d-flex justify-content-center align-items-center">
            <Image
              src={jar.title_img}
              alt={jar.img_alt}
              fluid
              className="object-fit-cover w-auto"
              style={{ maxHeight: "40vh" }}
            />
          </div>
          <Carousel.Caption className="text-dark">
            <h3>{jar.title}</h3>
            {jar.tags?.map((tag) => (
              <div key={tag.id}>{tag.name}</div>
            ))}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Banner;
