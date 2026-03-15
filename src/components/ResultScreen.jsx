import { Trophy, RotateCcw, CheckCircle2, XCircle, Star } from "lucide-react";

function getRank(score, total) {
  const rate = score / total;
  if (rate === 1) return { label: "完璧！", color: "text-yellow-300", emoji: "🏆", bg: "bg-yellow-500/20 border-yellow-500/30" };
  if (rate >= 0.8) return { label: "すごい！", color: "text-emerald-300", emoji: "🥇", bg: "bg-emerald-500/20 border-emerald-500/30" };
  if (rate >= 0.6) return { label: "なかなか！", color: "text-indigo-300", emoji: "🥈", bg: "bg-indigo-500/20 border-indigo-500/30" };
  if (rate >= 0.4) return { label: "まあまあ", color: "text-slate-300", emoji: "🥉", bg: "bg-slate-500/20 border-slate-500/30" };
  return { label: "もっと頑張れ！", color: "text-red-300", emoji: "😅", bg: "bg-red-500/20 border-red-500/30" };
}

export default function ResultScreen({ answers, onRestart }) {
  const score = answers.filter((a) => a.isCorrect).length;
  const total = answers.length;
  const rank = getRank(score, total);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 py-10">
      {/* スコアカード */}
      <div className="w-full max-w-2xl mb-8 text-center">
        <div
          className={`inline-flex flex-col items-center gap-2 px-8 py-6 border rounded-2xl ${rank.bg} backdrop-blur-sm mb-6`}
        >
          <span className="text-5xl">{rank.emoji}</span>
          <span className={`text-3xl font-bold ${rank.color}`}>{rank.label}</span>
          <div className="flex items-baseline gap-1 mt-1">
            <span className="text-6xl font-bold text-white">{score}</span>
            <span className="text-2xl text-slate-400">/ {total}</span>
          </div>
          <p className="text-slate-400 text-sm">
            正解率 {Math.round((score / total) * 100)}%
          </p>
        </div>

        {/* 星評価 */}
        <div className="flex items-center justify-center gap-1 mb-6">
          {[...Array(total)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < score
                  ? "text-yellow-400 fill-yellow-400"
                  : "text-slate-600 fill-slate-700"
              }`}
            />
          ))}
        </div>

        <button
          onClick={onRestart}
          className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-lg rounded-2xl shadow-lg shadow-indigo-600/40 transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <RotateCcw className="w-5 h-5" />
          もう一度挑戦
        </button>
      </div>

      {/* 解答一覧 */}
      <div className="w-full max-w-2xl">
        <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
          <Trophy className="w-5 h-5 text-indigo-400" />
          解答振り返り
        </h3>
        <div className="flex flex-col gap-3">
          {answers.map((answer, i) => (
            <AnswerCard key={i} index={i + 1} answer={answer} />
          ))}
        </div>
      </div>
    </div>
  );
}

function AnswerCard({ index, answer }) {
  const { person, selected, correct, isCorrect } = answer;

  return (
    <div
      className={`flex items-center gap-4 p-4 border rounded-xl transition-all ${
        isCorrect
          ? "bg-emerald-500/10 border-emerald-500/30"
          : "bg-red-500/10 border-red-500/30"
      }`}
    >
      {/* 番号・正誤アイコン */}
      <div className="flex flex-col items-center gap-1 flex-shrink-0">
        <span className="text-slate-500 text-xs font-mono">Q{index}</span>
        {isCorrect ? (
          <CheckCircle2 className="w-6 h-6 text-emerald-400" />
        ) : (
          <XCircle className="w-6 h-6 text-red-400" />
        )}
      </div>

      {/* 写真 */}
      <div className="w-12 h-12 rounded-lg overflow-hidden bg-slate-800 flex-shrink-0">
        <img
          src={person.imageUrl}
          alt={person.name}
          className="w-full h-full object-cover object-top"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      {/* 情報 */}
      <div className="flex-1 min-w-0">
        <p className="text-white font-semibold text-sm truncate">{person.name}</p>
        <p className="text-slate-400 text-xs mt-0.5">
          正解:{" "}
          <span className="text-emerald-400 font-medium">
            {person.flag} {correct}
          </span>
        </p>
        {!isCorrect && (
          <p className="text-xs mt-0.5 text-red-400">
            あなたの回答: {selected}
          </p>
        )}
      </div>

      {/* 難易度 */}
      <div className="flex-shrink-0">
        <span className="text-slate-500 text-xs">
          {"★".repeat(person.difficulty)}{"☆".repeat(3 - person.difficulty)}
        </span>
      </div>
    </div>
  );
}
