import { Layout, Menu } from 'antd';
import { NavLink } from 'react-router-dom';

const { Header } = Layout;

const Navigation = () => {
  return (
    <Header className='header'>
      <div className='logo' />
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
        <Menu.Item key='1'>
          <NavLink exact to='/'>
            All
          </NavLink>
        </Menu.Item>
        <Menu.Item key='2'>
          <NavLink exact to='/continents'>
            Continents
          </NavLink>
        </Menu.Item>
        <Menu.Item key='3'>
          <NavLink exact to='/countries'>
            Countries
          </NavLink>
        </Menu.Item>
        <Menu.Item key='4'>
          <NavLink exact to='/usa'>
            USA
          </NavLink>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navigation;
