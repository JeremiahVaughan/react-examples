import {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
} from "../store";
import Skeleton from "./skeleton";
import Button from "./button/button";
import AlbumsListItem from "./albums-list-item";
import {addItem} from "../constants/icons";
import './albums-list.scss'

function AlbumsList({ user }) {
  const { data, error, isFetching } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  }

  let content;
  //  is fetching is set to true every time a request is made (e.g., the first time the request is issued and from tag invalidation)
  if (isFetching) {
    content = <Skeleton times={3}></Skeleton>
  } else if (error) {
    content = <div>Error loading albums.</div>
  } else {
    content = data.map(album => {
      return <AlbumsListItem key={album.id} album={album}></AlbumsListItem>
    });
  }
   return (
     <div className="sublist-indent">
       <h3><div>Albums for {user.name}</div></h3>
       <Button
           loading={results.isLoading}
           onClick={handleAddAlbum}
           svgIcon={addItem}
       >
           Add Album
       </Button>
       <div>{content}</div>
     </div>
   );
}

export default AlbumsList;
