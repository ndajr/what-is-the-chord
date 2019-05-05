import React from 'react'

const strings = [...Array(6).keys()]

function Strings() {
  return (
    <ul className="strings">
			{strings.map( item => <li></li> )}
		</ul>
  )
}

export default Strings