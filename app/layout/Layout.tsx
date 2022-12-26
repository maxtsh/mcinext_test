import { Outlet } from "react-router-dom";
import { Container } from "./Layout.styles";

const Layout: React.FC = () => {
  return (
    <Container>
      <aside className="sidebar">
        <img
          src="/public/images/mcin_logo.svg"
          className="sidebar__logo"
          alt="sidebar_logo"
        />
        <h2 className="sidebar__title">Sample Sidebar</h2>
      </aside>
      <div className="content">
        <header className="content__header">
          <h1 className="content__header__title">
            Welcome to interpol red notices
          </h1>
          <img
            src="/public/images/avatar.png"
            className="content__header__avatar"
            alt="loggedin_avatar"
          />
        </header>
        <main className="content__body">
          <Outlet />
        </main>
      </div>
    </Container>
  );
};

export default Layout;
