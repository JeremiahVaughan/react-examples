import React from 'react';
import ExpandablePanel from "./expandable-panel";
import {trashCan} from "../constants/icons";
import './albums-list.scss'
import {useRemoveAlbumMutation} from "../store";
import Button from "./button/button";
import PhotosList from "./photos-list";

const AlbumsListItem = ({album}) => {
    const [removeAlbum, results] = useRemoveAlbumMutation()
    const handleClick = () => {
        removeAlbum(album)
    }
    const header = <div className="item-list-header">
        <Button loading={results.isLoading} svgIcon={trashCan} onClick={handleClick}>
        </Button>
        {album.title}
    </div>
  return <ExpandablePanel key={album.id} header={header}>
    <div className="sublist-indent">
      <PhotosList album={album}></PhotosList>
    </div>  </ExpandablePanel>;
};

export default AlbumsListItem;
