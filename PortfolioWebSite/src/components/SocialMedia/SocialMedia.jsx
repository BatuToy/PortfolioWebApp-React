import { Flex } from 'antd'
import React from 'react'
import { FaInstagram , FaX , FaGithub , FaLinkedin} from 'react-icons/fa6'

import './SocialMedia.css'
import { userData } from '../../data/userData'

const SocialMedia = ({about}) => {
  return (
    <Flex
      gap={10}
      align='center'
      justify='center'
      className={`grey-bg ${about ? "" : "padding-10"}`}
    >
       <a href={userData.socaialMedia.linkedIn}><FaLinkedin className='user-icon'/> </a>
       <a href={userData.socaialMedia.github}><FaGithub className='user-icon'/> </a>
       <a href={userData.socaialMedia.instagram}><FaInstagram className='user-icon'/> </a>
       <a href={userData.socaialMedia.twitter}><FaX className='user-icon'/> </a>
    </Flex>
  )
}

export default SocialMedia