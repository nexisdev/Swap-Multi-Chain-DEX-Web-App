import { useLocation } from "react-router";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";

function MenuItems() {
  const { pathname } = useLocation();

  return (
    <Menu
      theme="light"
      mode="horizontal"
      style={{
        display: "flex",
        fontSize: "14px",
        fontWeight: "400",
        width: "100%",
        justifyContent: "left",
        position: "left",
      }}
      defaultSelectedKeys={[pathname]}
    >
      <Menu.Item key="/1inch">
        <NavLink to="/1inch">Swap</NavLink>
      </Menu.Item>
      <Menu.Item key="onramp">
        <NavLink to="/onramp">Fiat</NavLink>
      </Menu.Item>
      <Menu.Item key="/erc20balance">
        <NavLink to="/erc20balance">Balances</NavLink>
      </Menu.Item>
      <Menu.Item key="/erc20transfers">
        <NavLink to="/erc20transfers">Transfers</NavLink>
      </Menu.Item>
      <Menu.Item key="/nftBalance">
        <NavLink to="/nftBalance">NFTs</NavLink>
      </Menu.Item>
    </Menu>
  );
}

export default MenuItems;
