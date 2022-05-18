//tipos de função

function principal(): void {
  console.log('Sem retorno explícito')
}

function neverReturn(): never {
  throw new Error('Loop Infinito ou Errors')
}
