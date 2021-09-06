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
    // const res = await axios.post(
    //   "https://dev-dl.tdcx.com:3092/login",
    //   {
    //     headers: headers,
    //   },
    //   {
    //     name: "Authorization",
    //     apiKey: "qW1hrT2",
    //   }
    // );
    // store.dispatch(hideLoading());
    // if (res?.data) {
    //   store.dispatch(login(res.data));
    //   history.push("/dashboard");
    // }

    history.push("/dashboard"); //temp
  }

  return (
    <div className="inner">
      <form role="form" class="form-horizontal" onSubmit={LoginBtn}>
        <div class="login">Log in</div>

        <div className="form-group">
          <input
            type="text"
            class="input"
            className="form-control"
            placeholder="Enter id"
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            class="input"
            className="form-control"
            placeholder="Enter name"
          />
        </div>

        <div class="container">
          <div class="row">
            <div class="col text-center">
              <button type="submit" class="btn btn-default">
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
