const arra: string[] = ['a', 'b']

arra.push('c')

function print(arra: string[]) {
  return `${arra.join(', ')}`
}

console.log(print(arra))
