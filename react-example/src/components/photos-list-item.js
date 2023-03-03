import React from 'react';
import {trashCan} from "../constants/icons";
import Icon from "./icon";
import {useRemovePhotoMutation} from "../store";

const PhotosListItem = ({ photo }) => {
const [removePhoto, results] = useRemovePhotoMutation();

  const handleRemovePhoto = () => {
    removePhoto(photo);
  }

  let content;
  if (results.isFetching) {
    content = <div>Loading...</div>
  } else if (results.isError) {
    content = <div>Error has occurred when attempting to fetch photo</div>
  } else {
    content = <div onClick={handleRemovePhoto}>
      <img src={photo.url} alt="random-pic"/>
      <Icon svg={trashCan}></Icon>
    </div>
  }

  return (
    <div>
      {content}
    </div>
  );
};

export default PhotosListItem;
