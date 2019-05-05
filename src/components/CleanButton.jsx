import React from 'react'
import styled from 'styled-components'

const Button = styled.a`
  border-color: ${({ theme: { colors } }) => colors.buttonBorder };
  box-shadow: ${({ theme: { colors } }) => `0 3px 0 ${colors.buttonShadow}` };
  background-color: ${({ theme: { colors } }) => colors.buttonBg };
  color: ${({ theme: { colors } }) => colors.white01 };
  font-weight: bold;
  transition: background .7s ease;
  position: relative;
  cursor: pointer;
  display: inline-block;
  margin: 3px 0;
  padding: 12px 16px;
  text-transform: uppercase;
  font-size: 15px;
  text-decoration: none;
  top: 0;

  &:active {
    top: 3px;
    box-shadow: none;
  }
`

function CleanButton() {
  function cleanNotes(e) {
    e.preventDefault()
    console.log('Button clicked')
  }

  return (
    <div className="row--sm-right">
      <Button href="#clean" onClick={cleanNotes}>Clean chord</Button>
    </div>
  )
}

export default CleanButton