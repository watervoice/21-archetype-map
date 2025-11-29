/* -----------------------------------------------------
   伝え方アーキタイプ診断 ｜ WATER VOICE
   script.js（32問・完全版）
----------------------------------------------------- */

/* ----------------------------
   質問データ（32問）
   Q1〜Q8   : 表層スタイル（weight: 2.0）
   Q9〜Q24  : 性質・性格傾向（weight: 1.0）
   Q25〜Q32 : 本質・源泉・深層判定（weight: 1.3）
---------------------------- */
const questions = [
  // ===== Q1〜Q8 表層スタイル：weight 2.0 =====
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
  {
    weight: 2.0,
    text: "あなたが“相談相手として頼られる”とき、多いパターンは？",
    options: [
      { text: "気持ちを受け止めてほしいと言われる", type: "E" },
      { text: "似た体験談を聞かせてと言われる", type: "N" },
      { text: "整理してほしい・言語化してほしいと言われる", type: "S" },
      { text: "本質的な視点がほしいと言われる", type: "A" },
      { text: "背中を押してほしいと言われる", type: "En" },
      { text: "具体的なやり方を教えてと言われる", type: "O" }
    ]
  },
  {
    weight: 2.0,
    text: "自分の発信全体の“雰囲気”に一番近いのは？",
    options: [
      { text: "あたたかくてエモーショナル", type: "E" },
      { text: "ストーリー性が強い", type: "N" },
      { text: "整理されていて読みやすい", type: "S" },
      { text: "哲学的・本質的で深い", type: "A" },
      { text: "勢い・熱量・ノリがある", type: "En" },
      { text: "実務的・実用的で役に立つ", type: "O" }
    ]
  },

  // ===== Q9〜Q24 性質・性格傾向：weight 1.0 =====
  {
    weight: 1.0,
    text: "会話の中で、あなたが無意識に重視しているのは？",
    options: [
      { text: "自分や相手の感情", type: "E" },
      { text: "お互いの経験・ストーリー", type: "N" },
      { text: "話の構造と順序", type: "S" },
      { text: "背景にある意味や意図", type: "A" },
      { text: "空気感やテンション", type: "En" },
      { text: "現実的にどうするか", type: "O" }
    ]
  },
  {
    weight: 1.0,
    text: "あなたが“誤解された”と感じるとき、原因になりやすいのは？",
    options: [
      { text: "説明より感情を優先しすぎる", type: "E" },
      { text: "体験談が長くなりすぎる", type: "N" },
      { text: "結論を急ぎすぎて丁寧さが欠ける", type: "S" },
      { text: "抽象度が高くイメージが伝わらない", type: "A" },
      { text: "勢いで話しすぎて相手がついてこない", type: "En" },
      { text: "具体例や根拠が弱く納得されない", type: "O" }
    ]
  },
  {
    weight: 1.0,
    text: "コミュニケーションで“もっと大切にしたい”と思うものは？",
    options: [
      { text: "相手の気持ちに寄り添うこと", type: "E" },
      { text: "自分の言葉で本音を語ること", type: "N" },
      { text: "分かりやすく整理して伝えること", type: "S" },
      { text: "価値観や意味を共有すること", type: "A" },
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
    text: "あなたが文章を書くとき、一番意識しているのは？",
    options: [
      { text: "感情の温度が伝わること", type: "E" },
      { text: "物語として読めること", type: "N" },
      { text: "構造が分かりやすいこと", type: "S" },
      { text: "本質的なメッセージがあること", type: "A" },
      { text: "勢い・リズム感があること", type: "En" },
      { text: "読んだ人が動けること", type: "O" }
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
      { text: "アーキタイプ型（本質語り）", type: "A" },
      { text: "エネルギー型", type: "En" },
      { text: "オペレーション型", type: "O" }
    ]
  },
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
    text: "相手の話を聞くとき、どこが一番気になる？",
    options: [
      { text: "そのときの感情・心の動き", type: "E" },
      { text: "どんな経験をしたのか", type: "N" },
      { text: "話の筋が通っているか", type: "S" },
      { text: "そこにどんな意味があるか", type: "A" },
      { text: "テンションや勢い", type: "En" },
      { text: "現実的に何ができるか", type: "O" }
    ]
  },
  {
    weight: 1.0,
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

  // ===== Q25〜Q32 本質・源泉・深層：weight 1.3 =====
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
    text: "人生全体で“これが自分らしい伝え方だな”と感じる軸は？",
    options: [
      { text: "心の動きを分かち合うこと", type: "E" },
      { text: "物語から真実を伝えること", type: "N" },
      { text: "構造を示して道筋を照らすこと", type: "S" },
      { text: "本質を掴んで一言で射抜くこと", type: "A" },
      { text: "エネルギーで周りを動かすこと", type: "En" },
      { text: "現実レベルの変化を起こすこと", type: "O" }
    ]
  },
  {
    weight: 1.3,
    text: "今後さらに磨きたい“自分の伝え方の軸”は？",
    options: [
      { text: "もっと感情に正直な表現", type: "E" },
      { text: "もっと物語としての深さ", type: "N" },
      { text: "もっと構造化された説明力", type: "S" },
      { text: "もっと本質を射抜く一言", type: "A" },
      { text: "もっとエネルギッシュな発信", type: "En" },
      { text: "もっと行動につながる提案力", type: "O" }
    ]
  },
  {
    weight: 1.3,
    text: "“これが自分のギフトだな”と感じるものに近いのは？",
    options: [
      { text: "人の気持ちに深く共鳴する力", type: "E" },
      { text: "経験を物語として紡ぎなおす力", type: "N" },
      { text: "複雑なものを整理して伝える力", type: "S" },
      { text: "本質やパターンを見抜く力", type: "A" },
      { text: "場のエネルギーを動かす力", type: "En" },
      { text: "現実的なアクションに落とす力", type: "O" }
    ]
  },
  {
    weight: 1.3,
    text: "老後の自分を想像したとき、“どんな伝え方の人でありたい？”",
    options: [
      { text: "そばにいるだけで心が楽になる人", type: "E" },
      { text: "物語を語り継ぐストーリーテラー", type: "N" },
      { text: "わかりやすく道を示すナビゲーター", type: "S" },
      { text: "本質を静かに語る哲学者タイプ", type: "A" },
      { text: "場を一気に明るくするムードメーカー", type: "En" },
      { text: "人生の作戦会議を一緒にしてくれる参謀", type: "O" }
    ]
  }
];

/* ============================================
   21 Archetype Definitions
   WATER VOICE 完全オリジナル
============================================ */

 /* -----------------------------------------
   21タイプの診断結果データ
----------------------------------------- */
const archetypeInfo = {
  "E": {
    title: "E（Emotion）｜温度で伝えるエモーショナル型",
    subtitle: "共感と感情の動きが中心になる“伝わる言葉”",
    description: "あなたは、心の温度を感じ取る力に優れています。文章でも会話でも“気持ちの動きを言語化する力”があり、読み手の感情を優しく動かす表現が得意。あなたの言葉には人を癒し、安心させる力があります。"
  },
  "N": {
    title: "N（Narrative）｜物語で伝えるストーリー型",
    subtitle: "経験・体験から生まれる“ストーリーで響く言葉”",
    description: "あなたは、自分や他人の経験から意味を見出し、物語として伝えるのが得意です。ストーリーを通して相手の心に届く“説得力”を持ち、SNS発信でも強い個性になります。"
  },
  "S": {
    title: "S（Structure）｜構造で伝えるロジカル型",
    subtitle: "情報を整理し、わかりやすく伝える“構造のプロ”",
    description: "あなたは、複雑な情報を整理し「順序立てて説明する力」が高いタイプ。論理的でクリアな伝え方ができるため、ビジネスでも強い信頼をつくりやすい特徴があります。"
  },
  "A": {
    title: "A（Archetype）｜意味で伝える深層型",
    subtitle: "本質・概念・根源から言葉をつむぐ“哲学的タイプ”",
    description: "あなたは“背景にある意味”を読み解く力に優れ、本質へまっすぐに触れる言葉を届けられる人。洞察が深く、聞く人に“気づき”を生み出す表現が強みです。"
  },
  "En": {
    title: "En（Energy）｜勢いで伝えるエナジー型",
    subtitle: "熱量・テンション・スピード感で動かす“ムードメーカー”",
    description: "あなたの言葉は“動く力”を持っています。テンションと勢いで場を明るくし、読む人・聞く人の背中を押すことができるタイプです。自分の温度をそのまま表現すると強い魅力が発揮されます。"
  },
  "O": {
    title: "O（Operation）｜実行で伝えるオペレーション型",
    subtitle: "具体性・行動・再現性で説得する“実務タイプ”",
    description: "あなたは、抽象論よりも“どう行動すればいいか”を示すのが得意。手順や具体例がわかりやすく、聞いた人がすぐに実行できる“実用的な言葉”を届けられるタイプです。"
  }
};


/* ----------------------------
   質問レンダリング
---------------------------- */
function renderQuestions() {
  const container = document.getElementById("questions");
  container.innerHTML = "";

  questions.forEach((q, index) => {
    const block = document.createElement("div");
    block.className = "question-block";

    const title = document.createElement("h3");
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

    container.appendChild(block);
  });
}

renderQuestions();

/* ----------------------------
   診断ロジック
---------------------------- */
document.getElementById("submitBtn").onclick = () => {
  const scores = { N: 0, E: 0, S: 0, A: 0, En: 0, O: 0 };

  questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q_${i}"]:checked`);
    if (selected) {
      scores[selected.value] += q.weight;
    }
  });

  // 最大スコアのタイプ
  const maxVal = Math.max(...Object.values(scores));
  const mainTypes = Object.keys(scores).filter(key => scores[key] === maxVal);

  const resultBox = document.getElementById("resultBox");
  const resultContent = document.getElementById("resultContent");

  // ① 診断結果 HTML を先に描画
resultContent.innerHTML = `
  <h3>あなたの主要タイプ：<strong>${mainTypes.join(" / ")}</strong></h3>

  <h2>${archetypeInfo[mainTypes[0]].title}</h2>
  <h3>${archetypeInfo[mainTypes[0]].subtitle}</h3>
  <p>${archetypeInfo[mainTypes[0]].description}</p>

  <h4>スコア詳細</h4>
  <pre>${JSON.stringify(scores, null, 2)}</pre>
`;
 /* ▼ スコア詳細（正式名称 + 整数化 + 簡易棒グラフ） ▼ */

// 型 → 名称のマップ
const typeNames = {
  N: "N（Narrative / 物語）",
  E: "E（Emotion / 感情）",
  S: "S（Structure / 構造）",
  A: "A（Archetype / 深層）",
  En: "En（Energy / エネルギー）",
  O: "O（Outer / 外界）"
};

// 整数スコアを作成
const intScores = {};
Object.keys(scores).forEach(key => {
  intScores[key] = Math.round(scores[key]);
});

// 最大値を取得（グラフ用）
const maxScore = Math.max(...Object.values(intScores));

// HTML生成
let scoreHTML = `
  <h4>スコア詳細</h4>
  <div style="margin-top:10px;">
`;

Object.keys(intScores).forEach(key => {
  const name = typeNames[key];
  const val = intScores[key];

  // 棒グラフ幅（%）
  const barWidth = maxScore === 0 ? 0 : (val / maxScore) * 100;

  scoreHTML += `
    <div style="margin:6px 0;">
      <strong>${name}</strong>：${val}
      <div style="
        height:12px;
        background:#eee;
        border-radius:6px;
        margin-top:2px;
      ">
        <div style="
          width:${barWidth}%;
          height:100%;
          background:#ff6b6b;
          border-radius:6px;
        "></div>
      </div>
    </div>
  `;
});

scoreHTML += `</div>`;

// ▼ resultContent の後ろに追加
resultContent.innerHTML += scoreHTML;

// ② SNS シェア用リンク生成
const url = encodeURIComponent(location.href);
const text = encodeURIComponent(`【診断結果】私の主要タイプは「${mainTypes.join(" / ")}」でした！`);

document.getElementById("shareTwitter").href =
  `https://twitter.com/intent/tweet?text=${text}&url=${url}`;

document.getElementById("shareLINE").href =
  `https://line.me/R/msg/text/?${text}%0A${url}`;

document.getElementById("shareFB").href =
  `https://www.facebook.com/sharer/sharer.php?u=${url}`;

// URLコピー
document.getElementById("copyURL").onclick = () => {
  navigator.clipboard.writeText(location.href);
  alert("URLをコピーしました！");
};



  resultBox.style.display = "block";
};
