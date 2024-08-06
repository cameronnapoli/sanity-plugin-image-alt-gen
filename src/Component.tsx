import {Box, Stack} from '@sanity/ui'
import React from 'react'

interface Props {
  apiKey?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  renderDefault: (props: any) => React.ReactNode
}

const Component: React.FC<Props> = (props) => {
  return (
    <Stack space={3}>
      <Box>{props.renderDefault(props)}</Box>
    </Stack>
  )
}

export function createScopedComponent(apiKey?: string) {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  return function ScopedInputComponent(props: Props) {
    return <Component {...props} apiKey={apiKey} />
  }
}
