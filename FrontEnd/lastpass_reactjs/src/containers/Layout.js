//React & Redux imports
import React, { Component } from 'react';
import axios from 'axios';
import { Link, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
//Ant design imports
import { Layout, Menu, Breadcrumb } from 'antd';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Input } from 'antd';
const { Header, Content, Sider } = Layout;
const { Search } = Input;

class CustomLayout extends React.Component {
    render() {
        return (
            <Layout>
                <Header className="header">
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Link to="/">Last_Pass_clone</Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            CNS_API
                        </Menu.Item>
                        <Menu.Item key="3">About</Menu.Item>

                    </Menu>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
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
                            }} class="content">
                                {/* {this.props.children} */}
                                <h3>Hidden Leaf Village</h3>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </Layout >
        );
    }
}
export default CustomLayout;
