import React from 'react';
import {useAddPhotoMutation, useFetchPhotosQuery} from "../store";
import Button from "./button/button";
import Skeleton from "./skeleton";
import PhotosListItem from "./photos-list-item";

const PhotosList = ({ album }) => {
  const {data, isFetching, error} = useFetchPhotosQuery(album);
  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    addPhoto(album);
  }

  let content;
  if (isFetching) {
    content = <Skeleton></Skeleton>
  } else if (error) {
    content = <div>Error fetching photos...</div>
  } else {
    content = data.map(photo => {
      return <PhotosListItem key={photo.id} photo={photo} />
    })
  }

  return (
    <div>
      <div className="sublist-indent">
        <h3>Photos in {album.title}</h3>
        <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
          + add Photo
        </Button>
      </div>
      <div>
        {content}
      </div>
    </div>
  );
};

export default PhotosList;
