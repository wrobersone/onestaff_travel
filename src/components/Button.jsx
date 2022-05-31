import React from 'react'
import styled from 'styled-components'

function Button({ text }) {
  return (
    <Btn>{text}</Btn>
  )
}

export default Button

const Btn = styled.button`
    padding: 1rem 2rem;
    background-color: var(--primary-color);
    border: none;
    font-size: 1.1rem;
    cursor: pointer;
    color: white;
`;