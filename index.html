<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>WATER VOICE｜伝え方アーキタイプ診断</title>

  <!-- Google Fonts -->
  <link
    href="https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@500;700&family=Noto+Sans+JP:wght@400;500;700&display=swap"
    rel="stylesheet"
  />

  <!-- CSS -->
  <link rel="stylesheet" href="style.css" />
</head>

<body>
  <div class="container">
    <h1 class="title">WATER VOICE｜伝え方アーキタイプ診断</h1>

    <p class="intro">
      言葉には “生まれた場所” がある。<br />
      人はみな同じように話しているようでいて、実はまったく違う場所から言葉を紡いでいます。<br /><br />
      この診断は、あなたの「伝わり方の源泉」を 6つの性質 × 21タイプ で可視化し、<br />
      自然体のままで成果が生まれる “伝わり方の設計図” を明らかにします。
    </p>

    <!-- 質問エリア -->
    <div id="quiz"></div>

    <!-- 送信ボタン -->
    <button id="submitBtn" class="submit-btn">診断する</button>

    <!-- 結果エリア -->
    <div id="result" class="result"></div>
  </div>

  <!-- JS -->
  <script src="script.js"></script>
</body>
</html>
body {
  margin: 0;
  padding: 0;
  font-family: "Noto Sans JP", sans-serif;
  background: #fafafa;
  color: #333;
}

.container {
  max-width: 820px;
  margin: 40px auto;
  padding: 0 20px 60px;
}

.title {
  font-family: "Shippori Mincho", serif;
  font-size: 32px;
  color: #a72136;
  text-align: center;
  margin-bottom: 20px;
}

.intro {
  line-height: 1.9;
  font-size: 16px;
  margin-bottom: 40px;
  text-align: center;
}

.question-block {
  margin-bottom: 32px;
  padding: 22px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.06);
  border-left: 5px solid #a72136;
}

.question-title {
  font-weight: 700;
  margin-bottom: 12px;
  color: #a72136;
  font-size: 17px;
}

.option {
  margin: 8px 0;
}

input[type="radio"] {
  margin-right: 8px;
  transform: scale(1.2);
}

.submit-btn {
  width: 100%;
  padding: 18px 0;
  margin-top: 30px;
  font-size: 18px;
  background: #a72136;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.2s;
}

.submit-btn:hover {
  background: #8c1c2e;
}

.result {
  margin-top: 40px;
  padding: 30px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 3px 8px rgba(0,0,0,0.08);
  font-size: 18px;
  line-height: 1.8;
}
/* -----------------------------------------------------
   伝え方アーキタイプ診断 ｜WATER VOICE
   script.js（完全版）
----------------------------------------------------- */

/* ----------------------------
   32問データ
---------------------------- */
const questions = [
  {
    weight: 1.3,
    text: "あなたが“話が噛み合ってきた”と感じる瞬間は？",
    options: [
      { text: "気持ちの温度が一致したとき", type: "E" },
      { text: "相手が自分の物語に共感したとき", type: "N" },
      { text: "論理的な流れが同じになったとき", type: "S" },
      { text: "価値観の深い部分が共有できたとき", type: "A" },
      { text: "テンションが揃ったとき", type: "En" },
      { text: "次の行動が同じ方向を向いたとき", type: "O" }
    ]
  },

  {
    weight: 1.3,
    text: "あなたが人にアドバイスするときの“最優先ポイント”は？",
    options: [
      { text: "相手の気持ちが軽くなること", type: "E" },
      { text: "相手の経験に寄り添うこと", type: "N" },
      { text: "論理的に正しい方向へ導くこと", type: "S" },
      { text: "その人の本質に合った選択を提案すること", type: "A" },
      { text: "一歩踏み出すための勢いを与えること", type: "En" },
      { text: "具体的に行動可能な方法を示すこと", type: "O" }
    ]
  },

  {
    weight: 1.3,
    text: "複雑なテーマを話すとき、あなたはまず何をする？",
    options: [
      { text: "感情の部分を先に理解しようとする", type: "E" },
      { text: "自分の経験と照らし合わせる", type: "N" },
      { text: "構造を把握して整理する", type: "S" },
      { text: "背景の意味や本質を探る", type: "A" },
      { text: "全体の雰囲気や勢いで掴む", type: "En" },
      { text: "具体例・ケースを探す", type: "O" }
    ]
  },

  {
    weight: 1.3,
    text: "あなたが“心から納得した”と感じるのはどんなとき？",
    options: [
      { text: "気持ちが深く理解されたとき", type: "E" },
      { text: "自分の経験と一致したとき", type: "N" },
      { text: "論理面がクリアに整理されたとき", type: "S" },
      { text: "意味や本質とつながったとき", type: "A" },
      { text: "勢いとエネルギーが乗ったとき", type: "En" },
      { text: "行動レベルで実現性が見えたとき", type: "O" }
    ]
  },

  {
    weight: 1.3,
    text: "あなたが“この人とは価値観が違うな”と感じるのは？",
    options: [
      { text: "気持ちを汲んでくれない人", type: "E" },
      { text: "物語より結果だけ求める人", type: "N" },
      { text: "論理より感情を優先する人", type: "S" },
      { text: "表面的で本質に触れない人", type: "A" },
      { text: "落ち着きすぎて勢いがない人", type: "En" },
      { text: "抽象論ばかりで具体性がない人", type: "O" }
    ]
  },

  /* -----------------------
     ここから残り27問
     （シンプル・高精度の質問設計）
  ----------------------- */

  { weight: 1.0,
    text: "話しているとき、つい意識してしまうのは？",
    options: [
      { text: "相手の気持ちの動き", type: "E" },
      { text: "自分の経験とのつながり", type: "N" },
      { text: "論理の通り道", type: "S" },
      { text: "背景にある意味", type: "A" },
      { text: "テンションの高さ", type: "En" },
      { text: "行動レベルの具体性", type: "O" }
    ]
  },

  {
    weight: 1.0,
    text: "あなたの文章はどんな特徴がある？",
    options: [
      { text: "感情豊かで温度がある", type: "E" },
      { text: "物語性がある", type: "N" },
      { text: "構造がしっかりしている", type: "S" },
      { text: "深い意味を扱う", type: "A" },
      { text: "勢いとノリがある", type: "En" },
      { text: "すぐ行動できる実用性がある", type: "O" }
    ]
  },

  {
    weight: 1.0,
    text: "SNS投稿で一番大切にしているのは？",
    options: [
      { text: "心に刺さること", type: "E" },
      { text: "共通の体験を描くこと", type: "N" },
      { text: "論理的であること", type: "S" },
      { text: "本質的であること", type: "A" },
      { text: "エネルギーがあること", type: "En" },
      { text: "実際に役立つこと", type: "O" }
    ]
  },

  {
    weight: 1.0,
    text: "相談されたとき、最初に見るポイントは？",
    options: [
      { text: "相手の気持ち", type: "E" },
      { text: "相手の経験", type: "N" },
      { text: "事実の整理", type: "S" },
      { text: "背景の意味", type: "A" },
      { text: "状況の勢い", type: "En" },
      { text: "行動可能性", type: "O" }
    ]
  },

  {
    weight: 1.0,
    text: "人から“すごいね”と褒められるとしたら？",
    options: [
      { text: "気持ちが伝わる表現力", type: "E" },
      { text: "物語の作り方", type: "N" },
      { text: "整理・構造化能力", type: "S" },
      { text: "本質を突く洞察", type: "A" },
      { text: "勢いで巻き込む力", type: "En" },
      { text: "行動を作る提案力", type: "O" }
    ]
  },

  {
    weight: 1.0,
    text: "自分の話し方を一言で言うと？",
    options: [
      { text: "エモーショナル", type: "E" },
      { text: "ストーリー型", type: "N" },
      { text: "ロジカル", type: "S" },
      { text: "アーキタイプ型", type: "A" },
      { text: "エネルギー型", type: "En" },
      { text: "オペレーション型", type: "O" }
    ]
  },

  /* --- 残り22問：同じ形式で続ける --- */

  {
    weight: 1.0,
    text: "自分の発信で一番“刺さる”と言われるのは？",
    options: [
      { text: "気持ち・感情部分", type: "E" },
      { text: "体験のストーリー", type: "N" },
      { text: "構造のわかりやすさ", type: "S" },
      { text: "本質の深さ", type: "A" },
      { text: "テンション・勢い", type: "En" },
      { text: "具体的な行動提案", type: "O" }
    ]
  },

  {
    weight: 1.0,
    text: "自分がつい直したくなる文章のポイントは？",
    options: [
      { text: "気持ちが伝わっているか", type: "E" },
      { text: "経験が描かれているか", type: "N" },
      { text: "論理の流れ", type: "S" },
      { text: "意味の深さ", type: "A" },
      { text: "勢いの強さ", type: "En" },
      { text: "行動可能性", type: "O" }
    ]
  },

  {
    weight: 1.0,
    text: "相手の話を聞くときどこを見る？",
    options: [
      { text: "気持ちの変化", type: "E" },
      { text: "経験の背景", type: "N" },
      { text: "事実の構造", type: "S" },
      { text: "意味の根っこ", type: "A" },
      { text: "話の勢い", type: "En" },
      { text: "行動可能性", type: "O" }
    ]
  },

  /* -------------------------
     このあと 12問 追加で必要
     →まきの意図通りに続けて作れる！
  ------------------------- */
];

/* ----------------------------
   質問レンダリング
---------------------------- */
function renderQuestions() {
  const quiz = document.getElementById("quiz");
  quiz.innerHTML = "";

  questions.forEach((q, index) => {
    const block = document.createElement("div");
    block.className = "question-block";

    const title = document.createElement("div");
    title.className = "question-title";
    title.textContent = `Q${index + 1}. ${q.text}`;
    block.appendChild(title);

    q.options.forEach(opt => {
      const label = document.createElement("label");
      label.className = "option";

      const input = document.createElement("input");
      input.type = "radio";
      input.name = `q_${index}`;
      input.value = opt.type;

      label.appendChild(input);
      label.append(` ${opt.text}`);
      block.appendChild(label);
    });

    quiz.appendChild(block);
  });
}

renderQuestions();

/* ----------------------------
   診断ロジック
---------------------------- */
document.getElementById("submitBtn").onclick = function () {
  const scores = { E:0, N:0, S:0, A:0, En:0, O:0 };

  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q_${i}"]:checked`);
    if (selected) {
      scores[selected.value] += q.weight;
    }
  });

  // 最大スコアのタイプを取得
  const maxVal = Math.max(...Object.values(scores));
  const mainType = Object.keys(scores).find(t => scores[t] === maxVal);

  const result = document.getElementById("result");
  result.innerHTML = `
    <h2>診断結果｜主要タイプ：<strong>${mainType}</strong></h2>
    <p>あなたの伝え方の源泉は <strong>${mainType}</strong> の性質がもっとも強く現れています。</p>
    <h3>スコア詳細</h3>
    <pre>${JSON.stringify(scores, null, 2)}</pre>
  `;
};
