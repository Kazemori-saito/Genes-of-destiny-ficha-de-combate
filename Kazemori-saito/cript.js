// script.js

// Atributos iniciais
let player = {
    stamina: 120,
    style: "Tático", // Estilo inicial
  };
  
  let enemy = {
    stamina: 60,
  };
  
  const styles = {
    Tático: { costModifier: -1, bonus: { damage: 0, defense: 0 }, description: "Eficiente e equilibrado." },
    Defensivo: { costModifier: -2, bonus: { damage: -1, defense: 2 }, description: "Protege recursos e reduz dano." },
    Agressivo: { costModifier: +2, bonus: { damage: 2, defense: -1 }, description: "Gasta mais, mas causa mais dano." },
    Fúria: { costModifier: +3, bonus: { damage: 5, defense: -2 }, description: "Estilo extremo de alto risco." },
  };
  
  // Função para trocar o estilo do jogador
  function changeStyle(character, newStyle) {
    if (character === "player") {
      player.style = newStyle;
      document.getElementById("player-style").textContent = newStyle;
      logCombat(`O jogador mudou para o estilo ${newStyle}: ${styles[newStyle].description}`);
    }
  }
  
  // Função para realizar uma ação
  function performAction(character, action) {
    if (character === "player") {
      let style = styles[player.style];
      let staminaCost = action === "attack" ? 5 + style.costModifier : 3 + style.costModifier;
  
      // Checar se o jogador tem estamina suficiente
      if (player.stamina >= staminaCost) {
        player.stamina -= staminaCost;
        document.getElementById("player-stamina").textContent = player.stamina;
  
        if (action === "attack") {
          let damage = 10 + style.bonus.damage;
          enemy.stamina -= damage;
          document.getElementById("enemy-stamina").textContent = enemy.stamina;
          logCombat(`O jogador atacou causando ${damage} de dano.`);
        } else if (action === "defend") {
          logCombat("O jogador assumiu uma posição defensiva.");
        }
      } else {
        logCombat("O jogador não tem estamina suficiente para realizar essa ação.");
      }
    }
  }
  
  // Função para logar os eventos do combate
  function logCombat(message) {
    const log = document.getElementById("log");
    const logItem = document.createElement("li");
    logItem.textContent = message;
    log.appendChild(logItem);
  }
  