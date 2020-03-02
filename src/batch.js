import globby from 'globby'
import {promises as fs} from 'fs'
import {handle} from './utils/promise.js'

const {readFile} = fs
export const batch = async program => {
  const glob = program.files || 'src/**/*spec.js|**/*test.js'
  const paths = await globby(glob)

  for (const path of paths) {
    readFile(path)
    const [data, err] = await handle(readFile(path))
    console.log(data)
  }
}
