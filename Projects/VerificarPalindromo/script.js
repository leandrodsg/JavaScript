function reverseStr() {
      let revword = document.getElementById("txtp").value;
      let revstr = '';
      for (let i = revword.length - 1; i >= 0; i--) {
        revstr += revword[i];
      }
      res.innerHTML = `O reverso de ${revword} é ${revstr}`;

      // Testando palíndromo
      let strpali = '';
      if (revword.toLowerCase() === revstr.toLowerCase()) {
        strpali = 'Esta palavra é um Palíndromo';
      } else {
        strpali = 'Esta palavra não é um Palíndromo';
      }
      res.innerHTML += `<br>${strpali}`;
    }
