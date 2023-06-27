import React from "react";
import "./profile.css";

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

const Profile = () => {
  return (
    <>
      <h1>Profile</h1>
      <p>{user.name}</p>
      <img
        className="avatar"
        src={user.imageUrl}
        alt=""
        style={{ width: user.imageSize, height: user.imageSize }}
      />
      {products.map((v) => (
        <li key={v.id} style={{ color: v.isFruit ? "pink" : "green" }}>
          {v.title}
        </li>
      ))}
    </>
  );
};

export default Profile;
