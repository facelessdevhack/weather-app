import React from 'react'

function FavBtn(props) {
    return (
        <div>
          {props.t === ''
          ? 
          <img disabled src={props.ic} alt='unselectedStar' className='cities_tabs_icons' />
          : <img onClick={props.func} disabled src={props.ic} alt='unselectedStar' className='cities_tabs_icons' />
          }  
        </div>
    )
}

export default FavBtn
