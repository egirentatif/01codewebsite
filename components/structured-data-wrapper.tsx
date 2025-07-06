import { StructuredData } from './structured-data'

interface StructuredDataProps {
  data: object | object[]
}

export function StructuredDataWrapper({ data }: StructuredDataProps) {
  return <StructuredData data={data} />
}
