# Apptronik · 档案

> 美国人形本体头部玩家，德州奥斯汀出身、源自 UT Austin 学术血统。
> 核心打法是「身体自造 + 大脑外采（Google Gemini）」——执行器、本体 Apollo 全栈自研，
> 但智能层不自己烧，直接绑 Google DeepMind 的 Gemini Robotics。
> 是「本体厂务实路线」的最典型样本，也最考验「把命门交给别人的大脑」这件事到底行不行。

## 速览卡
| 项 | 内容 |
|---|---|
| 成立 / 总部 | 2016 · 美国德州 Austin（UT Austin Human Centered Robotics Lab 孵化） |
| 创始人 | Jeff Cardenas（CEO）、Nicholas Paine（CTO）等；学术导师 Luis Sentis（UT 教授） |
| 类型 | 🦾 本体 OEM（身体自造，大脑外采 Gemini） |
| 最新融资 | Series A 扩展轮，2026-02，$5.2 亿，**投后估值 ≈$53 亿**，B Capital / Google 联合领投 |
| 累计融资 | Series A 累计 >$9.35 亿（总融资接近 $10 亿） |
| 核心产品 | Apollo（人形本体）；自研模块化执行器；大脑用 Google Gemini Robotics |
| 主要投资人 | Google、Mercedes-Benz、B Capital、PEAK6、AT&T Ventures、John Deere、Qatar QIA |
| 一句话状态 | **试点 + 重资本**：估值/产能叙事跑在真实商业收入前面，但落地客户比多数同行实 |

## 1. 创始团队与基因
Apptronik 2016 年从 **UT Austin 的 Human Centered Robotics Lab** 拆分出来，核心人马是
Jeff Cardenas（CEO）、Nicholas Paine（CTO），加上学术导师 Luis Sentis 教授。基因里是
**硬核机器人学术 + 执行器工程**——Paine 的博士工作就是 UT 串联弹性执行器（SEA），
这奠定了 Apptronik「先把身体做扎实」的路线选择。

公司早期不靠 Demo 刷资本，而是接 **NASA Valkyrie 等政府/科研项目**练真本事，长期是「工程师文化」
而非「叙事文化」。这和 Figure 的「叙事驱动型连续创业者」是两种基因。

**关键转折：押注 Google。** Apptronik 没有走 Figure 那条「与 OpenAI 分手、全力自研大脑」的路，
反而反向操作——**主动把大脑外包给 Google DeepMind 的 Gemini Robotics**，并让 Google 成为
深度合作方兼投资人。这一步把它彻底钉在「身体自造 + 大脑外采」的象限里（交叉参见
`02-companies/gemini-robotics.md`：Apptronik 是 Gemini Robotics 合作名单里**最深的一家**，
也是 Google 直接投资的本体厂）。

## 2. 技术路线
- **本体 Apollo**：通用人形，定位「为工业/物流量产设计」。最新一代已在公司内部打磨约一年，
  量产化与可维护性是核心目标（具体身高/负载/续航参数公开口径不一，**待核**）。
- **自研模块化执行器**：这是 Apptronik 真正的护城河——从执行器层级自研，强调模块化、
  可量产、低成本。延续 UT 串联弹性执行器的学术血脉。**身体这一半是它最硬的资产。**
- **大脑 = Google Gemini Robotics（外采）**：不自研端到端 VLA。DeepMind 把
  **Gemini Robotics On-Device**（端侧、低延迟、可本地推理的变体）适配到 Apollo，
  让机器人无需云端往返即可推理。这是「通用大脑跨本体」叙事最关键的本体侧实证之一。
- **数据策略**：融资明确用于建「机器人训练与数据采集设施」——
  本体侧出数据、Google 侧出模型，是典型的「身体喂数据、大脑做泛化」分工。
  但这意味着**数据飞轮的核心环节（模型）不在自己手里**。

## 3. 产品与里程碑（时间线）
- 2016 · 公司成立（UT Austin HCRL 孵化）
- 2016–2022 · 接 NASA、政府/科研项目，迭代多代执行器与上身平台
- 2023-08 · 发布通用人形 **Apollo**
- 2024-03 · 与 **Mercedes-Benz** 签商业协议，Apollo 进入其制造工厂试点
- 2024 · 与 **GXO 物流** 启动多阶段研发合作
- 2025 · 完成初始 **$4.15 亿 Series A**（B Capital、Google 等参投）
- 2025 · 与 **Google DeepMind 深度合作**，Apollo 接入 Gemini Robotics
- **2026-02-11** · Series A 扩展 **$5.2 亿** 收官，累计 Series A >$9.35 亿，**投后估值 ≈$53 亿**
- 2026 · 计划推出**新一代机器人平台**（细节未公开），并继续深化 Gemini 合作

## 4. 商业模式与客户
- **怎么赚钱**：B 端试点部署（汽车制造、物流），目标走向 RaaS 或整机销售；
  瞄准汽车、电子制造、物流、饮料灌装、消费品包装等场景。
- **真实客户**：**Mercedes-Benz**（汽车制造，标杆）、**GXO**（物流，全球最大纯第三方合约物流商）、
  **Jabil**（合约制造）。客户名单含金量高，但**仍属试点/评估阶段，规模化付费订单未公开验证**。
- **大脑供应商即投资人**：Google 既投钱又供大脑，是「投资 + 技术」双绑定（见第 7 节）。

## 5. 落地案例
| 案例 | 场景 | 自主程度 | 说明 |
|---|---|---|---|
| Mercedes-Benz 工厂 | 汽车制造/搬运 | 半自主（试点） | 2024 起多任务、多工厂设计；汽车制造史上较显著的人形部署之一，但节拍/在役台数未公开 |
| GXO 物流 | 仓储/物流 | 试点 / 待证 | 2024 启动多阶段研发合作，处评估/试点阶段 |
| Jabil 合约制造 | 电子制造 | 试点 | 制造侧合作伙伴，规模有限 |
| Apollo × Gemini 跨本体技能 | 人形操作 | 自主（研究演示） | Gemini Robotics Motion Transfer 的标志性 Demo，仍为研究环境 |

## 6. 融资与资本
| 轮次 | 日期 | 金额 | 估值 | 领投/关键投资人 |
|---|---|---|---|---|
| Series A（初始） | 2025 | $4.15 亿 | ≈$17.5 亿（PitchBook，**待核**） | B Capital、Google 等 |
| Series A 扩展 | 2026-02-11 | $5.2 亿 | **≈$53 亿** | B Capital / Google 联合领投；Mercedes-Benz、PEAK6、AT&T Ventures、John Deere、Qatar QIA |

Series A 累计 >$9.35 亿，总融资接近 $10 亿。资金用途：Apollo 产能爬坡、扩大试点部署、
建训练/数据采集设施、研发新一代机器人。**估值一年内约翻 3 倍**，资本热度极高。

## 7. 拨开迷雾（争议与真实进度）
**标签：🦾本体（大脑外采 Gemini）。** 这是它一切优劣的根源。

- **「身体自造 + 大脑外采」：务实还是软肋？**
  - **务实面**：本体厂最该做的就是把执行器、运控、量产做扎实——Apptronik 在这一半上是真功夫，
    且不必和 Google/PI 这种巨头在「最强大脑」上硬碰硬烧钱。**专注身体、外采最强脑，是单点最优解。**
  - **软肋面**：轴 1 命门写得很清楚——**本体厂的命门是「大脑不在自己手里」**。一旦智能层成为
    差异化关键，Apptronik 的天花板就由 Gemini 决定；Google 哪天调整开放策略或优先级，它就被动。
    Figure 正是看穿这一点才与 OpenAI 分手转全栈——两家用相反的赌注，赌的是同一个问题。
- **Google 双绑定（投资人 + 大脑供应商）**：这是最微妙的结构。短期是利好——拿到最强大脑 + 巨头背书 + 资本。
  长期是隐患——**议价权、数据归属、被收购/被替代的可能性都握在供应商手里**。
  当你的核心供应商同时是你的股东，「合作」和「控制」之间只有一线之隔。
- **Mercedes / GXO 试点真实度**：客户名单是同行里最实的之一（真车厂、真物流龙头），
  但目前仍是**试点/评估**，不是规模化付费部署。「签了商业协议」≠「批量在役干活赚钱」，
  节拍数据、在役台数、复购均未公开——**含金量高于多数同行，但仍需独立验证**。
- **$53 亿估值 vs 收入**：和全行业一样严重倒挂。$53 亿对应的真实商业收入极小，
  本质仍是「对未来劳动力市场的期权」。相对 Figure 的 $390 亿，Apptronik 估值更克制，
  但「估值高 ≠ 生意好」这条铁律照样适用。
- **新机器人是关键变量**：2026 计划推的新平台若能在 Mercedes 实现 2027 量产爬坡，
  才算从「试点」迈向「商用」；否则又是一轮叙事。

## 8. 信源
- [2026-02-11] Apptronik raises $520 million at $5 billion valuation for Apollo robot — CNBC（cnbc.com）
- [2026-02-11] Humanoid robot startup Apptronik has now raised $935M at a $5B valuation — TechCrunch
- [2026-02-12] Apptronik Raises $935 Million at a $5.3 Billion Valuation — Silicon Valley Investclub（投后估值 ≈$53 亿口径来源）
- [2026-02-11] Apptronik Closes Over $935 Million Series A with New $520 Million Extension Round — GlobeNewswire（官方）
- [2026-02-11] Apptronik brings in another $520M to ramp up Apollo production — The Robot Report
- [2024-03] Apptronik and Mercedes-Benz Enter Commercial Agreement to Pilot Apollo — PR Newswire / UT ATI
- [2026] Apptronik valuation, funding & news — Sacra（融资与规格综述）
- [2018-09] UT alumni lead humanoid robotics company Apptronik — The Daily Texan（创始团队与 UT 血统）
- [2026] Industry Insights: Apptronik's Next Apollo Is Nearly Ready — Automate.org（新一代机器人）
- 交叉引用：`02-companies/gemini-robotics.md`（Apptronik 是 Gemini Robotics 最深的合作本体厂 + Google 直投）
- 行业全景：`01-landscape/README.md`（对应表中「Apptronik · 🦾本体 OEM · 用 Gemini · 工业试点 · $5.3B」一格）
