# React Router Practice

我個人的 [react-router](https://reactrouter.com/) 學習與練習紀錄。

## Installation

可以使用 [Create React App](https://github.com/facebook/create-react-app) 搭配 `react-router` 來建立 Single Page Application (SPA)。

**NPM 初始化**

```sh
$ npm init
```

**安裝 Create React App**

```sh
$ npx create-react-app demo-app

$ cd demo-app
```

**安裝 React Router**

```sh
$ npm install react-router-dom
```

## Usage

### Route 配置

在 App Component 那一層，使用 `<Router>` 與 `<Route>` 標籤去設定頁面的 Component 以及其他的路由設定。

```js
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

const app = () => {
  return (
    <Router>
      <div className="container">
        <Redirect to="/" />
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/about" component={ About } />
          <Route path="/about/:id" component={ About } />
          <Route path="/shop" component={ Shop } />
        </Switch>
      </div>
    </Router>
  );
};
```

### Link 配置

使用 `<Link>` 標籤配置 Router Link。

```js
import { Link } from 'react-router-dom';

const menu = () => {
  return (
    <nav className="menu">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/about/aaa">About(aaa)</Link>
      <Link to="/shop">Shop</Link>
    </nav>
  );
};
```

### Hooks 說明

#### Route

`<Route>` 的 `exact` 屬性被添加，代表他是固定的 pathname，子路由被添加時會視為不同的 Router。

#### Redirect

`<Redirect>` 是設定重新導向的頁面，當單純的調整 URL 改變時，改變 Hash 並不會重新導向，但是 Query 會。

#### useParams

useParams 可以取得巢狀路由內子層的 router name，只僅限於監聽這個 Hooks 被呼叫的 component 所在的位置。

```js
// app.js
<Route path="/about/:id" component={ About } />

// about.js
import { useParams } from 'react-router-dom';

const { id } = useParams();
```

在 about component 呼叫 useParams 可以取得子路由的 Router Name。

#### useRouteMatch

useRouteMatch 可以取得 Route Component 設定的 Pathname 和 urlname (網址上所顯示的 pathname)，只僅限於監聽這個 Hooks 被呼叫的 component 所在的位置。

```js
import { useRouteMatch } from 'react-router-dom';

const { path, url } = useRouteMatch();
```

- path：在 Route Component 屬性上設定的 Path Name
- url：在網址上所顯示的 Path Name

#### useLocation

useLocation 可以取得目前頁面的各項 Router 數據。

```js
import { useLocation } from 'react-router-dom';

const location = useLocation();
```

- hash：並不會修飾字串
- pathname：在網址上所顯示的 Path Name
- search：就是 Query String，並不會修飾字串
- state

#### useHistory

useHistory 可以控制路由轉換至對應的頁面。

```js
import { useHistory } from 'react-router-dom';

const about = () => {
  const history = useHistory();

  const goToShopPage = () => {
    history.push('/shop');
  };

  return (
    <div className="content">
      <h1>About</h1>
      <p>this is contnet in about page</p>
      <button onClick={ goToShopPage }>Go To Shop Page</button>
    </div>
  )
};
```
