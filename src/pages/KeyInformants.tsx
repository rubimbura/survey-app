// import InputTextfield from "../components/inputField"
// import './index.scss'
// import PrimaryButton from "../components/button"
// import { useState } from 'react'
// import HeaderNav from "../components/Header"
// import { useNavigate } from 'react-router-dom'
// import RadioButton from "../components/radioButton"
// import CheckboxComponent from "../components/checkbox"
// import FormGroup from '@mui/material/FormGroup';
// import FormLabel from '@mui/material/FormLabel';
// import axios from 'axios'


// const KeyInformants = () => {

//   const navigate = useNavigate()
//   const [values, setValues] = useState<any>({})
//   const [checkedItems, setCheckedItems] = useState(false)
//   const [disabled, setDisabled] = useState(false)

//   const handletechnicalContraintsChange = (id: any) => {
//     //@ts-ignore
//     mccTechnicalContraintsArr[id].isSelected = !mccTechnicalContraintsArr[id].isSelected
//     setCheckedItems(!checkedItems)
//   }

//   const handleStatusChange = (id:number) => {
//     //@ts-ignore
//     informantCurrentStatusArr[id].isSelected = !informantCurrentStatusArr[id].isSelected
//     setCheckedItems(!checkedItems)
//   }

//   const handleJobChange = (id:number) => {
//     //@ts-ignore
//     informantJobCreationArr[id].isSelected = !informantJobCreationArr[id].isSelected
//     setCheckedItems(!checkedItems)
//   }

//   const handleOpportunities = () => {

//   }

//   const handleLiveStock = () => {

//   }

//   const handleLiveStock = () => {

//   }

//   const handleSubmit = () => {

//     const informantCurrentStatus = informantCurrentStatusArr.filter((el: any) => el.isSelected).map((el => el.label))
//     const informantJobCreation = informantJobCreationArr.filter((el: any) => el.isSelected).map((el => el.label))

//     const informantPotentialOpportunities = informantPotentialOpportunitiesArr
//     const informantLiveStockRecomendations = informantLiveStockRecomendationsArr
//     const informantChallenges = 


//     // const mccTechnicalContraints = []
//     // if(values.technicalContraintOther){
//     //   mccTechnicalContraints.push(values.technicalContraintOther)
//     //   delete values.technicalContraintOther
//     // }

//     // const mccHiringRequirements = []
//     // if(values.hiringRequirements1){
//     //   mccHiringRequirements.push(values.hiringRequirements1)
//     //   delete values.hiringRequirements1
//     // }
//     // if(values.hiringRequirements2){
//     //   mccHiringRequirements.push(values.hiringRequirements2)
//     //   delete values.hiringRequirements2
//     // }
//     // if(values.hiringRequirements3){
//     //   mccHiringRequirements.push(values.hiringRequirements3)
//     //   delete values.hiringRequirements3
//     // }


//     // const mccHiringPositions = []
//     // if(values.hiringPositions1){
//     //   mccHiringPositions.push(values.hiringPositions1)
//     //   delete values.hiringPositions1
//     // }
//     // if(values.hiringPositions3){
//     //   mccHiringPositions.push(values.hiringPositions2)
//     //   delete values.hiringPositions3
//     // }
//     // if(values.hiringPositions3){
//     //   mccHiringPositions.push(values.hiringPositions3)
//     //   delete values.hiringPositions3
//     // }

//     const savedItem =  sessionStorage.getItem('requireFields') || ''
//     const formattedData = JSON.parse(savedItem)
//     const payload = {
//       ...values,
//       mccHiringPositions,
//       mccHiringRequirements,
//       mccTechnicalContraints,
//       ...formattedData
//   }

//   const url = 'https://survey-app-heroku-4b2ea8ed2f87.herokuapp.com/information'
//   axios.post(url, payload)
//     .then((response: any) => {
//       console.log('Post successful:', response);
//     setDisabled(false)
//     navigate('/success')
//     sessionStorage.removeItem('requireFields')
//     })
//     .catch((error:any) => {
//       console.error('Error posting data:', error);
//     setDisabled(false)
//     });

//   }


//   return(
//     <div className="home-page-container">
//         <HeaderNav />
//         <div style={{padding: 48}}>
//       <div className="separator-container">
//           <InputTextfield placeholder="Name of institution/district/sector" handleChange={(event: any) =>
//             setValues({
//               ...values,
//               informantInstitution: event.target.value
//             })} />
//         </div>

//         <div className="separator-container">
//           <InputTextfield  placeholder="Job title of respondent" handleChange={(event: any) =>
//             setValues({
//               ...values,
//               informantJobTitle: event.target.value
//             })} />
//         </div>

//         <div className="separator-container">
//           <FormGroup>
//             <FormLabel id="demo-row-radio-buttons-group-label">How would you describe the status of livestock value chains in your institution/district/sector?</FormLabel>
//             {informantCurrentStatusArr.map((el: any, idx: any) => {
//               if (el.isSelected === undefined) {
//                 el.isSelected = false
//               }
//               return (
//                 <div style={{ display: 'flex', alignItems: 'center' }} onClick={() => handleStatusChange(idx)}>
//                   <CheckboxComponent
//                     checked={el.isSelected}
//                   />
//                   <FormLabel id="demo-row-radio-buttons-group-label">{el.label}</FormLabel>
//                 </div>
//               )
//             })}
//           </FormGroup>
//         </div>

//         <div className="separator-container">
//           <FormGroup>
//             <FormLabel id="demo-row-radio-buttons-group-label">How would you describe the status of livestock value chains in your institution/district/sector?</FormLabel>
//             {informantJobCreationArr.map((el: any, idx: any) => {
//               if (el.isSelected === undefined) {
//                 el.isSelected = false
//               }
//               return (
//                 <div style={{ display: 'flex', alignItems: 'center' }} onClick={() => handleJobChange(idx)}>
//                   <CheckboxComponent
//                     checked={el.isSelected}
//                   />
//                   <FormLabel id="demo-row-radio-buttons-group-label">{el.label}</FormLabel>
//                 </div>
//               )
//             })}
//           </FormGroup>
//         </div>

//         <div className="separator-container">
//           <FormGroup>
//             <FormLabel id="demo-row-radio-buttons-group-label">What are the potential opportunities for expanding the dairy cattle farming and related businesses?</FormLabel>
//             {informantPotentialOpportunitiesArr.map((el: any, idx: any) => {
//               if (el.isSelected === undefined) {
//                 el.isSelected = false
//               }
//               return (
//                 <div style={{ display: 'flex', alignItems: 'center' }} onClick={() => handleOpportunities(idx)}>
//                   <CheckboxComponent
//                     checked={el.isSelected}
//                   />
//                   <FormLabel id="demo-row-radio-buttons-group-label">{el.label}</FormLabel>
//                 </div>
//               )
//             })}
//           </FormGroup>
//         </div>

//         <div className="separator-container">
//           <FormGroup>
//             <FormLabel id="demo-row-radio-buttons-group-label">What recommendations can you suggest for livestock interventions that would promote job creation at different level of the values chain:</FormLabel>
//             {informantLiveStockRecomendationsArr.map((el: any, idx: any) => {
//               if (el.isSelected === undefined) {
//                 el.isSelected = false
//               }
//               return (
//                 <div style={{ display: 'flex', alignItems: 'center' }} onClick={() => handleLiveStock(idx)}>
//                   <CheckboxComponent
//                     checked={el.isSelected}
//                   />
//                   <FormLabel id="demo-row-radio-buttons-group-label">{el.label}</FormLabel>
//                 </div>
//               )
//             })}
//           </FormGroup>
//         </div>

//         <div className="separator-container">
//           <FormGroup>
//             <FormLabel id="demo-row-radio-buttons-group-label">Do you have list and contact details of key stakeholders and actors in the livestock landscape in your area?</FormLabel>
//             {informantChallenges.map((el: any, idx: any) => {
//               if (el.isSelected === undefined) {
//                 el.isSelected = false
//               }
//               return (
//                 <div style={{ display: 'flex', alignItems: 'center' }} onClick={() => handleContactChange(idx)}>
//                   <CheckboxComponent
//                     checked={el.isSelected}
//                   />
//                   <FormLabel id="demo-row-radio-buttons-group-label">{el.label}</FormLabel>
//                 </div>
//               )
//             })}
//           </FormGroup>
//         </div>

        
//         <div style={{ display: 'flex', marginLeft: 'auto', width: '30%', marginTop: 30 }}>
//           <PrimaryButton disabled={disabled} onClick={handleSubmit} label="Submit" />
//         </div>

//       </div>
//     </div>
//   )
// }

// export default KeyInformants

// const informantCurrentStatusArr = [
//   {
//       label: 'Current status in general related to your business/ institution/ cooperative',
//       id: 'Current status in general related to your business/ institution/ cooperative'
//     },
//     {
//       label: 'Potential demand for livestock related products',
//       id:   'Potential demand for livestock related products'
//     },
//     {
//       label: 'Competition in Rwandan market/ export market',
//       id: 'Competition in Rwandan market/ export market'
//     },
//     {
//       label: 'Challenges',
//       id: 'Challenges'
//     },
//     {
//       label: 'Opportunities',
//       id: 'Opportunities'
//     },
// ]

// const informantJobCreationArr = [
//   {
//       label: 'In general',
//       id: 'In general'
//     },
//     {
//       label: 'Special for youth if available',
//       id:   'Special for youth if available'
//     },
//     {
//       label: 'Special for women if available',
//       id: 'Special for women if available'
//     },
//     {
//       label: 'Special for persons with disabilities if available',
//       id: 'Special for persons with disabilities if available'
//     },
    
// ]

// const informantPotentialOpportunitiesArr = [
//   {
//       label: 'For new market opportunities',
//       id: 'For new market opportunities'
//     },
//     {
//       label: 'For diversification into other by products',
//       id:   'For diversification into other by products'
//     },
//     {
//       label: 'For distribution strategies in Rwandan market',
//       id: 'For distribution strategies in Rwandan market'
//     },
    
// ]

// const informantLiveStockRecomendationsArr = [
//   {
//       label: 'To Farmers',
//       id: 'To Farmers'
//     },
//     {
//       label: 'To MCCs',
//       id:   'To MCCs'
//     },
//     {
//       label: 'Milk Processors',
//       id: 'Milk Processors'
//     },

//     {
//       label: 'Meat processors',
//       id: 'Meat processors'
//     },
//     {
//       label: 'Skin processors',
//       id:   'Skin processors'
//     },
//     {
//       label: 'To Traders (milk, meat, eggs)',
//       id: 'To Traders (milk, meat, eggs)'
//     },

//     {
//       label: 'To Service providers (vets,…)',
//       id: 'To Service providers (vets,…): '
//     },
    
// ]

// const informantStakeHolderContactDetailsArr = [

//   {
//     label: 'For Most powerful livestock farmers/producers/ traders',
//     id: 'For Most powerful livestock farmers/producers/ traders'
//   },
//   {
//     label: 'For MCCs and milk transporters',
//     id:   'For MCCs and milk transporters'
//   },
//   {
//     label: 'For Livestock by products processors/ distributors',
//     id: 'For Livestock by products processors/ distributors'
//   },

//   {
//     label: 'For Meat processors/distributors',
//     id: 'For Meat processors/distributors'
//   },

//   ]



export default {}