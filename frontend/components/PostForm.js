// pages/add-edit-post.js
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Formik, Form, Field, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { createBlogAPI, fetchBlogDataDetails, updateBlogAPI } from "../service/api";
import { toast } from "react-toastify";

const initialValues = {
  title: "",
  authorName: "",
  description: "",
  image: null, // Initialize the image field as null
};

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  authorName: Yup.string().required("Author is required"),
  description: Yup.string().required("Description is required"),
  image: Yup.mixed().required("Image is required"), // Assuming image is required
});

const bufferToFile = (bufferImageData) => {
  const blob = new Blob([bufferImageData], { type: "image/jpeg" });
  return new File([blob], "image.jpg", { type: "image/jpeg" });
};

const AddEditPostPage = ({ setShowModal, editMode, postId }) => {
  const router = useRouter();
  const [initialValuesForEdit, setInitialValuesForEdit] = useState(initialValues);

  useEffect(() => {
    // If in edit mode, fetch the post data and set it as initial values
    if (editMode) {
      async function fetchPostData() {
        try {
          const data = fetchBlogDataDetails(postId).then((result) => {
            if (result?.blog) {
              const imageData = bufferToFile(result?.blog.image.data);
              const { title, authorName, description } = result?.blog; // Replace with API response structure
              setInitialValuesForEdit({ title, authorName, description, image: imageData });
            } else {
              toast.error(result.message);
            }
          });

        } catch (error) {
          console.error("API error:", error);
        }
      }
      fetchPostData();
    }
  }, [editMode, postId]);

  const handleSubmit = async (values, { setFieldValue }) => {
    const formData = new FormData();

    // Append form fields to the FormData object
    formData.append("title", values.title);
    formData.append("authorName", values.authorName);
    formData.append("description", values.description);
    formData.append("image", values.image);

    try {
      if (editMode) {
        // If in edit mode, update the existing post
        const response = await updateBlogAPI(postId, formData); // Replace with your API update function
        if (response?.success) {
          toast.success(response.message);
          router.push("/");
          setShowModal(false);
        } else {
          toast.error(response.message);
        }
      } else {
        const response = await createBlogAPI(formData); // Send the FormData to your API
        if (response?.success) {
          toast.success(response.message);
          router.push("/");
          setShowModal(false);
        } else if (response?.success === false) {
          toast.error(response.message);
        }
      }

    } catch (error) {
      console.error("API error:", error);
    }
  };
  const formik = useFormik({
    initialValues: initialValuesForEdit,
    validationSchema: validationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <div className="addpostpage d-flex align-items-center justify-content-center h-[65vh] overflow-auto">

      <Formik
        initialValues={initialValuesForEdit}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        enableReinitialize={true}
      >
        {(formik = useFormik({
          initialValues: initialValuesForEdit,
        })) => (
          <Form className="d-flex flex-column addpostForm">
            <div className="flex flex-col mb-3">
              <label className="text-black mb-2" htmlFor="title">
                Title
              </label>
              <Field
                className="inputField text-black p-3 bg-white border border-gray"
                type="text"
                id="title"
                name="title"
              />
              <ErrorMessage name="title" component="div" className="error" />
            </div>

            <div className="flex flex-col mb-3">
              <label className="text-black mb-2" htmlFor="authorName">
                Author
              </label>
              <Field
                className="inputField p-3 text-black bg-white border border-gray"
                type="text"
                id="authorName"
                name="authorName"
              />
              <ErrorMessage
                name="authorName"
                component="div"
                className="error"
              />
            </div>

            <div className="flex flex-col mb-3">
              <label className="text-black mb-2" htmlFor="description">
                Description
              </label>
              <Field
                className="inputField p-3 text-black bg-white border border-gray"
                as="textarea"
                id="description"
                name="description"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="error"
              />
            </div>

            <div className="flex flex-col mb-3">
              <label className="text-black mb-2" htmlFor="image">
                Upload Image
              </label>
              <input
                className="text-sm text-stone-500 w-full
                file:mr-5 file:hidden text-center px-5 py-[14px] border border-gray rounded-sm
                hover:file:cursor-pointer hover:file:bg-blue-50
                hover:file:text-blue-700"
                type="file"
                id="image"
                name="image"
                accept="image/*" // Restrict file type to images
                // values={formik.values.image}
                onChange={(event) => {
                  // Handle file input change and set it in Formik's values
                  event.preventDefault();
                  const file = event.target.files[0];
                  formik.setFieldValue("image", file); // Use formik.setFieldValue
                }}
              />
              <ErrorMessage name="image" component="div" className="error" />
            </div>

            <button
              type="submit"
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-xl text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddEditPostPage;
