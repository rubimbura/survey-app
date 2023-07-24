import InputTextfield from "../components/inputField.tsx"
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
    names: '',
    age: '',
    gender: '',
    contact: ''
  })

  const handleChange = () => {

  }

  const handleSubmit = () => {
    //${values.occupation}
    navigate(`/occupation/hello`)
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
            placeholder="Names"
            handleChange={(e: any) => setValues({
              ...values,
              names: e.target.value
            })}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <InputTextfield
            placeholder="Age"
            handleChange={(e: any) => setValues({
              ...values,
              age: e.target.value
            })}
          />
          <InputTextfield
            placeholder="Contact"
            handleChange={(e: any) => setValues({
              ...values,
              contact: e.target.value
            })}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
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
          <SelectField
            placeholder="Level of education"
            menuItems={educationArr}
            value={values.education}
            handleChange={(event: any) => {
              setValues({
                ...values,
                education: event.target.value,
              })
            }}
          />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
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
          <InputTextfield placeholder="2.1.	What is your position in your business/organization/institution/cooperative" handleChange={handleChange} />
          <InputTextfield placeholder="2.2.	Number of years involved in mentioned occupation" handleChange={handleChange} />
        </div>
        <div style={{ display: 'flex', marginLeft: 'auto', width: '30%', marginTop: 30 }}>
          <PrimaryButton onClick={handleSubmit} label="Submit" />
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
    label: 'Livestock Farming ',
    id: 'livestockFarming'
  },
  {
    label: 'Processing (MCC) ',
    id: 'processingMcc'
  },
  {
    label: 'Key informants ',
    id: 'keyInformants'
  },
  {
    label: 'Processing milk ',
    id: 'processingMilk'
  },
  {
    label: 'Processing meet ',
    id: 'processingMeet'
  },
  {
    label: 'Processing eggs ',
    id: 'processingEggs'
  },
  {
    label: 'Company ',
    id: 'company'
  },
  {
    label: 'Government ',
    id: 'government'
  },
  {
    label: 'Organization ',
    id: 'organization'
  },
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