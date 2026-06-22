# Boston Dynamics · 档案

> 机器人界「运动控制之王」，33 年只做一件事——让机器人像生物一样动。
> 技术天花板最高、却最不会赚钱的悖论标本：造出全行业最惊艳的机器人，被收购估值却不到 Figure 的 3%。
> 现归现代汽车（Hyundai）旗下，正从「实验室神兽」硬转「工厂工具」。

## 速览卡
| 项 | 内容 |
|---|---|
| 成立 / 总部 | 1992 · 美国马萨诸塞州 Waltham（MIT 实验室 spinoff） |
| 创始人 | Marc Raibert（MIT/CMU 教授，腿足运动控制宗师；2020 卸任 CEO，2022 另立 AI Institute） |
| 现任掌门 | Amanda McMaster（CFO 代理 CEO）；Robert Playter 于 2026-02-27 卸任，正寻新 CEO |
| 类型 | 🦾 本体 OEM（运控霸主）；大脑走**分层控制**、AI 靠外部（TRI / Google DeepMind） |
| 所有权 | **现代汽车集团控股**：2021 年从软银接手约 80% 股权，对应估值 ≈ **$11 亿**（软银 2025 退出余股套现 $3.25 亿） |
| 核心产品 | Atlas（全电人形）、Spot（四足巡检）、Stretch（仓储卸货） |
| 一句话状态 | **真实商用（Spot·Stretch）+ 工业试点（Atlas）**：明星不赚钱，赚钱的不是明星 |

## 1. 创始团队与基因
Marc Raibert 是腿足运动控制的「祖师爷」——从 MIT Leg Laboratory 一路把「让机器跑、跳、不倒」做到极致。
这奠定了 Boston Dynamics 的全部基因：**科研驱动、运控至上、不计成本追求动作的极限**。
公司 33 年换过三个东家（Google 2013 收购 → 软银 2017 → 现代 2021），但骨子里一直是「实验室」而非「公司」——
做出了 BigDog、Atlas 后空翻、跑酷这些刷屏全球的演示，却长期没想清楚「卖给谁、怎么赚钱」。

这正是它与 Figure、宇树最根本的区别：别人是「为商业造机器人」，它是「为机器人本身造机器人」。
2020 年 Raibert 把 CEO 交给 Robert Playter（同样是 30 年老兵），自己 2022 年带着现代 $4 亿另立
**Boston Dynamics AI Institute（现 RAI Institute）**专攻基础研究——等于承认「商业化」和「做科研」是两拨人、两件事。
2026 年 2 月 Playter 也卸任，由 CFO McMaster 代理——**财务背景接棒，信号很直白：现代要的是「能交付、能赚钱」，不再是更炫的 Demo。**

## 2. 技术路线
- **本体**：三条产品线，工程功力全行业天花板。
  - **Atlas（全电）**：2024-04 退役液压版、改全电驱动（彻底告别标志性的液压系统）；自研高功率电机（量产版由现代摩比斯 Hyundai Mobis 供应），主打 360° 关节、超人类灵活度、跌倒自恢复。2026-01 CES 发布**量产版**，大幅削减零件数、对接汽车供应链。
  - **Spot（四足）**：商用巡检标杆，已售出**数千台**真实在役——目前全球少数能把腿足机器人规模化商用的公司。
  - **Stretch（轮式单臂）**：仓储卸柜专机，1,000 箱/小时，部署可在一周内完成。
- **大脑（VLA）**：**这是它的命门，也是最大反差。** 运控天下第一，但「大脑/具身智能」长期是短板，走传统**分层（规划+运控）**路线。
  AI 时代到来后，它选择**靠外部补脑**而非自研：
  - Atlas：2024-10 起与**丰田研究院（TRI）**合作大行为模型（LBM）；2025-08 演示 450M 参数 Diffusion Transformer 策略，单模型用语言指令直控全身（手脚同等对待）做分拣/打包/整理。
  - Spot：2026-04 把 **Google DeepMind 的 Gemini Robotics-ER 1.6** 接入 Orbit 软件的 AI 视觉巡检（AIVI），自主读仪表/温度计/数显，准确率冲到 98%（较上一代约 4 倍提升）。
  - **战略含义**：运控霸主在「大脑」时代主动选择「身体我造、脑子外采」——把 AI 押给 TRI 和 Google，赌的是「最强身体 + 最强外脑」的组合拳。
- **数据策略**：靠 Spot 数千台在役机队回流真实工业数据，是其相对同行的隐性资产；但 Atlas 的 VLA 数据飞轮仍在早期。

## 3. 产品与里程碑（时间线）
- 1992 · Marc Raibert 从 MIT 拆分创立
- 2005–2013 · BigDog 等军用/科研项目，奠定运控声誉
- 2013 · 被 Google（X 实验室）收购
- 2017 · 转手软银
- 2020-06 · Spot 开放商用销售；Playter 接任 CEO
- 2020-12 / 2021-06 · **现代收购约 80% 股权**（估值 ≈ $11 亿），软银退至少数股东
- 2022-08 · 现代出资 $4 亿设立 Boston Dynamics AI Institute（Raibert 主理）
- 2022 · Stretch 开放商用购买
- 2024-04 · **退役液压 Atlas，发布全电 Atlas**
- 2024-10 · 与丰田研究院（TRI）启动大行为模型合作
- 2025-05 · **DHL 签约：2030 前部署 1,000+ 台 Stretch**
- 2025-08 · TRI×Atlas 大行为模型 Demo 公布
- 2026-01 · CES 发布**量产版全电 Atlas**；宣布与 Google DeepMind 合作；首批客户 = 现代 + DeepMind
- 2026-02 · Playter 卸任，CFO McMaster 代理 CEO
- 2026-04 · Spot 接入 Gemini Robotics-ER 1.6（巡检准确率 98%）
- 2026+ · Atlas 2026 年产能**已全部预订售罄**（现代 RMAC + DeepMind）；Atlas 工厂实战部署计划 2028 年起于现代 Savannah 工厂

## 4. 商业模式与客户
- **怎么赚钱**：**卖本体 + 软件订阅（Orbit/AIVI）**。真正贡献收入的是 Spot（巡检）和 Stretch（卸货）——
  数千台 Spot 在役、Stretch 拿到千台级长约。**明星 Atlas 反而还没真正商业化**，2026 全部产能给了「自己人」（母公司现代 + 合作方 DeepMind）。
- **真实客户**：Spot——能源/电力/制造业巡检（含现代自家工厂试点）；Stretch——**DHL、Maersk、H&M、Lidl** 等头部物流/零售；Atlas——现代工厂（关联方）。
- **关键反差**：和 Figure「卖未来期权」不同，Boston Dynamics 有**真实付费、真实复购的商用基本盘**——只是这块基本盘小、增速慢，且明星产品和赚钱产品是错位的。

## 5. 落地案例
| 案例 | 场景 | 自主程度 | 说明 |
|---|---|---|---|
| Spot 工业巡检（数千台在役） | 电力/能源/制造业巡检 | 半自主→自主（接 Gemini 后读表 98%） | **真实商用**，全行业罕见的腿足机器人规模化 |
| DHL / Maersk / H&M / Lidl × Stretch | 仓储卸柜 | 半自主（专机，1,000 箱/小时） | **真实商用**；DHL 签约 2030 前 1,000+ 台 |
| Atlas × 现代 RMAC | 汽车制造（零件排序等） | 试点（关联方部署） | 2026 产能售罄但客户是母公司，**商业含金量待证** |
| Atlas × Google DeepMind | AI 研究平台 | 研究 / 早期 | 提供本体给 DeepMind 训模型，非生产作业 |
| Atlas × TRI 大行为模型 | 分拣/打包演示 | 演示（450M 参数 LBM） | 视频惊艳，**自主度与可重复性需独立验证** |

## 6. 融资与资本
不靠 VC 续命——**它是巨头资产，被三次倒手**，这本身就是与 Figure/1X 完全不同的资本故事。

| 阶段 | 时间 | 交易 | 估值/金额 |
|---|---|---|---|
| Google 收购 | 2013 | 并入 Google/X | 未披露 |
| 软银收购 | 2017 | 从 Google 接手 | 未披露 |
| **现代收购** | 2020-12 公告 / 2021-06 完成 | 从软银买约 80% 股权 | 整体估值 ≈ **$11 亿** |
| 软银退出余股 | 2025 | 出售剩余少数股 | ≈ **$3.25 亿** |

**母公司战略分析**：现代买它不是为财务回报，而是为「**把人形机器人变成自家工厂和未来出行帝国的一块拼图**」。
现代已宣布对美投资 $260 亿，含一座年产 **3 万台机器人**的工厂；目标是向自家产线投放**数万台** Boston Dynamics 机器人。
这给了 Boston Dynamics 别家梦寐以求的东西：**一个不差钱、且自带海量内部场景（汽车厂）的金主+首发客户。**
代价是——它从「独立明星」彻底变成「现代的机器人部门」，节奏和路线由汽车巨头的产业逻辑主导。

## 7. 拨开迷雾（争议与真实进度）
- **技术最强 vs 估值最尴尬的悖论**：造了 33 年全行业最惊艳的机器人，2021 被收购估值却仅 ≈ $11 亿——**不到 Figure（$390 亿）的 3%。**
  这赤裸裸说明：在具身智能这门生意里，**「惊艳的运控」不直接等于「值钱的公司」**，资本买的是「规模化劳动力的故事」，而 Boston Dynamics 长期没讲这个故事。
- **赚钱的不是明星**：真正有商用现金流的是 Spot、Stretch，而非刷屏的 Atlas。Atlas 2026 产能「售罄」听着性感，但买家是母公司和合作方——**关联交易成分高，不能等同于市场验证。**
- **运控霸主，AI 落后**：在「大脑/VLA」决胜的时代，它的长板（运控）正被对手用「通用大脑」拉平，而它的短板（具身智能）只能靠 TRI/Gemini **外部补课**——
  这把核心智能能力的命脉交到了别人手里，是长期最大风险。
- **Demo 与现实**：Atlas 的 TRI 大行为模型演示需区分「一次成功的视频」与「稳定自主作业」；工厂实战部署要到 2028 年起。
- **可持续性**：现金不是问题（现代输血+真实收入），**问题是节奏与定位**——能否在被对手用 AI 弯道超车前，把最强的身体真正变成工厂里赚钱的工具。

## 8. 信源
- [2026-01-05] Boston Dynamics 量产版全电 Atlas / 现代 CES 2026 机器人战略 — hyundainews.com, engadget.com, theregister.com
- [2026-01] Atlas 2026 产能售罄（现代 RMAC + DeepMind）— msn.com / automate.org
- [2026-02-10] Boston Dynamics CEO Robert Playter 卸任、CFO McMaster 代理 — techcrunch.com, therobotreport.com
- [2026-04-15] Spot 接入 Gemini Robotics-ER 1.6（AIVI 巡检 98%）— roboticsandautomationnews.com, bostondynamics.com, spectrum.ieee.org
- [2025-08-20] TRI × Atlas 大行为模型（450M Diffusion Transformer）— bostondynamics.com, pressroom.toyota.com, therobotreport.com
- [2025-05] DHL 签约 2030 前部署 1,000+ 台 Stretch；Lidl/Maersk/H&M 部署 — automatedwarehouseonline.com, bostondynamics.com
- [2024-04] 退役液压 Atlas、发布全电版 — Wikipedia: Atlas (robot), spectrum.ieee.org
- [2021-06] 现代完成收购约 80% 股权（估值 ≈ $11 亿）；[2025] 软银退出余股 $3.25 亿 — Wikipedia: Boston Dynamics, slashgear.com, startupfortune.com
- [2022-08] 现代出资 $4 亿设立 Boston Dynamics AI Institute（Raibert 主理）— prnewswire.com, techcrunch.com
- 待核：Boston Dynamics 员工规模、年度营收/盈亏（私有公司未公开）；Atlas 单台定价；Spot 在役精确台数（公开口径为「数千台」）；新任正式 CEO 人选
