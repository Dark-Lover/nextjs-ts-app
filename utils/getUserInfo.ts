export const getUserInfo = () => {
  const localItem = localStorage.getItem("user");
  let userAuth = null;
  if (localItem) {
    userAuth = JSON.parse(localItem);
    return userAuth;
  } else localStorage.clear();
  return userAuth;
};
