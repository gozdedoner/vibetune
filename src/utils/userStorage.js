const USER_KEY = "vibetune-user";

export const saveUserToStorage = (user) => {
  try {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  } catch (error) {
    console.error("Kullanıcı kaydedilemedi:", error);
  }
};

export const getUserFromStorage = () => {
  try {
    const data = localStorage.getItem(USER_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Kullanıcı alınamadı:", error);
    return null;
  }
};

export const removeUserFromStorage = () => {
  try {
    localStorage.removeItem(USER_KEY);
  } catch (error) {
    console.error("Kullanıcı silinemedi:", error);
  }
};

