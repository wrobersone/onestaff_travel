import React, { useState } from 'react'
import styled from 'styled-components'
import hero from '../../assets/hero.png'
import Button from '../Button';

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
                <Button text='Plan Your Trip' />
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
                        <label>Price Range</label>
                        <input type="text" value={value} onChange={e=> setValue(e.target.value)} />
                    </div>
                    <div className="row">
                        <Button text='Discover More' />
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
            height: 80vh;
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
            background-color: white;
            padding: 2rem;
            box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            form {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 3rem;
                .row {
                    display: flex;
                    flex-direction: column;
                    text-align: start;
                    label {
                        font-size: 0.7rem;
                        color: var(--secondary-text);
                    }
                    input, select {
                        border: none;
                        width: 100%;
                        color: var(--primary-color);
                        margin-top: 0.5rem;
                        background-color: white;
                        font-size: 1.1rem;
                        border-bottom: 1px solid #f88f4d;
                        padding-bottom: 0.3rem;
                    }
                    input:focus {
                        outline: none;
                    }
                    input[type='date']::-webkit-calendar-picker-indicator {
                        cursor: pointer;
                        filter: invert(58%) sepia(69%) saturate(2588%) hue-rotate(325deg) brightness(105%) contrast(101%);
                    }
                }
            }
        }
    }
    @media screen and (min-width: 280px) and (max-width: 1080px) {
        .background {
            img {
                height: 40vh;
            }
        }
        .content {
            .info {
                margin-left: 2rem;
                h1 {
                    font-size: 2rem;
                    margin-bottom: 1rem;
                }
            }
            .planner {
                position: initial;
                margin: 2rem;
                form {
                    flex-direction: column;
                    align-items: flex-start;
                }
            }
        }
    }
`;