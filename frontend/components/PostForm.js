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
    <div className='addpostpage d-flex align-items-center justify-content-center h-[65vh] overflow-auto'>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        <Form className='d-flex flex-column addpostForm'>
          <div className='flex flex-col mb-3'>
            <label htmlFor="title" className='text-black mb-2'>Title</label>
            <Field className="inputField p-3 bg-white border border-gray" type="text" id="title" name="title" />
          </div>
          <div className='flex flex-col mb-3'>
            <label htmlFor="summary" className='text-black mb-2'>Author</label>
            <Field className="inputField p-3 bg-white border border-gray" type="text" id="author" name="author" />
          </div>
          <div className='flex flex-col mb-3'>
            <label htmlFor="content" className='text-black mb-2'>Content</label>
            <Field className="inputField p-3 bg-white border border-gray" as="textarea" id="content" name="content" />
          </div>
          <div className='flex flex-col mb-3'>
            <label htmlFor="content" className='text-black mb-2'>Upload Image</label>
            <input
   type="file"
   className="text-sm text-stone-500 w-full
   file:mr-5 file:hidden text-center px-5 py-[14px] border border-gray rounded-sm
   hover:file:cursor-pointer hover:file:bg-blue-50
   hover:file:text-blue-700"
/>
          </div>
          
          <button type="submit" className='savepostbtn'>Save Post</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddEditPostPage;