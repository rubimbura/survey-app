import HeaderNav from "../Header"
import PrimaryButton from "../button"
import { useNavigate } from 'react-router-dom'


const SuccessPage = () => {
  const navigate = useNavigate()
  return(
    <div className="home-page-container">
      <HeaderNav />
      <div style={{padding: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
        <span>Submited Successfully</span>
        <br/>
        <br/>
        <br/>
        <br/>
        <div style={{width: '30%'}}>
          <PrimaryButton label="Home" onClick={() => navigate('/')}/>
        </div>
      </div>
    </div>
  )
}

export default SuccessPage