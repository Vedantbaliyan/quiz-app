import { useState } from "react";
import Quiz from "./components/Quiz";
import { quizData } from "./data/quizData";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);
  const [questionCount, setQuestionCount] = useState(5);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  const restartQuiz = () => {
    setQuizStarted(false);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-100"
          : "bg-gradient-to-br from-blue-50 via-white to-blue-100 text-gray-900"
      }`}
    >
      <div className="container mx-auto px-4 py-10 md:py-16">
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1
            className={`text-3xl md:text-4xl font-extrabold tracking-wide ${
              darkMode ? "text-white" : "text-gray-800"
            }`}
          >
            🚀 React Quiz App
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-3 rounded-full shadow-lg bg-gradient-to-tr from-blue-500 to-purple-600 text-white hover:scale-110 transition-transform"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>

        {/* Quiz Settings or Quiz */}
        {!quizStarted ? (
          <div
            className={`p-8 rounded-2xl shadow-2xl max-w-lg mx-auto backdrop-blur-lg transition-all ${
              darkMode
                ? "bg-gray-800/80 border border-gray-700"
                : "bg-white/80 border border-gray-200"
            }`}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">
              ⚡ Quiz Settings
            </h2>
            <div className="mb-8">
              <label className="block text-sm font-medium mb-3">
                Number of Questions (5-10):
              </label>
              <input
                type="range"
                min="5"
                max="10"
                value={questionCount}
                onChange={(e) => setQuestionCount(parseInt(e.target.value))}
                className="w-full accent-blue-600"
              />
              <div className="text-center mt-3 font-semibold">
                🎯 {questionCount} Questions
              </div>
            </div>
            <button
              onClick={startQuiz}
              className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:opacity-90 hover:scale-[1.02] transition-all"
            >
              Start Quiz 🚀
            </button>
          </div>
        ) : (
          <Quiz
            allQuestions={quizData}
            questionCount={questionCount}
            onRestart={restartQuiz}
          />
        )}
      </div>
    </div>
  );
}

export default App;
