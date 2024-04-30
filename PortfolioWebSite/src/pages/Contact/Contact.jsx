import React from 'react';
import { Button, Form, Input, Flex } from 'antd';
import { FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';
import PageTitle from '../../components/PageTitle/PageTitle';
import './Contact.css';
import { Secrets } from '../../data/Secrets';
import emailjs from '@emailjs/browser';
import { validateEmail, validateMessage, validateName } from '../../Validations/MailValidator';


const Contact = () => {
  const [form] = Form.useForm();

  const sendEmail = (values) => {
    const formEl = form.getFieldsValue(true);
    const templateParams = {
      user_name: formEl.user_name,
      user_email: formEl.user_email,
      message: formEl.message
    };

    emailjs.send(Secrets.SERVICE_ID, Secrets.TEMPLATE_ID, templateParams, Secrets.USER_ID)
      .then((result) => {
          console.log('Email successfully sent!', result.status, result.text);
          alert("Message sent successfully!");
          form.resetFields();
      }, (error) => {
          console.log('Failed to send the email:', error.text);
          alert("Failed to send the message. Please try again.");
      });
  };

  return (
    <>
      <PageTitle pageTitle="Contact Information" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Flex align='center' justify='center'>
          <Form layout='vertical' className='contact-form' form={form} onFinish={sendEmail}>
            <Form.Item label="Full Name" name='user_name' rules={[{ required: true, validator: validateName }]}>
              <Input size='large' placeholder='Enter your name' />
            </Form.Item>
            <Form.Item label="Email" name='user_email' rules={[{ required: true, validator: validateEmail }]}>
              <Input size='large' placeholder='Enter your email' />
            </Form.Item>
            <Form.Item label="Message" name='message' rules={[{ required: true, validator: validateMessage }]}>
              <Input.TextArea style={{ height: "100px" }} size='large' placeholder='Type your message here!' />
            </Form.Item>
            <Button icon={<FiSend />} type='primary' size='large' htmlType="submit">
              Send Message
            </Button>
          </Form>
        </Flex>
      </motion.div>
    </>
  )
}

export default Contact;


