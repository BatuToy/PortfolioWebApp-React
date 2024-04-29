import { Flex, Typography } from 'antd'
import React from 'react'
import './PageTitle.css';

const {Title} = Typography;
const PageTitle = ({pageTitle}) => {
  return (
    <Flex 
    align='center'
    justify='center'
    className='grey-bg padding-10 page-title-container'>
        <Title level={3} strong type='secondary' className='page-title'>{pageTitle}</Title>
    </Flex>
  )
}

export default PageTitle;