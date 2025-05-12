/* Milestone 1: Creare un Form con Campi Controllati
1 - Crea un form di registrazione con i seguenti campi controllati (gestiti con useState):

✅ Nome completo (input di testo)

✅ Username (input di testo)

✅ Password (input di tipo password)

✅ Specializzazione (select con opzioni: "Full Stack", "Frontend", "Backend")

✅ Anni di esperienza (input di tipo number)

✅ Breve descrizione sullo sviluppatore (textarea)

2 - Aggiungi una validazione al submit, verificando che:

Tutti i campi siano compilati
L'input Anni di esperienza sia un numero positivo
La Specializzazione sia selezionata

3 - Al submit, se il form è valido, stampa in console i dati. */

import { useState } from "react"

export default function App() {

  const [name, setName ] = useState("");
  const [username, setUsername ] = useState("");
  const [password, setPassword ] = useState("");
  const [specialization, setSpecialization ] = useState();
  const [yearsExperience, setYearsExperience ] = useState(0);
  const [description, setDescription ] = useState("");

  const submit = (e) => {
    e.preventDefault()
    if (yearsExperience < 0){
      console.log("Gli anni di esperienza devono essere un numero positivo")
    }else{console.log(name);
    console.log(username);
    console.log(password);
    console.log(specialization);
    console.log(yearsExperience);
    console.log(description);}
  }

  return (
    <form onSubmit={submit}>

      <section>
        <input 
        type="text" 
        value={name}
        placeholder="Nome completo"
        required
        onChange={(e)=>setName(e.target.value)}
        />
      </section>

      <section>
      <input 
      type="text" 
      value={username} 
      placeholder="Username"
      required
      onChange={(e)=>setUsername(e.target.value)}
      />
      </section>

      <section>
      <input 
      type="password" 
      value={password} 
      placeholder="Password"
      required
      onChange={(e)=>setPassword(e.target.value)}
      />
      </section>

      <section>
        <select 
        name="specialization" 
        value={specialization} 
        required
        onChange={(e)=>setSpecialization(e.target.value)}>
          <option value="Full Stack">Full Stack</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
        </select>
      </section>

      <section>
      <input 
      type="number" 
      value={yearsExperience} 
      placeholder="Anni di esperienza"
      required
      onChange={(e)=>setYearsExperience(e.target.value)}
      />
      </section>

      <section>
        <textarea 
        name="description" 
        value={description} 
        placeholder="Descrizione carriera"
        required
        onChange={(e)=>setDescription(e.target.value)}>
        </textarea>
      </section>

      <button type="submit">Invia dati</button>

    </form>
  )
}

