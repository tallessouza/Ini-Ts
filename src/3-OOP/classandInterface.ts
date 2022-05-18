// classes
class Usuario {
  public nome
  public idade

  constructor(nome: string, idade: number) {
    this.nome = nome
    this.idade = idade
  }
}
// herança
class Player extends Usuario {
  public jogo
  constructor(nome: string, idade: number, jogo: string) {
    super(nome, idade)
    this.jogo = jogo
  }

  qualJogo() {
    return this.jogo
  }
  // static permite invocar funções sem instanciar diretamente através do tipo
  static horasJogadas() {
    return `Milhões`
  }
}

const player = new Player('Talles', 22, 'Devil May Cry')

console.log(player.qualJogo())
// static call
console.log(Player.horasJogadas())

//Escopo

class Jogo {
  // private - dentro da classe nem com herança
  // protected - resolve a herança

  public nome
  constructor(nome: string) {
    this.nome = nome
  }
}

const dmc = new Jogo('DEVELMEICRAI')

interface IJogocomDesc {
  nome: string
  desc: string
  nomeComDesc(): string
}
type IJogocomDesc1 = {
  nome: string
  desc: string
  nomeComDesc(): string
}
type IJogocomDesc2 = {
  nome: string
  desc: string
  nomeComDesc(): string
}

// type intersection
type IJogoCompleto = IJogocomDesc1 & IJogocomDesc2

//implements
class JogoComDesc extends Jogo implements IJogocomDesc {
  public desc
  constructor(nome: string, desc: string) {
    super(nome)
    this.desc = desc
  }
  nomeComDesc(): string {
    return `${this.nome}`
  }
}

const obj: IJogocomDesc = {
  nome: 'a',
  desc: 'desc',
  nomeComDesc() {
    return ``
  }
}
