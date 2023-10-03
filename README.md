# Insecure Password Generator 

- ## Chiedi all’utente il suo nome
    - crea un prompt 'name' per chiedere il nome all'utente
    - salva il risultato del prompt 'nome' in una variabile let 'resultName'
- ## Chiedi il suo cognome
    - crea un prompt 'surname' per chiedere il cognome all'utente
    - salva il risultato del prompt 'cognome' in una variabile let 'resultSurname'
- ## Chiedi il suo colore preferito
    - crea un prompt 'faveColour' per chiedere il colore preferito all'utente
    - salva il risultato del prompt 'faveColour' in una variabile let 'resultFaveColour'
- ## Genera un numero (randomico)
    - crea una variabile 'let' con valore 'randomNumber'
    ( - dichiara la function getRandomNumber
    - la funzione ti deve restituire (return) un numero intero random fino a 100
        - Math.floor(Math.random() * 100);
    - salva il risultato della funzione in una variabile let 'randomNumber')
- ## Scrivi sulla pagina il risultato della concatenazione: nomecognomecolorepreferito21
    - crea una variabile let 'newInsecurePassword' in cui salvare il risultato delle concatenazioni di 'resultName', 'resultSurname', 'favecolour' e 'randomNumber'
    - recupera con getElementById l'id dell'elemento html dove va stampato il risultato
    - modifica con innerHTML il codice stampando al suo interno 'newInsecurePassword'