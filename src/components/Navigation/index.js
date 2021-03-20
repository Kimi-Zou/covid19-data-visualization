import { Layout, Menu } from 'antd';
const { Header } = Layout;

const Navigation = () => {
  return (
    <Header className='header'>
      <div className='logo' />
      <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
        <Menu.Item key='1'>All</Menu.Item>
        <Menu.Item key='2'>Continents</Menu.Item>
        <Menu.Item key='3'>Countries</Menu.Item>
        <Menu.Item key='4'>USA</Menu.Item>
      </Menu>
    </Header>
  );
};

export default Navigation;
