import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="w-48 p-5 shadow-lg">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>

      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Outdoor</li>
        <li>Fashion</li>
        <li>Play</li>
        <li>Music</li>
      </ul>

      <h1 className="font-bold pt-5">Others</h1>
      <ul>
        <li>Viral</li>
        <li>Funny</li>
        <li>Epic</li>
        <li>Comedy</li>
        <li>Sad</li>
        <li>Laughter</li>
        <li>Show</li>
        <li>Entertainment</li>
        <li>SNL</li>
        <li>NBA</li>
      </ul>
    </div>
  );
};

export default Sidebar;
