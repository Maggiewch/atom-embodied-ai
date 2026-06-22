# NVIDIA Isaac GR00T · 档案

> 全场唯一稳赚钱的玩家——但赚钱的不是 GR00T。NVIDIA 把**开源的通用机器人大脑（GR00T）**
> 当免费诱饵撒出去，真正收银的是底下的 **GPU / Jetson 芯片**。
> 它不造机器人、甚至不指望 GR00T 直接赚钱，只想成为整个具身行业的「安卓 + 卖铲人」：
> 你的机器人想聪明，先买我的算力。

## 速览卡
| 项 | 内容 |
|---|---|
| 出品方 / 总部 | NVIDIA（Isaac 机器人事业线 + GEAR / Research 实验室）· 美国圣克拉拉 |
| 负责人 | Jensen Huang 掌舵；机器人研究由 Jim Fan、Yuke Zhu 等领衔（GEAR Lab） |
| 类型 | 🧠 大脑 / VLA（开源通用大脑跨本体）+ 🔧 上游算力（GPU / Jetson） |
| 最新融资 | **无独立融资——含于 NVIDIA 市值**，机器人线是巨头内部战略投入 |
| 累计融资 | 不适用（含于 NVIDIA） |
| 核心产品 | Isaac GR00T N1.7（开源 VLA）、Isaac Sim / Isaac Lab（仿真）、Omniverse、Cosmos 世界基础模型、GR00T-Dreams（合成数据）、Jetson Thor（端侧芯片）、DGX（训练算力） |
| 血脉 | Project GR00T（2024-03 GTC）→ GR00T N1（2025-03 开源）→ N1.5 → N1.6 → **N1.7（2026-04）** |
| 一句话状态 | **卖铲子 + 做安卓**：GR00T 模型开源免费引流（战略亏损），真正变现靠 GPU/Jetson；商业现实=平台 |

## 1. 创始团队与基因（NVIDIA 的算力霸权与切入机器人的基因）
这不是创业公司，是**全球算力霸主的一次顺势卡位**。NVIDIA 的基因不是机器人，是**卖铲子**——
AI 浪潮里所有人淘金，它卖 GPU；具身浪潮起来，它要把同一套生意复制到物理世界。

- **算力霸权先行**：训练任何具身大模型都绕不开 NVIDIA 的 GPU/DGX，这是它天然的牌——
  别人押模型、押本体，它**两头都不押，只押「谁都要用我的算力」**。
- **Omniverse / Isaac 的多年积累**：Isaac 机器人平台、Isaac Sim 仿真、Omniverse 数字孪生
  早在大模型之前就在做，GR00T 是把这套老资产接上「具身大模型」叙事的总收口。
- **GEAR Lab 的研究班底**：Jim Fan、Yuke Zhu 领衔的 GEAR（Generalist Embodied Agent Research）
  实验室，是 GR00T 的算法引擎——这一层让 NVIDIA 不只卖硬件，也有顶级具身研究话语权。
- **Jensen 的战略判断**：把具身定义为 NVIDIA 的「下一个万亿市场」，喊出**「三台计算机」**
  战略——**DGX 训练、Omniverse 仿真、Jetson 运行**——一句话把整条价值链都圈进自己的硬件里。

基因 = **算力垄断 + 仿真老本 + 顶级研究 + 「卖铲子」本能**。和 Physical Intelligence / Gemini Robotics
押「具身 scaling law」不同，NVIDIA 的底层算计更冷血：**不管哪条技术路线赢，只要这场仗要烧算力，
钱就流进我口袋。** GR00T 本身赚不赚钱不重要，重要的是它把全行业都拉到 NVIDIA 的硬件上。

## 2. 技术路线
- **不做本体，也不只做大脑——做整条「具身基础设施」**：这是它与所有人最大的不同。
  GR00T 模型只是引流入口，真正的产品是「训练—仿真—部署」全栈算力栈。
- **GR00T N1.7（开源 VLA）的双系统架构**（即 **Action Cascade** 双系统）：
  - **System 2（慢思考 / VLM）**：**Cosmos-Reason2-2B** 主干（Qwen3-VL 架构），处理图像与语言指令，
    做任务拆解与多步推理——取代了 N1.6 的 Eagle 主干。
  - **System 1（快反应 / 运控）**：**32 层 Diffusion Transformer**，把高层意图实时转成连续电机指令。
  - 全模型 **3B 参数**，可在 Jetson 端侧跑，刻意做小以便上车真机。
- **EgoScale 预训练**：在 **~20,854 小时第一人称（egocentric）人类视频**上预训练，覆盖 20+ 任务类别。
  关键发现：人类视频从 1k 小时加到 20k 小时，灵巧操作的平均任务完成率**翻倍以上**——
  这是 NVIDIA 对「机器人没有互联网级数据」这一全行业瓶颈给出的答案：**用海量人类视频代偿**。
- **跨本体（cross-embodiment）**：一套权重适配多种身体——验证平台含 Unitree G1、AgiBot Genie 1、
  双臂 YAM 等；动作用**相对末端执行器（relative EEF）表征**，让人类视频里学的操作先验能直接迁到机器人。
- **数据飞轮 = 仿真 + 合成**：靠 **Isaac Sim / Isaac Lab** GPU 加速仿真大规模采数据；
  **GR00T-Dreams** 用 **Cosmos** 世界基础模型（Cosmos Predict + Cosmos-Reason）把少量真机数据
  「做梦」扩成合成轨迹——号称生成 N1.5 训练数据只用 **36 小时**，抵得上人工采集近三个月。
- **Cosmos 世界基础模型**：物理 AI 的「世界模型」底座，既喂 GR00T-Dreams 合成数据，也是 N1.7 的 VLM 主干来源。

## 3. 产品与里程碑（时间线）
- **2024-03 · GTC** 首次发布 **Project GR00T**（人形通用基础模型计划）+ 公布 **Jetson Thor** 芯片计划
- **2025-01 · CES** 发布 **Cosmos** 世界基础模型平台（物理 AI 的世界模型底座）
- **2025-03-18 · GTC** 开源 **Isaac GR00T N1**——号称「全球首个开源人形机器人基础模型」，双系统架构，跨本体
- **2025-05** 发布 **GR00T N1.5** + **GR00T-Dreams**（用 Cosmos 世界模型生成合成轨迹数据）
- **2025-08** **Jetson Thor 正式开卖**：Jetson AGX Thor 开发套件 **$3,499** 起；T5000 模组量产出货（Blackwell 架构，最高 2070 FP4 TFLOPS、128GB）
- **2025（下半年）** 发布 **GR00T N1.6**：换用内部 Cosmos-2B VLM 变体，DiT 加倍至 32 层
- **2026-04-17** 发布 **GR00T N1.7**：**Cosmos-Reason2-2B** 主干、**3B 参数**、**EgoScale ~20,854 小时**人类视频预训练、Action Cascade 双系统；**商用授权**，早期访问（Hugging Face / GitHub）
- **2026-06** 推出 **GR00T-H-N1.7**（面向手术机器人的商用基础模型分支）；公布 **Isaac GR00T 学术参考人形机器人**（Unitree H2 Plus + Jetson Thor）

## 4. 商业模式与客户（关键：开源 GR00T 是「卖铲子」的战略亏损引流，真正赚钱的是 GPU/Jetson）
这是全行业最反常识、也最值得拆穿的商业模式：**它故意让自己的「大脑」不赚钱。**

- **GR00T 模型 = 战略亏损引流品**：开源、免费、商用授权放开，挂在 Hugging Face / GitHub 上随便下。
  NVIDIA **根本不靠卖 GR00T 赚钱**——它要的是让全行业的开发者都习惯用 GR00T、用 Isaac、用 Cosmos。
- **真正的收银台 = GPU / Jetson**：模型免费，但**训练要 DGX、仿真要 Omniverse GPU、上车要 Jetson Thor**。
  你越用 GR00T，就越被绑死在 NVIDIA 的硅片上。开发者拿走免费模型，却必须买 NVIDIA 芯片才能训练和部署——
  **软件生态是漏斗，硬件销售才是变现。** 这是教科书级的「卖铲子」：淘金的人赚不赚不知道，卖铲子的稳赚。
- **「安卓」打法拆解**：NVIDIA 明确把目标说成「成为通用机器人的默认平台，就像安卓之于智能手机」。
  逻辑完全照搬安卓——**开源、免费、人人可改，用生态规模换底层垄断**。但安卓底下是谷歌的广告/服务，
  GR00T 底下是 NVIDIA 的芯片。它不靠操作系统收钱，靠「跑这个系统必须买我的处理器」收钱。
- **客户 = 几乎全行业的本体厂与开发者**：公开采用 Isaac/GR00T/Jetson 的名单含
  **Boston Dynamics、Agility、傅利叶 Fourier、Galbot 银河通用、NEURA、XPENG 小鹏、Mentee、Foxlink、
  Skild AI、Unitree、AgiBot 智元** 等——横跨中美、横跨本体与大脑阵营。
  注意：**连它的竞争对手（Skild、智元这些自研大脑的）也在用它的算力**——这才是「卖铲子」的恐怖之处。

## 5. 落地案例
| 案例 | 场景 | 自主程度 | 说明 |
|---|---|---|---|
| Jetson Thor 上车量产 | 端侧算力 | 真实商用（已出货） | $3,499 开发套件 + T5000 模组量产，是 NVIDIA 在机器人最**真实的现金流**——卖芯片，不卖故事 |
| Isaac Sim / Isaac Lab 仿真训练 | 仿真采数据 | 真实商用（平台） | 全行业用其 GPU 加速仿真，GR00T-Dreams 36 小时合成抵三个月人工 |
| GR00T N1.7 跨本体技能 | 人形操作 | 自主（研究/早期商用） | Unitree G1、AgiBot Genie 1、双臂 YAM 上验证；EgoScale 把人类视频先验迁到真机 |
| GR00T-H-N1.7 手术机器人 | 医疗 | 自主（早期商用授权） | 面向手术机器人的商用分支，从通用走向垂直 |
| 学术参考人形机器人 | 科研 | 演示 / 参考设计 | Unitree H2 Plus + Jetson Thor + GR00T 开源栈，做行业「公版」拉新 |

## 6. 融资与资本（含于 NVIDIA 市值，非独立融资）
| 轮次 | 日期 | 金额 | 估值 | 说明 |
|---|---|---|---|---|
| — | — | **不适用** | **含于 NVIDIA 市值** | Isaac/GR00T 为 NVIDIA 内部战略投入，机器人线无独立融资 |

**战略意图拆解**：NVIDIA 不缺钱、不缺算力、不缺研究——它缺的是**把「下一个万亿市场」提前圈进自己硬件**。
GR00T 的开源不是慈善，是一笔**用模型亏损换硬件垄断**的精算：把全行业的具身工作流（训练/仿真/部署）
统统标准化在 NVIDIA 的栈上，让任何路线之争的赢家，最终都得给 NVIDIA 交「算力税」。
**它不需要靠 GR00T 赚钱，只需要确保这场仗无论谁赢，铲子都是它卖的。** 这是它与所有创业系大脑、
甚至与 Gemini Robotics 最根本的差别——后者要赢「大脑之争」，NVIDIA 只要赢「**谁都得用我的算力**」。

## 7. 拨开迷雾（争议与真实进度）
**标签：🔧卖铲子 / 🧠平台（开源安卓）。** 这是理解 NVIDIA 一切动作的钥匙。

- **全场唯一稳赚的玩家——但赚钱的不是 GR00T**：
  这是最该说穿的一句。整张具身地图上，纯人形公司无一确认净利润、大脑公司靠融资续命，
  **只有 NVIDIA 当期就赚钱**——靠 GPU/Jetson。但**GR00T 本身是引流亏损品**，
  把「GR00T 火了」当成「NVIDIA 在机器人赚钱了」是彻底看错——它赚的是卖给所有人的铲子钱。
- **「安卓」野心 vs 现实**：
  - 野心：开源 + 跨本体 + 全行业采用，剧本是安卓。
  - 现实的拷问是**真实采用度**——本体厂到底是把 GR00T 当**主力大脑**，还是只当**起步脚手架**？
    迹象偏后者：Tesla、Figure、智元、Physical Intelligence 这些有钱有人的玩家**都自研大脑**，
    把命门攥在自己手里；GR00T 更像中小厂、学术界、起步阶段的「免费起跑器」。
    安卓真正的统治力来自「连大厂也只能用安卓」，**GR00T 还远没到那个地步**——大厂宁可自研也不肯把大脑交出去。
  - 但**这恰恰不影响 NVIDIA 赚钱**：自研大脑的玩家照样得买它的 GPU 训练。安卓没统治大脑，铲子已经卖爆了。
- **三方路线之争（开源安卓 vs 封闭最强 vs 专注）**：
  - **vs Physical Intelligence**：PI 纯创业、纯专注、押单一最强通用大脑、烧融资；NVIDIA 不押单一模型，押「全都来用我的栈」。比的是「专注做最强大脑 vs 做谁都离不开的底座」。
  - **vs Gemini Robotics**：Gemini 更**封闭**、想自己当那个安卓、靠 Gemini API 变现；NVIDIA 彻底**开源**、不想当大脑霸主、靠卖硬件变现。比的是「封闭最强大脑 vs 开放卖铲子」——**两家都想当安卓，但一个收 API 费、一个收芯片费**。
  - 共同天花板仍是**「机器人没有互联网级数据」**——EgoScale 用人类视频代偿是漂亮解法，但人类第一人称视频里没有「机器人的本体感觉与失败数据」，跨本体即插即用仍是远景。
- **Demo / 模型与产品的鸿沟**：GR00T N1.7 的跨本体技能仍以研究与早期商用为主；
  真正已是稳定现金流的，是 **Jetson 芯片和 Isaac 仿真平台**，不是那个开源大脑。
  **研究演示≠稳定产品**这条铁律对 NVIDIA 同样成立——只不过它的现金流早就由卖铲子兜底，输不掉。

## 8. 信源
- [2024-03-18] NVIDIA Announces Project GR00T Foundation Model + Isaac Platform Update — NVIDIA Newsroom（nvidianews.nvidia.com）
- [2025-01] NVIDIA Cosmos World Foundation Models 发布（CES）— NVIDIA Developer Forums
- [2025-03-18] NVIDIA Announces Isaac GR00T N1 — World's First Open Humanoid Robot Foundation Model — NVIDIA Newsroom / research.nvidia.com
- [2025-05-20] NVIDIA reveals Isaac GR00T N1.5 + GR00T-Dreams — The Tech Portal / Hackster.io / NVIDIA 技术博客（Cosmos Predict-2 + Cosmos-Reason1，36 小时合成数据）
- [2025-08] NVIDIA Blackwell-Powered Jetson Thor Now Available（$3,499 开发套件；T5000 量产）— NVIDIA Newsroom / CNX Software / Hackster.io
- [2025] Building Generalist Humanoid Capabilities with Isaac GR00T N1.6（Cosmos-2B VLM、32 层 DiT）— NVIDIA Technical Blog / research.nvidia.com/labs/gear/gr00t-n1_6
- [2026-01-05] Nvidia wants to be the Android of generalist robotics — TechCrunch（「安卓」定位、卖铲子变现、Jetson T4000、200 万开发者 × Hugging Face 1300 万）
- [2026-04-17] NVIDIA Isaac GR00T N1.7: Open Reasoning VLA Model（3B 参数、Cosmos-Reason2-2B、EgoScale 20,854 小时、Action Cascade）— Hugging Face blog / GitHub NVIDIA/Isaac-GR00T
- [2026-06-17] Surgical Robotics: NVIDIA GR00T-H-N1.7 Arrives — TechTimes
- [2026] NVIDIA Announces Isaac GR00T Reference Humanoid Robot for Academic Research（Unitree H2 Plus + Jetson Thor）— NVIDIA Newsroom / investor.nvidia.com
- 平台主页 developer.nvidia.com/isaac/gr00t；Jetson Thor 主页 nvidia.com/.../jetson-thor
- 行业全景：`01-landscape/README.md`（本档案对应表中「NVIDIA (Isaac GR00T) · 跨本体 · 平台(安卓)」一格）
- 待核项见正文标注
