import React, { useState, useMemo } from 'react'

function Form() {
    const [nome, setNome] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [specializzazione, setSpecializzazione] = useState("")
    const [esperienza, setEsperienza] = useState("")
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


    const handleForm = (e) => {
        e.preventDefault();
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
        <section className=' mt-20 m-auto max-w-[350px] p-10 rounded-2xl border-4 border-blue-100  bg-cyan-800 text-white'>
            <form className='flex-col flex w-[300px] gap-2 m-auto' onSubmit={handleForm}>

                {/* Nome */}
                <label className='font-light '>Nome :</label>
                <input type='text' id="nome" name="nome" value={nome} className='border border-blue-100 w-48' onChange={(e) => setNome(e.target.value)} />

                {/* Username   */}
                <label className='font-light '>Username  :</label>
                <input type='text' id="userName" name="" value={userName} onChange={(e) => setUserName(e.target.value)} className='border border-blue-100 w-48' autoComplete="username" />
                <p className='border-b-2 border-cyan-100 w-48 p-1.5 rounded-2xl text-xs' style={{ color: validationUserName ? "#86C66C " : "red" }}> {validationUserName ? "UserName corretto ✔ " : " Deve contenere solo caratteri alfanumerici e almeno 6 caratteri ❌" }
               
                </p>

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
                <p className='border-b-2 border-cyan-100 w-48 p-1.5 rounded-2xl text-xs' style={{ color: validationPassword ? "#86C66C" : "red" }}> {validationPassword ? "Password valida ✔" :"Deve contenere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo❌"}</p>

                {/* Breve descrizione sullo sviluppatore */}
                <label className='font-light w-48 '>Breve descrizione sullo sviluppatore :</ label>
                <textarea id="descrizione" name="descrizione" value={descrizione} onChange={(e) => setDescrizione(e.target.value)} className='border border-blue-100 w-48' />
                <p className='border-b-2 border-cyan-100 w-48 p-1.5 rounded-2xl text-xs' style={{ color: validationDescrizione ? "#86C66C": "red" }}> {validationDescrizione ? "Descrizione valida ✔ " :" Deve contenere tra 100 e 1000 caratteri(senza spazi iniziali e finali)❌"}</p>

                <button type='submit' className='bg-lime-100 w-fit   p-2 rounded-2xl border  border-stone-200 mt-2 hover:bg-orange-100 hover:text-cyan-800 text-sky-900 font-bold hover:border-amber-800 cursor-pointer'>Send</button>
            </form>
        </section>
    )
}
export default Form 