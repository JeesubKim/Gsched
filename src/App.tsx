import React from 'react';
import AppLayout from './components/AppLayout';
import Sidebar from './components/Sidebar';
// styled-components 에서 Global style 설정하는 법 찾아 볼 것
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Logs from './pages/Logs';
import Lab from './pages/Lab';
import Settings from './pages/Settings';
function App() {
  return (
    <>
      <AppLayout>
        <AppLayout.SideLayout>
          
          <Sidebar />
        </AppLayout.SideLayout>
        <AppLayout.MainLayout>
          
            <Switch>
              <Route path={['/', 'Dashboard']} exact>
                <Dashboard />
              </Route>
              <Route path='/Logs'>
                <Logs />
              </Route>
              <Route path='/Lab'>
                <Lab />
              </Route>
              <Route path='/Settings'>
                <Settings />
              </Route>
            </Switch>
         
        </AppLayout.MainLayout>
          
      </AppLayout>
      {/* <Global /> */}
    </>
  );
}


export default App;
