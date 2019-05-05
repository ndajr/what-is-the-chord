import React from 'react'

function CleanButton() {
  function cleanNotes(e) {
    e.preventDefault()
    console.log('Button clicked')
  }

  return (
    <div className="row--sm-right">
      <a href="#clean" onClick={cleanNotes} className="btn" id="js-clean">Clean chord</a>
    </div>
  )
}

export default CleanButton