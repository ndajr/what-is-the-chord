import React from 'react'
import styled from 'styled-components'

const Main = styled.form`
  margin: 35px 0 30px;
  overflow-x: auto;
`

const GuitarNeck = styled.div`
  width: 100%;
  height: 250px;
  background-color: ${({ theme: { colors } }) => colors.guitarNeck };
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow.body };
  position: relative;
`

function Guitar({ children }) {
  const Frets = children[0]
  const Dots = children[1]
  const Strings = children[2]
  const Body = children[3]

  return (
    <Main>
      <div className="container-hard row">
        <div className="row--relative">
          <GuitarNeck>
            { Frets }
            { Dots }
            { Strings }
          </GuitarNeck>

          { Body }
        </div>
      </div>
    </Main>
  )
}

export default Guitar
