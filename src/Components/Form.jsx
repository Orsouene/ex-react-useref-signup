import React, { useState } from 'react'

function Form() {
    const [nome,setNome]=useState("")
    const [userName,setUserName]=useState("")
    const [password,setPassword]=useState("")
    const [specializzazione,setSpecializzazione]=useState("")
    const [esperienza,setEsperienza]=useState("")
    const [descrizione,setDescrizione]=useState("")

    const handleForm =(e)=>{
        e.preventDefault() 
        const value = [nome,userName,password,specializzazione,esperienza,descrizione]
        const controll = value.some(el => el.trim()==="")
       

      if(controll || esperienza<0 )
      { //   console.log("il controllo è :", controll)
        alert("tutti i campi devono esser completati")
       
          
      }
      else {
          console.log(value)
      }
     
         }   
  
    return (
        <section className=' mt-20 m-auto max-w-[350px] p-10 rounded-2xl border-4 border-blue-100  bg-cyan-800 text-white'>
            <form className='flex-col flex w-[300px] gap-2 m-auto' onSubmit={handleForm}>

                {/* Nome */}
                <label className='font-light '>Nome :</label>
                <input type='text' id="nome" name="nome" value={nome} className='border border-blue-100 w-48' onChange={(e) => setNome(e.target.value)} />

                {/* Username   */}
                <label className='font-light '>Username  :</label>
                <input type='text' id="userName" name="" value={userName} onChange={(e) => setUserName(e.target.value)} className='border border-blue-100 w-48' autoComplete="username" />

                {/* Specializzazione */}
                <label className='font-light '>Specializzazione :</label>
                <select id="specializzazione" name="specializzazione" value={specializzazione} onChange={(e) => setSpecializzazione(e.target.value)} className='border border-blue-100 w-48' >
                    <option className='font-extralight '>Scegli una specializz..</option>
                    <option value={"Full stack"}>Full stack</option>
                <option value={"Frontend"}>Frontend</option>
                <option value={"Backend"}>Backend</option>
                </select>


                {/* Anni di esperienza */}
                <label className='font-light '>Anni di esperienza :</label>
                <input type='number' id="esperienza" name="esperienza" value={esperienza} onChange={(e) => setEsperienza(e.target.value)} className='border border-blue-100 w-48' />
               
                {/* Password */}
                <label className='font-light '>Password :</label>
                <input type='password' id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className='border border-blue-100 w-48' autoComplete="current-password" />

                {/* Breve descrizione sullo sviluppatore */}
                <label className='font-light w-48 '>Breve descrizione sullo sviluppatore :</ label>
                <textarea id="descrizione" name="descrizione" value={descrizione} onChange={(e) => setDescrizione(e.target.value)} className='border border-blue-100 w-48' />
                <button type='submit' className='bg-lime-100 w-fit   p-2 rounded-2xl border  border-stone-200 mt-2 hover:bg-orange-100 hover:text-cyan-800 text-sky-900 font-bold hover:border-amber-800 cursor-pointer'>Send</button>
          </form>



        </section>
    )
}

export default Form
