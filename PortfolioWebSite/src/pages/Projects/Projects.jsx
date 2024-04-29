import React from 'react'
import { Avatar, Card, Divider, Flex, Progress, Tooltip, Typography , Tag } from 'antd';
import { CiMenuKebab } from 'react-icons/ci'
import PageTitle from '../../components/PageTitle/PageTitle';
import { motion } from 'framer-motion';


import { userData } from '../../data/userData';
const { Title, Text } = Typography;

import './Projects.css';

const Projects = () => {
  const { projects } = userData;
  return (
    <>
      <PageTitle pageTitle=" Project's" />
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='projects'>
        {
          projects.map((project, index) => (
            <Card
              hoverable
              key={index}
              style={{ background: project.bg, flex: 1 }}
            >
              <Flex gap={10} vertical>
                <Flex align='center' justify='space-between'>
                  <Text type='secondary'>{project.startDate}</Text>
                  <CiMenuKebab />
                </Flex>

                <Flex vertical align='center' justify='center'>
                  <Title level={3}>{project.title}</Title>
                  <Text>{project.description}</Text>
                </Flex>

                <Flex vertical>
                  <Text>Progress</Text>
                  <Progress percent={project.progress} status='active' />
                </Flex>

                <Divider />

                <Flex gap={10} justify='space-between' align='center'>
                  <Avatar.Group
                    maxCount={4}
                    maxPopoverTrigger='click'
                    size='large'
                    maxStyle={{
                      color: '#f5ba00',
                      backgroundColor: '#fde3cf',
                      cursor: "pointer",
                    }}
                  >
                    <Tooltip title={userData.name}>
                      <Avatar src={userData.profile} />
                    </Tooltip>
                    <Tooltip title={userData.name}>
                      <Avatar src={userData.profile} />
                    </Tooltip>
                    <Tooltip title={userData.name}>
                      <Avatar src={userData.profile} />
                    </Tooltip>
                  </Avatar.Group>
                  <Tag color={project.color}>{project.time}</Tag>
                </Flex>
              </Flex>
            </Card>
          ))
        }
      </motion.div>
    </>
  )
}

export default Projects;