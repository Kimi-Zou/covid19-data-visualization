import { Button, Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Redirect, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';

import './App.css';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function App () {
  return (
    <div className='App'>
      <Layout>
        <Navigation />
        <Layout>
          <Sidebar />
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              className='site-layout-background'
              style={{
                margin: 0,
                minHeight: 'calc(100vh - 88px)'
              }}
            >
              Content
              <Switch>
                <Route exact path='/'>
                  {/* <Home /> */}
                </Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
