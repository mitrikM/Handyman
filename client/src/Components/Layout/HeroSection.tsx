import handymanPhoto from '../../assets/handyman-photo.jpg'
import React from 'react'

export const HeroSection = () => {
  return (
    <div className={'flex  w-3/4 bg-[#19A7CE] rounded-3xl mx-auto justify-between  mt-20 hero-div'}>
      <div className={''}>
        <div className={'pt-44 pl-14 '}>
          <h1 className={'font-black text-4xl pb-8 w-3/4'}>
            Dajte to do rúk profesionálovi. Najmite si lokálneho handymana
          </h1>
          <p className={'font-lg font-bold text-lg tracking-wide '}>
            Pridaj akúkoľvek zákazku. Vyber najlepšiu osobu. Nechaj si to spraviť
          </p>
          <div className={'flex  flex-wrap pt-20'}>
            <button className={'primary-button large-button mr-5'}>
              Pridaj zákazku bez poplatkov
            </button>
            <button className={'large-button third-button'}>Začni zarábať ako handyman</button>
          </div>
        </div>
      </div>
      <div className={''}>
        <img className='hero-img' src={handymanPhoto} alt={'photography of handyman'} />
      </div>
    </div>
  )
}
