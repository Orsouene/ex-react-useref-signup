import React, { useState, useMemo,useRef, useEffect, use } from 'react'

function Form() {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [descrizione, setDescrizione] = useState("")
    const letters = "abcdefghijklmnopqrstuvwxyz"
    const numbers = "0123456789";
    const symbols = '!@#$%^&*()-_=+[]{}|;:\'"\\,.<>?/`~';
    const arrayNumbers = numbers.split("")
    const arraySymbols = symbols.split("")
    const lettersArray = letters.split("")
    // console.log(arrayNumbers)
    // console.log(arraySymbols)
    // console.log(lettersArray) 
   const nameRef=useRef()
   const esperienzaRef=useRef()
   const specializzazioneRef=useRef()
  const formRef=useRef()
   //*Reset campo 
  const HandleReset=(e)=>{
       e.preventDefault()
      nameRef.current.value = ""
      esperienzaRef.current.value = ""
      specializzazioneRef.current.value = ""
      setUserName("")
      setPassword("")
      setDescrizione("")
  }
//*Focus su nome 
   useEffect(()=>{
 nameRef.current.focus()
   },[])
     
   const handleNav=()=>{

    formRef.current.scrollIntoView({behavior:"smooth"});
    
   }
  

  
   //*send Form
    const handleForm = (e) => {
        e.preventDefault();
   
        const nome = nameRef.current.value
        const specializzazione=specializzazioneRef.current.value 
        const esperienza = esperienzaRef.current.value

        const value = [nome, userName, password, specializzazione, esperienza, descrizione];
        const controll = value.some(el => el.trim() === "");

        if (
            controll ||
            esperienza <= 0 ||
            !validationUserName|| 
            !validationPassword ||   
            !validationDescrizione
        ) {
            alert("tutti i campi devono esser completati correttamente");
           
        } else {
            console.log(value);
        }
    };

    //*  UserName
    const validationUserName = useMemo(() => {
        const controlloLettres = userName.split("").every(el => { return lettersArray.includes(el) || arrayNumbers.includes(el) })
        return controlloLettres && userName.trim().length > 6     
   }, [userName])
    //*Password 
    const validationPassword = useMemo(() => {
            const isValidlettera = lettersArray.some(el => password.split("").includes(el))
            const isValidsimbolo = arraySymbols.some(el => password.split("").includes(el))
            console.log(isValidlettera)
            const isValidNumber = arrayNumbers.some(el => password.split("").includes(el))
            return password.length > 8 && isValidlettera && isValidsimbolo && isValidNumber 
        }, [password])

    //*Descrizione 
    const validationDescrizione = useMemo(() => { return descrizione.trim().length > 100 && descrizione.trim().length < 1000},[descrizione])

     
 

    return (
        <>
            <h1 className='text-cyan-800 w-fit m-auto text-4xl mt-10 font-extrabold ' ref={formRef} >Signup</h1>
            <section className=' mt-20 m-auto max-w-[350px] p-10 rounded-2xl border-4 border-blue-100  bg-cyan-800 text-white'>

                <form className='flex-col flex w-[300px] gap-2 m-auto' onSubmit={handleForm} >

                    {/* Nome */}
                    <label className='font-light '>Nome :</label>
                    <input type='text' id="nome" name="nome" className='border border-blue-100 w-48' ref={nameRef} />

                    {/* Username   */}
                    <label className='font-light '>Username  :</label>
                    <input type='text' id="userName" className='border border-blue-100 w-48' autoComplete="username" value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <p className='border-b-2 border-cyan-100 w-48 p-1.5 rounded-2xl text-xs' style={{ color: validationUserName ? "#86C66C " : "red" }}> {validationUserName ? "UserName corretto ✔ " : " Deve contenere solo caratteri alfanumerici e almeno 6 caratteri ❌"}

                    </p>

                    {/* Specializzazione */}
                    <label className='font-light '>Specializzazione :</label>
                    <select id="specializzazione" name="specializzazione" ref={specializzazioneRef} className='border border-blue-100 w-48 bg-cyan-800' >
                        <option className='font-extralight '>Scegli una specializz..</option>
                        <option className='' value={"Full stack"}>Full stack</option>
                        <option value={"Frontend"}>Frontend</option>
                        <option value={"Backend"}>Backend</option>
                    </select>


                    {/* Anni di esperienza */}
                    <label className='font-light '>Anni di esperienza :</label>
                    <input type='number' id="esperienza" name="esperienza" ref={esperienzaRef} className='border border-blue-100 w-48' />

                    {/* Password */}
                    <label className='font-light '>Password :</label>
                    <input type='password' id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} className='border border-blue-100 w-48' autoComplete="current-password" />
                    <p className='border-b-2 border-cyan-100 w-48 p-1.5 rounded-2xl text-xs' style={{ color: validationPassword ? "#86C66C" : "red" }}> {validationPassword ? "Password valida ✔" : "Deve contenere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo❌"}</p>

                    {/* Breve descrizione sullo sviluppatore */}
                    <label className='font-light w-48 '>Breve descrizione sullo sviluppatore :</ label>
                    <textarea id="descrizione" name="descrizione" value={descrizione} onChange={(e) => setDescrizione(e.target.value)} className='border border-blue-100 w-48 h-24' />
                    <p className='border-b-2 border-cyan-100 w-48 p-1.5 rounded-2xl text-xs' style={{ color: validationDescrizione ? "#86C66C" : "red" }}> {validationDescrizione ? "Descrizione valida ✔ " : " Deve contenere tra 100 e 1000 caratteri(senza spazi iniziali e finali❌"}</p>
                    <div className='flex gap-2 '>
                        <button type='submit' className='bg-lime-100 w-fit   p-2 rounded-2xl border  border-stone-200 mt-2 hover:bg-orange-100 hover:text-cyan-800 text-sky-900 font-bold hover:border-amber-800 cursor-pointer'>Send</button>
                        <button onClick={HandleReset} className='bg-lime-100 w-fit   p-2 rounded-2xl border  border-stone-200 mt-2 hover:bg-orange-100 hover:text-cyan-800 text-sky-900 font-bold hover:border-amber-800 cursor-pointer'>Reset</button>

                    </div>

                </form>
             
            </section>
           <div className='flex justify-between h-72 bg-lime-50 mt-50 '>
                    <div className='font-bold text-cyan-800 mt-50 ml-10'>Footer di Prova</div>
                    <button onClick={handleNav} className='  fixed bottom-12 bg-cyan-100 right-7 w-10 text-cyan-800 rounded-2xl h-8 font-extrabold cursor-pointer' > ↑</button>
                </div>

        </>
       
    )
}
export default Form 