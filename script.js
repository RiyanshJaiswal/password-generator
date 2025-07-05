function generatePasswords() {
  const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
  const length = 15;
  
  function getPassword() {
    let password = '';
    for (let i = 0; i < length; i++) {
      const rand = Math.floor(Math.random() * characters.length);
      password += characters[rand];
    }
    return password;
  }

  const pw1 = document.getElementById('pw1');
  const pw2 = document.getElementById('pw2');

  pw1.textContent = getPassword();
  pw2.textContent = getPassword();
}

// Attach click-to-copy listeners
document.querySelectorAll('.password-field').forEach(field => {
  field.addEventListener('click', () => {
    const text = field.textContent.trim();
    if (text) {
      navigator.clipboard.writeText(text).then(() => {
        const original = text;
        field.innerHTML = `<span class="copied">✅ Copied!</span>`;
        setTimeout(() => {
          field.textContent = original;
        }, 1200);
      });
    }
  });
});