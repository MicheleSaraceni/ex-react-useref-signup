/* Milestone 3: Convertire i Campi Non Controllati
Non tutti i campi del form necessitano di essere aggiornati a ogni carattere digitato. Alcuni di essi non influenzano direttamente l’interfaccia mentre l’utente li compila, quindi è possibile gestirli in modo più efficiente.

1 - Analizza il form: Identifica quali campi devono rimanere controllati e quali invece possono essere non controllati senza impattare l’esperienza utente.
2 - Converti i campi non controllati: Usa useRef() per gestirli e recuperare il loro valore solo al momento del submit.
3 - Assicurati che la validazione continui a funzionare: Anche se un campo non è controllato, deve comunque essere validato correttamente quando l’utente invia il form. */

import { useState, useRef } from "react"

export default function App() {

  const nameRef = useRef("");
  const [username, setUsername ] = useState("");
  const [password, setPassword ] = useState("");
  const specializationRef = useRef();
  const yearsExperienceRef = useRef(0);
  const [description, setDescription ] = useState("");

  const letters = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = `!@#$%^&*()-_=+[]{}|;:'",.<>?/~`;

  const lettersNumbers = letters + numbers;
  const isUsernameValid = 
    username.toLowerCase().split('').every( (char) => lettersNumbers.includes(char) ) &&
    username.length >= 6;
    
  const isPassValid = 
    password.split('').some((char) => letters.includes(char.toLowerCase())) &&
    password.split('').some((char) => numbers.includes(char)) && 
    password.split('').some((char) => symbols.includes(char)) && 
    password.length >= 8
    ;

  const isNotDescValid = 
    description.length < 100 || 
    description.length > 1000 ||
    description.startsWith(' ') || 
    description.endsWith(' ');

  const submit = (e) => {
    e.preventDefault()

    

    if (yearsExperienceRef < 0){
      console.log( "Gli anni di esperienza devono essere un numero positivo" )
    } else if ( !isUsernameValid ){
      console.log( "Username deve contenere solamente caratteri alfanumerici (abcdefghijklmnopqrstuvwxyz) e devono essere almeno 6" )
    }  else if ( !isPassValid ){
      console.log( `La password deve contenere 8 caratteri con almeno una lettera, un numero e un carattere speciale ( !@#$%^&*()-_=+[]{}|;:'",.<>?/~ )` )
    } else if ( isNotDescValid ){
      console.log( `La descrizione deve avere minimo 100 e massimo 1000 caratteri e non deve iniziare o terminare con uno spazio` )
    } else {
    console.log(nameRef.current.value);
    console.log(username);
    console.log(password);
    console.log(specializationRef.current.value);
    console.log(yearsExperienceRef.current.value);
    console.log(description);}
  }

  return (
    <form onSubmit={submit}>

      <section>
        <input 
        type="text" 
        ref={nameRef}
        placeholder="Nome completo"
        required
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
      <p style={{color: isUsernameValid ? "Green" : "Red"}}>
      {isUsernameValid ? "Username valido" : "Username non valida"}
      </p>
      </section>

      <section>
      <input 
      type="password" 
      value={password} 
      placeholder="Password"
      required
      onChange={(e)=>setPassword(e.target.value)}
      />
      <p style={{color: isPassValid ? "Green" : "Red"}}>
      {isPassValid ? "Password valido" : "Password non valida"}
      </p>
      </section>

      <section>
        <select 
        name="specialization" 
        ref={specializationRef} 
        required
        >
          <option value="Full Stack">Full Stack</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
        </select>
      </section>

      <section>
      <input 
      type="number" 
      ref={yearsExperienceRef} 
      placeholder="Anni di esperienza"
      required
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
        <p style={{color: isNotDescValid ? "Red" : "Green"}}>
        {isNotDescValid ? "Descrizione non valida" : "Descrizione valida"}
      </p>
      </section>

      <button type="submit">Invia dati</button>

    </form>
  )
}

