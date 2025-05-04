
import React, { useState, useEffect } from 'react';
import Sphinx from '@/components/Sphinx';
import RiddleInput from '@/components/RiddleInput';
import { RiddleResponse, riddleClues, reverseText } from '@/utils/riddleUtils';
import { useToast } from "@/components/ui/use-toast";
import { 
  PyramidDecoration, 
  HieroglyphicsBar, 
  AnkhSymbol, 
  EyeOfHorus, 
  SandAnimation 
} from '@/components/EgyptianDecorations';
import { Card } from '@/components/ui/card';

const Index = () => {
  const [isDevourMode, setIsDevourMode] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [response, setResponse] = useState<RiddleResponse | null>(null);
  const { toast } = useToast();

  const handleAnswerSubmit = (answerResponse: RiddleResponse) => {
    setResponse(answerResponse);
    setIsCorrect(answerResponse.correct);
    
    if (answerResponse.devourAnimation) {
      setIsDevourMode(true);
      setTimeout(() => setIsDevourMode(false), 500);
    }
    
    toast({
      title: answerResponse.correct ? "Resposta Correta!" : "Resposta Incorreta",
      description: answerResponse.message,
      variant: answerResponse.correct ? "default" : "destructive",
    });
  };

  // Animation for entrance
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-fade-in');
    elements.forEach((element, index) => {
      (element as HTMLElement).style.animationDelay = `${index * 0.2}s`;
    });
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden pb-16">
      {/* Background and Decorations */}
      <SandAnimation />
      <HieroglyphicsBar position="top" />
      <HieroglyphicsBar position="bottom" />
      <AnkhSymbol position="right" />
      <EyeOfHorus position="left" />
      <PyramidDecoration position="bottom" />
      
      <div className="container mx-auto px-4 py-8">
        {/* Main Title */}
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-center my-8 text-egyptian-black egyptian-border py-4 animate-glow">
            Decifra-me ou te devoro
          </h1>
        </div>
        
        {/* Sphinx Animation */}
        <div className="animate-fade-in">
          <Sphinx isDevourMode={isDevourMode} isCorrect={isCorrect} />
        </div>
        
        {/* Riddle Display */}
        <div className="animate-fade-in">
          <Card className="papyrus-box max-w-lg mx-auto my-8">
            <div className="space-y-4">
              <h2 className="text-2xl text-center font-bold text-egyptian-black">O Enigma da Esfinge</h2>
              <div className="text-center space-y-2">
                {riddleClues.map((clue, index) => (
                  <p key={index} className="text-xl font-egyptian">
                    <span className="text-egyptian-red">{clue}</span>
                  </p>
                ))}
              </div>
            </div>
          </Card>
        </div>
        
        {/* Riddle Input */}
        <div className="animate-fade-in">
          <RiddleInput onAnswerSubmit={handleAnswerSubmit} />
        </div>
        
        {/* Response Display */}
        {response && (
          <div className={`max-w-md mx-auto mt-6 text-center ${response.correct ? 'text-green-700' : response.hint ? 'text-egyptian-gold' : 'text-egyptian-red'}`}>
            <p className="text-lg font-semibold">{response.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
