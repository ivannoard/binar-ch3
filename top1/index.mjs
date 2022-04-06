import fs from 'fs'
const createPerson = (person) => {
  fs.writeFileSync('./person.json', JSON.stringify(person))
  return person
}

const Sabrina = createPerson({
  nama: 'ivan',
  umur: 21
})

export default Sabrina