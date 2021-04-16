import React from 'react';
import AppLayout from './components/AppLayout';
import Sidebar from './components/Sidebar';
// styled-components 에서 Global style 설정하는 법 찾아 볼 것

import { createGlobalStyle } from 'styled-components'
import { Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Schedule from './pages/Schedule';
import Requirement from './pages/Requirement';
import Test from './pages/Test';
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
              <Route path='/Schedule'>
                <Schedule />
              </Route>
              <Route path='/Requirement'>
                <Requirement />
              </Route>
              <Route path='/Test'>
                <Test />
              </Route>
              <Route path='/Settings'>
                <Settings />
              </Route>
            </Switch>
         
        </AppLayout.MainLayout>
        <AppLayout.FooterLayout>footer</AppLayout.FooterLayout>
      </AppLayout>
      <GlobalStyle />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  
  html, body {
    height:100%;
  }
`


export default App;
