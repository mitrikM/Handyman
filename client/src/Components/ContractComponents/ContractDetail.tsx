import React from 'react'
interface ContractDetailProps {
  description: string
}
export const ContractDetail = ({ description }: ContractDetailProps) => {
  return (
    <div className={'flex  mt-7'}>
      <div className={'w-1/2'}>
        <h1 className={'font-bold text-2xl'}>Detail</h1>
        <h4 className={'pt-4 '}>{description}</h4>
      </div>
      <div className={'pl-24'}>
        <h1 className={'font-bold text-2xl'}>Obrázky</h1>
      </div>
    </div>
  )
}
