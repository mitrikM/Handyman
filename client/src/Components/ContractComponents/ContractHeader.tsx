import calendar from '../../assets/calendarBlack.png'
import locationImg from '../../assets/locationBlack.png'
import React from 'react'
import user from '../../assets/user.png'

interface contractHeaderProps {
  title: string
  doneIn: string
  location: string
  createdBy: number
  salary: string
  userName: string
}

export const ContractHeader = ({
                                 title,
                                 doneIn,
                                 location,
                                 createdBy,
                                 salary,
                                 userName,
                               }: contractHeaderProps) => {
  return (
    <div className={'flex justify-between'}>
      <div className={'w-1/2'}>
        <h1 className={'mt-5 max-w-md font-black text-5xl'}>{title}</h1>
        <div className={'pt-6 flex justify-between'}>
          <div>
            <div className={'flex pb-4'}>
              <img src={calendar} className={'h-5 my-auto mr-2'} alt={'calendar'} />
              <p className={'font-bold text-lg my-auto'}>{doneIn.toString()}</p>
            </div>
            <div className={'flex'}>
              <img src={locationImg} className={'h-6 my-auto mr-1'} alt={'location'} />
              <p className={'font-bold text-lg my-auto'}>{location}</p>
            </div>
          </div>
          <div>
            <h1 className={'mx-auto text-xl font-semibold pb-2'}>Vlastník zákazky</h1>
            <div className={'flex'}>
              <img src={user} className={'h-6 my-auto mr-1'} />
              <h2 className={'my-auto text-lg font-bold'}>{userName}</h2>
            </div>
          </div>
        </div>
      </div>
      <div className={''}>
        <div className={' p-6 white-color flex flex-col items-center justify-center rounded-2xl'}>
          <h3 className={'font-semibold text-xl pb-2'}>Rozpočet</h3>
          <h1 className={'font-extrabold pb-4 text-6xl '}>{salary} €</h1>
          <button className={'primary-button large-button font-extrabold text-2xl '}>
            Poslať ponuku
          </button>
        </div>
      </div>
    </div>
  )
}
