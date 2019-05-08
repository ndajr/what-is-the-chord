import React from 'react'

import styled from 'styled-components/macro'

const StyledStrings = styled.ul`
  position: absolute;
  left: 0;
  top: 19px;
  width: 100%;
  height: 250px;
`

const String = styled.li`
  display: inline-block;
  width: 100%;
  background-color: ${({ theme: { colors } }) => colors.stringBg };
  margin-bottom: 34px;
  border-bottom: 2px solid rgba(149, 137, 99, 0.75);
  box-sizing: border-box;

  &:nth-child(1) {
    height: 3px;
  }
  &:nth-child(2) {
    height: 3px;
  }
  &:nth-child(3) {
    height: 4px;
  }
  &:nth-child(4) {
    height: 5px;
  }
  &:nth-child(5) {
    height: 5px;
  }
  &:nth-child(6) {
    height: 6px;
  }
`

function Strings({ strings }) {
  return (
    <StyledStrings>
			{strings.map((item, i) => <String key={i} />)}
		</StyledStrings>
  )
}

export default Strings