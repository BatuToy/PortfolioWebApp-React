import React from 'react';
import { Button, Flex } from 'antd';
import { FaDownload } from 'react-icons/fa6';
import UserInfo from '../UserInfo/UserInfo';
import Skills from '../Skills/Skills';
import SocialMedia from '../SocialMedia/SocialMedia';
import cv from '../../assets/Batuhan|Toy|Cv.pdf';


import './ProfileCard.css';
const ProfileCard = () => {
  return (
    <Flex align='center' vertical gap={15} className='profile-card'>
      <UserInfo />
      <Skills />
      <SocialMedia />

      <Button 
          icon= {<FaDownload/>} 
          size='large' 
          type='primary' 
          className='user-btn'
          href={cv} download>
            Download Cv
        </Button>
    </Flex>
  )
}

export default ProfileCard;