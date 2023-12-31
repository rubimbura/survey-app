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

  const [errors, setError] = useState<any>({})
  const [helperText, setHelperText] = useState<any>({})

  const handleSubmit = () => {
    // if(!values.date){
    //   setError({
    //     ...errors,
    //     date:true
    //   })
    //   setHelperText({
    //     ...errors,
    //     date:'This field is required'
    //   })
    //   return
    // }
    // if(!values.province){
    //   setError({
    //     ...errors,
    //     province:true
    //   })
    //   setHelperText({
    //     ...errors,
    //     province:'This field is required'
    //   })
    //   return
    // }
    // if(!values.district){
    //   setError({
    //     ...errors,
    //     district:true
    //   })
    //   setHelperText({
    //     ...errors,
    //     district:'This field is required'
    //   })
    //   return
    // }
    // if(!values.sector){
    //   setError({
    //     ...errors,
    //     sector:true
    //   })
    //   setHelperText({
    //     ...errors,
    //     sector:'This field is required'
    //   })
    //   return
    // }
    // if(!values.village){
    //   setError({
    //     ...errors,
    //     village:true
    //   })
    //   setHelperText({
    //     ...errors,
    //     village:'This field is required'
    //   })
    //   return
    // }
    // if(!values.name){
    //   setError({
    //     ...errors,
    //     name:true
    //   })
    //   setHelperText({
    //     ...errors,
    //     name:'This field is required'
    //   })
    //   return
    // }
    // if(!values.age){
    //   setError({
    //     ...errors,
    //     age:true
    //   })
    //   setHelperText({
    //     ...errors,
    //     age:'This field is required'
    //   })
    //   return
    // }
    // if(!values.gender){
    //   setError({
    //     ...errors,
    //     gender:true
    //   })
    //   setHelperText({
    //     ...errors,
    //     gender:'This field is required'
    //   })
    //   return
    // }
    // if(!values.contact){
    //   setError({
    //     ...errors,
    //     contact:true
    //   })
    //   setHelperText({
    //     ...errors,
    //     contact:'This field is required'
    //   })
    //   return
    // }
   
    // if(!values.disability){
    //   setError({
    //     ...errors,
    //     disability:true
    //   })
    //   setHelperText({
    //     ...errors,
    //     disability:'This field is required'
    //   })
    //   return
    // }
    // if(!values.occupation){
    //   setError({
    //     ...errors,
    //     occupation:true
    //   })
    //   setHelperText({
    //     ...errors,
    //     occupation:'This field is required'
    //   })
    //   return
    // }
    // if(!values.position){
    //   setError({
    //     ...errors,
    //     position:true
    //   })
    //   setHelperText({
    //     ...errors,
    //     position:'This field is required'
    //   })
    //   return
    // }
    // if(!values.experience){
    //   setError({
    //     ...errors,
    //     experience:true
    //   })
    //   setHelperText({
    //     ...errors,
    //     experience:'This field is required'
    //   })
    //   return
    // }
    // if(!values.qualification){
    //   setError({
    //     ...errors,
    //     qualification:true
    //   })
    //   setHelperText({
    //     ...errors,
    //     qualification:'This field is required'
    //   })
    //   return
    // }
    // setError({})
    // setHelperText({})
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
    if(values.occupation === 'rabbitFarming'){
      navigate(`/occupation/rabbit-farming`)
    }

    if(values.occupation === 'keyInformants'){
     navigate(`/occupation/key-informants`)
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
      <div style={{ padding: 32 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <DatePickerComponent
            placeholder="Date of interview"
            handleDateChange={handleDateChange}
            required={true}
            error={errors.date}
            errorText={helperText.date}
          />
        </div>
        <div className="row-item-ctn">
          <InputTextfield
            placeholder="Province"
            handleChange={(e: any) => setValues({
              ...values,
              province: e.target.value
            })}
            required={true}
            error={errors.province}
            errorText={helperText.province}
          />
          <InputTextfield
            placeholder="District"
            handleChange={(e: any) => setValues({
              ...values,
              district: e.target.value
            })}
            error={errors.district}
            errorText={helperText.district}
          />
        </div>
        <div className="row-item-ctn">
          <InputTextfield
            placeholder="Sector"
            handleChange={(e: any) => setValues({
              ...values,
              sector: e.target.value
            })}
            error={errors.sector}
            errorText={helperText.sector}
          />
          <InputTextfield
            placeholder="Village"
            handleChange={(e: any) => setValues({
              ...values,
              village: e.target.value
            })}
            error={errors.village}
            errorText={helperText.village}
          />
        </div>
        <div className="row-item-ctn">
        <InputTextfield
            placeholder="Names"
            handleChange={(e: any) => setValues({
              ...values,
              name: e.target.value
            })}
            error={errors.name}
            errorText={helperText.name}
          />
          <InputTextfield
            placeholder="Age"
            handleChange={(e: any) => setValues({
              ...values,
              age: e.target.value
            })}
            error={errors.age}
            errorText={helperText.age}
          />
        </div>
        <div className="row-item-ctn">
        <InputTextfield
            placeholder="Contact"
            handleChange={(e: any) => setValues({
              ...values,
              contact: e.target.value
            })}
            error={errors.contact}
            errorText={helperText.contact}
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
        <div className="row-item-ctn">
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
        <div className="row-item-ctn">
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
        <div className="row-item-ctn">
          <InputTextfield 
            placeholder="What is your position in your business/organization/institution/cooperative" 
            handleChange={(event:any) => 
              setValues({
              ...values,
              position:event.target.value
            })} 
            error={errors.position}
            errorText={helperText.position}
        />
          <InputTextfield 
            placeholder="Number of years involved in mentioned occupation" 
            handleChange={(event:any) => {
              setValues({
                ...values,
                experience:event.target.value
              })
            }} 
            error={errors.experience}
            errorText={helperText.experience}
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