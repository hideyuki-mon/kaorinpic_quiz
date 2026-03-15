import { useState, useCallback } from "react";
import StartScreen from "./components/StartScreen";
import QuizScreen from "./components/QuizScreen";
import ResultScreen from "./components/ResultScreen";
import { buildQuizSet } from "./data/persons";

const TOTAL_QUESTIONS = 10;

export default function App() {
  const [screen, setScreen] = useState("start"); // "start" | "quiz" | "result"
  const [quizSet, setQuizSet] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const startQuiz = useCallback(() => {
    const set = buildQuizSet(TOTAL_QUESTIONS);
    setQuizSet(set);
    setCurrentIndex(0);
    setAnswers([]);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScreen("quiz");
  }, []);

  const handleAnswer = useCallback(
    (answer) => {
      if (isAnswered) return;
      const current = quizSet[currentIndex];
      const isCorrect = answer === current.correctAnswer;

      setSelectedAnswer(answer);
      setIsAnswered(true);
      setAnswers((prev) => [
        ...prev,
        {
          person: current.person,
          selected: answer,
          correct: current.correctAnswer,
          isCorrect,
        },
      ]);
    },
    [isAnswered, quizSet, currentIndex]
  );

  const handleNext = useCallback(() => {
    if (currentIndex + 1 >= quizSet.length) {
      setScreen("result");
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    }
  }, [currentIndex, quizSet.length]);

  const handleRestart = useCallback(() => {
    setScreen("start");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900">
      {screen === "start" && <StartScreen onStart={startQuiz} totalQuestions={TOTAL_QUESTIONS} />}
      {screen === "quiz" && quizSet.length > 0 && (
        <QuizScreen
          quiz={quizSet[currentIndex]}
          currentIndex={currentIndex}
          total={quizSet.length}
          selectedAnswer={selectedAnswer}
          isAnswered={isAnswered}
          onAnswer={handleAnswer}
          onNext={handleNext}
          score={answers.filter((a) => a.isCorrect).length}
        />
      )}
      {screen === "result" && (
        <ResultScreen answers={answers} onRestart={handleRestart} />
      )}
    </div>
  );
}
