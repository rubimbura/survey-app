import InputTextfield from "../components/inputField"
import './index.scss'
import DatePickerComponent from "../components/datePicker"
import SelectField from "../components/selectField"
import PrimaryButton from "../components/button"
import { useState } from 'react'
import moment from "moment"
import HeaderNav from "../components/Header"
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState<any>({
    date: '',
    province: '',
    district: '',
    sector: '',
    name: '',
    age: '',
    gender: '',
    contact: ''
  })

  const handleSubmit = () => {
    if(!values.date){
      return
    }
    if(!values.province){
      return
    }
    if(!values.district){
      return
    }
    if(!values.sector){
      return
    }
    if(!values.village){
      return
    }
    if(!values.name){
      return
    }
    if(!values.age){
      return
    }
    if(!values.gender){
      return
    }
    if(!values.contact){
      return
    }
   
    if(!values.disability){
      return
    }
    if(!values.occupation){
      return
    }
    if(!values.position){
      return
    }
    if(!values.experience){
      return
    }
    if(!values.qualification){
      return
    }
    
    sessionStorage.setItem('requireFields', JSON.stringify(values))
    if(values.occupation === 'cattleFarming'){
      navigate(`/occupation/cattle-farming`)
    }
    if(values.occupation === 'pigFarming'){
      navigate(`/occupation/pig-farming`)
    }
    if(values.occupation === 'goatFarming'){
      navigate(`/occupation/goat-farming`)
    }
    if(values.occupation === 'rabitFarming'){
      navigate(`/occupation/rabbit-farming`)
    }

    if(values.occupation === 'keyInformants'){
    //  navigate(`/occupation/key-informants`)
    }  
    if(values.occupation === 'processingMcc'){
      navigate(`/occupation/milk-processing`)
    }
    if(values.occupation === 'poultryFarming'){
      navigate(`/occupation/poutly-farming`)
    }
  }

  const handleDateChange = (date: any) => {
    setValues({
      ...values,
      date: moment(date.$d).format("DD/MM/YY")
    })
  }

  return (
    <div className="home-page-container">
      <HeaderNav />
      <div style={{ padding: 48 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <DatePickerComponent
            placeholder="Date of interview"
            handleDateChange={handleDateChange}
          />
        </div>
        <div className="row-item-ctn">
          <InputTextfield
            placeholder="Province"
            handleChange={(e: any) => setValues({
              ...values,
              province: e.target.value
            })}
          />
          <InputTextfield
            placeholder="District"
            handleChange={(e: any) => setValues({
              ...values,
              district: e.target.value
            })}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <InputTextfield
            placeholder="Sector"
            handleChange={(e: any) => setValues({
              ...values,
              sector: e.target.value
            })}
          />
          <InputTextfield
            placeholder="Village"
            handleChange={(e: any) => setValues({
              ...values,
              village: e.target.value
            })}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <InputTextfield
            placeholder="Names"
            handleChange={(e: any) => setValues({
              ...values,
              name: e.target.value
            })}
          />
          <InputTextfield
            placeholder="Age"
            handleChange={(e: any) => setValues({
              ...values,
              age: e.target.value
            })}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <InputTextfield
            placeholder="Contact"
            handleChange={(e: any) => setValues({
              ...values,
              contact: e.target.value
            })}
          />
          <SelectField
            placeholder="Gender"
            menuItems={genderArr}
            value={values.gender}
            handleChange={(event: any) => {
              setValues({
                ...values,
                gender: event.target.value,
              })
            }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <SelectField
            placeholder="Level of education"
            menuItems={educationArr}
            value={values.education}
            handleChange={(event: any) => {
              setValues({
                ...values,
                qualification: event.target.value,
              })
            }}
          />
          <SelectField
            placeholder="Disablity"
            menuItems={disablityItems}
            value={values.disability}
            handleChange={(event: any) => {
              setValues({
                ...values,
                disability: event.target.value,
              })
            }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <SelectField
            placeholder="Occupation"
            menuItems={ocupationArr}
            value={values.occupation}
            handleChange={(event: any) => {
              setValues({
                ...values,
                occupation: event.target.value,
              })
            }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <InputTextfield 
            placeholder="What is your position in your business/organization/institution/cooperative" 
            handleChange={(event:any) => 
              setValues({
              ...values,
              position:event.target.value
            })} 
        />
          <InputTextfield 
            placeholder="Number of years involved in mentioned occupation" 
            handleChange={(event:any) => {
              setValues({
                ...values,
                experience:event.target.value
              })
            }} 
          />
        </div>
        <div style={{ display: 'flex', marginLeft: 'auto', width: '30%', marginTop: 30 }}>
          <PrimaryButton onClick={handleSubmit} label="Next" />
        </div>
      </div>
    </div>
  )
}

export default Home



const disablityItems = [
  {
    label: 'Yes',
    id: true
  },
  {
    label: 'No',
    id: false
  }
]

const ocupationArr = [
  {
    label: 'Cattle Farming ',
    id: 'cattleFarming'
  },
  {
    label: 'Pig Farming ',
    id: 'pigFarming'
  },
  {
    label: 'Goat/Sheep Farming',
    id: 'goatFarming'
  },
  {
    label: 'Rabbit Farming ',
    id: 'rabbitFarming'
  },
  {
    label: 'Poultry Farming',
    id: 'poultryFarming'
  },
  { label: 'Processing (MCC) ',
    id: 'processingMcc'
  },
  {
    label: 'Key informants ',
    id: 'keyInformants'
  },
  // {
  //   label: 'Livestock Farming ',
  //   id: 'livestockFarming'
  // },
  // {
  //   label: 'Processing (MCC) ',
  //   id: 'processingMcc'
  // },
  // {
  //   label: 'Key informants ',
  //   id: 'keyInformants'
  // },
  // {
  //   label: 'Processing milk ',
  //   id: 'processingMilk'
  // },
  // {
  //   label: 'Processing meet ',
  //   id: 'processingMeet'
  // },
  // {
  //   label: 'Processing eggs ',
  //   id: 'processingEggs'
  // },
  // {
  //   label: 'Company ',
  //   id: 'company'
  // },
  // {
  //   label: 'Government ',
  //   id: 'government'
  // },
  // {
  //   label: 'Organization ',
  //   id: 'organization'
  // },
]

const educationArr = [
  {
    label: 'No educaion',
    id: 'No'
  },
  {
    label: 'Primary',
    id: 'primary'
  },
  {
    label: 'Secondary',
    id: 'secondary'
  },
  {
    label: 'University ',
    id: 'university'
  },
]

const genderArr = [
  {
    label: 'Male',
    id: 'male'
  },
  {
    label: 'Female',
    id: 'female'
  },
]