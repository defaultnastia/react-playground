import { useUser } from "../../userContext.jsx";

const UserLogMenu = () => {
  const { isLoggedIn, userName, logOut, logIn } = useUser();

  return (
    <div>
      {isLoggedIn ? (
        <>
          <p>{userName}</p>
          <button onClick={logOut}>Logout</button>
        </>
      ) : (
        <button onClick={logIn}>Log In</button>
      )}
    </div>
  );
};

export default UserLogMenu;
