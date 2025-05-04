// Riddle clues (reversed)
export const riddleClues = [
  "oreinaj ed oir", 
  "oiam ed sert"     
]; 

// Hints based on user input
export interface RiddleResponse {
  message: string;
  correct: boolean;
  hint: boolean;
  devourAnimation?: boolean;
}

export const checkAnswer = (answer: string): RiddleResponse => {
  const lowerAnswer = answer.toLowerCase().trim();
  
  if (lowerAnswer === "lady gaga") {
    return {
      message: "Não é hoje que terei meu banquete, você acertou!",
      correct: true,
      hint: false
    };
  } else if (lowerAnswer === "madonna") {
    return {
      message: "O ano é 2025, meu querido futuro alimento.",
      correct: false,
      hint: true
    };
  } else if (lowerAnswer === "copacabana") {
    return {
      message: "Mas quem cantou neste lugar?",
      correct: false,
      hint: true
    };
  } else {
    return {
      message: "Se prepare para virar minha janta, você errou!",
      correct: false,
      hint: false,
      devourAnimation: true
    };
  }
};

// Add the missing function to reverse text
export const reverseText = (text: string): string => {
  return text.split('').reverse().join('');
};
