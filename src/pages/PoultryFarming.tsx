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


const PoultryFarming = () => {
  
  const navigate = useNavigate()
  const [values, setValues] = useState<any>({})
  const [other, setOther] = useState<any>({})
  const [checkedItems, setCheckedItems] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const handletechnicalContraintsChange = (id: any) => {
    //@ts-ignore
    poultryTechnicalConstraintsArr[id].isSelected = !poultryTechnicalConstraintsArr[id].isSelected
    setCheckedItems(!checkedItems)
  }

  const handleTypeOfStaffChange = (id: any) => {
    //@ts-ignore
    poultryTypeOfStaffArr[id].isSelected = !poultryTypeOfStaffArr[id].isSelected
    setCheckedItems(!checkedItems)
  }

  const handlespecificSkillsWorkersNeededChange = (id: any) => {
    //@ts-ignore
    poultryTechnicalSkillsNeeded[id].isSelected = !poultryTechnicalSkillsNeeded[id].isSelected
    setCheckedItems(!checkedItems)
  }


  const handleSubmit = () => {
    //@ts-ignore
    const poultryTechnicalConstraints = poultryTechnicalConstraintsArr.filter((el: any) => el.isSelected).map((el => el.label))
    if(values.technicalContraintOther){
      poultryTechnicalConstraints.push(values.technicalContraintOther)
      delete values.technicalContraintOther
    }
    const poultryTypeOfStaff = poultryTypeOfStaffArr.filter((el: any) => el.isSelected).map((el => el.label))
    if(values.typeOfStaffOther) {
      poultryTypeOfStaff.push(values.typeOfStaffOther)
      delete values.typeOfStaffOther
    }

    const poultrySpecificSkillsWorkersNeeded = poultryTechnicalSkillsNeeded.filter((el: any) => el.isSelected).map((el => el.label))
    if(values.specificSkillsWorkersNeededOther) {
      poultrySpecificSkillsWorkersNeeded.push(values.specificSkillsWorkersNeededOther)
      delete values.specificSkillsWorkersNeededOther
    }

    const poultryWomenYouthChallengeExample = []
    if(values.womenYouthChallengeExampleOther1){
      poultryWomenYouthChallengeExample.push(values.womenYouthChallengeExampleOther1)
      delete values.womenYouthChallengeExampleOther1
    }
    if(values.womenYouthChallengeExampleOther2){
      poultryWomenYouthChallengeExample.push(values.womenYouthChallengeExampleOther2)
      delete values.womenYouthChallengeExampleOther2
    }

    const poultryHiringRequirements = []
    if(values.hiringRequirements1){
      poultryHiringRequirements.push(values.hiringRequirements1)
      delete values.hiringRequirements1
    }
    if(values.hiringRequirements2){
      poultryHiringRequirements.push(values.hiringRequirements2)
      delete values.hiringRequirements2
    }
    if(values.hiringRequirements3){
      poultryHiringRequirements.push(values.hiringRequirements3)
      delete values.hiringRequirements3
    }

    const poultryHiringPositions = []
    if(values.hiringPositions1){
      poultryHiringPositions.push(values.hiringPositions1)
      delete values.hiringPositions1
    }
    if(values.hiringPositions3){
      poultryHiringPositions.push(values.hiringPositions2)
      delete values.hiringPositions3
    }
    if(values.hiringPositions3){
      poultryHiringPositions.push(values.hiringPositions3)
      delete values.hiringPositions3
    }

    const savedItem =  sessionStorage.getItem('requireFields') || ''
    const formattedData = JSON.parse(savedItem)
    const payload = {
      ...values,
      poultryHiringPositions,
      poultryHiringRequirements,
      poultryWomenYouthChallengeExample,
      poultrySpecificSkillsWorkersNeeded,
      poultryTypeOfStaff,
      poultryTechnicalConstraints,
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

  return (
    <div className="home-page-container">
      <HeaderNav />
      <div style={{ padding: 48 }}>

        <div className="separator-container">
          <RadioButton
            label="How do you consider your poultry farming occupation?"
            items={poultryFarmingOccupationArr}
            handleChange={(event) => {
              setValues({
                ...values,
                poultryFarmingOccupation: event.target.value
              })
              setOther({
                ...other,
                one: event.target.value === 'other'
              })
            }
            }
          />
          {other.one &&
            <InputTextfield placeholder="Other" handleChange={(event: any) => setValues({
              ...values,
              poultryFarmingOccupation: event.target.value
            })} />
          }
        </div>

        <div className="separator-container">
          <InputTextfield type="number" placeholder="How many birds do you have in total?" handleChange={(event: any) =>
            setValues({
              ...values,
              birdsNumbers: event.target.value
            })} />
        </div>
        <div className="separator-container">
          <RadioButton
            label="Which breeds do you keep? Tick all those you keep"
            items={poultryBreedsArr}
            handleChange={(event) => {
              setValues({
                ...values,
                poultryBreeds: event.target.value
              })
              setOther({
                ...other,
                two: event.target.value === 'other'
              })
            }
            }
          />
          {other.two &&
            <InputTextfield placeholder="Other" handleChange={(event: any) => setValues({
              ...values,
              poultryBreeds: event.target.value
            })} />
          }
        </div>

        <div className="separator-container">
            <RadioButton label="What is the average number of poultry sold per month in your farm?" 
            items={truthItems}
            handleChange={(event: any)=> setValues({...values, milkProductionSatisfaction:event.target.value})}
        />
        </div>

        <div className="separator-container">
          <InputTextfield type="number" placeholder="What is the average number of poultry sold per month in your farm? " handleChange={(event: any) => setValues({...values, averageProductionMilkPerDay: event.target.value})}/>
        </div>
        
        <div className="separator-container">
            <RadioButton label="Do you have a regular market for your poultry production? " 
            items={truthItems}
            handleChange={(event: any)=> setValues({...values, hasPoultryRegularMarket:event.target.value})}
        />
        </div>

        <div className="separator-container">
          <RadioButton
            label="What is your estimated monthly income from poultry activities?"
            items={poultryMonthlyIncome}
            handleChange={(event:any) => setValues({...values, poultryMonthlyIncome: event?.target.value})}
          />
        </div>

        <div className="separator-container">
          <RadioButton
            label="6.7.	How your product is different from your competitors’ products (meat, eggs)? And How are you priced compared to competitors?"
            items={poultryPriceCompetitorComparisonArr}
            handleChange={(event) => {
              setValues({
                ...values,
                poultryPriceCompetitorComparison: event.target.value
              })
              setOther({
                ...other,
                three: event.target.value === 'other'
              })
            }
            }
          />
          <br/>
          {other.three &&
            <InputTextfield placeholder="Other" handleChange={(event: any) => setValues({
              ...values,
              poultryPriceCompetitorComparison: event.target.value
            })} />
          }
        </div>

        <div className="separator-container">
            <RadioButton label="Do you face any problems in selling chicken meat/eggs?" 
            items={truthItems}
            handleChange={(event: any)=> setValues({...values, isFacingSellingEggs:event.target.value})}
        />
        </div>

        <div className="separator-container">
          <RadioButton
            label="Which market outlet do you prefer?"
            items={poultryMarketOutletArr}
            handleChange={(event) => {
              setValues({
                ...values,
                poultryMarketOutlet: event.target.value
              })
              setOther({
                ...other,
                four: event.target.value === 'other'
              })
            }
            }
          />
          <br/>
          {other.four &&
            <InputTextfield placeholder="Other" handleChange={(event: any) => setValues({
              ...values,
              poultryMarketOutlet: event.target.value
            })} />
          }
        </div>

        <div className="separator-container">
          <FormGroup>
            <FormLabel id="demo-row-radio-buttons-group-label">What are the main skills/ technical constraints that may affect your poultry production according to you? Tick all those you face.</FormLabel>
            {poultryTechnicalConstraintsArr.map((el: any, idx: any) => {
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
            <RadioButton label="Do you have a farm staff/ workers?" 
            items={truthItems}
            handleChange={(event: any)=> setValues({...values, isPoultryHavingStaff:event.target.value})}
        />
        </div>

        <div className="separator-container">
          <InputTextfield type="number" placeholder="How many?" handleChange={(event: any) => setValues({...values, poultryNumberOfStaff: event.target.value})}/>
        </div>

        <div className="separator-container">
          <FormGroup>
            <FormLabel id="demo-row-radio-buttons-group-label">What type of staff do you have</FormLabel>
            {poultryTypeOfStaffArr.map((el: any, idx: any) => {
              if (el.isSelected === undefined) {
                el.isSelected = false
              }
              return (
                <div style={{ display: 'flex', alignItems: 'center' }} onClick={() => handleTypeOfStaffChange(idx)}>
                  <CheckboxComponent
                    checked={el.isSelected}
                  />
                  <br/>
                  <FormLabel id="demo-row-radio-buttons-group-label">{el.label}</FormLabel>
                </div>
              )
            })}
          </FormGroup>
          <InputTextfield placeholder="other" handleChange={(event: any) => setValues({ ...values, typeOfStaffOther: event.target.value })} />
        </div>

        <div className="separator-container">
          <RadioButton
            label="How easy it is to get competent farm workers?"
            items={poultryCompetentWorkerArr}
            handleChange={(event) => {
              setValues({
                ...values,
                poultryGettingCompetentWorker: event.target.value
              })
              setOther({
                ...other,
                five: event.target.value === 'other'
              })
            }
            }
          />
          {other.five &&
            <InputTextfield placeholder="Other" handleChange={(event: any) => setValues({
              ...values,
              poultryGettingCompetentWorker: event.target.value
            })} />
          }
        </div>

        <div className="separator-container">
          <RadioButton
            label="What challenges do your workers/staff face in in fulfilling his/her roles in our business?"
            items={poultryWorkersChallenges}
            handleChange={(event) => {
              setValues({
                ...values,
                poultryTechnicalChallenges: event.target.value
              })
              setOther({
                ...other,
                six: event.target.value === 'other'
              })
            }
            }
          />
          {other.six &&
            <InputTextfield placeholder="Other" handleChange={(event: any) => setValues({
              ...values,
              poultryTechnicalChallenges: event.target.value
            })} />
          }
        </div>

        <div className="separator-container">
          <FormGroup>
            <FormLabel id="demo-row-radio-buttons-group-label">If lack of technical/practical skills, which category of your workers needs specific skills have you identified?</FormLabel>
            {poultryTechnicalSkillsNeeded.map((el: any, idx: any) => {
              if (el.isSelected === undefined) {
                el.isSelected = false
              }
              return (
                <div style={{ display: 'flex', alignItems: 'center' }} onClick={() => handlespecificSkillsWorkersNeededChange(idx)}>
                  <CheckboxComponent
                    checked={el.isSelected}
                  />
                  <FormLabel id="demo-row-radio-buttons-group-label">{el.label}</FormLabel>
                </div>
              )
            })}
          </FormGroup>
          <InputTextfield placeholder="other" handleChange={(event: any) => setValues({ ...values, specificSkillsWorkersNeededOther: event.target.value })} />
        </div>

        <div className="separator-container">
            <RadioButton label="Do you have specific challenges faced by women or youth in dairy cattle daily activities?" 
            items={truthItems}
            handleChange={(event: any)=> setValues({...values, hasPoultryWomenYouthDairyCattleChallenges:event.target.value})}
        />
        </div>

        <div className="separator-container">
          <FormGroup>
            <FormLabel id="demo-row-radio-buttons-group-label">If yes, give example of 2 challenges?</FormLabel>
            <br/>
            <InputTextfield placeholder="Challenge one" handleChange={(event: any) => setValues({ ...values, womenYouthChallengeExampleOther1: event.target.value })} />
            <InputTextfield placeholder="Challenge two" handleChange={(event: any) => setValues({...values, womenYouthChallengeExampleOther2: event.target.value})}/>
          </FormGroup>
        </div>

        <div className="separator-container">
            <RadioButton label="Do you have persons with disabilities working in your farm?" 
            items={truthItems}
            handleChange={(event: any)=> setValues({...values, hasPoultryPersonWithDisability:event.target.value})}
        />
        </div>

        <div className="separator-container">
          <InputTextfield type="number" placeholder="How many?" handleChange={(event: any) => setValues({...values, poultryPersonsWithDisability: event.target.value})}/>
        </div>

        <div className="separator-container">
            <RadioButton label="Do you plan for expanding your business/poultry farming?" 
            items={truthItems}
            handleChange={(event: any)=> setValues({...values, hasPoultryExpansionPlanning:event.target.value})}
        />
        </div>

        <div className="separator-container">
            <RadioButton label="Do you plan to recruit new farm workers/staff?" 
            items={truthItems}
            handleChange={(event: any)=> setValues({...values, hasPoultryRecruitmentPlanning:event.target.value})}
        />
        </div>
        <div className="separator-container">
            <RadioButton label="If yes, are there any specific requirements do you ask before hiring her/his?" 
            items={truthItems}
            handleChange={(event: any)=> setValues({...values, hasPoultryHiringRequirement:event.target.value})}
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

export default PoultryFarming


const poultryFarmingOccupationArr = [
  {
    label: 'Main income generating activity',
    id: 'Main income generating activity '
  },
  {
    label: 'Supplementary business',
    id: 'Supplementary business'
  },
  {
    label: 'Others',
    id: 'other'
  },
  
]

const poultryBreedsArr = [
    {
        label: 'Layer chickens ',
        id: 'Layer chickens '
      },
      {
        label: 'Broiler chickens',
        id: 'Broiler chickens '
      },
      {
        label: 'SASSO',
        id: 'SASSO'
      },
      {
        label: 'Kroiler',
        id: 'Kroiler'
      },

      {
        label: 'Others',
        id: 'other'
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

const poultryMonthlyIncome = [

    {
        label: '[0- 100,000]',
        id: '[0- 100,000]'
      },
      {
        label: '[100,000 – 500, 000]',
        id: '[100,000 – 500, 000]'
      },
      {
        label: '[ 500,000 – 1,000,000]',
        id: '[ 500,000 – 1,000,000]'
      },

      {
        label: '[1,000,000 – 5,000,000]',
        id: '[1,000,000 – 5,000,000]'
      },
      {
        label: 'Above 5,000,000',
        id: 'Above 5,000,000'
      },

]

const poultryPriceCompetitorComparisonArr = [
    {
        label: 'High ',
        id: 'High '
      },
      {
        label: 'No difference ',
        id: 'No difference '
      },

      {
        label: 'Low quality',
        id: 'Low quality'
      },
      {
        label: 'Low quality',
        id: 'Above 5,000,000'
      },
      {
        label: 'Others',
        id: 'other'
      },
]

const poultryMarketOutletArr = [
    {
        label: 'On farm',
        id: 'On farm'
      },
      {
        label: 'Rural market',
        id: 'Rural market'
      },

      {
        label: 'Rural traders and middle man',
        id: 'Rural traders and middle man'
      },
      {
        label: 'Urban traders/butcher',
        id: 'Urban traders/butcher'
      },
      {
        label: 'Others',
        id: 'other'
      },
]

const poultryTechnicalConstraintsArr = [
    {
        label: 'Lack of / limited skills on Diseases/ outbreaks diagnosis',
        id: 'Lack of / limited skills on Diseases/ outbreaks diagnosis'
      },
      {
        label: 'Lack of/ limited skills in sourcing the breeding stock',
        id: 'Lack of/ limited skills in sourcing the breeding stock'
      },

      {
        label: 'Lack/ limited skills in feeds formulation/ feeding',
        id: 'Lack/ limited skills in feeds formulation/ feeding'
      },
      {
        label: 'Lack of skilled/ competent farm workers',
        id: 'Lack of skilled/ competent farm workers'
      },


      {
        label: 'Lack of skilled/ competent veterinary technicians',
        id: 'Lack of skilled/ competent veterinary technicians'
      },
      {
        label: 'Lack of/ limited skills in acquiring capital and making cost-benefit analysis',
        id: 'Lack of/ limited skills in acquiring capital and making cost-benefit analysis'
      },

      {
        label: 'Lack of skilled/ competent farm workers',
        id: 'Lack of skilled/ competent farm workers'
      },

      {
        label: 'Lack of skilled/ competent veterinary technicians',
        id: 'Lack of skilled/ competent veterinary technicians'
      },

      {
        label: 'Lack of/ limited skills in creating linkage to the Markets',
        id: 'Lack of/ limited skills in creating linkage to the Markets'
      },

      {
        label: 'Lack of information in designing of appropriate housing',
        id: 'Lack of information in designing of appropriate housing'
      },


      {
        label: 'Lack of skills on farm record keeping',
        id: 'Lack of skills on farm record keeping '
      },

      {
        label: 'Others',
        id: 'other'
      },
]

const poultryTypeOfStaffArr  = [

    {
        label: 'Farm Manager',
        id: 'Farm Manager'
      },
      {
        label: 'Farm veterinary technician',
        id: 'Farm veterinary technician'
      },
      {
        label: 'Farm Accountant',
        id: 'Farm Accountant'
      },

      {
        label: 'Farm workers/ casual labors',
        id: 'Farm workers/ casual labors'
      },

      {
        label: 'Others',
        id: 'other'
      },

]

const poultryCompetentWorkerArr = [
    {
        label: 'Easy',
        id: 'Easy'
      },
      {
        label: 'Not easy',
        id: 'Not easy'
      },
      {
        label: 'Not available',
        id: 'Not available'
      },
      {
        label: 'Others',
        id: 'other'
      },
]

const poultryWorkersChallenges = [
    {
        label: 'Lack technical/practical skills',
        id: 'Lack technical/practical skills'
      },
      {
        label: 'Irresponsibility',
        id: 'Irresponsibilityy'
      },
      {
        label: 'Others',
        id: 'other'
      },
]

const poultryTechnicalSkillsNeeded = [
    {
        label: 'veterinary technician',
        id: 'veterinary technician'
      },
      {
        label: 'farm workers (abashumba)',
        id: 'farm workers (abashumba)'
      },

      {
        label: 'management team',
        id: 'management team'
      },
      {
        label: 'Others',
        id: 'other'
      },
]






