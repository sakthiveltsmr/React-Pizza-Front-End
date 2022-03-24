import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../action/userActions";
import Error from "../../component/Error/Error";
import Loading from "../../component/loading/Loading";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
export default function Login() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const loginstate = useSelector((state) => state.loginUserReducer);
  const { loading, error } = loginstate;
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      window.location.href = "/";
    }
  }, []);

  function login() {
    const user = { email, password };
    dispatch(loginUser(user));
  }

  return (
    <div className="login">
      <div className="row justify-content-center mt-5">
        <div
          className="col-md-5  text-left shadow-lg p-3 mb-5 bg-success rounded"
          style={{ marginTop: "90px" }}
        >
          <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
            Login
          </h2>

          {loading && <Loading />}
          {error && <Error error="Invalid Credentials" />}

          <div>
            <div className="d-flex">
              <MdEmail className="icon" />
              <input
                required
                type="email"
                placeholder="email"
                className="form-control"
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </div>
            <div className="d-flex">
              <FaLock className="icon" />
              <input
                type="password"
                placeholder="password"
                className="form-control"
                value={password}
                required
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </div>

            <button onClick={login} className="btn btn-primary mt-3 mb-3">
              LOGIN
            </button>
            <br />
            <a style={{ color: "black" }} href="/register" className="mt-2">
              Click Here To Register
            </a>
            <div style={{ textAlign: "center", marginTop: "10px" }}>
              <h3
                style={{
                  color: "#ffcaad",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                Use This Credentials for test Purpose
              </h3>
              <div style={{ color: "white", borderTop: "1px solid white" }}>
                <p>
                  <b>Email</b> : sakthivel@gmail.com
                </p>
                <p>
                  <b>Password</b> : sakthi123
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
