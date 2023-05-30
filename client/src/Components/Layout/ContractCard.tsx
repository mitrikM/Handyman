import React from 'react'
import calendar from '../../assets/calendar.png'
import dot from '../../assets/dot.png'
import locationImg from '../../assets/location.png'
import { useNavigate } from 'react-router-dom'

interface ContractCardProps {
  title: string
  doneIn: string
  location: string
  description: string
  status: string
  salary: number
  offers: number[]
  _id: string
  fieldOfWork: string
}

export const ContractCard: React.FC<ContractCardProps> = ({
  _id,
  title,
  fieldOfWork,
  doneIn,
  location,
  description,
  status,
  salary,
  offers,
}) => {
  const navigate = useNavigate()
  const truncateDescription = (text: string, characterLimit: number) => {
    return text.length > characterLimit ? `${text.slice(0, characterLimit)}... Read more` : text
  }
  const handleOnClick = () => {
    navigate(`/contract/${_id}`)
  }

  return (
    <div className={'flex justify-center'}>
      <div className='w-1/2 primary-color px-6 py-4 shadow-lg rounded-3xl  mb-8'>
        <div className='mb-3'>
          <h1 className='text-3xl  font-black text-white'>{title}</h1>
        </div>
        <div className='flex   mb-4'>
          <h1 className={'text-xl font-bold text-white'}>€ {salary}</h1>
          <img src={dot} className={'h-5 my-auto'} alt={'dot'} />
          <img src={calendar} className={'h-5 my-auto mr-2'} alt={'calendar'} />
          <p className={'white-text font-bold text-lg'}>{doneIn.toString()}</p>
          <img src={dot} className={'h-5 my-auto'} alt={'dot'} />
          <img src={locationImg} className={'h-6 my-auto mr-1'} alt={'location'} />
          <p className={'white-text font-bold text-lg'}>{location}</p>
        </div>
        <div className='mb-4 h-14 '>
          <p className='white-text font-bold'>{truncateDescription(description, 220)}</p>
        </div>
        <div className='flex justify-between'>
          <div className={'flex my-auto'}>
            <h3 className={'white-text font-bold text-xl'}>{status}</h3>
            <img src={dot} className={'h-5 my-auto'} alt={'dot'} />
            <h4 className={'white-text font-bold text-xl'}>{offers.length} ponuk</h4>
          </div>
          <button className='third-button large-button' onClick={handleOnClick}>
            Check details
          </button>
        </div>
      </div>
    </div>
  )
}
