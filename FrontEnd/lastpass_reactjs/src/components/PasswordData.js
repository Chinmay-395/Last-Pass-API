import React, { Component } from 'react';
import { List, Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;


const PasswordDatas = (props) => {
    return (
        <List
            grid={{
                gutter: 16,
                xs: 1,
                sm: 2,
                md: 4,
                lg: 4,
                xl: 6,
                xxl: 3,
            }}
            pagination={{
                onChange: page => {
                    console.log("This is the page " + page);
                },
                pageSize: 9,
            }}
            dataSource={props.data}
            renderItem={item => (
                <List.Item>
                    {/* <Card title={item.name_of_website}>
                        <h4>username:</h4>
                    </Card> */}
                    <Card
                        style={{ width: 300 }}
                        cover={
                            <img
                                alt="example"
                                /* The image would be static but for now
                                   we can use the default one
                                */
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }
                    /*
                      -- The way I am thinking is that it can be used 
                      -- when the user clicks on edit the card rotates 
                      -- and user can edit those things directly 
                    */
                    // actions={[
                    //     <SettingOutlined key="setting" />,
                    //     <EditOutlined key="edit" />,
                    //     <EllipsisOutlined key="ellipsis" />,
                    // ]}
                    >
                        <Meta
                            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                            title={
                                <a href={`/${item.id}`}>
                                    {item.name_of_website}
                                </a>
                            }
                            description="This is the description"
                        />
                    </Card>
                </List.Item>
            )}
        />
    )
}

export default PasswordDatas


    // <List
    //     grid={{
    //         gutter: 16,
    //         xs: 1,
    //         sm: 2,
    //         md: 4,
    //         lg: 4,
    //         xl: 6,
    //         xxl: 3,
    //     }}
    //     dataSource={data}
    //     renderItem={item => (
    //         <List.Item>
    //             <Card title={item.title}>Card content</Card>
    //         </List.Item>
    //     )}
    // />