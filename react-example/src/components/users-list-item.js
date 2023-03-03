import { removeUser } from '../store';
import { useThunk } from '../hooks/use-thunk';
import Button from "./button/button";
import ExpandablePanel from "./expandable-panel";
import AlbumsList from "./albums-list";
import {trashCan} from "../constants/icons";
import './users-list-item.scss'

function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleRemoveUser = () => {
    doRemoveUser(user);
  };

  const header = (
    <>
      {error && <span>Error deleting user.</span>}
        <span className="spacer"></span>
        {user.name}
        <span className="spacer"></span>
        <Button svgIcon={trashCan} className="mr-3" loading={isLoading} onClick={handleRemoveUser}>
        </Button>
    </>
  );

  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
}

export default UsersListItem;
