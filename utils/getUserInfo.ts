export const getUserInfo = () => {
  const userAuth =
    localStorage.getItem("user") !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : localStorage.clear();
  return userAuth;
};
