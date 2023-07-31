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


const OccupationForm = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState<any>({})
  const [other, setOther] = useState<any>({})
  const [checkedItems, setCheckedItems] = useState(false)
  const [disabled, setDisabled] = useState(false)


  const handleBreedChange = (id: any) => {
    //@ts-ignore
    breedOfDairyCattleArr[id].isSelected = !breedOfDairyCattleArr[id].isSelected
    setCheckedItems(!checkedItems)
  }

  const handletechnicalContraintsChange = (id: any) => {
    //@ts-ignore
    technicalContraintsArr[id].isSelected = !technicalContraintsArr[id].isSelected
    setCheckedItems(!checkedItems)
  }

  const handleTypeOfStaffChange = (id: any) => {
    //@ts-ignore
    typeOfStaffArr[id].isSelected = !typeOfStaffArr[id].isSelected
    setCheckedItems(!checkedItems)
  }

  const handlespecificSkillsWorkersNeededChange = (id: any) => {
    //@ts-ignore
    specificSkillsWorkersNeededArr[id].isSelected = !specificSkillsWorkersNeededArr[id].isSelected
    setCheckedItems(!checkedItems)
  }

  const handleSubmit = () => {
    setDisabled(true)
    const breedOfDairyCattle = breedOfDairyCattleArr.filter((el: any) => el.isSelected).map((el => el.label))
    if (values.breedOfDairyCattleOther) {
      breedOfDairyCattle.push(values.breedOfDairyCattleOther)
      delete values.breedOfDairyCattleOther
    }

    const technicalContraint = technicalContraintsArr.filter((el: any) => el.isSelected).map((el => el.label))
    if(values.technicalContraintOther){
      technicalContraint.push(values.technicalContraintOther)
      delete values.technicalContraintOther
    }
    const typeOfStaff = typeOfStaffArr.filter((el: any) => el.isSelected).map((el => el.label))
    if(values.typeOfStaffOther) {
      typeOfStaff.push(values.typeOfStaffOther)
      delete values.typeOfStaffOther
    }

    const specificSkillsWorkersNeeded = specificSkillsWorkersNeededArr.filter((el: any) => el.isSelected).map((el => el.label))
    if(values.specificSkillsWorkersNeededOther) {
      specificSkillsWorkersNeeded.push(values.specificSkillsWorkersNeededOther)
      delete values.specificSkillsWorkersNeededOther
    }

    const womenYouthChallengeExample = []
    if(values.womenYouthChallengeExampleOther1){
      womenYouthChallengeExample.push(values.womenYouthChallengeExampleOther1)
      delete values.womenYouthChallengeExampleOther1
    }
    if(values.womenYouthChallengeExampleOther2){
      womenYouthChallengeExample.push(values.womenYouthChallengeExampleOther2)
      delete values.womenYouthChallengeExampleOther2
    }

    const hiringRequirements = []
    if(values.hiringRequirements1){
      hiringRequirements.push(values.hiringRequirements1)
      delete values.hiringRequirements1
    }
    if(values.hiringRequirements2){
      hiringRequirements.push(values.hiringRequirements2)
      delete values.hiringRequirements2
    }
    if(values.hiringRequirements3){
      hiringRequirements.push(values.hiringRequirements3)
      delete values.hiringRequirements3
    }

    const hiringPositions = []
    if(values.hiringPositions1){
      hiringPositions.push(values.hiringPositions1)
      delete values.hiringPositions1
    }
    if(values.hiringPositions3){
      hiringPositions.push(values.hiringPositions2)
      delete values.hiringPositions3
    }
    if(values.hiringPositions3){
      hiringPositions.push(values.hiringPositions3)
      delete values.hiringPositions3
    }
    
    const savedItem =  sessionStorage.getItem('requireFields') || ''
    const formattedData = JSON.parse(savedItem)
    const payload = {
      ...values,
      hiringPositions,
      hiringRequirements,
      womenYouthChallengeExample,
      specificSkillsWorkersNeeded,
      typeOfStaff,
      technicalContraint,
      breedOfDairyCattle,
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
            label="How do you consider your dairy farming occupation?"
            items={farmingArr}
            handleChange={(event) => {
              setValues({
                ...values,
                dairyFarmingOccupation: event.target.value
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
              dairyFarmingOccupation: event.target.value
            })} />
          }
        </div>

        <div className="separator-container">
          <InputTextfield type="number" placeholder="How many dairy animals do you have in total" handleChange={(event: any) =>
            setValues({
              ...values,
              dairyAnimals: event.target.value
            })} />
        </div>
        <div className="separator-container">
          <RadioButton
            label="What type of housing system do you use?"
            items={housingSystemTypeArr}
            handleChange={(event) => {
              setValues({
                ...values,
                housingSystemType: event.target.value
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
              housingSystemType: event.target.value
            })} />
          }
        </div>

        <div className="separator-container">
          <FormGroup>
            <FormLabel id="demo-row-radio-buttons-group-label">Which breed of dairy cattle do you keep? Tick all those you keep</FormLabel>
            {breedOfDairyCattleArr.map((el: any, idx: any) => {
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
            <br/>
            <InputTextfield placeholder="other" handleChange={(event: any) => setValues({ ...values, breedOfDairyCattleOther: event.target.value })} />
          </FormGroup>
          
        </div>

        <div className="separator-container">
          <InputTextfield type="number" placeholder="What is the average level of milk production per day in your farm?" handleChange={(event: any) => setValues({...values, averageProductionMilkPerDay: event.target.value})}/>
        </div>
        
        <div className="separator-container">
            <RadioButton label="Are you satisfied with your milk production yield?" 
            items={truthItems}
            handleChange={(event: any)=> setValues({...values, milkProductionSatisfaction:event.target.value})}
        />
        </div>

        <div className="separator-container">
          <RadioButton
            label="What is your estimated monthly income from dairy cattle activities?"
            items={milkRegularMarketArr}
            handleChange={(event:any) => setValues({...values, milkRegularMarket: event?.target.value})}
          />
        </div>

        <div className="separator-container">
          <RadioButton
            label="How your product is different from your competitors’ products? And How are you priced compared to competitors?"
            items={competitorsComparisonArr}
            handleChange={(event) => {
              setValues({
                ...values,
                competitorsComparison: event.target.value
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
              competitorsComparison: event.target.value
            })} />
          }
        </div>

        <div className="separator-container">
            <RadioButton label="Do you face any problems in selling milk or cows?" 
            items={truthItems}
            handleChange={(event: any)=> setValues({...values, isFacingSellingMilk:event.target.value})}
        />
        </div>

        <div className="separator-container">
          <RadioButton
            label="Which market outlet do you prefer?"
            items={marketOutletPreferenceArr}
            handleChange={(event) => {
              setValues({
                ...values,
                marketOutletPreference: event.target.value
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
              marketOutletPreference: event.target.value
            })} />
          }
        </div>

        <div className="separator-container">
          <FormGroup>
            <FormLabel id="demo-row-radio-buttons-group-label">What are the main skills/ technical constraints that may affect your dairy cattle production according to you? Tick all those you face.</FormLabel>
            {technicalContraintsArr.map((el: any, idx: any) => {
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
            handleChange={(event: any)=> setValues({...values, isHavingStaff:event.target.value})}
        />
        </div>

        <div className="separator-container">
          <InputTextfield type="number" placeholder="How many?" handleChange={(event: any) => setValues({...values, numberOfStaff: event.target.value})}/>
        </div>

        <div className="separator-container">
          <FormGroup>
            <FormLabel id="demo-row-radio-buttons-group-label">What type of staff do you have</FormLabel>
            {typeOfStaffArr.map((el: any, idx: any) => {
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
            items={gettingCompetentWorkerArr}
            handleChange={(event) => {
              setValues({
                ...values,
                gettingCompetentWorker: event.target.value
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
              gettingCompetentWorker: event.target.value
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
                technicalChallenges: event.target.value
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
              technicalChallenges: event.target.value
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
            <RadioButton label="Do you have specific challenges faced by women or youth in dairy cattle daily activities?" 
            items={truthItems}
            handleChange={(event: any)=> setValues({...values, hasWomenYouthDairyCattleChallenges:event.target.value})}
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
            handleChange={(event: any)=> setValues({...values, hasPersonWithDisability:event.target.value})}
        />
        </div>

        <div className="separator-container">
          <InputTextfield type="number" placeholder="How many?" handleChange={(event: any) => setValues({...values, personsWithDisability: event.target.value})}/>
        </div>

        <div className="separator-container">
            <RadioButton label="Do you plan for expanding your business/cattle farming?" 
            items={truthItems}
            handleChange={(event: any)=> setValues({...values, hasExpansionPlanning:event.target.value})}
        />
        </div>

        <div className="separator-container">
            <RadioButton label="Do you plan to recruit new farm workers/staff?" 
            items={truthItems}
            handleChange={(event: any)=> setValues({...values, hasRecruitmentPlanning:event.target.value})}
        />
        </div>
        <div className="separator-container">
            <RadioButton label="If yes, are there any specific requirements do you ask before hiring her/his?" 
            items={truthItems}
            handleChange={(event: any)=> setValues({...values, hasHiringRequirement:event.target.value})}
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

export default OccupationForm


const farmingArr = [
  {
    label: 'Main income generating activity',
    id: 'Main income generating activity'
  },
  {
    label: 'Supplementary business ',
    id: 'Supplementary business'
  },
  {
    label: 'Family milk consumption',
    id: 'Family milk consumption'
  },
  {
    label: 'Others',
    id: 'other'
  },
]


const housingSystemTypeArr = [
  {
    label: 'Traditional',
    id: 'Traditional'
  },
  {
    label: 'modern cow sheds',
    id: 'modern cow sheds'
  },
  {
    label: 'Zero grazing ',
    id: 'Zero grazing '
  },
  {
    label: 'Others',
    id: 'other'
  },
]

const breedOfDairyCattleArr = [
  {
    label: 'Friesian',
    id: 'Friesian'
  },
  {
    label: 'Crossbreed',
    id: 'Crossbreed'
  },
  {
    label: 'Jersey',
    id: 'Jersey '
  },
  {
    label: 'Sahiwal',
    id: 'Sahiwal'
  },
  {
    label: 'Brown suisse',
    id: 'Brown suisse'
  },
  {
    label: 'Ankole(local)',
    id: 'Ankole'
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

const milkRegularMarketArr = [
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


const competitorsComparisonArr = [
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
    label: 'Others',
    id:'other'
  },
]

const marketOutletPreferenceArr = [
  {
    label: 'On farm',
    id:'On farm'
  },
  {
    label: 'Rural market',
    id:'Rural market'
  },
  {
    label: 'Rural traders and middle man',
    id:'Rural traders and middle man'
  },
  {
    label: 'To the cooperative (MCC)',
    id:'To the cooperative (MCC)'
  },
  {
    label: 'Urban traders/Supermarkets',
    id:'Urban traders/Supermarkets'
  },
  {
    label: 'Others',
    id:'other'
  },
]

const technicalContraintsArr = [
  {
    label: 'Lack of / limited skills on Diseases/ Outbreaks diagnosis',
    id:'Lack of / limited skills on Diseases/ Outbreaks diagnosis'
  },
  {
    label: 'Lack of/ limited skills in sourcing the breeding stock',
    id:'Lack of/ limited skills in sourcing the breeding stock'
  },
  {
    label: 'Lack/ limited skills in feeds formulation/ feeding',
    id:'Lack/ limited skills in feeds formulation/ feeding'
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

const typeOfStaffArr = [
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

const gettingCompetentWorker = [
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