# NVIDIA / NVentures · 投资人档案

> 卖铲子的人，为什么还要给淘金者发钱？
> 因为它发的不是钱，是**绑定**：每一笔投资都附带一份「请用我的算力」的合约。
> NVIDIA 不在乎哪家机器人公司赢——**它投谁都行，反正都得买它的芯片、跑它的 Isaac、装它的 Jetson。**
> 这是一台「投资—算力」双绑机器：用股权押注换取生态忠诚，用生态忠诚锁死硬件销售。

> 标注约定：【文献】= 有公开来源支撑；【推演】= 基于其商业逻辑的合理重构（NVIDIA 没有逐字这样说）。
> 本篇聚焦 NVIDIA 作为「投资人」的一面；它作为平台/卖铲子/大脑（GR00T）的一面，见 `02-companies/nvidia-gr00t.md`，不重复。

---

## 速览
| 项 | 内容 |
|---|---|
| 机构 | **NVentures**（NVIDIA 旗下正式风投基金，约 2023 年初成立）+ Corporate Development（战略并购/大单团队） |
| 负责人 | Mohamed "Sid" Siddeek（NVentures 负责人，前 SoftBank Vision Fund / Mubadala / KKR） |
| 投资风格 | **战略 CVC**：投资跟着「会用我算力的人」走 · 不为单笔回报、为生态绑定 · 全行业撒网 |
| 在具身的真实动作 | **几乎全行业**：Figure（B+C 轮）、Skild AI（C 轮）、Wayve、Field AI、Generalist AI、Bright Machines、Nuro、Serve Robotics 等 |
| 出手节奏 | NVentures 2025 年约 30 笔（2022 年仅 1 笔）；NVIDIA 全口径 2025 年参与近 67 笔 VC 交易【文献】 |
| 一句话态度 | **「投谁都行，反正都买我芯片」**——股权是诱饵，算力税才是目的 |

---

## 一、投资基因与风格：CVC 不是 VC 【文献+推演】
先分清两件事。NVentures 是 NVIDIA 2023 年才正式立起来的风投部门，单笔几百万到几千万美元，从公司**资产负债表**直接出钱，专做早期；真正的大单（OpenAI、xAI 那种几十上百亿）走的是另一条线——Corporate Development（战略并购团队）。两条腿，一条管「撒种」，一条管「下重注」。

但无论哪条腿，**NVIDIA 的投资基因和普通 VC 根本不是一回事**：

- **普通 VC 求的是回报；NVIDIA 求的是「这家公司会不会用我的算力」。** Siddeek 自己讲得很白——NVentures 偏好「能从使用 NVIDIA 技术中获益」的公司。翻译过来：**投资是筛选器，筛出生态依赖者。**
- **与卖铲子主业的协同，是这门生意的全部。** GR00T 开源做安卓、Jetson/DGX 卖铲子（详见 GR00T 档案），而投资是这套打法的**第三条腿**：开源引流 + 卖硬件变现 + 投资绑死。三条腿夹住整个行业——你拿免费模型、买它芯片、还拿了它的钱，想换供应商都难。
- **不押路线，押「都来用我的栈」。** 别人争「谁的大脑最强」，NVIDIA 谁都投一点，确保无论哪条技术路线赢，赢家都已经是它的被投+客户。

> 一句话：**它不是在做财务投资，是在用股权给自己的芯片销售上保险。**

---

## 二、在具身的真实动作：几乎全行业 【文献】
具身赛道上，NVIDIA 的投资名单密到失真——它几乎在每一个有声量的玩家身上都留了一手：

| 标的 | 领域 | NVIDIA 参与 | 状态 / 估值 |
|---|---|---|---|
| **Figure AI** | 人形本体+大脑 | B 轮（2024-02）+ C 轮（2025-09） | C 轮 >$10 亿，估值 **$390 亿**【文献】 |
| **Skild AI** | 通用机器人大脑 | C 轮，NVentures 参投（SoftBank 领投） | $14 亿融资，估值 **>$140 亿**（2025-12）【文献】 |
| **Wayve** | 自动驾驶基础模型 | 2024-05 的 $10.5 亿轮参投；2025-09 称将再投 **$5 亿** | 待核（追加额未必落定） |
| **Field AI** | 户外/工业机器人大脑 | NVentures 参投（两轮，Bezos / Khosla 同列） | 估值 **$20 亿**（2025-08）【文献】 |
| **Generalist AI** | 机器人基础模型 | NVentures 跟投（含 follow-on） | 估值 **$20 亿**（2026-06）【文献】 |
| **Bright Machines** | 智能制造/装配机器人 | C 轮 $1.26 亿（2024-06） | 【文献】 |
| **Nuro** | 自动驾驶 | 2025-08 轮 $2.03 亿 | 估值 $60 亿【文献】 |
| **Serve Robotics** | 配送机器人 | 早期投资 + 技术合作 | 待核（投资 vs 纯合作） |

> 注意一个**关键区分**：傅利叶 Fourier、Galbot 银河通用、Agility Robotics、Boston Dynamics 这些名字，
> 在公开材料里多是**技术合作/采用 Isaac/Jetson**（见 GR00T 档案的客户名单），**未必有 NVentures 直接股权**——
> 把「用它算力」和「拿它投资」混为一谈是常见错误。**待核**：Agility C 轮、傅利叶、Galbot 是否有 NVIDIA 直接出资。
> 但这恰恰说明问题：**投不投，它都已经在你机器里了。**

---

## 三、下注逻辑：战略投资 = 绑生态卖算力 【核心 · 推演为主】
把 NVIDIA 的投资动作放进它的整盘棋，逻辑冷得发亮：

1. **它不在乎单笔回报。** Figure 估值从 $26 亿冲到 $390 亿，账面是赚了——但这从来不是重点。一笔具身投资对市值 3 万亿+的 NVIDIA 是零头；它要的不是这家公司的股票涨，是**这家公司一辈子在 NVIDIA 的硅片上训练和部署**。
2. **投资 = 给「算力税」预付定金。** 每投一家，就多一家被锁进「训练用 DGX、仿真用 Omniverse、上车用 Jetson」的闭环。Skild 是最锋利的例子：它自研大脑、是 GR00T 的潜在竞品，**却用 Isaac Lab 做仿真、用 Cosmos 做数据增强**——NVIDIA 一边投钱、一边把竞品也变成自己的算力客户。
3. **「都用 Isaac/Jetson」才是 KPI。** 普通 CVC 的 KPI 是 IRR；NVIDIA 的隐性 KPI 是**生态渗透率**。它要的不是「我投中了下一个独角兽」，而是「这个赛道无论谁跑出来，铲子都是我卖的」。投资只是把这个结论提前锁定。

> 这就是「投资+算力双绑」：股权把你绑进生态，生态把你绑上硬件。**钱只是诱饵，芯片才是钩子。**

---

## 四、独特性：三重身份的利益与张力 【推演】
NVIDIA 在具身赛道里是个**史无前例的三位一体**，没有第二家公司同时占满这三个位置：

| 身份 | 角色 | 它从你身上拿什么 |
|---|---|---|
| 🔧 **供应商** | 卖 GPU / Jetson / DGX | 算力收入（真实现金流） |
| 💰 **投资人** | NVentures 股权 | 生态绑定 + 信息 + 账面回报 |
| 🧠 **大脑提供方** | 开源 GR00T / Isaac / Cosmos | 标准话语权 + 让你习惯它的栈 |

**张力就藏在这三顶帽子的夹缝里**：
- **它既是你的卖家，又是你的股东，又是你的（潜在）竞争对手**（GR00T 和它投的 Skild、Field AI 的大脑直接竞争）。当 NVIDIA 的利益和被投公司的利益分叉时，它会站哪边？答案大概率是**站芯片**——因为芯片是它唯一在乎的现金流。
- **投了 Figure，又开源 GR00T 抢 Figure 自研大脑的活；投了 Skild，又让 GR00T 去抢 Skild 的市场。** 这种「既当裁判又当运动员还卖球鞋」的结构，是普通 VC 永远不会有的利益冲突。
- **被投公司心知肚明**：拿 NVIDIA 的钱=请进一个能看你底牌、又在隔壁造你竞品的股东。但赛道上谁离得开它的算力？只能捏着鼻子收钱。

---

## 五、拨开迷雾：最大赢家，也是全行业的单点依赖
> **整张具身地图上，NVIDIA 是唯一稳赚、且无论谁赢都赢的玩家——但代价是，整个行业被它单点锁喉。**

- **投的、没投的，都依赖它。** 它投了 Figure、Skild、Field AI；它没（直接）投的傅利叶、Galbot、智元、宇树，照样在买它的 Jetson、跑它的 Isaac。**投资名单只是冰山一角，算力依赖才是水下的整座山。** 连自研大脑、想把命门攥在自己手里的玩家（Tesla、Figure、PI、智元），训练还是绕不开它的 GPU。
- **它最大的杠杆不是钱，是「没有替代品」。** 一笔具身投资对它无足轻重，但它的算力对每一家被投/未投公司都是命脉。这种**极度不对称**，让它的每一笔投资都自带威慑——不是「给你钱求你成功」，而是「锦上添花，反正你也跑不出我的手掌心」。
- **真正的风险是「循环融资」的质疑。** 2025 年起，做空者和分析师反复质疑 NVIDIA 在 AI 领域（OpenAI、xAI 等）「左手投钱、右手收回成芯片订单」是**vendor financing / round-tripping**（变相自买自卖、虚增需求）。NVIDIA 公开否认。这套质疑同样适用于具身：**当你投的公司用你的钱买你的芯片，这笔收入到底是真实需求，还是自己点燃的烟火？**【文献：质疑存在；定性待核】
- **冷静信号**：被投公司估值齐刷刷暴涨（Figure $390 亿、Skild $140 亿），但**这些估值靠的是融资轮定价，不是利润**——和 NVIDIA 自己当期就靠卖铲子赚钱形成刺眼对比。**它在用真金白银的硬件利润，去买一堆还在烧钱的故事的股权——而这些故事烧的钱，又回流成它的硬件订单。** 闭环漂亮得让人不安。

> 一句话收口：**别家在赌「机器人会不会成」，NVIDIA 在赌「无论机器人成不成，铲子和算力税都归我」——而它已经赢了。**

---

## 六、信源
- 【NVentures 概况/节奏】TechCrunch《Nvidia's AI empire: a look at its top startup investments》（2026-01-02）；PitchBook《Q&A: Sid Siddeek》；Global Venturing（NVentures/Siddeek 访谈）
- 【NVentures 成立/结构/负责人】Global Venturing；Private Equity International（NVentures 机构页）；Crunchbase（Mohamed Siddeek）
- 【Figure】TechCrunch（2026-01-02）；Sacra（Figure AI，C 轮 $390 亿，2025-09）
- 【Skild AI】TechCrunch（2025-12-08）；Built In（2025-12-09）；Skild 官网 Series C 公告；SiliconANGLE（2025-12-08）
- 【Field AI】CNBC《Nvidia, Bill Gates-backed Field AI hits $2B》（2025-08-20）
- 【Generalist AI】Bloomberg（2026-06-04，估值 $20 亿）
- 【Wayve / Bright Machines / Nuro】TechCrunch（2026-01-02）；CNBC（European startups Nvidia backed，2026-01-26）
- 【循环融资质疑】Yahoo Finance《Nvidia says it isn't using 'circular financing' schemes》；Advisor Perspectives / TechPolicy.Press（vendor financing 辩论，2025-11）
- 【三重身份/算力依赖/客户名单】交叉引用本库 `02-companies/nvidia-gr00t.md`（GR00T 开源、Jetson/DGX 卖铲子、全行业采用名单）
- 行业全景：`01-landscape/README.md`；资本章索引：`10-capital/README.md`
- 待核项见正文标注（Wayve 追加 $5 亿是否落定；Agility/傅利叶/Galbot 是否有 NVentures 直接股权；Serve 投资 vs 纯合作；循环融资定性）
