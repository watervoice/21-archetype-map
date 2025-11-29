/* ----------------------------
   質問データ（32問 ＋ 重み付け）
   1〜8 ＝ 表層（weight 2.0）
   9〜24＝ 性質（weight 1.0）
   25〜32＝ 本質（weight 1.3）
---------------------------- */

const questions = [

  /* ========== Q1〜Q8：表層（2.0）========== */
  {
    weight: 2.0,
    text: "あなたが人に何かを説明するとき、一番しっくりくる伝え方は？",
    options: [
      { text: "自分の体験談を交えて話す", type: "N" },
      { text: "相手の気持ちに沿いながら柔らかく伝える", type: "E" },
      { text: "結論→理由→例の順に整理して話す", type: "S" },
      { text: "背景の意味や本質から説明する", type: "A" },
      { text: "勢いと感覚でテンション高めに伝える", type: "En" },
      { text: "具体的な方法や手順を中心に伝える", type: "O" }
    ]
  },
  {
    weight: 2.0,
    text: "SNSで発信するとき、あなたが最も自然に取りやすいスタイルは？",
    options: [
      { text: "物語形式の投稿（自分の経験やエピソード）", type: "N" },
      { text: "共感メッセージ（気持ちに寄り添う）", type: "E" },
      { text: "ポイントを整理したロジカル投稿", type: "S" },
      { text: "世界観や哲学を語る抽象寄りの投稿", type: "A" },
      { text: "勢い・熱量で刺す投稿", type: "En" },
      { text: "ノウハウ・HOW TO系", type: "O" }
    ]
  },
  {
    weight: 2.0,
    text: "あなたが人に注意されたとき、どんな受け取り方をしやすい？",
    options: [
      { text: "感情が大きく動く", type: "E" },
      { text: "指摘の構造を理解しようとする", type: "S" },
      { text: "なぜそうなるのか意味を考える", type: "A" },
      { text: "勢いのある言い方だと委縮する", type: "E" },
      { text: "言われた瞬間に反発したくなる", type: "En" }
    ]
  },
  {
    weight: 2.0,
    text: "初対面の人に自己紹介するときの傾向は？",
    options: [
      { text: "エピソードを交えて話す", type: "N" },
      { text: "相手の反応を見ながら柔らかく話す", type: "E" },
      { text: "要点を簡潔にまとめて話す", type: "S" },
      { text: "自分の価値観や背景から話す", type: "A" },
      { text: "テンション高めで明るく話す", type: "En" },
      { text: "事実や職業など実務的に話す", type: "O" }
    ]
  },
  {
    weight: 2.0,
    text: "相手に頼み事をするとき、一番自然なのは？",
    options: [
      { text: "気持ちや状況を伝えてお願いする", type: "E" },
      { text: "自分の体験や背景を話してお願いする", type: "N" },
      { text: "要点を端的にまとめて伝える", type: "S" },
      { text: "意図や目的の本質を説明して頼む", type: "A" },
      { text: "勢いとノリでお願いしちゃう", type: "En" },
      { text: "手順や必要性を明確にして伝える", type: "O" }
    ]
  },
  {
    weight: 2.0,
    text: "あなたが“人に伝えるのが苦手だな”と感じる瞬間は？",
    options: [
      { text: "感情が大きく動いてしまうとき", type: "E" },
      { text: "話が長くなってしまうとき", type: "N" },
      { text: "整理が追いつかず結論がぼやけるとき", type: "S" },
      { text: "抽象化しすぎて伝わりづらいとき", type: "A" },
      { text: "勢いで話してしまい、相手がついてこないとき", type: "En" },
      { text: "具体例が弱く、説得しきれないとき", type: "O" }
    ]
  },
  {
    weight: 2.0,
    text: "会話の中で、あなたが無意識に重視しているのは？",
    options: [
      { text: "自分の経験に照らして話す", type: "N" },
      { text: "相手の気持ちの流れ", type: "E" },
      { text: "話の構造と順序", type: "S" },
      { text: "背景にある意味や意図", type: "A" },
      { text: "空気感やテンション", type: "En" },
      { text: "現実的にどうするか", type: "O" }
    ]
  },
  {
    weight: 2.0,
    text: "あなたが“話していて一番気持ちいい瞬間”は？",
    options: [
      { text: "相手が感情的に共感してくれた瞬間", type: "E" },
      { text: "物語が伝わって表情が変わった瞬間", type: "N" },
      { text: "説明が伝わって相手が理解した瞬間", type: "S" },
      { text: "本質が繋がって深い会話になった瞬間", type: "A" },
      { text: "こちらの熱量に乗ってくれた瞬間", type: "En" },
      { text: "具体的アクションに落とし込めた瞬間", type: "O" }
    ]
  },

  /* ========== Q9〜Q24：性質（1.0）========== */
  {
    weight: 1.0,
    text: "あなたが“誤解された”と感じるとき、もっとも原因になりやすいのは？",
    options: [
      { text: "説明より感情を優先しすぎる", type: "E" },
      { text: "体験談が長くなりすぎる", type: "N" },
      { text: "結論を急ぎすぎて丁寧さが欠ける", type: "S" },
      { text: "抽象度が高くイメージが伝わらない", type: "A" },
      { text: "勢いで話しすぎて丁寧さが欠ける", type: "En" },
      { text: "具体例や根拠が弱く納得されない", type: "O" }
    ]
  },
  {
    weight: 1.0,
    text: "コミュニケーションで“より大切にしたい”と思うものは？",
    options: [
      { text: "相手の気持ちに寄り添うこと", type: "E" },
      { text: "自分の言葉で本音を語ること", type: "N" },
      { text: "分かりやすく整理して伝えること", type: "S" },
      { text: "価値観や世界観を共有すること", type: "A" },
      { text: "エネルギーや勢いを交換すること", type: "En" },
      { text: "実際に行動に移せる具体性", type: "O" }
    ]
  },
  {
    weight: 1.0,
    text: "恋愛やパートナーシップで、あなたが“伝わらない”と感じやすいのは？",
    options: [
      { text: "気持ちを察してもらえないとき", type: "E" },
      { text: "言いたいことをまとめられないとき", type: "N" },
      { text: "論理が先行して冷たく見えるとき", type: "S" },
      { text: "抽象的すぎて相手がついてこないとき", type: "A" },
      { text: "勢いに相手が引いてしまうとき", type: "En" },
      { text: "具体的な要望が伝わらないとき", type: "O" }
    ]
  },
  {
    weight: 1.0,
    text: "あなたが会話で“相手に求めてしまうこと”は？",
    options: [
      { text: "気持ちを汲んでほしい", type: "E" },
      { text: "話を最後まで聞いてほしい", type: "N" },
      { text: "論理的に理解してほしい", type: "S" },
      { text: "価値観や意味を共有したい", type: "A" },
      { text: "テンションを合わせてほしい", type: "En" },
      { text: "明確な結論を出してほしい", type: "O" }
    ]
  },
  {
    weight: 1.0,
    text: "あなたが“気づいたらやっている無意識の伝え方”は？",
    options: [
      { text: "相手に合わせすぎてしまう", type: "E" },
      { text: "自分語りが増える", type: "N" },
      { text: "要点だけ先に伝えてしまう", type: "S" },
      { text: "話を抽象化しすぎる", type: "A" },
      { text: "勢いで話してしまう", type: "En" },
      { text: "具体例を挟みすぎる", type: "O" }
    ]
  },
  {
    weight: 1.0,
    text: "あなたが“相手と噛み合わない”と感じるのはどんなとき？",
    options: [
      { text: "気持ちを読み取ってもらえない", type: "E" },
      { text: "自分の話が脱線してしまう", type: "N" },
      { text: "論理の順番が違うと言われる", type: "S" },
      { text: "抽象的と言われる", type: "A" },
      { text: "勢いが強すぎると言われる", type: "En" },
      { text: "具体性が足りないと言われる", type: "O" }
    ]
  },
  {
    weight: 1.0,
    text: "あなたが人の話を聞くとき、無意識で最初にフォーカスするのは？",
    options: [
      { text: "気持ちの動きや心の反応", type: "E" },
      { text: "相手の経験や背景の物語", type: "N" },
      { text: "話の構造・論理の流れ", type: "S" },
      { text: "その言葉の意味や価値観", type: "A" },
      { text: "声色・テンション・勢い", type: "En" },
      { text: "具体的に何をすればいいか", type: "O" }
    ]
  },
  {
    weight: 1.0,
    text: "あなたが“相談相手として求められやすい役割”は？",
    options: [
      { text: "気持ちを受け止めてあげる存在", type: "E" },
      { text: "自分の体験をシェアして寄り添う存在", type: "N" },
      { text: "状況を整理して答えを導く存在", type: "S" },
      { text: "本質を一緒に見抜く存在", type: "A" },
      { text: "勢いをつけて背中を押す存在", type: "En" },
      { text: "具体的な行動を提案する存在", type: "O" }
    ]
  },
  {
    weight: 1.0,
    text: "SNS発信で最もつまずきやすいポイントは？",
    options: [
      { text: "共感を気にしすぎてしまう", type: "E" },
      { text: "体験談が長くなりすぎる", type: "N" },
      { text: "構造化しすぎて硬い投稿になる", type: "S" },
      { text: "抽象度が高すぎて伝わらない", type: "A" },
      { text: "勢いが伝わらず空回りする", type: "En" },
      { text: "HOW TOばかりで個性が薄くなる", type: "O" }
    ]
  },
  {
    weight: 1.0,
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

  /* ========== Q25〜Q32：本質（1.3）========== */
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
  }
];


/* ----------------------------
   質問を画面に表示
---------------------------- */
function renderQuestions() {
  const container = document.getElementById('questions');
  container.innerHTML = '';

  questions.forEach((q, qi) => {
    const block = document.createElement('div');
    block.className = 'question-block';

    const title = document.createElement('h3');
    title.textContent = `Q${qi + 1}. ${q.text}`;
    block.appendChild(title);

    q.options.forEach(opt => {
      const label = document.createElement('label');
      label.className = 'option';

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `q_${qi}`;
      input.value = opt.type;

      label.appendChild(input);
      label.append(` ${opt.text}`);
      block.appendChild(label);
    });

    container.appendChild(block);
  });
}

renderQuestions();


/* ----------------------------
   診断結果ロジック
---------------------------- */
document.getElementById('submitBtn').onclick = () => {

  const scores = { N: 0, E: 0, S: 0, A: 0, En: 0, O: 0 };

  questions.forEach((q, qi) => {
    const selected = document.querySelector(`input[name='q_${qi}']:checked`);
    if (selected) {
      scores[selected.value] += q.weight;
    }
  });

  // 最大タイプ判定
  const maxScore = Math.max(...Object.values(scores));
  const mainType = Object.keys(scores).find(key => scores[key] === maxScore);

  // 表示
  const resultBox = document.getElementById('resultBox');
  const resultContent = document.getElementById('resultContent');

  resultContent.innerHTML = `
    <h3>あなたの主要タイプ：${mainType}</h3>
    <pre>${JSON.stringify(scores, null, 2)}</pre>
  `;

  resultBox.style.display = "block";
};
