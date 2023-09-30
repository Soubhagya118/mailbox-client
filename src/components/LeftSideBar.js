import React from 'react'

const LeftSideBar = () => {
  return (
    <div >
       <div className='w-32 border-2 border-black h-12 flex flex-col'>
    <div>
    <button onClick={composeHandler} className='border-2 border-gray rounded-3xl shadow-lg px-5 py-2 '> compose</button>

    </div>
    <div>
      <ul className='flex flex-col'>
        <NavLink to='/inbox'>Inbox</NavLink>
        <NavLink to="/sent">Sent</NavLink>
      </ul>
    </div>
    </div>
    </div>
  )
}

export default LeftSideBar
