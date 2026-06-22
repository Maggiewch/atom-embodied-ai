# Gemini Robotics（Google DeepMind） · 档案

> 巨头亲自下场做「具身大脑」。Google DeepMind 把最强的 Gemini 底座加上「动作」这个输出模态，
> 做一个**跨本体、跨任务的通用 VLA**——自己不造一台机器人，却想给所有人的机器人当大脑。
> 这不是创业公司，是 Alphabet 体内的一个战略部门。

## 速览卡
| 项 | 内容 |
|---|---|
| 出品方 / 总部 | Google DeepMind（Alphabet 旗下）· 英国伦敦 / 美国山景城 |
| 负责人 | Carolina Parada（DeepMind 机器人主管）；母体由 Demis Hassabis 掌舵 |
| 类型 | 🧠 大脑 / VLA（通用大脑跨本体，不做本体） |
| 最新融资 | **无独立融资——含于 Alphabet**，靠母公司输血算力/数据/资金 |
| 累计融资 | 不适用（巨头内部部门） |
| 核心产品 | Gemini Robotics 1.5（VLA）、Gemini Robotics-ER 1.6（具身推理）、Gemini Robotics On-Device（端侧）、Gemini Robotics SDK |
| 血脉 | RT-1 → RT-2 → RT-X / Open X-Embodiment → SayCan / PaLM-E → AutoRT → Gemini Robotics |
| 一句话状态 | **卖平台 + 卖能力**：ER 已对全体开发者开放 API，VLA 动作模型仍限合作伙伴；商业模式=战略与生态，非卖货 |

## 1. 创始团队与基因（DeepMind 的机器人基因与 RT 系列血脉）
这不是一支「学术天团创业」，而是**全球最强 AI 实验室的机器人血统**。Gemini Robotics 是
DeepMind 多年机器人研究的总收口，血脉一脉相承：

- **RT-1（2022-12）**：13 台机器人在办公室厨房采集 13 万条演示，证明 Transformer 策略能从真机数据学控制。
- **RT-2（2023-07）**：首个把互联网级视觉-语言知识与真机数据联合训练的 **VLA**——机器人第一次能「推理」没见过的物体。
- **RT-X / Open X-Embodiment（2023 末）**：联合全球实验室建当时最大的开放机器人数据集，**跨本体**训练 RT-X。这是「一个模型管多种身体」叙事的起点。
- **SayCan / PaLM-E / AutoRT**：用大模型做高层规划（SayCan）、把视觉接进语言模型（PaLM-E）、用基础模型自动编排机群采数据（AutoRT，7 个月最多同时调度 20 台、累计 52 台机器人）。

基因 = **顶级 research + Gemini 底座 + Alphabet 的钱与算力**。打法和 Physical Intelligence 同样押
「具身 scaling law」，但底牌完全不同：PI 要从零融资、组建团队、攒数据；DeepMind 直接把
**全世界最强的多模态基础模型（Gemini）当地基**，往上加「动作」这一层。这是巨头才打得起的牌。

## 2. 技术路线
- **不做本体**：刻意只做「大脑层」，让模型横跨多种第三方硬件（双臂 ALOHA、Franka、人形 Apollo、Spot 四足）。
  这与 Tesla/Figure 的全栈自研对立，与 Physical Intelligence、NVIDIA GR00T 同属「通用大脑跨本体」阵营。
- **双模型架构**：
  - **Gemini Robotics 1.5（VLA）**：把视觉+指令转成电机指令，**「先思考再行动」**——能在自然语言里生成一段内部推理链，把「分拣脏衣服」这类多步任务拆成层级。
  - **Gemini Robotics-ER 1.6（ER=具身推理）**：一个 VLM，负责**高层规划、空间理解、调用 Google 搜索等数字工具、判断任务进度**。两者协同：ER 当「指挥官」做策略，VLA 当「执行者」做动作。
- **Motion Transfer（跨本体迁移）**：核心技术杀招。只在 ALOHA 上学过「开抽屉」，Apollo 人形可**零样本**直接做同一动作——技能在不同身体间迁移，这是「通用大脑跨本体」叙事最关键的一块实证。
- **端侧版（On-Device）**：可**本地运行**、低延迟、弱网/断网可用，且**仅需 50–100 条演示即可微调**到新任务——首个「可微调的 VLA」。
- **数据策略**：继承 RT-X / Open X-Embodiment 的跨本体数据混合 + Gemini 的互联网级知识迁移 + AutoRT 自采，试图绕开「机器人没有互联网级数据」这一全行业瓶颈。

## 3. 产品与里程碑（时间线）
- 2022-12 · RT-1 发布
- 2023-07 · RT-2 发布（首个真正意义的 VLA）
- 2023 末 · Open X-Embodiment 数据集 + RT-X（跨本体）
- **2025-03-12** · 发布 **Gemini Robotics（VLA）** 与 **Gemini Robotics-ER（具身推理）**，基于 Gemini 2.0
- **2025-06** · 发布 **Gemini Robotics On-Device**（首个本地运行、可微调的 VLA）+ **Gemini Robotics SDK**（含 trusted tester 计划）
- **2025-09-25** · 发布 **Gemini Robotics 1.5 + ER 1.5**；ER 1.5 **首次对全体开发者经 Gemini API / AI Studio 开放**（家族首个广泛可用模型）；引入「思考」与 Motion Transfer
- **2026-04-14** · 发布 **Gemini Robotics-ER 1.6**：更强空间推理与多视角理解，新增「读仪表」能力（与 Boston Dynamics 协作发现），经 Gemini API / AI Studio 开放

## 4. 商业模式与客户（巨头部门：商业模式=战略/生态，非创业卖货）
这是 Alphabet 体内的部门，**不靠卖产品养活自己**，逻辑完全不同于创业公司：

- **战略意图**：把 Gemini 的「通用智能」延伸到物理世界，**抢占具身 AI 的「安卓位」**——让全行业的机器人都跑 Gemini 大脑、调 Gemini API，最终把流量与数据沉回 Google 云与模型生态。
- **怎么变现（生态逻辑）**：
  - ER 模型经 **Gemini API 收费**，长在已有的 Cloud / AI Studio 货币化管道上；
  - VLA 动作模型 + SDK 走 **trusted tester / 合作伙伴** 路线，绑定本体厂；
  - 真正的回报不在「机器人收入」，而在**守住基础模型的统治地位**、不让 PI / NVIDIA 在物理世界另起炉灶。
- **客户 = 本体厂与开发者**：合作/测试名单含 **Apptronik（最深，人形 Apollo）、Boston Dynamics（Spot 工业巡检）、Agility、PAL、Universal Robots、Rainbow Robotics** 等 60+ 家。注意：Apptronik 既是合作方，**Google 也直接投资了它**（2026-02 估值 $50 亿那轮 Google 与 B Capital 联合领投），是「投资 + 技术」双绑定。

## 5. 落地案例
| 案例 | 场景 | 自主程度 | 说明 |
|---|---|---|---|
| Boston Dynamics Spot 读仪表 | 工业巡检 | 半自主（已商用集成） | ER 1.6 接入 Spot 的 Orbit / AIVI 巡检软件，自主读压力表、温度计、数显——**家族最接近真实工业部署的落地** |
| Apptronik Apollo 跨本体技能 | 人形操作 | 自主（研究演示） | Motion Transfer：ALOHA 上学的技能零样本迁到 Apollo，标志性 Demo |
| On-Device 微调 7 类任务 | 备餐/玩牌等 | 自主（研究演示） | 50–100 条演示微调，平均成功率 >60%，胜过当时最佳端侧 VLA |
| 分拣脏衣服 / 多步家务 | 家务 | 自主（研究演示） | 「先思考再行动」的层级推理 Demo，仍为研究环境 |

## 6. 融资与资本（含于 Alphabet，非独立融资）
| 轮次 | 日期 | 金额 | 估值 | 说明 |
|---|---|---|---|---|
| — | — | **不适用** | **含于 Alphabet 市值** | DeepMind 为 Alphabet 全资子部门，机器人线无独立融资 |

**战略意图拆解**：Alphabet 不缺钱、不缺算力、不缺数据，缺的是**把通用 AI 落进物理世界的入口**。
Gemini Robotics 本质是一次**防御性 + 进攻性兼具的卡位**：进攻，是想让具身 AI 成为 Gemini
生态的延伸；防御，是绝不能让 Physical Intelligence、NVIDIA GR00T 在物理世界建起一个独立于
Google 的「安卓」。**它不需要靠机器人赚钱，只需要不输掉这场底座之争。** 这正是它和所有
创业系大脑公司最根本的差别——后者必须用估值续命，它只需要母公司点头。

## 7. 拨开迷雾（争议与真实进度）
**标签：🧠巨头部门 / 平台。** 这是它一切优劣的根源。

- **优势（巨头才有的）**：
  - **底座碾压**：直接站在 Gemini 这个最强多模态模型上，世界知识、推理、工具调用是「白送」的，创业公司要从零追。
  - **数据与算力**：RT-X / Open X-Embodiment / AutoRT 攒下的跨本体数据 + Alphabet 的无限算力，是 PI 暂时望尘莫及的弹药。
  - **不烧自己的钱**：没有估值焦虑、没有现金流死线，可以慢慢做对的事。
- **劣势（巨头的通病）**：
  - **无自有本体**：和 PI 一样，大脑能不能跨硬件泛化，命门握在别人的身体里——只是它靠深绑 Apptronik、Boston Dynamics 来对冲。
  - **产品化与组织惯性**：DeepMind 是研究机构，不是产品公司。从「能读仪表的 Demo」到「天天可靠巡检的产品」，巨头的官僚与节奏未必比创业公司快。Google 此前 Everyday Robots 被关停，就是前车之鉴。
  - **开放度暧昧**：ER 模型已开放 API，但**真正控制动作的 VLA 仍锁在 trusted tester 里**——叙事是「平台」，实操更像「精选合作」。比起 NVIDIA GR00T 的开源「安卓」，它更封闭。
- **路线之争**：「通用大脑跨本体」内部也在三家分高下——
  - **vs Physical Intelligence**：PI 是纯创业、纯专注、人才豪华但弹药有限；DeepMind 弹药无限但要分心。比的是「专注 vs 资源」。
  - **vs NVIDIA GR00T**：GR00T 走**开源 + 卖铲子（GPU/Jetson）**，把「安卓」彻底开放；Gemini Robotics 更封闭、更想自己当那个安卓。比的是「开放生态 vs 封闭最强」。
  - 共同的天花板仍是**「机器人没有互联网级数据」**——Motion Transfer 是漂亮的进展，但跨本体泛化离「换台机器人就能即插即用」还很远。
- **Demo 与产品的鸿沟**：除 Boston Dynamics 巡检这类窄场景已落地，绝大多数能力仍是研究演示。**研究演示≠稳定产品**，这条铁律对巨头同样成立。

## 8. 信源
- [2025-03-12] Introducing Gemini Robotics and Gemini Robotics-ER — Google DeepMind blog（deepmind.google）
- [2025-06] Gemini Robotics On-Device brings AI to local robotic devices — Google DeepMind blog
- [2025-07] Google DeepMind Announces Robotics Foundation Model Gemini Robotics On-Device — InfoQ
- [2025-09-25] Gemini Robotics 1.5 brings AI agents into the physical world — Google DeepMind blog
- [2025-10] Gemini Robotics 1.5 Tech Report（arxiv 2510.03342，含 Motion Transfer）
- [2026-02-11] Apptronik raises $520M at $5B valuation（Google 参投）— CNBC / The Robot Report
- [2026-04-14] Gemini Robotics-ER 1.6 发布 — Google DeepMind blog / SiliconANGLE
- [2026-04-15] Boston Dynamics integrates Gemini Robotics into Spot inspection — Robotics & Automation News
- 模型主页 deepmind.google/models/gemini-robotics/、Gemini Robotics SDK（github.com/google-deepmind/gemini-robotics-sdk）
- 行业全景：`01-landscape/README.md`（本档案对应表中「Google DeepMind · 跨本体 · 巨头部门」一格）
