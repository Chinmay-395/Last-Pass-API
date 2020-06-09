//React imports
import React, { Component } from 'react';
//Ant design imports
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Input } from 'antd';
//custom imports
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const { Search } = Input;

const CustomLayout = (props) => {
    return (
        <Layout>
            <Header className="header">
                <div className="logo">
                    {/* This is where Logo goes */}
                </div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    {/* 
                        -- we can also add a property in the above Menu component
                        -- called ``` defaultOpenKeys={['sub1']} ``` which will
                        -- by default set the 'Demo-login' but I will wait unitll
                        -- I finish watching the authentication video lec in 
                        -- DJ-React by Just-Django
                    */}
                    <Menu.Item key="1">Last_Pass_clone</Menu.Item>
                    <Menu.Item key="2">CNS_API</Menu.Item>
                    {/* 
                        -- For the time being API page would same as provided 
                        -- by django-rest-framework But I will build a
                        -- frontend for API-page similar to
                        -- spotify-developer-api 
                    */}
                    <Menu.Item key="3">About</Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="Authentications" style={{ 'float': "right" }}>
                        <Menu.Item key="1">Demo-Login</Menu.Item>
                        <Menu.Item key="2">Sign in</Menu.Item>
                        <Menu.Item key="3">Sign up</Menu.Item>
                    </SubMenu>
                    <div className="search-bar">
                        <Search
                            placeholder="input search text"
                            enterButton="Search"
                            size="large"
                            onSearch={value => console.log(value)}
                        />
                    </div>
                </Menu>

            </Header>
            <Layout>
                <Sider width={200} className="site-layout-background">
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        // defaultOpenKeys={['sub1']}
                        style={{ height: '100%', borderRight: 0 }}
                    >
                        <Menu.Item key="1">All</Menu.Item>
                        <Menu.Item key="2">Website</Menu.Item>
                        <Menu.Item key="3">Password</Menu.Item>
                        <Menu.Item key="4">Notes</Menu.Item>
                        <Menu.Item key="5">Addressess</Menu.Item>
                        <Menu.Item key="6">Payment Cards</Menu.Item>
                        <Menu.Item key="7">Bank Account</Menu.Item>
                        <Menu.Item key="8">Passport</Menu.Item>
                        <Menu.Item key="9">Wifi-password</Menu.Item>

                        {/* <SubMenu key="sub1" icon={<UserOutlined />} title="Websites">
                            <Menu.Item key="1">option1</Menu.Item>
                            <Menu.Item key="2">option2</Menu.Item>
                            <Menu.Item key="3">option3</Menu.Item>
                            <Menu.Item key="4">option4</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                            <Menu.Item key="5">option5</Menu.Item>
                            <Menu.Item key="6">option6</Menu.Item>
                            <Menu.Item key="7">option7</Menu.Item>
                            <Menu.Item key="8">option8</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                            <Menu.Item key="9">option9</Menu.Item>
                            <Menu.Item key="10">option10</Menu.Item>
                            <Menu.Item key="11">option11</Menu.Item>
                            <Menu.Item key="12">option12</Menu.Item>
                        </SubMenu> */}
                    </Menu>
                </Sider>
                <Layout style={{ padding: '0 24px 24px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content className="site-layout-background"
                        style={{ padding: 24, margin: 0, minHeight: 280, }}
                    >
                        <div style={{
                            background: '#fff', padding: 24,
                            minHeight: 280
                        }}>
                            {props.children}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}
export default CustomLayout;
