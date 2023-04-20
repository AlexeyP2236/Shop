import React from 'react'
import Item from './Item'
import axios from 'axios'

const CardItem = (props) => {

  const onAddOverlay = async (obj) => {
    try{
      const findOverlay = props.overlayItems.find(objOver=> objOver.myId === obj.myId);
      if(findOverlay){
        axios.delete(`https://642aef4500dfa3b54752ea67.mockapi.io/cart/${findOverlay.id}`);
        props.setOverlayItems((over) => over.filter(o=>o.myId !== obj.myId));
      }
      else{
        const {data} = await axios.post(`https://642aef4500dfa3b54752ea67.mockapi.io/cart`, obj)
        props.setOverlayItems([...props.overlayItems, data]);
      }

    }
    catch{
      alert('Error findOverlay');
    }
  }


  return (
    <div className='conteiner py-3'>
    {
      props.item.map(obj=>{
        return(
          <Item
          key={obj.id}
          id={obj.id}
          myId={obj.myId}
          title={obj.title}
          description={obj.description}
          price={obj.price}
          img={obj.img}

           onPlus={
            (objOver)=>{
              onAddOverlay(objOver)
           }}
          />
        )
      })
    }
  </div>
  )
}

export default CardItem