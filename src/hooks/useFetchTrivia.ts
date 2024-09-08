import { useState, useEffect } from 'react';

interface TriviaQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface UseFetchTriviaResult {
  questions: TriviaQuestion[];
  questionsLength: number;
  loading: boolean;
  error: string | null;
}

const useFetchTrivia = (amount: number): UseFetchTriviaResult => {
  const [questions, setQuestions] = useState<TriviaQuestion[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [questionsLength, setQuestionsLength] = useState<number>(0);

  const fetchQuestions = async (retryCount = 0) => {
    const maxRetries = 5;
    const delay = Math.pow(2, retryCount) * 1000; // Exponential backoff

    if (!Number.isInteger(amount) || amount <= 0) {
      setError('Invalid amount');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`https://opentdb.com/api.php?amount=${amount}`);
      
      if (response.status === 429 && retryCount < maxRetries) {
        // Rate limit error: retry after delay
        setTimeout(() => fetchQuestions(retryCount + 1), delay);
        return;
      }
      
      if (!response.ok) {
        throw new Error('Failed to fetch trivia questions');
      }
      
      const data = await response.json();
      setQuestions(data.results);
      setQuestionsLength(data.results.length);
      setLoading(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestions();
  }, [amount]);

  return { questions, questionsLength, loading, error };
};

export default useFetchTrivia;
