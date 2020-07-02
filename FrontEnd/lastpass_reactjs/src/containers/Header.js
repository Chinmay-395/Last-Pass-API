import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
const { Search } = Input;
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Header className="header">
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Link to="/">Last_Pass_clone</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        CNS_API
                        </Menu.Item>
                    <Menu.Item key="3">About</Menu.Item>
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
        )
    }
}
export default Header