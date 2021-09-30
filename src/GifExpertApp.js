import React, {useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

// const categories = ['One punch', 'Samurai X', 'Dragon ball']


const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One punch', 'Samurai X', 'Dragon ball'])

  // const handleAdd = ()=>{
  //   const category = 'HunterXHunter'
  //   setCategories(state=> [...state, category])

  // }
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories = {setCategories}/>
      <hr/>
      {/* <button onClick={handleAdd}>Agregar</button> */}

      <ol>
        {
          categories.map( category => <GifGrid key={category} category={category}/> )
        }
      </ol>
    </>
  )
}

export default GifExpertApp;