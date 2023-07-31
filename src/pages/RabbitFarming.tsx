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


const RabbitFarming = () => {
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
    const rabbitsBreeds = pigBreedsArr.filter((el: any) => el.isSelected).map((el => el.label))
    const rabbitTechnicalContraints = pigsTechnicalContraintsArr.filter((el: any) => el.isSelected).map((el => el.label))
    if (values.technicalContraintOther) {
      rabbitTechnicalContraints.push(values.technicalContraintOther)
      delete values.technicalContraintOther
    }
    const abbitTypeOfStaff = PigstypeOfStaffArr.filter((el: any) => el.isSelected).map((el => el.label))
    if (values.pigsTypeOfStaffOther) {
      abbitTypeOfStaff.push(values.pigsTypeOfStaffOther)
      delete values.pigsTypeOfStaffOther
    }

    const rabbitSpecificSkillsWorkersNeeded = specificSkillsWorkersNeededArr.filter((el: any) => el.isSelected).map((el => el.label))
    if (values.specificSkillsWorkersNeededOther) {
      rabbitSpecificSkillsWorkersNeeded.push(values.specificSkillsWorkersNeededOther)
      delete values.specificSkillsWorkersNeededOther
    }

    const pigsWomenYouthChallengeExample = []
    if (values.womenYouthChallengeExampleOther1) {
      pigsWomenYouthChallengeExample.push(values.womenYouthChallengeExampleOther1)
      delete values.womenYouthChallengeExampleOther1
    }
    if (values.womenYouthChallengeExampleOther2) {
      pigsWomenYouthChallengeExample.push(values.womenYouthChallengeExampleOther2)
      delete values.womenYouthChallengeExampleOther2
    }

    const rabbitHiringRequirements = []
    if (values.hiringRequirements1) {
      rabbitHiringRequirements.push(values.hiringRequirements1)
      delete values.hiringRequirements1
    }
    if (values.hiringRequirements2) {
      rabbitHiringRequirements.push(values.hiringRequirements2)
      delete values.hiringRequirements2
    }
    if (values.hiringRequirements3) {
      rabbitHiringRequirements.push(values.hiringRequirements3)
      delete values.hiringRequirements3
    }

    const rabbitHiringPositions = []
    if (values.hiringPositions1) {
      rabbitHiringPositions.push(values.hiringPositions1)
      delete values.hiringPositions1
    }
    if (values.hiringPositions3) {
      rabbitHiringPositions.push(values.hiringPositions2)
      delete values.hiringPositions3
    }
    if (values.hiringPositions3) {
      rabbitHiringPositions.push(values.hiringPositions3)
      delete values.hiringPositions3
    }

    const savedItem = sessionStorage.getItem('requireFields') || ''
    const formattedData = JSON.parse(savedItem)
    const payload = {
      ...values,
      rabbitHiringPositions,
      rabbitHiringRequirements,
      pigsWomenYouthChallengeExample,
      rabbitSpecificSkillsWorkersNeeded,
      abbitTypeOfStaff,
      rabbitTechnicalContraints,
      rabbitsBreeds,
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
      .catch((error: any) => {
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
            label="How do you consider your rabbits farming occupation?"
            items={pigFarmingOccupationArr}
            handleChange={(event) => {
              setValues({
                ...values,
                rabbitFarmingOccupation: event.target.value
              })
              setOther({
                ...other,
                one: event.target.value === 'other'
              })
            }
            }
          />
          <div style={{ marginTop: 10 }}></div>
          {other.one &&
            <InputTextfield placeholder="Other" handleChange={(event: any) => setValues({
              ...values,
              rabbitFarmingOccupation: event.target.value
            })} />
          }
        </div>

        <div className="separator-container">
          <InputTextfield type="number" placeholder="How many rabbits do you have in total?" handleChange={(event: any) =>
            setValues({
              ...values,
              rabbitsNumbers: event.target.value
            })} />
        </div>

        <div className="separator-container">
          <FormGroup>
            <FormLabel id="demo-row-radio-buttons-group-label">Which breeds do you keep? Tick all those you keep</FormLabel>
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
          <InputTextfield placeholder="What is the average number of rabbits sold per month in your farm? " handleChange={(event: any) =>
            setValues({
              ...values,
              monthlyRabbitsAverage: event.target.value
            })} />
        </div>

        <div className="separator-container">
          <RadioButton label="Do you have a regular market for your rabbit production"
            items={truthItems}
            handleChange={(event: any) => setValues({ ...values, hasRabbitRegularMarket: event.target.value })}
          />
        </div>

        <div className="separator-container">
          <RadioButton label="What is your estimated monthly income from rabbit farming activities?"
            items={pigMonthlyIncome}
            handleChange={(event: any) => setValues({ ...values, rabbitMonthlyIncome: event.target.value })}
          />
        </div>

        <div className="separator-container">
          <RadioButton
            label="How your product is different from your competitors’ products (meat, live animal)? ? And How are you priced compared to competitors?"
            items={pigsCompetitorsComparisonArr}
            handleChange={(event) => {
              setValues({
                ...values,
                rabbitCompetitorsComparison: event.target.value
              })
              setOther({
                ...other,
                two: event.target.value === 'other'
              })
            }
            }
          />
          <div style={{ marginTop: 10 }}></div>
          {other.two &&
            <InputTextfield placeholder="Other" handleChange={(event: any) => setValues({
              ...values,
              rabbitCompetitorsComparison: event.target.value
            })} />
          }
        </div>

        <div className="separator-container">
          <RadioButton label="Do you face any problems in selling rabbits? "
            items={truthItems}
            handleChange={(event: any) => setValues({ ...values, isFacingSellingRabbits: event.target.value })}
          />
        </div>

        <div className="separator-container">
          <RadioButton
            label="Which market outlet do you prefer?"
            items={pigsMarketOutletPreferenceArr}
            handleChange={(event) => {
              setValues({
                ...values,
                rabbitMarketOutletPreference: event.target.value
              })
              setOther({
                ...other,
                ten: event.target.value === 'other'
              })
            }
            }
          />
          <div style={{ marginTop: 10 }}></div>
          {other.ten &&
            <InputTextfield placeholder="Other" handleChange={(event: any) => setValues({
              ...values,
              rabbitMarketOutletPreference: event.target.value
            })} />
          }
        </div>

        <div className="separator-container">
          <FormGroup>
            <FormLabel id="demo-row-radio-buttons-group-label">What are the main skills/ technical constraints that may affect your rabbit farming production according to you? Tick all those you face.</FormLabel>
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
            handleChange={(event: any) => setValues({ ...values, isRabbitHavingStaff: event.target.value })}
          />
        </div>

        <div className="separator-container">
          <InputTextfield type="number" placeholder="How many?" handleChange={(event: any) => setValues({ ...values, rabbitNumberOfStaff: event.target.value })} />
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
                  <br />
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
                rabbitGettingCompetentWorker: event.target.value
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
              rabbitGettingCompetentWorker: event.target.value
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
                rabbitTechnicalChallenges: event.target.value
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
              rabbitTechnicalChallenges: event.target.value
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
          <RadioButton label="Do you have specific challenges faced by women or youth in dairy rabbit farming activities?"
            items={truthItems}
            handleChange={(event: any) => setValues({ ...values, hasRabbitWomenYouthDairyCattleChallenges: event.target.value })}
          />
        </div>

        <div className="separator-container">
          <FormGroup>
            <FormLabel id="demo-row-radio-buttons-group-label">If yes, give example of 2 challenges?</FormLabel>
            <br />
            <InputTextfield placeholder="Challenge one" handleChange={(event: any) => setValues({ ...values, womenYouthChallengeExampleOther1: event.target.value })} />
            <InputTextfield placeholder="Challenge two" handleChange={(event: any) => setValues({ ...values, womenYouthChallengeExampleOther2: event.target.value })} />
          </FormGroup>
        </div>

        <div className="separator-container">
          <RadioButton label="Do you have persons with disabilities working in your farm?"
            items={truthItems}
            handleChange={(event: any) => setValues({ ...values, hasRabbitPersonWithDisability: event.target.value })}
          />
        </div>

        <div className="separator-container">
          <InputTextfield type="number" placeholder="How many?" handleChange={(event: any) => setValues({ ...values, rabbitPersonsWithDisability: event.target.value })} />
        </div>

        <div className="separator-container">
          <RadioButton label="Do you plan for expanding your business/cattle farming?"
            items={truthItems}
            handleChange={(event: any) => setValues({ ...values, hasRabbitExpansionPlanning: event.target.value })}
          />
        </div>

        <div className="separator-container">
          <RadioButton label="Do you plan to recruit new farm workers/staff?"
            items={truthItems}
            handleChange={(event: any) => setValues({ ...values, hasRabbitRecruitmentPlanning: event.target.value })}
          />
        </div>

        <div className="separator-container">
          <RadioButton label="If yes, are there any specific requirements do you ask before hiring her/his?"
            items={truthItems}
            handleChange={(event: any) => setValues({ ...values, hasRabbitHiringRequirement: event.target.value })}
          />
        </div>

        <div className="separator-container">
          <FormGroup>
            <FormLabel id="demo-row-radio-buttons-group-label">If yes, give example of 3 challenges?</FormLabel>
            <br />
            <InputTextfield placeholder="Example one" handleChange={(event: any) => setValues({ ...values, hiringRequirements1: event.target.value })} />
            <InputTextfield placeholder="Example two" handleChange={(event: any) => setValues({ ...values, hiringRequirements2: event.target.value })} />
            <InputTextfield placeholder="Example three" handleChange={(event: any) => setValues({ ...values, hiringRequirements3: event.target.value })} />
          </FormGroup>
        </div>

        <div className="separator-container">
          <FormGroup>
            <FormLabel id="demo-row-radio-buttons-group-label">In which areas do you plan to hire/recruit new farm workers/staff: Give names of positions</FormLabel>
            <br />
            <InputTextfield placeholder="Example one" handleChange={(event: any) => setValues({ ...values, hiringPositions1: event.target.value })} />
            <InputTextfield placeholder="Example two" handleChange={(event: any) => setValues({ ...values, hiringPositions2: event.target.value })} />
            <InputTextfield placeholder="Example three" handleChange={(event: any) => setValues({ ...values, hiringPositions3: event.target.value })} />
          </FormGroup>
        </div>

        <div style={{ display: 'flex', marginLeft: 'auto', width: '30%', marginTop: 30 }}>
          <PrimaryButton disabled={disabled} onClick={handleSubmit} label="Submit" />
        </div>
      </div>
    </div>
  )
}

export default RabbitFarming


const pigFarmingOccupationArr = [
  {
    label: 'Main income generating activity',
    id: 'Main income generating activity'
  },
  {
    label: 'Supplementary business ',
    id: 'Supplementary business '
  },
  {
    label: 'Others',
    id: 'other'
  },
]

const pigBreedsArr = [
  {
    label: 'Local breed rabbits',
    id: 'Local breed rabbits'
  },
  {
    label: 'Exotic breeds rabbits',
    id: 'Exotic breeds rabbits'
  },
  {
    label: 'Cross breed rabbits',
    id: 'Cross breed rabbits'
  },
  {
    label: 'Others',
    id: 'other'
  },

]

const truthItems = [
  {
    label: 'Yes',
    id: true
  },
  {
    label: 'No',
    id: false
  },
]

const pigMonthlyIncome = [
  {
    label: '0 - 50,000',
    id: '0-50,000'
  },
  {
    label: '50,000 – 200, 000',
    id: '50,000 – 200, 000'
  },
  {
    label: '200,000 – 500,000',
    id: '200,000 – 500,000'
  },
  {
    label: 'Above 500,000',
    id: 'Above 500,000'
  },
]

const pigsCompetitorsComparisonArr = [
  {
    label: 'High',
    id: 'High'
  },
  {
    label: 'No difference',
    id: 'No difference'
  },
  {
    label: 'Low quality',
    id: 'Low quality'
  },
  {
    label: 'Others',
    id: 'other'
  },
]

const pigsMarketOutletPreferenceArr = [
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
    label: 'Others ',
    id: 'other'
  },
]

const pigsTechnicalContraintsArr = [
  {
    label: 'Lack of / limited skills on diseases/ outbreaks diagnosis',
    id: 'Lack of / limited skills on Diseases/ Outbreaks diagnosis'
  },
  {
    label: 'Lack of/ limited skills in sourcing the breeding stock',
    id: 'Lack of/ limited skills in sourcing the breeding stock'
  },
  {
    label: 'Lack/ limited skills in feeds formulation/ feeding',
    id:'Lack/ limited skills in feeds formulation/ feeding'
  },
  {
    label: 'Lack of skilled/ competent farm workers',
    id: 'Lack of skilled/ competent farm workers'
  },
  {
    label: 'Lack of skilled/competent veterinary technicians',
    id: 'Lack of skilled/competent veterinary technicians'
  },
  {
    label: 'Lack of/ limited skills in acquiring capital and making cost-benefit analysis',
    id: 'Lack of/ limited skills in acquiring capital and making cost-benefit analysis'
  },
  {
    label: 'Lack of/ limited skills in creating linkage to the Markets',
    id: 'Lack of/ limited skills in creating linkage to the Markets'
  },
  {
    label: 'Lack of information in designing of appropriate housing	',
    id: 'Lack of information in designing of appropriate housing	'
  },

  {
    label: ' Lack of skills on best farming good practices',
    id: ' Lack of skills on best farming good practices'
  },
  {
    label: 'Lack of skills on farm record keeping',
    id: 'Lack of skills on farm record keeping'
  },
  {
    label: 'Others ',
    id: 'other'
  },
]

const PigstypeOfStaffArr = [
  {
    label: 'Farm Manager',
    id: 'Farm Manager'
  },
  {
    label: 'Farm veterinary technician',
    id: 'Farm veterinary technician'
  },
  {
    label: 'Farm Accountant ',
    id: 'Farm Accountant '
  },
  {
    label: 'Farm workers/ casual labors',
    id: 'Farm workers/ casual labors'
  },
]

const gettingCompetentWorkerArr = [
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
    label: 'Other',
    id: 'other'
  },
]
const technicalChallengesArr = [
  {
    label: 'Lack technical/practical skills',
    id: 'Lack technical/practical skills'
  },
  {
    label: 'Irresponsibility',
    id: 'Irresponsibility'
  },
  {
    label: 'Other',
    id: 'Other'
  },
]

const specificSkillsWorkersNeededArr = [
  {
    label: 'Veterinary technician',
    id: 'Veterinary technician'
  },
  {
    label: 'Farm workers (abashumba)',
    id: 'Farm workers (abashumba)'
  },
  {
    label: 'Management team',
    id: 'Management team'
  },
  {
    label: 'Other',
    id: 'Other'
  },
]
