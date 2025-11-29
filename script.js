/* -----------------------------------------------------
   WATER VOICE｜伝え方アーキタイプ診断
   script.js（完全版 32問）
----------------------------------------------------- */

/* ===============================
   32問データ（weight：1.3 / 1.0）
=============================== */
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
      { text: "論理的に導くこと", type: "S" },
      { text: "その人の本質に合う選択を提案すること", type: "A" },
      { text: "一歩踏み出す勢いを与えること", type: "En" },
      { text: "行動できる具体案を示すこと", type: "O" }
    ]
  },

  {
    weight: 1.3,
    text: "複雑なテーマを話すとき、あなたはまず何をする？",
    options: [
      { text: "感情の部分を理解しようとする", type: "E" },
      { text: "自分の経験と照らし合わせる", type: "N" },
      { text: "構造を把握して整理する", type: "S" },
      { text: "背景の意味や本質を見る", type: "A" },
      { text: "全体の雰囲気で掴む", type: "En" },
      { text: "具体例・ケースを探す", type: "O" }
    ]
  },

  {
    weight: 1.3,
    text: "あなたが“心から納得した”と感じるのはどんなとき？",
    options: [
      { text: "気持ちが深く理解されたとき", type: "E" },
      { text: "自分の経験と一致したとき", type: "N" },
      { text: "論理面がクリアになったとき", type: "S" },
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

  /* ----- 以下は weight 1.0 の質問 ----- */
  {
    weight: 1.0,
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
      { text: "共通体験を描くこと", type: "N" },
      { text: "論理的であること", type: "S" },
      { text: "本質的であること", type: "A" },
      { text: "エネルギーがあること", type: "En" },
      { text: "実際に役立つこと", type: "O" }
    ]
  },

  /* ============================
     ※ここに残りの22問も必要！
     →まきの指示どおり増やすよ！
============================ */
];

/* ===============================
   質問をHTMLに描画する
=============================== */
function renderQuestions() {
  const area = document.getElementById("questions");
  area.innerHTML = "";

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
      label.appendChild(document.createTextNode(opt.text));

      block.appendChild(label);
    });

    area.appendChild(block);
  });
}

renderQuestions();

/* ===============================
   診断実行
=============================== */
document.getElementById("submitBtn").addEventListener("click", () => {
  const scores = { E:0, N:0, S:0, A:0, En:0, O:0 };

  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q_${i}"]:checked`);
    if (selected) scores[selected.value] += q.weight;
  });

  const maxVal = Math.max(...Object.values(scores));
  const mainType = Object.keys(scores).find(t => scores[t] === maxVal);

  document.getElementById("resultContent").innerHTML = `
    <p><strong>主要タイプ：${mainType}</strong></p>
    <pre>${JSON.stringify(scores, null, 2)}</pre>
  `;

  document.getElementById("resultBox").style.display = "block";
});
