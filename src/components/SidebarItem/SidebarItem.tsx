import styled from 'styled-components';
import GIcon, { GIconType } from "../GIcon/GIcon";

export type SidebarItemProps = {
    icon : GIconType;
    text : string
}
function SidebarItem({ icon, text} : SidebarItemProps){
    return <ListItem>
        <GIcon name={icon} />
        <span>{text}</span>
    </ListItem>
}

const ListItem = styled.li`
    display:flex;
    align-items:center;
    border-radius:0.5rem;
    height:3.75rem;
    padding-left:1rem;
    padding-right:1rem;
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
`
export default SidebarItem;