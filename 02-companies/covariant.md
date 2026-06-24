# Covariant · 档案

> 用仓储拣选起家的「机器人通用大脑」——一个神经网络（Covariant Brain / RFM-1）让标准机械臂抓起**从没见过的** SKU。
> 它把「部署即数据采集机」的飞轮转到了行业最前，却在 2024 年被**亚马逊「逆向收购」掏空**。
> **这是「数据飞轮楔子打法」的正面样本，也是一则警世结局。**

## 速览卡
| 项 | 内容 |
|---|---|
| 成立 / 总部 | 2017-09（原名 **Embodied Intelligence**，2020 更名 Covariant）· 美国 Emeryville, CA |
| 创始人 | Pieter Abbeel（总裁/首席科学家，UC Berkeley 机器人学习实验室主任）、Peter Chen（CEO）、Rocky Duan（CTO）、Tianhao Zhang |
| 类型 | 🧠 大脑 / VLA（卖「脑」给第三方机械臂与集成商，不做本体） |
| 赛道楔子 | **仓储非结构化混合 SKU 拣选**（goods-to-person pick-and-place） |
| 核心产品 | Covariant Brain；**RFM-1**（2024-03，80 亿参数多模态机器人基础模型） |
| 总融资 | **~$2.22 亿**（2017–2023），估值 **~$6.25 亿**（2023） |
| 关键投资人 | Index Ventures、Radical Ventures、Amplify Partners、CPP Investments |
| 一句话状态 | **被亚马逊逆向收购（2024-08-30）**：3 位创始人 + ~25% 员工 + 非独占模型授权，~$3.8 亿；剩余公司沦为「僵尸」 |

## 1. 创始团队与基因
**Abbeel 的 Berkeley 强化学习血脉 + OpenAI 履历。** Pieter Abbeel 是深度强化学习/机器人学习领军人物（Berkeley 机器人学习实验室主任），Peter Chen、Rocky Duan、Tianhao Zhang 是他的前 Berkeley 博士生；Abbeel、Chen、Duan 三人还都在 OpenAI 共事过。

基因 = **顶级 RL/模仿学习 research → 死磕真实世界**。创始动机很清醒：2016 年前后他们意识到实验室环境「简单而做作」，限制了机器人能学到的技能，于是出来「让它在杂乱的真实世界里跑起来」。这一句话，奠定了它后来一切打法的底色。

## 2. 技术路线（路线重心的迁移：RL → VLA + 世界模型）
- **Covariant Brain**（≤2023）：一个**统一神经网络**（不做一任务一模型），用**模仿学习 + 强化学习**训练。Abbeel：「先用模仿 bootstrap，剩下的 RL 来补完。」
- **RFM-1**（2024-03-11，MODEX 发布）：**80 亿参数**的多模态 **any-to-any** 机器人基础模型。吃文本/图像/视频/机器人动作/传感器读数（力、吸力、关节角），自回归预测下一个 token。Chen 称它「基本就是个大语言模型，只不过是机器人的语言」。
  - **同时是 VLA + 世界模型**：它能预测未来视频帧，像一个「学出来的物理引擎」——模拟候选动作、挑最好的。Abbeel：「五年后这会是唯一一种仿真器。」**所以它横跨 VLA 与世界模型两条路线。**
- **数据飞轮（核心资产）**：100+ 台仓储机械臂、数十客户、~15 国，累计**数千万条**拣选轨迹，「每几周新增约 100 万条」（对比开源 RT-X 总共才约 100 万）。Abbeel 把部署的拣选业务直接称为**「数据采集机」**。
- **泛化卖点**：抓「从没见过、任意包装与形状」的物体；few-shot / in-context 在线适配，不必手动重训。

## 3. 产品与里程碑（时间线）
- 2017-09 · 以 Embodied Intelligence 成立，$7M 种子轮
- 2019-09 · 首个生产部署：KNAPP「Pick-it-Easy Robot」@ Obeta（德国电气批发，柏林附近）
- 2020 · 更名 Covariant 公开亮相；2020-02 ABB 合作；2020-05 Series B $40M（Index 领投）
- 2021-07 · Series C $80M（Index 领投，估值 ~$6.25 亿）
- 2023-01 · Radial 12 台 Robotic Putwall（路易斯维尔，美妆个护）；2023-04 +$75M
- 2023-05 · Otto Group 战略合作，计划部署 100+ 台
- 2024-03 · 发布 **RFM-1**（基础模型，飞轮的产物）
- **2024-08-30 · 亚马逊逆向收购**（见 §7）
- 2025-12 · Abbeel 被任命领导亚马逊 AGI 部门的 LLM 工作（仍兼机器人）

## 4. 商业模式与客户
- **怎么赚钱**：卖 **Covariant Brain 软件层**，去驱动第三方机械臂（ABB）和集成商工作站（KNAPP Pick-it-Easy、Bastian、Fortna）。对外用 **「ROI-centric RaaS」** 话术。
- **不是无人化，是人盯机**：单位经济学靠**监管比**——Abbeel 自己的算法：90% 成功率（每小时 ~30 次失败）「机器人创造的活比省下的还多」；99%（每小时 ~3 次失败）一个人能盯 ~10 个工位。即便最好的站点也需要人做异常兜底。
- **单位经济学从未公开**：没有每拣成本、部署成本、订阅价或回本期，只有上面那条监管比隐含了利润边界。

## 5. 落地案例
| 案例 | 场景 | 自主程度 | 说明 |
|---|---|---|---|
| KNAPP / Obeta（德国） | 电气批发拣选 | 半自主（人盯） | 旗舰参考站，~600 件/时、~14 小时/天、运行 2+ 年；广而多变的 SKU |
| Otto Group（欧洲） | 综合电商履约 | 半自主 | 最大承诺部署：计划 100+ 台，Haldensleben/Altenkunstadt 起步 |
| Radial（路易斯维尔） | 美妆个护分拣 | 半自主 | 12 台 Robotic Putwall，~425 件/时，覆盖 100% SKU，扛住 2022 旺季缺工 |
| ABB → Active Ants（荷兰） | 电商履约 | 半自主 | Brain 装上 ABB 臂，首装 bpost 旗下 Active Ants |

## 6. 融资与资本
| 轮次 | 日期 | 金额 | 估值 | 关键投资人 |
|---|---|---|---|---|
| 种子 | 2017 | ~$7M | — | Amplify Partners 等 |
| A | 2019 | ~$20M | — | — |
| B | 2020-05 | $40M | — | Index Ventures 领投 |
| C | 2021-07 | $80M | ~$6.25 亿 | Index 领投、Radical、Amplify |
| C 扩展 | 2023-04 | $75M | — | Index、Radical、CPP Investments |
| **合计** | | **~$2.22 亿** | | |

## 7. 拨开迷雾：亚马逊「逆向收购」与僵尸结局
- **2024-08-30，亚马逊不收购、而是「逆向收购」**：雇走 3 位创始人（Abbeel/Chen/Duan）+ ~25% 员工进 Amazon Robotics，并取得 Covariant 基础模型的**非独占授权**。公司名义上继续独立。
- **价码与反垄断疑云**：2025-01 一份向 FTC/SEC/DOJ 的**举报**披露价码约 **$3.8 亿 + 一年后 $2000 万**尾款；远超 HSR 并购申报门槛（~$1.195 亿），举报称该结构是为**规避反垄断审查**而「蓄意设计」。
- **剩余公司成「僵尸」**：COO Ted Stinson 转任 CEO，联创 Tianhao Zhang 留守；Emeryville 总部数月内清空、机器人零件变卖，headcount 降至 ~10–20 人（多在中国）。举报称亚马逊**限制其再对外授权技术**，估值被评在「零到低双位数百万美元」之间——对照 2023 年的 $6.25 亿。
- **价值去哪了**：技术与人才动能基本转入亚马逊。其 2025-10 的「Blue Jay」六臂机器人，从概念到量产仅一年出头（以往要 3+ 年）。
- **这是 2024–25 大厂「逆向收购」剧本的机器人版**（参 微软-Inflection、亚马逊-Adept、谷歌-Character.AI、Meta-Scale）：用「雇人 + 授权」拿走创业公司的价值，绕开并购审查，留下被掏空的壳；创始人拿大头，普通员工与小股东承担下行。

## 8. 用打分卡量一量（[→ 07 判断打分卡](../智能机器时代/07-判断打分卡.md)）
| 轴 | 评分 | 依据 |
|---|---|---|
| **泛化** | ★★★★☆ | 对**从没见过的 SKU** 的跨实例/类别泛化是核心卖点且在数十客户验证；RFM-1 把泛化往基础模型推 |
| **几个9** | ★★★★☆ | 拣选是**容错场景**（可重试、人盯 10 站），最好站点越过 >99% 的可部署门槛——但始终非无人化 |
| **数据效率** | ★★★★☆ | 飞轮转得最猛（每几周 ~100 万条轨迹），靠**部署即采集**把数据护城河拉到行业最前 |

> **楔子判定：真在推进。** 它精准选了一个「人招不到 + 任务做不了 + 失败便宜可恢复」的容错楔子，并把它当数据采集机。
> **但它教的最深一课是反面的**：当你的楔子 **正是某个巨头的核心业务**（仓储拣选 = 亚马逊命脉），数据飞轮能挡住创业对手，**挡不住能直接把你团队买走的巨头**。选楔子时，除了三轴，还得问一句：**「这个领域的在位者是谁？他会不会绕过我的产品、直接收编我的人？」** —— 对照 [Chef Robotics](chef-robotics.md)，同样的打法、因为楔子里没有科技巨头在位者，结局完全相反。

## 9. 信源
- [2024-08-31] Amazon hires the founders of robotics AI startup Covariant — TechCrunch
- [2024] Amazon hires from AI robotics startup Covariant, licenses technology — aboutamazon.com（亚马逊官方）
- [2025-01-18] Amazon antitrust AI whistleblower（$380M+$20M、僵尸公司）— Washington Post
- [2025-08-19] How AI 'zombie' deals work — CNBC
- [2024-03-11] Covariant Introduces RFM-1 — IEEE Spectrum / BusinessWire
- [2017-11-07] Berkeley startup to train robots like puppets（Embodied Intelligence 成立）— Berkeley News
- Covariant (company) — Wikipedia（融资/时间线汇编）
