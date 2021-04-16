import styled from 'styled-components';

type AppLayoutProps = {
    children : React.ReactNode
}

export default function AppLayout({children}:AppLayoutProps){
    return <div>{children}</div>
}


type SideLayoutProps = {
    children:React.ReactNode;
}
function SideLayout({children}:SideLayoutProps){
    return <Side>{children}</Side>
}

AppLayout.SideLayout = SideLayout;
const Side = styled.aside`
    display:flex;
    width: 16.25rem;
    height:100%;
    position:fixed;
    padding-top:3rem;
    padding-left:3rem;
    padding-bottom:3rem;
`
type MainLayoutProps = {
    children:React.ReactNode;
}
function MainLayout({children}:MainLayoutProps){
    return <Main>
                <ContentWrapper>
                {children}    
                </ContentWrapper>
           </Main>
}
AppLayout.MainLayout = MainLayout;

const Main = styled.main`
    
    margin-left:16.25rem;
    padding-left:2rem;
    padding-top:3rem;
    padding-left:3rem;
    padding-bottom:3rem;
    height:100%;
` 
const ContentWrapper = styled.div`
    padding-left:2rem;
    padding-right:2rem;
    
`

type FooterLayoutProps = {
    children:React.ReactNode;
}

function FooterLayout({ children }:FooterLayoutProps){
    return <Footer>{children}</Footer>
}

AppLayout.FooterLayout = FooterLayout;
const Footer = styled.footer`
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    height:1rem;
    background:black;
`