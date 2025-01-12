// FormVagas.tsx
import { FormEvent, useState } from 'react'
import { StyledForm, StyledInput, StyledButton } from './FormVagas.styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <StyledForm onSubmit={aoEnviarForm}>
      <StyledInput
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <StyledButton type="submit">Pesquisar</StyledButton>
    </StyledForm>
  )
}

export default FormVagas
