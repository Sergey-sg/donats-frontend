import { Card, Button, Nav, Row, ProgressBar } from "react-bootstrap";
import { FaCoins, FaBullseye } from 'react-icons/fa';

const jars_test = [
  {
    id: 81,
    monobank_id: "12rtyfg6вhjhаghghjh",
    title: "Savings Jar with album images PUT",
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
    title: "Savings Jar with album images 3",
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
    title: "Savings Jar with album images 4",
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
    title: "Savings Jar with album images 5",
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
    id: 85,
    monobank_id: "12rtyfg6вhjhаghdfghcбвдрн",
    title: "Savings Jar with album images 6",
    tags: [{ id: 2, name: "test" }],
    volunteer: "Serhii",
    title_img:
      "http://res.cloudinary.com/df3shcgqu/image/upload/v1704534458/jar_title_img/wh3f7yo9a5bs8kt60w0y.png",
    img_alt: null,
    goal: 27000,
    current_sum: 3400,
    date_added: "2024-01-06T11:47:36.401951+02:00",
  },
  // {
  //   id: 85,
  //   monobank_id: "12rtyfg6вhjhаghdfghcбвдрн",
  //   title: "Savings Jar with album images 6",
  //   tags: [{ id: 2, name: "test" }],
  //   volunteer: "Serhii",
  //   title_img:
  //     "http://res.cloudinary.com/df3shcgqu/image/upload/v1704534458/jar_title_img/wh3f7yo9a5bs8kt60w0y.png",
  //   img_alt: null,
  //   goal: 27000,
  //   current_sum: 3400,
  //   date_added: "2024-01-06T11:47:36.401951+02:00",
  // },
  // {
  //   id: 85,
  //   monobank_id: "12rtyfg6вhjhаghdfghcбвдрн",
  //   title: "Savings Jar with album images 6",
  //   tags: [{ id: 2, name: "test" }],
  //   volunteer: "Serhii",
  //   title_img:
  //     "http://res.cloudinary.com/df3shcgqu/image/upload/v1704534458/jar_title_img/wh3f7yo9a5bs8kt60w0y.png",
  //   img_alt: null,
  //   goal: 27000,
  //   current_sum: 3400,
  //   date_added: "2024-01-06T11:47:36.401951+02:00",
  // },
];

const Jars = () => {
  function get_percentage (current_sum, goal) {
    return (current_sum / goal) * 100
  }

  return (
    <>
      <Row className="justify-content-center mb-6">
        {jars_test?.map((jar) => (
          <Card style={{ width: "25rem" }} className="m-1">
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title className="fs-6 fw-bolt">{jar.volunteer}</Card.Title>
              <Card.Text className="text-center fs-4 mb-0">{jar.title}</Card.Text>
              <div className="justify-content-end">
                <div className="fs-6 fw-bold text-end">
                  {Math.round(get_percentage(jar.current_sum, jar.goal))}%
                </div>
                <ProgressBar now={get_percentage(jar.current_sum, jar.goal)} />
                <Card.Text className="bg-gray py-1 text-center rounded-2 mt-3 d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center ms-4">
                      <FaCoins className="mx-2" />
                      <div>
                        <div>collected</div>
                        <div>{jar.current_sum}</div>
                      </div>
                    </div>
                    <div className="d-flex align-items-center me-4">
                      <FaBullseye className="mx-2" />
                      <div>
                        <div>goal</div>
                        <div>{jar.goal}</div>
                      </div>
                    </div>
                </Card.Text>
                <Button className="bg-orange w-100 rounded-pill">
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
