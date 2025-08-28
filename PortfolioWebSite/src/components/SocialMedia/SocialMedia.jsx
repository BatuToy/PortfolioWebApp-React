import {Flex} from 'antd'
import React from 'react'
import {FaInstagram, FaX, FaGithub, FaLinkedin} from 'react-icons/fa6'

import './SocialMedia.css'
import {userData} from '../../data/userData'

const SocialMedia = ({about}) => {
    const social = userData.socialMedia;
    return (
        <Flex
            gap={10}
            align='center'
            justify='center'
            className={`grey-bg ${about ? "" : "padding-10"}`}
        >
            <a href={social.linkedIn}><FaLinkedin className='user-icon'/> </a>
            <a href={social.github}><FaGithub className='user-icon'/> </a>
            <a href={social.instagram}><FaInstagram className='user-icon'/> </a>
            <a href={social.twitter}><FaX className='user-icon'/> </a>
        </Flex>
    )
}

export default SocialMedia;