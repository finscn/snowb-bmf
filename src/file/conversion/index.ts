import conversionList from './types'
export { encode } from './types/sbf'

function conversionFile(inputFile: unknown) {
  const conversion = conversionList.find((item) => item.check(inputFile))
  if (!conversion) throw new Error('unknow file')
  return conversion.decode(inputFile)
}

export default conversionFile
