import React,{useState} from 'react'; 
import App2 from './App2';
import  './App.css';
import { Menu,Layout} from 'antd';
import { Header,Footer,Content } from 'antd/es/layout/layout';
import {HomeOutlined,UserOutlined,WifiOutlined,SettingOutlined} from '@ant-design/icons';
import{ Routes,Route} from 'react-router-dom';
import Home from './Routes/Home';
import UserProfile from './Routes/UserProfile';
import WifiSettings from './Routes/WifiSettings';

function App(){
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
    icon:<SettingOutlined/>
    }]
    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };
  
  return (
    <div>
      
      <Layout>
      <Header id ="header"><Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" theme="dark" items={items}/>
      
     </Header>
      <Content id="content">
      <App2/>
       </Content>
      <Footer id ="footer">Thankyou For Connecting!!</Footer>
          </Layout>
          <Routes>
        <Route path='/'element={<Home />} />
        <Route path='/userprofile'element={<UserProfile />} />
        <Route path='/wifiPlan'element={<WifiSettings />} />
      
      </Routes> 
          
    </div>
  )
}

export default App