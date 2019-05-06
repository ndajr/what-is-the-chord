import React from 'react'
import styled from 'styled-components'

const Output = styled.div`
  margin-top: 15px;
  margin-bottom: 120px;
`

function ChordBoard({ children }) {
  const Notes = children[0]
  const Chord = children[1]
  const CleanButton = children[2]

  return (
    <Output>
      <div className="container">
        <div className="row row--xs-center row--1-2 row--pad">
          <div className="row__col row__xs-12">
            <div className="row row--1">
              <div className="row__col">
                { Notes }
              </div>
              <div className="row__col">
                { Chord }
              </div>
            </div>
          </div>
          <div className="row__col row__xs-12">
            { CleanButton }
          </div>
        </div>
      </div>
    </Output>
  )
}

export default ChordBoard
