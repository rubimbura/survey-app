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





  const handleSubmit = () => {
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

  console.log('the values we have', values)

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
    label: 'In Dairy Cattle (general current state & livestock farming/production)',
    value:'sampleData',
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
          label: 'What are opportunities for job creation in the dairy cattle farming and related businesses?',
          value: 'secondSampleValue',
          content: [
            {
              label: 'In general: ',
            },
            {
              label: 'Youth:',
            },
            {
              label: 'Women:',
            },
            {
              label: 'Persons with disabilities:',
            }
          ]
        }
      },
      {
        question: {
          label: 'What are opportunities for job creation in the dairy cattle farming and related businesses?',
          value: 'secondSampleValue',
          content: [
            {
              label: 'In general: ',
            },
            {
              label: 'Youth:',
            },
            {
              label: 'Women:',
            },
            {
              label: 'Persons with disabilities:',
            }
          ]
        }
      },
      {
        question: {
          label: '9.3.3.	What are the potential opportunities for expanding related to your business/ institution/ cooperative?',
          value: 'secondSampleValue',
          content: [
            {
              label: 'For new market opportunities:',
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
      {
        question: {
          label: 'What recommendations can you suggest for livestock interventions that would promote job creation at different level of the values chain (reminder to take notes for all value chains (Cattle, Small ruminants, Rabbits, Pig and Poultry):',
          value: 'secondSampleValue',
          content: [
            {
              label: 'For new market opportunities:',
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
    ]
  },
]

