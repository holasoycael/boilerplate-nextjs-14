'use client'

import { useState } from 'react'
import Make from 'make-currency'

// contexts
import OverloadProvider from 'contexts/Overload'

// components JSX
import Overload from 'components/Overload'

// styles
import StyledToastContainer from 'styles/toastify'

// types and interfaces
import type { PropsWithChildren, TOverload } from 'typings/App'

// global css imports from lib
import 'react-toastify/dist/ReactToastify.css'
import 'react-tooltip/dist/react-tooltip.css'
import 'simplebar-react/dist/simplebar.min.css'

const BRL = Make.TYPES.BRL
Make.CONFIGURE({ money: BRL })

function QuickStartProvider({ children }: PropsWithChildren) {
  const [overload, setOverload] = useState<TOverload>({})

  return (
    <OverloadProvider {...{ overload, setOverload }}>
      {children}
      <Overload />
      <StyledToastContainer />
    </OverloadProvider>
  )
}

export default QuickStartProvider
