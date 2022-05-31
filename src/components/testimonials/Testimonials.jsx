import React from 'react'
import styled from 'styled-components'
import testimonial1 from '../../assets/testimonial1.png'
import testimonial2 from '../../assets/testimonial2.png'
import avatar from '../../assets/avatar.png'

export default function Testimonials() {
  return (
    <Section id='blog'>
      <div className="title">
        <h1>What our Happy Customers Say About Us</h1>
      </div>
      <div className="testimonials">
        <div className="testimonial-image-one">
          <img src={testimonial1} alt="" />
        </div>
        <div className="testimonial">
          <div className="title">
            <div className="image">
              <img src={avatar} alt="avatar" />
            </div>
            <div className="info">
              <h3>Kevin Shields</h3>
              <span>Full Stack Developer</span>
            </div>
          </div>
          <p className='description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil labore eos sit ab omnis quam quo aspernatur ea, earum quis, repellat dicta consectetur excepturi accusantium officia accusamus autem expedita voluptatum!</p>
        </div>
        <div className="testimonial-image-two">
          <img src={testimonial2} alt="testimonial" />
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
    .title {
      display: flex;
      justify-content: center;
      h1 {
        text-align: center;
        font-size: 2rem;
        width: 30%;
      }
    }
    .testimonials {
      display: flex;
      gap: 4rem;
      .testimonial {
        margin-top: 4rem;
        padding: 4rem 3rem;
        height: max-content;
        display: flex;
        flex-direction: column;
        gap: 2rem;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        border-top: 0.5rem solid var(--primary-color);
        .title {
          display: flex;
          gap: 1rem;
          justify-content: center;
          align-items: center;
          .image {
            img {
              height: 3rem;
            }
          }
          .info {
            span {
              color: var(--primary-color);
            }
          }
        }
        .description {
          font-size: 1.1rem;
          line-height: 1.5rem;
        }
      }
    }
`;