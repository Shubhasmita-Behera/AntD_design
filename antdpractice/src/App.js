import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, Layout } from 'antd';
import { Header, Footer, Content } from 'antd/es/layout/layout';
import { HomeOutlined, UserOutlined, WifiOutlined, SettingOutlined } from '@ant-design/icons';
import Home from './Routes/Home';
import UserProfile from './Routes/UserProfile';
import WifiSettings from './Routes/WifiSettings';
import Loginform from './Loginfile'


function App() {
 
    const items =[
      {
          label: 'Home',
          key: 'home',
          icon:<HomeOutlined/>,
          path:'/Home'
        
      },
      {
          label:'UserProfile',
          key:'user',
          icon: <UserOutlined/>,
          path:'/UserProfile',
  
         
      },
      {
        label:'WiFi Plans',
        key:'wifi',
        icon:<WifiOutlined/>,
        path:'/wifiPlan'
        },
      {
      label:'Settings',
      key:'settings',
      icon:<SettingOutlined/>,
      path:'/setting'
      }];

  const [current, setCurrent] = useState('mail');
  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <Router>
      <Layout>
        <Header>
          <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" theme="dark">
            {items.map(item => (
              <Menu.Item key={item.key}>
                <Link to={item.path}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Header>
        <Content>
          <Routes>
            <Route path='/Home' element={<Home />} />
            <Route path='/UserProfile' element={<UserProfile />} />
            <Route path='/wifiPlan' element={<WifiSettings />} />
           
          </Routes>
          <Loginform/>
        </Content>
        <Footer>Thank you For Connecting!</Footer>
      </Layout>
    </Router>
  );
}

export default App;
