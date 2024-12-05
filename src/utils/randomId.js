export function generateRandomID() {
        return generateRandomLetter() + Math.random().toString(36).substr(2, 9);
}


function generateRandomLetter() {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      
        return alphabet[Math.floor(Math.random() * alphabet.length)]
      }