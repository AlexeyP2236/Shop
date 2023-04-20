import React from 'react'
import ItemBasket from './ItemBasket'



const Basket = (props) => {
  return (
    <div>
      <div>
        {
          props.overlayProp.length>0?
          <div>
            {
              props.overlayProp.map(obj =>{
                return(
                 <ItemBasket
                 key={obj.id}
                 id={obj.id}
                 title={obj.title} 
                 price={obj.price}
                 img={obj.img}
                 deleteItems={props.deleteItems}
                 />
                )
              })
            }
            </div>

            :<h1 className='col-md-8 offset-md-2'>Корзина пуста</h1>

        }
        <div className='row'>
          {          
          props.overlayProp.length>0?

          <div className='col-md-8 offset-md-2'>
            <button type='button' className='w-10 btn btn-lg btn-primary'>Купить</button>
          </div>
          :
          <div></div>
          }

        </div>
      </div>
    </div>
  )
}

export default Basket