type User = {
  name: string
  last: string
  age?: number //opcional
}

const talles: User = {
  name: 'Talles',
  last: 'Souza',
  age: 22
}

// Union type
// | operador ou em type alias

type LogLevel = 'info' | 'error' | 'debug'

function logMsg(message: string, level: LogLevel) {
  console.log(`[${level}] - ${message}`)
}

logMsg(`Minha msg`, 'info')

// Intercection type: &

type About = {
  bio: string
  int: string[]
}
type Profile = User & About
const fullUser: Profile = {
  name: 'Talles',
  last: 'Souza',
  bio: 'Um cara legal',
  int: ['', '']
}
