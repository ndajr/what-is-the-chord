import React from 'react'
import Body from './Body'
import Frets from './Frets'
import Dots from './Dots'
import Strings from './Strings'
import Notes from './Notes'
import Chord from './Chord'
import CleanButton from './CleanButton'

import styled from 'styled-components'

const Main = styled.form`
  margin: 35px 0 30px;
  overflow-x: auto;
`

const Output = styled.div`
  margin-top: 15px;
  margin-bottom: 120px;
`

const GuitarNeck = styled.div`
  width: 100%;
  height: 250px;
  background-color: ${({ theme: { colors } }) => colors.guitarNeck };
  box-shadow: ${({ theme: { boxShadow } }) => boxShadow.body };
  position: relative;
`
const HeaderTitle = styled.div`
  padding: 0 20px;
`

function Container() {
  return (
    <div class="box">
      <div class="container">
        <div class="row row--center row--pad">
          <HeaderTitle>
            <h1>What Is The Chord</h1>
          </HeaderTitle>
        </div>
        <main>
          <Main>
            <div className="container-hard row">
              <div className="row--relative">
                <GuitarNeck>
                  <Frets />
                  <Dots />
                  <Strings />
                </GuitarNeck>

                <Body />
              </div>
            </div>
          </Main>
          <Output>
            <div className="container">
            <div className="row row--xs-center row--1-2 row--pad">
              <div className="row__col row__xs-12">
                <div className="row row--1">
                  <div className="row__col">
                    <Notes />
                  </div>
                  <div className="row__col">
                    <Chord />
                  </div>
                </div>
              </div>
              <div className="row__col row__xs-12">
                <CleanButton />
              </div>
            </div>
          </div>
        </Output>
      </main>
      </div>
    </div>
  )
}

export default Container
