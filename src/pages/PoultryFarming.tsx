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
  



  return (
    <div>

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






