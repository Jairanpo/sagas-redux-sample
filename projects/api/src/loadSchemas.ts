import fs from 'fs'
import path from 'path'

const PATH_TO_SCHEMAS = path.join(process.cwd(), 'src', 'schemas')

function readFile(filename: string): Promise<string> {
  const pathToFile = path.join(PATH_TO_SCHEMAS, filename)
  return new Promise((resolve, reject) => {
    fs.readFile(pathToFile, 'utf-8', (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(data)
    })
  })
}

function listSchemas(): Promise<string[]> {
  return new Promise((resolve, reject) => {
    fs.readdir(PATH_TO_SCHEMAS, (err, listOfFiles) => {
      if (err) {
        throw err
      }
      resolve(listOfFiles)
    })
  })
}

function readFiles(listOfSchemas: string[]): Promise<string>[] {
  return listOfSchemas.map((filename) => {
    return readFile(filename)
  })
}

export default async function loadSchemas() {
  const listOfSchemas = await listSchemas()
  const fileReadPromises = readFiles(listOfSchemas)

  const schemaData = await Promise.all(fileReadPromises)

  return schemaData
}

