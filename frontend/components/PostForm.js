// pages/add-edit-post.js
import React from 'react';
// import {  useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// import { addPost, editPost } from '../redux/action';

const AddEditPostPage = () => {
  // const dispatch = useDispatch();
  const router = useRouter();

  const initialValues = {
    title: '',
    summary: '',
    content: '',
    publicationDate: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    summary: Yup.string().required('Summary is required'),
    content: Yup.string().required('Content is required'),
    publicationDate: Yup.date().required('Publication date is required'),
  });

  const handleSubmit = (values) => {

    // Use dispatch to save the form data in the Redux store
    if (values.id) {
      dispatch(editPost(values));
    } else {
      dispatch(addPost(values));

    }
    router.push('/');
  };

  return (
    <div className='addpostpage d-flex align-items-center justify-content-center'>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form className='d-flex flex-column addpostForm'>
          <div className='flex flex-col mb-3'>
            <label htmlFor="title" className='text-black'>Title</label>
            <Field className="inputField p-3 bg-white border border-gray" type="text" id="title" name="title" />
          </div>
          <div className='flex flex-col mb-3'>
            <label htmlFor="summary" className='text-black'>Author</label>
            <Field className="inputField p-3 bg-white border border-gray" type="text" id="author" name="author" />
          </div>
          <div className='flex flex-col mb-3'>
            <label htmlFor="content" className='text-black'>Content</label>
            <Field className="inputField p-3 bg-white border border-gray" as="textarea" id="content" name="content" />
          </div>

          <label class="block mb-2  text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload file</label>
          <input class="block w-full text-sm text-gray-900 bg-white border border-gray rounded-lg cursor-pointer  focus:outline-none" id="file_input" type="file" />

          <button type="submit" className='savepostbtn'>Save Post</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddEditPostPage;