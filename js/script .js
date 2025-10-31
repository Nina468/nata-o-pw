function clique(){
document.getElementById("Calcular Medalhas") 
  const t1 = parseFloat(document.getElementById("t1").value);
  const t2 = parseFloat(document.getElementById("t2").value);
  const t3 = parseFloat(document.getElementById("t3").value);

  if (isNaN(t1) || isNaN(t2) || isNaN(t3)) {
    alert("Preencha todos os tempos corretamente!");
    return;
  }

  // Cria uma lista com tempo e número do nadador
  const nadadores = [
    { tempo: t1, numero: 1 },
    { tempo: t2, numero: 2 },
    { tempo: t3, numero: 3 }
  ];

  // Ordena do menor tempo para o maior
  nadadores.sort((a, b) => a.tempo - b.tempo);

  // Exibe o resultado
  const resultado = `
    Ouro: Nadador ${nadadores[0].numero} (Tempo: ${nadadores[0].tempo}s) <br>
     Prata: Nadador ${nadadores[1].numero} (Tempo: ${nadadores[1].tempo}s) <br>
     Bronze: Nadador ${nadadores[2].numero} (Tempo: ${nadadores[2].tempo}s)
  `;

  document.getElementById("resultado").innerHTML = resultado;
};

