import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()
  const goAbout = () => {
    // navigate('/about?id=1&name=weijian', {replace: true}) // replace是不保存历史记录
    navigate('/about/123/wiejian')
  }

  return (
    <button onClick={goAbout}>点击跳转About</button>
  )
}

export default Login