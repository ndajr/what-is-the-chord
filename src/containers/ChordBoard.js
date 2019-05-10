import React from 'react'
import { useStateValue } from '../redux';
import { CLEAN_NOTES } from '../redux/actions'
import { Container } from '../components/Grid';
import styled from 'styled-components'
import Notes from '../components/Notes'
import Chord from '../components/Chord'
import CleanButton from '../components/CleanButton'

const Output = styled.div`
  margin-top: 15px;
  margin-bottom: 120px;
`

function ChordContainer() {
  const [{ notes }, dispatch] = useStateValue()
  console.log(notes)
  const selectedNotes = notes.filter(note => note !== -1)

  const cleanNotes = () => {
    dispatch({ type: CLEAN_NOTES})
  }

  return (
    <Output>
      <Container>
        <div className="row row--xs-center row--1-2 row--pad">
          <div className="row__col row__xs-12">
            <div className="row row--1">
              <div className="row__col">
                <Notes notes={selectedNotes}/>
              </div>
              <div className="row__col">
                <Chord notes={selectedNotes}/>
              </div>
            </div>
          </div>
          <div className="row__col row__xs-12">
            <CleanButton cleanNotes={cleanNotes}/>
          </div>
        </div>
      </Container>
    </Output>
  )
}

export default ChordContainer
