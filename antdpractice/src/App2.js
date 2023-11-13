import React,{useState} from 'react';
import { MailOutlined, FacebookOutlined,WhatsAppOutlined } from '@ant-design/icons';
import {Menu,Layout,Button,Form,Input,Row,Col,message} from 'antd';
import { Header,Footer } from 'antd/es/layout/layout';


import './App2.css';
function App2 (){
const items =[
    {
        label: 'login',
        key: 'mail',
        icon:<MailOutlined/>,
      
    },
    {
       
       
    },
    {
    label:'Facebook',
    key:'telegram',
    icon:<FacebookOutlined/>
    },
    {
      label:'WhatsappWeb',
      key:'QR',
      icon:<WhatsAppOutlined />
    }

]
const [messageApi, contextHolder] = message.useMessage();
const success = () => {
  messageApi.open({
    type: 'success',
    content: 'This is a success message',
  });}

    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };
    const onFinish = (values) => {
      console.log('Success:', values);
     
    };
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
    return (
    <div>
      {contextHolder}
       <Row justify="center" align="middle" style={{ minHeight: '100vh' }}>
       
      <Col span={8}>
      <Layout>
        <Header>
          <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" theme="dark" items={items}>
          
          </Menu></Header>
          
          <Form name="form1"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish} //will be invoked on form submit
          onFinishFailed={onFinishFailed}
          style={{ margin:'auto',padding: '5px', border: '1px solid #d9d9d9', borderRadius: '4px' }}>
      
          <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item> 
    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>
    <br/>
    <Form.Item>
      
      <Button type="primary" htmlType="submit"onClick={success}>
        Submit
      </Button>
      
    </Form.Item>
  
          </Form>
         <Footer style={{textAlign:'center',marginTop:'auto'}}>
          Forgot Password <p>Don't have an account??Create a New account</p>
         </Footer>
          </Layout>
          </Col>
          </Row>
          </div>
          );
  };
export default App2;