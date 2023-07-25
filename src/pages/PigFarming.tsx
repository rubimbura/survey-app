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

  // const handletechnicalContraintsChange = (id: any) => {
  //   //@ts-ignore
  //   technicalContraintsArr[id].isSelected = !technicalContraintsArr[id].isSelected
  //   setCheckedItems(!checkedItems)
  // }

  // const handleTypeOfStaffChange = (id: any) => {
  //   //@ts-ignore
  //   typeOfStaffArr[id].isSelected = !typeOfStaffArr[id].isSelected
  //   setCheckedItems(!checkedItems)
  // }

  // const handlespecificSkillsWorkersNeededChange = (id: any) => {
  //   //@ts-ignore
  //   specificSkillsWorkersNeededArr[id].isSelected = !specificSkillsWorkersNeededArr[id].isSelected
  //   setCheckedItems(!checkedItems)
  // }


  const handleSubmit = () => {
  //   setDisabled(true)
  //   const technicalContraint = technicalContraintsArr.filter((el: any) => el.isSelected).map((el => el.label))
  //   if(values.technicalContraintOther){
  //     technicalContraint.push(values.technicalContraintOther)
  //     delete values.technicalContraintOther
  //   }
  //   const typeOfStaff = typeOfStaffArr.filter((el: any) => el.isSelected).map((el => el.label))
  //   if(values.typeOfStaffOther) {
  //     typeOfStaff.push(values.typeOfStaffOther)
  //     delete values.typeOfStaffOther
  //   }

  //   const specificSkillsWorkersNeeded = specificSkillsWorkersNeededArr.filter((el: any) => el.isSelected).map((el => el.label))
  //   if(values.specificSkillsWorkersNeededOther) {
  //     specificSkillsWorkersNeeded.push(values.specificSkillsWorkersNeededOther)
  //     delete values.specificSkillsWorkersNeededOther
  //   }

  //   const womenYouthChallengeExample = []
  //   if(values.womenYouthChallengeExampleOther1){
  //     womenYouthChallengeExample.push(values.womenYouthChallengeExampleOther1)
  //     delete values.womenYouthChallengeExampleOther1
  //   }
  //   if(values.womenYouthChallengeExampleOther2){
  //     womenYouthChallengeExample.push(values.womenYouthChallengeExampleOther2)
  //     delete values.womenYouthChallengeExampleOther2
  //   }

  //   const hiringRequirements = []
  //   if(values.hiringRequirements1){
  //     hiringRequirements.push(values.hiringRequirements1)
  //     delete values.hiringRequirements1
  //   }
  //   if(values.hiringRequirements2){
  //     hiringRequirements.push(values.hiringRequirements2)
  //     delete values.hiringRequirements2
  //   }
  //   if(values.hiringRequirements3){
  //     hiringRequirements.push(values.hiringRequirements3)
  //     delete values.hiringRequirements3
  //   }

  //   const hiringPositions = []
  //   if(values.hiringPositions1){
  //     hiringPositions.push(values.hiringPositions1)
  //     delete values.hiringPositions1
  //   }
  //   if(values.hiringPositions3){
  //     hiringPositions.push(values.hiringPositions2)
  //     delete values.hiringPositions3
  //   }
  //   if(values.hiringPositions3){
  //     hiringPositions.push(values.hiringPositions3)
  //     delete values.hiringPositions3
  //   }
    
  //   const savedItem =  sessionStorage.getItem('requireFields') || ''
  //   const formattedData = JSON.parse(savedItem)
  //   const payload = {
  //     ...values,
  //     hiringPositions,
  //     hiringRequirements,
  //     womenYouthChallengeExample,
  //     specificSkillsWorkersNeeded,
  //     typeOfStaff,
  //     technicalContraint,
  //     breedOfDairyCattle,
  //     ...formattedData
  // }

  // const url = 'https://survey-app-heroku-4b2ea8ed2f87.herokuapp.com/information'
  // axios.post(url, payload)
  //   .then((response: any) => {
  //     console.log('Post successful:', response);
  //   setDisabled(false)
  //   navigate('/success')
  //   sessionStorage.removeItem('requireFields')
  //   })
  //   .catch((error:any) => {
  //     console.error('Error posting data:', error);
  //   setDisabled(false)
  //   });

  const breedOfDairyCattle = pigBreedsArr.filter((el: any) => el.isSelected).map((el => el.label))
  
}



  return (
    <div className="home-page-container">
      <HeaderNav />
      <div style={{ padding: 48 }}>

      <div className="separator-container">
          <RadioButton
            label="How do you consider your dairy farming occupation?"
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
                three: event.target.value === 'other'
              })
            }
            }
          />
          <div style={{marginTop:10}}></div>
          {other.three &&
            <InputTextfield  placeholder="Other" handleChange={(event: any) => setValues({
              ...values,
              pigsMarketOutletPreference: event.target.value
            })} />
          }
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
