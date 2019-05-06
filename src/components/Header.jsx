import React from 'react'
import styled from 'styled-components'

const HeaderTitle = styled.div`
  padding: 0 20px;
`

function Header({ title }) {
  return (
    <div class="row row--center row--pad">
      <HeaderTitle>
        <h1>{ title }</h1>
      </HeaderTitle>
    </div>
  )
}

export default Header
