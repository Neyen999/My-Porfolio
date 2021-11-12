import React from 'react'

export const Notes = ({ linkTo, noteTitle }) => {
  return (
    <article className="article--container">
      <a href={linkTo} target="_blank" rel="noreferrer">
        <h2 className="article--title">{noteTitle}</h2>
      </a>
    </article>
  )
}
