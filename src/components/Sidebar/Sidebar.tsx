import React from 'react';
import styled from 'styled-components';
import SidebarItem from '../SidebarItem/SidebarItem';
export type SidebarProps = {

}
function Sidebar({}:SidebarProps){
    return <SidebarWrapper>
        <div className="logo">G-logger</div>
        <Menu>
            <SidebarItem icon='dashboard' text='Dashboard' />
            <SidebarItem icon='flask' text='Lab' />
            <SidebarItem icon='settings' text='Setting' />
            
        </Menu>
    </SidebarWrapper>
}
const SidebarWrapper = styled.div`
    flex:1;
    .logo{
        font-weight:bold;
        font-size:1.5remhttps://iconmonstr.com/gear-2-svg/;
    }
`
const Menu = styled.ul`
    margin-left:-1rem;
    list-style:none;
    padding:0;
    margin-top:5.265rem
`
export default Sidebar;

