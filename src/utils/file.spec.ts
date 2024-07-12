import { extractFilename } from './file'

describe('extractFilename', () => {
  test('should extract the filename without extension', () => {
    const str = 'path/to/file.txt'
    const expected = 'file'
    const actual = extractFilename(str)
    expect(actual).toEqual(expected)
  })

  test('should handle a filename without a path', () => {
    const str = 'path/to/file'
    const expected = 'file'
    const actual = extractFilename(str)
    expect(actual).toEqual(expected)
  })

  test('should handle a filename without a path', () => {
    const str = 'file.txt'
    const expected = 'file'
    const actual = extractFilename(str)
    expect(actual).toEqual(expected)
  })

  test('should handle a filename with multiple dots', () => {
    const str = 'path/to/file.name.with.multiple.dots.txt'
    const expected = 'file.name.with.multiple.dots'
    const actual = extractFilename(str)
    expect(actual).toEqual(expected)
  })
})
