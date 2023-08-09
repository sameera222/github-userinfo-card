import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeBranch,
  faFileCode,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";

function UserInfoCard({ userData }) {
  return (
    <div className="min-h-screen flex items-center justify-center p-2">
      <div className="bg-white shadow-lg rounded-lg p-6 mt-4 text-center w-80 h-96">
        <div className="relative">
          <div className="absolute -top-6 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="bg-blue-500 w-16 h-16 rounded-full flex items-center justify-center">
              <FontAwesomeIcon
                icon={faCodeBranch}
                className="text-white text-lg"
              />
            </div>
          </div>
          <img
            src={userData.avatar_url}
            alt="Avatar"
            className="w-32 h-32 rounded-full mx-auto mb-2 border-4 border-purple-800 shadow-lg"
          />
        </div>
        <h2 className="text-2xl font-semibold text-black">{userData.name}</h2>
        <p className="text-green-900 font-semibold">@{userData.login}</p>
        <div className="flex justify-center my-6 gap-6">
          <div className="flex items-center mt-2">
            <div className="bg-purple-500 rounded-full p-2">
              <FontAwesomeIcon
                icon={faCodeBranch}
                className="text-white text-lg"
              />
            </div>
            <p className="text-orange-800 ml-2 font-bold">
              {userData.public_repos} Repos
            </p>
          </div>
          <div className="flex items-center mt-2">
            <div className="bg-pink-500 rounded-full p-2">
              <FontAwesomeIcon
                icon={faFileCode}
                className="text-white text-lg"
              />
            </div>
            <p className="text-purple-800 ml-2 font-bold">
              {userData.public_gists} Gists
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center mt-6">
          <div className="bg-red-500 rounded-full p-2">
            <FontAwesomeIcon
              icon={faCalendarAlt}
              className="text-white text-lg"
            />
          </div>
          <p className="text-blue-900 ml-2 font-bold">
            Profile Created At:{" "}
            {new Date(userData.created_at).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserInfoCard;
