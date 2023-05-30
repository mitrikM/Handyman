import React, { useState } from 'react'
import { CustomInput } from './FormComponents/CustomInput'

interface SearchFilterPropsInterface {
  title: string
  setTitle: React.Dispatch<React.SetStateAction<string>>
  location: string
  setLocation: React.Dispatch<React.SetStateAction<string>>
  category: any
  setCategory: React.Dispatch<React.SetStateAction<any>>
  chosenCategory: any
  setChosenCategory: React.Dispatch<React.SetStateAction<any>>
  onlyOpenOffers: boolean
  setOnlyOpenOffers: React.Dispatch<React.SetStateAction<boolean>>
}

const SearchFilter: React.FC<SearchFilterPropsInterface> = ({
  title,
  setTitle,
  location,
  setLocation,
  category,
  setCategory,
  setOnlyOpenOffers,
  onlyOpenOffers,
  chosenCategory,
  setChosenCategory,
}) => {
  return (
    <div className={''}>
      <div className={'flex-col ml-44 fixed pt-8'}>
        <div className={'pb-10'}>
          <h5 className={'pb-2 font-semibold text-sm'}>Vyhľadať podľa názvu</h5>
          <CustomInput
            value={title}
            label={''}
            name={'title'}
            placeholder={'Enter title'}
            type={'text'}
            onChange={(e) => setTitle(e.target.value)}
            className={'border-2 rounded w-full px-2'}
          />
        </div>

        <div className={'pb-10'}>
          <h5 className={'pb-2 font-semibold text-sm'}>Lokácia</h5>
          <CustomInput
            value={location}
            label={''}
            name={'location'}
            placeholder={'Enter location'}
            type={'text'}
            onChange={(e) => setLocation(e.target.value)}
            className={'border-2 rounded w-full px-2'}
          />
        </div>

        <div className={'pb-10'}>
          <h5 className={'pb-2 font-semibold text-sm'}>Kategória</h5>
          <select
            value={chosenCategory}
            onChange={(e) => setChosenCategory(e.target.value)}
            className='border-2 rounded-xl w-1/2 px-2 mt-1 w-full'
          >
            <option value=''>Vyberte obor</option>
            {category.map((category: any) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* <h5>Cenové rozmedzie</h5> */}
        {/* /!* Here, you might need to handle onChange differently, depending on your price range options *!/ */}
        {/* <CustomInput value={priceRange} label={'Price range'} name={'priceRange'} placeholder={'Select price range'} type={'radio'} */}
        {/*              onChange={(e) => setPriceRange(e.target.value)} className={''}/> */}

        <div className={'pb-10 flex my-auto'}>
          <CustomInput
            value={onlyOpenOffers.toString()}
            label={''}
            name={'onlyOpenOffers'}
            placeholder={''}
            type={'checkbox'}
            onChange={(e) => setOnlyOpenOffers(e.target.checked)}
            className={
              "mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
            }
          />
          <label className={' pl-[0.15rem] hover:cursor-pointer font-light text-sm my-auto'}>
            Zobraziť len open ponuky
          </label>
        </div>
      </div>
    </div>
  )
}

export default SearchFilter
