import React from 'react'
import { Container } from '../components/Grid'
import Header from '../components/Header'
import Guitar from './Guitar'
import ChordBoard from './ChordBoard'

const APP_NAME = "What is the chord"

const Main = () => (
  <Container>
    <Header title={APP_NAME}/>
    <Guitar />
    <ChordBoard />
  </Container>
)

export default Main
