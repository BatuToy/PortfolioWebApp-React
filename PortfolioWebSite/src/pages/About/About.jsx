import React from 'react';
import { Flex, Typography } from 'antd';
import { FaGlobe, FaLocationDot, FaMessage, FaPhone } from 'react-icons/fa6';
import { motion } from 'framer-motion';

import PageTitle from '../../components/PageTitle/PageTitle';
import SocialMedia from '../../components/SocialMedia/SocialMedia';
import Skills from '../../components/Skills/Skills';

import { userData } from '../../data/userData';
import './About.css'

const { Title, Text, Paragraph } = Typography;
const About = () => {
  const { education } = userData;
  return (
    <>
      <PageTitle pageTitle="About Me" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Flex gap={20} vertical>
          <Flex
            gap={20}
            align='center'
            className='grey-bg padding-10 user-personel'>
            <img
              src={userData.profile}
              alt={userData.name}
              className='user-image' />
            <Flex vertical gap={30}>
              <Flex gap={10} vertical className="user-details">
                <Title level={1} strong type='secondary'>
                  {userData.name}
                </Title>
                <Text strong type='secondary'>
                  {userData.role}
                </Text>
              </Flex>

              <SocialMedia about={true} />
            </Flex>
          </Flex>
          <Flex gap={10} className='about-details'>
            <Flex vertical gap={10} className='grey-bg padding-10'>
              <Skills />
              <Flex vertical gap={10} className='padding-10'>
                <Flex align='center' gap={10} >
                  <FaPhone className='about-icon' />
                  <Text>{userData.phone}</Text>
                </Flex>
                <Flex align='center' gap={10} >
                  <FaMessage className='about-icon' />
                  <Text>{userData.mail}</Text>
                </Flex>
                <Flex align='center' gap={10} >
                  <FaLocationDot className='about-icon' />
                  <Text>{userData.adress}</Text>
                </Flex>
                <Flex align='center' gap={10} >
                  <FaGlobe className='about-icon' />
                  <Text>{userData.website}</Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex vertical gap={10} className='grey-bg padding-10'>
              <Text type='secondary' strong>
                About
              </Text>
              <Paragraph>{userData.about}</Paragraph>
            </Flex>
          </Flex>
          <Flex vertical className='padding-10 grey-bg'>
            <Text type='secondary' strong>
              Education
            </Text>
            <Flex gap={5} vertical className='padding-10'>
              {
                education.map((education, index) => (
                  <Flex
                    key={index}
                    gap={10}
                    align='center'
                    justify='space-between'
                    wrap='wrap'>
                    <Flex gap={10}>
                      <Text strong>{education.university}</Text>
                      <Text type='secondary'>{education.degree}</Text>
                    </Flex>
                    <Text strong type='secondary' italic>{education.duration}</Text>
                  </Flex>
                ))
              }
            </Flex>
          </Flex>
        </Flex>
      </motion.div>
    </>
  )
}

export default About;