
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { checkAnswer, RiddleResponse } from "@/utils/riddleUtils";
import { Search } from "lucide-react";

interface RiddleInputProps {
  onAnswerSubmit: (response: RiddleResponse) => void;
}

const RiddleInput: React.FC<RiddleInputProps> = ({ onAnswerSubmit }) => {
  const [answer, setAnswer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!answer.trim()) return;
    
    setIsSubmitting(true);
    const response = checkAnswer(answer);
    onAnswerSubmit(response);
    
    if (!response.correct) {
      setTimeout(() => {
        setIsSubmitting(false);
        if (!response.hint) {
          setAnswer('');
        }
      }, 1000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto mt-8">
      <div className="papyrus-box relative">
        <h2 className="text-xl font-bold text-egyptian-black mb-4 text-center hieroglyphic-icon">
          Decifra-me ou te devoro
        </h2>
        
        <div className="flex gap-2">
          <Input
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Digite sua resposta..."
            className="border-egyptian-gold bg-egyptian-papyrus/80 text-egyptian-black"
            disabled={isSubmitting}
          />
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-egyptian-red hover:bg-egyptian-red/80 text-white"
          >
            <Search className="h-4 w-4 mr-2" /> Responder
          </Button>
        </div>
      </div>
    </form>
  );
};

export default RiddleInput;
