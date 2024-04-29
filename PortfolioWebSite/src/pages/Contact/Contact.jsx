import React from 'react'
import { Button, Form, Input, Flex } from 'antd';
import { FiSend } from 'react-icons/fi'
import { motion } from 'framer-motion';
import PageTitle from '../../components/PageTitle/PageTitle';
import './Contact.css';
const Contact = () => {
  return (
    <>
      <PageTitle pageTitle="Contact Information" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Flex align='center' justify='center'>
          <Form layout='vertical' className='contact-form' >
            <Form.Item label="Full Name">
              <Input size='large' placeholder='Enter your name' />
            </Form.Item>
            <Form.Item label="Email">
              <Input size='large' placeholder='Enter your email' />
            </Form.Item>
            <Form.Item label="Message">
              <Input style={{ height: "100px" }} size='large' placeholder='Type your message here!' />
            </Form.Item>
            <Button icon={<FiSend />} type='primary' size='large'>
              Send Message
            </Button>
          </Form>
        </Flex>
      </motion.div>
    </>
  )
}

export default Contact