import InputTextfield from "../components/inputField"
import './index.scss'
import PrimaryButton from "../components/button"
import { useState } from 'react'
import HeaderNav from "../components/Header"
import { useNavigate } from 'react-router-dom'
import RadioButton from "../components/radioButton"
import CheckboxComponent from "../components/checkbox"
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import axios from 'axios'



const MilkProcessing = () => {

  const navigate = useNavigate()
  const [values, setValues] = useState<any>({})
  const [checkedItems, setCheckedItems] = useState(false)
  const [disabled, setDisabled] = useState(false)


  const handletechnicalContraintsChange = (id: any) => {
    //@ts-ignore
    mccTechnicalContraintsArr[id].isSelected = !mccTechnicalContraintsArr[id].isSelected
    setCheckedItems(!checkedItems)
  }

  const handleSubmit = () => {

    const mccTechnicalContraints = []
    if(values.technicalContraintOther){
      mccTechnicalContraints.push(values.technicalContraintOther)
      delete values.technicalContraintOther
    }

    const mccHiringRequirements = []
    if(values.hiringRequirements1){
      mccHiringRequirements.push(values.hiringRequirements1)
      delete values.hiringRequirements1
    }
    if(values.hiringRequirements2){
      mccHiringRequirements.push(values.hiringRequirements2)
      delete values.hiringRequirements2
    }
    if(values.hiringRequirements3){
      mccHiringRequirements.push(values.hiringRequirements3)
      delete values.hiringRequirements3
    }


    const mccHiringPositions = []
    if(values.hiringPositions1){
      mccHiringPositions.push(values.hiringPositions1)
      delete values.hiringPositions1
    }
    if(values.hiringPositions3){
      mccHiringPositions.push(values.hiringPositions2)
      delete values.hiringPositions3
    }
    if(values.hiringPositions3){
      mccHiringPositions.push(values.hiringPositions3)
      delete values.hiringPositions3
    }

    const savedItem =  sessionStorage.getItem('requireFields') || ''
    const formattedData = JSON.parse(savedItem)
    const payload = {
      ...values,
      mccHiringPositions,
      mccHiringRequirements,
      mccTechnicalContraints,
      ...formattedData
  }

  const url = 'https://survey-app-heroku-4b2ea8ed2f87.herokuapp.com/information'
  axios.post(url, payload)
    .then((response: any) => {
      console.log('Post successful:', response);
    setDisabled(false)
    navigate('/success')
    sessionStorage.removeItem('requireFields')
    })
    .catch((error:any) => {
      console.error('Error posting data:', error);
    setDisabled(false)
    });

  }

  return(
    <div className="home-page-container">
      <HeaderNav />
      <div style={{padding: 48}}>
      <div className="separator-container">
          <InputTextfield placeholder="Name of the MCC/ Milk Processing unit" handleChange={(event: any) =>
            setValues({
              ...values,
              mccProccessingUnitName: event.target.value
            })} />
        </div>

        <div className="separator-container">
          <InputTextfield type="number" placeholder="How many staff/workers do you have?" handleChange={(event: any) =>
            setValues({
              ...values,
              mccStaffNumber: event.target.value
            })} />
        </div>

        <div className="separator-container">
          <InputTextfield type="number" placeholder="4.3.	What is the average quantity of milk per day do you receive/process?" handleChange={(event: any) =>
            setValues({
              ...values,
              mccMilkAverage: event.target.value
            })} />
        </div>

        <div className="separator-container">
          <FormGroup>
            <FormLabel id="demo-row-radio-buttons-group-label">What are the main skills/ technical constraints that may affect your poultry production according to you? Tick all those you face.</FormLabel>
            {mccTechnicalContraintsArr.map((el: any, idx: any) => {
              if (el.isSelected === undefined) {
                el.isSelected = false
              }
              return (
                <div style={{ display: 'flex', alignItems: 'center' }} onClick={() => handletechnicalContraintsChange(idx)}>
                  <CheckboxComponent
                    checked={el.isSelected}
                  />
                  <FormLabel id="demo-row-radio-buttons-group-label">{el.label}</FormLabel>
                </div>
              )
            })}
          </FormGroup>
          <InputTextfield placeholder="other" handleChange={(event: any) => setValues({ ...values, technicalContraintOther: event.target.value })} />
        </div>

        <div className="separator-container">
            <RadioButton label="Do you have persons with disabilities working in your farm?" 
            items={truthItems}
            handleChange={(event: any)=> setValues({...values, hasMccPersonWithDisability:event.target.value})}
        />
        </div>

        <div className="separator-container">
          <InputTextfield type="number" placeholder="How many?" handleChange={(event: any) => setValues({...values, mccPersonWithDisability: event.target.value})}/>
        </div>

        <div className="separator-container">
            <RadioButton label="Do you plan for expanding your business/poultry farming?" 
            items={truthItems}
            handleChange={(event: any)=> setValues({...values, hasMccExpansionPlanning:event.target.value})}
        />
        </div>

        <div className="separator-container">
            <RadioButton label="Do you plan to recruit new farm workers/staff?" 
            items={truthItems}
            handleChange={(event: any)=> setValues({...values, hasMccRecruitmentPlanning:event.target.value})}
        />
        </div>

        <div className="separator-container">
            <RadioButton label="If yes, are there any specific requirements do you ask before hiring her/his?" 
            items={truthItems}
            handleChange={(event: any)=> setValues({...values, hasMccHiringRequirement:event.target.value})}
        />
        </div>

        <div className="separator-container">
          <FormGroup>
            <FormLabel id="demo-row-radio-buttons-group-label">If yes, give example of 3 challenges?</FormLabel>
            <br/>
            <InputTextfield placeholder="Example one" handleChange={(event: any) => setValues({ ...values, hiringRequirements1: event.target.value })} />
            <InputTextfield placeholder="Example two" handleChange={(event: any) => setValues({...values, hiringRequirements2: event.target.value})}/>
            <InputTextfield placeholder="Example three" handleChange={(event: any) => setValues({...values, hiringRequirements3: event.target.value})}/>
          </FormGroup>
        </div>

        <div className="separator-container">
          <FormGroup>
            <FormLabel id="demo-row-radio-buttons-group-label">In which areas do you plan to hire/recruit new farm workers/staff: Give names of positions</FormLabel>
            <br/>
            <InputTextfield placeholder="Example one" handleChange={(event: any) => setValues({ ...values, hiringPositions1: event.target.value })} />
            <InputTextfield placeholder="Example two" handleChange={(event: any) => setValues({...values, hiringPositions2: event.target.value})}/>
            <InputTextfield placeholder="Example three" handleChange={(event: any) => setValues({...values, hiringPositions3: event.target.value})}/>
          </FormGroup>
        </div>

        <div style={{ display: 'flex', marginLeft: 'auto', width: '30%', marginTop: 30 }}>
          <PrimaryButton disabled={disabled} onClick={handleSubmit} label="Submit" />
        </div>

      </div>
    </div>
  )
}

export default MilkProcessing


const mccTechnicalContraintsArr = [
  {
      label: 'Lack of skilled/ competent farm workers (milk quality controllers, products…)',
      id: 'Lack of skilled/ competent farm workers (milk quality controllers, products…)'
    },
    {
      label: 'Lack of/ limited skills in acquiring capital, record keeping and making cost-benefit analysis',
      id:   'Lack of/ limited skills in acquiring capital, record keeping and making cost-benefit analysis'
    },
    {
      label: 'Lack of/ limited skills in creating linkage to the Markets',
      id: 'Lack of/ limited skills in creating linkage to the Markets'
    },
    {
      label: 'Lack of skills on best good practices in milk handling, hygiene',
      id: 'Lack of skills on best good practices in milk handling, hygiene'
    },
]

const truthItems =  [
  {
    label: 'Yes',
    id:true
  },
  {
    label: 'No',
    id:false
  },
]
