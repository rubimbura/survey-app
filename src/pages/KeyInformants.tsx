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


const KeyInformants = () => {

  const navigate = useNavigate()
  const [values, setValues] = useState<any>({})
  const [checkedItems, setCheckedItems] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const handletechnicalContraintsChange = (id: any) => {
    //@ts-ignore
    mccTechnicalContraintsArr[id].isSelected = !mccTechnicalContraintsArr[id].isSelected
    setCheckedItems(!checkedItems)
  }

  const handleStatusChange = (id: number) => {
    //@ts-ignore
    informantCurrentStatusArr[id].isSelected = !informantCurrentStatusArr[id].isSelected
    setCheckedItems(!checkedItems)
  }

  const handleJobChange = (id: number) => {
    //@ts-ignore
    informantJobCreationArr[id].isSelected = !informantJobCreationArr[id].isSelected
    setCheckedItems(!checkedItems)
  }

  const handleOpportunities = () => {

  }



  const handleSubmit = () => {

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

  }


  return (
    <div className="home-page-container">
      <HeaderNav />
      <div style={{ padding: 48 }}>
        <div className="separator-container">
          <InputTextfield placeholder="Name of institution/district/sector" handleChange={(event: any) =>
            setValues({
              ...values,
              informantInstitution: event.target.value
            })} />
        </div>

        <div className="separator-container">
          <InputTextfield placeholder="Job title of respondent" handleChange={(event: any) =>
            setValues({
              ...values,
              informantJobTitle: event.target.value
            })} />
        </div>

        <FormGroup>
          <FormLabel style={{ textTransform: 'uppercase', marginBottom: 30, color: '#67B17B' }} id="demo-row-radio-buttons-group-label">How would you describe the status of livestock value chains in your institution/district/sector?</FormLabel>
        </FormGroup>

          {
            keyInformantsItems.map(el=> {
              return(
                <>
                  <FormGroup>
                    <FormLabel style={{ marginBottom: 10, fontWeight: 'bold' }} id="demo-row-radio-buttons-group-label">{el.label}</FormLabel>
                  </FormGroup>
                  {
                    el.items.map( val => {
                      if(val.label) {
                        return(
                          <div>
                            <InputTextfield placeholder={val.label} handleChange={{}} />
                          </div>
                        )
                      }
                      if(val.question){
                        return(
                          <>
                          <FormGroup>
                            <FormLabel style={{ marginBottom: 10 }} id="demo-row-radio-buttons-group-label">{val.question.label}</FormLabel>
                          </FormGroup>
                          {val.question.content.map(acc=>{
                            return(
                              <div>
                            <InputTextfield placeholder={acc.label} handleChange={{}} />
                          </div>
                            )
                          })}
                          </>
                        )
                      }
                    })
                  }
                </>
              )
            })
          }


        {/* <div className="separator-container">
          <FormGroup>
            <FormLabel id="demo-row-radio-buttons-group-label"></FormLabel>
            <div style={{ marginTop: 10 }}></div>
            {informantCurrentStatusArr.map(el => {
              return (
                
              )
            })}
          </FormGroup>
        </div> */}







        <div style={{ display: 'flex', marginLeft: 'auto', width: '30%', marginTop: 30 }}>
          <PrimaryButton disabled={disabled} onClick={handleSubmit} label="Submit" />
        </div>

      </div>
    </div>
  )
}

export default KeyInformants



const keyInformantsItems = [
  {
      label: 'In Dairy Cattle (general current state & livestock farming/production)',
      items: [
        {
          label: 'Current status'
        },
        {
          label: 'Potential demand for livestock related products'
        },
        {
          label: 'Competition in Rwandan market/ export market'
        },
        {
          label: 'Challenges'
        },
        {
          label: 'Opportunities'
        },
        {
          question:{
            label: 'What are opportunities for job creation in the dairy cattle farming and related businesses?',
          content:[
            {
            label: 'In general: '
          },
          {
            label: 'Youth:'
          },
          {
            label: 'Women:'
          },
          {
            label: 'Persons with disabilities:'
          }
        ]
          } 
        },

        {
          question:{
            label: 'What are the potential opportunities for expanding the dairy cattle farming and related businesses?',
          content:[
            {
            label: 'New market opportunities: '
          },
          {
            label: 'Diversification into other by products'
          },
          {
            label: 'Distribution strategies in Rwandan market'
          },
        ]
          } 
        }
      ]
  },
]

const informantCurrentStatusArr = [
  {
    label: 'Current status',
    id: 'Current status'
  },
  {
    label: 'Potential demand for livestock related products',
    id: 'Potential demand for livestock related products'
  },
  {
    label: 'Competition in Rwandan market/ export market',
    id: 'Competition in Rwandan market/ export market'
  },
  {
    label: 'Challenges',
    id: 'Challenges'
  },
  {
    label: 'Opportunities',
    id: 'Opportunities'
  },
]

const informantJobCreationArr = [
  {
    label: 'In general',
    id: 'In general'
  },
  {
    label: 'Special for youth if available',
    id: 'Special for youth if available'
  },
  {
    label: 'Special for women if available',
    id: 'Special for women if available'
  },
  {
    label: 'Special for persons with disabilities if available',
    id: 'Special for persons with disabilities if available'
  },

]

const informantPotentialOpportunitiesArr = [
  {
    label: 'For new market opportunities',
    id: 'For new market opportunities'
  },
  {
    label: 'For diversification into other by products',
    id: 'For diversification into other by products'
  },
  {
    label: 'For distribution strategies in Rwandan market',
    id: 'For distribution strategies in Rwandan market'
  },

]

const informantLiveStockRecomendationsArr = [
  {
    label: 'To Farmers',
    id: 'To Farmers'
  },
  {
    label: 'To MCCs',
    id: 'To MCCs'
  },
  {
    label: 'Milk Processors',
    id: 'Milk Processors'
  },

  {
    label: 'Meat processors',
    id: 'Meat processors'
  },
  {
    label: 'Skin processors',
    id: 'Skin processors'
  },
  {
    label: 'To Traders (milk, meat, eggs)',
    id: 'To Traders (milk, meat, eggs)'
  },

  {
    label: 'To Service providers (vets,…)',
    id: 'To Service providers (vets,…): '
  },

]

const informantStakeHolderContactDetailsArr = [

  {
    label: 'For Most powerful livestock farmers/producers/ traders',
    id: 'For Most powerful livestock farmers/producers/ traders'
  },
  {
    label: 'For MCCs and milk transporters',
    id: 'For MCCs and milk transporters'
  },
  {
    label: 'For Livestock by products processors/ distributors',
    id: 'For Livestock by products processors/ distributors'
  },

  {
    label: 'For Meat processors/distributors',
    id: 'For Meat processors/distributors'
  },

]



