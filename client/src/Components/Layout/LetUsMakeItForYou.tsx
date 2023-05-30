import addOfferIcon from '../../assets/add.png'
import waitingIcon from '../../assets/stopwatch.png'
import acceptIcon from '../../assets/agreement.png'
import likeIcon from '../../assets/like.png'
import React from 'react'

export const LetUsMakeItForYou = () => {
  return (
    <div className={'white-color pb-16'}>
      <div className={'w-3/4 mx-auto mt-20 '}>
        <h1 className={'font-bold text-4xl py-10'}>Nechajte na nás vyriešiť Vaše problémy</h1>
        <div className={'flex flex-wrap justify-between '}>
          <div className={''}>
            <img src={addOfferIcon} className={'h-24 mx-auto'}></img>
            <h3 className={'font-semibold text-3xl pt-8'}>Vytvor zákazku</h3>
          </div>
          <div>
            <img src={waitingIcon} className={'h-24 mx-auto'} />
            <h3 className={'font-semibold text-3xl pt-8 '}>Počkaj na ponuky</h3>
          </div>
          <div>
            <img src={acceptIcon} className={'h-24 mx-auto'} />
            <h3 className={'font-semibold text-3xl pt-8'}>Prijmi ponuku</h3>
          </div>
          <div>
            <img src={likeIcon} className={'h-24 mx-auto'} />
            <h3 className={'font-semibold text-3xl pt-8'}>Dokonči svoj projekt</h3>
          </div>
        </div>
        {/* <a href="https://www.flaticon.com/free-icons/add" title="add icons">Add icons created by dmitri13 - Flaticon</a> */}
        {/* <a href="https://www.flaticon.com/free-icons/negotiate" title="negotiate icons">Negotiate icons created by Parzival’ 1997 - Flaticon</a> */}
        {/* <a href="https://www.flaticon.com/free-icons/like" title="like icons">Like icons created by Freepik - Flaticon</a> */}
      </div>
    </div>
  )
}
