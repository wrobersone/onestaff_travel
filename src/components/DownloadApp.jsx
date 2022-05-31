import React from 'react'
import styled from 'styled-components'
import apple from '../assets/appleStore.png'
import google from '../assets/googlePlay.png'
import screens from '../assets/screens.png'

export default function DownloadApp() {
  return (
    <Section>
        <div className="info">
            <h1>Download Now Travel Community Apps</h1>
            <div className="downloads">
                <img src={apple} alt="" />
                <img src={google} alt="" />

            </div>
        </div>
    </Section>
  )
}

const Section = styled.section`
    
`;