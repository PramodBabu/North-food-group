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
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
            <img src={Logo} style={{height: '60px'}} alt="img" />
                <Menu mode="horizontal" onClick={e => setCurrent(e.key)} selectedKeys={[current]} style={{ backgroundColor: '#F8F8F8'}}>
                    <Menu.Item key="1" className="float-right">Home</Menu.Item>
                    <SubMenu className="float-right" key="2" icon={<CaretDownFilled />} title="Products">
                        <Menu.ItemGroup title="Item 1">
                            <Menu.Item key="setting:11">Option 1</Menu.Item>
                            <Menu.Item key="setting:12">Option 2</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <SubMenu className="float-right" key="3" icon={<CaretDownFilled />} title="Marketing">
                        <Menu.ItemGroup title="Item 2">
                            <Menu.Item key="setting:21">Option 1</Menu.Item>
                            <Menu.Item key="setting:22">Option 2</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <SubMenu className="float-right" key="4" icon={<CaretDownFilled />} title="Sourcing">
                        <Menu.ItemGroup title="Item 3">
                            <Menu.Item key="setting:31">Option 1</Menu.Item>
                            <Menu.Item key="setting:32">Option 2</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item className="float-right" key="5">Contact</Menu.Item>    
                    <Avatar size='large' icon={<SearchOutlined />} />
                    <Badge count={3}>
                        <Avatar size='large' style={{ marginLeft: '10px'}} icon={<ShoppingCartOutlined />} />
                    </Badge>
                </Menu>
            </div>
                
            </Header>
            <Content>
                <HomeContent />
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
}

export default Home;