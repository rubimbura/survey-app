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


const PigFarming = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState<any>({})
  const [other, setOther] = useState<any>({})
  const [checkedItems, setCheckedItems] = useState(false)
  const [disabled, setDisabled] = useState(false)


  const handleBreedChange = (id: any) => {
    //@ts-ignore
    pigBreedsArr[id].isSelected = !pigBreedsArr[id].isSelected
    setCheckedItems(!checkedItems)
  }

  const handletechnicalContraintsChange = (id: any) => {
    //@ts-ignore
    pigsTechnicalContraintsArr[id].isSelected = !pigsTechnicalContraintsArr[id].isSelected
    setCheckedItems(!checkedItems)
  }

  const handlePigsTypeOfStaffChange = (id: any) => {
    //@ts-ignore
    PigstypeOfStaffArr[id].isSelected = !PigstypeOfStaffArr[id].isSelected
    setCheckedItems(!checkedItems)
  }

  const handlespecificSkillsWorkersNeededChange = (id: any) => {
    //@ts-ignore
    specificSkillsWorkersNeededArr[id].isSelected = !specificSkillsWorkersNeededArr[id].isSelected
    setCheckedItems(!checkedItems)
  }


  const handleSubmit = () => {
    setDisabled(true)
    const pigBreeds = pigBreedsArr.filter((el: any) => el.isSelected).map((el => el.label))
    const pigsTechnicalContraint = pigsTechnicalContraintsArr.filter((el: any) => el.isSelected).map((el => el.label))
    if(values.technicalContraintOther){
      pigsTechnicalContraint.push(values.technicalContraintOther)
      delete values.technicalContraintOther
    }
    const pigsTypeOfStaff = PigstypeOfStaffArr.filter((el: any) => el.isSelected).map((el => el.label))
    if(values.pigsTypeOfStaffOther) {
      pigsTypeOfStaff.push(values.pigsTypeOfStaffOther)
      delete values.pigsTypeOfStaffOther
    }

    const pigsSpecificSkillsWorkersNeeded = specificSkillsWorkersNeededArr.filter((el: any) => el.isSelected).map((el => el.label))
    if(values.specificSkillsWorkersNeededOther) {
      pigsSpecificSkillsWorkersNeeded.push(values.specificSkillsWorkersNeededOther)
      delete values.specificSkillsWorkersNeededOther
    }

    const pigsWomenYouthChallengeExample = []
    if(values.womenYouthChallengeExampleOther1){
      pigsWomenYouthChallengeExample.push(values.womenYouthChallengeExampleOther1)
      delete values.womenYouthChallengeExampleOther1
    }
    if(values.womenYouthChallengeExampleOther2){
      pigsWomenYouthChallengeExample.push(values.womenYouthChallengeExampleOther2)
      delete values.womenYouthChallengeExampleOther2
    }

    const pigsHiringRequirements = []
    if(values.hiringRequirements1){
      pigsHiringRequirements.push(values.hiringRequirements1)
      delete values.hiringRequirements1
    }
    if(values.hiringRequirements2){
      pigsHiringRequirements.push(values.hiringRequirements2)
      delete values.hiringRequirements2
    }
    if(values.hiringRequirements3){
      pigsHiringRequirements.push(values.hiringRequirements3)
      delete values.hiringRequirements3
    }

    const pigsHiringPositions = []
    if(values.hiringPositions1){
      pigsHiringPositions.push(values.hiringPositions1)
      delete values.hiringPositions1
    }
    if(values.hiringPositions3){
      pigsHiringPositions.push(values.hiringPositions2)
      delete values.hiringPositions3
    }
    if(values.hiringPositions3){
      pigsHiringPositions.push(values.hiringPositions3)
      delete values.hiringPositions3
    }
    
    const savedItem =  sessionStorage.getItem('requireFields') || ''
    const formattedData = JSON.parse(savedItem)
    const payload = {
      ...values,
      pigsHiringPositions,
      pigsHiringRequirements,
      pigsWomenYouthChallengeExample,
      pigsSpecificSkillsWorkersNeeded,
      pigsTypeOfStaff,
      pigsTechnicalContraint,
      pigBreeds,
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
            label="How do you consider your pig farming occupation?"
            items={pigFarmingOccupationArr}
            handleChange={(event) => {
              setValues({
                ...values,
                pigFarmingOccupation: event.target.value
              })
              setOther({
                ...other,
                one: event.target.value === 'other'
              })
            }
            }
          />
          <div style={{marginTop:10}}></div>
          {other.one &&
            <InputTextfield  placeholder="Other" handleChange={(event: any) => setValues({
              ...values,
              pigFarmingOccupation: event.target.value
            })} />
          }
        </div>

        <div className="separator-container">
          <InputTextfield type="number" placeholder="How many pigs do you have in total?" handleChange={(event: any) =>
            setValues({
              ...values,
              pigNumbers: event.target.value
            })} />
        </div>

        <div className="separator-container">
          <FormGroup>
            <FormLabel id="demo-row-radio-buttons-group-label">Which breed of dairy cattle do you keep? Tick all those you keep</FormLabel>
            {pigBreedsArr.map((el: any, idx: any) => {
              if (el.isSelected === undefined) {
                el.isSelected = false
              }
              return (
                <div style={{ display: 'flex', alignItems: 'center' }} onClick={() => handleBreedChange(idx)}>
                  <CheckboxComponent
                    checked={el.isSelected}
                  />
                  <FormLabel id="demo-row-radio-buttons-group-label">{el.label}</FormLabel>
                </div>
              )
            })}
          </FormGroup>
        </div>

        <div className="separator-container">
          <InputTextfield placeholder="What is the average number of pigs sold per month in your farm? " handleChange={(event: any) =>
            setValues({
              ...values,
              monthlyPigsAverage: event.target.value
            })} />
        </div>

        <div className="separator-container">
            <RadioButton label="Do you have a regular market for your pig production" 
            items={truthItems}
            handleChange={(event: any)=> setValues({...values, hasPigRegularMarket:event.target.value})}
        />
        </div>
        
        <div className="separator-container">
            <RadioButton label="What is your estimated monthly income from piggery activities?" 
            items={pigMonthlyIncome}
            handleChange={(event: any)=> setValues({...values, pigMonthlyIncome:event.target.value})}
        />
        </div>
        
        <div className="separator-container">
          <RadioButton
            label="How your product is different from your competitors’ products (pigs)? And How are you priced compared to competitors?"
            items={pigsCompetitorsComparisonArr}
            handleChange={(event) => {
              setValues({
                ...values,
                pigsCompetitorsComparison: event.target.value
              })
              setOther({
                ...other,
                two: event.target.value === 'other'
              })
            }
            }
          />
          <div style={{marginTop:10}}></div>
          {other.two &&
            <InputTextfield  placeholder="Other" handleChange={(event: any) => setValues({
              ...values,
              pigsCompetitorsComparison: event.target.value
            })} />
          }
        </div>

        <div className="separator-container">
            <RadioButton label="Do you face any problems in selling pigs? " 
            items={truthItems}
            handleChange={(event: any)=> setValues({...values, isFacingSellingPigs:event.target.value})}
        />
        </div>

        <div className="separator-container">
          <RadioButton
            label="Which market outlet do you prefer?"
            items={pigsMarketOutletPreferenceArr}
            handleChange={(event) => {
              setValues({
                ...values,
                pigsMarketOutletPreference: event.target.value
              })
              setOther({
                ...other,
                ten: event.target.value === 'other'
              })
            }
            }
          />
          <div style={{marginTop:10}}></div>
          {other.ten &&
            <InputTextfield  placeholder="Other" handleChange={(event: any) => setValues({
              ...values,
              pigsMarketOutletPreference: event.target.value
            })} />
          }
        </div>
        
        <div className="separator-container">
          <FormGroup>
            <FormLabel id="demo-row-radio-buttons-group-label">What are the main skills/ technical constraints that may affect your pigs farming production according to you? Tick all those you face.</FormLabel>
            {pigsTechnicalContraintsArr.map((el: any, idx: any) => {
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
            handleChange={(event: any)=> setValues({...values, isPigsHavingStaf:event.target.value})}
        />
        </div>

        <div className="separator-container">
          <InputTextfield type="number" placeholder="How many?" handleChange={(event: any) => setValues({...values, pigsNumberOfStaff: event.target.value})}/>
        </div>

        <div className="separator-container">
          <FormGroup>
            <FormLabel id="demo-row-radio-buttons-group-label">What type of staff do you have</FormLabel>
            {PigstypeOfStaffArr.map((el: any, idx: any) => {
              if (el.isSelected === undefined) {
                el.isSelected = false
              }
              return (
                <div style={{ display: 'flex', alignItems: 'center' }} onClick={() => handlePigsTypeOfStaffChange(idx)}>
                  <CheckboxComponent
                    checked={el.isSelected}
                  />
                  <br/>
                  <FormLabel id="demo-row-radio-buttons-group-label">{el.label}</FormLabel>
                </div>
              )
            })}
          </FormGroup>
          <InputTextfield placeholder="other" handleChange={(event: any) => setValues({ ...values, pigsTypesOfStaffOther: event.target.value })} />
        </div>

        <div className="separator-container">
          <RadioButton
            label="How easy it is to get competent farm workers?"
            items={gettingCompetentWorkerArr}
            handleChange={(event) => {
              setValues({
                ...values,
                pigsGettingCompetentWorker: event.target.value
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
              pigsGettingCompetentWorker: event.target.value
            })} />
          }
        </div>

        <div className="separator-container">
          <RadioButton
            label="What challenges do your workers/staff face in in fulfilling his/her roles in our business?"
            items={technicalChallengesArr}
            handleChange={(event) => {
              setValues({
                ...values,
                pigsTechnicalChallenges: event.target.value
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
              pigsTechnicalChallenges: event.target.value
            })} />
          }
        </div>

        <div className="separator-container">
          <FormGroup>
            <FormLabel id="demo-row-radio-buttons-group-label">If lack of technical/practical skills, which category of your workers needs specific skills have you identified?</FormLabel>
            {specificSkillsWorkersNeededArr.map((el: any, idx: any) => {
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
            <RadioButton label="Do you have specific challenges faced by women or youth in daily pig farming activities?" 
            items={truthItems}
            handleChange={(event: any)=> setValues({...values, hasPigsWomenYouthDairyCattleChallenges:event.target.value})}
        />
        </div>

        <div className="separator-container">
          <FormGroup>
            <FormLabel id="demo-row-radio-buttons-group-label">If yes, give example of 3 challenges?</FormLabel>
            <br/>
            <InputTextfield placeholder="Challenge one" handleChange={(event: any) => setValues({ ...values, womenYouthChallengeExampleOther1: event.target.value })} />
            <InputTextfield placeholder="Challenge two" handleChange={(event: any) => setValues({...values, womenYouthChallengeExampleOther2: event.target.value})}/>
          </FormGroup>
        </div>

        <div className="separator-container">
            <RadioButton label="Do you have persons with disabilities working in your farm?" 
            items={truthItems}
            handleChange={(event: any)=> setValues({...values, hasPigsPersonWithDisability:event.target.value})}
        />
        </div>

        <div className="separator-container">
          <InputTextfield type="number" placeholder="How many?" handleChange={(event: any) => setValues({...values, pigsPersonsWithDisability: event.target.value})}/>
        </div>

        <div className="separator-container">
            <RadioButton label="Do you plan for expanding your business/cattle farming?" 
            items={truthItems}
            handleChange={(event: any)=> setValues({...values, hasPigsExpansionPlanning:event.target.value})}
        />
        </div>

        <div className="separator-container">
            <RadioButton label="Do you plan to recruit new farm workers/staff?" 
            items={truthItems}
            handleChange={(event: any)=> setValues({...values, hasPigsRecruitmentPlanning:event.target.value})}
        />
        </div>

        <div className="separator-container">
            <RadioButton label="If yes, are there any specific requirements do you ask before hiring her/his?" 
            items={truthItems}
            handleChange={(event: any)=> setValues({...values, hasPigsHiringRequirement:event.target.value})}
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

export default PigFarming


const pigFarmingOccupationArr = [
  {
    label:'Main income generating activity',
    id:'Main income generating activity'
  },
  {
    label:'Supplementary business ',
    id:'Supplementary business '
  },
  {
    label:'Others',
    id:'other'
  },
]

const pigBreedsArr = [
  {
    label:'Landrace',
    id:'Landrace'
  },
  {
    label:'Large white',
    id:'Large white'
  },
  {
    label:'Pietrain',
    id:'Pietrain'
  },
  {
    label:'Duroc',
    id:'Duroc'
  },
  {
    label:'Unknown cross breeds',
    id:'Unknown cross breeds '
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

const pigMonthlyIncome = [
  {
    label: '0 - 50,000',
    id:'0-50,000'
  },
  {
    label: '50,000 - 100,000',
    id:'50,000 - 100,000'
  },
  {
    label: '100,000 - 150,000',
    id:'100,000 - 150,000'
  },
  {
    label: '150,000 - 200,000',
    id:'150,000 - 200,000'
  },
  {
    label: 'Above 200,000',
    id:'Above 200,000'
  },
]

const pigsCompetitorsComparisonArr = [
  {
    label: 'High',
    id:'High'
  },
  {
    label: 'No difference',
    id:'No difference'
  },
  {
    label: 'Low quality',
    id:'Low quality'
  },
  {
    label: 'Other',
    id:'other'
  },
]

const pigsMarketOutletPreferenceArr = [
  {
    label:'On farm',
    id:'On farm'
  },
  {
    label:'Rural market',
    id:'Rural market'
  },
  {
    label:'Rural traders and middle man',
    id:'Rural traders and middle man'
  },
  {
    label:'Urban traders/butcher',
    id:'Urban traders/butcher'
  },
  {
    label:'Others ',
    id:'other'
  },
]

const pigsTechnicalContraintsArr = [
  {
    label: 'Lack of / limited skills on Diseases/ Outbreaks diagnosis',
    id:'Lack of / limited skills on Diseases/ Outbreaks diagnosis'
  },
  {
    label: 'Lack of/ limited skills in sourcing the breeding stock',
    id:'Lack of/ limited skills in sourcing the breeding stock'
  },
  {
    label: 'Lack of/ limited skills in sourcing the breeding stock',
    id:'Lack of/ limited skills in sourcing the breeding stock'
  },
  {
    label: 'Lack of skilled/ competent farm workers',
    id:'Lack of skilled/ competent farm workers'
  },
  {
    label: 'Lack of skilled/competent veterinary technicians',
    id:'Lack of skilled/competent veterinary technicians'
  },
  {
    label: 'Lack of/ limited skills in acquiring capital and making cost-benefit analysis',
    id:'Lack of/ limited skills in acquiring capital and making cost-benefit analysis'
  },
  {
    label: 'Lack of/ limited skills in creating linkage to the Markets',
    id:'Lack of/ limited skills in creating linkage to the Markets'
  },
  {
    label: 'Lack of information in designing of appropriate housing	',
    id:'Lack of information in designing of appropriate housing	'
  },

  {
    label: ' Lack of skills on best farming good practices',
    id:' Lack of skills on best farming good practices'
  },
  {
    label: 'Lack of skills on farm record keeping',
    id:'Lack of skills on farm record keeping'
  },
]

const PigstypeOfStaffArr = [
  {
    label: 'Farm Manager',
    id:'Farm Manager'
  },
  {
    label: 'Farm veterinary technician',
    id:'Farm veterinary technician'
  },
  {
    label: 'Farm Accountant ',
    id:'Farm Accountant '
  },
  {
    label: 'Farm workers/ casual labors',
    id:'Farm workers/ casual labors'
  },
]

const gettingCompetentWorkerArr = [
  {
    label: 'Easy',
    id:'Easy'
  },
  {
    label: 'Not easy',
    id:'Not easy'
  },
  {
    label: 'Not available',
    id:'Not available'
  },
  {
    label: 'Other',
    id:'other'
  },
]
const technicalChallengesArr = [
  {
    label: 'Lack technical/practical skills',
    id:'Lack technical/practical skills'
  },
  {
    label: 'Irresponsibility',
    id:'Irresponsibility'
  },
  {
    label: 'Other',
    id:'Other'
  },
]

const specificSkillsWorkersNeededArr = [
  {
    label: 'Veterinary technician',
    id:'Veterinary technician'
  },
  {
    label: 'Farm workers (abashumba)',
    id:'Farm workers (abashumba)'
  },
  {
    label: 'Management team',
    id:'Management team'
  },
  {
    label: 'Other',
    id:'Other'
  },
]
