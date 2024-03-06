import { UserType } from '../../types';
import './style.css';

export function UserCard({ firstName, lastName, image, address }: UserType) {
  return (
    <div className="userCard">
      <img
        className="userPic"
        src={image}
      />
      <div className="userInfo">
        <div>{`${firstName} ${lastName}`}</div>
        <div>{address.city}</div>
      </div>
    </div>
  );
}
