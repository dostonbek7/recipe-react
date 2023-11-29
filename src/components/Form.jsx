import React, { useContext, useState } from 'react'
import { dataContext } from '../context/GlobalContext'
import { v4 as uuidv4 } from 'uuid';

function Form() {
  const {state, addItem, deleteItem} = useContext(dataContext)
  const [closeModal, setCloseModal] = useState(true)
  const [data, setData] = useState({
    title: '',
    ingredinet: null,
    method: '',
    time: null
  })

  const handleSubmit = (e)=>{
    e.preventDefault()
    let id = Math.floor(Math.random()*1000)
    addItem({...data, id});
    setCloseModal(false)
  }

  return (
    <dialog id="my_modal_3" className="modal">
          <div className='relative w-[300px]'>
            <h1 className='mb-5'>Create Recipe</h1>
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
              <div className='flex flex-col gap-5'>
              <input onChange={(e)=>
                setData((prev)=>{
                  return {...prev, title: e.target.value}
                })} className="input input-bordered w-full max-w-xs" type="text" placeholder="Enter a title" required/>
              <div className='flex gap-4'>
                <div>
                  <input onChange={(e)=>
                setData((prev)=>{
                  return {...prev, ingredinet: e.target.value}
                })} className="input input-bordered w-full max-w-xs" type="text" placeholder="Enter an ingredinet" required/>
                  <p>Ing:</p>
                </div>
              <button className='btn btn-success' type="button">Add</button>
              </div>
              <input onChange={(e)=>
                setData((prev)=>{
                  return {...prev, method: e.target.value}
                })} className="input input-bordered w-full max-w-xs" type="text" placeholder="Enter a method" required/>
              <input onChange={(e)=>
                setData((prev)=>{
                  return {...prev, time: e.target.value}
                })} className="input input-bordered w-full max-w-xs" type="number" placeholder="Enter time" required/>
              <button onClick={handleSubmit} type='submit' className='btn btn-primary'>Submit</button>
              </div>
            </form>
          </div>
        </dialog>
  )
}

export default Form