import React,{useState} from 'react'; 
import App2 from './App2';
import  './App.css';
import { Menu,Layout} from 'antd';
import { Header,Footer,Content } from 'antd/es/layout/layout';
import {HomeOutlined,UserOutlined,WifiOutlined,SettingOutlined} from '@ant-design/icons';
import{Router,Routes,Route} from 'react-router-dom';


function App(){
  const items =[
    {
        label: 'Home',
        key: 'home',
        icon:<HomeOutlined/>,
      
    },
    {
        label:'User',
        key:'user',
        icon: <UserOutlined/>,
       
    },
    {
      label:'WiFi Plans',
      key:'wifi',
      icon:<WifiOutlined/>
      },
    {
    label:'Settings',
    key:'settings',
    icon:<SettingOutlined/>
    }]
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };
  
  return (
    <div>
      <Routes></Routes>
      <Layout>
      <Header id ="header"><Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" theme="dark" items={items}/></Header>
      <Content id="content">
      <App2/> </Content>
      <Footer id ="footer">Thankyou For Connecting!!</Footer>
        
          </Layout>  
    </div>
  )
}

export default App