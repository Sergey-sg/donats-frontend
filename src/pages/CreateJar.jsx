import React, { useState, useCallback, useEffect } from "react";
// import { useAppDispatch } from "../redux/hooks";
import { Button, Container, Form } from "react-bootstrap";
// import { fetchCreateNewJar } from "../redux/jar/jarActions";
import * as Yup from "yup";
import * as formik from "formik";

const jarSchema = Yup.object().shape({
  monobank_url: Yup.string().url("Invalid URL").required("Required"),
  title: Yup.string()
    .min(3)
    .max(100, "Too long, max length is 100 symbols")
    .required("Required"),
  description: Yup.string()
    .min(50, "Too short, min length is 50 symbols")
    .required("Required"),
  img_alt: Yup.string().max(200, "Too long, max length is 200 symbols"),
});

const CreateJar = () => {
  const { Formik } = formik;

  const [addAlbum, setAddAlbum] = useState(false);
  const [formData, setFormData] = useState({
    monobank_url: "",
    title: "",
    description: "",
    tags: [],
    title_img: undefined,
    img_alt: "",
    album: [],
  });
  // const dispatch = useAppDispatch();

  const handleAddAlbum = () => {
    setAddAlbum(true);
    setFormData({
      ...formData,
      album: [...formData.album, { img: undefined, img_alt: "" }],
    });
  };

  const handleSubmitJar = useCallback(
    ({ monobank_url, title, description, tags, title_img, img_alt }) => {
      const params = {
        monobank_url,
        title,
        description,
        tags,
        title_img,
        img_alt,
      };
      console.log(params);
      setFormData(...formData, ...params);
    },
    [formData]
  );

  const handleAlbumChange = (index, field, value) => {
    const updatedAlbum = [...formData.album];
    updatedAlbum[index] = { ...updatedAlbum[index], [field]: value };
    setFormData({ ...formData, album: updatedAlbum });
  };

  const handleRemoveImageFromAlbum = (index) => {
    const updatedAlbum = [...formData.album];
    updatedAlbum.splice(index, 1);
    if (!updatedAlbum) {
      setAddAlbum(false);
    }
    setFormData({ ...formData, album: updatedAlbum });
  };

  // const handleSendJar = (e) => {
  //   e.preventDefault();

  //   const submitData = new FormData();

  //   submitData.append("monobank_id", formData.monobank_id);
  //   submitData.append("title", formData.title);
  //   submitData.append("description", formData.description);
  //   submitData.append("tags", formData.tags);
  //   submitData.append("title_img", formData.title_img);
  //   submitData.append("album[]", formData.album);
  //   submitData.append("img_alt", formData.img_alt);

  //   dispatch(fetchCreateNewJar(submitData));
  // };

  return (
    <Container className="mb-auto py-4">
      <Formik
        validationSchema={jarSchema}
        onSubmit={handleSubmitJar}
        initialValues={formData}
        validateOnChange={false}
        validateOnBlur={true}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          errors,
        }) => (
          <Form onSubmit={handleSubmit} className="w-75 mx-auto">
            <div className="mb-3 fs-3">New Jar:</div>
            <Form.Group>
              <Form.Label>Monobank Jar URL</Form.Label>
              <Form.Control
                type="text"
                name="monobank_url"
                id="monobank_url"
                placeholder="Enter Monobank Jar URL"
                value={values.monobank_url}
                onChange={handleChange}
                isValid={touched.monobank_url && !errors.monobank_url}
                isInvalid={touched.monobank_url && !!errors.monobank_url}
                onBlur={handleBlur}
              />
              {touched.monobank_url && !errors.monobank_url ? (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              ) : (
                <Form.Control.Feedback type="invalid">
                  {errors.monobank_url}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                id="title"
                placeholder="Enter jar title"
                value={values.title}
                onChange={handleChange}
                isValid={touched.title && !errors.title}
                isInvalid={touched.title && !!errors.title}
                onBlur={handleBlur}
              />
              {touched.title && !errors.title ? (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              ) : (
                <Form.Control.Feedback type="invalid">
                  {errors.title}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                name="description"
                id="description"
                placeholder="Enter jar description"
                value={values.description}
                onChange={handleChange}
                isValid={touched.description && !errors.description}
                isInvalid={touched.description && !!errors.description}
                onBlur={handleBlur}
              />
              {touched.description && !errors.description ? (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              ) : (
                <Form.Control.Feedback type="invalid">
                  {errors.description}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            <Form.Group>
              <Form.Label>Tags</Form.Label>
              <Form.Control
                type="text"
                name="tags"
                id="tags"
                placeholder="Enter tags separated by commas"
                value={values.tags}
                onChange={handleChange}
                isValid={touched.tags && !errors.tags}
                isInvalid={touched.tags && !!errors.tags}
                onBlur={handleBlur}
              />
              {touched.tags && !errors.tags ? (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              ) : (
                <Form.Control.Feedback type="invalid">
                  {errors.tags}
                </Form.Control.Feedback>
              )}
              <Form.Text color="muted">Separate tags with commas.</Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Title Image</Form.Label>
              <Form.Control
                type="file"
                name="title_img"
                id="title_img"
                value={values.title_img}
                onChange={handleChange}
                isInvalid={touched.title_img && !!errors.title_img}
                onBlur={handleBlur}
              />
              <Form.Control.Feedback type="invalid">
                {errors.title_img}
              </Form.Control.Feedback>
              <Form.Text color="muted">
                Upload the title image for the jar.
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Image Alt Text</Form.Label>
              <Form.Control
                type="text"
                name="img_alt"
                id="img_alt"
                placeholder="Enter image alt text"
                value={values.img_alt}
                onChange={handleChange}
                isValid={touched.img_alt && !errors.img_alt}
                isInvalid={touched.img_alt && !!errors.img_alt}
                onBlur={handleBlur}
              />
              {touched.img_alt && !errors.img_alt ? (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              ) : (
                <Form.Control.Feedback type="invalid">
                  {errors.img_alt}
                </Form.Control.Feedback>
              )}
            </Form.Group>
            {addAlbum ? (
              <>
                <div className="my-3 fs-3">Album for Jar:</div>
                {formData.album.map((albumImage, index) => (
                  <div key={index}>
                    <Form.Group>
                      <Form.Label>Album Image</Form.Label>
                      <Form.Control
                        type="file"
                        name={`album[${index}].img`}
                        id="img"
                        value={albumImage.img}
                        onChange={(e) =>
                          handleAlbumChange(index, "img", e.target.value)
                        }
                        // isInvalid={
                        //   touched.albumImage.img && !!errors.albumImage.img
                        // }
                        onBlur={handleBlur}
                      />
                      {/* <Form.Control.Feedback type="invalid">
                        {errors.albumImage.img}
                      </Form.Control.Feedback> */}
                      <Form.Text color="muted">
                        Upload the image for album of the jar.
                      </Form.Text>
                    </Form.Group>
                    <Form.Group>
                      <Form.Label>Image Alt Text</Form.Label>
                      <Form.Control
                        type="text"
                        name={`album[${index}].img_alt`}
                        id="img_alt"
                        placeholder="Enter image alt text"
                        value={albumImage.img_alt}
                        onChange={(e) =>
                          handleAlbumChange(index, "img_alt", e.target.value)
                        }
                        // isValid={
                        //   touched.albumImage.img_alt &&
                        //   !errors.albumImage.img_alt
                        // }
                        // isInvalid={
                        //   touched.albumImage.img_alt &&
                        //   !!errors.albumImage.img_alt
                        // }
                        onBlur={handleBlur}
                      />
                      {/* {touched.albumImage.img_alt &&
                      !errors.albumImage.img_alt ? (
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      ) : (
                        <Form.Control.Feedback type="invalid">
                          {errors.albumImage.img_alt}
                        </Form.Control.Feedback>
                      )} */}
                    </Form.Group>
                    {/* <Button
                      variant="danger"
                      onClick={handleRemoveImageFromAlbum(index)}
                      className="mt-3 bg-orange"
                    >
                      Remove Image
                    </Button> */}
                    <Button onClick={handleAddAlbum} className="mt-3 bg-orange">
                      Add Image
                    </Button> 
                  </div>
                ))}
              </>
            ) : (
              <Button onClick={handleAddAlbum} className="mt-3">
                Add Album
              </Button>
            )}
            <Button type="submit" className="float-end mt-3">
              Create Jar
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default CreateJar;
