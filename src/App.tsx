import React from 'react';
import AppLayout from './components/AppLayout';
import Sidebar from './components/Sidebar';
// styled-components 에서 Global style 설정하는 법 찾아 볼 것
import styled from 'styled-components';

function App() {
  return (
    <>
      <AppLayout>
        <AppLayout.SideLayout>
          
          <Sidebar />
        </AppLayout.SideLayout>
        <AppLayout.MainLayout>main</AppLayout.MainLayout>
          
      </AppLayout>
      {/* <Global /> */}
    </>
  );
}


export default App;
