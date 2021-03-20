import { Layout } from 'antd';
import { Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import All from './components/All';
import Continents from './components/Continents';
import Countries from './components/Countries';
import USA from './components/USA';
import './App.css';

const { Content } = Layout;

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
              <Switch>
                <Route exact path='/'>
                  <All />
                </Route>
                <Route exact path='/continents'>
                  <Continents />
                </Route>
                <Route exact path='/countries'>
                  <Countries />
                </Route>
                <Route exact path='/usa'>
                  <USA />
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
