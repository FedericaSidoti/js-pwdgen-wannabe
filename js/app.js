/*Insecure Password Generator 

- ## Chiedi all’utente il suo nome
    - dichiara una variabile let 'resultName'
    - assegna a resultName il valore del prompt 'name' per chiedere il nome all'utente */
    
    let resultName

    resultName = prompt('Inserisci il tuo nome')
    console.log(resultName)
    /*
- ## Chiedi il suo cognome
    - dichiara una variabile let 'resultSurame'
    - assegna a resultSurname il valore del prompt 'surname' per chiedere il cognome all'utente */
    let resultSurname
    
    resultSurname = prompt('Inserisci qui il tuo cognome')
    console.log(resultSurname)
    /*
- ## Chiedi il suo colore preferito
    - crea un prompt 'faveColour' per chiedere il colore preferito all'utente
    - salva il risultato del prompt 'faveColour' in una variabile let 'resultFaveColour' */
    let resultFaveColour

    resultFaveColour = prompt('Inserisci qui il tuo colore preferito')
    console.log(resultFaveColour)
    /*- ## Genera un numero (randomico)
    - crea una variabile 'let' con valore 'randomNumber'
        - Math.floor(Math.random() * 100);)*/
    let resultRandomNumber 

    resultRandomNumber = Math.floor(Math.random() * 100); 
    console.log(resultRandomNumber)
    /*- ## Scrivi sulla pagina il risultato della concatenazione: nomecognomecolorepreferito21
    - crea una variabile let 'newInsecurePassword' in cui salvare il risultato delle concatenazioni di 'resultName', 'resultSurname', 'favecolour' e 'randomNumber'
    - recupera con getElementById l'id dell'elemento html dove va stampato il risultato
    - modifica con innerHTML il codice stampando al suo interno 'newInsecurePassword'*/