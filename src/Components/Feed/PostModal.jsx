import React from 'react';
import styles from './FeedModal.module.css';
import UserPhotoPost from '../User/UserPhotoPost';

const PostModal = ({ photo, setModalPost }) => {

  function handleOutsideClick(event) {
    if (event.target === event.currentTarget) setModalPost(null);
  }

  function handleSubmit(){
    location.reload()
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      <div className={styles.form}>
        <UserPhotoPost params={{onSubmit:handleSubmit}} />
      </div>
    </div>
  );
};

export default PostModal;
