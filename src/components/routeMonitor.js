/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useRouteMatch, useLocation } from 'react-router-dom';

import { setLoginState } from '../store/slice/accountSlice';

const routeMonitor = () => {
  // Redux
  const isLogin = useSelector(state => state.account.isLogin);
  const dispatch = useDispatch();

  /*
    useParams 可以取得巢狀路由內子層的 router name
    （只僅限於監聽這個 Hooks 被呼叫的 component 所在的位置）
   */
  const { id } = useParams();

  /*
    useRouteMatch 可以取得 Route Component 設定的 Pathname 和 urlname (網址上的 pathname)
    （只僅限於監聽這個 Hooks 被呼叫的 component 所在的位置）
   */
  const { path, url } = useRouteMatch();

  /*
    useLocation 可以取得目前頁面的 hash, pathname (網址上的), search (query string), state
   */
  const location = useLocation();

  const handleLogin = () => {
    const result = !isLogin;
    dispatch(setLoginState(result));
  }

  return (
    <div>
      <p><label>ID:</label> { id }</p>
      <p><label>Path:</label> { path }, <label>URL:</label> { url }</p>
      <p><label>Location Hash:</label> { location.hash }</p>
      <p><label>Location Pathname:</label> { location.pathname }</p>
      <p><label>Location Search:</label> { location.search }</p>
      <p><label>Location State:</label> { location.state }</p>
      <p><label>Login Status:</label> { isLogin ? 'true' : 'false' }</p>
      <div><button onClick={() => { handleLogin() }}>Login</button></div>
    </div>
  )
};

export default routeMonitor;
