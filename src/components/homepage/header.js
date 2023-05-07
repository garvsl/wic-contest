import { useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";
export default function Header({ loginStatus }) {
  const navigate = useNavigate();
  return (
    <header className="site-header">
      <div className="container">
        <div className="site-header-inner">
          <button onClick={() => navigate("/")}>
            <h1 className="m-0">WIC</h1>
          </button>
          {loginStatus && (
            <h4 className="m-0" style={{ fontFamily: "Open Sans" }}>
              {auth.currentUser.displayName}
              {/* <br /> {auth.currentUser.email} */}
            </h4>
          )}
        </div>
      </div>
    </header>
  );
}
