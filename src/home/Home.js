import React, {useState} from 'react';
import { Layout, Menu, Breadcrumb, Button, Avatar, Badge, Carousel  } from 'antd';
import { ArrowDownOutlined, CaretDownFilled, SearchOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';

import HomeContent from './HomeContent';

import Logo from '../assets/logo.jpg';

const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

const Home = () => {

    const [current, setCurrent] = useState('');

    return (
        <Layout className="layout" style={{backgroundColor: 'white', padding: '0px'}}>
            <div 
                style={{ padding: '5px 20px', display: 'flex', justifyContent: 'flex-end'}}
            >
                <Breadcrumb separator="|">
                    <Breadcrumb.Item>(972)-445-3322</Breadcrumb.Item>
                    <Breadcrumb.Item href="">Offers</Breadcrumb.Item>
                    <Breadcrumb.Item>English</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{marginLeft: '10px'}}>
                    <Avatar size="small" icon={<UserOutlined />} />
                    {/* <UserOutlined /> */}
                </div>
            </div>
            <Header style={{ backgroundColor: '#F8F8F8', marginBottom: '5px'}}>
            {/* <div style={{ display: 'flex', justifyContent: 'space-between'}}> */}
                <Menu mode="horizontal" onClick={e => setCurrent(e.key)} selectedKeys={[current]} style={{ backgroundColor: '#F8F8F8'}}>
                    <Menu.Item key="0">
                    <img 
                        src="https://lh4.googleusercontent.com/jktKdBvIeIvFJUFlJtNt-TDhErXze93JNJnVXtzIQgp3ijDBf22fSDNwhxxLXBtMDawPltn5VlNmfX8MI1pQomsZOlve5lk_o5jUvWE" 
                        style={{height: '60px'}}
                        alt="img" 
                    />
                    </Menu.Item>
                    <Menu.Item style={{ float: 'right'}}>
                    <Avatar size='medium' icon={<SearchOutlined />} />
                    {/* <Badge count={3}> */}
                        <Avatar size='medium' style={{ marginLeft: '10px'}} icon={<ShoppingCartOutlined />} />
                    {/* </Badge> */}
                    </Menu.Item>
                    <Menu.Item key="5" style={{ float: 'right'}}>Contact</Menu.Item>    
                    <SubMenu key="4" style={{ float: 'right'}} icon={<CaretDownFilled />} title="Sourcing">
                        <Menu.ItemGroup title="Item 3">
                            <Menu.Item key="setting:31">Option 1</Menu.Item>
                            <Menu.Item key="setting:32">Option 2</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <SubMenu key="3" style={{ float: 'right'}} icon={<CaretDownFilled />} title="Marketing">
                        <Menu.ItemGroup title="Item 2">
                            <Menu.Item key="setting:21">Option 1</Menu.Item>
                            <Menu.Item key="setting:22">Option 2</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <SubMenu key="2" style={{ float: 'right'}} icon={<CaretDownFilled />} title="Products">
                        <Menu.ItemGroup title="Item 1">
                            <Menu.Item key="setting:11">Option 1</Menu.Item>
                            <Menu.Item key="setting:12">Option 2</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item key="1" style={{ float: 'right'}} >Home</Menu.Item>
                </Menu>
            {/* </div> */}
                
            </Header>
            <Content>
                <HomeContent />
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}

export default Home;