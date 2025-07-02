import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getUserFromStorage, removeUserFromStorage } from "../utils/userStorage";


const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = getUserFromStorage();
    if (!storedUser) {
      navigate("/signup"); // kullanıcı yoksa kayda yönlendir
    } else {
      setUser(storedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    clearUserFromStorage();
    navigate("/signup");
  };

  return (
    <div className="p-6 text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-4">👤 Profil Sayfası</h1>
      {user && (
        <>
          <p className="text-lg">
            <strong>Ad:</strong> {user.name}
          </p>
          <p className="text-lg">
            <strong>Email:</strong> {user.email}
          </p>

          <button
            onClick={handleLogout}
            className="mt-6 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Çıkış Yap
          </button>
        </>
      )}
    </div>
  );
};

export default Profile;
