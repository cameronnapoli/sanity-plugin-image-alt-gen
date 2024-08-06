import {Box, Stack} from '@sanity/ui'
import React from 'react'

interface Props {
  apiKey?: string
}

const Component: React.FC<Props> = () => {
  return (
    <Stack space={3}>
      <Box>Hey, I&apos;m a custom input component!</Box>
    </Stack>
  )
}

export function createScopedComponent(apiKey?: string) {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return function ScopedInputComponent(props: Props) {
    return <Component {...props} apiKey={apiKey} />
  }
}
