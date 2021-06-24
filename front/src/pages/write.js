import React from 'react';
import { useSelector } from 'react-redux';
import Form from '../components/Form/Form';

const Write = () => {
  const prevContent = useSelector((state) => state.posts.currentPost);

  return (
    <div>
      <Form prevContent={prevContent ? prevContent : null} />
    </div>
  );
};

export default Write;
