import React from 'react'
import { useStateValue } from '../redux';
import { UPDATE_NOTES } from '../redux/actions'
import bodyData from '../data/body'
import styled from 'styled-components/macro'
import { Container, Row } from '../components/Grid'
import Body from '../components/Body'
import Frets from '../components/Frets'
import Dots from '../components/Dots'
import Strings from '../components/Strings'

const Main = styled(Container)`
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

const Wrapper = ({ children }) => (
  <Main hard>
    <Row relative>
      {children}
    </Row>
  </Main>
)


function GuitarContainer() {
  const [, dispatch] = useStateValue()
  
  const NUMBER_FRETS = 13
  const NUMBER_STRINGS = 6
  const frets = [...Array(NUMBER_FRETS).keys()]
  const strings = [...Array(NUMBER_STRINGS).keys()]

  const parseNotes = el => {
    window.onload = () => {
      el.addEventListener('change', () => {
        dispatch({ type: 'GET_CHORD_TONIC' })
        return dispatch({ type: UPDATE_NOTES })
      })
    }
  }

  return (
    <Wrapper>
      <GuitarNeck>
        <Frets frets={frets}/>
        <Dots frets={frets}/>
        <Strings strings={strings}/>
      </GuitarNeck>
  
      <Body bodyData={bodyData} parseNotes={parseNotes} />
    </Wrapper>
  )
}

export default GuitarContainer
