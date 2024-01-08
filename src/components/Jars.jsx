import { Card, Button, Nav, Row } from "react-bootstrap";
import jarWithCoins from "../assets/images/jar-with-coins.png";
import StatusJar from "./StatusJar";

const jars_test = [
  {
    id: 81,
    monobank_id: "12rtyfg6вhjhаghghjh",
    title: "Savings Jar with album images PUT",
    description: "Description of jar",
    tags: [{ id: 1, name: "drons" }],
    volunteer: "Serhii",
    title_img:
      "http://res.cloudinary.com/df3shcgqu/image/upload/v1704548530/jar_title_img/lus9jiktbmn0tpxc7a1b.png",
    img_alt: "title image PUT method",
    goal: 150000,
    current_sum: 2500,
    date_added: "2024-01-06T11:25:49.756687+02:00",
  },
  {
    id: 82,
    monobank_id: "12rtyfg6вhjhаghdfgdfg",
    title: "Savings Jar",
    description:
      "In by an appetite no humoured returned informed. Possession so comparison inquietude he he conviction no decisively. Marianne jointure attended she hastened surprise but she. Ever lady son yet you very paid form away. He advantage of exquisite resolving if on tolerably. Become sister on in garden it barton waited on.",
    tags: [],
    volunteer: "Serhii",
    title_img:
      "http://res.cloudinary.com/df3shcgqu/image/upload/v1704533179/jar_title_img/bdt8d6wmhsgz9srnahn5.png",
    img_alt: null,
    goal: 500000,
    current_sum: 45000,
    date_added: "2024-01-06T11:26:16.928974+02:00",
  },
  {
    id: 83,
    monobank_id: "12rtyfg6вhjhаghdfghjjk",
    title: "The quick brown fox jumps over the lazy dog. 1234567890!@#$%^&*()",
    description:
      "In by an appetite no humoured returned informed. Possession so comparison inquietude he he conviction no decisively. Marianne jointure attended she hastened surprise but she. Ever lady son yet you very paid form away. He advantage of exquisite resolving if on tolerably. Become sister on in garden it barton waited on.",
    tags: [{ id: 2, name: "test" }],
    volunteer: "Serhii",
    title_img:
      "http://res.cloudinary.com/df3shcgqu/image/upload/v1704533214/jar_title_img/yahdhjldfbujd06fjctz.png",
    img_alt: "sdfgsddgsldfjksdljg",
    goal: 250000,
    current_sum: 20000,
    date_added: "2024-01-06T11:26:53.024902+02:00",
  },
  {
    id: 84,
    monobank_id: "12rtyfg6вhjhаghdfghcvcvb",
    title: "The quick brown fox jumps over 1234567890!@#$%^&*()",
    description:
      "In by an appetite no humoured returned informed. Possession so comparison inquietude he he conviction no decisively. Marianne jointure attended she hastened surprise but she. Ever lady son yet you very paid form away. He advantage of exquisite resolving if on tolerably. Become sister on in garden it barton waited on.",
    tags: [{ id: 2, name: "test" }],
    volunteer: "Serhii",
    title_img:
      "http://res.cloudinary.com/df3shcgqu/image/upload/v1704533240/jar_title_img/phfmffutwl3acfxk9reg.png",
    img_alt: "sdfgsddgsldfjksdljg",
    goal: 56000,
    current_sum: 30000,
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
    goal: 27000,
    current_sum: 3400,
    date_added: "2024-01-06T11:47:36.401951+02:00",
  },
  {
    id: 86,
    monobank_id: "12rtyfg6вhjhаghdfghcбвдрн",
    title: "Savings Jar with album images 6",
    description:
      "In by an appetite no humoured returned informed. Possession so comparison inquietude he he conviction no decisively. Marianne jointure attended she hastened surprise but she. Ever lady son yet you very paid form away. He advantage of exquisite resolving if on tolerably. Become sister on in garden it barton waited on.",
    tags: [{ id: 2, name: "test" }],
    volunteer: "Serhii",
    title_img:
      "http://res.cloudinary.com/df3shcgqu/image/upload/v1704534458/jar_title_img/wh3f7yo9a5bs8kt60w0y.png",
    img_alt: null,
    goal: 27000,
    current_sum: 3400,
    date_added: "2024-01-06T11:47:36.401951+02:00",
  },
];

const Jars = () => {
  return (
    <Row className="justify-content-center mb-6">
      {jars_test?.map((jar) => (
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
              <Nav.Link href={`/jar-detail/${jar.id}`} className="fs-6 mb-auto">
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
  );
};

export default Jars;
