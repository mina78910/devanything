// 14分類の共通定義データ
const typeOrder = [
    'C-C', 'C-P', 'C-A', 'P-C', 'P-P', 'P-S', 'S-P',
    'S-S', 'S-A', 'A-C', 'A-S', 'A-A', 'C-S', 'P-A'
];

const typeDict = {
    "C-C": {
        name: "戦闘民族",
        core: "壁を突破する人",
        status: ["勝負こそ燃料", "全速力で壁をぶち抜く"],
        strengths: ["突破力", "勝負勘", "行動スピード"],
        weakness: "止まって考える時間が長いとイライラ。強く言いすぎて周りがびっくりすることも。",
        hex: "#FF3D00",
        image: "14_character_pngs/01_C-C.png"
    },
    "C-P": {
        name: "ブースター",
        core: "熱量で人を動かす人",
        status: ["熱量がエンジン", "勢いと明るさでみんなを加速"],
        strengths: ["巻き込み力", "瞬発力", "場の点火"],
        weakness: "盛り上がるほど細かい確認を忘れがち。テンション任せで突っ走りすぎ注意。",
        hex: "#FF9100",
        image: "14_character_pngs/02_C-P.png"
    },
    "C-A": {
        name: "裏参謀",
        core: "勝ち筋を見抜く人",
        status: ["勝ち筋を読む策士", "熱い闘志をクールに運用"],
        strengths: ["分析力", "作戦設計", "冷静な判断"],
        weakness: "頭の中で勝ち筋が見えすぎて、説明が短くなりがち。怖く見られる時も。",
        hex: "#00B0FF",
        image: "14_character_pngs/03_C-A.png"
    },
    "P-C": {
        name: "熱血マン",
        core: "情熱を伝える人",
        status: ["主役スイッチ常時ON", "熱い言葉で前線をこじ開ける"],
        strengths: ["リーダー感", "情熱表現", "突破の号令"],
        weakness: "注目されない・勢いを止められる場面が苦手。空回りすると熱量が圧になることも。",
        hex: "#FFD600",
        image: "14_character_pngs/04_P-C.png"
    },
    "P-P": {
        name: "ハイテンション",
        core: "場を盛り上げる人",
        status: ["楽しいが正義", "感情全開で共鳴拡散"],
        strengths: ["ムード形成", "共感力", "元気供給"],
        weakness: "退屈・無反応・ノリの悪さに弱め。集中が切れると一気に電池切れ。",
        hex: "#F50057",
        image: "14_character_pngs/05_P-P.png"
    },
    "P-S": {
        name: "フレンドメーカー",
        core: "人を巻き込む人",
        status: ["仲良し空間クリエイター", "楽しい輪を広げて安心も配る"],
        strengths: ["友達づくり", "空気ほぐし", "ポジティブ配慮"],
        weakness: "みんなに合わせすぎて自分の本音が後回しに。輪から外れる空気にかなり敏感。",
        hex: "#FF4081",
        image: "14_character_pngs/06_P-S.png"
    },
    "S-P": {
        name: "応援団",
        core: "仲間の背中を押す人",
        status: ["応援で世界を明るく", "人の良さを見つけて全力プッシュ"],
        strengths: ["励まし力", "親しみやすさ", "共感サポート"],
        weakness: "感謝や反応がないとしょんぼり。人の気持ちを背負いすぎて疲れることも。",
        hex: "#FF80AB",
        image: "14_character_pngs/07_S-P.png"
    },
    "S-S": {
        name: "安心基地",
        core: "安心を与える人",
        status: ["安心が最強装備", "そばにいるだけで場をゆるめる"],
        strengths: ["癒し力", "聞く力", "安定感"],
        weakness: "ギスギスした空気が苦手。みんなが大丈夫か気になって自分を後回しにしがち。",
        hex: "#00E676",
        image: "14_character_pngs/08_S-S.png"
    },
    "S-A": {
        name: "黒子役",
        core: "陰で支え続ける人",
        status: ["見えない所で支える職人", "静かに整えてチームを守る"],
        strengths: ["気配り", "裏方力", "継続サポート"],
        weakness: "自分の頑張りを言葉にするのが苦手。気づかれないまま抱え込みやすい。",
        hex: "#76FF03",
        image: "14_character_pngs/09_S-A.png"
    },
    "A-C": {
        name: "司令塔",
        core: "全体を導く人",
        status: ["論理で盤面制圧", "冷静な指示で勝ちに導く"],
        strengths: ["戦略思考", "判断基準", "全体設計"],
        weakness: "非効率や曖昧な指示に弱い。正しさを優先しすぎると冷たく見えることも。",
        hex: "#2979FF",
        image: "14_character_pngs/10_A-C.png"
    },
    "A-S": {
        name: "バランサー",
        core: "みんなが納得する形を作る人",
        status: ["整理して配慮", "静かに関係を保つ"],
        strengths: ["静かな助言", "安定維持"],
        weakness: "空気も理屈も気になる。全員が納得する答えを探して悩みがち。",
        hex: "#00E5FF",
        image: "14_character_pngs/11_A-S.png"
    },
    "A-A": {
        name: "インテリ",
        core: "本質を見抜く人",
        status: ["納得こそ安心", "情報を集めて深く掘り進む"],
        strengths: ["探究心", "観察力", "論理整理"],
        weakness: "雑な説明や根拠なしのノリが苦手。考えすぎて動き出しが遅れる時も。",
        hex: "#651FFF",
        image: "14_character_pngs/12_A-A.png"
    },
    "C-S": {
        name: "仲間番長",
        core: "仲間を守り抜く人",
        status: ["仲間を守る番長気質", "優しさを武器に本気で立ち向かう"],
        strengths: ["仲間思い", "守る力", "熱い責任感"],
        weakness: "大事な人のために無理をしがち。敵味方を分けすぎると頑固モードに。",
        hex: "#00BFA5",
        image: "14_character_pngs/13_S-C.png"
    },
    "P-A": {
        name: "妄想族",
        core: "発想を探究する人",
        status: ["ひらめき探究オタク", "妄想と分析で新世界をつくる"],
        strengths: ["発想力", "世界観づくり", "深掘り力"],
        weakness: "面白そうなアイデアが次々浮かぶ。気づくと寄り道や考察が増えすぎることも。",
        hex: "#D500F9",
        image: "14_character_pngs/14_A-P.png"
    }
};

if (typeof window !== 'undefined') {
    window.typeOrder = typeOrder;
    window.typeDict = typeDict;
}
