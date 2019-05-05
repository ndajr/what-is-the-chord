import React from 'react'

const dots = ['empty', 'empty', 'empty', 'dot', 'empty', 'dot', 'empty', 'dot', 'empty', 'dot', 'empty', 'empty', 'double-dot']

function Dots() {
  return (
		<div className="dots">
			<div className="row row--1-13">
				{dots.map(item => 
					<div className="row__col">
						<div className={item}></div>
					</div>
				)}
			</div>
		</div>
  )
}

export default Dots