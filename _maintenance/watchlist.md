# 追踪靶子 · Watch-list

> 这是自动追踪的**靶子**：每次 freshness sweep 只盯这张表。
> 每条记录「当前值 + 日期 + 下一个该盯的触发点」——sweep 时拿搜到的新值和「当前值」比对，变了就更新。
> 优先级：🔴 近期高频（数月内会变）· 🟡 中频 · 🟢 低频（季度级）。

---

## A. IPO 进度（🔴 最该盯，离事件最近）
| 对象 | 当前状态 | 日期 | 下一个触发点 | 档案 |
|---|---|---|---|---|
| 宇树 Unitree | 科创板**上市委过会** | 2026-06-01 | 证监会注册 → 发行定价 → 挂牌（临门一脚） | [unitree](../02-companies/unitree.md) |
| 智元 AgiBot | 港股 IPO 筹备（传闻） | 2026 | 是否递表/聆讯；借壳上纬新材后续 | [agibot](../02-companies/agibot.md) |
| 傅利叶 Fourier | 已股改 | 2025-07 | 是否申报科创板 | [fourier](../02-companies/fourier.md) |
| Figure | 无 S-1（IPO 传闻 2027-28） | 2026 | 是否提交 S-1 | [figure-ai](../02-companies/figure-ai.md) |

## B. 头部融资 / 估值（🔴 最易变）
| 对象 | 当前估值 | 日期 | 下一个触发点 | 档案 |
|---|---|---|---|---|
| Physical Intelligence | $11B（**洽谈中，未落定**） | 2026-03 | 该轮是否收官、领投方、最终估值 | [physical-intelligence](../02-companies/physical-intelligence.md) |
| 1X Technologies | ~$10B（目标，未确认收官） | 2025-09 | $10 亿新轮是否收官 | [1x-technologies](../02-companies/1x-technologies.md) |
| Figure | $39B（C 轮） | 2025-09 | 新一轮 / IPO 估值 | [figure-ai](../02-companies/figure-ai.md) |
| Skild AI | $14B（C 轮，软银领投） | 2026-01 | 新轮 / 营收兑现 | [skild-ai](../02-companies/skild-ai.md) |
| 智元 AgiBot | ~¥150 亿（传 C 轮 ¥500 亿） | 2025 | C 轮是否落定、估值 | [agibot](../02-companies/agibot.md) |
| 银河通用 Galbot | ~¥200 亿（D 轮） | 2026-03 | 新轮 / IPO | [galbot](../02-companies/galbot.md) |
| Apptronik | $5.3B | 2026-02 | 新轮 | [apptronik](../02-companies/apptronik.md) |
| 星动纪元 Robot Era | ~¥100 亿 | 2026-03 | 新轮 | [robot-era](../02-companies/robot-era.md) |
| 优必选 UBTech | HKEX 市值波动 + 2025 净亏 7 亿 | 2025 | 亏损是否收窄、市值、Walker S 订单 | [ubtech](../02-companies/ubtech.md) |

## C. 真实落地 / 订单（🟡 测真伪的关键）
| 对象 | 当前 | 触发点 | 档案 |
|---|---|---|---|
| Agility（GXO/Amazon/Schaeffler/Toyota） | 累计 ~100 台在役 | 在役台数、是否盈利、新客户 | [agility-robotics](../02-companies/agility-robotics.md) |
| Tesla Optimus | 几百台自用、V3 延期、拒给 2026 产量 | V3 发布、外部首单、真实产量 | [tesla-optimus](../02-companies/tesla-optimus.md) |
| Figure × BMW | 试点 | 是否规模化、节拍数据 | [figure-ai](../02-companies/figure-ai.md) |
| 1X NEO | 预订、家务靠遥操作 | 真实家庭交付、自主度提升 | [1x-technologies](../02-companies/1x-technologies.md) |
| 智元 / 银河 订单成色 | 关联交易 / 药店口径待核 | 第三方核验的真实在役与营收拆分 | — |

## D. 技术里程碑（🟡 路线胜负手）
| 对象 | 当前 | 触发点 |
|---|---|---|
| VLA scaling law | 未证 | 是否出现「数据+算力涌现通用能力」的硬证据 |
| Physical Intelligence | π0.5 | π1.0 发布、首个商业产品 |
| NVIDIA GR00T | N1.7（2026-04） | 新版本、采用度数据 |
| Gemini Robotics | ER 1.6（2026-04） | 新版本、SDK 开放度 |
| 数据飞轮 | 仿真/合成/人类视频代偿 | 真机数据复利是否被证明可跨形态 |

## E. 上游良率 / 降本（🟢 慢变量总开关）
| 对象 | 当前 | 触发点 |
|---|---|---|
| 行星滚柱丝杠 | 国产 ~19%、良率未验证 | 国产良率破 80%、过 Tesla 验证、整机 BOM 是否下台阶 |
| 谐波减速器 | 国产 75%、价格腰斩 | 进一步价格战 / 龙头利润率 |
| 端侧 AI 芯片 | Jetson Thor 主导 | 国产（地平线/昇腾）端侧份额、华为 CANN 开源进展 |

## F. 格局变量（🟢 但影响最大）
| 对象 | 触发点 |
|---|---|
| 资本动向 | Thiel/Founders Fund 对 PI 是否落定；软银/NVIDIA 新动作；**一级市场降温信号**（哪家先断粮） |
| 新入局 / 退场 | 大厂入场（苹果/字节/华为机器人）、明星公司倒闭或被收购 |
| 政策 | 中国国家队新基金、补贴；美国监管/出口管制变化 |

---

> 更新这张表本身也是 sweep 的一部分：值变了就改「当前值 + 日期」，并把变化写进 [sweep-log](sweep-log.md)。
> 新出现的重要玩家/事件，往这张表加行。
