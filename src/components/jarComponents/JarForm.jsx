import React, { useCallback, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Button, Form } from "react-bootstrap";
import { fetchCreateNewJar } from "../../redux/jar/jarActions";
import * as Yup from "yup";
import * as formik from "formik";
import { monobankJarUrl } from "../../assets/constants/urls";
import { fetchGetAllTags } from "../../redux/jar/jarActions";

const jarSchema = Yup.object().shape({
  monobank_url: Yup.string()
    .url("Invalid URL")
    .required("Required")
    .test(
      "startsWithMonobankJarUrl",
      `URL must start with ${monobankJarUrl}`,
      (value) => value && value.startsWith(monobankJarUrl)
    ),
  title: Yup.string()
    .min(3)
    .max(100, "Too long, max length is 100 symbols")
    .required("Required"),
  description: Yup.string()
    .min(50, "Too short, min length is 50 symbols")
    .required("Required"),
  img_alt: Yup.string().max(200, "Too long, max length is 200 symbols"),
  title_img: Yup.mixed().test(
    "fileSize",
    "Title image is too large, max size is 5MB",
    (value) => {
      if (value) {
        return value.size <= 5 * 1024 * 1024; // 5MB
      }
      return true;
    }
  ),
  album: Yup.array().of(
    Yup.object().shape({
      img: Yup.mixed().test(
        "fileSize",
        "Album image is too large, max size is 5MB",
        (value) => {
          if (value) {
            return value.size <= 5 * 1024 * 1024; // 5MB
          }
          return true;
        }
      ),
      img_alt: Yup.string().max(200, "Too long, max length is 200 symbols"),
    })
  ),
});

const JarAlbumFormControl = ({
  values,
  handleSetFile,
  handleChange,
  handleBlur,
  setFieldValue,
}) => {
  const handleAddImageToAlbum = (values, handleChange) => {
    const updatedAlbum = [...values.album, { img: "", img_alt: "" }];
    handleChange({ target: { name: "album", value: updatedAlbum } });
  };

  const handleRemoveImageFromAlbum = (index, values, handleChange) => {
    const updatedAlbum = [...values.album];
    updatedAlbum.splice(index, 1);
    handleChange({ target: { name: "album", value: updatedAlbum } });
  };

  return (
    <>
      {values.album.length > 0 ? (
        <>
          <div className="my-3 fs-3">Album for Jar:</div>
          {values.album.map((albumImage, index) => (
            <div key={index}>
              <Form.Group>
                <Form.Label>Album Image</Form.Label>
                <Form.Control
                  type="file"
                  name={`album[${index}].img`}
                  id="img"
                  value={albumImage.img}
                  onChange={(event) => handleSetFile(event, setFieldValue)}
                  onBlur={handleBlur}
                />
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
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Form.Group>
              <Button
                onClick={() => handleAddImageToAlbum(values, handleChange)}
                className="mt-3 bg-orange"
              >
                Add Image
              </Button>
              <Button
                variant="danger"
                onClick={() =>
                  handleRemoveImageFromAlbum(index, values, handleChange)
                }
                className="mt-3 ms-2"
              >
                Remove Image
              </Button>
            </div>
          ))}
        </>
      ) : (
        <Button
          onClick={() => handleAddImageToAlbum(values, handleChange)}
          className="mt-3"
        >
          Add Album
        </Button>
      )}
    </>
  );
};

const JarForm = ({ initialValues }) => {
  const { Formik } = formik;
  const dispatch = useAppDispatch();
  const [files, setFiles] = useState({});
  const tags = useAppSelector((state) => state.tags);

  const handleSetFile = useCallback(
    (event, setFieldValue) => {
      setFieldValue(event.target.name, event.target.value);
      setFiles({ ...files, [event.target.name]: event.target.files[0] });
    },
    [files]
  );

  const handleSubmitJar = useCallback(
    ({ monobank_url, title, description, tags, img_alt, album }) => {
      const submitData = new FormData();

      const monobank_id = monobank_url.replace(monobankJarUrl, "");

      submitData.append("monobank_id", monobank_id);
      submitData.append("title", title);
      submitData.append("description", description);
      submitData.append("tags", tags);
      submitData.append("title_img", files.title_img);
      submitData.append("img_alt", img_alt);

      album.forEach((image, index) => {
        submitData.append(`album[${index}].img`, files[`album[${index}].img`]);
        submitData.append(`album[${index}].img_alt`, image.img_alt);
      });

      dispatch(fetchCreateNewJar(submitData));
    },
    [dispatch, files]
  );

  useEffect(() => {
    console.log("useEffect get all tags in JarForm");
    dispatch(fetchGetAllTags());
  }, [dispatch]);

  return (
    <Formik
      validationSchema={jarSchema}
      onSubmit={handleSubmitJar}
      initialValues={initialValues}
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
        setFieldValue,
      }) => (
        <Form
          onSubmit={handleSubmit}
          className="w-75 mx-auto"
          encType="multipart/form-data"
        >
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
            <Form.Control.Feedback type="invalid">
              {errors.monobank_url}
            </Form.Control.Feedback>
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
            <Form.Control.Feedback type="invalid">
              {errors.title}
            </Form.Control.Feedback>
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
            <Form.Control.Feedback type="invalid">
              {errors.description}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Tags</Form.Label>
            <Form.Control
              as="select"
              multiple
              name="tags"
              id="tags"
              value={values.tags}
              onChange={handleChange}
              isValid={touched.tags && !errors.tags}
              isInvalid={touched.tags && !!errors.tags}
              onBlur={handleBlur}
            >
              {tags.map((tag) => (
                <option key={tag.id} value={tag.name}>
                  {tag.name}
                </option>
              ))}
            </Form.Control>
            <Form.Control.Feedback type="invalid">
              {errors.tags}
            </Form.Control.Feedback>
            <Form.Text color="muted">Choose tags from the list.</Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Title Image</Form.Label>
            <Form.Control
              type="file"
              name="title_img"
              id="title_img"
              value={values.title_img}
              onChange={(event) => handleSetFile(event, setFieldValue)}
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
            {touched.img_alt && !errors.img_alt && (
              <Form.Control.Feedback type="invalid">
                {errors.img_alt}
              </Form.Control.Feedback>
            )}
          </Form.Group>
          <JarAlbumFormControl
            values={values}
            handleSetFile={handleSetFile}
            handleChange={handleChange}
            handleBlur={handleBlur}
            setFieldValue={setFieldValue}
          />
          <Button type="submit" className="float-end mt-3">
            Create Jar
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default JarForm;
