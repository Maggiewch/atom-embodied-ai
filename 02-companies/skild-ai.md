# Skild AI · 档案

> 与 Physical Intelligence 正面对决的另一支「机器人界 OpenAI」。只做**机器人基础模型**、不绑本体——
> 押注一个号称「全身通用（omni-bodied）」的 Skild Brain，让同一个大脑能接管它**从没见过的**机器人。
> 创始团队来自 CMU，软银是它最大的金主与赌徒。

## 速览卡
| 项 | 内容 |
|---|---|
| 成立 / 总部 | 2023 · 美国匹兹堡（Pittsburgh） |
| 创始人 | Deepak Pathak（CEO）、Abhinav Gupta（President）——均前 CMU 教授、前 Meta FAIR；二人引用量合计 7.9 万+ |
| 类型 | 🧠 大脑 / VLA（robot-agnostic 通用大脑跨本体） |
| 最新融资 | 2026-01 · Series C **$14 亿**，估值 **>$140 亿**（软银领投） |
| 累计融资 | **>$18 亿**（A $3 亿 + B $1.35 亿 + C $14 亿） |
| 核心产品 | **Skild Brain**——「行业首个统一机器人基础模型」，跨四足/人形/桌面臂/移动操作 |
| 员工规模 | 待核（成立两年余，扩张中） |
| 一句话状态 | **卖故事 + 卖科研突破，但开始抢落地**：自述 2025 年营收从 0 到约 $30M，估值/营收仍严重脱钩 |

## 1. 创始团队与基因
又一支**CMU 学术天团**。Deepak Pathak（CEO）以自监督机器人学习、好奇心驱动智能体（curiosity-driven
agents）著称；Abhinav Gupta（President）专攻自适应机器人学习。两人都是前 CMU 教授、前 Meta FAIR 研究员，
学术分量极重（自述 h-index 150+、引用量合计 7.9 万+）。

基因 = **顶级 research + 强资本运作**，与 Physical Intelligence 几乎是同一个模子刻出来的——
都是学术明星、都不造身体、都赌「一个大脑统治所有机器人」。区别在于卡位的细微叙事：PI 主打「跨本体泛化」，
Skild 把口号推到极致——**「omni-bodied」，连机器人的身体形态都可以是大脑没见过的**。这是更激进的科研押注，
也是更难兑现的承诺。

## 2. 技术路线
- **不做本体**：刻意做「大脑层」。Skild Brain 号称能控制四足、人形、桌面机械臂、移动操作平台，
  且**无需预先知道机器人的确切身体构型**——这正是 omni-bodied 叙事的核心卖点。
- **关键主张**：「零样本/少样本适配新硬件」。自述在匹兹堡复杂城市环境（公园、街道、消防梯、未见过的障碍）
  测试人形机器人，**数小时数据采集即达 60%–80% 任务完成度**，并对人为干扰/环境变化保持鲁棒。
- **路线之争**：与 Figure/Tesla 的「专用大脑绑自家本体」对立——Skild 赌「通用大脑像安卓一样横跨硬件」。
  与 NVIDIA GR00T、Gemini Robotics 同属「通用大脑跨本体」阵营。
- **数据策略**：真机 + 仿真 + 跨本体数据混合，试图把「机器人没有互联网级数据」这一全行业天花板做成自己的飞轮。
  与 HPE、NVIDIA、STN 合建专用「AI-factory」（私有高性能云），支撑持续训练、大规模仿真与低延迟推理。

## 3. 产品与里程碑（时间线）
- 2023 · 公司于匹兹堡成立
- 2024-07 · **Series A $3 亿，估值 $15 亿**（Lightspeed、Coatue、软银、Bezos Expeditions 领投；红杉、General Catalyst、Amazon、CMU 等跟投）
- 2025 · 发布/迭代 Skild Brain，跨多本体公开演示；**Series B $1.35 亿，估值 $45 亿**
- 2025 · 自述营收从 0 增至约 **$30M**（多客户，含安防、巡检、仓储、制造、数据中心、建筑等场景）
- 2025-12 · 传闻软银、NVIDIA 洽谈以 ~$140 亿估值注资
- 2026-01 · **Series C $14 亿，估值 >$140 亿**（软银领投，七个月内估值翻三倍）
- 2026-04 · **收购 Zebra Technologies 机器人自动化业务**（含 Fetch/Symmetry 编排平台资产）——从「纯大脑」跨入仓储自动化落地

## 4. 商业模式与客户
- **怎么赚钱**：模型驱动的自动化部署 + 企业落地。与 PI「几乎零收入」不同，Skild **高调宣称已有真实营收**
  （2025 从 0 到约 $30M），并把这作为对抗「大脑公司只会发视频」质疑的核心论据。
- **关键动作——收购 Zebra 机器人业务**：这是叙事的重大转向。Skild 借此宣称要做「仓储端到端全套自动化」：
  人形负责拣选、机器狗巡检、机械臂打包、AMR 搬运，再加一层编排层统一调度。**这意味着它正从「卖大脑」
  滑向「卖整套方案」**——既是抢落地的务实，也偏离了「纯软件大脑」的初心。
- **真实客户**：多数未披露。已公开的旗舰单是 **NVIDIA × Foxconn**——在德州休斯顿生产 NVIDIA Blackwell
  GPU 服务器的富士康工厂部署 Skild Brain（号称「首次公开大规模部署」）。NVIDIA 还在牵线 ABB、Universal Robots 的集成。

## 5. 落地案例
| 案例 | 场景 | 自主程度 | 说明 |
|---|---|---|---|
| NVIDIA × Foxconn（休斯顿） | GPU 服务器装配产线 | 自主（首次公开大规模部署） | 旗舰单；具体机型、任务细节、稳定性未公开，仍是「真实世界的首考」 |
| 匹兹堡城市环境人形测试 | 户外/复杂地形 | 自主（研究演示） | 数小时采集达 60%–80% 完成度、抗干扰，但属研究/演示环境 |
| 安防巡检 / 仓储 / 建筑 | 多行业 | 待核（多为试点） | 自述「全球多客户已部署」，但**客户名一律不披露**，规模与黏性难证 |
| Zebra/Fetch 仓储编排 | 仓储自动化 | 半自主（人机协同编排） | 收购而来，基于 Symmetry 平台协同机器人与穿戴设备工人 |

## 6. 融资与资本
| 轮次 | 日期 | 金额 | 估值 | 领投 / 关键投资人 |
|---|---|---|---|---|
| A | 2024-07 | $3 亿 | $15 亿 | Lightspeed、Coatue、软银、Bezos Expeditions（红杉、General Catalyst、Amazon、CMU 跟投） |
| B | 2025 | $1.35 亿 | $45 亿 | （Lightspeed、Felicis、Coatue、红杉等老股东加注） |
| C | 2026-01 | **$14 亿** | **>$140 亿** | **软银领投**；NVentures（NVIDIA）、Macquarie、Bezos Expeditions、1789 Capital、IQT 等参投；Samsung、LG、Schneider、CommonSpirit、Salesforce Ventures 战略入股 |

> 累计 >$18 亿。软银是贯穿三轮的主线金主——从 A 轮跟投到 C 轮领投，是这盘豪赌的核心庄家。

## 7. 拨开迷雾（争议与真实进度）
- **$140 亿估值 vs 极薄营收**：$30M 自述营收撑 $140 亿估值 = ~467 倍 PS，且营收口径（一次性集成？试点？
  收购并表？）未经审计、不透明。**这本质仍是「具身 scaling law 成立 + 团队能赢」的纯期权定价。**
- **与 Physical Intelligence 的正面对决**：两家几乎同源（CMU/学术天团、不造本体、做「通用机器人大脑」）。
  分野在于谁的泛化更真、谁先把「Demo→稳定产品」的鸿沟填上。Skild 的差异化是更激进的 omni-bodied 口号
  + 更早强调「我有营收」；PI 则更克制、更偏研究权威。**口号越大，证伪风险越高。**
- **软银豪赌的逻辑与风险**：软银的逻辑是「下一个平台级机会不能错过」——用一两轮天价锁定头部大脑公司，
  对标当年押 OpenAI/Arm 的打法。风险是：软银历史上重仓机器人（WeWork 式叙事、Pepper、波士顿动力转手）
  胜率并不高，七个月估值翻三倍本身就是泡沫信号。
- **数据飞轮是否真转起来**：omni-bodied 的前提是「跨本体数据能复利」。但机器人数据仍以真机采集为主、
  成本高、跨形态迁移效果待证。自建 AI-factory 是认真补课，但「飞轮转起来」目前更多是承诺而非实证。
- **收购 Zebra = 叙事漂移**：一家自称「只做大脑」的公司去买机器人硬件/编排业务，要么是「抢落地的务实」，
  要么是「纯大脑卖不动、被迫向下做整机方案」的信号。两种解读对估值含义截然相反——**这是最值得盯的拐点。**
- **打标签：卖故事 + 卖科研突破，叠加「卖落地姿态」**。相比 PI 的纯期权，Skild 多了一层「我已经在赚钱、
  在工厂里干活」的姿态——但客户名不披露、营收口径不清，这层姿态目前**更像营销而非可验证的商业护城河**。

## 8. 信源
- [2026-01-14] Robotics software maker Skild AI hits $14B valuation — TechCrunch
- [2026-01-14] Skild AI Raises $1.4B, Now Valued Over $14B — Business Wire / 官网 skild.ai/blogs/series-c
- [2026-01-14] Robotics Startup Skild Valued Above $14 Billion After SoftBank-Led Funding Round — Bloomberg
- [2026-01] Robotics Startup Skild AI Lands $1.4B, Tripling Valuation To $14B In Just 7 Months — Crunchbase News
- [2026-04-15] Skild AI Acquires Zebra Technologies' Robotics Automation Business — Zebra / Business Wire
- [2026] Skild faces real-world test of its robot brain in Nvidia, Foxconn factory deal — Technical.ly
- [2024-07-10] Skild AI grabs $300M to build foundation model for robotics — The Robot Report
- [2025-01] SoftBank to invest $500 million in robotics startup Skild AI — UMD CS（注：传闻金额，最终 B 轮披露为 $1.35 亿 / $45 亿估值，**待核**口径差异）
- 官网 skild.ai（Skild Brain 技术博客、Series C / Zebra 公告）
