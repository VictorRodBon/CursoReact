import './App.css'
import { TwiterFollowCard } from './TwiterFollowCard'

export function App () {
  const formatUserName = (username) => `@${username}`

  // creamos un objeto JSON con los datos y se los pasamso al componente (no es muy buena práctica)
  const victor = { formatUserName, username: 'Victor_Rod_Bonn', name: 'Victor Rodriguez Bon' }

  const users = [
    {
      username: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: true
    },
    {
      username: 'pheralb',
      name: 'Pablo H.',
      isFollowing: false
    },
    {
      username: 'PacoHdzs',
      name: 'Paco Hdez.',
      isFollowing: true
    }
  ]

  return (
    <section className='App'>
      <TwiterFollowCard
        formatUserName={formatUserName}
        username='midudev'
        name='Miguel Ángel Durán'
        initialIsFollowing
      />

      <TwiterFollowCard
        {...victor}
      />

      {/* Renderizamos un array */}
      {/* Indicamos un identificador único en el renderizado */}
      {
                users.map(user => {
                  const { username, name, isFollowing } = user
                  return (
                    <TwiterFollowCard
                      key={username}
                      formatUserName={formatUserName}
                      username={username}
                      initialIsFollowing={isFollowing}
                      name={name}
                    />
                  )
                })
            }
    </section>
  )
}
