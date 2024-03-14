// styles
import * as S from './styles'

// types and interfaces
import { SwitchProps } from './types'

const Switch = ({ checked, label, onClick, isDisabled }: SwitchProps) => {
  return (
    <S.Wrapper>
      <S.Status
        type="checkbox"
        readOnly
        isDisabled={isDisabled ?? false}
        checked={isDisabled ? false : checked}
      />
      <S.Label
        useMargin={!!label}
        isDisabled={isDisabled ?? false}
        {...(onClick ? { onClick } : {})}
      >
        {label}
      </S.Label>
    </S.Wrapper>
  )
}

export default Switch
