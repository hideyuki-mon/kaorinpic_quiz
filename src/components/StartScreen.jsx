import { Globe, Zap, Trophy, Users } from "lucide-react";

export default function StartScreen({ onStart, totalQuestions }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
      {/* ヘッダー */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-indigo-600 mb-6 shadow-lg shadow-indigo-500/30">
          <Globe className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
          顔で当てろ！
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-indigo-300 mb-4">
          国籍クイズ
        </h2>
        <p className="text-slate-400 text-base md:text-lg max-w-md mx-auto leading-relaxed">
          世界の著名人の顔写真を見て、その人がどの国出身かを当てよう。
          {totalQuestions}問のクイズに挑戦！
        </p>
      </div>

      {/* 特徴カード */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 w-full max-w-2xl">
        <FeatureCard
          icon={<Users className="w-6 h-6 text-indigo-400" />}
          title="多彩な人物"
          desc="世界各地の著名人が登場"
        />
        <FeatureCard
          icon={<Globe className="w-6 h-6 text-emerald-400" />}
          title="40カ国以上"
          desc="アジア・欧州・米州・アフリカ"
        />
        <FeatureCard
          icon={<Zap className="w-6 h-6 text-yellow-400" />}
          title="難易度様々"
          desc="簡単〜難しいまで幅広く"
        />
      </div>

      {/* スタートボタン */}
      <button
        onClick={onStart}
        className="group relative inline-flex items-center gap-3 px-10 py-4 bg-indigo-600 hover:bg-indigo-500 text-white text-xl font-bold rounded-2xl shadow-lg shadow-indigo-600/40 transition-all duration-200 hover:scale-105 active:scale-95"
      >
        <Trophy className="w-6 h-6 group-hover:rotate-12 transition-transform duration-200" />
        クイズを始める
      </button>

      <p className="mt-6 text-slate-500 text-sm">
        {totalQuestions}問 / ランダム出題 / 4択
      </p>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div className="flex flex-col items-center gap-2 p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
      <div className="p-2 bg-white/10 rounded-lg">{icon}</div>
      <p className="text-white font-semibold text-sm">{title}</p>
      <p className="text-slate-400 text-xs text-center">{desc}</p>
    </div>
  );
}
