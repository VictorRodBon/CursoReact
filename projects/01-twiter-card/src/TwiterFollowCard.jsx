import { useState } from 'react'

export function TwiterFollowCard ({ formatUserName, name, username, initialIsFollowing }) {
  // children para pasar como parámetro lo que pongamos dentro del componente (slot de Astro)
  // los por defecto es como en una función en JS

  const state = useState(initialIsFollowing)
  const isFollowing = state[0] // => valor del estado
  const setIsFollowing = state[1] // => función aftualizar estado

  // const [isFollowing, setIsFollowing] = userState(false) // JS indica que la primera posición equivale a la primera constante y el segundo a la segunda

  const text = isFollowing
    ? 'Siguiendo'
    : 'Seguir'

  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button'

  // damos la vuelta al valor del estado
  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <article className='tw-followCard'>
      <header className='tw-followCard-header'>
        <img
          className='tw-followCard-avatar'
          src={`https://unavatar.io/${username}`}
          alt='el avatar de midudev'
        />
        <div className='tw-followCard-info'>
          <strong>{name}</strong>
          <span className='tw-followCard-infoUserName'>{formatUserName(username)}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}
