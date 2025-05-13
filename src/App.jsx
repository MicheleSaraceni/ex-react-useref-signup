/* Milestone 2: Validare in tempo reale
1 - Aggiungere la validazione in tempo reale dei seguenti campi:

✅ Username: Deve contenere solo caratteri alfanumerici e almeno 6 caratteri (no spazi o simboli).

✅ Password: Deve contenere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo.

✅ Descrizione: Deve contenere tra 100 e 1000 caratteri (senza spazi iniziali e finali).

Suggerimento: Per semplificare la validazione, puoi definire tre stringhe con i caratteri validi e usare .includes() per controllare se i caratteri appartengono a una di queste categorie:


const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\\",.<>?/`~";


2 - Per ciascuno dei campi validati in tempo reale, mostrare un messaggio di errore (rosso) nel caso non siano validi, oppure un messaggio di conferma (verde) nel caso siano validi. */

import { useState } from "react"

export default function App() {

  const [name, setName ] = useState("");
  const [username, setUsername ] = useState("");
  const [password, setPassword ] = useState("");
  const [specialization, setSpecialization ] = useState();
  const [yearsExperience, setYearsExperience ] = useState(0);
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

    

    if (yearsExperience < 0){
      console.log( "Gli anni di esperienza devono essere un numero positivo" )
    } else if ( !isUsernameValid ){
      console.log( "Username deve contenere solamente caratteri alfanumerici (abcdefghijklmnopqrstuvwxyz) e devono essere almeno 6" )
    }  else if ( !isPassValid ){
      console.log( `La password deve contenere 8 caratteri con almeno una lettera, un numero e un carattere speciale ( !@#$%^&*()-_=+[]{}|;:'",.<>?/~ )` )
    } else if ( isNotDescValid ){
      console.log( `La descrizione deve avere minimo 100 e massimo 1000 caratteri e non deve iniziare o terminare con uno spazio` )
    } else {
      console.log(name);
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
        <p style={{color: isNotDescValid ? "Red" : "Green"}}>
        {isNotDescValid ? "Descrizione non valida" : "Descrizione valida"}
      </p>
      </section>

      <button type="submit">Invia dati</button>

    </form>
  )
}

