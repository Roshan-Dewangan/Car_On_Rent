import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { assets, ownerMenuLinks } from "../../assets/assets";
import { useAppContext } from "../../context/AppContext";
import toast from "react-hot-toast";

const Sidebar = () => {
  const { user, axios, fetchUser } = useAppContext();
  const location = useLocation();
  const [image, setImage] = useState("");

  const updateImage = async () => {
    try {
      const formData = new FormData();
      formData.append("image", image);

      const { data } = await axios.post("/api/owner/update-image", formData);

      if (data.success) {
        fetchUser();
        toast.success(data.message);
        setImage("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="relative min-h-screen lg:flex flex-col items-center pt-8 max-w-16 lg:max-w-60 w-full border-r border-borderColor text-sm bg-white">
      {/* Profile Picture */}
      <div className="group relative mb-2">
        <label htmlFor="image" className="cursor-pointer block">
          <img
            src={
              image
                ? URL.createObjectURL(image)
                : user?.image ||
                  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=300"
            }
            alt="profile"
            className="h-9 lg:h-14 w-9 lg:w-14 rounded-full mx-auto object-cover"
          />
          <input
            type="file"
            id="image"
            accept="image/*"
            hidden
            onChange={(e) => setImage(e.target.files[0])}
          />
          {/* Overlay on hover */}
          <div className="absolute hidden top-0 right-0 left-0 bottom-0 bg-black/10 rounded-full group-hover:flex items-center justify-center">
            <img src={assets.edit_icon} alt="Edit" />
          </div>
        </label>

        {/* Save Button */}
        {image && (
          <button
            onClick={updateImage}
            className="absolute -top-2 -right-2 px-2 py-1 flex items-center gap-1 bg-primary text-white text-xs rounded-full"
          >
            Save
            <img src={assets.check_icon} alt="check" width={13} />
          </button>
        )}
      </div>

      {/* Name */}
      <p className="mt-2 text-base hidden lg:block">{user?.name || "Owner"}</p>

      {/* Navigation Links */}
      <div className="w-full mt-4">
        {ownerMenuLinks.map((link, index) => {
          const isActive = link.path === location.pathname;

          return (
            <NavLink
              key={index}
              to={link.path}
              className={`relative flex items-center gap-3 w-full py-3 pl-4 pr-2 transition-all ${
                isActive ? "bg-primary/10 text-primary" : "text-gray-600"
              }`}
            >
              <img
                src={isActive ? link.coloredIcon : link.icon}
                alt={link.name}
                className="w-5 h-5"
              />
              <span className="hidden lg:block">{link.name}</span>

              {/* Side highlight bar */}
              {isActive && (
                <div className="absolute left-0 top-0 h-full w-1 bg-primary rounded-r" />
              )}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
