import React from 'react';
import { PoweroffOutlined, DownloadOutlined } from '@ant-design/icons';
import { Button, Flex} from 'antd';
import Icon from "@ant-design/icons";

function ButtonProperty(){
 
  const size = 'large';
  return (
   <>
   <h4>Size,Shape and Icon  prpoperty of Button</h4>
   <Flex gap="small" align="center" wrap="wrap">
     <Button type="primary" shape="circle" icon={<DownloadOutlined/>} size={size} />
      <Button type="primary" icon={<DownloadOutlined/>} size={size}>Download</Button>
        <br />
        <Button.Group size={size}>
          <Button type="primary">
            {/* <Icon type="left" />*/}
            Backward 
          </Button>
          <Button type="primary">
            Forward<Icon type="right" />
          </Button>
         </Button.Group>
    </Flex>
    <h4>loading prpoperty of Button</h4>
      <Flex gap="small" align="center" wrap="wrap">
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size={size} shape="circle" loading>
          Loading
        </Button>
        <Button type="primary" icon={<PoweroffOutlined />} loading />
      </Flex>
     
    <h4>Ghost Property of Button</h4>
     <Flex wrap="wrap" gap="small" className="site-button-ghost-wrapper">
     <Button  primary ghost>
       Primary
     </Button>
     <Button default ghost>Default</Button>
     <Button  dashed ghost>
       Dashed
     </Button>
     <Button danger ghost>
       Danger
     </Button>
   </Flex>
 
 </>     
  );
  
};
export default ButtonProperty;