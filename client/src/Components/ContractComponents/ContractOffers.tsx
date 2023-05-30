import React from 'react'
interface props {
  offers: number[]
}
export const ContractOffers = ({ offers }: props) => {
  return (
    <div className={'mt-10'}>
      <h1 className={'font-extrabold  text-2xl'}>Ponuky</h1>
      <div></div>
    </div>
  )
}
