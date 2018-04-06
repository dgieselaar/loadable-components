import { transform } from 'babel-core'
import { join } from 'path'
import { readdirSync, statSync, readFileSync } from 'fs'

const FIXTURE_PATH = join(__dirname, '__fixtures__/babel')

const testFolders = readdirSync(FIXTURE_PATH).filter(file =>
  statSync(join(FIXTURE_PATH, file)).isDirectory(),
)

function testPlugin(code, filename) {
  const result = transform(code, {
    babelrc: false,
    presets: ['react'],
    plugins: [require.resolve('./babel.js')],
    filename,
  })

  return result.code
}

describe('babel', () => {
  testFolders.forEach(folderName => {
    const actual = readFileSync(
      join(FIXTURE_PATH, folderName, 'actual.js'),
      'utf8',
    )
    const expected = readFileSync(
      join(FIXTURE_PATH, folderName, 'expected.js'),
      'utf8',
    )

    it(`works with ${folderName}`, () => {
      const result = testPlugin(actual, `${folderName}/actual.js`)
      expect(result.trim()).toBe(expected.trim())
    })
  })
})
