import { useNavigate } from 'react-router-dom'

type ButtonBackProps = {
  url: string
}
export const ButtonBack = ({ url }: ButtonBackProps) => {
  const navigate = useNavigate()
  return (
    <button onClick={() => navigate(url)}>
      <i className='pi pi-angle-left text-secondary/50 text-5xl hover:text-primary' />
    </button>
  )
}
