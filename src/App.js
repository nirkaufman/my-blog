import {Outlet} from "react-router-dom";
import {Navbar} from "./components/Navbar";
import {AuthContext} from "./context/auth";
import {useState} from "react";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  return (
      <AuthContext.Provider value={{
        currentUser,
        setCurrentUser
      }}>
        <Navbar />
        <Outlet />
      </AuthContext.Provider>
  );
}

export default App;
