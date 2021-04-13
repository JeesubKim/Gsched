import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import GIcon, { GIconType } from "../GIcon/GIcon";

export type SidebarItemProps = {
    icon : GIconType;
    text : string;
    to : string;
}

function SidebarItem({ icon, text, to} : SidebarItemProps){
    return <ListItem>
        <StyledLink to={to} exact>
            <GIcon name={icon} />
            <span>{text}</span>
        </StyledLink>
        
    </ListItem>
}
const StyledLink = styled(NavLink)`
    display:flex;
    align-items:center;
    border-radius:0.5rem;
    height:3.75rem;
    padding-left:1rem;
    padding-right:1rem;
    margin-top:.5rem;
    margin-bottom:.5rem;
    text-decoration:none;
    color:black;
    &.active {
        background:lightgrey;
        font-weight:bold;
        
    }

    &:hover{
        background: lightgrey;
    }
    svg{
        color:black;
        height:1.75rem;
        width:1.75rem;
    }
    span{
        font-size:1.125rem;
        margin-left:1rem;
    }
`;
const ListItem = styled.li`
    
`
export default SidebarItem;