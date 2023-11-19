import React,{useState} from 'react';
import { MailOutlined, FacebookOutlined,WhatsAppOutlined } from '@ant-design/icons';
import {Menu,Layout,Button,Form,Input,Row,Col,message} from 'antd';
import { Header,Footer } from 'antd/es/layout/layout';

import './App2.css';
function Loginform (){
const items =[
    {
        label: 'login',
        key: 'mail',
        icon:<MailOutlined/>,
      
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
    content: 'Logged In Successfully!!',
  });}

    const [current, setCurrent] = useState('mail');
    const onClick = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };
    // const onFinish = (values) => {
    //   console.log('Success:', values);}
    const onFinish = async (values) => {
      try {
        const response = await fetch("http://localhost:8080/username", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
    
        const result = await response.json();
        console.log("the result is",result); // Log or handle the response from the server
    
        // Optionally show a success message or navigate to another page
        success();
      } catch (error) {
        console.error('Error submitting data to server:', error);
      }
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
      
      
      <Form.Item label="Username"
      name="username"rules={[
        {
          required: true,
          message: 'Please input your name!',
        },
      ]} 
    ><Input/></Form.Item>
          
          <Form.Item
      label="G-mailAddress"
      name="mail"
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
export default Loginform;