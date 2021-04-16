import React from 'react';
import styled from 'styled-components';
import SidebarItem from '../SidebarItem/SidebarItem';
export type SidebarProps = {

}
function Sidebar({}:SidebarProps){
    return <SidebarWrapper>
        <div className="logo">G-Sched</div>
        <Menu>
            <SidebarItem icon='dashboard' text='Dashboard' to='/'/>
            <SidebarItem icon='schedule' text='Schedule' to='/Schedule'/>
            <SidebarItem icon='requirement' text='Requirement' to='/Requirement'/>
            <SidebarItem icon='test' text='Test' to='/Test'/>
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

