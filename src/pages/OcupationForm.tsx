import InputTextfield from "../components/inputField.tsx"
import './index.scss'
import PrimaryButton from "../components/button"
import { useState } from 'react'
import HeaderNav from "../components/Header"
import { useNavigate } from 'react-router-dom'
import RadioButton from "../components/radioButton"
import CheckboxComponent from "../components/checkbox"
import TextArea from "../components/textArea"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';


const OccupationForm = () => {
  const navigate = useNavigate()
  const [values, setValues] = useState<any>({})
  const [other, setOther] = useState<any>({})
  const [checkedItems, setCheckedItems] = useState(false)



  const handleBreedChange = (id: any) => {
    //@ts-ignore
    breedOfDairyCattleArr[id].isSelected = !breedOfDairyCattleArr[id].isSelected
    setCheckedItems(!checkedItems)

  }

  const handleSubmit = () => {
    const breedOfDairyCattle = breedOfDairyCattleArr.filter((el: any) => el.isSelected).map((el => el.label))
    if (values.breedOfDairyCattleOther) {
      breedOfDairyCattle.push(values.breedOfDairyCattleOther)
    }

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
          <InputTextfield placeholder="How many dairy animals do you have in total" handleChange={(event: any) =>
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
          </FormGroup>
          <InputTextfield placeholder="other" handleChange={(event: any) => setValues({ ...values, breedOfDairyCattleOther: event.target.value })} />
        </div>

        <div className="separator-container">
          <InputTextfield placeholder="What is the average level of milk production per day in your farm?" handleChange={(event: any) => setValues({...values, averageProductionMilkPerDay: event.target.value})}/>
        </div>
        
        <div className="separator-container">
            <RadioButton label="Are you satisfied with your milk production yield?" 
            items={truthItems}
            handleChange={(event: any)=> setValues({...values, milkProductionSatisfaction:event.target.value})}
        />
        </div>

        <div className="separator-container">
          
        </div>

        <div style={{ display: 'flex', marginLeft: 'auto', width: '30%', marginTop: 30 }}>
          <PrimaryButton onClick={handleSubmit} label="Submit" />
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
    id: 'Others'
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