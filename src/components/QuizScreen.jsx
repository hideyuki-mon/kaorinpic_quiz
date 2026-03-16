import { useState, useEffect } from "react";
import { ChevronRight, CheckCircle2, XCircle, Lightbulb, Loader2, Eye } from "lucide-react";
import { countryFlagMap, countryFacialFeatures } from "../data/persons";

const DIFFICULTY_LABEL = { 1: "かんたん", 2: "ふつう", 3: "むずかしい" };
const DIFFICULTY_COLOR = {
  1: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  2: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
  3: "bg-red-500/20 text-red-400 border-red-500/30",
};

export default function QuizScreen({
  quiz,
  currentIndex,
  total,
  selectedAnswer,
  isAnswered,
  onAnswer,
  onNext,
  score,
}) {
  const { person, options, correctAnswer } = quiz;
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  // 問題が変わったら画像状態をリセット
  useEffect(() => {
    setImgError(false);
    setImgLoaded(false);
  }, [person.id]);

  const progress = ((currentIndex + 1) / total) * 100;
  const isCorrect = selectedAnswer === correctAnswer;
  const facialFeature = countryFacialFeatures[correctAnswer];

  const getOptionStyle = (option) => {
    if (!isAnswered) {
      return "bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-indigo-400/50 cursor-pointer active:scale-95";
    }
    if (option === correctAnswer) {
      return "bg-emerald-500/20 border-emerald-500 text-emerald-300 cursor-default";
    }
    if (option === selectedAnswer && option !== correctAnswer) {
      return "bg-red-500/20 border-red-500 text-red-300 cursor-default";
    }
    return "bg-white/5 border-white/5 text-slate-500 cursor-default opacity-60";
  };

  const getOptionIcon = (option) => {
    if (!isAnswered) return null;
    if (option === correctAnswer) {
      return <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />;
    }
    if (option === selectedAnswer && option !== correctAnswer) {
      return <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />;
    }
    return null;
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 py-6">
      {/* ヘッダー: プログレス・スコア */}
      <div className="w-full max-w-2xl mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-slate-400 text-sm font-medium">
            問題 {currentIndex + 1} / {total}
          </span>
          <span className="text-slate-400 text-sm font-medium">
            スコア:{" "}
            <span className="text-indigo-300 font-bold">{score}</span> 点
          </span>
        </div>
        <div className="w-full bg-white/10 rounded-full h-2.5 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-700 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* 問題カード */}
      <div className="w-full max-w-2xl bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
        {/* 難易度バッジ・地域 */}
        <div className="flex items-center justify-between px-5 pt-4 pb-2">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border ${
              DIFFICULTY_COLOR[person.difficulty]
            }`}
          >
            {DIFFICULTY_LABEL[person.difficulty]}
          </span>
          <span className="text-slate-500 text-xs bg-white/5 px-2 py-1 rounded-full">
            {person.region}
          </span>
        </div>

        {/* 問い */}
        <div className="px-5 pb-3">
          <h2 className="text-white text-lg md:text-xl font-bold leading-snug">
            この人物はどこの国の人でしょう？
          </h2>
        </div>

        {/* 写真エリア */}
        <div className="relative mx-5 mb-4 rounded-xl overflow-hidden bg-slate-800 aspect-[4/3] flex items-center justify-center">
          {/* ローディングスピナー */}
          {!imgLoaded && !imgError && (
            <div className="absolute inset-0 flex items-center justify-center z-10 bg-slate-800">
              <Loader2 className="w-8 h-8 text-indigo-400 animate-spin" />
            </div>
          )}

          {imgError ? (
            <div className="flex flex-col items-center gap-3 text-slate-500">
              <span className="text-6xl">👤</span>
              <p className="text-sm">写真を読み込めませんでした</p>
            </div>
          ) : (
            <img
              key={person.id}
              src={person.imageUrl}
              alt="この人物は誰でしょう"
              className={`w-full h-full object-contain transition-opacity duration-500 ${
                imgLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setImgLoaded(true)}
              onError={() => {
                setImgError(true);
                setImgLoaded(true);
              }}
            />
          )}

          {/* 答え合わせオーバーレイ */}
          {isAnswered && (
            <div
              className={`absolute inset-0 flex flex-col items-center justify-end p-4 bg-gradient-to-t ${
                isCorrect ? "from-emerald-950/90" : "from-red-950/90"
              } via-transparent to-transparent`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                {isCorrect ? (
                  <CheckCircle2 className="w-7 h-7 text-emerald-400" />
                ) : (
                  <XCircle className="w-7 h-7 text-red-400" />
                )}
                <span
                  className={`text-xl font-bold ${
                    isCorrect ? "text-emerald-300" : "text-red-300"
                  }`}
                >
                  {isCorrect ? "正解！" : "不正解…"}
                </span>
              </div>
              <p className="text-white text-sm font-semibold bg-black/40 px-3 py-1 rounded-full">
                {person.name}（{person.country} {person.flag}）
              </p>
            </div>
          )}
        </div>

        {/* 回答後のパネル */}
        {isAnswered && (
          <div className="mx-5 mb-5 flex flex-col gap-3">
            {/* ヒント */}
            <div className="flex items-start gap-2 p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl">
              <Lightbulb className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-amber-200 text-sm leading-relaxed">{person.hint}</p>
            </div>

            {/* 顔の傾向説明 */}
            {facialFeature && (
              <div className="flex flex-col gap-2 p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <p className="text-indigo-300 text-xs font-bold uppercase tracking-wide">
                    {correctAnswer} {person.flag} の顔の傾向
                  </p>
                </div>
                <p className="text-white text-sm font-semibold leading-snug">
                  {facialFeature.summary}
                </p>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {facialFeature.details}
                </p>
              </div>
            )}
          </div>
        )}

        {/* 選択肢 */}
        <div className="px-5 pb-5 grid grid-cols-2 gap-3">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => onAnswer(option)}
              className={`flex items-center justify-between gap-2 px-4 py-3 border rounded-xl text-sm font-semibold transition-all duration-150 ${getOptionStyle(
                option
              )}`}
              disabled={isAnswered}
            >
              <span className="flex items-center gap-2 min-w-0">
                <span className="text-lg flex-shrink-0">
                  {isAnswered
                    ? option === correctAnswer
                      ? person.flag
                      : "🏳️"
                    : countryFlagMap[option] || "🌐"}
                </span>
                <span className="truncate">{option}</span>
              </span>
              {getOptionIcon(option)}
            </button>
          ))}
        </div>
      </div>

      {/* 次へボタン */}
      {isAnswered && (
        <div className="w-full max-w-2xl mt-5">
          <button
            onClick={onNext}
            className="w-full flex items-center justify-center gap-2 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg rounded-2xl shadow-lg shadow-indigo-600/40 transition-all duration-200 hover:scale-[1.01] active:scale-[0.99]"
          >
            {currentIndex + 1 >= total ? "結果を見る" : "次の問題へ"}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
