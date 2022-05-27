import React, { useState } from 'react'
import styled from 'styled-components'
import hero from '../../assets/hero.png'

export default function Home() {
    const [value, setValue] = useState('$5000 - $10000');
  return (
    <Section>
        <div className="background">
            <img src={hero} alt="" />
        </div>
        <div className="content">
            <div className="info">
                <h1>It's Time</h1>
                <h1>Explore The World</h1>
                <button>Plan Your Trip</button>
            </div>
            <div className="planner">
                <form>
                    <div className="row">
                        <label>Destinations</label>
                        <select>
                            <option>Arab Egypt</option>
                            <option>Udaipur India</option>
                        </select>
                    </div>
                    <div className="row">
                        <label>Check In</label>
                        <input type="date" />
                    </div>
                    <div className="row">
                        <label>Check In</label>
                        <input type="text" value={value} onChange={e=> setValue(e.target.value)} />
                    </div>
                    <div className="row">
                        <button>Discover More</button>
                    </div>
                </form>
            </div>
        </div>
    </Section>
  )
}

const Section = styled.section`
    margin-top: 2rem;
    position: relative;
    .background {
        img {
            height: 90vh;
            width: 100%;
        }
    }
    .content {
        .info {
            position: absolute;
            top: 5rem;
            margin-left: 8rem;
            h1 {
                font-size: 5rem;
                margin-bottom: 2rem;
            }
        }
        .planner {
            position: absolute;
            bottom: -2rem;
            right: 0;
        }
    }
`;