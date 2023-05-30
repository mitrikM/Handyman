import React from 'react'
interface props {
  questions: number[]
}
export const ContractQuestions = ({ questions }: props) => {
  return (
    <div className={'mt-10'}>
      <h1 className={'font-extrabold  text-2xl'}>Otázky</h1>
    </div>
  )
}
