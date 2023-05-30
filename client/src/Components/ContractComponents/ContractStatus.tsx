interface props {
  status: string
}
export const ContractStatus = ({ status }: props) => {
  return (
    <div className={'flex w-1/4 justify-between pt-5 '}>
      <h3
        className={
          status === 'Open' ? 'primary-color rounded-full px-3 py-1 white-text ' : 'px-3 py-1'
        }
      >
        Open
      </h3>
      <h3
        className={
          status === 'Assigned' ? 'primary-color rounded-full px-3 py-1 white-text ' : 'px-3 py-1'
        }
      >
        Assigned
      </h3>
      <h3
        className={
          status === 'Closed' ? 'primary-color rounded-full px-3 py-1 white-text ' : 'px-3 py-1'
        }
      >
        Closed
      </h3>
    </div>
  )
}
