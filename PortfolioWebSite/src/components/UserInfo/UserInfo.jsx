import React from 'react'
import { Flex, Typography } from 'antd';
import './UserInfo.css'
import { userData } from '../../data/userData';

const { Title, Text } = Typography;

const UserInfo = () => {
  return (
    <Flex align='center' vertical gap={20}>
      <img src={userData.profile} alt={userData.name} className='user-image' />
      <Flex align='center' vertical>
        <Title level={1} strong type='secondary'>
          {userData.name}
        </Title>
        <Text strong type='secondary'>{userData.role}</Text>
      </Flex>
    </Flex>
  )
}

export default UserInfo