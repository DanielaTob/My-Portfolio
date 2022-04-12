import React, { useState } from 'react'
import img1 from '../assets/illustration2.png'
import img2 from '../assets/illustration3.png'
import img3 from '../assets/illustration4.png'


export default function AnimationTwo() {

  const [contador, setContador] = useState(0);

  const array = [img2,img3,img1] //dejar la primera en el ultimo puesto del array

  function animate () {
    const img = document.getElementById("one")
    setContador(contador + 1)                       //Sumarle + 1 al contador
   /*  console.log(contador);
    console.log(array.length); */
    if(contador +1 > array.length - 1){   //si el conatdor ya se esta pasando del array, va areiciar la posicion del estado, para que vuelva a inicar en cero
      setContador(0) //setearlo nuevamente para que no sobrepase el limite de imagenes que hay
    }
    img.src = array[contador];                        //cambiarle valor al src 
     /*  console.log(img) */
  }
  

  return (
    <div>
        <div className='cursor-pointer'>
        <img id="one" onClick={animate} src={img1} alt="img1" title='click me!'/>
        </div>
    </div>
  )
}
