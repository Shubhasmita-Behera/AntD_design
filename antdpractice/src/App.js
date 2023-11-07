import React from 'react'; 

import { Layout, } from 'antd';
import App2 from './App2'
// import {Row,Col} from 'antd';
const {Header,Footer,Content}=Layout;
function App(){
 
   const headerStyle = {
    textAlign: 'center',
    color: '#fff',
    height: 64,
    lineHeight: '64px',
    backgroundColor: '#7dbcea',
    padding:'50'
  };
  
  const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#108ee9',
  };
  
  const footerStyle = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#7dbcea',
  };
  return (
    <div>
        <Layout>
        <Header style={headerStyle}>
         
          <App2/> 
          <br/>
        </Header>
        <Content style={contentStyle}>
    </Content>
        <Footer style={footerStyle}>
      </Footer>
       </Layout>
    {/* <Row>
      <Col span={12}>col-12</Col>
      <Col span={12}>col-12</Col>
    </Row> */}

      
    </div>
  )
}

export default App