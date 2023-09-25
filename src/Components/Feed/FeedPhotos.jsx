import React from "react";
import FeedPhotosItem from "./FeedPhotosItem";
import useFetch from "../../Hooks/useFetch";
import { PHOTOS_GET } from "../../Api";
import Error from "../Helper/Error";
import Loading from "../Helper/Loading";
import styles from "./FeedPhotos.module.css";
import Image from "../Helper/Image";
import PostModal from "./PostModal";

const FeedPhotos = ({ page, user, setModalPhoto, setInfinite }) => {
  const { data, loading, error, request } = useFetch();
  const [modalPost, setModalPost] = React.useState(null);

  React.useEffect(() => {
    async function fetchPhotos() {
      const total = 6;
      const { url, options } = PHOTOS_GET({ page, total, user });
      const { response, json } = await request(url, options);
      if (response && response.ok && json.length < total) setInfinite(false);
    }
    fetchPhotos();
  }, [request, user, page, setInfinite]);

  function handleClick() {
    setModalPost(true);
  }

  if (error) return <Error error={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <>
        {modalPost && (
          <PostModal setModalPost={setModalPost} />
        )}
        <ul className={`${styles.feed} animeLeft`}>
          <li className={styles.photo} onClick={handleClick}>
            <Image src="/add.png" alt="Add" />
          </li>
          {data.map((photo) => (
            <FeedPhotosItem
              key={photo.id}
              photo={photo}
              setModalPhoto={setModalPhoto}
            />
          ))}
        </ul>
      </>
    );
  else return null;
};

export default FeedPhotos;
