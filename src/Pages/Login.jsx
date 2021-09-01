import axios from "axios";
import React from "react";
import { useHistory } from "react-router-dom";
import store from "../store";
import { login } from "../store/reducers/authReducer";
import { hideLoading, showLoading } from "../store/reducers/loadingReducer";

export default function Login() {
  const history = useHistory();
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Authorization",
  };
  async function LoginBtn() {
    store.dispatch(showLoading());
    const res = await axios.post(
      "https://dev-dl.tdcx.com:3092/login",
      {
        headers: headers,
      },
      {
        name: "Authorization",
        apiKey: "qW1hrT2",
      }
    );
    store.dispatch(hideLoading());
    if (res?.data) {
      store.dispatch(login(res.data));
      history.push("/dashboard");
    }
  }

  return (
    <form>
      <h3>Log in</h3>

      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>

      <button type="submit" className="btn btn-dark btn-lg btn-block">
        Sign in
      </button>
    </form>
  );
}
