import React from 'react';
import styled from 'styled-components';
import SidebarItem from '../SidebarItem/SidebarItem';
export type SidebarProps = {

}
function Sidebar({}:SidebarProps){
    return <SidebarWrapper>
        <div className="logo">G-logger</div>
        <Menu>
            <SidebarItem icon='dashboard' text='Dashboard' to='/'/>
            <SidebarItem icon='logs' text='Logs' to='/Logs'/>
            <SidebarItem icon='flask' text='Lab' to='/Lab'/>
            <SidebarItem icon='settings' text='Settings' to='/Settings'/>
            
        </Menu>
    </SidebarWrapper>
}
const SidebarWrapper = styled.div`
    flex:1;
    .logo{
        font-weight:bold;
        font-size:1.5rem;
    }
`
const Menu = styled.ul`
    margin-left:-1rem;
    list-style:none;
    padding:0;
    margin-top:5.265rem
`
export default Sidebar;

