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
  const [disabled, setDisabled] = useState(false)



  const handleSubmit = () => {
    setDisabled(true)
    const savedItem = sessionStorage.getItem('requireFields') || ''
    const formattedData = JSON.parse(savedItem)
    const payload = {
      ...values,
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

  
  const handleChangeForItem = (key:any, event:any) => {
    const inputValue = event.target.value;
    setValues((prevValues:any) => ({
      ...prevValues,
      [key]: prevValues[key] ? [...prevValues[key], inputValue] : [inputValue],
    }));
  };

  const handleChangeForQuestion = (key:any, event:any) => {
    const inputValue = event.target.value;
    setValues((prevValues:any) => ({
      ...prevValues,
      [key]: prevValues[key] ? [...prevValues[key], inputValue] : [inputValue],
    }));
  };


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
          keyInformantsItems.map(el => {
            return (
              <>
                <FormGroup>
                  <FormLabel style={{ marginBottom: 10, fontWeight: 'bold' }} id="demo-row-radio-buttons-group-label">{el.label}</FormLabel>
                </FormGroup>
                {
                  el.items.map(val => {
                    if (val.label) {
                      return (
                        <div>
                          <InputTextfield
                            placeholder={val.label}
                            handleChange={(event:any) =>
                              handleChangeForItem(el.value, event)
                            }
                          />
                        </div>
                      )
                    }
                    if (val.question) {
                      return (
                        <>
                          <FormGroup>
                            <FormLabel style={{ marginBottom: 10 }} id="demo-row-radio-buttons-group-label">{val.question.label}</FormLabel>
                          </FormGroup>
                          {val.question.content.map(acc => {
                            return (
                              <div>
                                <InputTextfield 
                                  placeholder={acc.label} 
                                  handleChange={(event:any) =>
                                    handleChangeForQuestion(
                                      val.question.value,
                                      event
                                    )
                                  }
                                />
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
    label: 'What is the current state & livestock farming/production/market/ products/ traders? (reminder to take notes for all value chains (Cattle, Small ruminants, Rabbits, Pig and Poultry)',
    value:'informantCurrentStatus',
    items: [
      {
        label: 'Current status',
      },
      {
        label: 'Potential demand for livestock related products',
      },
      {
        label: 'Competition in Rwandan market/ export market',
      },
      {
        label: 'Challenges',
      },
      {
        label: 'Opportunities',
      },
      {
        question: {
          label: 'What are opportunities for job creation (new jobs or improved employments) in your related business/ institution/ cooperative? ',
          value: 'informantJobCreation',
          content: [
            {
              label: 'In general: ',
            },
            {
              label: 'Special for youth if available',
            },
            {
              label: 'Special for women if available',
            },
            {
              label: 'Special for persons with disabilities if available',
            }
          ]
        }
      },
      {
        question: {
          label: 'What are the potential opportunities for expanding related to your business/ institution/ cooperative?',
          value: 'informantPotentialOpportunities',
          content: [
            {
              label: 'For new market opportunities',
            },
            {
              label: 'For diversification into other by products',
            },
            {
              label: 'For distribution strategies in Rwandan market',
            },
          ]
        }
      },
      // {
      //   question: {
      //     label: 'What are the potential opportunities for expanding related to your business/ institution/ cooperative?',
      //     value: 'informantLiveStockRecomendations',
      //     content: [
      //       {
      //         label: 'For new market opportunities:',
      //       },
      //       {
      //         label: 'For diversification into other by products',
      //       },
      //       {
      //         label: 'For distribution strategies in Rwandan market',
      //       },
      //     ]
      //   }
      // },
      {
        question: {
          label: 'What recommendations can you suggest for livestock interventions that would promote job creation at different level of the values chain (reminder to take notes for all value chains (Cattle, Small ruminants, Rabbits, Pig and Poultry):',
          value: 'informantLiveStockRecomendations',
          content: [
            {
              label: 'To Farmers',
              id: 'To Farmers'
            },
            {
              label: 'To MCCs',
              id:   'To MCCs'
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
              id:   'Skin processors'
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
        }
      },
      {
        question: {
          label: 'What do you consider to be the main problems/challenges facing the Livestock industry in general in terms of job creation in your area? ',
          value: 'informantChallenges',
          content: [
            {
              label: 'Your answer',
              id: 'To Farmers'
            },
          ]
        }
      },
      // {
      //   question: {
      //     label: 'What do you consider to be the main problems/challenges facing the Livestock industry in general in terms of job creation in your area? ',
      //     value: 'informantChallenges',
      //     content: [
      //       {
      //         label: 'Your answer',
      //         id: 'To Farmers'
      //       },
      //     ]
      //   }
      // },
      {
        question: {
          label: 'Do you have any list and contact details of key stakeholders and actors in the livestock landscape in your area? (specific questions to district, and public institutions)',
          value: 'informantStakeHolderContactDetails',
          content: [
            {
              label: 'For Most powerful livestock farmers/producers/ traders',
              id: 'For Most powerful livestock farmers/producers/ traders'
            },
            {
              label: 'For MCCs and milk transporters',
              id:   'For MCCs and milk transporters'
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
        }
      },
      {
        question: {
          label: 'Can you share with us any by laws and regulations governing livestock industry on production, processing, transporting and marketing in the country/ district? (specific question to Minagri/RICA/RAB)',
          value: 'informantLawsRegulations',
          content: [
            {
              label: 'Your answer',
              id: 'To Farmers'
            },
          ]
        }
      },

      {
        question: {
          label: 'For banks, Do your bank offer loan to livestock activities? Yes/ No',
          value: 'isInformantBankOfferLoan',
          content: [
            {
              label: 'Yes/No',
              id: 'To Farmers'
            },
          ]
        }
      },
      {
        question: {
          label: 'If yes, at which interest rate for livestock businesses? ',
          value: 'informantLiveStockLoanInterest',
          content: [
            {
              label: 'Your answer',
              id: 'To Farmers'
            },
          ]
        }
      },
      {
        question: {
          label: 'At which interest rate for other businesses?',
          value: 'informantBusinessLoanInterest',
          content: [
            {
              label: 'Your answer',
              id: 'To Farmers'
            },
          ]
        }
      },
    ]
  },
]




