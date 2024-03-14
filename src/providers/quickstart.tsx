'use client'

import { useState } from 'react'

// contexts
import InitializeProvider from 'contexts/Initialize'

// models
import Customer from 'models/Customer'

// types and interfaces
import type { PropsWithChildren } from 'typings/App'

const QuickStartProvider = ({ children }: PropsWithChildren) => {
  const [workspaceId, setWorkspaceId] = useState(Customer.value)

  return (
    <InitializeProvider {...{ workspaceId, setWorkspaceId }}>
      {children}
    </InitializeProvider>
  )
}

export default QuickStartProvider
