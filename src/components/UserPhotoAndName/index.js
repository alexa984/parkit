
import React from 'react';
import userPhoto from '../../images/Photo.png';

class UserPhotoAndName extends React.Component {
  render() {
    return (
      <div>
        <img src={userPhoto} alt="userPhoto" />
        <h2>User Name</h2>
      </div>
    );
  }
}

export default UserPhotoAndName;
