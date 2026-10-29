/* Chain Academy 内容数据 —— 由 crypto-learning 旧站全量迁移生成（convert.py）
 * 编辑内容请直接改 crypto-learning 仓库后重新运行 python3 convert.py */
const STAGES = [
 {
  "id": "s1",
  "num": "01",
  "title": "认知地基",
  "en": "FOUNDATIONS",
  "risky": false,
  "desc": "",
  "chapters": [
   {
    "id": "s1-01-money",
    "title": "第 1 节：货币与法币",
    "dur": "约 40 分钟",
    "intro": "货币是什么？ 货币不是\"钱\"本身，而是一种大家都认可的记账工具。它的核心作用有三个：",
    "content": "<h4>本节目标</h4>\n<ul><li>理解货币的本质</li><li>理解法币与通货膨胀</li><li>为理解比特币打基础</li></ul>\n<h4>核心概念</h4>\n<p><strong>货币是什么？</strong> 货币不是\"钱\"本身，而是一种<strong>大家都认可的记账工具</strong>。它的核心作用有三个：</p>\n<ol><li><strong>价值尺度</strong>：给东西标价（一个苹果 5 元，一部手机 5000 元）</li><li><strong>流通手段</strong>：用来交换（你拿钱买苹果，卖家拿钱买米）</li><li><strong>价值储藏</strong>：把今天的劳动存到明天花</li></ol>\n<p><strong>货币的价值来自哪里？</strong> 来自<strong>信任</strong>和<strong>稀缺性</strong>。古代用贝壳、黄金，是因为大家相信它们稀缺且别人也收。今天的人民币、美元是<strong>法币（Fiat）</strong>——价值来自国家信用和法律，本身只是一张纸或一个数字。</p>\n<p><strong>通货膨胀</strong>就是法币的供应量增加，导致每一块钱能买到的东西变少。比如 20 年前 100 元能买很多东西，今天购买力明显下降了。温和通胀是常态，但恶性通胀（如某些国家货币贬值到 billion 级别）会让储蓄瞬间归零。</p>\n<h4>举例说明</h4>\n<ul><li>你手里的人民币：背后是\"中国政府信用 + 国家法律强制使用\"，不是黄金</li><li>比特币的思路：既然法币会因为增发而贬值，能不能造一种<strong>没人能随便增发</strong>的数字\"黄金\"？</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"钱就是财富本身\" → 钱是交换媒介，真正的财富是你能买到的东西</li><li>❌ \"比特币没有价值，因为它没有国家背书\" → 黄金也没有国家背书，价值来自稀缺性和共识</li><li>❌ \"通胀一定是坏事\" → 温和通胀刺激消费和投资，恶性通胀才是灾难</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">法币</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Fiat</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">通货膨胀</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Inflation</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">价值尺度</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Unit of Account</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">流通手段</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Medium of Exchange</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">价值储藏</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Store of Value</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>货币的本质是\"大家都信的记账工具\"，价值来自共识和稀缺性</li><li>法币靠国家信用维持，会因增发而通胀</li><li>比特币的出发点：用技术手段制造\"不可增发的数字稀缺品\"</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：货币的核心职能不包括？</strong></p>\n<ul><li>A. 价值尺度</li><li>B. 流通手段</li><li>C. 价值储藏</li><li>D. 制造通胀</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：D 解析：货币的三大职能是价值尺度、流通手段、价值储藏。通胀是货币超发的后果，不是职能。</p>\n</details>\n<p><strong>2. 判断题：法币本身具有内在价值。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：法币本身只是纸或数字，几乎没有内在价值，其价值来自国家信用和使用者共识。</p>\n</details>\n<p><strong>3. 选择题：恶性通胀对普通储户最大的伤害是？</strong></p>\n<ul><li>A. 存款利率下降</li><li>B. 储蓄的购买力快速缩水</li><li>C. 银行网点减少</li><li>D. 汇率升值</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：通胀直接稀释每一单位货币的购买力，储蓄\"数字没变、能买的东西变少了\"。</p>\n</details>\n<p>---</p>\n<p><a href=\"../\" style=\"color:#4dd0e1\">上一节：首页</a> | <a href=\"02-blockchain\" style=\"color:#4dd0e1\">下一节：区块链</a></p>",
    "quiz": [
     {
      "q": "区块链的\"不可篡改\"主要依靠什么实现？",
      "opts": [
       "政府监管",
       "每个区块包含前一区块的哈希，形成链式关联",
       "数据存在云端加密",
       "矿工人品可靠"
      ],
      "a": 1,
      "exp": "哈希链结构使得改动任何一个区块都会破坏其后所有区块的哈希，从而被全网发现。"
     },
     {
      "q": "比特币的总量可以通过社区投票修改。",
      "opts": [
       "正确",
       "错误"
      ],
      "a": 1,
      "exp": "2100 万上限写死在代码中，修改需要全网几乎所有节点同意，实际上不可能实现——这正是其价值主张。"
     }
    ]
   },
   {
    "id": "s1-02-blockchain",
    "title": "第 2 节：区块链",
    "dur": "约 40 分钟",
    "intro": "一句话：区块链就是一个\"很多人同时记账、且谁也改不了历史\"的公共账本。",
    "content": "<h4>本节目标</h4>\n<ul><li>理解区块链\"账本\"的比喻</li><li>理解去中心化和不可篡改的含义</li><li>知道区块、哈希、共识三个核心概念</li></ul>\n<h4>核心概念</h4>\n<p><strong>一句话：区块链就是一个\"很多人同时记账、且谁也改不了历史\"的公共账本。</strong></p>\n<p>传统账本（如银行）由一家机构记账，你相信它不会乱记。区块链的思路是：<strong>让成千上万台电脑各自保存一份一模一样的账本</strong>，每过一段时间（比如 10 分钟），大家把新交易打包成一页（<strong>区块</strong>），盖个章（<strong>哈希</strong>），接到上一页后面，形成一条链——所以叫<strong>区块链</strong>。</p>\n<p>三个关键机制：</p>\n<ol><li><strong>哈希（Hash）</strong>：把任意数据算成一个固定长度的\"指纹\"。改一个字符，指纹完全不同。每个区块都包含上一个区块的哈希，所以改历史 = 改后面所有区块 = 立刻被发现。</li><li><strong>去中心化</strong>：账本副本分散在全球成千上万台电脑上，没有单一中心可以控制、冻结或篡改。</li><li><strong>共识机制</strong>：新区块由谁记账？比特币用\"工作量证明（PoW）\"——记账人（矿工）比拼算力解题，赢家记账，其他节点验证。想作弊需要控制全网大部分算力，成本极高。</li></ol>\n<h4>举例说明</h4>\n<ul><li>像全班同学人手一本一模一样的账本，每 10 分钟一起对账，任何人偷偷改自己的本子都和其他人对不上，立刻露馅。</li><li>比特币区块链从 2009 年运行至今，历史交易记录一次没有被成功篡改过。</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"区块链 = 比特币\" → 比特币是区块链的第一个应用，区块链是底层技术</li><li>❌ \"区块链绝对安全\" → 账本本身难篡改，但钱包被盗、交易所跑路并不属于\"篡改账本\"</li><li>❌ \"区块链必须有币\" → 联盟链（如部分银行系统）可以不发币，但公链需要代币激励记账人</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">区块</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Block</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">哈希</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Hash</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">去中心化</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Decentralization</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">共识机制</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Consensus Mechanism</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">工作量证明</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Proof of Work (PoW)</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">权益证明</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Proof of Stake (PoS)</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">节点</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Node</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">矿工</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Miner</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>区块链 = 公共账本 + 密码学指纹 + 分布式共识</li><li>哈希链接让历史不可篡改，分布式让账本没有单一中心</li><li>记账权通过共识机制竞争产生，作弊成本极高</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 判断题：修改区块链上任何一个历史区块，只需要改动那一个区块。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：每个区块包含前一区块的哈希，改一个会导致其后所有区块的哈希对不上，立刻被全网发现。</p>\n</details>\n<p><strong>2. 选择题：比特币采用哪种共识机制？</strong></p>\n<ul><li>A. 权益证明（PoS）</li><li>B. 工作量证明（PoW）</li><li>C. 权威证明（PoA）</li><li>D. 股份授权证明（DPoS）</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：比特币矿工通过比拼算力竞争记账权，即工作量证明。以太坊已转向 PoS。</p>\n</details>\n<p><strong>3. 选择题：\"去中心化\"最直接的含义是？</strong></p>\n<ul><li>A. 不需要联网</li><li>B. 账本由众多节点共同保存，无单一控制方</li><li>C. 交易不需要手续费</li><li>D. 完全匿名</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：去中心化指系统的控制权和数据分布在大量节点上，而不是某个中心机构手里。</p>\n</details>\n<p>---</p>\n<p><a href=\"01-money\" style=\"color:#4dd0e1\">上一节：货币与法币</a> | <a href=\"03-bitcoin\" style=\"color:#4dd0e1\">下一节：比特币</a></p>",
    "quiz": [
     {
      "q": "比特币\"减半\"直接影响的是？",
      "opts": [
       "矿工出块奖励",
       "交易手续费",
       "总量上限",
       "区块大小"
      ],
      "a": 0,
      "exp": "减半指矿工打包新区块的奖励减半，新币产出速率下降，直到约 2140 年挖完全部 2100 万枚。"
     }
    ]
   },
   {
    "id": "s1-03-bitcoin",
    "title": "第 3 节：比特币",
    "dur": "约 40 分钟",
    "intro": "比特币（Bitcoin, BTC） 是 2008 年由化名为中本聪（Satoshi Nakamoto）的人/组织发表白皮书、2009 年 1",
    "content": "<h4>本节目标</h4>\n<ul><li>知道比特币是谁创造的、怎么诞生的</li><li>理解 2100 万上限和减半机制</li><li>理解\"数字黄金\"的定位</li></ul>\n<h4>核心概念</h4>\n<p><strong>比特币（Bitcoin, BTC）</strong> 是 2008 年由化名为<strong>中本聪（Satoshi Nakamoto）</strong>的人/组织发表白皮书、2009 年 1 月正式上线的第一个加密货币。至今无人知道中本聪是谁，他在 2010 年后销声匿迹，且据估计从未动用过自己挖出的约 100 万枚比特币。</p>\n<p><strong>总量恒定：</strong> 比特币总量上限为 <strong>2100 万枚</strong>，由代码写死，没有任何人或机构可以增发。目前已挖出约 1900 万+枚（超过 90%）。</p>\n<p><strong>减半机制（Halving）：</strong> 矿工每打包一个区块的奖励，大约每 4 年减半一次（从 50 BTC → 25 → 12.5 → 6.25 → 3.125……）。这意味着新币产出速度不断下降，直到约 2140 年挖完。<strong>减半 = 新增供给减少</strong>，历史上有三次减半后都出现过大幅上涨（但不保证未来重复）。</p>\n<p><strong>数字黄金的定位：</strong> 比特币不是为日常支付设计的（交易慢、手续费波动大），它的核心价值主张是<strong>稀缺 + 抗审查 + 全球流通</strong>，对标黄金：总量有限、需要\"挖矿\"获得、被部分人用作价值储藏和对冲法币贬值的工具。</p>\n<h4>举例说明</h4>\n<ul><li>黄金：地球总量有限、开采越来越难 → 比特币：2100 万上限、减半使挖矿越来越难</li><li>你持有 BTC，不需要任何人的许可就能在全球任何角落转移它——这是黄金和法币都做不到的</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"比特币已经涨了几万倍，现在买没意义\" → 涨跌幅大恰恰说明风险大，和\"有没有意义\"是两回事，没人能预测价格</li><li>❌ \"比特币是匿名的\" → 比特币是<strong>假名</strong>的，所有交易公开可查，只是地址不直接绑定身份；通过链上分析可以追踪</li><li>❌ \"比特币会被复制，所以不值钱\" → 复制代码很容易（已出现上万个\"山寨币\"），但复制不了 16 年运行历史、共识和网络效应</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">中本聪</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Satoshi Nakamoto</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">减半</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Halving</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">聪（最小单位）</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Satoshi（1 BTC = 1 亿聪）</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">数字黄金</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Digital Gold</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">白皮书</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Whitepaper</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>比特币 2009 年由中本聪创立，身份至今成谜</li><li>2100 万上限 + 每 4 年减半，构成\"程序化的稀缺\"</li><li>定位是\"数字黄金\"（价值储藏），不是日常支付工具</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：比特币总量上限是？</strong></p>\n<ul><li>A. 1 亿枚</li><li>B. 2100 万枚</li><li>C. 没有上限</li><li>D. 由矿工投票决定</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：2100 万枚由代码写死，这是比特币\"稀缺性\"故事的核心。</p>\n</details>\n<p><strong>2. 判断题：比特币是匿名货币，交易完全无法追踪。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：比特币是假名制，交易记录全部公开，专业链上分析可以追踪资金去向。</p>\n</details>\n<p><strong>3. 选择题：\"减半\"指的是？</strong></p>\n<ul><li>A. 比特币价格减半</li><li>B. 矿工出块奖励减半</li><li>C. 交易手续费减半</li><li>D. 全网算力减半</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：减半指矿工打包新区块的奖励每约 4 年减半，新币产出速度随之下降。</p>\n</details>\n<p>---</p>\n<p><a href=\"02-blockchain\" style=\"color:#4dd0e1\">上一节：区块链</a> | <a href=\"04-ethereum\" style=\"color:#4dd0e1\">下一节：以太坊</a></p>",
    "quiz": [
     {
      "q": "以太坊相对比特币最大的创新是？",
      "opts": [
       "总量更少",
       "智能合约——链上可运行程序",
       "交易速度完全一样",
       "创始人更年轻"
      ],
      "a": 1,
      "exp": "智能合约让区块链从\"记账工具\"升级为\"应用平台\"，DeFi、NFT 都建立其上。"
     }
    ]
   },
   {
    "id": "s1-04-ethereum",
    "title": "第 4 节：以太坊",
    "dur": "约 40 分钟",
    "intro": "以太坊（Ethereum, ETH） 由 Vitalik Buterin（V 神）等人于 2015 年推出。如果说比特币是\"数字黄金\"，以太",
    "content": "<h4>本节目标</h4>\n<ul><li>理解以太坊和比特币的核心区别</li><li>理解\"智能合约\"是什么</li><li>知道 Gas 费和 ERC-20 代币</li></ul>\n<h4>核心概念</h4>\n<p><strong>以太坊（Ethereum, ETH）</strong> 由 Vitalik Buterin（V 神）等人于 2015 年推出。如果说比特币是\"数字黄金\"，以太坊就是\"<strong>世界计算机</strong>\"——它不仅记录转账，还能运行程序。</p>\n<p><strong>智能合约（Smart Contract）：</strong> 一段部署在区块链上的程序，\"代码即法律\"。一旦部署，条件满足就自动执行，没人能阻止、篡改或赖账。例如：写一个\"打赌程序\"，约定某队赢球就把钱转给 A，否则转给 B——结果一公布，程序自动执行，不需要信任任何中间人。</p>\n<p><strong>Gas（手续费）：</strong> 在以太坊上执行任何操作（转账、运行合约）都要支付手续费，叫 Gas 费，用 ETH 支付。就像汽车要烧油。网络拥堵时 Gas 费会暴涨。</p>\n<p><strong>ERC-20 代币：</strong> 以太坊的一个代币标准。任何人都可以照这个标准发自己的代币，几分钟就能创造一个\"币\"——这也是市面上绝大部分\"山寨币\"的来源。注意：<strong>发币容易，有价值很难</strong>，绝大多数代币最终会归零。</p>\n<p><strong>以太坊的意义：</strong> 它把区块链从\"记账工具\"变成了\"应用平台\"，DeFi、NFT 都诞生在以太坊生态。</p>\n<h4>举例说明</h4>\n<ul><li>比特币像一台只支持\"转账\"功能的计算器；以太坊像一台能装各种 App 的智能手机</li><li>你在 Uniswap 上换币，背后就是智能合约自动完成：扣你的 A 币、算汇率、给你 B 币，全程无人工干预</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"以太坊是比特币 2.0\" → 两者目标不同：BTC 主打价值储藏，ETH 主打应用平台</li><li>❌ \"ETH 没有上限所以无限增发\" → ETH 每年新增率很低（近年因销毁机制一度接近通缩）</li><li>❌ \"智能合约 = 法律合同\" → 它只是自动执行的代码，代码有 bug 照样会被黑客利用（历史上造成过巨额损失）</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">智能合约</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Smart Contract</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Gas 费</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Gas Fee</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">ERC-20</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">以太坊代币标准</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">去中心化应用</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">DApp（Decentralized App）</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">虚拟机</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">EVM（Ethereum Virtual Machine）</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>比特币是\"数字黄金\"，以太坊是\"世界计算机\"</li><li>智能合约 = 部署在链上的自动执行程序</li><li>用 ETH 付 Gas 费；发币容易，有价值难</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：智能合约最准确的定义是？</strong></p>\n<ul><li>A. 律师起草的链下合同</li><li>B. 部署在区块链上、条件满足自动执行的程序</li><li>C. 交易所的撮合引擎</li><li>D. 挖矿软件</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：智能合约是链上代码，特点是部署后自动执行、不可篡改、无需信任中间人。</p>\n</details>\n<p><strong>2. 判断题：ERC-20 是以太坊官方发行的代币。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：ERC-20 只是一个技术标准（格式约定），任何人都能按它发行自己的代币。</p>\n</details>\n<p><strong>3. 选择题：Gas 费的作用是？</strong></p>\n<ul><li>A. 给开发者的捐款</li><li>B. 支付以太坊网络执行操作的成本，防止垃圾交易</li><li>C. 政府收的税</li><li>D. 交易所的手续费</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：Gas 是执行操作的成本，付给维护网络的矿工/验证者，同时防止恶意刷量。</p>\n</details>\n<p>---</p>\n<p><a href=\"03-bitcoin\" style=\"color:#4dd0e1\">上一节：比特币</a> | <a href=\"05-wallet\" style=\"color:#4dd0e1\">下一节：钱包</a></p>",
    "quiz": [
     {
      "q": "关于助记词，下列说法正确的是？",
      "opts": [
       "可以截图存手机",
       "是钱包的\"总根\"，泄露等于交出全部资产",
       "丢失后可以找客服重置",
       "每个地址对应一个独立助记词"
      ],
      "a": 1,
      "exp": "助记词可派生出钱包内所有私钥，泄露即失去全部资产；丢失无法找回，没有客服。"
     }
    ]
   },
   {
    "id": "s1-05-wallet",
    "title": "第 5 节：钱包",
    "dur": "约 50 分钟",
    "intro": "最重要的认知：钱包里装的不是你的币，而是你的\"钥匙\"。 你的资产记录在区块链上；钱包只是保存私钥、帮你签名交易的工具。私钥 = 资产的唯一控",
    "content": "<h4>本节目标</h4>\n<ul><li>理解\"币不在钱包里，币在链上\"</li><li>区分托管钱包和非托管钱包</li><li>掌握助记词、私钥、地址的关系</li></ul>\n<h4>核心概念</h4>\n<p><strong>最重要的认知：钱包里装的不是你的币，而是你的\"钥匙\"。</strong> 你的资产记录在区块链上；钱包只是保存<strong>私钥</strong>、帮你签名交易的工具。私钥 = 资产的唯一控制权，谁拿到私钥谁就拥有资产。</p>\n<p>三个关键概念，层级从大到小：</p>\n<ol><li><strong>助记词（Mnemonic / 恢复短语）</strong>：通常是 12 或 24 个英文单词，是钱包的\"总根\"。输入助记词可以在任何兼容钱包里恢复你所有的账户和资产。</li><li><strong>私钥（Private Key）</strong>：单个账户的控制密码，由助记词派生。</li><li><strong>地址（Address）</strong>：由私钥算出的公开\"收款账号\"，可以随便给人看。</li></ol>\n<p><strong>托管 vs 非托管：</strong></p>\n<ul><li><strong>托管钱包</strong>：币放在交易所等平台，平台掌握私钥（你的钱本质上是平台欠你的记录）。方便，但平台跑路/被盗你会损失——\"Not your keys, not your coins\"。</li><li><strong>非托管钱包</strong>（如 MetaMask、硬件钱包）：私钥在自己手里，完全自主，但丢了助记词就永久失去资产，没有任何人能帮你找回。</li></ul>\n<p><strong>热钱包 vs 冷钱包：</strong></p>\n<ul><li>热钱包：联网（手机 App、浏览器插件），方便但暴露给网络攻击</li><li>冷钱包：离线（硬件钱包、纸钱包），最安全，适合存大额</li></ul>\n<h4>举例说明</h4>\n<ul><li>助记词像你家的<strong>总钥匙串</strong>，私钥是某一扇门的钥匙，地址是你家的<strong>门牌号</strong>（可以公开，方便别人来\"送钱\"）</li><li>把币放交易所 ≈ 把钱存银行；用非托管钱包 ≈ 自己把现金藏在保险柜——自由，但钥匙丢了就是真丢了</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"把钱包 App 卸载了，币就没了\" → 币在链上，用助记词随时能恢复</li><li>❌ \"助记词截图存手机里很方便\" → 手机相册会上传云备份，等于把钥匙交给了黑客</li><li>❌ \"地址泄露了资产就危险了\" → 地址公开没关系，私钥/助记词才必须保密</li><li>❌ \"交易所够大就绝对安全\" → 历史上 FTX、Mt.Gox 等大平台都暴雷过</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">助记词</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Mnemonic / Seed Phrase</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">私钥</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Private Key</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">公钥</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Public Key</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">地址</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Address</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">托管钱包</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Custodial Wallet</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">非托管钱包</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Non-custodial Wallet</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">硬件钱包</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Hardware Wallet</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">硬件钱包助记词</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Recovery Phrase</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>币在链上，钱包只是保存钥匙（私钥/助记词）的工具</li><li>助记词 &gt; 私钥 &gt; 地址；前两个绝对保密，地址可公开</li><li>托管求方便，非托管求自主；大额用冷钱包</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 判断题：卸载钱包 App 后，只要助记词还在，资产就能找回来。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：正确 解析：资产记录在链上，助记词可以在任何兼容钱包中恢复全部账户。</p>\n</details>\n<p><strong>2. 选择题：以下哪个信息可以安全公开？</strong></p>\n<ul><li>A. 助记词</li><li>B. 私钥</li><li>C. 钱包地址</li><li>D. Keystore 文件密码</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：C 解析：地址只是收款账号；助记词、私钥、密码任何一个泄露都可能导致资产被盗。</p>\n</details>\n<p><strong>3. 选择题：\"Not your keys, not your coins\" 这句话强调？</strong></p>\n<ul><li>A. 要用复杂的密码</li><li>B. 私钥不在自己手里，资产就不真正属于你</li><li>C. 要多买几个硬件钱包</li><li>D. 不要告诉别人你有多少币</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：托管平台掌握私钥，你的\"资产\"只是平台的欠条，平台出问题你无法控制。</p>\n</details>\n<p>---</p>\n<p><a href=\"04-ethereum\" style=\"color:#4dd0e1\">上一节：以太坊</a> | <a href=\"06-exchange\" style=\"color:#4dd0e1\">下一节：交易所</a></p>",
    "quiz": [
     {
      "q": "USDT 与 UST 的本质区别是？",
      "opts": [
       "名字不同，机制一样",
       "USDT 靠法币储备，UST 靠算法无抵押",
       "UST 更安全",
       "USDT 是算法稳定币"
      ],
      "a": 1,
      "exp": "USDT 是法币抵押型；UST 是算法稳定币，2022 年脱锚崩盘。"
     }
    ]
   },
   {
    "id": "s1-06-exchange",
    "title": "第 6 节：交易所",
    "dur": "约 40 分钟",
    "intro": "交易所是买卖加密货币的平台，类似\"币的股票交易所\"。你可以用人民币（通过 OTC）或 USDT 买入 BTC、ETH 等，也可以做币币兑换。",
    "content": "<h4>本节目标</h4>\n<ul><li>知道交易所是干什么的</li><li>区分中心化交易所（CEX）和去中心化交易所（DEX）</li><li>了解选交易所的基本标准</li></ul>\n<h4>核心概念</h4>\n<p><strong>交易所</strong>是买卖加密货币的平台，类似\"币的股票交易所\"。你可以用人民币（通过 OTC）或 USDT 买入 BTC、ETH 等，也可以做币币兑换。</p>\n<p><strong>中心化交易所（CEX）：</strong> 有公司运营（如币安、OKX、Coinbase），你注册账号、实名认证，币托管在平台。特点：撮合快、流动性好、有客服；缺点：平台跑路/被黑/冻结账户的风险，即\"托管风险\"。</p>\n<p><strong>去中心化交易所（DEX）：</strong> 没有公司，纯粹由智能合约撮合（如 Uniswap）。你用自己的钱包直接交易，币不经过任何平台。特点：无托管风险、无需注册；缺点：手续费（Gas）可能高、操作门槛略高、有\"滑点\"、可能遇到假币。</p>\n<p><strong>常见交易类型：</strong></p>\n<ul><li><strong>现货（Spot）</strong>：直接买卖币，一手交钱一手交货</li><li><strong>合约/杠杆（Futures）</strong>：加杠杆押涨跌，可能爆仓——新手<strong>坚决远离</strong></li><li><strong>OTC/C2C</strong>：用人民币直接和别人买卖 USDT，平台做担保</li></ul>\n<p><strong>选交易所的参考标准：</strong> 成立时间、口碑、资金安全记录（是否被黑过/跑路过）、流动性（交易量）、提币是否正常、合规情况。</p>\n<h4>举例说明</h4>\n<ul><li>在 CEX 买币：注册 → 实名 → C2C 买 USDT → 用 USDT 买 BTC，全程平台托管</li><li>在 DEX 买币：打开 Uniswap → 连接 MetaMask → 用 ETH 换其他代币，币一直在自己钱包里</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"大交易所就 100% 安全\" → FTX 暴雷前也是\"大交易所\"。任何托管都有风险，大额应提走自管</li><li>❌ \"DEX 完全无风险\" → 智能合约可能有漏洞、可能买到假币（同名代币），需要自己辨别</li><li>❌ \"合约杠杆和现货差不多，只是快一点\" → 杠杆会放大亏损，高杠杆下一次反向波动就爆仓归零</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">中心化交易所</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">CEX（Centralized Exchange）</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">去中心化交易所</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">DEX（Decentralized Exchange）</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">流动性</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Liquidity</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">滑点</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Slippage</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">挂单/吃单</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Maker / Taker</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">KYC</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">实名认证（Know Your Customer）</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>CEX 像\"币的银行+券商\"，方便但有托管风险</li><li>DEX 纯代码撮合，无托管但门槛和风险不同</li><li>新手只用现货，远离合约杠杆</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：DEX 和 CEX 最本质的区别是？</strong></p>\n<ul><li>A. DEX 手续费一定更低</li><li>B. DEX 交易时资产不离开自己的钱包，无托管风险</li><li>C. DEX 只能买比特币</li><li>D. DEX 不需要联网</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：DEX 由智能合约撮合，资产全程自控；CEX 需要把币托管给平台。</p>\n</details>\n<p><strong>2. 判断题：把大额资产长期放在交易所是安全的最佳实践。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：交易所存在跑路、被黑、冻结等托管风险，大额资产应转入自管钱包（冷钱包最佳）。</p>\n</details>\n<p><strong>3. 选择题：新手最应该避免的交易类型是？</strong></p>\n<ul><li>A. 现货</li><li>B. C2C 买 USDT</li><li>C. 高杠杆合约</li><li>D. 定期定额买入</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：C 解析：高杠杆合约会放大亏损，一次大幅反向波动即可导致爆仓，新手不具备风控能力前必须远离。</p>\n</details>\n<p>---</p>\n<p><a href=\"05-wallet\" style=\"color:#4dd0e1\">上一节：钱包</a> | <a href=\"07-onchain\" style=\"color:#4dd0e1\">下一节：链上</a></p>",
    "quiz": [
     {
      "q": "把币长期放在交易所，资产就真正属于自己。",
      "opts": [
       "正确",
       "错误"
      ],
      "a": 1,
      "exp": "私钥在平台手里，你的资产本质是平台欠条，存在托管风险（Not your keys, not your coins）。"
     }
    ]
   },
   {
    "id": "s1-07-onchain",
    "title": "第 7 节：链上",
    "dur": "约 40 分钟",
    "intro": "\"链上\"（On-chain） 指的是发生在区块链主网账本上的交易和操作。与之相对的是\"链下\"（Off-chain，比如交易所内部的记账——你",
    "content": "<h4>本节目标</h4>\n<ul><li>知道\"链上数据\"为什么公开透明</li><li>会看区块浏览器的基础信息</li><li>理解链上操作和交易所操作的区别</li></ul>\n<h4>核心概念</h4>\n<p><strong>\"链上\"（On-chain）</strong> 指的是发生在区块链主网账本上的交易和操作。与之相对的是\"链下\"（Off-chain，比如交易所内部的记账——你在币安内部转账，其实只在币安数据库里改个数，并没有上链）。</p>\n<p><strong>公开透明是公链的基本属性：</strong> 比特币、以太坊等公链的<strong>每一笔交易都永久公开</strong>，任何人都可以查。这就是\"区块浏览器\"存在的意义。</p>\n<p><strong>区块浏览器（Block Explorer）</strong>：查询链上数据的网站，例如：</p>\n<ul><li>比特币：blockstream.info、btc.com</li><li>以太坊：etherscan.io</li></ul>\n<p>能查到什么：</p>\n<ol><li><strong>交易（Transaction / Tx）</strong>：某笔转账的发送方、接收方、金额、手续费、时间、确认数</li><li><strong>地址（Address）</strong>：某个钱包的全部历史交易和当前余额</li><li><strong>区块（Block）</strong>：每一页账本的打包者、包含的交易、时间</li><li><strong>代币合约</strong>：某个代币的发行量、持有人分布</li></ol>\n<p><strong>确认数：</strong> 交易被打包进区块后，后面每新出一个区块就多一次确认。确认数越多，交易越不可逆转（比特币一般认为 6 个确认后基本安全）。</p>\n<h4>举例说明</h4>\n<ul><li>朋友说他给你转了 0.1 BTC，你不用信他——把交易哈希（TxID）输进区块浏览器，金额、时间、确认数一目了然，<strong>这就是\"去信任化\"</strong></li><li>交易所显示\"提币成功\"但钱没到钱包？用 TxID 上链查询，看是卡在交易所没发出，还是在链上确认中</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"链上交易可以隐藏\" → 公链交易全部公开；追求隐私的门罗币（XMR）等是特例，且很多交易所已下架</li><li>❌ \"转错了地址能找客服退回\" → 链上交易不可逆，转错就是永久损失，没有任何客服</li><li>❌ \"交易所内的转账记录就是链上记录\" → 交易所内部转账只是它自己数据库的改动</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">链上 / 链下</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">On-chain / Off-chain</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">区块浏览器</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Block Explorer</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">交易哈希</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">TxID / Transaction Hash</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">确认数</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Confirmations</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Gas</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">链上操作手续费</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>公链的一切交易公开透明、永久可查、不可撤销</li><li>区块浏览器是链上世界的\"搜索引擎\"，学会用 TxID 自查交易</li><li>链上操作前务必仔细核对地址——没有撤回键</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：如何验证朋友是否真的给你转了 0.1 BTC？</strong></p>\n<ul><li>A. 看他的转账截图</li><li>B. 把 TxID 输入区块浏览器查询</li><li>C. 打电话问交易所客服</li><li>D. 等自己的钱包显示余额</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：链上数据公开透明，区块浏览器直接验证，不需要信任任何中间人。</p>\n</details>\n<p><strong>2. 判断题：链上转账转错地址后，可以联系矿工撤回交易。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：区块链交易一旦确认就不可逆，任何人和机构都无法撤回。</p>\n</details>\n<p><strong>3. 选择题：\"确认数\"的含义是？</strong></p>\n<ul><li>A. 交易所审核通过的次数</li><li>B. 交易所在多少个平台同步</li><li>C. 交易被打包后，其后新增区块的数量</li><li>D. 收款方点头的次数</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：C 解析：确认数指交易所在区块之后又叠加了多少个新区块，越多越难被重组，交易越安全。</p>\n</details>\n<p>---</p>\n<p><a href=\"06-exchange\" style=\"color:#4dd0e1\">上一节：交易所</a> | <a href=\"08-stablecoin\" style=\"color:#4dd0e1\">下一节：稳定币</a></p>",
    "quiz": [
     {
      "q": "链上交易一旦确认就无法撤销。",
      "opts": [
       "正确",
       "错误"
      ],
      "a": 0,
      "exp": "区块链交易不可逆、无客服，转错地址就是永久损失，所以每次操作前必须核对地址。"
     }
    ]
   },
   {
    "id": "s1-08-stablecoin",
    "title": "第 8 节：稳定币",
    "dur": "约 40 分钟",
    "intro": "稳定币（Stablecoin）是锚定法币（通常是美元）的加密货币，目标是 1 枚 ≈ 1 美元。因为 BTC、ETH 价格波动太大，市场需要",
    "content": "<h4>本节目标</h4>\n<ul><li>理解稳定币为什么存在</li><li>区分三种稳定币：法币抵押、加密抵押、算法稳定</li><li>认识 USDT、USDC 及其风险</li></ul>\n<h4>核心概念</h4>\n<p><strong>稳定币（Stablecoin）</strong>是锚定法币（通常是美元）的加密货币，目标是 1 枚 ≈ 1 美元。因为 BTC、ETH 价格波动太大，市场需要一个\"链上的美元\"来做计价和避险——几乎所有币的报价都是\"某某币值多少 USDT\"。</p>\n<p><strong>三种主流机制：</strong></p>\n<ol><li><strong>法币抵押型</strong>：公司持有美元储备，发行等量代币。代表：<strong>USDT（Tether）</strong>、<strong>USDC</strong>。简单直接，但风险在\"公司是否真的足额储备\"。</li><li><strong>加密资产抵押型</strong>：用超额加密货币做抵押发行稳定币。代表：<strong>DAI</strong>。更去中心化，但抵押品本身波动大，需要超额抵押（如抵押 150 美元的 ETH 借出 100 枚 DAI）。</li><li><strong>算法稳定币</strong>：不靠抵押，靠算法调节供需维持锚定。代表案例：<strong>UST（Luna）2022 年崩盘</strong>，几天内从 1 美元跌到几乎归零，数百亿美元蒸发。此类机制已被普遍认为高风险。</li></ol>\n<p><strong>为什么需要它：</strong> 币价暴跌时换成稳定币\"空仓避险\"；在链上需要一个稳定计价单位；跨境转账美元等价物。</p>\n<h4>举例说明</h4>\n<ul><li>你判断市场要跌，把 BTC 换成 USDT → 币价跌了 30%，但你持有的 USDT 价值没变</li><li>2022 年 5 月 UST 脱锚：看似 1 美元的稳定币跌到 0.05 美元，持有者的\"稳定资产\"瞬间缩水 95%</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"稳定币永远等于 1 美元\" → 极端情况下会脱锚（de-peg），UST 就是教训，USDT 历史上也短暂脱锚过</li><li>❌ \"USDT 和 USDC 完全没区别\" → USDT 储备透明度长期受质疑、使用最广；USDC 合规性更好但曾冻结过地址；两者风险画像不同</li><li>❌ \"算法稳定币是高科技，更先进\" → 恰恰相反，无抵押的算法稳定机制已被市场多次证伪</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">稳定币</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Stablecoin</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">锚定</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Peg</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">脱锚</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">De-peg</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">储备</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Reserve</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">超额抵押</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Over-collateralization</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>稳定币 = 链上的美元，是币圈的计价单位和避险工具</li><li>USDT/USDC 靠美元储备，DAI 靠加密资产超额抵押，算法稳定币已被证伪</li><li>\"稳定\"是相对的，极端行情下也会脱锚</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：USDT 属于哪种稳定币？</strong></p>\n<ul><li>A. 算法稳定币</li><li>B. 法币抵押型稳定币</li><li>C. 加密资产抵押型</li><li>D. 无锚定自由浮动币</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：USDT 由 Tether 公司发行，声称每枚有 1 美元储备支撑，属于法币抵押型。</p>\n</details>\n<p><strong>2. 判断题：算法稳定币因为有先进的机制，比抵押型稳定币更安全。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：算法稳定币无真实抵押，依赖信心和供需调节，UST 崩盘证明了其极端脆弱性。</p>\n</details>\n<p><strong>3. 选择题：市场大跌时，把 BTC 换成 USDT 的操作通常叫？</strong></p>\n<ul><li>A. 满仓</li><li>B. 空仓避险</li><li>C. 定投</li><li>D. 搬砖</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：换成稳定币相当于退出波动资产、持有\"链上现金\"，等待机会，这就是空仓避险。</p>\n</details>\n<p>---</p>\n<p><a href=\"07-onchain\" style=\"color:#4dd0e1\">上一节：链上</a> | <a href=\"09-security\" style=\"color:#4dd0e1\">下一节：安全</a></p>",
    "quiz": [
     {
      "q": "公链上的交易记录任何人都可以查询。",
      "opts": [
       "正确",
       "错误"
      ],
      "a": 0,
      "exp": "公开透明是公链的基本属性，区块浏览器可以查到任何地址和交易的历史。"
     }
    ]
   },
   {
    "id": "s1-09-security",
    "title": "第 9 节：安全",
    "dur": "约 50 分钟",
    "intro": "币圈的安全问题和传统金融完全不同：交易不可逆、没有客服、没有存款保险，一旦出事损失几乎无法挽回。因此安全是第一课，也是终身课。",
    "content": "<h4>本节目标</h4>\n<ul><li>认识币圈最常见的骗局和攻击方式</li><li>掌握资产安全的基本操作清单</li><li>建立\"怀疑一切\"的安全心态</li></ul>\n<h4>核心概念</h4>\n<p>币圈的安全问题和传统金融完全不同：<strong>交易不可逆、没有客服、没有存款保险</strong>，一旦出事损失几乎无法挽回。因此安全是第一课，也是终身课。</p>\n<p><strong>头号风险：私钥/助记词泄露。</strong></p>\n<ul><li>绝不把助记词输入任何网站、发给任何人、存云端或相册</li><li>抄写在纸上/金属板上，物理保存，最好备份两份分开存放</li><li>任何让你\"验证助记词\"\"同步钱包\"的网站 100% 是骗局</li></ul>\n<p><strong>常见骗局清单：</strong></p>\n<ol><li><strong>钓鱼网站/假 App</strong>：仿冒交易所、钱包官网，骗你输入助记词。只从官方渠道下载，仔细检查网址</li><li><strong>假客服</strong>：主动联系你的\"客服\"\"老师\"全是骗子，真平台不会私聊你要验证码或助记词</li><li><strong>杀猪盘/带单骗局</strong>：网恋/群聊带你\"投资\"，前期让你小赚，充值大额后无法提现</li><li><strong>空投骗局</strong>：免费领代币，授权时让你签恶意合约，直接转走钱包资产</li><li><strong>貔貅盘（假币）</strong>：只能买不能卖的代币，价格单边\"上涨\"吸引接盘</li><li><strong>签名/授权钓鱼</strong>：一个看似无害的签名请求，实际授权对方转走你的代币——<strong>签名前必须看清内容</strong></li></ol>\n<p><strong>实操安全清单：</strong></p>\n<ul><li>大额资产用硬件钱包/冷钱包</li><li>交易所账户开谷歌验证器（2FA），不用短信验证</li><li>小额\"热钱包\"单独用一个，和大额资产隔离</li><li>电脑装杀毒软件，不点陌生链接，不用来路不明的\"破解版\"软件</li><li>交易所提币前小额测试一笔</li></ul>\n<h4>举例说明</h4>\n<ul><li>有人在群里发\"某新币空投，点击领取\"，你连接钱包签名后，钱包里的 USDT 立刻被转走——你签的不是\"领取\"，是\"授权对方花你的钱\"</li><li>有人收到\"交易所客服\"私信，说账户异常需要\"验证助记词\"，输入后 10 秒内钱包归零</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"我金额小，没人盯上我\" → 骗子是自动化的，批量扫二维码、批量发钓鱼链接，小额一样收</li><li>❌ \"用苹果手机/不装杀毒就安全\" → 钓鱼靠的是骗你主动输入助记词，与系统无关</li><li>❌ \"先小额试试，靠谱再加大投入\" → 杀猪盘正是利用这个心理，前期小额让你提现为的就是钓大鱼</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">钓鱼</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Phishing</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">授权</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Approval / Authorization</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">空投</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Airdrop</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">双因素认证</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">2FA</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">硬件钱包</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Hardware Wallet</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">冷存储</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Cold Storage</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>交易不可逆 + 无客服 = 安全意识必须放在收益之前</li><li>助记词是绝对红线，任何索要它的人都是骗子</li><li>陌生链接不点、陌生签名不签、陌生客服不信</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：以下哪种做法最安全？</strong></p>\n<ul><li>A. 助记词截图存手机相册</li><li>B. 助记词手抄在纸上并物理妥善保存</li><li>C. 助记词发给家人邮箱备份</li><li>D. 助记词存微信收藏</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：任何联网存储都可能被黑客获取，物理离线抄写是最基本的安全做法。</p>\n</details>\n<p><strong>2. 判断题：交易所官方客服会通过私信向你索要助记词来验证账户。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：任何正规平台都不会索要助记词。主动私聊你的\"客服\" 100% 是骗子。</p>\n</details>\n<p><strong>3. 选择题：连接钱包后弹出一个签名请求，你应该？</strong></p>\n<ul><li>A. 立即签名，以免错过机会</li><li>B. 看清签名内容，确认是自己在正规网站发起的操作再签</li><li>C. 只要网站看起来漂亮就可以签</li><li>D. 先签名，出问题再找客服</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：恶意签名是盗币的主要手段之一，签名即授权，必须在确认操作来源和内容后才能签。</p>\n</details>\n<p>---</p>\n<p><a href=\"08-stablecoin\" style=\"color:#4dd0e1\">上一节：稳定币</a> | <a href=\"10-quiz\" style=\"color:#4dd0e1\">下一节：阶段测验</a></p>",
    "quiz": [
     {
      "q": "只要项目方承诺高收益，就可以放心授权钱包参与。",
      "opts": [
       "正确",
       "错误"
      ],
      "a": 1,
      "exp": "高收益承诺是最典型的骗局信号；授权恶意合约可直接导致资产被盗。"
     }
    ]
   }
  ],
  "exam": true
 },
 {
  "id": "s2",
  "num": "02",
  "title": "交易基础",
  "en": "TRADING BASICS",
  "risky": true,
  "desc": "",
  "chapters": [
   {
    "id": "s2-01-spot",
    "title": "第 1 节：现货交易",
    "dur": "约 40 分钟",
    "intro": "现货（Spot）就是\"一手交钱一手交货\"：你付 USDT 立即得到 BTC，币真实地进入你的账户。这是唯一适合新手和中长期投资者的交易方式。",
    "content": "<h4>本节目标</h4>\n<ul><li>理解现货交易的完整流程</li><li>掌握限价单和市价单的区别</li><li>知道买入后如何托管和卖出</li></ul>\n<h4>核心概念</h4>\n<p><strong>现货（Spot）</strong>就是\"一手交钱一手交货\"：你付 USDT 立即得到 BTC，币真实地进入你的账户。这是唯一适合新手和中长期投资者的交易方式。</p>\n<p><strong>下单的两种基本方式：</strong></p>\n<ol><li><strong>市价单（Market Order）</strong>：按当前市场价格立即成交。优点是快，缺点是价格可能滑——尤其在市场剧烈波动或深度不足时。</li><li><strong>限价单（Limit Order）</strong>：你指定一个价格挂出去，等市场价格达到才成交。例如 BTC 现价 10 万 USDT，你挂 9.5 万买入——可能成交（跌到了），也可能一直不成交。优点是能控制成本，缺点是不保证成交。</li></ol>\n<p><strong>完整流程（以 CEX 为例）：</strong></p>\n<ol><li>C2C 区用法币买入 USDT</li><li>用 USDT 在现货区买入 BTC/ETH 等（先小额试单）</li><li>资产托管决策：小额可留交易所，大额建议提币到自己的钱包</li><li>卖出时反向操作：卖成 USDT → C2C 卖出换法币</li></ol>\n<p><strong>交易对的概念：</strong> 报价方式如 BTC/USDT，意思是\"1 个 BTC 值多少 USDT\"。买 BTC/USDT = 花 USDT 买 BTC。</p>\n<h4>举例说明</h4>\n<ul><li>你想立刻买入：用市价单，10 万 USDT 的 BTC 秒到账，但成交价可能是 10.01 万</li><li>你想等回调：挂限价单 9.5 万，然后关掉 App 去睡觉，跌到自动成交，买不到也不亏</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"市价单一定比限价单好\" → 牛市急涨时用市价单买入可能滑点严重，能等就用限价</li><li>❌ \"买了现货放着就不用管了\" → 托管在交易所仍要关注平台风险，大额记得提走</li><li>❌ \"现货也会爆仓\" → 纯现货不借债就不会爆仓（除非你用了质押借贷），跌再多币还在；会爆仓的都是加了杠杆的合约</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">现货</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Spot</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">市价单</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Market Order</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">限价单</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Limit Order</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">交易对</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Trading Pair</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">深度</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Depth / Order Book</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">滑点</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Slippage</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">定投</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">DCA（Dollar-Cost Averaging）</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>现货 = 直接买卖币，无杠杆不会爆仓，新手唯一推荐的交易方式</li><li>市价单求快，限价单求价</li><li>流程：C2C 买 USDT → 现货买入 → （大额）提币自管 → 反向卖出</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：市价单和限价单的核心区别是？</strong></p>\n<ul><li>A. 市价单更便宜</li><li>B. 市价单立即按市场价成交；限价单挂指定价格，等成交</li><li>C. 限价单一定能成交</li><li>D. 没有区别</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：市价单保证成交不保证价格；限价单保证价格（如果成交）不保证成交。</p>\n</details>\n<p><strong>2. 判断题：纯现货交易（不借债、不加杠杆）也会因为价格下跌而爆仓。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：爆仓来自杠杆清算。纯现货没有负债，币永远在账户里，只是市值浮动。</p>\n</details>\n<p><strong>3. 选择题：新手第一次大额买入前，建议先做什么？</strong></p>\n<ul><li>A. 直接全仓市价买入</li><li>B. 先小额试单，跑通买入→提币→卖出的完整流程</li><li>C. 借钱买入摊低成本</li><li>D. 听群里老师喊单</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：先小额跑通全流程，验证交易所出入金、提币地址都正常，再加大金额。</p>\n</details>\n<p>---</p>\n<p><a href=\"../01-basics/\" style=\"color:#4dd0e1\">上一阶段：认知地基</a> | <a href=\"02-kline\" style=\"color:#4dd0e1\">下一节：K 线基础</a></p>",
    "quiz": [
     {
      "q": "限价单的特点是？",
      "opts": [
       "保证成交",
       "保证价格（如果成交），但不保证成交",
       "手续费最低",
       "只能卖不能买"
      ],
      "a": 1,
      "exp": "限价单挂指定价格等待成交，成交价格可控，但市场不触及该价就成交不了。"
     },
     {
      "q": "RSI 超过 70 就必须立刻卖出。",
      "opts": [
       "正确",
       "错误"
      ],
      "a": 1,
      "exp": "超买不等于反转，强趋势中 RSI 可长期维持高位，单独据此操作会过早下车。"
     }
    ]
   },
   {
    "id": "s2-02-kline",
    "title": "第 2 节：K 线基础",
    "dur": "约 40 分钟",
    "intro": "K 线（蜡烛图）记录一段时间内的四个价格：开盘价、收盘价、最高价、最低价。",
    "content": "<h4>本节目标</h4>\n<ul><li>看懂单根 K 线的四个价格</li><li>认识阳线、阴线和常见形态</li><li>理解时间周期（1分钟线/日线/周线）的含义</li></ul>\n<h4>核心概念</h4>\n<p><strong>K 线（蜡烛图）</strong>记录一段时间内的四个价格：<strong>开盘价、收盘价、最高价、最低价</strong>。</p>\n<ul><li><strong>阳线（红色/空心）</strong>：收盘价 &gt; 开盘价，这段时间涨了</li><li><strong>阴线（绿色/实心）</strong>：收盘价 &lt; 开盘价，这段时间跌了</li><li>实体部分：开盘与收盘之间的区间</li><li>上下影线：最高/最低价与实体之间的细线</li></ul>\n<p><strong>常见单根形态：</strong></p>\n<ul><li><strong>大阳线/大阴线</strong>：实体很长，说明多空一方力量明显占优</li><li><strong>十字星</strong>：开盘≈收盘，上下影线明显，说明多空僵持，常出现在趋势转折点</li><li><strong>锤子线</strong>： long 下影线 + 小实体（在下跌末端出现，可能见底）</li><li><strong>上吊线</strong>：形状同锤子线，但在上涨末端出现，可能见顶</li></ul>\n<p><strong>时间周期：</strong> 同一时刻可以看不同周期的 K 线——1 分钟线、15 分钟线、1 小时线、日线、周线。<strong>周期越大，信号越可靠，但反应越慢。</strong> 新手建议以日线为主：不被短期噪音干扰，也不用盯盘。</p>\n<p><strong>成交量：</strong> K 线下方柱子，表示这段时间成交了多少。价格是\"方向\"，成交量是\"动力\"——<strong>价涨量增</strong>比较健康；价涨量缩要警惕。</p>\n<h4>举例说明</h4>\n<ul><li>一根日线阳线：今天 BTC 开盘 9 万，最低 8.8 万，最高 9.3 万，收盘 9.2 万 → 今天总体上涨，盘中曾深跌但被买回（下影线说明下方有承接）</li><li>连续一周放量大阴线 → 抛压沉重，别急着\"抄底接飞刀\"</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"学会 K 线形态就能预测涨跌\" → K 线是历史轨迹的记录，不是水晶球；形态只是概率参考</li><li>❌ \"1 分钟线的信号和日线一样可靠\" → 周期越小噪音越多，小周期信号可靠性大幅下降</li><li>❌ \"看 K 线不用看成交量\" → 脱离成交量的价格信号经常失效</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">K 线 / 蜡烛图</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Candlestick Chart</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">开盘价 / 收盘价</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Open / Close</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">最高价 / 最低价</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">High / Low</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">阳线 / 阴线</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Bullish / Bearish Candle</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">上影线 / 下影线</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Upper / Lower Shadow</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">成交量</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Volume</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">时间周期</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Timeframe</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>K 线 = 开盘、收盘、最高、最低四个价格的可视化</li><li>先定周期再看图：新手以日线为主</li><li>价格看方向，成交量看动力，两者结合才有效</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：一根 K 线的实体部分代表什么？</strong></p>\n<ul><li>A. 最高价和最低价</li><li>B. 开盘价和收盘价之间的区间</li><li>C. 成交量的多少</li><li>D. 涨跌的百分比</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：实体是开盘到收盘的区间；上下影线才是最高/最低价延伸出来的部分。</p>\n</details>\n<p><strong>2. 判断题：时间周期越短的 K 线，给出的交易信号越可靠。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：短周期噪音大、可靠性低；周期越大信号越可靠但越滞后。新手应看日线。</p>\n</details>\n<p><strong>3. 选择题：\"价涨量缩\"通常提示？</strong></p>\n<ul><li>A. 上涨趋势动力不足，需警惕</li><li>B. 上涨非常健康</li><li>C. 马上要涨停</li><li>D. 与成交量无关</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：A 解析：价格上涨但成交量跟不上，说明参与资金减少，推动力不足，涨势可能难以持续。</p>\n</details>\n<p>---</p>\n<p><a href=\"01-spot\" style=\"color:#4dd0e1\">上一节：现货交易</a> | <a href=\"03-support\" style=\"color:#4dd0e1\">下一节：支撑与阻力</a></p>",
    "quiz": [
     {
      "q": "一根 K 线包含以下哪些价格？（多选）",
      "opts": [
       "开盘价",
       "收盘价",
       "最高价",
       "最低价"
      ],
      "a": 0,
      "exp": "K 线完整记录 OHLC 四个价格：开、收、高、低。"
     },
     {
      "q": "单笔交易的风险敞口建议控制在总资金的 1%–2% 以内。",
      "opts": [
       "正确",
       "错误"
      ],
      "a": 0,
      "exp": "这是风控的基本准则之一，能保证连续亏损后本金不受致命损伤。"
     }
    ]
   },
   {
    "id": "s2-03-support",
    "title": "第 3 节：支撑与阻力",
    "dur": "约 40 分钟",
    "intro": "支撑（Support）：价格下跌到某个区域时，买单集中出现，把价格\"托住\"不再下跌——像地板。 阻力（Resistance）：价格上涨到某个",
    "content": "<h4>本节目标</h4>\n<ul><li>理解支撑和阻力的概念</li><li>学会画出基本的支撑阻力线</li><li>理解\"突破\"和\"假突破\"</li></ul>\n<h4>核心概念</h4>\n<p><strong>支撑（Support）</strong>：价格下跌到某个区域时，买单集中出现，把价格\"托住\"不再下跌——像地板。 <strong>阻力（Resistance）</strong>：价格上涨到某个区域时，卖单集中出现，把价格\"压住\"不再上涨——像天花板。</p>\n<p><strong>它们为什么存在？</strong> 因为交易者有记忆：</p>\n<ul><li>跌到上次低点附近，上次没买的人会\"补票上车\"（买盘增加）</li><li>涨到上次高点附近，上次被套的人会\"解套卖出\"（卖盘增加）</li><li>整数关口（如 BTC 10 万美元）也有心理作用</li></ul>\n<p><strong>如何画：</strong></p>\n<ol><li>打开日线，找到价格多次触及就反弹的区域</li><li>用水平线标出（至少 2 次、最好 3 次以上的触点）</li><li>触点越多、时间跨度越长，该区域越重要</li></ol>\n<p><strong>角色互换原理</strong>：支撑被跌破后会变成阻力（套牢盘在等回本卖出）；阻力被突破后会变成支撑（踏空者在等回踩买入）。</p>\n<p><strong>突破与假突破：</strong></p>\n<ul><li><strong>真突破</strong>：价格放量、有力地越过关键位，且回踩站稳</li><li><strong>假突破（插针）</strong>：价格短暂刺破关键位后迅速收回，是经典的\"猎杀止损\"手法——新手最容易在这里亏钱</li></ul>\n<h4>举例说明</h4>\n<ul><li>BTC 三次跌到 8 万美元都反弹 → 8 万是强支撑；你可在 8 万附近挂单买入，止损设在 7.8 万下方</li><li>价格冲到 10 万回落、再冲再回落 → 10 万是强阻力；突破之前，冲到 10 万附近不轻易追多</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"支撑是精确的一个价格\" → 支撑阻力是一个<strong>区域</strong>，不是一条精确的线</li><li>❌ \"画得越密越专业\" → 线太多等于没有线，只标最重要的几个区域</li><li>❌ \"突破就立刻追进去\" → 突破后等回踩确认更稳；警惕无量假突破</li><li>❌ \"支撑永远不会破\" → 支撑是用来参考和设置止损的，不是信仰</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">支撑</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Support</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">阻力</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Resistance</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">突破</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Breakout</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">假突破</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Fakeout / Fake Breakout</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">回踩</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Retest / Pullback</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">插针</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Wick / Spike</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>支撑 = 地板，阻力 = 天花板，来自交易者的共同记忆</li><li>触点越多越有效；支撑跌破变阻力，阻力突破变支撑</li><li>警惕假突破：等回踩确认，把止损设在关键位外侧</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：支撑区域被有效跌破后，通常会变成？</strong></p>\n<ul><li>A. 更强的支撑</li><li>B. 阻力</li><li>C. 没有任何意义</li><li>D. 真空区</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：跌破支撑后，该区域被套的人等着回本卖出，形成新的卖压，即阻力。</p>\n</details>\n<p><strong>2. 判断题：支撑位是一个精确的价格点，差 1 美元都不算支撑。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：支撑阻力是区域而非精确点位，且有效性以触点次数和成交量来确认。</p>\n</details>\n<p><strong>3. 选择题：价格短暂刺破阻力后迅速跌回，这最可能是？</strong></p>\n<ul><li>A. 真突破，应立刻追多</li><li>B. 假突破（猎杀止损），应等回踩确认</li><li>C. 数据错误</li><li>D. 上涨信号更强了</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：快速刺破后收回是典型的假突破，专门触发追多者和止损单，此时应等有效突破回踩确认。</p>\n</details>\n<p>---</p>\n<p><a href=\"02-kline\" style=\"color:#4dd0e1\">上一节：K 线基础</a> | <a href=\"04-indicators\" style=\"color:#4dd0e1\">下一节：常用指标</a></p>",
    "quiz": [
     {
      "q": "价格突破阻力后回踩不破，通常被视为？",
      "opts": [
       "假突破",
       "有效突破的确认信号",
       "立即暴跌的信号",
       "随机噪音"
      ],
      "a": 1,
      "exp": "突破后回踩站稳（原阻力变支撑）是教科书式的有效突破确认。"
     },
     {
      "q": "锚定自己的买入价做决策（\"不回本不卖\"）是理性的。",
      "opts": [
       "正确",
       "错误"
      ],
      "a": 1,
      "exp": "市场不知道也不在乎你的成本价，决策应基于当前市场结构而非沉没成本。"
     }
    ]
   },
   {
    "id": "s2-04-indicators",
    "title": "第 4 节：常用指标",
    "dur": "约 40 分钟",
    "intro": "技术指标是用历史价格/成交量算出来的数学曲线，帮你把\"感觉\"量化。所有指标都是滞后的——它们描述过去，不预测未来。",
    "content": "<h4>本节目标</h4>\n<ul><li>知道指标分为趋势类和震荡类</li><li>掌握 MA、MACD、RSI、布林带的用法</li><li>理解\"指标是辅助，不是圣旨\"</li></ul>\n<h4>核心概念</h4>\n<p><strong>技术指标</strong>是用历史价格/成交量算出来的数学曲线，帮你把\"感觉\"量化。<strong>所有指标都是滞后的</strong>——它们描述过去，不预测未来。</p>\n<p><strong>趋势类指标（单边行情好用）：</strong></p>\n<ol><li><strong>MA（移动平均线）</strong>：N 天的平均价格连线。</li></ol>\n<p>- 价格在 MA 之上 = 多头占优；跌破 = 转弱</p>\n<p>- 常用：MA20（月线）、MA50、MA200</p>\n<p>- <strong>金叉/死叉</strong>：短均线上穿长均线（金叉，偏多）；下穿（死叉，偏空）</p>\n<ol><li><strong>MACD</strong>：由快线（DIF）、慢线（DEA）和柱组成。</li></ol>\n<p>- 金叉 / 死叉；柱体由负转正提示动能转变</p>\n<p>- <strong>背离</strong>：价格创新高但 MACD 不创新高 → 上涨动力衰竭的警示</p>\n<p><strong>震荡类指标（横盘行情好用）：</strong></p>\n<ol><li><strong>RSI（相对强弱）</strong>：0–100，衡量涨跌力量。</li></ol>\n<p>- &gt; 70 超买（可能回调）；&lt; 30 超卖（可能反弹）</p>\n<p>- 强趋势中 RSI 可以长期超买/超卖，<strong>不能单独作为反向操作依据</strong></p>\n<ol><li><strong>布林带（BOLL）</strong>：中轨是均线，上下轨是标准差的包络线。</li></ol>\n<p>- 收口（轨道变窄）→ 波动率极低，往往酝酿大行情</p>\n<p>- 开口 + 价格沿上轨运行 → 强趋势</p>\n<p><strong>使用原则：</strong> 指标互相印证（如 MA 定方向 + RSI 找入场点）；参数越少越简单越好；<strong>任何单一指标都会失效</strong>。</p>\n<h4>举例说明</h4>\n<ul><li>日线 MA50 持续向上，价格每次回踩 MA50 都反弹 → 趋势良好，回踩是买入参考区</li><li>价格连创新高，但 RSI 一波比一波低（顶背离）+ MACD 死叉 → 减仓警示信号</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"指标发出买入信号就一定会涨\" → 指标是概率工具，强趋势中震荡指标会反复\"失灵\"</li><li>❌ \"指标越多越好\" → 多个同源指标（都基于价格）堆在一起只会制造虚假信心</li><li>❌ \"用小周期指标做长线决策\" → 周期错配是新手亏损的常见原因</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">移动平均线</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">MA（Moving Average）</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">金叉 / 死叉</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Golden Cross / Death Cross</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">指数平滑异同平均线</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">MACD</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">相对强弱指数</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">RSI</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">布林带</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Bollinger Bands</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">背离</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Divergence</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">超买 / 超卖</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Overbought / Oversold</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>趋势指标（MA、MACD）跟趋势，震荡指标（RSI、布林带）看区间</li><li>背离是重要的警示信号</li><li>指标只是辅助参考，单独使用任何指标都会踩坑</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：RSI 指标数值 80 通常表示？</strong></p>\n<ul><li>A. 严重超卖</li><li>B. 超买区域，短期可能回调</li><li>C. 马上暴涨</li><li>D. 指标坏了</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：RSI &gt; 70 为超买、&lt; 30 为超卖；但强趋势中可长期超买，需结合趋势判断。</p>\n</details>\n<p><strong>2. 判断题：价格创新高但 MACD 未创新高，称为顶背离，是上涨动力衰竭的警示。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：正确 解析：这就是顶背离的定义，提示上涨动能衰减，常见减仓警示信号。</p>\n</details>\n<p><strong>3. 选择题：布林带持续收口说明？</strong></p>\n<ul><li>A. 行情结束，可以卸载 App</li><li>B. 波动率极低，往往酝酿方向性大行情</li><li>C. 价格即将归零</li><li>D. 没有任何信息</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：收口代表波动被极度压缩，通常是大行情前的蓄力状态，应等待突破方向确认。</p>\n</details>\n<p>---</p>\n<p><a href=\"03-support\" style=\"color:#4dd0e1\">上一节：支撑与阻力</a> | <a href=\"05-position\" style=\"color:#4dd0e1\">下一节：仓位管理</a></p>",
    "quiz": [
     {
      "q": "关于技术指标，正确的是？",
      "opts": [
       "指标能预测未来",
       "指标基于历史数据，是滞后性的辅助工具",
       "指标越多越好",
       "小周期指标信号最可靠"
      ],
      "a": 1,
      "exp": "所有指标由历史价格计算，描述过去而非预测未来，且周期越小噪音越多。"
     }
    ]
   },
   {
    "id": "s2-05-position",
    "title": "第 5 节：仓位管理",
    "dur": "约 40 分钟",
    "intro": "仓位管理决定你能在市场活多久。 方向看对但仓位太重，一次回调就被洗出局；方向看错但仓位轻、止损严，损失可控。长期生存 &gt; 单次盈利。",
    "content": "<h4>本节目标</h4>\n<ul><li>理解仓位管理为什么比选股选币更重要</li><li>学会分批建仓和金字塔加仓</li><li>知道单笔风险敞口的合理范围</li></ul>\n<h4>核心概念</h4>\n<p><strong>仓位管理决定你能在市场活多久。</strong> 方向看对但仓位太重，一次回调就被洗出局；方向看错但仓位轻、止损严，损失可控。长期生存 &gt; 单次盈利。</p>\n<p><strong>核心原则：</strong></p>\n<ol><li><strong>只用闲钱投资</strong>：投入的钱全部亏光也不影响生活</li><li><strong>单笔风险敞口</strong>：一笔交易计划亏掉的金额 ≤ 总资金的 <strong>1%–2%</strong>。以此倒推仓位大小：</li></ol>\n<p>- 例：总资金 10 万，单笔最多亏 1% = 1000 元；买入价 10 万、止损 9 万（距离 10%）→ 仓位 = 1000 ÷ 10% = 1 万</p>\n<ol><li><strong>分批建仓</strong>：看好的币分 3–4 次买入，而不是一次梭哈。跌了还有子弹补，涨了已有底仓</li><li><strong>金字塔加仓</strong>：越涨加得越少（如 4:3:2:1），而不是越跌越加（那是摊平亏损，会加出满仓套牢）</li></ol>\n<p><strong>永远不要做的事：</strong></p>\n<ul><li>全仓一个币</li><li>借钱/加杠杆梭哈</li><li>亏损后情绪性加倍下注（报复性交易）</li></ul>\n<p><strong>现金也是仓位：</strong> 永远留一部分稳定币或法币，既是回撤时的弹药，也是心态的压舱石。</p>\n<h4>举例说明</h4>\n<ul><li>10 万本金，单笔风险 1%：止损 10% 的仓位只能 1 万；止损 5% 的仓位可以 2 万 → <strong>止损越近，允许的仓位越大</strong>，数学决定</li><li>你想买 5 万的 ETH：先买 2 万，跌 5% 再买 1.5 万，再跌再买——成本被摊低，心态也更稳</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"看准了就要重仓，犹豫会错过\" → 没人能看准。仓位管理防的正是\"看错的那一天\"</li><li>❌ \"跌了就补仓，迟早涨回来\" → 山寨币跌 90% 再跌 90% 的不在少数，摊平是亏损的放大器</li><li>❌ \"梭哈赢了几次说明自己有天赋\" → 那是幸存者偏差，满仓的终点通常是一次归零</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">仓位</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Position</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">建仓 / 加仓 / 减仓</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Build / Add / Reduce</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">全仓 / 梭哈</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">All-in</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">风险敞口</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Risk Exposure</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">分批建仓</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Scaling In / Laddering</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">金字塔加仓</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Pyramiding</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>仓位管理决定生存时间，比预测方向更重要</li><li>用\"单笔最多亏 1%–2%\"倒推仓位大小</li><li>分批建仓、金字塔加仓、永不梭哈、永不摊平亏损</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：总资金 10 万元，单笔风险控制在本金的 1%（1000 元），计划买入价 10 万、止损价 9 万，合理仓位是？</strong></p>\n<ul><li>A. 10 万</li><li>B. 1 万</li><li>C. 5 万</li><li>D. 越多越好</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：止损距离 10%，仓位 = 可亏金额 ÷ 止损幅度 = 1000 ÷ 10% = 1 万。</p>\n</details>\n<p><strong>2. 判断题：亏损后加倍补仓可以快速回本，是专业玩家的常用技巧。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：亏损加仓（摊平/马丁格尔）会放大风险，一次趋势延续即可导致巨亏或归零，是新手最常见的死法之一。</p>\n</details>\n<p><strong>3. 选择题：金字塔加仓的正确做法是？</strong></p>\n<ul><li>A. 越跌买越多</li><li>B. 越涨加得越少（如 4:3:2:1）</li><li>C. 每次加相同的量</li><li>D. 一次性全买</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：金字塔加仓是顺趋势加仓且越加越少，保证平均成本离现价不远；越跌越加是危险的摊平行为。</p>\n</details>\n<p>---</p>\n<p><a href=\"04-indicators\" style=\"color:#4dd0e1\">上一节：常用指标</a> | <a href=\"06-risk\" style=\"color:#4dd0e1\">下一节：风险控制</a></p>",
    "quiz": [
     {
      "q": "盈亏比 3:1 意味着？",
      "opts": [
       "每单必须赚 3%",
       "潜在盈利是潜在亏损的 3 倍",
       "胜率必须是 75%",
       "仓位必须是 3 倍"
      ],
      "a": 1,
      "exp": "盈亏比 = 潜在盈利 ÷ 潜在亏损。3:1 下 40% 胜率长期仍可盈利。"
     }
    ]
   },
   {
    "id": "s2-06-risk",
    "title": "第 6 节：风险控制",
    "dur": "约 40 分钟",
    "intro": "风险控制的第一原则：先想亏多少，再想赚多少。 每笔交易进场前先确定两件事：止损在哪、目标在哪。",
    "content": "<h4>本节目标</h4>\n<ul><li>理解止损是交易成本，不是失败</li><li>掌握止损的几种设置方法</li><li>学会计算盈亏比并据此决定要不要做一笔交易</li></ul>\n<h4>核心概念</h4>\n<p><strong>风险控制的第一原则：先想亏多少，再想赚多少。</strong> 每笔交易进场前先确定两件事：止损在哪、目标在哪。</p>\n<p><strong>止损（Stop Loss）：</strong> 价格到达预设位置时自动卖出，限制单笔亏损。</p>\n<ul><li><strong>为什么必须止损</strong>：因为币圈波动极大，没有止损 = 把\"小亏\"交给运气决定变成\"大亏\"还是\"回本\"</li><li>止损不是预测错了丢人的证明，而是<strong>你为每一笔交易支付的保险费和成本</strong></li><li>止损设置方法：</li></ul>\n<p>1. 技术位止损：设在关键支撑下方（跌破支撑说明判断依据失效）</p>\n<p>2. 固定比例止损：如 -7% 无条件离场</p>\n<p>3. 波动率止损：根据近期波动幅度设置（避免被正常波动震出局）</p>\n<p><strong>盈亏比（Risk-Reward Ratio）：</strong> 潜在盈利 ÷ 潜在亏损。</p>\n<ul><li>例：止损距离 -5%，目标 +15%，盈亏比 = 3:1</li><li>即使只有 40% 的胜率，3:1 的盈亏比长期也是盈利的</li><li><strong>低于 2:1 盈亏比的机会，新手直接放弃</strong></li></ul>\n<p><strong>其他风控要点：</strong></p>\n<ul><li>单次止损 ≤ 本金 1%–2%（与仓位管理联动）</li><li>连续亏损 3 笔 → 强制停手复盘，不急于翻本</li><li>每日/每周最大回撤线（如 -5% 停止交易）</li><li>不碰高杠杆；山寨币仓位 ≤ 总资金的小比例</li></ul>\n<h4>举例说明</h4>\n<ul><li>你 10 万买入 BTC，止损 9.4 万（-6%），目标 11.5 万（+15%）→ 盈亏比 2.5:1，可以开仓</li><li>同样 10 万买入某山寨，止损 -6%，但你预期只涨 +8% → 盈亏比 1.3:1，放弃</li><li>价格跌向止损位时心想\"再等等也许反弹\" → 执行纪律，止损不讨价还价</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"止损就是认亏，拿长线总会回来\" → 山寨币不存在\"总会回来\"，被套三年错过整个牛市更惨</li><li>❌ \"止损设得越紧越好\" → 太紧会被正常波动扫出局；要根据波动率留有余地</li><li>❌ \"移动止损会让我少赚\" → 移动止损（盈利后逐步抬高止损）是锁定利润的专业做法</li><li>❌ \"亏了就补仓摊成本，不需要止损\" → 见第 5 节：摊平是放大亏损的行为</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">止损</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Stop Loss</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">止盈</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Take Profit</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">盈亏比</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Risk-Reward Ratio</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">回撤</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Drawdown</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">移动止损</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Trailing Stop</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">爆仓</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Liquidation</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>进场前先定止损和目标，盈亏比 &lt; 2:1 的机会不做</li><li>止损是成本不是失败，执行不讨价还价</li><li>单次风险 ≤ 本金 1%–2%，连续亏损强制停手</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：止损价 9.4 万、目标价 11.5 万、买入价 10 万，盈亏比是？</strong></p>\n<ul><li>A. 0.4:1</li><li>B. 2.5:1</li><li>C. 1:1</li><li>D. 15:1</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：潜在盈利 1.5 万 ÷ 潜在亏损 0.6 万 = 2.5:1。</p>\n</details>\n<p><strong>2. 判断题：只要拿得够久，任何被套的币最终都能回本。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：大量山寨币归零后永不反弹；即使 BTC 也可能套人多年，资金和时间都有机会成本。</p>\n</details>\n<p><strong>3. 选择题：连续亏损 3 笔后正确的做法是？</strong></p>\n<ul><li>A. 加倍下注一把回本</li><li>B. 强制停手，复盘交易记录后再决定</li><li>C. 换个小周期继续交易</li><li>D. 借钱翻本</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：连续亏损通常说明状态或策略出了问题，继续交易只会放大亏损。停手复盘是纪律的一部分。</p>\n</details>\n<p>---</p>\n<p><a href=\"05-position\" style=\"color:#4dd0e1\">上一节：仓位管理</a> | <a href=\"07-psychology\" style=\"color:#4dd0e1\">下一节：交易心理</a></p>",
    "quiz": [
     {
      "q": "纯现货买入的币，只要不加杠杆，就永远不会爆仓。",
      "opts": [
       "正确",
       "错误"
      ],
      "a": 0,
      "exp": "没有负债就没有清算机制，币始终在账户中，损失的只是市值。"
     }
    ]
   },
   {
    "id": "s2-07-psychology",
    "title": "第 7 节：交易心理",
    "dur": "约 40 分钟",
    "intro": "技术分析易学，心理难修。交易成绩的分水岭不在知识，在于能否对抗人性。",
    "content": "<h4>本节目标</h4>\n<ul><li>认识最常见的几种心理陷阱</li><li>理解\"系统 &gt; 情绪\"的交易原则</li><li>学会识别自己处于不理智状态</li></ul>\n<h4>核心概念</h4>\n<p>技术分析易学，心理难修。<strong>交易成绩的分水岭不在知识，在于能否对抗人性。</strong></p>\n<p><strong>五大心理陷阱：</strong></p>\n<ol><li><strong>FOMO（错失恐惧）</strong>：看到别人赚钱、币价暴涨，怕错过而追高进场。这是新手亏钱的第一大原因——<strong>你看到的暴涨，常常是别人出货的时机</strong></li><li><strong>贪婪与幻想</strong>：赚了 20% 想要 50%，到了 50% 想要翻倍；回调时说\"只是技术性调整\"，直到利润全部回吐</li><li><strong>恐惧与割肉</strong>：下跌时恐慌抛售在最低点；上涨时因害怕回撤而过早卖出，错过主升浪</li><li><strong>报复性交易</strong>：亏损后急于翻本，仓位越来越大、决策越来越随意——亏损 spiral 的开始</li><li><strong>沉没成本与锚定</strong>：\"我买入价是 X，不回到 X 我不卖\"——市场不在乎你的成本价</li></ol>\n<p><strong>系统 &gt; 情绪：</strong> 所有进出场依据应该在<strong>下单之前</strong>就以规则形式写下来，执行时只看规则不看情绪。机械化执行一套平庸策略，胜过情绪化使用\"完美策略\"。</p>\n<p><strong>实用心态纪律：</strong></p>\n<ul><li>不盯盘：频繁看盘是情绪交易的最大诱因，用条件单代替盯盘</li><li>不在疲惫、愤怒、饮酒后做交易决策</li><li>每天最多检查几次行情，按计划执行</li><li>把\"交易\"和\"娱乐/赌博\"分开：如果感觉很刺激，说明你在赌博</li></ul>\n<h4>举例说明</h4>\n<ul><li>群里都在晒某币的收益，你忍不住全仓追入，第二天回调 30% → 典型的 FOMO 接盘</li><li>你计划\"涨 15% 止盈\"，到 12% 时心想\"再等等\"，结果跌回 -5% → 计划被贪婪改写了</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"心态好就行，不需要交易系统\" → 没有系统的\"好心态\"只是一时的运气</li><li>❌ \"亏钱了难受说明在乎，这是好事\" → 用情绪驱动决策正是大亏之源</li><li>❌ \"我可以既长线又短线随时切换\" → 风格频繁切换 = 没有风格，无法积累任何优势</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">错失恐惧</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">FOMO（Fear of Missing Out）</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">恐慌抛售</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Panic Selling</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">报复性交易</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Revenge Trading</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">锚定效应</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Anchoring Bias</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">沉没成本</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Sunk Cost</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">纪律</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Discipline</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>FOMO、贪婪、恐惧、报复性交易是四大亏钱心理</li><li>规则写在开盘前，执行只看规则不看情绪</li><li>少盯盘、用条件单、状态不好不做决策</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：看到别人晒收益后忍不住追高买入，这种行为叫？</strong></p>\n<ul><li>A. 价值投资</li><li>B. FOMO（错失恐惧）</li><li>C. 趋势跟踪</li><li>D. 定投</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：因害怕错过而冲动追高是 FOMO，是新手最常见的亏损来源。</p>\n</details>\n<p><strong>2. 判断题：亏损后立即加大仓位交易，是快速回本的有效方法。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：这是报复性交易，情绪驱动决策，是资金曲线雪崩的典型开端。</p>\n</details>\n<p><strong>3. 选择题：对抗交易情绪最有效的方法是？</strong></p>\n<ul><li>A. 多刷消息面增强信心</li><li>B. 盘前制定书面规则并机械化执行</li><li>C. 跟着感觉走</li><li>D. 提高杠杆加快效率</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：把决策前置为规则、执行时去情绪化，是专业交易者和散户的本质区别。</p>\n</details>\n<p>---</p>\n<p><a href=\"06-risk\" style=\"color:#4dd0e1\">上一节：风险控制</a> | <a href=\"08-quiz\" style=\"color:#4dd0e1\">下一节：阶段测验</a></p>",
    "quiz": [
     {
      "q": "支撑位触点越多、经受考验时间越长，该区域越可靠。",
      "opts": [
       "正确",
       "错误"
      ],
      "a": 0,
      "exp": "多次验证的支撑反映了市场的共识，比单次触点可靠得多。"
     }
    ]
   }
  ],
  "exam": true
 },
 {
  "id": "s3",
  "num": "03",
  "title": "交易策略全集",
  "en": "STRATEGIES",
  "risky": true,
  "desc": "",
  "chapters": [
   {
    "id": "s3-01-trend",
    "title": "第 1 节：趋势跟踪",
    "dur": "约 40 分钟",
    "intro": "核心思想：市场大部分时间无序，但一旦出现趋势就会持续一段时间。与其预测转折点，不如搭上已经在走的趋势。",
    "content": "<h4>本节目标</h4>\n<ul><li>理解\"趋势是你的朋友\"的含义</li><li>掌握用均线判断趋势的基本方法</li><li>知道趋势策略的缺点（震荡市反复止损）</li></ul>\n<h4>核心概念</h4>\n<p><strong>核心思想：市场大部分时间无序，但一旦出现趋势就会持续一段时间。与其预测转折点，不如搭上已经在走的趋势。</strong></p>\n<p><strong>如何判断趋势（以日线为例）：</strong></p>\n<ol><li>价格 &gt; MA200 且 MA200 向上 → 长期多头趋势</li><li>价格 &gt; MA50 &gt; MA200（多头排列）→ 趋势健康</li><li>反之则为空头趋势</li></ol>\n<p><strong>基本操作框架：</strong></p>\n<ul><li><strong>只在多头趋势中做多</strong>（新手不做空）</li><li>入场：价格突破前高，或回踩关键均线（MA20/MA50）企稳</li><li>出场：跌破关键均线，或趋势线被破坏</li><li><strong>移动止损</strong>跟随趋势：价格每创新高，止损上移一截，让利润奔跑</li></ul>\n<p><strong>优点：</strong> 逻辑简单；牛市能吃到大段利润；不需要预测。 <strong>缺点：</strong> 震荡市中会反复小亏（磨损）；入场偏晚、出场偏晚，放弃顶部和底部的一段利润。</p>\n<h4>举例说明</h4>\n<ul><li>BTC 日线站上 MA200 且均线拐头向上 → 只找买点，不猜顶；每次回踩 MA50 企稳买入，跌破 MA50 减仓，跌破 MA200 清仓观望</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"趋势跟踪 = 追涨杀跌\" → 它追的是\"确认的趋势\"，不是单日暴涨；有明确的进出场规则</li><li>❌ \"震荡市的连续止损说明策略失效\" → 这是该策略的固有成本，趋势到来时一把赚回</li><li>❌ \"频繁切换周期找趋势\" → 周期越乱信号越矛盾，固定 1–2 个周期</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">趋势跟踪</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Trend Following</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">多头排列</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Bullish Alignment</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">移动止损</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Trailing Stop</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">让利润奔跑</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Let Profits Run</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">磨损</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Whipsaw</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>不预测，只跟随；趋势确认后顺方向操作</li><li>均线是最简单的趋势过滤器：线上做多、线下观望</li><li>接受震荡市的小亏，这是吃到大趋势的成本</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：趋势跟踪策略在哪种行情中最受伤？</strong></p>\n<ul><li>A. 单边牛市</li><li>B. 单边熊市</li><li>C. 横盘震荡市</li><li>D. 任何行情都赚钱</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：C 解析：震荡市价格反复穿越均线，信号频繁失效，趋势策略会连续小亏（磨损）。</p>\n</details>\n<p><strong>2. 判断题：趋势跟踪者试图买在最低点、卖在最高点。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：趋势跟踪主动放弃顶底的一段利润，换取趋势的确定性中段。</p>\n</details>\n<p><strong>3. 选择题：\"让利润奔跑\"主要通过什么实现？</strong></p>\n<ul><li>A. 固定止盈</li><li>B. 移动止损跟随趋势</li><li>C. 亏损加仓</li><li>D. 高频交易</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：移动止损随价格上行不断上移，既保护利润又给趋势留足空间。</p>\n</details>\n<p>---</p>\n<p><a href=\"../02-trading/\" style=\"color:#4dd0e1\">上一阶段：交易基础</a> | <a href=\"02-breakout\" style=\"color:#4dd0e1\">下一节：突破交易</a></p>",
    "quiz": [
     {
      "q": "趋势跟踪策略在震荡市中反复小亏，正确的态度是？",
      "opts": [
       "立即放弃该策略",
       "认识到这是策略固有成本，坚持纪律等待趋势",
       "加大仓位一把赚回",
       "改做日内高频"
      ],
      "a": 1,
      "exp": "磨损是趋势策略的必然成本，趋势到来时的大利润覆盖多次小亏。"
     }
    ]
   },
   {
    "id": "s3-02-breakout",
    "title": "第 2 节：突破交易",
    "dur": "约 40 分钟",
    "intro": "核心思想：价格横盘整理越久、区间越窄，积压的多空力量越强；一旦突破区间边界，往往会走出一波快速行情。\"横有多长，竖有多高\"。",
    "content": "<h4>本节目标</h4>\n<ul><li>理解突破交易的核心逻辑</li><li>学会识别有效突破的确认条件</li><li>掌握假突破的应对</li></ul>\n<h4>核心概念</h4>\n<p><strong>核心思想：价格横盘整理越久、区间越窄，积压的多空力量越强；一旦突破区间边界，往往会走出一波快速行情。\"横有多长，竖有多高\"。</strong></p>\n<p><strong>常见突破形态：</strong></p>\n<ul><li><strong>箱体突破</strong>：价格在上下两条平行线之间震荡许久，突破上沿做多</li><li><strong>三角形突破</strong>：波动逐渐收敛（对称三角形、上升三角形），末端选择方向</li><li><strong>前高突破</strong>：突破历史高点，上方无套牢盘，开启新空间</li></ul>\n<p><strong>有效突破的确认（三要素，尽量满足多条）：</strong></p>\n<ol><li><strong>放量</strong>：突破时成交量明显大于近期均量</li><li><strong>实体收盘</strong>：K 线实体（不是影线）收在关键位之外</li><li><strong>回踩确认</strong>：突破后回踩原阻力位站稳，是最稳的入场点</li></ol>\n<p><strong>假突破的应对：</strong></p>\n<ul><li>假突破是常态而非意外，所以仓位要轻、止损要近</li><li>止损设在关键位内侧（如箱体上沿下方 1–2%），假突破扫到立刻认错离场</li><li>反向操作思路：被反复假突破的区域，反向信号可信度更高</li></ul>\n<h4>举例说明</h4>\n<ul><li>BTC 在 9–10 万之间震荡两个月，某日放量大阳实体收于 10.2 万 → 突破成立；回踩 10 万不破时买入，止损 9.8 万</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"价格碰一下就突破，立刻追\" → 碰线不算突破，收盘站稳才算</li><li>❌ \"突破必有大行情\" → 很多突破会失败，必须预设止损</li><li>❌ \"假突破说明策略不行\" → 用仓位和止损把假突破的代价控制住，抓一次真突破就覆盖多次假突破的亏损</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">突破交易</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Breakout Trading</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">箱体</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Range / Box</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">收敛三角形</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Triangle Consolidation</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">有效突破</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Confirmed Breakout</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">假突破</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Fakeout</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>整理越久，突破越猛；核心是把\"碰线\"和\"站稳\"区分开</li><li>放量 + 实体收盘 + 回踩确认，三重过滤提高胜率</li><li>假突破是这门生意的成本，止损就是为它准备的</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：判断有效突破，下列哪项最有参考价值？</strong></p>\n<ul><li>A. 影线短暂刺破</li><li>B. 放量 + 实体收盘在关键位之外</li><li>C. 群里都在讨论</li><li>D. 突破发生在凌晨</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：实体收盘说明多空力量真实换位，配合放量更可靠；影线刺破多为假突破。</p>\n</details>\n<p><strong>2. 判断题：突破交易应该重仓买入，因为整理这么久一定会大涨。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：突破有相当比例会失败，重仓等于赌；轻仓试错、止损保护才是正确姿势。</p>\n</details>\n<p><strong>3. 选择题：突破后最稳妥的入场点是？</strong></p>\n<ul><li>A. 突破瞬间市价追入</li><li>B. 回踩原阻力位（变支撑）站稳时</li><li>C. 涨到目标价的一半时</li><li>D. 次日开盘无脑买入</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：回踩确认牺牲一点涨幅，换取确认突破有效，是盈亏比更优的入场方式。</p>\n</details>\n<p>---</p>\n<p><a href=\"01-trend\" style=\"color:#4dd0e1\">上一节：趋势跟踪</a> | <a href=\"03-pullback\" style=\"color:#4dd0e1\">下一节：回调买入</a></p>",
    "quiz": [
     {
      "q": "判断有效突破时，下列哪项参考价值最低？",
      "opts": [
       "放量",
       "实体收盘在关键位外",
       "回踩确认",
       "群里喊单的激烈程度"
      ],
      "a": 3,
      "exp": "市场情绪噪音是反向指标都不如的东西；前三项才是突破确认的技术依据。"
     }
    ]
   },
   {
    "id": "s3-03-pullback",
    "title": "第 3 节：回调买入",
    "dur": "约 40 分钟",
    "intro": "核心思想：趋势不会直线走完，上涨途中必然有回调。在上升趋势的回调低点买入，比在突破高点追入成本更低、止损更近、盈亏比更高。",
    "content": "<h4>本节目标</h4>\n<ul><li>理解\"顺势回调买\"的逻辑</li><li>掌握常见的回调买入位置</li><li>区分回调买入和逆势接刀</li></ul>\n<h4>核心概念</h4>\n<p><strong>核心思想：趋势不会直线走完，上涨途中必然有回调。在上升趋势的回调低点买入，比在突破高点追入成本更低、止损更近、盈亏比更高。</strong></p>\n<p><strong>回调买入的三个前提（缺一不可）：</strong></p>\n<ol><li>趋势存在（价格在关键均线之上，均线向上）</li><li>回调到关键位置（见下）</li><li>出现企稳信号（止跌 K 线：锤子线、阳包阴等）</li></ol>\n<p><strong>常见的回调买入位置：</strong></p>\n<ol><li><strong>均线支撑</strong>：回踩 MA20（快线行情）或 MA50（常规趋势）</li><li><strong>前高变支撑</strong>：突破的前高位置，首次回踩最可靠</li><li><strong>黄金分割位</strong>：0.382、0.5、0.618（斐波那契回撤），牛市浅回调常见 0.382–0.5</li><li><strong>趋势线</strong>：沿上升趋势线触及的位置</li></ol>\n<p><strong>止损设置：</strong> 放在回调低点下方（企稳信号失效处），止损距离通常很短，所以盈亏比天然优秀。</p>\n<p><strong>和\"逆势接刀\"的区别：</strong> 回调买入是<strong>顺大逆小</strong>——大趋势向上、在小回调中买；接刀是下跌趋势中赌反弹，方向相反，风险完全不同。</p>\n<h4>举例说明</h4>\n<ul><li>牛市中 BTC 从 8 万涨到 12 万，回踩 0.5 回撤位 10 万 + MA50 附近，出现放量锤子线 → 买入，止损 9.6 万</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"跌了就买，越跌越买\" → 没有趋势前提和企稳信号的买入就是接刀</li><li>❌ \"回调必须买在最低点\" → 等企稳信号出现再买，放弃最低点换确定性</li><li>❌ \"任何均线都可以\" → 均线只在趋势市场中有效，震荡市均线支撑会反复失效</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">回调</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Pullback / Retracement</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">斐波那契回撤</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Fibonacci Retracement</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">企稳信号</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Reversal Candle / Confirmation</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">顺大逆小</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Buy dips in uptrend</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>回调买入 = 趋势存在 + 关键位置 + 企稳信号，三要素齐全再动手</li><li>止损设在企稳信号失效处，盈亏比天然占优</li><li>与逆势接刀的本质区别在于大方向是否向上</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：回调买入策略的前提不包括？</strong></p>\n<ul><li>A. 趋势向上</li><li>B. 价格回调到关键支撑区</li><li>C. 出现企稳信号</li><li>D. 价格已经跌了一个月且不断创新低</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：D 解析：持续新低说明是下跌趋势，此时买入属于逆势接刀，不是回调买入。</p>\n</details>\n<p><strong>2. 判断题：牛市中常见的回调深度通常在斐波那契 0.382–0.5 区域。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：正确 解析：强势趋势中的回调往往较浅，0.382–0.5 是经典观察区，跌穿 0.618 要警惕趋势变化。</p>\n</details>\n<p><strong>3. 选择题：回调买入的止损一般设在哪里？</strong></p>\n<ul><li>A. 买入价下方 50%</li><li>B. 回调低点 / 企稳信号失效处</li><li>C. 前高位置</li><li>D. 不设止损，长期持有</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：企稳信号失效说明判断依据被证伪，应立即离场，此时止损距离最短。</p>\n</details>\n<p>---</p>\n<p><a href=\"02-breakout\" style=\"color:#4dd0e1\">上一节：突破交易</a> | <a href=\"04-grid\" style=\"color:#4dd0e1\">下一节：网格交易</a></p>",
    "quiz": [
     {
      "q": "网格交易最怕的行情是？",
      "opts": [
       "宽幅震荡",
       "单边下跌跌破下沿",
       "小幅横盘",
       "缓慢上涨"
      ],
      "a": 1,
      "exp": "跌破下沿意味着网格一路买满后价格继续下跌，满仓套牢且弹尽粮绝。"
     }
    ]
   },
   {
    "id": "s3-04-grid",
    "title": "第 4 节：网格交易",
    "dur": "约 40 分钟",
    "intro": "核心思想：在一定的价格区间内，把资金分成 N 份，每跌一档买一份，每涨一档卖一份，像渔网一样反复收割区间内的波动。",
    "content": "<h4>本节目标</h4>\n<ul><li>理解网格\"低买高卖自动做 T\"的原理</li><li>知道网格适用的市场环境</li><li>认识网格在大单边行情中的风险</li></ul>\n<h4>核心概念</h4>\n<p><strong>核心思想：在一定的价格区间内，把资金分成 N 份，每跌一档买一份，每涨一档卖一份，像渔网一样反复收割区间内的波动。</strong></p>\n<p><strong>举例（简化版）：</strong></p>\n<ul><li>设定区间 8 万–12 万，分 4 格，每格 1 万 USDT</li><li>跌到 11 万买 1 万，跌到 10 万再买 1 万，跌到 9 万再买……</li><li>涨回 10 万卖出 11 万买的那格，涨回 11 万再卖一格……</li><li>价格在区间内来回一次，每格就赚一格的差价</li></ul>\n<p><strong>适用环境：</strong></p>\n<ul><li>宽幅震荡市（最理想）：价格在区间内反复波动，网格持续收割</li><li>适合没时间盯盘、追求稳健现金流的人</li></ul>\n<p><strong>致命弱点：</strong></p>\n<ol><li><strong>跌破下沿</strong>：一路买入一路跌，满仓套牢（网格全部买满后无子弹，只剩浮亏）</li><li><strong>涨破上沿</strong>：卖光踏空（牛市主升段与你无关）</li><li>所以它本质是<strong>震荡策略</strong>，选错行情方向就是灾难</li></ol>\n<p><strong>风控要点：</strong></p>\n<ul><li>区间下沿设在强支撑之下，且自己能够承受\"跌到下沿满仓\"的结果</li><li>用不满仓的资金做网格（如总资金的 30–50%）</li><li>跌破下沿要有人工止损/暂停机制，不能无限补</li></ul>\n<h4>举例说明</h4>\n<ul><li>震荡市三个月：价格 10 次往返于 9–11 万，网格每格赚约 5%–8%，累计收益可观；而持有不动收益为 0</li><li>单边暴跌：价格直接击穿下沿跌 40%，网格满仓套牢，收益一夜归零还倒亏</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"网格是稳赚不赔的印钞机\" → 它只是把震荡市的利润系统化，单边市照样大亏</li><li>❌ \"区间设得越宽越好\" → 太宽资金利用率低；太窄容易被击穿，要权衡</li><li>❌ \"跌破下沿继续向下补网\" → 那已经不是网格，是摊平亏损，会越陷越深</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">网格交易</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Grid Trading</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">网格区间</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Grid Range</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">格距</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Grid Step / Interval</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">做市</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Market Making</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>网格 = 区间内低买高卖的自动化收割，赚震荡的钱</li><li>适用宽幅震荡，怕单边：跌穿下沿满仓套牢，涨穿上沿彻底踏空</li><li>仓位留余地、下沿有支撑、跌破能止损，三者缺一不可</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：网格交易最理想的行情是？</strong></p>\n<ul><li>A. 单边暴涨</li><li>B. 单边暴跌</li><li>C. 宽幅震荡</li><li>D. 窄幅死水</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：C 解析：宽幅震荡让价格反复穿越网格，每穿越一次就收割一格利润；单边市是网格的克星。</p>\n</details>\n<p><strong>2. 判断题：网格交易跌破区间下沿后，应该继续向下无限补网摊平成本。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：无限补仓是摊平亏损，跌穿下沿说明震荡假设失效，应执行止损或暂停机制。</p>\n</details>\n<p><strong>3. 选择题：网格交易在牛市主升浪中的典型结果是？</strong></p>\n<ul><li>A. 赚最多</li><li>B. 早早卖光踏空</li><li>C. 自动切换趋势模式</li><li>D. 没有影响</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：价格涨破上沿后网格持仓卖光，之后的涨幅与网格无关，即\"踏空牛市\"。</p>\n</details>\n<p>---</p>\n<p><a href=\"03-pullback\" style=\"color:#4dd0e1\">上一节：回调买入</a> | <a href=\"05-dca\" style=\"color:#4dd0e1\">下一节：定投（DCA）</a></p>",
    "quiz": [
     {
      "q": "关于定投（DCA），正确的说法是？",
      "opts": [
       "适合所有币种包括山寨",
       "下跌时应暂停等企稳",
       "只适用于长期存活资产，且难点在牛市卖出",
       "稳赚不赔"
      ],
      "a": 2,
      "exp": "定投的前提是资产长期存活；熊市坚持买入，牛市分批卖出才是完整闭环。"
     }
    ]
   },
   {
    "id": "s3-05-dca",
    "title": "第 5 节：定投（DCA）",
    "dur": "约 40 分钟",
    "intro": "核心思想：不预测涨跌，按固定时间（每周/每月）投入固定金额。跌时买到的份额多，涨时买到的份额少，长期平均成本被摊平，彻底消除\"择时\"这个最难",
    "content": "<h4>本节目标</h4>\n<ul><li>理解定投摊平成本、消除择时的原理</li><li>知道定投适合什么人、什么资产</li><li>掌握定投的执行规则和退出原则</li></ul>\n<h4>核心概念</h4>\n<p><strong>核心思想：不预测涨跌，按固定时间（每周/每月）投入固定金额。跌时买到的份额多，涨时买到的份额少，长期平均成本被摊平，彻底消除\"择时\"这个最难的环节。</strong></p>\n<p><strong>为什么有效：</strong></p>\n<ul><li>择时（猜顶底）连专业机构都做不到，散户尝试择时的结果大多是在高点买入、低点割肉</li><li>定投用纪律代替判断：无论涨跌照买，情绪被排除在决策之外</li><li>长期持有优质资产（BTC/ETH）+ 长期定投，是历史上普通人盈利概率最高的方式之一</li></ul>\n<p><strong>执行规则：</strong></p>\n<ol><li>选定标的：只定投高市值、长生存的资产（BTC、ETH），不碰山寨</li><li>固定周期与金额：如每月发薪日投入可投资金的固定比例（建议月收入的 5%–20%，且是 3 年不用的闲钱）</li><li>固定渠道：自动扣款或日历提醒，到点执行不看行情</li><li> bonus 规则（可选）：跌得特别狠（如 -30%）时额外加投一笔</li></ol>\n<p><strong>退出原则（定投最难的是卖出）：</strong></p>\n<ul><li>目标止盈法：达到个人目标（如资产翻倍）分批卖出</li><li>估值/周期法：牛市情绪极度狂热（连保洁阿姨都在讨论）时分批减仓</li><li>用钱卖出法：需要大额支出时卖出——定投的钱本来就是闲钱</li></ul>\n<h4>举例说明</h4>\n<ul><li>每月 1 号定投 2000 元买 BTC：涨了买得少、暴跌买得多，一年后平均成本往往低于一年均价</li><li>2021 年高点一次性买入的人被套三年；同期定投的人成本被熊市持续拉低</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"定投稳赚不赔\" → 定投摊平的是成本，不是风险；如果资产归零（山寨币），定投照样亏光</li><li>❌ \"跌了就停止定投\" → 下跌正是定投积累便宜筹码的时候，停止等于策略失效</li><li>❌ \"定投任何币都一样\" → 定投的核心前提是资产长期存活，山寨币不适用</li><li>❌ \"定投不需要卖出\" → 没有退出计划的定投只是\"长期持有\"，遇到大牛市要学会分批落袋</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">定投</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">DCA（Dollar-Cost Averaging）</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">平均成本</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Average Cost</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">择时</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Market Timing</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">闲钱</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Disposable Income</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>定投用纪律代替择时，是普通人胜率最高的参与方式</li><li>只定投 BTC/ETH 级别资产，用 3 年不用的闲钱</li><li>最难的不是坚持买入，而是牛市学会分批卖出</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：定投策略最主要的优点是？</strong></p>\n<ul><li>A. 收益一定最高</li><li>B. 消除择时情绪，摊平长期成本</li><li>C. 不需要本金</li><li>D. 永远不会亏损</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：定投把决策交给纪律，避免在高点追高、低点割肉，长期摊平成本。</p>\n</details>\n<p><strong>2. 判断题：市场大跌时应该暂停定投，等企稳了再恢复。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：下跌正是低价积累筹码的阶段，暂停定投恰恰在最有效的时刻放弃了策略。</p>\n</details>\n<p><strong>3. 选择题：定投策略最适合的标的是？</strong></p>\n<ul><li>A. 刚发行的山寨新币</li><li>B. BTC、ETH 等长期存活的高市值资产</li><li>C. 群里推荐的\"百倍币\"</li><li>D.  any 都可以</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：定投的前提是资产长期存活且长期向上；归零风险高的山寨币定投等于分批送钱。</p>\n</details>\n<p>---</p>\n<p><a href=\"04-grid\" style=\"color:#4dd0e1\">上一节：网格交易</a> | <a href=\"06-arbitrage\" style=\"color:#4dd0e1\">下一节：套利</a></p>",
    "quiz": [
     {
      "q": "马丁格尔策略的本质风险是？",
      "opts": [
       "手续费",
       "连输时资金需求指数增长，必然撞上资金上限",
       "操作复杂",
       "胜率太低"
      ],
      "a": 1,
      "exp": "指数增长的资金需求 + 必然出现的连输 = 必然破产，只是时间问题。"
     }
    ]
   },
   {
    "id": "s3-06-arbitrage",
    "title": "第 6 节：套利",
    "dur": "约 40 分钟",
    "intro": "核心思想：同一个东西在不同地方价格不同，低买高卖赚取差价。套利者让市场定价趋于一致，是市场的\"修理工\"。",
    "content": "<h4>本节目标</h4>\n<ul><li>理解\"同一资产、不同价格\"的套利原理</li><li>了解币圈常见的套利类型</li><li>认识套利的技术门槛和风险</li></ul>\n<h4>核心概念</h4>\n<p><strong>核心思想：同一个东西在不同地方价格不同，低买高卖赚取差价。套利者让市场定价趋于一致，是市场的\"修理工\"。</strong></p>\n<p><strong>常见类型：</strong></p>\n<ol><li><strong>交易所间搬砖</strong>：BTC 在 A 所 10 万 USDT、在 B 所 10.05 万 → A 买入提到 B 卖出，赚 500。问题：提币需要时间（链上确认 + 交易所审核），价差可能消失；提币手续费、链上 Gas 吃掉利润</li><li><strong>三角套利（同一交易所内）</strong>：USDT → BTC → ETH → USDT，利用三个交易对之间的汇率短暂失衡，瞬间完成</li><li><strong>期现套利</strong>：现货价格与期货价格出现偏离（基差）。例如期货溢价高时：买现货 + 空期货，等交割/基差回归，赚取无风险差价（所谓\"资金费率套利\"也属此类）</li><li><strong>跨链/跨市场套利</strong>：同一代币在以太坊和 Solana 上价格不同，跨链搬砖</li></ol>\n<p><strong>套利的门槛与风险：</strong></p>\n<ul><li><strong>速度竞争</strong>：无风险套利早已被机器人垄断，手工操作基本抢不到</li><li><strong>资金要求高</strong>：差价通常 0.1%–1%，资金小扣掉手续费不剩什么</li><li><strong>执行风险</strong>：提币延迟、交易所卡审核、链上拥堵——价差可能在你执行过程中消失甚至反转</li><li><strong>平台风险</strong>：套利需要同时在多个平台放资金，平台跑路风险放大</li><li><strong>Gas 与手续费</strong>：是套利的隐形杀手</li></ul>\n<h4>举例说明</h4>\n<ul><li>牛市初期某新上所代币：A 所 1.0 USDT，B 所 1.2 USDT，搬砖者蜂拥而至，几分钟内价差被抹平——你看到的是机会，机器人看到的是日常</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"套利是无风险的\" → 对顶级机器人接近无风险；对普通人是\"低收益 + 高执行风险\"</li><li>❌ \"搬砖很暴利\" → 手续费、滑点、提币成本、时间差，每一项都在啃利润</li><li>❌ \"手动也能做三角套利\" → 三角套利窗口以秒计，手动操作没有竞争力</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">搬砖</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Arbitrage（俗称）</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">价差</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Price Spread</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">基差</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Basis</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">资金费率</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Funding Rate</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">三角套利</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Triangular Arbitrage</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>套利赚的是\"同一资产定价不一致\"的钱</li><li>普通人能接触的多是低收益高执行风险的残羹，且常被机器人抢光</li><li>期现/资金费率套利相对可行，但仍需要资金、工具和严格风控</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：交易所搬砖最大的执行风险是？</strong></p>\n<ul><li>A. 交易所星期天休息</li><li>B. 提币延迟期间价差消失甚至反转</li><li>C. K 线颜色不好看</li><li>D. 收益要交税</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：搬砖依赖\"同时\"低买高卖，提币的时间差里价差可能消失，手续费固定支出却收不回。</p>\n</details>\n<p><strong>2. 判断题：三角套利适合手动快速操作，普通人也能轻松获利。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：三角套利窗口以秒计且由程序竞争，手动操作没有优势。</p>\n</details>\n<p><strong>3. 选择题：资金费率套利的本质是？</strong></p>\n<ul><li>A. 赌涨跌</li><li>B. 同时持现货多头和期货空头，赚取基差/资金费回归</li><li>C. 抢新币</li><li>D. 做市赚手续费</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：通过多空对冲锁定价格，赚取期货与现货之间的价差或资金费，方向性风险极低。</p>\n</details>\n<p>---</p>\n<p><a href=\"05-dca\" style=\"color:#4dd0e1\">上一节：定投（DCA）</a> | <a href=\"07-hedge\" style=\"color:#4dd0e1\">下一节：对冲</a></p>",
    "quiz": [
     {
      "q": "海龟法则中 ATR 的作用是？",
      "opts": [
       "预测价格目标",
       "标准化各资产的波动，使每次止损风险等额",
       "计算盈利",
       "判断牛熊"
      ],
      "a": 1,
      "exp": "ATR 仓位法保证不同波动率的品种亏起来金额一致，是资金管理的精髓。"
     }
    ]
   },
   {
    "id": "s3-07-hedge",
    "title": "第 7 节：对冲",
    "dur": "约 40 分钟",
    "intro": "核心思想：通过建立与现有持仓相反的头寸，抵消一部分价格波动。对冲的目的不是盈利，而是降低不确定性——它是有成本的\"保险\"。",
    "content": "<h4>本节目标</h4>\n<ul><li>理解对冲\"降低风险\"而非\"赚钱\"的本质</li><li>了解币圈常见的对冲方式</li><li>知道对冲的成本问题</li></ul>\n<h4>核心概念</h4>\n<p><strong>核心思想：通过建立与现有持仓相反的头寸，抵消一部分价格波动。对冲的目的不是盈利，而是降低不确定性——它是有成本的\"保险\"。</strong></p>\n<p><strong>常见对冲方式：</strong></p>\n<ol><li><strong>现货 + 期货对冲</strong>：持有 BTC 现货，担心短期回调 → 开等值的 BTC 空单（合约）。涨：现货赚、合约亏；跌：现货亏、合约赚——净值基本锁定，付出的是合约手续费和资金费率</li><li><strong>跨资产对冲</strong>：持有 ETH 现货，用做空相关性高的其他资产来部分对冲（相关性不完美，对冲效果打折）</li><li><strong>稳定币对冲</strong>：最简单的对冲——把部分资产换成 USDT，等价于部分减仓（见第一阶段稳定币一节）</li><li><strong>期权对冲（进阶）</strong>：买入看跌期权保护现货下跌，成本是权利金</li></ol>\n<p><strong>对冲的成本：</strong></p>\n<ul><li>合约对冲：手续费 + 资金费率（长期持仓成本可观）</li><li>期权对冲：权利金（买保护要持续花钱）</li><li>机会成本：对冲也对冲掉了上涨的收益</li></ul>\n<p><strong>新手最该知道的：</strong> 对冲是进阶工具。对大多数新手，\"换成稳定币\"就是最简单有效的对冲/避险方式，不需要碰合约。</p>\n<h4>举例说明</h4>\n<ul><li>你持有 10 万 BTC 现货，担心美联储会议引发暴跌，开 10 万等值空单对冲。会议落地暴跌 15%：现货亏 1.5 万，合约赚约 1.5 万，净值不变。代价：几天的资金费率</li><li>对冲解除（平仓空单）后，市场方向明确再继续裸持现货</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"对冲能赚钱\" → 对冲让盈亏互相抵消，净赚的是你看对方向后的\"未对冲部分\"</li><li>❌ \"对冲等于锁仓不动\" → 对冲需要动态管理，市场变化后对冲比例会失衡</li><li>❌ \"新手应该先学对冲\" → 新手的第一避险工具是稳定币和止损，对冲是资产较大后的工具</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">对冲</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Hedge</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">期货合约</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Futures</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">期权</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Options</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">资金费率</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Funding Rate</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">相关性</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Correlation</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>对冲是保险，保费是手续费/资金费/权利金</li><li>现货+合约对冲能锁定净值，但削弱双向收益</li><li>新手避险首选：换稳定币、设止损</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：对冲的根本目的是？</strong></p>\n<ul><li>A. 放大收益</li><li>B. 降低持仓的价格波动风险</li><li>C. 免手续费</li><li>D. 套利</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：对冲用相反头寸抵消波动，本质是保险，不是盈利工具。</p>\n</details>\n<p><strong>2. 判断题：对冲是完全免费的，不需要任何成本。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：合约对冲有手续费和资金费率，期权对冲有权利金，还有上涨收益被抵消的机会成本。</p>\n</details>\n<p><strong>3. 选择题：对新手而言，最简单的避险/对冲方式是？</strong></p>\n<ul><li>A. 开 10 倍杠杆空单</li><li>B. 把部分资产换成稳定币</li><li>C. 买入虚值期权</li><li>D. 频繁换仓</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：换成稳定币等于部分减仓避险，操作简单、无额外成本，适合新手。</p>\n</details>\n<p>---</p>\n<p><a href=\"06-arbitrage\" style=\"color:#4dd0e1\">上一节：套利</a> | <a href=\"08-martingale\" style=\"color:#4dd0e1\">下一节：马丁格尔（警惕）</a></p>",
    "quiz": [
     {
      "q": "套利是无风险的，适合普通投资者作为主要盈利手段。",
      "opts": [
       "正确",
       "错误"
      ],
      "a": 1,
      "exp": "存在执行风险（时间差、手续费、平台风险），且有效机会多被机器人抢占，普通人难以稳定获利。"
     }
    ]
   },
   {
    "id": "s3-08-martingale",
    "title": "第 8 节：马丁格尔（警惕）",
    "dur": "约 50 分钟",
    "intro": "机制： 亏了就把下注金额翻倍，赢一次就收回所有亏损并小赚一笔，然后回到初始金额。",
    "content": "<h4>本节目标</h4>\n<ul><li>理解马丁格尔策略的机制</li><li>知道它为什么在数学上必然遇到毁灭性风险</li><li>学会识别包装成\"稳赚策略\"的马丁格尔产品</li></ul>\n<h4>核心概念</h4>\n<p><strong>机制：</strong> 亏了就把下注金额翻倍，赢一次就收回所有亏损并小赚一笔，然后回到初始金额。</p>\n<p><strong>举例：</strong> 第一次投 100 亏 → 投 200 亏 → 投 400 亏 → 投 800 赢（赚回前面 700 亏损 + 100 利润）→ 回到投 100。</p>\n<p><strong>为什么看起来很美：</strong> 只要不一直连输，任何一次胜利都能让账户回到盈利。历史曲线通常非常漂亮：长期稳定小赚，直到某一天。</p>\n<p><strong>为什么必然崩溃（数学本质）：</strong></p>\n<ol><li><strong>资金是指数增长的</strong>：连输 10 次，第 11 次需要投 100 × 2^10 = 102,400 元——任何人的资金都有上限</li><li><strong>盈亏不对称</strong>：翻倍下注追回来的只是初始小利润，但承受的是指数级亏损风险——<strong>冒 10 万元的风险赚 100 元</strong></li><li><strong>连输是必然会发生的</strong>：只要你玩足够久，\"小概率连输\"一定会撞上。爆仓不是\"会不会\"，是\"什么时候\"</li><li>交易所还有<strong>下注上限</strong>和手续费，进一步压缩生存空间</li></ol>\n<p><strong>币圈的常见包装：</strong></p>\n<ul><li>\"网格马丁 EA\"\"智能量化机器人\"\"倍投策略带单\"——本质多为马丁格尔或其变种</li><li>带单老师晒的\"100 连胜\"截图，只是在等那个第 101 次</li><li>合约高杠杆 + 亏损加仓 = 手动版马丁格尔</li></ul>\n<h4>举例说明</h4>\n<ul><li>1 万本金、起始 100、翻倍下注：连输 7 次后累计亏损 12,700 &gt; 1 万本金，还没等到第 8 次已经破产。而连输 7 次在 50% 概率游戏中并不罕见</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"我有 10 万本金，起始只投 100，肯定够撑\" → 连输 10 次需要 10.24 万，连输 13 次需要 81.92 万——指数增长远超直觉</li><li>❌ \"币圈不会连跌 10 次\" → 单次 50% 概率的\"连输 10 次\"概率约 0.1%，但交易次数以千计时，几乎必然遇到</li><li>❌ \"用马丁格尔的是 professional 量化\" → 正规量化做的是期望值为正的策略；马丁格尔的期望值为负（扣除成本），只是延迟了亏损的兑现</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">马丁格尔</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Martingale</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">翻倍下注</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Double Down</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">期望值</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Expected Value</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">破产风险</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Risk of Ruin</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>马丁格尔用指数级风险换确定性小利润，数学上必然以爆仓收场</li><li>凡是\"亏损加倍、赢一次回本\"的系统，无论包装成什么名字，都要远离</li><li>合约杠杆 + 亏损加仓 = 手动马丁格尔，同样致命</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：马丁格尔策略的致命缺陷是？</strong></p>\n<ul><li>A. 手续费太高</li><li>B. 连输时所需资金指数增长，必然撞上资金上限</li><li>C. 赢的太少</li><li>D. 操作太复杂</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：指数级资金需求 + 玩久了必然遇到连输 = 必然破产，只是时间问题。</p>\n</details>\n<p><strong>2. 判断题：马丁格尔策略只要本金足够大，就可以长期稳定盈利。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：本金再大也有限，而连输长度理论上无限；\"足够大\"在数学上不存在，且每次只赚初始注的小利润，风险收益完全不对称。</p>\n</details>\n<p><strong>3. 选择题：某\"量化机器人\"声称月收益稳定 5%，且策略说明中有\"浮亏时自动加倍开仓\"，它大概率是？</strong></p>\n<ul><li>A. 正规做市策略</li><li>B. 马丁格尔变种，风险被隐瞒</li><li>C. 定投策略</li><li>D. 套利策略</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：\"浮亏加倍\"是马丁格尔的标志性特征，稳定收益曲线只是爆仓前的幻象。</p>\n</details>\n<p>---</p>\n<p><a href=\"07-hedge\" style=\"color:#4dd0e1\">上一节：对冲</a> | <a href=\"09-turtle\" style=\"color:#4dd0e1\">下一节：海龟交易法</a></p>",
    "quiz": [
     {
      "q": "对冲的目的是降低风险，需要付出手续费、资金费率等成本。",
      "opts": [
       "正确",
       "错误"
      ],
      "a": 0,
      "exp": "对冲是保险，保费是持有成本；它同时对冲掉了上涨收益。"
     }
    ]
   },
   {
    "id": "s3-09-turtle",
    "title": "第 9 节：海龟交易法",
    "dur": "约 50 分钟",
    "intro": "背景： 1983 年，传奇交易员理查德·丹尼斯（Richard Dennis）与合伙人打赌\"交易员是天生还是可以培养的\"，招募了一批没有任何",
    "content": "<h4>本节目标</h4>\n<ul><li>了解海龟实验的缘起和结论</li><li>掌握海龟法则的核心要素（突破入场、ATR 仓位、金字塔加仓）</li><li>理解\"系统可以教，纪律难教\"的启示</li></ul>\n<h4>核心概念</h4>\n<p><strong>背景：</strong> 1983 年，传奇交易员理查德·丹尼斯（Richard Dennis）与合伙人打赌\"交易员是天生还是可以培养的\"，招募了一批没有任何交易经验的普通人，教授一套完整的趋势跟踪规则（史称\"海龟法则\"），结果这些人中的多数成为千万美元级交易员。实验证明：<strong>一套明确、可执行的系统 + 严格执行，足以战胜多数凭感觉交易的人</strong>。</p>\n<p><strong>核心规则：</strong></p>\n<ol><li><strong>入场</strong>：突破 20 日高点买入（激进）/ 突破 55 日高点买入（稳健）；价格跌破 10 日低点卖出（激进）/ 跌破 20 日低点卖出（稳健）</li><li><strong>仓位（最重要）</strong>：用 <strong>ATR（平均真实波幅）</strong> 决定每笔头寸大小——把每个币的波动幅度标准化，保证\"每次止损亏的钱一样多\"（账户的 1%–2%）</li></ol>\n<p>- ATR 越大（波动越猛），仓位越小；ATR 越小，仓位越大</p>\n<ol><li><strong>加仓</strong>：每上涨 0.5 个 ATR 加一次仓，最多 4 个单位（金字塔式递减）</li><li><strong>止损</strong>：入场价下方 2 个 ATR，或跌破 10/20 日低点，先到先执行</li><li><strong>让利润奔跑</strong>：出场靠跌破低点信号，不靠目标价</li></ol>\n<p><strong>对普通投资者的启示：</strong></p>\n<ul><li>工具完全公开，赚钱与否取决于执行，而非秘密公式</li><li>资金管理（ATR 仓位法）是整套系统里最值得学习的部分</li><li>海龟们在同一系统下成绩分化很大——<strong>纪律和心理仍然是分水岭</strong></li></ul>\n<h4>举例说明</h4>\n<ul><li>BTC 现价 10 万，20 日高点 10.5 万 → 突破 10.5 万买入；ATR 为 3000 → 单笔仓位按\"2×ATR=6000 元风险\"反推；每涨 1500 元加仓一次，跌破 20 日低点全部离场</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"照抄海龟规则就能复制收益\" → 市场环境变了（币圈 24/7、高波动、合约衍生品），参数需适配；且执行差异巨大</li><li>❌ \"ATR 仓位法太保守\" → 正是\"每次亏一样的钱\"让海龟们在连续止损后依然活着并抓住大趋势</li><li>❌ \"海龟法是预测模型\" → 它是纯粹的趋势跟随，不预测任何东西</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">海龟交易法</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Turtle Trading</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">平均真实波幅</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">ATR（Average True Range）</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">唐奇安通道</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Donchian Channel（20/55 日高低点）</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">单位</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Unit（海龟仓位单位）</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>海龟实验证明：系统可复制，纪律不可复制，后者才是盈利分水岭</li><li>核心三件套：突破入场、ATR 标准化仓位、跌破出场</li><li>ATR 仓位法（每次风险等额）是最值得借鉴的资金管理思想</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：海龟法则中 ATR 的主要作用是？</strong></p>\n<ul><li>A. 预测目标价</li><li>B. 标准化波动，决定每笔头寸大小，使每次止损风险等额</li><li>C. 计算手续费</li><li>D. 判断牛熊</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：ATR 衡量资产自身波动，用它调整仓位，保证不同波动率的资产每次止损亏的钱相同。</p>\n</details>\n<p><strong>2. 判断题：海龟实验证明了交易盈利主要依靠天赋，无法后天培养。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：实验恰恰证明了普通人在接受系统训练后可以成为优秀交易员，证明系统与纪律的价值大于天赋。</p>\n</details>\n<p><strong>3. 选择题：海龟系统的出场方式是？</strong></p>\n<ul><li>A. 固定盈利目标</li><li>B. 跌破 10/20 日低点离场，让利润奔跑</li><li>C. 每天收盘前平仓</li><li>D. 亏损才出场</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：海龟用跌破近期低点作为离场信号，跟随趋势直到其明确反转，而非预设目标价。</p>\n</details>\n<p>---</p>\n<p><a href=\"08-martingale\" style=\"color:#4dd0e1\">上一节：马丁格尔（警惕）</a> | <a href=\"10-styles\" style=\"color:#4dd0e1\">下一节：策略风格匹配</a></p>",
    "quiz": [
     {
      "q": "回测收益很高的策略可以直接大资金实盘。",
      "opts": [
       "正确",
       "错误"
      ],
      "a": 1,
      "exp": "需警惕过拟合，且必须经过样本外验证、模拟盘和小资金实盘的逐级检验。"
     }
    ]
   },
   {
    "id": "s3-10-styles",
    "title": "第 10 节：策略风格匹配",
    "dur": "约 40 分钟",
    "intro": "没有最好的策略，只有和你匹配的策略。匹配错误（比如没时间盯盘的人做短线、受不了回撤的人做趋势跟踪）是策略失效最常见的原因——不是策略错了，是",
    "content": "<h4>本节目标</h4>\n<ul><li>学会评估自己的时间、性格和风险承受力</li><li>能把主流策略与自身条件匹配</li><li>理解\"适合\"比\"最好\"更重要</li></ul>\n<h4>核心概念</h4>\n<p>没有最好的策略，只有<strong>和你匹配的策略</strong>。匹配错误（比如没时间盯盘的人做短线、受不了回撤的人做趋势跟踪）是策略失效最常见的原因——不是策略错了，是人执行不了。</p>\n<p><strong>三个维度的自我评估：</strong></p>\n<p><strong>1. 时间维度</strong></p>\n<ul><li>每天能盯盘 4 小时以上 → 可研究日内、突破、短线</li><li>每天只能看 1–2 次 → 适合 4 小时线/日线级别策略（回调买入、趋势跟踪）</li><li>每月看一次就够 → 定投是唯一答案</li></ul>\n<p><strong>2. 性格维度</strong></p>\n<ul><li>怕踏空、怕波动 → 网格、定投（有现金流/在积累）</li><li>坐得住、能忍受持仓回撤 30% 不动摇 → 趋势跟踪、海龟</li><li>追求确定性、喜欢规则清晰 → 突破 + 固定盈亏比</li><li>容易 FOMO、容易报复性交易 → 只许做定投，其他禁止</li></ul>\n<p><strong>3. 资金维度</strong></p>\n<ul><li>小额闲钱（&lt; 1 万）→ 定投攒筹码 + 模拟盘练技术，勿做短线（手续费占比过高）</li><li>中等资金（1–50 万）→ 核心仓位定投 BTC/ETH + 卫星仓位趋势/回调策略</li><li>大额资金 → 分层配置：核心长期仓、策略仓、稳定币仓、现金仓</li></ul>\n<p><strong>组合而非单选：</strong> 成熟的做法是\"核心 + 卫星\"——大部分资金放在低维护策略（定投/长线），小部分资金用于主动策略（趋势/回调），互相隔离、互不救仓。</p>\n<h4>举例说明</h4>\n<ul><li>上班族小李：白天开会无法看盘 → 定投 70% + 日线回调买入 30%，放弃一切日内策略</li><li>自由职业者小王：能盯盘但容易冲动 → 只做\"突破回踩确认\"一种模式，写进规则严格执行</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"哪种策略收益最高就学哪种\" → 收益最高的策略往往回撤也最深，执行不了 = 0</li><li>❌ \"多学几种策略可以灵活切换\" → 风格漂移 = 没有统计优势，什么信号都半信半疑</li><li>❌ \"先用小资金同时试 5 种策略看哪个赚钱\" → 样本太小，短期结果只是噪音，应该按匹配度先选 1 种</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">核心-卫星策略</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Core-Satellite</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">风格漂移</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Style Drift</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">风险承受力</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Risk Tolerance</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">回撤容忍度</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Drawdown Tolerance</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>先评估时间、性格、资金，再选策略，顺序不能反</li><li>核心-卫星组合：大部分被动 + 小部分主动</li><li>坚持一种匹配的策略 100 次交易，胜过换 5 种策略各试 10 次</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：一个白天要上班、只能每晚看一次盘的人，最合适的策略是？</strong></p>\n<ul><li>A. 1 分钟线 scalping</li><li>B. 日线级别定投 / 回调买入</li><li>C. 高频做市</li><li>D. 日内突破</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：时间决定能执行的周期；日线级别的策略才能被稳定执行，小周期策略无法盯盘必然执行走样。</p>\n</details>\n<p><strong>2. 判断题：同时运行多种策略可以提高胜率，是进阶玩家的标志。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：多数人同时运行多策略的结果是风格漂移——信号互相干扰、仓位互相挤占。先把一种做熟。</p>\n</details>\n<p><strong>3. 选择题：\"核心-卫星\"结构中，卫星仓位的作用是？</strong></p>\n<ul><li>A. 用来补仓核心仓位</li><li>B. 小资金主动试错，博取超额收益，与核心仓隔离</li><li>C. 借给朋友</li><li>D. 应急提现</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：卫星仓是主动策略的试验田，亏了不伤根本，赚了增强收益；严禁用卫星仓亏了就动核心仓来救。</p>\n</details>\n<p>---</p>\n<p><a href=\"09-turtle\" style=\"color:#4dd0e1\">上一节：海龟交易法</a> | <a href=\"11-quant\" style=\"color:#4dd0e1\">下一节：量化入门</a></p>",
    "quiz": [
     {
      "q": "策略选择与性格无关，收益最高的策略适合所有人。",
      "opts": [
       "正确",
       "错误"
      ],
      "a": 1,
      "exp": "回撤承受力、时间、性格决定执行力；执行不了的策略等于没有策略。"
     }
    ]
   },
   {
    "id": "s3-11-quant",
    "title": "第 11 节：量化入门",
    "dur": "约 50 分钟",
    "intro": "量化交易：把交易规则写成代码，让程序自动执行。 排除情绪、执行纪律、可同时监控上千个标的——这是它相对人工的优势。",
    "content": "<h4>本节目标</h4>\n<ul><li>理解量化交易的基本概念</li><li>知道一个量化策略从想法到运行的流程</li><li>认识量化的门槛和常见误区</li></ul>\n<h4>核心概念</h4>\n<p><strong>量化交易：把交易规则写成代码，让程序自动执行。</strong> 排除情绪、执行纪律、可同时监控上千个标的——这是它相对人工的优势。</p>\n<p><strong>一个量化策略的生命周期：</strong></p>\n<ol><li><strong>提出假设</strong>：如\"突破 20 日高点后买入，持有到跌破 10 日低点\"</li><li><strong>回测（Backtest）</strong>：用历史数据验证策略表现（收益率、最大回撤、胜率、盈亏比）</li><li><strong>样本外验证</strong>：用策略设计时没看过的数据段再测一次，防止\"过拟合\"（只适配历史数据的花架子）</li><li><strong>模拟盘（Paper Trading）</strong>：真实行情、虚拟资金，跑 1–3 个月</li><li><strong>小资金实盘</strong>：验证滑点、手续费后的真实表现</li><li><strong>逐步放大</strong>：确认与回测一致后再增加资金</li></ol>\n<p><strong>量化必备的基础能力：</strong></p>\n<ul><li>一门编程语言（Python 是主流）</li><li>基础统计知识（期望值、方差、显著性）</li><li>数据源和 API（交易所 API、行情库）</li><li>对策略\"为什么赚钱\"的逻辑理解（没有逻辑支撑的统计规律是不可靠的）</li></ul>\n<p><strong>现实的门槛：</strong></p>\n<ul><li>散户量化要面对的是机构级别的竞争对手</li><li>回测好 ≠ 未来好（过拟合、市场环境变化、手续费滑点侵蚀）</li><li>量化解决的是\"执行和纪律\"，不解决\"没有优势\"——策略本身没有正期望，代码再漂亮也是更快的亏钱机器</li></ul>\n<h4>举例说明</h4>\n<ul><li>用 Python + ccxt 库拉取历史 K 线，写双均线策略回测 2020–2024 年 BTC：年化 40%、最大回撤 35% → 再用 2025 年数据样本外验证，若收益崩塌说明过拟合</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"量化 = 稳赚/躺赚\" → 量化只是自动化执行，策略无优势照样亏损</li><li>❌ \"回测收益 1000% 的策略可以直接上实盘\" → 大概率过拟合或未计手续费滑点</li><li>❌ \"买个量化机器人就能赚钱\" → 你买到的是别人用剩下的策略 + 你的手续费</li><li>❌ \"AI 可以预测价格\" → 短期价格接近随机游走，AI 能做辅助，不能算命</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">量化交易</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Quantitative Trading</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">回测</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Backtest</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">过拟合</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Overfitting</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">样本外测试</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Out-of-Sample Test</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">滑点</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Slippage</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">API</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">应用程序接口</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>量化 = 规则代码化 + 自动执行，核心依然是策略的正期望</li><li>回测 → 样本外 → 模拟盘 → 小实盘，一步都不能省</li><li>警惕过拟合和\"回测幻象\"，警惕售卖中的\"稳赚量化机器人\"</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：\"过拟合\"指的是？</strong></p>\n<ul><li>A. 资金仓位太满</li><li>B. 策略参数过度贴合历史数据，对未来失效</li><li>C. 服务器过载</li><li>D. 下单次数太多</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：参数越多、拟合历史越精细，越可能只是\"背诵历史答案\"，样本外表现通常崩塌。</p>\n</details>\n<p><strong>2. 判断题：回测表现优秀的策略可以跳过模拟盘直接大资金实盘。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：回测忽略滑点、延迟、心理等因素；模拟盘和小资金实盘是验证真实表现的必经步骤。</p>\n</details>\n<p><strong>3. 选择题：量化交易相对人工交易的核心优势是？</strong></p>\n<ul><li>A. 预测更准</li><li>B. 排除情绪、纪律化执行、可同时监控大量标的</li><li>C. 不需要策略</li><li>D. 手续费更贵</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：量化不改变策略的期望值，只是把执行做到极致；预测能力上并没有魔法。</p>\n</details>\n<p>---</p>\n<p><a href=\"10-styles\" style=\"color:#4dd0e1\">上一节：策略风格匹配</a> | <a href=\"12-quiz\" style=\"color:#4dd0e1\">下一节：阶段测验</a></p>",
    "quiz": []
   }
  ],
  "exam": true
 },
 {
  "id": "s4",
  "num": "04",
  "title": "进阶与生态",
  "en": "ADVANCED & ECOSYSTEM",
  "risky": false,
  "desc": "",
  "chapters": [
   {
    "id": "s4-01-defi",
    "title": "第 1 节：DeFi",
    "dur": "约 50 分钟",
    "intro": "DeFi（Decentralized Finance，去中心化金融）：用智能合约重建传统金融服务——交易、借贷、理财——没有银行、没有审批、",
    "content": "<h4>本节目标</h4>\n<ul><li>理解 DeFi 的核心概念\"去中心化金融\"</li><li>掌握 DEX、借贷、流动性挖矿三大板块</li><li>认识 DeFi 的主要风险</li></ul>\n<h4>核心概念</h4>\n<p><strong>DeFi（Decentralized Finance，去中心化金融）</strong>：用智能合约重建传统金融服务——交易、借贷、理财——没有银行、没有审批、没有营业时间，代码即规则。</p>\n<p><strong>三大基础板块：</strong></p>\n<ol><li><strong>DEX（去中心化交易所）</strong>：如 Uniswap、Curve。靠\"流动性池\"运作：用户把两种代币存进池子（这叫<strong>提供流动性</strong>，LP），交易者直接和池子兑换，按算法自动定价（<strong>AMM 自动做市商</strong>）。LP 赚交易手续费分成。</li><li><strong>借贷协议</strong>：如 Aave、Compound。超额抵押借款：存入 ETH 作抵押（超额抵押率如 150%），借出 USDT；抵押物价值跌到阈值会被<strong>清算</strong>（强制卖出抵债）。存款人则赚取利息。</li><li><strong>流动性挖矿（Yield Farming）</strong>：为协议提供流动性获得代币奖励，再把这些代币质押获得额外收益——收益可以层层叠加（所谓\"套娃\"）。高收益往往伴随代币通胀和高风险。</li></ol>\n<p><strong>DeFi 的革新性：</strong> 可组合性（Money Lego）——一个协议的产出可以作为另一个协议的输入，像乐高积木一样叠加出复杂产品。</p>\n<p><strong>主要风险：</strong></p>\n<ul><li><strong>智能合约漏洞</strong>：代码有 bug 就被黑客利用（历史损失数十亿美元）</li><li><strong>清算风险</strong>：抵押物暴跌被清算，还要付罚金</li><li><strong>无常损失（IL）</strong>：LP 提供流动性后，两种币价格发生变化导致 LP 收益不如单纯持有</li><li><strong>项目跑路 / 代币归零</strong>：土狗项目最常见的结局</li></ul>\n<h4>举例说明</h4>\n<ul><li>你把 ETH 和 USDT 各存 1 万进 Uniswap 池子，赚每笔交易 0.3% 手续费的分成；但如果 ETH 大涨，你手里的 ETH 份额被\"卖\"掉了一些，收益不如直接持有——这就是无常损失</li><li>在 Aave 存入 ETH 借出 60% 价值的 USDT 用于消费，币价涨了你毫发无损，跌了到警戒线要补抵押物否则被清算</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"DeFi 收益高又安全\" → 高收益 = 高风险补偿；合约漏洞、清算、Rug 都是真实存在的风险</li><li>❌ \"放在 DeFi 里就是理财\" → 没有存款保险，协议被黑可能本金全损</li><li>❌ \"无常损失很小不用管\" → 波动越大的交易对，无常损失越可观，有时超过手续费收入</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">去中心化金融</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">DeFi</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">自动做市商</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">AMM</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">流动性池 / 提供者</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Liquidity Pool / LP</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">流动性挖矿</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Yield Farming</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">无常损失</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Impermanent Loss (IL)</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">清算</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Liquidation</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">超额抵押</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Over-collateralization</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>DeFi = 用智能合约重建金融：DEX、借贷、流动性挖矿</li><li>收益来源：手续费、利息、代币激励；风险来源：漏洞、清算、无常损失、跑路</li><li>可组合性是创新源泉，也是风险传染的通道</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：Uniswap 的定价依靠？</strong></p>\n<ul><li>A. 中心化撮合员</li><li>B. AMM 算法 + 流动性池</li><li>C. 银行汇率</li><li>D. 投票决定</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：DEX 没有订单簿撮合，交易直接对流动性池按算法定价。</p>\n</details>\n<p><strong>2. 判断题：DeFi 借贷需要查征信、提供收入证明。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：DeFi 借贷是纯抵押贷款：只看抵押物价值，不看信用，所以必须超额抵押。</p>\n</details>\n<p><strong>3. 选择题：\"无常损失\"主要影响谁？</strong></p>\n<ul><li>A. 只持有现货的人</li><li>B. DEX 流动性提供者（LP）</li><li>C. 交易所用户</li><li>D. 矿工</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：LP 存的是两种币的组合，价格变动会使持仓结构偏离，收益可能不如单纯持有。</p>\n</details>\n<p>---</p>\n<p><a href=\"../03-strategies/\" style=\"color:#4dd0e1\">上一阶段：交易策略全集</a> | <a href=\"02-nft\" style=\"color:#4dd0e1\">下一节：NFT</a></p>",
    "quiz": [
     {
      "q": "Uniswap 属于哪类 DeFi 协议？",
      "opts": [
       "借贷",
       "去中心化交易所（AMM）",
       "跨链桥",
       "预言机"
      ],
      "a": 1,
      "exp": "Uniswap 是 AMM 型 DEX，靠流动性池和算法定价。"
     },
     {
      "q": "监管征税往往意味着加密资产在该法域被承认为合法资产类别。",
      "opts": [
       "正确",
       "错误"
      ],
      "a": 0,
      "exp": "可征税是合法化的标志之一；关键监管事件需要区分情绪冲击与实质变化。"
     }
    ]
   },
   {
    "id": "s4-02-nft",
    "title": "第 2 节：NFT",
    "dur": "约 40 分钟",
    "intro": "NFT（Non-Fungible Token，非同质化代币）：每个都独一无二、不可互换的代币。1 个 BTC 和另 1 个 BTC 完全等价",
    "content": "<h4>本节目标</h4>\n<ul><li>理解 NFT 是什么、为什么有价值</li><li>了解 NFT 的主要类型和应用</li><li>认识 NFT 投机狂潮的教训</li></ul>\n<h4>核心概念</h4>\n<p><strong>NFT（Non-Fungible Token，非同质化代币）</strong>：每个都独一无二、不可互换的代币。1 个 BTC 和另 1 个 BTC 完全等价（同质化）；而每张 NFT 都有独立编号和元数据（非同质化）。</p>\n<p><strong>简单理解</strong>：给数字内容（图片、音乐、游戏道具、证书）发一张\"链上产权证\"。它证明\"某个地址拥有某个数字资产\"，且转移记录公开可查。</p>\n<p><strong>主要类型：</strong></p>\n<ol><li><strong>数字艺术品/头像</strong>：如 CryptoPunks、无聊猿（BAYC）——2021 年狂潮的主角</li><li><strong>游戏道具</strong>：游戏内的装备、土地以 NFT 形式存在，玩家真正拥有、可自由交易</li><li><strong>会员凭证/门票</strong>：持有某 NFT 才能进入的社群、活动（Token-gating）</li><li><strong>数字身份与凭证</strong>：学历证书、域名（如 ENS 域名就是 NFT）</li></ol>\n<p><strong>为什么有人买：</strong></p>\n<ul><li>艺术收藏与社区身份（数字时代的\"名画 + 俱乐部会员卡\"）</li><li>创作者版税：原作者可从每次转售中抽成（链上自动执行）</li><li>投机：低买高卖（2021 年多数参与者的真实动机）</li></ul>\n<p><strong>狂潮的教训：</strong> 2021 年 NFT 总市值一度数百亿美元，大量头像 NFT 从几百万美元跌到几千美元，跌幅 95%+ 的比比皆是。流动性极差——想买时抢不到，想卖时没人接盘。<strong>NFT 是流动性最差的风险资产之一。</strong></p>\n<h4>举例说明</h4>\n<ul><li>你花 0.08 ETH 铸造了一个新项目的 NFT，期望像无聊猿一样涨 1000 倍；三个月后项目方失联，地板价跌到你挂 0.005 ETH 都卖不掉——典型的流动性陷阱</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"买了 NFT 就拥有了图片版权\" → 你拥有的是链上凭证，不一定包含版权；多数项目只卖\"展示权\"</li><li>❌ \"NFT 都是骗局\" → 链上凭证、数字产权的底层价值真实存在，只是 2021 年的估值是泡沫</li><li>❌ \"地板价低 = 便宜 = 会涨\" → 没人接盘的东西，价格再低也没有意义</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">非同质化代币</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">NFT</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">铸造</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Mint</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">地板价</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Floor Price</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">版税</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Royalty</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">元数据</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Metadata</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">ENS</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">以太坊域名服务</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>NFT = 链上数字产权凭证，核心价值是确权与流通</li><li>应用：艺术品、游戏、会员、身份；投机只是其中一种用途</li><li>流动性极差，泡沫期估值虚高，普通人参与以小额、兴趣为目的</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：NFT 与 BTC 的核心区别在于？</strong></p>\n<ul><li>A. NFT 不能交易</li><li>B. 每个 NFT 独一无二，不可互换</li><li>C. NFT 不需要区块链</li><li>D. BTC 更安全</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：同质化代币可互换（1 BTC = 1 BTC）；NFT 每个都有唯一标识。</p>\n</details>\n<p><strong>2. 判断题：购买 NFT 自动获得图片的全部版权。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：多数 NFT 只包含所有权凭证和有限展示权，版权仍归创作者，需看具体项目条款。</p>\n</details>\n<p><strong>3. 选择题：NFT 市场最大的风险之一是？</strong></p>\n<ul><li>A. 价格波动太小</li><li>B. 流动性极差，想卖时可能无人接盘</li><li>C. 政府强制回购</li><li>D. 只能白天交易</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：NFT 无标准做市商，买盘稀薄，地板价不等于能成交的价格。</p>\n</details>\n<p>---</p>\n<p><a href=\"01-defi\" style=\"color:#4dd0e1\">上一节：DeFi</a> | <a href=\"03-layer2\" style=\"color:#4dd0e1\">下一节：Layer 2</a></p>",
    "quiz": [
     {
      "q": "无常损失影响的是？",
      "opts": [
       "现货持有者",
       "流动性提供者（LP）",
       "矿工",
       "交易所"
      ],
      "a": 1,
      "exp": "LP 的双币持仓随价格波动偏离，收益可能低于单纯持有。"
     },
     {
      "q": "低流通市值、高 FDV 的代币设计对长期持有者有利。",
      "opts": [
       "正确",
       "错误"
      ],
      "a": 1,
      "exp": "巨额未解锁筹码是悬在头顶的确定性抛压，对长期持有者非常不利。"
     }
    ]
   },
   {
    "id": "s4-03-layer2",
    "title": "第 3 节：Layer 2",
    "dur": "约 50 分钟",
    "intro": "扩容问题： 以太坊主网（Layer 1）每秒只能处理约 15–30 笔交易，拥堵时 Gas 费暴涨。这就像一条只有 4 车道的高速公路。",
    "content": "<h4>本节目标</h4>\n<ul><li>理解\"区块链不可能三角\"和扩容问题</li><li>知道 Rollup 的基本原理（Optimistic 与 ZK）</li><li>了解主流 Layer 2 生态</li></ul>\n<h4>核心概念</h4>\n<p><strong>扩容问题：</strong> 以太坊主网（Layer 1）每秒只能处理约 15–30 笔交易，拥堵时 Gas 费暴涨。这就像一条只有 4 车道的高速公路。</p>\n<p><strong>不可能三角：</strong> 区块链难以同时实现三个目标——<strong>去中心化、安全性、可扩展性</strong>。Layer 1 优先保安全和去中心化，把扩容交给 Layer 2。</p>\n<p><strong>Layer 2 的核心思路</strong>：把大量交易搬到主网之外（链下）执行，最后把\"压缩后的结果\"打包提交回以太坊主网确认。安全由主网兜底，速度在二层获得——相当于在主网旁边修了高架桥，拥堵时走高架。</p>\n<p><strong>两类主流方案——Rollup：</strong></p>\n<ol><li><strong>Optimistic Rollup（乐观 rollup）</strong>：默认交易有效，留 7 天挑战期，任何人发现欺诈可提交证据推翻（\"欺诈证明\"）。代表：Arbitrum、Optimism。缺点：从 L2 提款回主网要等 7 天。</li><li><strong>ZK Rollup（零知识 rollup）</strong>：每笔交易附带密码学证明（有效性证明），主网验证证明即可确认，无需挑战期。更快但最终性成本高、技术复杂。代表：zkSync、StarkNet、Scroll。</li></ol>\n<p><strong>侧链（注意区别）：</strong> 如 Polygon PoS，独立运行、有自己的验证人，安全性不直接由以太坊保障——严格说不算 L2。</p>\n<p><strong>对用户的意义：</strong> 同样的交易，L2 手续费可能只有主网的 1/50–1/100；把币从主网转到 L2 需要跨链桥。</p>\n<h4>举例说明</h4>\n<ul><li>主网 Gas 50 美元一笔的兑换，在 Arbitrum 上可能只要 0.5 美元——小额交易、频繁交互基本都在 L2 完成</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"L2 是独立的区块链，跟以太坊无关\" → 主流 Rollup 的安全性和数据最终都锚定以太坊主网</li><li>❌ \"L2 绝对安全\" → 排序器中心化、合约升级权限、跨链桥风险都是现实存在的攻击面</li><li>❌ \"所有 L2 都一样\" → 欺诈证明 vs 有效性证明的设计差异，提款时间、安全模型都不同</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">第二层扩容</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Layer 2 / L2</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Rollup（打包）</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Rollup</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">乐观汇总</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Optimistic Rollup</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">零知识汇总</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">ZK Rollup</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">欺诈证明</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Fraud Proof</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">有效性证明</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Validity Proof</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">排序器</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Sequencer</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>L1 保安全与去中心化，L2 负责扩容——不可能三角的折中解</li><li>Rollup 把交易搬到链下执行、结果打包回主网确认；分 Optimistic（7 天挑战期）和 ZK（密码学证明）两派</li><li>L2 费用低得多，但引入排序器、桥等新风险点</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：Layer 2 解决的核心问题是？</strong></p>\n<ul><li>A. 比特币总量太少</li><li>B. 主网吞吐量低、手续费高</li><li>C. 助记词太难记</li><li>D. 交易所太少</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：L2 在链下处理大量交易并把结果提交主网，扩容降费的直接原因。</p>\n</details>\n<p><strong>2. 判断题：Optimistic Rollup 从 L2 提款回主网通常需要约 7 天挑战期。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：正确 解析：乐观机制默认交易有效，留挑战期供欺诈证明提交；ZK Rollup 无此等待。</p>\n</details>\n<p><strong>3. 选择题：ZK Rollup 的\"ZK\"指的是？</strong></p>\n<ul><li>A. 零知识证明（有效性证明）</li><li>B. 缩写没有含义</li><li>C. 代表开发者名字</li><li>D. 零手续费</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：A 解析：ZK = Zero-Knowledge，用密码学证明交易有效，主网验证证明即可，无需挑战期。</p>\n</details>\n<p>---</p>\n<p><a href=\"02-nft\" style=\"color:#4dd0e1\">上一节：NFT</a> | <a href=\"04-bridge\" style=\"color:#4dd0e1\">下一节：跨链桥</a></p>",
    "quiz": [
     {
      "q": "Optimistic Rollup 与 ZK Rollup 的核心区别在于？",
      "opts": [
       "手续费高低",
       "前者靠挑战期+欺诈证明，后者靠密码学有效性证明",
       "支持的代币不同",
       "开发团队国籍"
      ],
      "a": 1,
      "exp": "验证机制不同：乐观假设+事后挑战 vs 事前密码学证明。"
     },
     {
      "q": "DeFi 借贷协议要求借款人提供信用记录和收入证明。",
      "opts": [
       "正确",
       "错误"
      ],
      "a": 1,
      "exp": "DeFi 借贷是纯抵押模式，只看抵押物价值，因此必须超额抵押。"
     }
    ]
   },
   {
    "id": "s4-04-bridge",
    "title": "第 4 节：跨链桥",
    "dur": "约 50 分钟",
    "intro": "问题： 比特币链上的 BTC 无法直接在以太坊上使用；以太坊主网的资产要转到 Arbitrum 才能享受低手续费。不同区块链像不同的国家，货",
    "content": "<h4>本节目标</h4>\n<ul><li>理解跨链桥解决什么问题</li><li>知道桥的基本工作原理</li><li>认识跨链桥为什么是安全事故重灾区</li></ul>\n<h4>核心概念</h4>\n<p><strong>问题：</strong> 比特币链上的 BTC 无法直接在以太坊上使用；以太坊主网的资产要转到 Arbitrum 才能享受低手续费。不同区块链像不同的国家，货币不互通——<strong>跨链桥就是\"货币兑换所 + 押运车\"</strong>。</p>\n<p><strong>基本工作原理（锁定-铸造模式）：</strong></p>\n<ol><li>你在 A 链把代币存入桥的合约（锁定）</li><li>桥在 B 链给你铸造等值的\"映射代币\"（如 wBTC、wETH）</li><li>反向操作则销毁映射代币、解锁原代币</li></ol>\n<p><strong>桥的类型：</strong></p>\n<ul><li><strong>官方桥</strong>：由项目方运营（如 Arbitrum Bridge），相对可靠但可能慢</li><li><strong>第三方桥</strong>：如 Across、Stargate，靠流动性池快速转账，收手续费</li><li><strong>跨链 DEX 聚合器</strong>：如 Jumper、deBridge，帮你找最优路径</li></ul>\n<p><strong>为什么是黑客重灾区：</strong></p>\n<ol><li><strong>智能合约复杂</strong>：桥要同时理解两条链的状态机，代码量巨大、攻击面广</li><li><strong>锁定资产集中</strong>：桥合约里锁着巨额资金（常达数亿至数十亿美元），是黑客的最高价值目标</li><li><strong>验证机制薄弱</strong>：部分桥的签名验证设计有缺陷（Ronin 桥私钥泄露、Nomad 验证漏洞等）</li></ol>\n<ul><li>历史最大链上黑客事件几乎都与跨链桥有关：Ronin（6.2 亿美元）、Poly Network（6.1 亿美元）、Wormhole（3.26 亿美元）</li></ul>\n<p><strong>使用原则：</strong></p>\n<ul><li>小额、必要时才跨链</li><li>优先官方桥或经过时间验证的第三方桥</li><li>大额跨链分笔进行，先小额测试</li><li>跨到 L2 用原生 ETH 付 Gas，别把全部资金一次性换成映射代币</li></ul>\n<h4>举例说明</h4>\n<ul><li>你想在 Arbitrum 上玩 DeFi：用官方桥从主网转 0.1 ETH 测试（约 10 分钟到账），确认无误再转大额——顺序不能反</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"桥只是个转账工具，没风险\" → 桥是历史上被盗资金量最大的链上基础设施</li><li>❌ \"手续费低的桥就是好桥\" → 超低手续费可能意味着验证机制简陋，安全成本被省掉了</li><li>❌ \"跨过去就完事了\" → 映射代币依赖桥的信用，桥出事映射代币可能归零</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">跨链桥</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Bridge</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">封装代币</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Wrapped Token（wBTC 等）</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">锁定-铸造</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Lock-and-Mint</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">流动性网络</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Liquidity Network</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>跨链桥让资产在不同链之间转移，核心是锁定-铸造机制</li><li>桥合约资金量大、代码复杂，是黑客的头号目标，历史大案多出于此</li><li>用时选官方/老牌桥、先小额测试、大额分笔</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：wBTC 的本质是？</strong></p>\n<ul><li>A. 比特币的升级版</li><li>B. 以太坊上代表锁定比特币的映射代币</li><li>C. 一种稳定币</li><li>D. 矿工奖励</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：wBTC 由桥锁定真实 BTC 后在以太坊上铸造 1:1 映射，使 BTC 能在以太坊生态使用。</p>\n</details>\n<p><strong>2. 判断题：跨链桥是链上最安全的设施，可以放心存放大量资产。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：桥是历史被盗资金量最大的基础设施类别，只应作为通道，不应作为存钱的地方。</p>\n</details>\n<p><strong>3. 选择题：第一次使用某跨链桥转大额资金，正确做法是？</strong></p>\n<ul><li>A. 直接全额转</li><li>B. 先小额测试到账，确认无误再分笔转大额</li><li>C. 选手续费最低的转</li><li>D. 让群友代转</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：小额测试能验证桥是否正常、地址是否正确，分笔降低单笔风险。</p>\n</details>\n<p>---</p>\n<p><a href=\"03-layer2\" style=\"color:#4dd0e1\">上一节：Layer 2</a> | <a href=\"05-stablecoin-mech\" style=\"color:#4dd0e1\">下一节：稳定币机制</a></p>",
    "quiz": [
     {
      "q": "跨链桥频繁被盗的根本原因是？",
      "opts": [
       "运气差",
       "合约复杂且锁定资金巨大，是黑客最高价值目标",
       "员工工资低",
       "服务器在国外"
      ],
      "a": 1,
      "exp": "巨额集中资金 + 庞大攻击面，使桥成为链上安全重灾区。"
     }
    ]
   },
   {
    "id": "s4-05-stablecoin-mech",
    "title": "第 5 节：稳定币机制",
    "dur": "约 50 分钟",
    "intro": "法币抵押型（USDT / USDC）的运作：",
    "content": "<h4>本节目标</h4>\n<ul><li>深入理解三种稳定币机制的运作细节</li><li>学会分析一个稳定币的信用来源</li><li>理解 UST 崩盘的完整逻辑</li></ul>\n<h4>核心概念</h4>\n<p><strong>法币抵押型（USDT / USDC）的运作：</strong></p>\n<ul><li>用户给发行公司 1 美元 → 公司发行 1 枚代币给用户；赎回时反向操作</li><li>信用来源：公司是否真的持有等值储备（现金、国债等）</li><li>透明度问题：USDT 的储备构成曾多次受质疑（后改善为以美债为主）；USDC 定期审计且受美国监管，合规性强但可冻结特定地址</li><li>风险：储备不足、监管冻结、银行通道中断（USDC 曾受硅谷银行事件冲击短暂脱锚）</li></ul>\n<p><strong>加密抵押型（DAI）的运作：</strong></p>\n<ul><li>没有公司背书，纯链上超额抵押：存入 150 美元 ETH，最多借出 100 DAI</li><li>抵押物暴跌 → 触发清算，抵押物被折价拍卖还债</li><li>信用来源：抵押率 + 清算机制 + 抵押品质量（后来大量引入 USDC 等现实资产作为抵押，也引入了中心化风险）</li><li>风险：抵押品集体暴跌导致清算螺旋、黑天鹅行情下清算机制失灵</li></ul>\n<p><strong>算法稳定币（UST）崩盘的完整逻辑：</strong></p>\n<ol><li>UST 靠与 Luna 的\"双向销毁铸造\"维持锚定：UST &gt; 1 美元时铸造 Luna 换 UST 套利增供给；UST &lt; 1 时销毁 UST 铸造 Luna 回收流动性</li><li>这个机制依赖 Luna 有持续的市场需求和价格——本质是<strong>用波动资产支撑稳定资产</strong></li><li>死亡螺旋：市场下跌 → UST 略脱锚 → 套利者销毁 UST 铸造 Luna → Luna 供给暴增、价格暴跌 → 市场恐慌抛售 UST → 更多 Luna 被铸造 → 彻底崩盘</li><li>2022 年 5 月：UST 从 1 美元跌至不足 0.05 美元，Luna 从 100+ 美元跌至接近 0，约 400–600 亿美元市值蒸发</li></ol>\n<p><strong>分析任何稳定币的信用三问：</strong></p>\n<ol><li>锚定靠什么维持？（储备？抵押？算法？）</li><li>极端行情下，这个机制会失效吗？</li><li>失效时谁来兜底？（公司？清算机制？没有人？）</li></ol>\n<h4>举例说明</h4>\n<ul><li>挤兑场景推演：某稳定币储备 90% 是长期国债，市场恐慌要求赎回，短期需卖出国债 → 亏损 + 流动性枯竭 → 储备缩水 → 更恐慌——这是所有部分准备金体系的经典风险</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"市值大的稳定币就绝对安全\" → USDT 市值最大，但储备透明度、监管风险一直是讨论焦点；安全是光谱不是开关</li><li>❌ \"DAI 完全去中心化\" → 抵押品中相当比例是 USDC 等中心化资产，实际上部分依赖中心化信用</li><li>❌ \"UST 是意外，算法稳定币修修补补还能用\" → 无抵押算法稳定机制已被反复证伪，头部项目均已放弃该路线</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">储备</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Reserve</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">抵押率</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Collateral Ratio</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">死亡螺旋</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Death Spiral</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">脱锚</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">De-peg</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">铸币税</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Seigniorage</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>三类机制：法币储备（公司信用）、超额抵押（清算机制）、算法（已被证伪）</li><li>分析稳定币就问三句话：锚定靠什么、极端行情失效吗、失效谁兜底</li><li>UST 的教训：没有真实支撑的\"稳定\"只是信心游戏</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：UST 崩盘的根源是？</strong></p>\n<ul><li>A. 黑客攻击交易所</li><li>B. 用波动资产（Luna）支撑稳定资产，下跌时陷入铸造-抛售死亡螺旋</li><li>C. 美国政府查封</li><li>D. 矿工罢工</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：UST 的锚定依赖 Luna 的市场价值，下跌触发套利铸造 → Luna 抛压 → 信心崩塌的正反馈。</p>\n</details>\n<p><strong>2. 判断题：DAI 的信用完全来自链上超额抵押，没有任何中心化成分。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：DAI 抵押品中包含大量 USDC 等现实资产抵押，因此引入了中心化依赖成分。</p>\n</details>\n<p><strong>3. 选择题：评估一个稳定币时，最重要的三个问题不包括？</strong></p>\n<ul><li>A. 锚定靠什么维持</li><li>B. 极端行情机制是否失效</li><li>C. 失效时谁兜底</li><li>D. 图标设计好不好看</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：D 解析：信用分析三问是机制、极端情景、兜底方；外观设计不在信用框架内。</p>\n</details>\n<p>---</p>\n<p><a href=\"04-bridge\" style=\"color:#4dd0e1\">上一节：跨链桥</a> | <a href=\"06-regulation\" style=\"color:#4dd0e1\">下一节：监管与合规</a></p>",
    "quiz": [
     {
      "q": "UST 死亡螺旋的直接机制是？",
      "opts": [
       "储备被黑客转走",
       "脱锚→套利铸造 Luna→Luna 抛压→更深脱锚的正反馈",
       "美联储加息",
       "交易所下架"
      ],
      "a": 1,
      "exp": "用波动资产支撑稳定资产的结构性缺陷，在下跌中触发自我强化的崩盘。"
     }
    ]
   },
   {
    "id": "s4-06-regulation",
    "title": "第 6 节：监管与合规",
    "dur": "约 50 分钟",
    "intro": "监管是加密市场最大的外部变量之一。 一个国家的政策表态可能在几小时内让市场波动 10% 以上。",
    "content": "<h4>本节目标</h4>\n<ul><li>了解主要国家和地区的监管态度</li><li>理解监管事件为什么会引发市场剧烈波动</li><li>知道普通投资者需要关注的合规要点</li></ul>\n<h4>核心概念</h4>\n<p><strong>监管是加密市场最大的外部变量之一。</strong> 一个国家的政策表态可能在几小时内让市场波动 10% 以上。</p>\n<p><strong>主要地区的监管态度（概览）：</strong></p>\n<ul><li><strong>美国</strong>：多头监管。SEC（证监会）认为多数代币是证券，CFTC 认为 BTC/ETH 是商品；交易所被要求合规运营（Coinbase 上市，币安被迫退出美国市场）；立法进程持续推进。核心矛盾：创新 vs 投资者保护。</li><li><strong>中国</strong>：禁止姿态。2021 年起全面禁止加密货币交易和挖矿，境内交易所被清退，金融机构不得提供相关服务。境内参与存在法律风险。</li><li><strong>欧盟</strong>：立法先行。通过 MiCA（加密资产市场法规），对发行方、交易所、稳定币建立完整牌照制度——全球最系统的监管框架之一。</li><li><strong>香港 / 新加坡 / 日本</strong>：拥抱合规。发牌运营，吸引行业落地，是亚洲的合规枢纽。</li><li><strong>中东（阿联酋等）</strong>：积极吸引，建立专门监管区。</li></ul>\n<p><strong>普通投资者需要知道的合规要点：</strong></p>\n<ol><li><strong>税务</strong>：多数国家要求申报加密资产的买卖收益（资本利得税或个人所得税），链上交易记录永久公开，\"没人知道\"的想法不成立</li><li><strong>出入金</strong>：了解所在地区对 C2C 交易的法律边界，保留交易记录</li><li><strong>平台选择</strong>：优先选择在你所在地区合规持牌的平台</li><li><strong>监管事件应对</strong>：重大监管新闻引发暴跌时，先判断是\"情绪冲击\"还是\"规则实质变化\"，前者常是错杀，后者需要重新评估</li></ol>\n<h4>举例说明</h4>\n<ul><li>2021 年 5 月中国监管发文 → 市场单日暴跌 30%+；挖矿产业整体迁出中国</li><li>2024 年美国比特币现货 ETF 获批 → 机构资金合法入场通道打开，被视为行业里程碑</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"去中心化 = 不受监管\" → 监管管的是法币通道、交易所、发行人等\"出入口\"，你总要从这些口进出</li><li>❌ \"征税 = 打击行业\" → 征税往往是合法化的前奏，被征税意味着被承认为合法资产</li><li>❌ \"监管新闻都是利空\" → ETF 获批这类监管进展就是重大利好，要区分监管的方向</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">美国证监会</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">SEC</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">美国商品期货交易委员会</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">CFTC</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">欧盟加密资产市场法规</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">MiCA</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">交易所交易基金</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">ETF</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">资本利得税</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Capital Gains Tax</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>各法域态度差异巨大：禁止、立法规范、积极吸引并存</li><li>监管影响的是法币出入口和平台，链上活动管不到但变现环节必然触达</li><li>普通投资者关注：税务申报、平台合规资质、区分监管新闻的情绪冲击与实质变化</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：2024 年美国比特币现货 ETF 获批，意味着？</strong></p>\n<ul><li>A. 比特币成为法定货币</li><li>B. 机构和个人可通过合规证券账户投资比特币</li><li>C. 美国承认所有代币合法</li><li>D. 挖矿在美国被禁止</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：ETF 打通了传统金融账户合规配置 BTC 的通道，是行业合法化的重要里程碑。</p>\n</details>\n<p><strong>2. 判断题：因为区块链是去中心化的，所以个人交易加密资产不需要纳税。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：多数法域已明确加密资产的税收地位；链上记录公开可查，出入金环节更可追踪。</p>\n</details>\n<p><strong>3. 选择题：面对突发监管利空导致的市场暴跌，较理性的第一步是？</strong></p>\n<ul><li>A. 恐慌割肉</li><li>B. 分清是情绪冲击还是规则实质变化，再决定操作</li><li>C. 加倍抄底</li><li>D. 发消息骂项目方</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：情绪冲击常造成错杀，实质变化需要重估——不分青红皂白的反应都是错的。</p>\n</details>\n<p>---</p>\n<p><a href=\"05-stablecoin-mech\" style=\"color:#4dd0e1\">上一节：稳定币机制</a> | <a href=\"07-tokenomics\" style=\"color:#4dd0e1\">下一节：代币经济学</a></p>",
    "quiz": [
     {
      "q": "购买 NFT 通常自动包含作品的完整版权。",
      "opts": [
       "正确",
       "错误"
      ],
      "a": 1,
      "exp": "多数项目只转让所有权凭证和有限展示权，版权仍归创作者。"
     }
    ]
   },
   {
    "id": "s4-07-tokenomics",
    "title": "第 7 节：代币经济学",
    "dur": "约 50 分钟",
    "intro": "代币经济学（Tokenomics）= Token + Economics：一个代币的供给、分配、释放节奏和用途的经济设计。币价长期看就是供需",
    "content": "<h4>本节目标</h4>\n<ul><li>理解代币经济学（Tokenomics）的分析框架</li><li>学会评估一个代币的供给、分配和解锁</li><li>能识别高通胀、高抛压的代币设计</li></ul>\n<h4>核心概念</h4>\n<p><strong>代币经济学（Tokenomics）= Token + Economics</strong>：一个代币的供给、分配、释放节奏和用途的经济设计。<strong>币价长期看就是供需关系的体现</strong>，而供需都写在代币经济学里。</p>\n<p><strong>分析框架——供给端：</strong></p>\n<ol><li><strong>总量</strong>：固定（如 BTC 2100 万）还是无限增发？增发率多少？</li><li><strong>流通量 vs 总供应量</strong>：流通量小、总量大的代币 = 头顶悬着巨大的抛压（如流通仅 10%、其余 90% 在未来几年解锁）</li><li><strong>释放计划（Vesting）</strong>：团队和投资人份额何时解锁？解锁前往往是拉盘窗口，解锁时是确定性的卖压</li><li><strong>销毁机制</strong>：如以太坊 EIP-1559 销毁部分 Gas 费，使 ETH 在活跃期接近通缩</li></ol>\n<p><strong>分析框架——需求端：</strong></p>\n<ol><li><strong>代币的用途（Utility）</strong>：治理投票？支付 Gas？质押？分享协议收入？——没有实际用途的代币，需求只剩投机</li><li><strong>价值捕获</strong>：协议赚钱了，代币持有者能分到吗？（很多协议收入归公司或 Treasury，与代币无关）</li><li><strong>质押激励</strong>：激励越高，往往是通胀越高——用新印的币奖励锁仓，本质是把抛压延后</li></ol>\n<p><strong>分配公平性：</strong></p>\n<ul><li>团队/投资人占比过高（如 &gt;50%）→ 中心化 + 砸盘风险</li><li>早期巨鲸持仓集中 → 拉盘砸盘都由少数人决定</li></ul>\n<p><strong>实用速查清单：</strong></p>\n<ul><li>流通市值小 + FDV（完全稀释估值）大 → 警惕</li><li>未来 12 个月大额解锁 → 警惕</li><li>高通胀 + 无销毁 + 无实际用途 → 坚决远离</li></ul>\n<h4>举例说明</h4>\n<ul><li>某新币流通市值 1 亿，FDV 100 亿，团队份额 40% 两年后解锁——意味着现在的价格是建立在 1% 筹码上，未来 99% 的筹码都是潜在卖压</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"市值低 = 便宜 = 上涨空间大\" → 要看 FDV；低流通高 FDV 的币不是便宜，是贵在将来</li><li>❌ \"代币销毁多就一定涨\" → 销毁只是减少供给的一端，需求端没有起色照样跌</li><li>❌ \"代币有用 = 代币会涨\" → 协议成功但代币无价值捕获的案例比比皆是（如某些应用链）</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">代币经济学</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Tokenomics</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">完全稀释估值</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">FDV（Fully Diluted Valuation）</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">解锁 / 归属期</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Vesting</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">销毁</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Burn</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">价值捕获</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Value Accrual</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">治理</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Governance</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>代币经济学 = 供给（总量/流通/解锁/销毁）× 需求（用途/价值捕获/激励）</li><li>最危险的组合：低流通 + 高 FDV + 大额解锁临近</li><li>代币有用 ≠ 代币有价值捕获，读懂设计再谈投资</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：FDV（完全稀释估值）指的是？</strong></p>\n<ul><li>A. 当前流通市值</li><li>B. 所有代币全部解锁后的总市值</li><li>C. 交易所成交量</li><li>D. 团队持仓价值</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：FDV = 总供应量 × 现价，反映全部代币解锁后的估值，与流通市值的差距即未来抛压。</p>\n</details>\n<p><strong>2. 判断题：低流通量、高 FDV 的代币意味着\"上涨空间更大\"，值得重仓。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：这通常意味着大量未解锁筹码悬在头顶，解锁构成确定性抛压，是风险信号而非机会。</p>\n</details>\n<p><strong>3. 选择题：评估代币需求端，最关键的问题是？</strong></p>\n<ul><li>A. 图标设计</li><li>B. 代币有什么实际用途，协议价值能否传导给代币持有者</li><li>C. 社区有多少人</li><li>D. 上没上交易所</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：需求来自真实用途和价值捕获；没有价值传导，协议再成功代币也可能归零。</p>\n</details>\n<p>---</p>\n<p><a href=\"06-regulation\" style=\"color:#4dd0e1\">上一节：监管与合规</a> | <a href=\"08-quiz\" style=\"color:#4dd0e1\">下一节：阶段测验</a></p>",
    "quiz": [
     {
      "q": "侧链与 Layer 2 的区别在于侧链不依赖主网安全保障。",
      "opts": [
       "正确",
       "错误"
      ],
      "a": 0,
      "exp": "侧链有独立验证人，安全自负；Rollup 类 L2 的安全性锚定主网。"
     }
    ]
   }
  ],
  "exam": true
 },
 {
  "id": "s5",
  "num": "05",
  "title": "实战与复盘",
  "en": "PRACTICE & REVIEW",
  "risky": true,
  "desc": "",
  "chapters": [
   {
    "id": "s5-01-paper-trading",
    "title": "第 1 节：模拟盘",
    "dur": "约 40 分钟",
    "intro": "模拟盘（Paper Trading）：用虚拟资金在真实行情中练习交易。它能让你在不亏钱的情况下体验完整交易流程、验证策略、暴露心理问题。",
    "content": "<h4>本节目标</h4>\n<ul><li>理解模拟盘的价值和局限</li><li>知道怎么做模拟盘才有训练效果</li><li>掌握模拟盘转实盘的过渡标准</li></ul>\n<h4>核心概念</h4>\n<p><strong>模拟盘（Paper Trading）</strong>：用虚拟资金在真实行情中练习交易。它能让你在不亏钱的情况下体验完整交易流程、验证策略、暴露心理问题。</p>\n<p><strong>模拟盘练什么：</strong></p>\n<ol><li><strong>流程熟练度</strong>：下单、改单、止损单、止盈单、提币——把操作变成肌肉记忆</li><li><strong>策略验证</strong>：你的进出场规则在真实行情里到底什么样？连亏几笔？最大回撤多少？</li><li><strong>心理暴露</strong>：观察自己在\"盈利\"和\"亏损\"时的情绪反应（虽然是假钱，情绪是真的）</li></ol>\n<p><strong>怎么模拟才有效果（关键）：</strong></p>\n<ul><li><strong>当成真钱</strong>：金额设定在你的真实资金水平，仓位规则、止损纪律全部严格执行</li><li><strong>记录一切</strong>：每一笔都写进交易日志（见第 3 节），不能只看不记</li><li><strong>至少 50–100 笔</strong>：样本太小没有意义，至少要经历一次完整的涨跌周期</li><li><strong>定期核对</strong>：每周统计胜率、盈亏比、最大回撤，和预期是否一致</li></ul>\n<p><strong>模拟盘的局限（必须知道）：</strong></p>\n<ul><li>没有滑点和真实成交压力</li><li>没有真钱的恐惧和贪婪（最大的差距）</li><li>心态失真：亏了无所谓，赚了会膨胀</li></ul>\n<p><strong>转实盘的标准：</strong></p>\n<ul><li>连续 2–3 个月、50 笔以上，严格执行系统且结果可解释</li><li>知道自己的策略在什么行情失效</li><li>能在模拟亏损后情绪稳定执行下一笔</li></ul>\n<h4>举例说明</h4>\n<ul><li>模拟盘三个月做 80 笔突破交易：胜率 38%、盈亏比 2.8、最大回撤 12%——这套数字就是你上实盘前的\"产品说明书\"</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"模拟盘赚钱=实盘能赚钱\" → 模拟盘主要验证规则和流程，实盘还有心理和滑点两大变量</li><li>❌ \"随便下下单熟悉界面就行\" → 不记录、不统计的模拟盘等于没练</li><li>❌ \"模拟盘一直亏就直接上实盘试试运气\" → 顺序反了；模拟盘都管不住手，实盘只会更糟</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">模拟盘</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Paper Trading / Demo Trading</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">样本量</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Sample Size</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">统计验证</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Statistical Validation</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>模拟盘练流程、验策略、暴露心理，三样都要练</li><li>当成真钱管理：同等金额、同等纪律、全记录、50 笔起步</li><li>模拟合格再上实盘，模拟管不住手实盘必然失控</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：模拟盘最重要的正确姿势是？</strong></p>\n<ul><li>A. 重仓练胆量</li><li>B. 把虚拟资金当成真实资金，严格执行全部规则并记录</li><li>C. 只做赚钱的品种</li><li>D. 越快越好，熟悉按钮就结束</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：只有按真实标准执行并记录，模拟盘才有训练价值。</p>\n</details>\n<p><strong>2. 判断题：模拟盘持续盈利意味着实盘也一定会盈利。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：模拟盘缺少真钱的情绪压力和真实滑点，两者结果可能差异很大。</p>\n</details>\n<p><strong>3. 选择题：模拟盘转实盘前，合理的最低样本量是？</strong></p>\n<ul><li>A. 3 笔</li><li>B. 50 笔以上并经历完整涨跌周期</li><li>C. 1 笔大的</li><li>D. 没有要求</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：小样本只是运气；50 笔以上才能看清策略的胜率和回撤特征。</p>\n</details>\n<p>---</p>\n<p><a href=\"../04-advanced/\" style=\"color:#4dd0e1\">上一阶段：进阶与生态</a> | <a href=\"02-small-real\" style=\"color:#4dd0e1\">下一节：小资金实盘</a></p>",
    "quiz": []
   },
   {
    "id": "s5-02-small-real",
    "title": "第 2 节：小资金实盘",
    "dur": "约 40 分钟",
    "intro": "模拟盘和实盘之间隔着一条河：真钱的情绪。 小资金实盘就是用\"亏得起的学费\"完成从模拟到实盘的跨越——这是无法跳过的阶段。",
    "content": "<h4>本节目标</h4>\n<ul><li>理解为什么要用小资金过渡</li><li>掌握小资金实盘的正确姿势</li><li>知道什么时候可以逐步加大资金</li></ul>\n<h4>核心概念</h4>\n<p><strong>模拟盘和实盘之间隔着一条河：真钱的情绪。</strong> 小资金实盘就是用\"亏得起的学费\"完成从模拟到实盘的跨越——这是无法跳过的阶段。</p>\n<p><strong>\"小资金\"的定义：</strong> 亏光 100% 也不会影响你的生活、睡眠和情绪。对多数人而言，是几千到几万元人民币量级，具体因人而异。</p>\n<p><strong>小资金实盘的正确姿势：</strong></p>\n<ol><li><strong>完整走一遍资金生命周期</strong>：C2C 入金 → 现货买入 → 持有 → 卖出 → 提币到自有钱包 →（必要时）C2C 出金。验证出入金通道和流程，这是模拟盘给不了的</li><li><strong>把规则原封不动搬过来</strong>：模拟盘验证过的进出场、仓位、止损规则，实盘原样执行，不许\"灵活变通\"</li><li><strong>接受摩擦成本</strong>：真实的手续费、滑点、提币费都算进你的成本——验证策略是否还能盈利</li><li><strong>心理训练是核心科目</strong>：真钱浮亏时想不想改止损？盈利时想不想提前跑？记录这些冲动并和模拟盘时的自己对比</li></ol>\n<p><strong>逐步加大的标准（同时满足）：</strong></p>\n<ul><li>实盘满 3–6 个月、30 笔以上</li><li>交易结果与模拟盘统计特征一致（胜率、盈亏比没有显著走样）</li><li>没有发生过一次纪律性违规（临时改止损、冲动加仓等）</li><li>最大回撤发生时情绪稳定</li></ul>\n<p><strong>切记：</strong> 加大资金以\"档位\"进行（如 1 万 → 3 万 → 10 万），每档都要重新验证，不能一次跳档。降级同样规则：连续违规或回撤超限，降回上一档。</p>\n<h4>举例说明</h4>\n<ul><li>1 万实盘三个月：发现自己在浮亏 8% 时总想\"再扛扛\"——这是模拟盘里没暴露的问题。把这条写进日志，针对性训练止损纪律，达标后再加仓</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"小资金赚了没意思，直接上大资金\" → 跳级 = 把还没训练好的心理和流程暴露在大风险下</li><li>❌ \"小资金亏光就再充\" → 无上限充钱是赌博不是训练；给实盘设总预算</li><li>❌ \"实盘和模拟盘规则不同也没关系\" → 规则走样后所有统计都失效，等于从头再来</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">小资金实盘</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Small Live Account</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">资金档位</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Capital Tier</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">资金生命周期</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Capital Lifecycle</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>小资金实盘买的是\"真钱情绪训练\"，赚亏都不是重点</li><li>完整走通出入金 + 自管钱包流程</li><li>达标才升档，违规就降档，逐级验证</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：小资金实盘的核心价值是？</strong></p>\n<ul><li>A. 快速赚大钱</li><li>B. 以可控成本暴露和训练真实情绪下的执行力</li><li>C. 测交易所网速</li><li>D. 打发时间</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：小资金阶段赚亏都不是目的，训练真钱环境下的纪律才是。</p>\n</details>\n<p><strong>2. 判断题：模拟盘表现优秀后，可以直接投入全部积蓄开始实盘。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：真钱情绪是新变量，必须以小资金为过渡，逐级放大。</p>\n</details>\n<p><strong>3. 选择题：实盘交易中多次出现\"临时把止损改宽\"，应该？</strong></p>\n<ul><li>A. 忽略，反正只是小资金</li><li>B. 视为纪律违规，停止加仓甚至降档，针对性复盘训练</li><li>C. 把止损全部取消更方便</li><li>D. 加大资金摊平</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：纪律违规是系统性风险信号，必须通过停手和复盘纠正后才能继续升级。</p>\n</details>\n<p>---</p>\n<p><a href=\"01-paper-trading\" style=\"color:#4dd0e1\">上一节：模拟盘</a> | <a href=\"03-journal\" style=\"color:#4dd0e1\">下一节：交易日志</a></p>",
    "quiz": []
   },
   {
    "id": "s5-03-journal",
    "title": "第 3 节：交易日志",
    "dur": "约 40 分钟",
    "intro": "交易日志是你的\"交易黑匣子\"。 飞机失事后靠黑匣子找原因；交易亏损后靠日志找病根。没有日志，你的\"经验\"只是被记忆美化过的错觉。",
    "content": "<h4>本节目标</h4>\n<ul><li>理解交易日志为什么比预测更重要</li><li>掌握单笔日志和周期日志的记录方法</li><li>学会从日志中提炼改进点</li></ul>\n<h4>核心概念</h4>\n<p><strong>交易日志是你的\"交易黑匣子\"。</strong> 飞机失事后靠黑匣子找原因；交易亏损后靠日志找病根。没有日志，你的\"经验\"只是被记忆美化过的错觉。</p>\n<p><strong>单笔日志模板（每笔必记）：</strong></p>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">项目</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">内容</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">日期 / 币种</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">何时、买什么</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">方向 / 仓位</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">多/空、占总资金比例</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">入场理由</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">为什么买（策略信号？规则第几条？）</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">入场价 / 止损价 / 目标价</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">进场前先写下</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">出场价 / 出场理由</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">止损触发？目标到达？还是临时决定？</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">盈亏金额 / R 倍数</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">实际盈亏 ÷ 初始风险</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">截图</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">进场和出场时的 K 线图</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">情绪记录</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">当时的心情和冲动（关键！）</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">复盘备注</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">事后补：做对了什么、违反了什么</td></tr></tbody></table>\n<p><strong>R 倍数</strong>：把每笔交易换算成\"初始风险的倍数\"。止损离场 = -1R；止盈在 3 倍风险处 = +3R。这样不同仓位、不同币种的交易可以统一比较。</p>\n<p><strong>周期日志（每周/每月统计）：</strong></p>\n<ul><li>交易次数、胜率、平均盈亏比、总 R 值</li><li>最大单笔亏损、最大回撤</li><li>按策略分类的表现（哪种信号赚钱最多？）</li><li>按情绪分类的表现（冲动交易 vs 计划交易的差异）</li></ul>\n<p><strong>日志的价值在三个\"对比\"：</strong></p>\n<ol><li><strong>计划 vs 执行</strong>：止损被改过吗？加过计划外的仓吗？</li><li><strong>感觉 vs 数据</strong>：你以为自己胜率高，统计出来可能只有 35%</li><li><strong>不同市场状态的表现</strong>：牛市赚的钱是能力还是行情？日志能告诉你</li></ol>\n<h4>举例说明</h4>\n<ul><li>月度统计发现：按规则进场的交易平均 +1.8R；临时起意的交易平均 -1.2R → 结论：你的能力在规则内，所有亏损都来自手痒——以后只做计划内交易</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"记在脑子里就行\" → 记忆会被结果篡改：赚钱的交易越想越英明，亏钱的越想越\"差点就对了\"</li><li>❌ \"只记亏损的\" → 盈利交易里的坏习惯（比如靠运气扛过止损）不记录就永远不会被发现</li><li>❌ \"记流水账没有意义\" → 没有情绪字段和出场理由的日志只是对账单，不是训练工具</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">交易日志</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Trading Journal</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">R 倍数</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">R-Multiple</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">最大回撤</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Max Drawdown</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">交易统计</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Trading Statistics</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>日志是黑匣子：没有它，复盘无从谈起</li><li>单笔记九项：理由、价位、R 倍数、截图、情绪缺一不可</li><li>周期看三对比：计划 vs 执行、感觉 vs 数据、行情归因</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：R 倍数的意义是？</strong></p>\n<ul><li>A. 衡量杠杆大小</li><li>B. 把每笔交易统一换算成初始风险的倍数，便于跨交易比较</li><li>C. 计算手续费</li><li>D. 排名用</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：R 倍数标准化了不同仓位和币种的交易结果，是日志统计的核心指标。</p>\n</details>\n<p><strong>2. 判断题：交易日志只需记录亏损的交易，盈利的不用记。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：盈利交易中的坏习惯（违规扛单、运气止盈）同样需要暴露，只记亏损会得出一半的结论。</p>\n</details>\n<p><strong>3. 选择题：日志中\"情绪记录\"字段的主要作用是？</strong></p>\n<ul><li>A. 抒发感情</li><li>B. 发现情绪与违规操作的关联，针对性训练</li><li>C. 给别人看</li><li>D. 没有实际作用</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：多数纪律违规发生在特定情绪状态下，找到规律才能针对性修正。</p>\n</details>\n<p>---</p>\n<p><a href=\"02-small-real\" style=\"color:#4dd0e1\">上一节：小资金实盘</a> | <a href=\"04-review\" style=\"color:#4dd0e1\">下一节：定期复盘</a></p>",
    "quiz": []
   },
   {
    "id": "s5-04-review",
    "title": "第 4 节：定期复盘",
    "dur": "约 40 分钟",
    "intro": "复盘 = 用日志的数据回答四个问题：",
    "content": "<h4>本节目标</h4>\n<ul><li>建立周复盘、月复盘、季度复盘的节奏</li><li>掌握复盘的标准流程</li><li>学会区分\"运气\"和\"能力\"</li></ul>\n<h4>核心概念</h4>\n<p><strong>复盘 = 用日志的数据回答四个问题：</strong></p>\n<ol><li>我的系统是否在按预期运行？（胜率、盈亏比、回撤 vs 历史基准）</li><li>我的执行是否忠实于系统？（违规次数、违规成本）</li><li>当前市场状态变了没有？（我的策略适配现在的行情吗？）</li><li>下一步只改一件事，改什么？（改进清单只取一项）</li></ol>\n<p><strong>三个时间尺度：</strong></p>\n<p><strong>周复盘（30 分钟）：</strong></p>\n<ul><li>本周交易笔数、R 值合计</li><li>有没有违规？成本多少？</li><li>检查持仓是否符合规则（止损是否该移动？仓位是否超标？）</li></ul>\n<p><strong>月复盘（1–2 小时）：</strong></p>\n<ul><li>完整统计：胜率、平均盈亏比、期望值、最大回撤</li><li>分类分析：按策略信号、按币种、按情绪状态分组对比</li><li>资金曲线更新，和目标对比</li><li>写一段文字总结：这个月赚钱/亏钱的根本原因是什么？</li></ul>\n<p><strong>季度复盘（半天）：</strong></p>\n<ul><li>市场结构是否改变？（牛熊转换？波动率水平？）</li><li>我的策略是否仍适配？是否需要降档/切换？</li><li>系统参数是否需要调整？（参数调整必须有数据依据，不是凭感觉）</li><li>更新下一季度的交易计划和资金安排</li></ul>\n<p><strong>区分运气和能力：</strong></p>\n<ul><li>赚钱但胜率下降、靠一两笔大赚 → 可能更多是行情赏饭</li><li>亏小钱但统计特征稳定、执行零违规 → 系统可能在正常工作，坚持</li><li>判断标准永远是<strong>过程指标（执行、统计特征）优先于结果指标（赚了多少）</strong></li></ul>\n<h4>举例说明</h4>\n<ul><li>月复盘发现：突破策略连续磨损（-8R），但趋势策略正常（+5R），且市场已横盘 6 周 → 结论不是\"突破策略失效了\"，而是行情不匹配 → 行动：暂停突破信号，只保留趋势信号，等波动率回升再恢复</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"亏了就改系统\" → 单次结果不构成改系统的依据，样本和统计特征才是</li><li>❌ \"复盘 = 后悔大会\" → 纠结单笔对错没有意义，找模式和规律才有</li><li>❌ \"一次改进五件事\" → 同时改多个变量，下个周期你就无法归因了——一次只改一项</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">复盘</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Review / Retrospective</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">期望值</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Expectancy</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">过程指标</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Process Metrics</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">归因</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Attribution</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>复盘节奏：周看执行、月看统计、季度看系统适配</li><li>复盘四问：系统对吗、执行忠吗、行情变吗、只改什么</li><li>过程指标优先于盈亏结果；一次只改一个变量</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：月统计发现胜率下降但总额盈利（靠两笔大的），合理的判断是？</strong></p>\n<ul><li>A. 自己状态神勇，加倍投入</li><li>B. 结果可能主要来自行情和运气，过程指标在恶化，需要警惕</li><li>C. 统计没有意义</li><li>D. 把大的那两笔删掉重算</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：集中靠少数大赚撑起的盈利不可持续；过程指标恶化是预警信号。</p>\n</details>\n<p><strong>2. 判断题：单笔大亏之后应该立即修改交易系统规则。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：单个样本不构成修改依据；先查是否执行违规，再看统计特征，规则修改以数据为准。</p>\n</details>\n<p><strong>3. 选择题：为什么复盘时\"一次只改一件事\"？</strong></p>\n<ul><li>A. 因为懒</li><li>B. 多变量同时改变会让改进效果无法归因</li><li>C. 规则越少越好</li><li>D. 交易所不允许</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：科学改进要求单变量验证；同时改多个因素，你永远不会知道哪个起了作用。</p>\n</details>\n<p>---</p>\n<p><a href=\"03-journal\" style=\"color:#4dd0e1\">上一节：交易日志</a> | <a href=\"05-iteration\" style=\"color:#4dd0e1\">下一节：迭代系统</a></p>",
    "quiz": []
   },
   {
    "id": "s5-05-iteration",
    "title": "第 5 节：迭代系统",
    "dur": "约 50 分钟",
    "intro": "交易系统 = 你所有规则的集合，包括：买什么（标的池）、什么时候买（入场）、买多少（仓位）、什么时候卖（出场/止损）、什么情况下不做（过滤条",
    "content": "<h4>本节目标</h4>\n<ul><li>理解交易系统迭代的标准流程</li><li>掌握\"小步快走\"的改进哲学</li><li>完成属于你自己的交易系统 v1.0</li></ul>\n<h4>核心概念</h4>\n<p><strong>交易系统 = 你所有规则的集合</strong>，包括：买什么（标的池）、什么时候买（入场）、买多少（仓位）、什么时候卖（出场/止损）、什么情况下不做（过滤条件）。第五阶段的最终交付物，就是把这个系统写成一页纸。</p>\n<p><strong>迭代的核心哲学：小步、单变量、有回滚。</strong></p>\n<p><strong>迭代流程：</strong></p>\n<ol><li><strong>提出假设</strong>：\"把止损从 2 个 ATR 改为 1.5 个 ATR，可能减少磨损\"</li><li><strong>历史检验</strong>：用日志/回测数据看假设是否成立</li><li><strong>小样本实盘验证</strong>：用最小仓位跑 20–30 笔</li><li><strong>对比决定</strong>：新参数 vs 旧参数，哪个的期望值更高？</li><li><strong>固化或回滚</strong>：胜出则写入系统；不如旧版则回滚，记录\"试过的失败方案\"</li></ol>\n<p><strong>迭代中的纪律：</strong></p>\n<ul><li>一次只改一个参数（见复盘一节）</li><li>新改动先小仓位，不要全仓切换</li><li>改动要有日志依据，拒绝\"我觉得\"式的修改</li><li>保留系统版本号：v1.0 → v1.1 → v2.0，每次改动写变更日志</li></ul>\n<p><strong>交易系统 v1.0 模板（示例，请替换成你的版本）：</strong></p>\n<p>```</p>\n<h4>我的交易系统 v1.0</h4>\n<h4>标的池</h4>\n<ul><li>核心：BTC、ETH（≥70% 资金）</li><li>卫星：市值前 20 的币种（≤30% 资金）</li><li>禁止：新上线不足 6 个月的币、 meme 币、合约杠杆</li></ul>\n<h4>入场（满足全部）</h4>\n<ul><li>日线级别多头趋势（价格 &gt; MA200 且 MA50 向上）</li><li>回调至 MA50 或 0.5 斐波那契区域</li><li>出现企稳 K 线（锤子线/阳包阴）</li></ul>\n<h4>仓位</h4>\n<ul><li>单笔风险 ≤ 总资金 1.5%，按止损距离倒推仓位</li><li>单币种最大仓位 ≤ 总资金 20%</li><li>总仓位 ≤ 80%，永远留 20% 稳定币/现金</li></ul>\n<h4>出场</h4>\n<ul><li>止损：入场价下方 1.5 个 ATR，或企稳 K 线最低点</li><li>止盈：分批——涨 1R 减 1/3，移动止损跟随</li><li>趋势终结信号（跌破 MA50 或 20 日低点）清仓</li></ul>\n<h4>过滤（出现任一项，当天不交易）</h4>\n<ul><li>已连续亏损 3 笔</li><li>当日情绪波动大（刚经历 FOMO 或愤怒）</li><li>重大宏观事件公布前 24 小时</li></ul>\n<h4>复盘</h4>\n<ul><li>每周日 30 分钟周复盘；每月第一个周末月复盘</li></ul>\n<p>```</p>\n<h4>举例说明</h4>\n<ul><li>系统 v1.0 运行三个月，日志显示：过滤条件触发 5 次，每次都在规避亏损——这验证了你的过滤器有效，v1.1 不需要动它；而止盈规则导致过早下车（平均只吃到了趋势的 1/3）→ v1.1 只改止盈：从固定 1R 减仓改为移动止损，验证 30 笔后再定</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"系统越复杂越专业\" → 能执行的最简系统 &gt; 执行不了的完美系统</li><li>❌ \"别人的系统拿来就用\" → 仓位规模、时间、性格不同，别人的系统你无法执行</li><li>❌ \"频繁大改系统\" → 一个月换一次系统 = 永远没有样本，永远在\"新鲜感交易\"</li><li>❌ \"系统写完就束之高阁\" → 系统活在日志和复盘里，每月至少读一遍自己的系统</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">交易系统</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Trading System</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">期望值</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Expectancy</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">变更日志</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Changelog</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">回滚</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Rollback</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>迭代 = 假设 → 检验 → 小样本验证 → 固化/回滚，一次一变量</li><li>系统要能写成一页纸：标的、入场、仓位、出场、过滤、复盘</li><li>能执行的最简系统胜过执行不了的完美系统</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：系统迭代的正确节奏是？</strong></p>\n<ul><li>A. 每周全部重写</li><li>B. 小步单变量，小样本验证后固化或回滚</li><li>C. 亏了立刻大改</li><li>D. 永远不改</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：单变量小步迭代保证可归因，小样本验证控制风险，回滚机制保护有效旧版。</p>\n</details>\n<p><strong>2. 判断题：交易系统越复杂、包含的指标越多，就越专业可靠。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：复杂度超出执行能力 = 0。能稳定执行的简单系统远优于无法执行的复杂系统。</p>\n</details>\n<p><strong>3. 选择题：为什么系统改动要保留版本号和变更日志？</strong></p>\n<ul><li>A. 好看</li><li>B. 追踪每次改动的效果，区分有效改进和无效折腾</li><li>C. 给朋友炫耀</li><li>D. 交易所要求</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：没有版本记录，你无法知道是哪次改动改善了（或恶化了）系统表现。</p>\n</details>\n<p>---</p>\n<p><a href=\"04-review\" style=\"color:#4dd0e1\">上一节：定期复盘</a> | <a href=\"../\" style=\"color:#4dd0e1\">回到首页</a></p>",
    "quiz": []
   }
  ],
  "exam": false
 },
 {
  "id": "s6",
  "num": "06",
  "title": "指标与理论大全",
  "en": "INDICATORS & THEORIES",
  "risky": true,
  "desc": "",
  "chapters": [
   {
    "id": "s6-01-liquidity",
    "title": "流动性（Liquidity）",
    "dur": "约 40 分钟",
    "intro": "流动性指资产转化为交易媒介（现金）的难易和快慢程度。 在交易中，流动性由\"即时性需求\"（想马上买的人）和\"即时性供应\"（想马上卖的人）共同驱",
    "content": "<h4>本节目标</h4>\n<ul><li>理解流动性的定义和衡量方式</li><li>知道流动性如何影响买卖成本和滑点</li><li>会把流动性作为选币、选平台的标准之一</li></ul>\n<h4>核心概念</h4>\n<p><strong>流动性指资产转化为交易媒介（现金）的难易和快慢程度。</strong> 在交易中，流动性由\"即时性需求\"（想马上买的人）和\"即时性供应\"（想马上卖的人）共同驱动。</p>\n<p><strong>流动性好的市场：</strong></p>\n<ul><li>买卖价差（点差）窄：买一 9.99 万、卖一 10 万，差距很小</li><li>盘口深度厚：大单砸下去价格几乎不动</li><li>成交即时：想买卖立刻能成交，不用等对手盘</li></ul>\n<p><strong>流动性差的市场：</strong></p>\n<ul><li>点差大、深度薄：几千美元就能把价格推高几个百分点</li><li>滑点显著：你看到的价和你成交的价差距大</li><li>想卖卖不掉：挂单挂着没人接</li></ul>\n<p><strong>为什么币圈特别要关注流动性：</strong></p>\n<ul><li>BTC、ETH 流动性最好；市值排名 100 名以后的山寨币流动性急剧恶化</li><li>同一币种在不同交易所流动性差异巨大——小所可能有\"看得到、成交不了\"的假深度</li><li>流动性枯竭时，暴跌会被放大（买盘瞬间消失，只剩卖盘互相踩踏）</li></ul>\n<p><strong>衡量方式：</strong> 24 小时成交量、盘口深度（各价位挂单量）、买卖价差、市值排名。</p>\n<h4>举例说明</h4>\n<ul><li>你 10 万美元市价买 BTC：成交价几乎就是看到的价（滑点 &lt;0.1%）</li><li>你 1 万美元市价买某小山寨币：可能直接吃掉盘口三层，成交均价高出挂单价 5%+——还没赚钱先亏 5% 摩擦成本</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"成交量大 = 流动性一定好\" → 还要看深度分布和价差；刷量交易所成交量可以造假</li><li>❌ \"价格高的币流动性好\" → 流动性和单价无关，只和资金容量有关</li><li>❌ \"反正我资金小，流动性无所谓\" → 小资金在极端行情同样会遇到流动性枯竭，且山寨币的进出成本占比更高</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">流动性</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Liquidity</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">买卖价差</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Bid-Ask Spread</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">盘口深度</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Order Book Depth</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">滑点</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Slippage</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">成交量</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Volume</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>流动性 = 买卖的难易程度，看点差、深度、成交量</li><li>流动性差 = 滑点大 + 踩踏风险高，进出成本高昂</li><li>选币先看流动性：市值排名靠后的币种把流动性作为第一筛选条件</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：流动性差最直接的交易代价是？</strong></p>\n<ul><li>A. 手续费降低</li><li>B. 滑点增大，实际成交价格偏离预期</li><li>C. K 线更好看</li><li>D. 没有影响</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：流动性差意味着对手盘不足，市价单要吃穿多层盘口，成交均价偏离挂单价，即滑点。</p>\n</details>\n<p><strong>2. 判断题：判断流动性好坏只需要看 24 小时成交量一个指标。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：成交量可能刷量造假；还要结合盘口深度、买卖价差一起判断。</p>\n</details>\n<p><strong>3. 选择题：市场恐慌暴跌时，流动性通常会？</strong></p>\n<ul><li>A. 变好，更容易成交</li><li>B. 枯竭，买盘消失、滑点暴增</li><li>C. 不变</li><li>D. 先变好后变差</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：恐慌中做市商撤单、买盘观望，流动性瞬间枯竭，放大了跌幅（踩踏效应）。</p>\n</details>\n<p>---</p>\n<p><a href=\"index\" style=\"color:#4dd0e1\">返回附录目录</a></p>",
    "quiz": []
   },
   {
    "id": "s6-02-rsi",
    "title": "RSI（Relative Strength Index，相对强弱指标）",
    "dur": "约 40 分钟",
    "intro": "RSI 由韦尔斯·王尔德（Welles Wilder）于 1978 年首创，通过计算一段时间内上涨幅度与下跌幅度的比值，衡量市场的强弱力量。",
    "content": "<h4>本节目标</h4>\n<ul><li>理解 RSI 的计算思想</li><li>掌握超买超卖区间与背离用法</li><li>知道强趋势中的\"钝化\"陷阱</li></ul>\n<h4>核心概念</h4>\n<p><strong>RSI 由韦尔斯·王尔德（Welles Wilder）于 1978 年首创</strong>，通过计算一段时间内上涨幅度与下跌幅度的比值，衡量市场的强弱力量。数值在 <strong>0～100</strong> 之间：</p>\n<ul><li><strong>80 以上：超买区</strong>（市场极强，短期过热，可考虑减仓）</li><li><strong>20 以下：超卖区</strong>（市场极弱，短期过冷，可考虑关注反弹）</li><li>部分软件默认 70/30 为界，80/20 更严格、信号更少——周期参数（常用 14）和阈值需配套理解</li></ul>\n<p><strong>核心用法——背离：</strong></p>\n<ul><li><strong>顶背离</strong>：价格创出新高，但 RSI 没有创新高 → 上涨动力衰竭，转跌警示</li><li><strong>底背离</strong>：价格创出新低，但 RSI 没有创新低 → 下跌动力衰竭，转涨警示</li><li>背离是 RSI 最有价值的用法，比单纯的超买超卖阈值可靠得多</li></ul>\n<p><strong>钝化陷阱（最重要的认知）：</strong> 强趋势中 RSI 会\"钝化\"——<strong>超买之后还能超买，超卖之后还能超卖</strong>。单边牛市中 RSI 可以连续几周在 80 以上，此时看到\"超买\"就卖出会过早下车。<strong>超买不必然回调，它只是提示\"短期涨多了\"</strong>。</p>\n<p><strong>实用组合：</strong></p>\n<ul><li>RSI 定\"位置\"（短期过热/过冷）+ 趋势过滤（价格是否在均线上）定方向</li><li>背离 + 关键支撑阻力 = 高胜率反转参考</li></ul>\n<h4>举例说明</h4>\n<ul><li>牛市中 BTC 连涨三周，RSI 一直挂在 82：超买信号不断出现但价格不回调——钝化中唯一正确的做法是不把它当卖出信号</li><li>价格第二次冲到 10 万创新高，RSI 却只到 75（上次 85）→ 顶背离，结合成交量萎缩 → 减仓信号</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"RSI 到 80 必须立刻卖出\" → 钝化会让\"必卖\"变成\"卖飞\"，背离比阈值重要</li><li>❌ \"RSI 适合所有周期\" → 周期越小噪音越多；日线背离的可靠性远高于小时图</li><li>❌ \"背离出现立即反转\" → 背离只是警示，趋势真正的终结需要价格自身确认（跌破支撑/均线）</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">相对强弱指标</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">RSI</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">超买 / 超卖</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Overbought / Oversold</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">背离</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Divergence</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">钝化</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Failure Swing / 失效摆动</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>RSI 衡量涨跌力量对比，0–100，80/20 为传统超买卖区</li><li>背离是最有价值的用法，顶背离警示转跌、底背离警示转涨</li><li>强趋势中会钝化：超买不必然回调，阈值信号必须配合趋势过滤</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：RSI 顶背离的定义是？</strong></p>\n<ul><li>A. RSI 和价格都创新高</li><li>B. 价格创新高，但 RSI 未创新高</li><li>C. RSI 创新高，价格未创新高</li><li>D. RSI 跌破 20</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：价格新高但动量指标未新高，说明推动力衰减，是最经典的背离形态。</p>\n</details>\n<p><strong>2. 判断题：RSI 进入超买区（&gt;80）就意味着价格马上会下跌。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：强趋势中 RSI 会持续钝化，超买后还能超买；超买只是提示，不是卖出指令。</p>\n</details>\n<p><strong>3. 选择题：使用 RSI 时，下列哪种做法最合理？</strong></p>\n<ul><li>A. 只看 RSI 数值交易</li><li>B. RSI 背离 + 趋势方向 + 支撑阻力综合判断</li><li>C. 1 分钟线背离立刻重仓反向</li><li>D. RSI 超卖就无限抄底</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：任何指标单独使用都会失效；RSI 背离需要趋势和价格结构的配合确认。</p>\n</details>\n<p>---</p>\n<p><a href=\"01-liquidity\" style=\"color:#4dd0e1\">上一篇：流动性</a> | <a href=\"03-macd\" style=\"color:#4dd0e1\">下一篇：MACD</a></p>",
    "quiz": []
   },
   {
    "id": "s6-03-macd",
    "title": "MACD（Moving Average Convergence Divergence）",
    "dur": "约 40 分钟",
    "intro": "MACD 由三条要素构成：",
    "content": "<h4>本节目标</h4>\n<ul><li>理解 MACD 的三个组成部分</li><li>掌握金叉死叉与零轴的用法</li><li>会用 MACD 背离判断趋势衰竭</li></ul>\n<h4>核心概念</h4>\n<p><strong>MACD 由三条要素构成：</strong></p>\n<ol><li><strong>DIF（快线）</strong>：EMA12 − EMA26，两条指数均线的差离值</li><li><strong>DEA（慢线）</strong>：DIF 的 9 日EMA，即 DIF 的平滑版</li><li><strong>MACD 柱</strong>：DIF − DEA 的差值，柱状图显示</li></ol>\n<p><strong>基本信号：</strong></p>\n<ul><li><strong>金叉</strong>：DIF 上穿 DEA → 买入信号</li><li><strong>死叉</strong>：DIF 下穿 DEA → 卖出信号</li><li>柱体由负转正、由正转负：动能转变的更早提示</li></ul>\n<p><strong>零轴的重要性（常被忽视）：</strong></p>\n<ul><li>DIF 和 DEA 在<strong>零轴上方</strong>运行 = 多头市场，金叉的可信度高、死叉多是回调</li><li>在<strong>零轴下方</strong>运行 = 空头市场，死叉的可信度高、金叉多是反弹</li><li>一句话：<strong>零轴定方向，金叉死叉找时机</strong>。零轴下方的金叉，胜率远低于零轴上方的金叉</li></ul>\n<p><strong>背离用法：</strong></p>\n<ul><li><strong>顶背离</strong>：价格新高，但 DIF 未新高 → 上涨动力衰竭</li><li><strong>底背离</strong>：价格新低，但 DIF 未新低 → 下跌动力衰竭</li><li>结合 RSI 背离互相印证，可靠性更高</li></ul>\n<p><strong>滞后性：</strong> MACD 基于均线，天然滞后——它告诉你\"趋势已经转变\"，而不是\"趋势将要转变\"。用它抓转折点会慢半拍，用它确认趋势更称职。</p>\n<h4>举例说明</h4>\n<ul><li>零轴上方金叉 + 价格回踩 MA20 企稳 → 顺势加仓点</li><li>零轴下方金叉 → 只当作反弹信号，不重仓，等价格站上零轴再认真看多</li><li>价格第三波新高，DIF 一波比一波低 → 顶背离 + 跌破 MA50 → 清仓信号</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"金叉就买、死叉就卖\" → 不看零轴位置的金叉死叉在震荡市会被反复打脸</li><li>❌ \"MACD 能预测顶底\" → 它是滞后确认指标，背离也只是警示</li><li>❌ \"柱体翻红就是底部\" → 零轴下方的柱体翻红只是下跌动能减弱，不代表转势</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">指数平滑移动平均线</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">EMA</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">差离值</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">DIF</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">信号线</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">DEA / Signal Line</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">金叉 / 死叉</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Golden Cross / Death Cross</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">零轴</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Zero Line</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>MACD = DIF + DEA + 柱，均线差离体系</li><li>零轴定方向，金叉死叉定时机；零轴下方金叉只当反弹</li><li>背离是趋势衰竭警示；指标滞后，用于确认而非预测</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：DIF 的定义是？</strong></p>\n<ul><li>A. MA5 − MA10</li><li>B. EMA12 − EMA26</li><li>C. 收盘价 − 开盘价</li><li>D. 上轨 − 下轨</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：DIF 是 12 日与 26 日指数均线的差离值，反映中短期趋势差。</p>\n</details>\n<p><strong>2. 判断题：零轴下方的金叉和零轴上方的金叉，可信度相同。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：零轴代表多空分界；下方金叉在空头环境中只是反弹信号，胜率明显低于上方金叉。</p>\n</details>\n<p><strong>3. 选择题：价格创新高但 DIF 未创新高，这种现象叫？</strong></p>\n<ul><li>A. 金叉</li><li>B. 顶背离，上涨动力衰竭的警示</li><li>C. 死叉</li><li>D. 钝化</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：价格与动量指标走势不一致即为背离，顶背离提示趋势可能终结，需价格信号确认。</p>\n</details>\n<p>---</p>\n<p><a href=\"02-rsi\" style=\"color:#4dd0e1\">上一篇：RSI</a> | <a href=\"04-bollinger\" style=\"color:#4dd0e1\">下一篇：布林带</a></p>",
    "quiz": []
   },
   {
    "id": "s6-04-bollinger",
    "title": "布林带（Bollinger Bands）",
    "dur": "约 40 分钟",
    "intro": "布林带由三条线构成：",
    "content": "<h4>本节目标</h4>\n<ul><li>理解布林带的构造（中轨、上下轨）</li><li>掌握收口（Squeeze）与开口（Bulge）的用法</li><li>会用 %b 指标量化价格在通道中的位置</li></ul>\n<h4>核心概念</h4>\n<p><strong>布林带由三条线构成：</strong></p>\n<ul><li><strong>中轨</strong>：20 日移动平均线</li><li><strong>上轨</strong> = 中轨 + 2 倍标准差</li><li><strong>下轨</strong> = 中轨 − 2 倍标准差</li></ul>\n<p><strong>核心逻辑：标准差衡量波动率。</strong> 波动小的时候轨道自动收窄，波动大的时候自动张开——布林带是\"自适应\"的通道。</p>\n<p><strong>两种关键状态：</strong></p>\n<ol><li><strong>收口（Squeeze，带宽收缩）</strong>：波动率压缩到极致，往往是<strong>大行情的前奏</strong>。此时不要押注方向，等突破后顺势跟进。口诀：<strong>收口必破，只等方向</strong>。</li><li><strong>开口（Bulge，带宽张大）</strong>：趋势正在展开。价格沿上轨运行 = 强势多头（别做空）；沿下轨运行 = 强势空头。开口极大时要注意——<strong>波动率均值回归，极度扩张后趋势可能接近尾声</strong>。</li></ol>\n<p><strong>%b 指标（量化价格在通道中的位置）：</strong></p>\n<ul><li>%b =（最新价 − 下轨）÷（上轨 − 下轨）</li><li>%b = 0.5：正好在中轨；%b = 1：顶到上轨；%b &gt; 1：突破上轨；%b &lt; 0：跌破下轨</li><li>好处：不同价格、不同波动率的市场可以用同一标尺比较</li></ul>\n<p><strong>常见用法：</strong></p>\n<ul><li>收口后向上突破上轨 + 放量 → 趋势启动信号</li><li>价格触及上轨但 %b 明显低于前高（价格新高、%b 未新高）→ 动能背离</li></ul>\n<h4>举例说明</h4>\n<ul><li>BTC 日线布林带收窄到数月最窄 → 两周后放量突破上轨，一波 40% 的主升浪启动</li><li>价格贴着上轨连续上涨五周，布林带张口巨大 → 历史经验：张口极大时追高风险收益比很差</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"碰到上轨就卖、碰到下轨就买\" → 强趋势中价格会\"沿着轨道走\"，这样做会卖飞整段主升浪</li><li>❌ \"收口后随便赌一个方向\" → 收口只告诉你\"要动了\"，不告诉你往哪动；赌方向不如等突破</li><li>❌ \"布林带参数必须用 20/2\" → 20/2 是默认值不是圣旨；调整参数前先理解它衡量的是什么</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">布林带</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Bollinger Bands</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">收口 / 挤压</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Squeeze</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">开口 / 膨胀</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Bulge</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">标准差</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Standard Deviation</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">%b 指标</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">%b（Percent Bandwidth）</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>布林带 = 均线 ± 2 倍标准差，自动适应波动率</li><li>收口是蓄势信号（等方向），开口是趋势展开（顺轨道方向）</li><li>%b 指标把价格位置标准化，便于跨市场比较</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：布林带持续收口通常意味着？</strong></p>\n<ul><li>A. 行情结束了</li><li>B. 波动率压缩到极致，大行情正在酝酿，应等待突破方向</li><li>C. 价格要归零</li><li>D. 指标失效</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：收口代表波动率极低，是趋势启动前的蓄力状态；方向未知，不宜提前押注。</p>\n</details>\n<p><strong>2. 判断题：强势上涨趋势中，价格触及布林上轨就应该立即卖出。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：强趋势中价格会沿上轨持续运行，\"碰轨就卖\"会卖飞主升浪；开口状态下应顺势持有。</p>\n</details>\n<p><strong>3. 选择题：%b 指标等于 1 表示？</strong></p>\n<ul><li>A. 价格在中轨</li><li>B. 价格正好触及上轨</li><li>C. 价格跌破下轨</li><li>D. 指标出错</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：%b =（价格 − 下轨）/（上轨 − 下轨），%b = 1 即价格位于上轨，&gt; 1 为突破上轨。</p>\n</details>\n<p>---</p>\n<p><a href=\"03-macd\" style=\"color:#4dd0e1\">上一篇：MACD</a> | <a href=\"05-left-right-trading\" style=\"color:#4dd0e1\">下一篇：左侧 vs 右侧交易</a></p>",
    "quiz": []
   },
   {
    "id": "s6-05-left-right-trading",
    "title": "左侧交易 vs 右侧交易",
    "dur": "约 50 分钟",
    "intro": "左侧交易（逆向操作）： 在下跌途中越跌越买，在上涨途中越涨越卖——在趋势反转\"确认之前\"行动，赌的是\"已经跌够了/涨够了\"。",
    "content": "<h4>本节目标</h4>\n<ul><li>理解左侧和右侧交易的核心区别</li><li>知道两种风格分别适合什么人</li><li>能识别自己天然偏向哪一侧并规避其弱点</li></ul>\n<h4>核心概念</h4>\n<p><strong>左侧交易（逆向操作）：</strong> 在下跌途中越跌越买，在上涨途中越涨越卖——<strong>在趋势反转\"确认之前\"行动</strong>，赌的是\"已经跌够了/涨够了\"。</p>\n<p><strong>右侧交易（顺势操作）：</strong> 等趋势确认反转后再入场——跌了等见底信号买，涨了等突破追——<strong>在趋势\"确认之后\"行动</strong>，赚的是趋势中段。</p>\n<p><strong>核心对比：</strong></p>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">维度</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">左侧交易</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">右侧交易</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">操作方向</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">越跌越买、越涨越卖</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">追涨杀跌（顺势）</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">胜率</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">低（经常买早了）</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">高（趋势确认后进场）</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">盈亏比</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">高（买在底部区域，成本低）</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">低（进出场都偏晚）</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">资金要求</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">大（要扛住继续下跌并分批补）</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">小</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">适合人群</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">资金量大、做长线、心态稳</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">短线技术派、纪律性强</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">主要风险</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">\"从山顶买到山脚\"，满仓套牢</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">容易\"卖飞\"，频繁磨损</td></tr></tbody></table>\n<p><strong>一句话总结：左侧交易用低胜率换高盈亏比，右侧交易用低盈亏比换高胜率。长期看两者都能赚钱，选错自己性格的才会亏钱。</strong></p>\n<p><strong>新手的关键提醒：</strong> 多数新手以为自己是左侧（\"跌多了就该买\"），实际上既扛不住左侧的浮亏深度，又没有右侧的纪律执行力——两头不沾最危险。<strong>新手从右侧开始</strong>（趋势确认后买、跌破支撑卖），等系统成熟后再考虑左侧仓位。</p>\n<h4>举例说明</h4>\n<ul><li>左侧玩家：BTC 从 12 万跌到 9 万开始分批买入，跌到 7 万满仓浮亏 22%，扛到两年后的 20 万——赚大钱的背后是\"中途可能归零\"的风险和巨大的心理承压</li><li>右侧玩家：等 BTC 放量突破 11 万（确认重回上涨趋势）买入 10.8 万止损，吃 11 万→18 万的主升段，18 万跌破 20 日线离场——少赚顶底但几乎不承受深套</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"左侧是高手、右侧是韭菜\" → 两派都有顶级玩家；错的是拿自己的性格去硬套不匹配的风格</li><li>❌ \"左侧就是无脑越跌越买\" → 专业左侧有严格的资金分层和\"判断失效即停手\"规则，不是无限补仓</li><li>❌ \"右侧永远不会被套\" → 假突破专杀右侧追单者，所以必须配合止损和确认条件</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">左侧交易</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Left-side Trading / Contrarian</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">右侧交易</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Right-side Trading / Momentum</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">逆势</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Against the Trend</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">顺势</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">With the Trend</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>左侧赌反转、右侧等确认；前者高盈亏比低胜率，后者高胜率低盈亏比</li><li>左侧需要大资金和强心态，右侧需要严纪律</li><li>新手从右侧起步，风格跟着性格和资金量选</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：左侧交易的特点是？</strong></p>\n<ul><li>A. 胜率高、盈亏比高</li><li>B. 胜率低、盈亏比高，需要大资金扛浮亏</li><li>C. 不需要资金管理</li><li>D. 永不亏损</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：左侧在趋势确认前逆势进场，经常买早（低胜率），但成本极低（高盈亏比），且需要资金分批承受浮亏。</p>\n</details>\n<p><strong>2. 判断题：右侧交易因为等趋势确认，所以永远不会被套。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：假突破会制造\"已确认\"的假象，右侧追单者照样被套，必须配合止损与确认条件。</p>\n</details>\n<p><strong>3. 选择题：对新手最友好的起步方式是？</strong></p>\n<ul><li>A. 满仓左侧抄底</li><li>B. 右侧交易，趋势确认后进场并严格止损</li><li>C. 随机交易</li><li>D. 合约十倍杠杆</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：右侧的高胜率和明确的止损规则更适合建立纪律与信心；左侧的深度浮亏是新手心理承受不了的。</p>\n</details>\n<p>---</p>\n<p><a href=\"04-bollinger\" style=\"color:#4dd0e1\">上一篇：布林带</a> | <a href=\"06-dow-theory\" style=\"color:#4dd0e1\">下一篇：道氏理论</a></p>",
    "quiz": []
   },
   {
    "id": "s6-06-dow-theory",
    "title": "道氏理论（Dow Theory）",
    "dur": "约 50 分钟",
    "intro": "道氏理论由查尔斯·道（Charles Dow，华尔街日报创始人、道琼斯指数发明者）创立，是现代技术分析的鼻祖。 他本人没有成书，理论由后人整",
    "content": "<h4>本节目标</h4>\n<ul><li>了解技术分析的起源和六大核心原理</li><li>理解\"趋势分层\"和\"三阶段\"模型</li><li>知道道氏理论的局限性</li></ul>\n<h4>核心概念</h4>\n<p><strong>道氏理论由查尔斯·道（Charles Dow，华尔街日报创始人、道琼斯指数发明者）创立，是现代技术分析的鼻祖。</strong> 他本人没有成书，理论由后人整理。它回答最根本的问题：<strong>什么是趋势，趋势如何演变。</strong></p>\n<p><strong>六大核心原理：</strong></p>\n<ol><li><strong>指数反映一切</strong>：市场价格已经消化了所有已知信息（消息、情绪、资金），研究价格就够了</li><li><strong>市场有三种趋势</strong>：</li></ol>\n<p>- 主要趋势：持续 1 年以上（大牛市/大熊市）——坐船要看这个</p>\n<p>- 次要趋势：3 周到 3 个月（主要趋势中的回调）——仓位调整看这里</p>\n<p>- 短暂趋势：3 周以内（日常噪音）——不预测、不操作</p>\n<ol><li><strong>主要趋势分三阶段</strong>：</li></ol>\n<p>- 第一阶段（累积期）：聪明钱在坏消息中悄悄吸筹，价格温和筑底</p>\n<p>- 第二阶段（上涨期）：基本面好转，大众入场，趋势最顺畅的一段</p>\n<p>- 第三阶段（派发期）：利好满天飞、人人谈论市场，聪明钱悄悄出货——对应币圈\"连卖菜阿姨都在问怎么买币\"</p>\n<ol><li><strong>两种指数必须相互验证</strong>：原始道指分工业指数和铁路指数，两者同向确认趋势才可靠（币圈可类比：BTC 与 ETH 是否同步新高）</li><li><strong>趋势需要成交量确认</strong>：上涨要放量配合；量价背离要警惕</li><li><strong>趋势持续直到明确反转信号出现</strong>：在趋势发出明确的反转证据前，假设它会继续——这是所有趋势跟踪策略的哲学根基</li></ol>\n<p><strong>对币圈的映射：</strong> 把\"两种指数互验\"换成\"BTC 与 ETH 是否共振\"；把三阶段对应到减半周期与大众情绪周期，你会发现币圈的牛熊几乎总是按这个剧本走。</p>\n<h4>举例说明</h4>\n<ul><li>三阶段模板：熊市底部（累积）→ 减半后缓涨（聪明钱）→ 主流媒体铺天盖地报道、新人蜂拥开户（派发期特征）→ 见顶</li><li>互验失效警示：BTC 创新高但 ETH 明显不跟（不互验）→ 趋势可信度打折，警惕假突破</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"道氏理论可以直接给出买卖点位\" → 它是市场哲学和框架，不是具体交易系统；可操作性差正是它的公认缺点</li><li>❌ \"三阶段的时间表是固定的\" → 各阶段长短差异巨大，只认结构不认日历</li><li>❌ \"技术分析万能\" → 道氏本人强调它更适合判断主要趋势，对短期波动无能为力</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">道氏理论</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Dow Theory</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">主要 / 次要 / 短暂趋势</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Primary / Secondary / Minor Trend</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">累积期 / 派发期</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Accumulation / Distribution</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">相互验证</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Confirmation</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>道氏理论是技术分析的元理论：三种趋势、三阶段、量价确认、趋势延续假设</li><li>最有实践价值的四条：趋势分层、三阶段识别、量价配合、BTC/ETH 互验</li><li>它给框架不给点位——拿它当世界观，不当交易系统</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：道氏理论中，主要趋势通常持续？</strong></p>\n<ul><li>A. 几天</li><li>B. 3 周到 3 个月</li><li>C. 1 年以上</li><li>D. 1 小时</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：C 解析：主要趋势 1 年以上；次要趋势 3 周–3 月；短暂趋势 3 周以内。</p>\n</details>\n<p><strong>2. 判断题：道氏理论认为，趋势的延续不需要成交量的配合。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：量价确认是六大原理之一：健康的上涨需要成交量放大配合，量价背离是警示信号。</p>\n</details>\n<p><strong>3. 选择题：\"连从不炒币的亲戚都在问怎么买\"最接近三阶段中的哪一阶段？</strong></p>\n<ul><li>A. 累积期</li><li>B. 上涨期中段</li><li>C. 派发期（情绪顶的特征）</li><li>D. 新一轮累积期</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：C 解析：人人谈论、大众狂热是派发期（第三阶段）的典型特征，往往是聪明钱出货、趋势接近顶部的信号。</p>\n</details>\n<p>---</p>\n<p><a href=\"05-left-right-trading\" style=\"color:#4dd0e1\">上一篇：左侧 vs 右侧交易</a> | <a href=\"07-gann-theory\" style=\"color:#4dd0e1\">下一篇：江恩理论</a></p>",
    "quiz": []
   },
   {
    "id": "s6-07-gann-theory",
    "title": "江恩理论（Gann Theory）",
    "dur": "约 50 分钟",
    "intro": "江恩（W.D. Gann，1878–1955）是 20 世纪初最富传奇色彩的交易员之一。 他的理论核心：市场价格的波动遵循数学比例法则，价格",
    "content": "<h4>本节目标</h4>\n<ul><li>了解江恩理论的核心思想：价格与数学比例</li><li>知道江恩最著名的比例法则和时间周期</li><li>理性看待江恩理论的争议</li></ul>\n<h4>核心概念</h4>\n<p><strong>江恩（W.D. Gann，1878–1955）是 20 世纪初最富传奇色彩的交易员之一。</strong> 他的理论核心：<strong>市场价格的波动遵循数学比例法则，价格与时间之间存在\"和谐\"的数学关系。</strong> 掌握这些比例关系，就能预测支撑、阻力和转折点。</p>\n<p><strong>价格比例法则（最实用的部分）：</strong></p>\n<ul><li>指数的涨跌以前期重要低点或高点为基数，按特定比例累加或衰减</li><li>关键比例：<strong>1/4、1/3、1/2、2/3、3/4，以及整数倍</strong>；其中 <strong>50%（二分之一）回撤</strong>被后世视为最重要的位置</li><li>经典案例（江恩著作中最著名的回测）：上证指数 1994 年低点 325.89 点，恰好约为前期高点 1044.9 点的 0.311 倍（接近衰减 2/3），误差仅 1% 左右</li><li>用法：找到一段明显趋势，用这些比例分割涨跌幅，得到一组\"值得关注的支撑/阻力价位\"——这与今天广泛使用的<strong>斐波那契回撤（0.382/0.5/0.618）高度相似</strong>，本质同源</li></ul>\n<p><strong>时间周期理论：</strong></p>\n<ul><li>江恩认为重要转折点发生在特定时间周期上：短期看 7 天、14 天、30 天；中长期看 45 天、90 天、180 天、360 天（对应圆的分割）</li><li>结合\"周年纪念日\"（历史高点/低点的整数年时间窗）寻找变盘窗口</li><li>现代演化：斐波那契时间窗、周期分析</li></ul>\n<p><strong>几何角度线（江恩线）：</strong></p>\n<ul><li>把价格运动画在 1×1（45 度）、1×2、2×1 等斜率线上，价格沿着某条角度线运行说明趋势健康，跌破关键角度线预示转弱</li></ul>\n<p><strong>理性看待争议：</strong> 江恩的\"神奇预测\"和巨额财富传说缺少可验证的公开记录，后世研究者对其真实业绩争议很大。他的比例工具中，<strong>50% 回撤和周年时间窗</strong>确有统计上的广泛认同；但整套体系的精确预测能力从未被严格证实。<strong>把它当作\"提供观察价位的辅助工具\"，而不是\"预测未来的水晶球\"。</strong></p>\n<h4>举例说明</h4>\n<ul><li>BTC 从 5 万涨到 15 万后回撤：50% 回撤位 = 10 万，2/3 回撤位 ≈ 8.33 万——把这两个价位标记在图上，和斐波那契回撤的 0.5/0.618 几乎重合，作为观察支撑的区域而非精确买点</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"按比例算出的价位必到\" → 比例给出的是\"关注区域\"，市场没有必到的价位</li><li>❌ \"江恩理论可以精确预测顶底时间\" → 时间窗只是提示关注，胜率并无严格证据</li><li>❌ \"回测吻合 = 理论有效\" → 事后总能找到吻合的比例（325 与 1044 的 0.311 也是众多比例中被挑出来的一个），这是幸存者偏差</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">江恩理论</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Gann Theory</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">百分五十回撤</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">50% Retracement</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">江恩角度线</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Gann Fan</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">时间窗</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Time Window</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>江恩核心：价格与数学比例、时间周期的\"和谐关系\"</li><li>最实用遗产：50% 回撤（≈斐波那契 0.5）、整数比例价位、周年时间窗</li><li>争议巨大：当辅助工具用，别当预测真理用</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：江恩理论中最被后世广泛认同的关键比例是？</strong></p>\n<ul><li>A. 0.118</li><li>B. 50%（二分之一回撤）</li><li>C. 99%</li><li>D. π</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：50% 回撤在江恩比例中最受认可，也与现代斐波那契 0.5 回撤重合。</p>\n</details>\n<p><strong>2. 判断题：按江恩比例精确计算的价位就是市场必然到达的目标价。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：比例价位是\"值得关注的区域\"，事后吻合的案例存在幸存者偏差，不能作为精确预测依据。</p>\n</details>\n<p><strong>3. 选择题：对待江恩理论最理性的态度是？</strong></p>\n<ul><li>A. 奉为圣典精确预测</li><li>B. 完全无视</li><li>C. 把比例工具当作标记观察区位的辅助，验证后再行动</li><li>D. 只信时间窗</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：C 解析：取其工具价值（比例、时间窗作为观察提示），去其预测神话，配合价格行为确认再交易。</p>\n</details>\n<p>---</p>\n<p><a href=\"06-dow-theory\" style=\"color:#4dd0e1\">上一篇：道氏理论</a> | <a href=\"index\" style=\"color:#4dd0e1\">返回附录目录</a></p>",
    "quiz": []
   },
   {
    "id": "s6-08-ma-granville",
    "title": "移动平均线与葛兰碧八大法则（MA / Granville's Rules）",
    "dur": "约 40 分钟",
    "intro": "移动平均线（MA）：N 个周期收盘价的平均值连线，是最古老、使用最广的指标。",
    "content": "<h4>本节目标</h4>\n<ul><li>理解 SMA 与 EMA 的区别</li><li>掌握葛兰碧八大法则的核心买点与卖点</li><li>知道均线的滞后性与适用场景</li></ul>\n<h4>核心概念</h4>\n<p><strong>移动平均线（MA）</strong>：N 个周期收盘价的平均值连线，是最古老、使用最广的指标。</p>\n<ul><li><strong>SMA（简单均线）</strong>：直接算术平均，反应平稳</li><li><strong>EMA（指数均线）</strong>：越近的收盘价权重越大，反应更快（MACD、趋势跟踪多用 EMA）</li><li>常用组合：MA20（月线）、MA50、MA200（牛熊分界线）</li></ul>\n<p><strong>葛兰碧八大法则（Granville's 8 Rules）</strong>：用价格与 MA 的关系系统化买卖点的经典框架。</p>\n<p><strong>四大买点：</strong></p>\n<ol><li>均线由下降转平，价格从下方<strong>突破均线</strong> → 第一买点</li><li>价格回落<strong>不破均线</strong>（均线已走平向上）→ 第二买点</li><li>价格急跌<strong>远离均线</strong>过远 → 超跌反弹的第三买点（逆势，慎用）</li><li>价格跌破均线后<strong>迅速收回均线上方</strong> → 假跌破的第四买点</li></ol>\n<p><strong>四大卖点（镜像）：</strong></p>\n<ol><li>均线由上升转平，价格<strong>跌破均线</strong> → 第一卖点</li><li>价格反弹<strong>不过均线</strong> → 第二卖点</li><li>价格急涨<strong>远离均线</strong>过远 → 超买卖点</li><li>价格突破均线后<strong>迅速跌回</strong> → 假突破卖点</li></ol>\n<p><strong>本质：均线是动态的支撑/阻力。</strong> 买点 1、2 是顺势，买点 3 是逆势（只适合大周期的极端偏离）。</p>\n<h4>举例说明</h4>\n<ul><li>牛市中价格沿 MA20 上行，每次回踩不破都是买点 2；直到某日放量跌破且三日收不回（卖点 1/8 确认）→ 离场</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"金叉买死叉卖一定赚\" → 均线滞后，震荡市连续磨损；必须配合趋势过滤</li><li>❌ \"周期越短越灵敏越好\" → 越短噪音越大；短均线适合交易、长均线适合定方向</li><li>❌ \"买点 3（远离均线）稳赚\" → 极端行情可以连续极端，逆势接刀风险大</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">简单 / 指数均线</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">SMA / EMA</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">金叉 / 死叉</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Golden / Death Cross</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">葛兰碧法则</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Granville's Rules</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">滞后</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Lag</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>SMA 平稳、EMA 灵敏；MA200 是常用牛熊分界</li><li>葛兰碧八大法则 = 4 买 4 卖，核心是\"均线即动态支撑阻力\"</li><li>买点 1、2 顺势可用，买点 3 逆势慎用；所有均线信号都需趋势过滤</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：EMA 与 SMA 的主要区别是？</strong></p>\n<ul><li>A. EMA 更平稳</li><li>B. EMA 对近期价格赋予更高权重，反应更快</li><li>C. EMA 不用收盘价</li><li>D. 没有区别</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：EMA 是指数加权，越近的数据权重越大，因此比 SMA 更灵敏但更颠簸。</p>\n</details>\n<p><strong>2. 判断题：葛兰碧买点 3（价格急跌远离均线买入）属于顺势操作。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：买点 3 赌的是均值回归，属于逆势操作，只适合大周期极端偏离且需严格控制风险。</p>\n</details>\n<p><strong>3. 选择题：价格跌破已走平向上的均线但三日内收回，对应八大法则中的？</strong></p>\n<ul><li>A. 第一卖点</li><li>B. 第四买点（假跌破）</li><li>C. 第七卖点</li><li>D. 无效信号</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：跌破后迅速收回是典型的假跌破（洗盘），为第四买点。</p>\n</details>\n<p>---</p>\n<p><a href=\"07-gann-theory\" style=\"color:#4dd0e1\">上一篇：江恩理论</a> | <a href=\"09-adx\" style=\"color:#4dd0e1\">下一篇：ADX</a></p>",
    "quiz": []
   },
   {
    "id": "s6-09-adx",
    "title": "ADX / DMI 趋向指标",
    "dur": "约 40 分钟",
    "intro": "大多数指标告诉你\"价格在哪\"，ADX 告诉你\"该不该交易\"。 它是衡量趋势强度而非方向的指标——这是它在众多指标中独一无二的地方。",
    "content": "<h4>本节目标</h4>\n<ul><li>理解 ADX 回答的根本问题：\"有没有趋势\"</li><li>掌握 ADX 与 +DI / -DI 的配合用法</li><li>学会用 ADX 过滤震荡行情</li></ul>\n<h4>核心概念</h4>\n<p><strong>大多数指标告诉你\"价格在哪\"，ADX 告诉你\"该不该交易\"。</strong> 它是衡量<strong>趋势强度</strong>而非方向的指标——这是它在众多指标中独一无二的地方。</p>\n<p><strong>构成（DMI 系统，Welles Wilder 创立）：</strong></p>\n<ul><li><strong>+DI</strong>：上升方向线，多方力量</li><li><strong>-DI</strong>：下降方向线，空方力量</li><li><strong>ADX</strong>：两条 DI 的平滑平均值，表示趋势的\"强度\"</li></ul>\n<p><strong>读法（以 14 周期为例）：</strong></p>\n<ul><li><strong>ADX &gt; 25</strong>：趋势存在，可以顺势操作</li><li><strong>ADX &lt; 20</strong>：无趋势，震荡市——趋势策略停用，改用网格/高抛低吸，或干脆不做</li><li><strong>ADX 从低位（&lt;20）上穿 20–25</strong>：新趋势正在形成</li><li><strong>ADX 高位（&gt;40）掉头向下</strong>：趋势接近尾声，准备移动止盈</li><li><strong>+DI 上穿 -DI</strong>：方向转多；-DI 上穿 +DI：方向转空</li></ul>\n<p><strong>ADX 的高位钝化：</strong> ADX 很高不代表\"要跌了\"，只代表趋势很强；它的拐头向下才是趋势衰竭信号。</p>\n<h4>举例说明</h4>\n<ul><li>价格横盘六周，ADX 只有 14 → 此时任何趋势跟踪信号都不执行（省钱的核心技巧）</li><li>ADX 从 17 升到 28，+DI 在 -DI 之上 → 确认趋势启动，回调买入策略开仓</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"ADX 高 = 超买该卖\" → ADX 不衡量超买超卖，只衡量趋势强度</li><li>❌ \"ADX 金叉 DI 才交易\" → DI 交叉在震荡市频繁失效，必须先看 ADX 是否 &gt; 25</li><li>❌ \"ADX 万能\" → 它滞后明显，只回答\"现在有没有趋势\"，不回答\"未来涨还是跌\"</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">平均趋向指数</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">ADX（Average Directional Index）</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">趋向指标</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">DMI（Directional Movement Index）</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">方向线</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">+DI / -DI</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>ADX 是趋势强度计：&gt;25 有趋势，&lt;20 是震荡</li><li>用法顺序：先看 ADX 决定\"做不做\"，再看 ±DI 决定\"做哪边\"</li><li>ADX 高位拐头 = 趋势收尾信号，不是反转信号</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：ADX 指标衡量的是？</strong></p>\n<ul><li>A. 价格高低</li><li>B. 趋势强度，而非方向</li><li>C. 成交量</li><li>D. 波动率</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：ADX 只回答\"趋势强不强\"，方向由 +DI/-DI 判断。</p>\n</details>\n<p><strong>2. 判断题：ADX 高于 40 说明市场超买，应该立即卖出。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：ADX 高位代表趋势强劲，不等于超买；其拐头向下才提示趋势接近尾声。</p>\n</details>\n<p><strong>3. 选择题：ADX 低于 20 时，合理的做法是？</strong></p>\n<ul><li>A. 加大趋势策略仓位</li><li>B. 停用趋势策略，改用震荡策略或观望</li><li>C. 满仓梭哈</li><li>D. 开 20 倍杠杆</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：低 ADX = 无趋势环境，趋势策略会被磨损，应切换策略或空仓等待。</p>\n</details>\n<p>---</p>\n<p><a href=\"08-ma-granville\" style=\"color:#4dd0e1\">上一篇：均线与葛兰碧</a> | <a href=\"10-kdj\" style=\"color:#4dd0e1\">下一篇：KDJ</a></p>",
    "quiz": []
   },
   {
    "id": "s6-10-kdj",
    "title": "KDJ 随机指标",
    "dur": "约 40 分钟",
    "intro": "KDJ 源自随机指标（Stochastic），是 A 股和币圈使用最广的短线指标之一。 与 RSI 衡量\"涨跌力量比\"不同，KDJ 衡量收盘",
    "content": "<h4>本节目标</h4>\n<ul><li>理解 KDJ 与 RSI 的区别（位置 vs 速度）</li><li>掌握 K、D、J 三条线的读法</li><li>认识 KDJ 的钝化与频繁金叉死叉问题</li></ul>\n<h4>核心概念</h4>\n<p><strong>KDJ 源自随机指标（Stochastic），是 A 股和币圈使用最广的短线指标之一。</strong> 与 RSI 衡量\"涨跌力量比\"不同，KDJ 衡量<strong>收盘价在最近波动区间中的位置</strong>——偏\"速度\"指标。</p>\n<p><strong>构成：</strong></p>\n<ul><li>先算 RSV =（收盘价 − N 日最低价）÷（N 日最高价 − N 日最低价）× 100</li><li><strong>K 线</strong>：RSV 的平滑（快）</li><li><strong>D 线</strong>：K 的平滑（慢）</li><li><strong>J 线</strong>：3K − 2D（放大版，最灵敏，可超出 0–100）</li></ul>\n<p><strong>读法：</strong></p>\n<ul><li><strong>&gt;80 超买，&lt;20 超卖</strong>（短线参考）</li><li><strong>金叉/死叉</strong>：K 上穿 D 买，下穿卖</li><li><strong>J 值 &lt;0 或 &gt;100</strong>：极端超卖/超买，短线反转概率大</li><li><strong>背离</strong>：价格新低但 KDJ 不新低 → 底背离（比 RSI 更敏感）</li></ul>\n<p><strong>与 RSI 对比：</strong> KDJ 更灵敏、信号更多、适合短线；假信号也更多。RSI 更稳、适合波段。</p>\n<h4>举例说明</h4>\n<ul><li>震荡市中 KDJ 在 20–80 之间反复金叉死叉——每次信号都执行会被手续费磨死；只在超买超卖区的交叉才有效</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"KDJ 金叉就买\" → 震荡市中 KDJ 金叉极多，必须结合位置（超卖区金叉）与趋势</li><li>❌ \"J 值到 110 马上见顶\" → 强趋势中 J 值可以长期钝化在高位</li><li>❌ \"KDJ 适合大周期\" → 它天生为短线设计，周期越大噪声比优势越小</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">随机指标</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Stochastic / KDJ</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">未成熟随机值</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">RSV</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">钝化</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Saturation</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>KDJ 测\"收盘在区间中的位置\"，比 RSI 灵敏，适合短线</li><li>只有超卖区的金叉、超买区的死叉才值得执行</li><li>强趋势中会钝化，金叉死叉频率高是常态不是失效</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：KDJ 与 RSI 的核心区别是？</strong></p>\n<ul><li>A. KDJ 用成交量计算</li><li>B. KDJ 衡量收盘价在近期区间中的位置（速度），RSI 衡量涨跌力量比</li><li>C. KDJ 只能用于股票</li><li>D. 没有区别</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：KDJ 基于区间位置更灵敏，RSI 基于涨跌幅度更稳定。</p>\n</details>\n<p><strong>2. 判断题：任何位置的 KDJ 金叉都是可靠的买入信号。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：只有超卖区（&lt;20）的金叉胜率较高；中位金叉在震荡市大量失效。</p>\n</details>\n<p><strong>3. 选择题：J 值小于 0 通常表示？</strong></p>\n<ul><li>A. 指标出错</li><li>B. 极端超卖，短线反弹概率增大</li><li>C. 必涨</li><li>D. 趋势强劲</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：J=3K−2D 波动幅度大，&lt;0 代表极端弱势，常为短线超卖信号（需结合趋势）。</p>\n</details>\n<p>---</p>\n<p><a href=\"09-adx\" style=\"color:#4dd0e1\">上一篇：ADX</a> | <a href=\"11-stoch-wr\" style=\"color:#4dd0e1\">下一篇：随机指标与威廉指标</a></p>",
    "quiz": []
   },
   {
    "id": "s6-11-stoch-wr",
    "title": "KD 随机指标与威廉指标（Williams %R）",
    "dur": "约 40 分钟",
    "intro": "KD 随机指标（Stochastic Oscillator，George Lane 创立）：比较收盘价与最近 N 日价格区间的位置。",
    "content": "<h4>本节目标</h4>\n<ul><li>理解经典随机指标（Stochastic）的 %K / %D</li><li>掌握威廉指标 %R 的读法（注意它是\"反向\"的）</li><li>知道两者的同源关系与使用场景区别</li></ul>\n<h4>核心概念</h4>\n<p><strong>KD 随机指标（Stochastic Oscillator，George Lane 创立）</strong>：比较收盘价与最近 N 日价格区间的位置。</p>\n<ul><li><strong>%K</strong> =（收盘价 − N 日最低）÷（N 日最高 − N 日最低）× 100</li><li><strong>%D</strong> = %K 的 3 日平滑（信号线）</li><li><strong>读法</strong>：&gt;80 超买、&lt;20 超卖；%K 上穿 %D 金叉买，下穿死叉卖</li><li>与 KDJ 同源：KDJ 是在 KD 基础上加了一条更灵敏的 J 线</li></ul>\n<p><strong>威廉指标（Williams %R，Larry Williams 创立）</strong>：公式几乎一样，但结果<strong>上下颠倒</strong>：</p>\n<ul><li>%R =（N 日最高 − 收盘价）÷（N 日最高 − N 日最低）× <strong>−100</strong></li><li>数值在 <strong>0 到 −100</strong> 之间：<strong>高于 −20 超买，低于 −80 超卖</strong>（注意方向与习惯相反！）</li><li>事实上：<strong>%R ≈ %K − 100</strong>，两者只差一个符号平移，信息完全相同</li></ul>\n<p><strong>使用要点：</strong></p>\n<ul><li>两者都极其敏感，<strong>只适合短线</strong>；中线以上周期假信号成灾</li><li>超买超卖区 + 背离是最可靠用法：价格新低但 %R 不新低 → 底背离</li><li>强趋势中同样钝化，\"超买后更超买\"</li></ul>\n<h4>举例说明</h4>\n<ul><li>价格跌破前低创出新低，威廉指标却只到 −70（没到 −80，比上次超卖浅）→ 底背离，短线反弹参考</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"%R 高于 −20 是强势可以追\" → 那是超买区，追高是给短线派派发筹码</li><li>❌ \"威廉指标和 KDJ 完全不同\" → 两者同源（只差符号与平滑），选一个用即可</li><li>❌ \"敏感 = 好\" → 敏感意味着信号多、噪音多；迟钝意味着稳、滞后。工具没有优劣只有匹配</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">随机指标</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Stochastic Oscillator</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">威廉指标</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Williams %R</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">超买 / 超卖</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Overbought / Oversold</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>KD 与威廉指标同源：%R ≈ %K − 100，读法方向相反（−20 超买 / −80 超卖）</li><li>均为短线敏感指标，背离和超买卖区信号最可靠</li><li>强趋势中钝化，不可单独使用</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：威廉指标 %R 的超买区是？</strong></p>\n<ul><li>A. 高于 80</li><li>B. 高于 −20（即接近 0）</li><li>C. 低于 −80</li><li>D. 等于 50</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：%R 区间为 0 至 −100，高于 −20 为超买，低于 −80 为超卖——与多数指标方向相反。</p>\n</details>\n<p><strong>2. 判断题：威廉指标和 KDJ 是完全不同的两套指标。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：两者同源，%R ≈ %K − 100；KDJ 只是 KD 的衍生加强版。</p>\n</details>\n<p><strong>3. 选择题：使用 %R 底背离的正确姿势是？</strong></p>\n<ul><li>A. 背离出现立即满仓</li><li>B. 价格新低但 %R 未新低，作为短线反弹参考，等价格企稳确认</li><li>C. 背离无效</li><li>D. 用于月线长线</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：背离是警示不是指令，需价格自身的企稳信号确认。</p>\n</details>\n<p>---</p>\n<p><a href=\"10-kdj\" style=\"color:#4dd0e1\">上一篇：KDJ</a> | <a href=\"12-cci\" style=\"color:#4dd0e1\">下一篇：CCI</a></p>",
    "quiz": []
   },
   {
    "id": "s6-12-cci",
    "title": "CCI 商品通道指数",
    "dur": "约 40 分钟",
    "intro": "CCI（Commodity Channel Index，商品通道指数，Donald Lambert 创立）：衡量价格偏离其统计平均值的程度—",
    "content": "<h4>本节目标</h4>\n<ul><li>理解 CCI 的构造（价格偏离统计常态的程度）</li><li>掌握 CCI 的超买超卖与背离用法</li><li>知道 CCI 与 RSI 的互补关系</li></ul>\n<h4>核心概念</h4>\n<p><strong>CCI（Commodity Channel Index，商品通道指数，Donald Lambert 创立）</strong>：衡量价格偏离其统计平均值的程度——离\"正常波动\"有多远。最初用于商品期货，后发现对任何市场适用。</p>\n<p><strong>读法（常用 14 周期）：</strong></p>\n<ul><li><strong>&gt; +100</strong>：超买区（短线过热）</li><li><strong>&lt; −100</strong>：超卖区（短线过冷）</li><li><strong>+100 / −100 之间的穿越</strong>：是趋势信号而非超买卖信号——CCI 上穿 +100 常对应一波主升，下穿 −100 对应主跌</li><li><strong>背离</strong>：价格新高但 CCI 走低 → 顶背离</li></ul>\n<p><strong>与 RSI 的互补：</strong></p>\n<ul><li>RSI 有 0–100 的硬边界，极端行情中\"贴边钝化\"</li><li><strong>CCI 没有上下限</strong>，极端行情可以冲到 ±300，因此对极端强度的度量更真实——它不会\"顶到天花板失真\"</li></ul>\n<h4>举例说明</h4>\n<ul><li>单边牛市中 RSI 一直贴在 90+ 无法区分强弱变化；同期 CCI 从 +150 升到 +280 再回落到 +120，能更细致地读出动能的盛衰</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"CCI 到 +100 就要卖\" → 强趋势中 CCI 穿越 +100 恰恰是趋势加速的标志</li><li>❌ \"CCI 只用于商品期货\" → 名字有误导性，它对股、币、汇同样适用</li><li>❌ \"无边界 = 没有超买超卖标准\" → ±100 是经验阈值，统计上约覆盖 70–80% 的波动区间</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">商品通道指数</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">CCI</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">典型价格</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Typical Price（(高+低+收)/3）</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">平均绝对偏差</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Mean Deviation</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>CCI 度量价格偏离常态的程度，无固定上下限</li><li>±100 之间穿越是趋势信号，之外是超买卖参考</li><li>与 RSI 互补：RSI 有界易钝化，CCI 无界能量化极端强度</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：CCI 与 RSI 的重要区别是？</strong></p>\n<ul><li>A. CCI 只能用于商品</li><li>B. CCI 没有 0–100 的固定边界，极端行情中不失真</li><li>C. CCI 用成交量计算</li><li>D. CCI 更快</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：CCI 无上下限，强趋势中不会\"贴边\"，对动能盛衰的分辨更细。</p>\n</details>\n<p><strong>2. 判断题：CCI 上穿 +100 是明确的卖出信号。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：趋势行情中 CCI 穿越 +100 常是主升加速的标志，卖点需等待其从高位回落。</p>\n</details>\n<p><strong>3. 选择题：CCI 的典型用法组合是？</strong></p>\n<ul><li>A. 超买超卖 + 背离 + 趋势穿越</li><li>B. 只看不操作</li><li>C. 代替 K 线</li><li>D. 预测财报</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：A 解析：CCI 的三类经典用法：±100 外超买超卖、背离警示、穿越 ±100 的趋势确认。</p>\n</details>\n<p>---</p>\n<p><a href=\"11-stoch-wr\" style=\"color:#4dd0e1\">上一篇：随机指标与威廉</a> | <a href=\"13-obv\" style=\"color:#4dd0e1\">下一篇：OBV 与量价关系</a></p>",
    "quiz": []
   },
   {
    "id": "s6-13-obv",
    "title": "OBV 能量潮与量价关系",
    "dur": "约 40 分钟",
    "intro": "OBV（On-Balance Volume，能量潮，Granville 创立）：把每天的成交量按涨跌加减，累加成一条\"量能曲线\"——它把成交",
    "content": "<h4>本节目标</h4>\n<ul><li>理解 OBV\"把成交量变成趋势线\"的思想</li><li>掌握量价配合的四种基本形态</li><li>学会用 OBV 背离验证价格信号</li></ul>\n<h4>核心概念</h4>\n<p><strong>OBV（On-Balance Volume，能量潮，Granville 创立）</strong>：把每天的成交量按涨跌加减，累加成一条\"量能曲线\"——<strong>它把成交量变成了可以画趋势、看背离的指标</strong>。</p>\n<ul><li>收盘价涨：当日成交量加入 OBV</li><li>收盘价跌：当日成交量从 OBV 减去</li><li>平盘：不计</li></ul>\n<p><strong>核心逻辑：量是价的动力。</strong> 价格上涨需要真实的资金推动，OBV 的趋势比价格的短期波动更难伪造（放量可以单日对倒，持续的量趋势难造假）。</p>\n<p><strong>OBV 三大用法：</strong></p>\n<ol><li><strong>趋势确认</strong>：价格新高，OBV 同步新高 → 上涨健康；价格新高 OBV 不新高 → 量价背离，警惕</li><li><strong>突破预警</strong>：OBV 先于价格突破前高 → 常是价格将突破的领先信号</li><li><strong>底部累积识别</strong>：价格横盘但 OBV 缓步抬升 → 有人悄悄吸筹</li></ol>\n<p><strong>量价关系四象限（背下来）：</strong></p>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">价格</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">成交量</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">含义</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">涨</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">放量</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">健康上涨，可持续</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">涨</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">缩量</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">动力不足，警惕回调</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">跌</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">放量</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">恐慌抛售，可能加速赶底</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">跌</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">缩量</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">抛压衰竭，可能接近止跌</td></tr></tbody></table>\n<h4>举例说明</h4>\n<ul><li>币价横盘一个月，OBV 持续上行 → 聪明钱在低位吸筹，随后放量突破开启主升浪</li><li>价格第三波新高但 OBV 明显低于前高 → 量价背离，结合顶背离减仓</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"放量上涨 = 必涨\" → 天量也可能是对倒出货；要看 OBV 趋势而非单日量</li><li>❌ \"缩量下跌 = 马上反弹\" → 缩量下跌在下跌趋势中可以持续很久</li><li>❌ \"OBV 能预测价格\" → 它是验证和预警工具，不是预测器</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">能量潮</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">OBV</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">量价背离</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Price-Volume Divergence</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">放量 / 缩量</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">High / Low Volume</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">对倒</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Wash Trading</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>OBV 把成交量加成趋势线，比单日成交量更难造假</li><li>量价四象限：涨放量最健康，涨缩量要警惕，跌放量看恐慌，跌缩量看衰竭</li><li>OBV 背离（价新高量不新高）是重要的顶部预警</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：价格上涨但成交量萎缩（价涨量缩），通常提示？</strong></p>\n<ul><li>A. 上涨动力不足，需警惕</li><li>B. 上涨非常健康</li><li>C. 马上翻倍</li><li>D. 与成交量无关</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：A 解析：缩量上涨说明参与资金减少，推动力存疑，是量价四象限中的警示组合。</p>\n</details>\n<p><strong>2. 判断题：OBV 创新高但价格尚未创新高，常是价格即将向上突破的领先信号。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：正确 解析：资金（量）先于价格行动是 OBV 的经典预警用法，预示潜在突破。</p>\n</details>\n<p><strong>3. 选择题：OBV 的计算规则是？</strong></p>\n<ul><li>A. 涨日加量、跌日减量、平盘不变</li><li>B. 每天都加</li><li>C. 只用成交量不用价格</li><li>D. 随机加减</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：A 解析：OBV 按当日收盘涨跌决定成交量的加减方向，平盘不计。</p>\n</details>\n<p>---</p>\n<p><a href=\"12-cci\" style=\"color:#4dd0e1\">上一篇：CCI</a> | <a href=\"14-elliott\" style=\"color:#4dd0e1\">下一篇：艾略特波浪理论</a></p>",
    "quiz": []
   },
   {
    "id": "s6-14-elliott",
    "title": "艾略特波浪理论（Elliott Wave Theory）",
    "dur": "约 40 分钟",
    "intro": "艾略特波浪理论（Ralph Nelson Elliott，1930 年代）：市场价格以可识别的波浪模式反复演进——\"五浪前进，三浪回调\"，层",
    "content": "<h4>本节目标</h4>\n<ul><li>理解五浪上涨三浪调整的基本结构</li><li>掌握浪的命名、铁律和斐波那契比例关系</li><li>理性看待数浪的主观性难题</li></ul>\n<h4>核心概念</h4>\n<p><strong>艾略特波浪理论（Ralph Nelson Elliott，1930 年代）</strong>：市场价格以可识别的波浪模式反复演进——<strong>\"五浪前进，三浪回调\"</strong>，层层嵌套（大浪套中浪，中浪套小浪）。</p>\n<p><strong>基本结构：</strong></p>\n<ul><li><strong>推动浪（1–2–3–4–5）</strong>：与大趋势同向</li></ul>\n<p>- 1 浪：启动（最难参与，常被视为反弹）</p>\n<p>- 2 浪：回调（通常回吐 1 浪的大部分，但不破起点）</p>\n<p>- 3 浪：主升浪（通常最长、最强，不会是最短的一浪）</p>\n<p>- 4 浪：调整（通常平淡，与 2 浪形态交替）</p>\n<p>- 5 浪：最后的冲刺（常出现量价背离、动量衰竭）</p>\n<ul><li><strong>调整浪（A–B–C）</strong>：与大趋势反向的三浪修正</li></ul>\n<p><strong>两条铁律（不可违反）：</strong></p>\n<ol><li>2 浪不能跌破 1 浪的起点</li><li>3 浪不能是 1、3、5 中最短的一浪（通常是最长的）</li></ol>\n<p><strong>斐波那契比例：</strong></p>\n<ul><li>2 浪常回撤 1 浪的 50%–61.8%</li><li>3 浪常为 1 浪的 1.618 倍（扩展）</li><li>4 浪常回撤 3 浪的 23.6%–38.2%</li></ul>\n<p><strong>币圈的趣味对应：</strong> 币圈牛市常被数成完整五浪：熊市底起步（1）→ 深度回调（2）→ 减半行情主升（3）→ 横盘整理（4）→ 散户狂欢冲顶（5，常伴随动能背离）→ A-B-C 深熊。</p>\n<h4>举例说明</h4>\n<ul><li>主升浪（3 浪）中量价配合完美；到 5 浪时价格新高但成交量和 RSI 都不及 3 浪 → 符合\"5 浪衰竭\"特征，是分批止盈窗口</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"数浪可以精确预测\" → 同一段行情，不同人数出不同浪型（争议巨大），浪型是\"事后清晰、事中模糊\"</li><li>❌ \"铁律保证赚钱\" → 铁律只是结构约束，不构成交易系统</li><li>❌ \"每个小波动都要数浪\" → 大浪看结构即可，小浪噪音无意义</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">推动浪 / 调整浪</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Impulse / Corrective Wave</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">延长浪</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Extension</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">铁律</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Rules</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">数浪</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Wave Counting</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>五上三下：1-5 推动、A-B-C 调整，浪中有浪</li><li>铁律：2 不破 1 起点，3 不为最短；斐波那契比例是常见幅度参考</li><li>5 浪常伴背离衰竭——实战中它更像\"结构语言\"而非\"预测公式\"</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：波浪理论中，3 浪的铁律是？</strong></p>\n<ul><li>A. 必须是最短的</li><li>B. 不能是 1、3、5 中最短的（通常最长）</li><li>C. 必须回撤 100%</li><li>D. 不存在 3 浪</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：3 浪通常是主升浪，铁律规定它不能成为三个推动浪中最短的一浪。</p>\n</details>\n<p><strong>2. 判断题：一段行情只有一种正确的数浪方式。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：数浪高度主观，事后清晰、事中模糊，同一行情常有多种数法——这是该理论最大的争议。</p>\n</details>\n<p><strong>3. 选择题：5 浪的典型特征是？</strong></p>\n<ul><li>A. 量价齐升创新高</li><li>B. 价格新高但成交量和动量指标背离衰竭</li><li>C. 跌破 1 浪起点</li><li>D. 与 3 浪等长</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：5 浪是最后冲刺，常见量价与动能背离（价格新高、RSI/MACD/成交量不新高）。</p>\n</details>\n<p>---</p>\n<p><a href=\"13-obv\" style=\"color:#4dd0e1\">上一篇：OBV</a> | <a href=\"15-fibonacci\" style=\"color:#4dd0e1\">下一篇：斐波那契</a></p>",
    "quiz": []
   },
   {
    "id": "s6-15-fibonacci",
    "title": "斐波那契回撤与扩展（Fibonacci Retracement & Extension）",
    "dur": "约 50 分钟",
    "intro": "斐波那契数列（1, 1, 2, 3, 5, 8, 13, 21……）相邻两项之比趋近于 0.618（黄金分割），其衍生比例 0.382、0.",
    "content": "<h4>本节目标</h4>\n<ul><li>理解斐波那契数列与黄金分割的关系</li><li>掌握回撤位与扩展位的画法</li><li>知道斐波那契为什么有效（以及它何时无效）</li></ul>\n<h4>核心概念</h4>\n<p><strong>斐波那契数列</strong>（1, 1, 2, 3, 5, 8, 13, 21……）相邻两项之比趋近于 <strong>0.618</strong>（黄金分割），其衍生比例 0.382、0.5、0.618、0.786、1.272、1.618 被广泛用作支撑阻力参考。</p>\n<p><strong>回撤（Retracement）——找回调买点：</strong></p>\n<ol><li>找一段明显的趋势（低点 A → 高点 B）</li><li>按比例分割涨幅，得到 0.236 / 0.382 / 0.5 / 0.618 / 0.786 五档回调位</li><li>强势趋势常回撤 0.382–0.5；深回撤 0.618 仍属正常；<strong>跌破 0.786 趋势大概率结束</strong></li></ol>\n<p><strong>扩展（Extension）——找目标价位：</strong></p>\n<ul><li>突破前高后，用 1.272 / 1.618 / 2.618 倍预测下一目标</li><li>与艾略特波浪的 3 浪 1.618 倍互为印证</li></ul>\n<p><strong>为什么\"有效\"？</strong> 不是因为数学魔法，而是<strong>自我实现的预言</strong>：全球交易者都在这些位置挂单，集中挂单形成真实的支撑/阻力。它有效的前提是\"足够多的人用\"——因此越主流的市场（BTC、ETH）越有效，冷门山寨币上画斐波那契意义不大。</p>\n<p><strong>与江恩理论的呼应：</strong> 江恩的 1/2 回撤 = 斐波那契 0.5；1/3 ≈ 0.382，2/3 ≈ 0.618——两大体系在数学上高度重合。</p>\n<h4>举例说明</h4>\n<ul><li>BTC 从 5 万涨到 15 万（涨幅 10 万）：0.382 回撤 ≈ 11.18 万、0.5 = 10 万、0.618 ≈ 8.82 万——把这三个价位标在图上，回调到 10 万附近企稳 + 放量阳线 = 高胜率买入区</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"斐波那契位必到必反弹\" → 它是\"关注区域\"，不是精确预言</li><li>❌ \"任意一段行情都画\" → 要选有明显起止点的完整波段；起点终点选得随意，所有比例都失去意义</li><li>❌ \"跌破 0.618 还可以看 0.786 扛一扛\" → 0.786 是最后防线，跌破意味着波段逻辑失效，应止损而非补仓</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">斐波那契回撤</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Fibonacci Retracement</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">扩展位</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Extension</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">黄金分割</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Golden Ratio (0.618)</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">自我实现预言</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Self-fulfilling Prophecy</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>回撤五档 0.236–0.786，强势趋势浅回撤；扩展 1.272/1.618 找目标</li><li>本质是共识形成的挂单密集区，主流币种上最有效</li><li>跌破 0.786 = 波段失效，止损离场而不是死扛</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：斐波那契比例在交易中\"有效\"的主要原因是？</strong></p>\n<ul><li>A. 数学必然性</li><li>B. 全球交易者共识在这些位置挂单，形成真实的支撑阻力</li><li>C. 交易所规定</li><li>D. 庄家慈善</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：斐波那契是自我实现的预言——用的人越多，挂单越密集，支撑阻力越真实。</p>\n</details>\n<p><strong>2. 判断题：跌破 0.786 回撤位后应该把止损下移继续扛单。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：0.786 是波段结构的最后防线，跌破说明原趋势假设失效，应执行止损。</p>\n</details>\n<p><strong>3. 选择题：强势上涨趋势中，最常见的回调深度是？</strong></p>\n<ul><li>A. 0.786</li><li>B. 0.382–0.5 区域</li><li>C. 100%（跌回起点）</li><li>D. 不回调</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：强趋势中的回调通常较浅，0.382–0.5 是最常见的健康回调区。</p>\n</details>\n<p>---</p>\n<p><a href=\"14-elliott\" style=\"color:#4dd0e1\">上一篇：艾略特波浪</a> | <a href=\"16-wyckoff\" style=\"color:#4dd0e1\">下一篇：威科夫方法</a></p>",
    "quiz": []
   },
   {
    "id": "s6-16-wyckoff",
    "title": "威科夫方法（Wyckoff Method）",
    "dur": "约 50 分钟",
    "intro": "理查德·威科夫（Richard Wyckoff，20 世纪初）：价格背后是大型资金（主力/Composite Man）有计划地吸筹与派发。散",
    "content": "<h4>本节目标</h4>\n<ul><li>理解\"主力吸筹/派发\"的市场结构观</li><li>掌握威科夫周期四阶段：累积、上涨、派发、下跌</li><li>认识弹簧效应与测试两个经典入场形态</li></ul>\n<h4>核心概念</h4>\n<p><strong>理查德·威科夫（Richard Wyckoff，20 世纪初）</strong>：价格背后是<strong>大型资金（主力/Composite Man）有计划地吸筹与派发</strong>。散户的生存之道是识别主力的 footprints（脚印），搭主力的便车。这套方法论至今被机构交易室广泛使用。</p>\n<p><strong>威科夫周期四阶段：</strong></p>\n<ol><li><strong>累积（Accumulation）</strong>：主力在熊市尾声悄悄买入。特征：波动收窄、成交量先缩后放、价格不再创新低。散户看到：死气沉沉的垃圾行情</li><li><strong>上涨（Markup）</strong>：突破吸筹区间，趋势展开，大众追随——利润最丰厚的一段</li><li><strong>派发（Distribution）</strong>：主力在牛市高潮把筹码卖给追高的散户。特征：放量滞涨、上影线增多、利好兑现</li><li><strong>下跌（Markdown）</strong>：跌破派发区间，深跌开始</li></ol>\n<p><strong>两个经典入场形态：</strong></p>\n<ul><li><strong>弹簧效应（Spring）</strong>：吸筹区间内价格小幅跌破区间下沿（诱空），但迅速收回区间内 → 主力扫完止损盘的信号，买点</li><li><strong>测试（Test）</strong>：弹簧之后价格回踩缩量不破低点 → 确认卖压枯竭，更稳的买点</li></ul>\n<p><strong>与量价语言的对应：</strong> 吸筹区\"价平量缩后温和放量\"，对应 OBV 悄悄抬升（见 OBV 一篇）；派发的\"放量滞涨\"对应量价背离。</p>\n<h4>举例说明</h4>\n<ul><li>熊市底部横盘三个月：价格三次假跌破区间下沿都迅速收回（Spring），回踩时成交量一次比一次小（Test），OBV 持续上行 → 主力吸筹的典型组合，突破区间上沿是右侧买点</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"看到横盘就是吸筹\" → 横盘也可能是派发或中继；必须结合位置（高位还是低位）、量价和 Spring/Test 结构确认</li><li>❌ \"主力吸筹可以精确测出成本\" → 只能判断区域和概率，无法知道精确仓位</li><li>❌ \"四阶段时间均匀分布\" → 各阶段长短由主力控盘节奏决定，只认结构不认日历</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">威科夫方法</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Wyckoff Method</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">累积 / 派发</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Accumulation / Distribution</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">弹簧效应</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Spring</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">测试</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Test</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>威科夫视角：价格背后是主力的吸筹-拉升-派发-下跌循环</li><li>四阶段识别靠量价结构：吸筹看\"价缩量缩后温和放量 + OBV 抬升\"</li><li>Spring（假跌破收回）与 Test（缩量回踩不破）是两个经典入场信号</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：威科夫方法的核心假设是？</strong></p>\n<ul><li>A. 价格随机游走</li><li>B. 大型资金有计划地吸筹与派发，价格留下可识别的结构</li><li>C. 技术指标万能</li><li>D. 消息决定一切</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：威科夫把市场看作 Composite Man（主力）有计划的操作，散户应识别其结构跟随。</p>\n</details>\n<p><strong>2. 判断题：\"弹簧效应\"（Spring）是指吸筹区间内价格假跌破下沿后迅速收回。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：正确 解析：假跌破扫掉止损盘并引发恐慌抛售后迅速收回，是主力吸筹末期的经典信号。</p>\n</details>\n<p><strong>3. 选择题：派发现货阶段的典型特征是？</strong></p>\n<ul><li>A. 缩量阴跌</li><li>B. 放量滞涨、利好兑现、上影线增多</li><li>C. 无量涨停</li><li>D. OBV 持续上行</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：派发是主力把筹码卖给追高者，特征是大量换手但价格推不动（放量滞涨）。</p>\n</details>\n<p>---</p>\n<p><a href=\"15-fibonacci\" style=\"color:#4dd0e1\">上一篇：斐波那契</a> | <a href=\"17-chanlun\" style=\"color:#4dd0e1\">下一篇：缠论</a></p>",
    "quiz": []
   },
   {
    "id": "s6-17-chanlun",
    "title": "缠论（缠中说禅）",
    "dur": "约 40 分钟",
    "intro": "缠论源自博客\"缠中说禅\"（2006–2008），是中文交易圈影响最大的本土技术分析体系之一。核心思想：市场走势由不同级别的\"趋势\"与\"盘整\"",
    "content": "<h4>本节目标</h4>\n<ul><li>了解缠论在中国交易圈的地位和基本概念</li><li>掌握分型、笔、线段、中枢四个构件</li><li>理性看待缠论的学习成本与争议</li></ul>\n<h4>核心概念</h4>\n<p><strong>缠论</strong>源自博客\"缠中说禅\"（2006–2008），是中文交易圈影响最大的本土技术分析体系之一。核心思想：<strong>市场走势由不同级别的\"趋势\"与\"盘整\"递归组合而成</strong>，通过严格的几何定义把 K 线\"结构化\"。</p>\n<p><strong>四个基本构件（由小到大）：</strong></p>\n<ol><li><strong>分型</strong>：三根 K 线的局部形态。顶分型 = 中间那根最高；底分型 = 中间那根最低——类似\"局部高点/低点\"</li><li><strong>笔</strong>：相邻顶底分型之间至少 5 根 K 线的连接（一顶一底为一笔）——过滤微小波动的\"最小趋势单位\"</li><li><strong>线段</strong>：至少三笔的重叠结构，且彼此有重叠——比笔更高一级</li><li><strong>中枢</strong>：三段连续走势的<strong>重叠区间</strong>——缠论最重要的概念。价格围绕中枢震荡；<strong>离开中枢后回踩不进中枢 = 第三类买卖点</strong>，是缠论最核心的操作信号</li></ol>\n<p><strong>买卖点体系：</strong></p>\n<ul><li>第一类：趋势背驰点（抄底摸顶，难度最高）</li><li>第二类：第一次回调不创新低/新高</li><li>第三类：离开中枢后的回踩确认（缠论爱好者最常用的实战信号）</li></ul>\n<p><strong>学习成本与争议：</strong></p>\n<ul><li>原文晦涩，体系庞大，<strong>完整掌握需要数百小时</strong>——对新手性价比低</li><li>构件划分存在主观成分（不同人画笔不同）</li><li>社区共识：<strong>它的\"结构观\"（中枢、级别、背驰）值得吸收，但不必执着于精确画线</strong></li></ul>\n<h4>举例说明</h4>\n<ul><li>价格突破中枢上沿后回踩，在中枢上沿附近企稳（不回中枢）→ 第三类买点，按缠论应顺势买入，止损设回踩低点</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"学会缠论稳赚\" → 任何体系都无法消除不确定性；缠论提供的是结构语言</li><li>❌ \"严格按照原文操作\" → 原文的部分定义本身存在多种解读，实战需要简化</li><li>❌ \"新手入门第一课学缠论\" → 学习曲线极陡，建议先掌握道氏、均线、支撑阻力后再接触</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">分型</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Fractal</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">笔 / 线段</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Stroke / Segment</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">中枢</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Central Zone / Pivot</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">背驰</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Divergence（缠论语境）</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">三类买卖点</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Three Types of Entry</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>缠论用分型→笔→线段→中枢把 K 线结构化，核心是中枢与级别</li><li>第三类买点（离开中枢回踩确认）是最常用的实战信号</li><li>体系庞大晦涩，吸收其结构观即可，新手不必深钻画线</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：缠论中\"中枢\"指的是？</strong></p>\n<ul><li>A. 某一根 K 线</li><li>B. 三段连续走势的重叠区间</li><li>C. 成交量中心</li><li>D. 均线交叉点</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：中枢是三段走势重叠形成的区域，是缠论分析的核心锚点。</p>\n</details>\n<p><strong>2. 判断题：第三类买点的定义是价格突破中枢后回踩不回到中枢内。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：正确 解析：离开中枢后回踩不进中枢，说明中枢已由阻力变支撑，是缠论标志性买点。</p>\n</details>\n<p><strong>3. 选择题：对新手学习缠论最理性的建议是？</strong></p>\n<ul><li>A. 第一课就学，闭关三个月</li><li>B. 先掌握基础分析，吸收其结构观，不执着于精确画线</li><li>C. 完全否定</li><li>D. 借钱报班</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：缠论结构观有价值，但学习成本极高且划分有主观性，新手应先打基础。</p>\n</details>\n<p>---</p>\n<p><a href=\"16-wyckoff\" style=\"color:#4dd0e1\">上一篇：威科夫</a> | <a href=\"18-darvas-box\" style=\"color:#4dd0e1\">下一篇：箱体理论与达瓦斯</a></p>",
    "quiz": []
   },
   {
    "id": "s6-18-darvas-box",
    "title": "箱体理论与达瓦斯操作法（Darvas Box）",
    "dur": "约 40 分钟",
    "intro": "箱体理论：价格大部分时间在一个区间内（箱体）上下震荡，突破箱体上沿进入新箱体。市场由一连串\"箱体堆叠\"构成——上箱体是下箱体的目标位，也是新",
    "content": "<h4>本节目标</h4>\n<ul><li>理解\"价格沿箱体运行\"的结构观</li><li>掌握达瓦斯箱体的画法与操作规则</li><li>知道箱体理论在趋势市和震荡市的切换逻辑</li></ul>\n<h4>核心概念</h4>\n<p><strong>箱体理论</strong>：价格大部分时间在一个区间内（箱体）上下震荡，突破箱体上沿进入新箱体。市场由一连串\"箱体堆叠\"构成——上箱体是下箱体的目标位，也是新支撑。</p>\n<p><strong>尼古拉斯·达瓦斯（Nicolas Darvas，1960 年代）</strong>：舞蹈家出身的传奇散户，用箱体理论在 18 个月内把 1 万美元变成 200 万。方法极简，写在《我如何在股市赚了 200 万》。</p>\n<p><strong>达瓦斯箱体画法：</strong></p>\n<ol><li>价格创近期新高（比如 52 周新高）后，在高位形成震荡平台</li><li>平台的最高点 = 箱体顶，回落的最低点 = 箱体底</li><li>价格上破箱体顶（需放量）→ 买入，<strong>箱体顶变止损位</strong>（跌回箱体内说明突破失败）</li><li>在新箱体形成过程中逐级上移止损，让利润奔跑</li></ol>\n<p><strong>操作规则（精髓）：</strong></p>\n<ul><li>只在创新高后的突破买入（强势股）</li><li>止损机械化：跌回箱体就离场，不抱幻想</li><li>股票（币）必须满足\"有故事 + 处于新高区\"（达瓦斯时代的\"行业风口\"）</li><li>不在箱体内部交易——箱体内是噪音</li></ul>\n<p><strong>与第三阶段的衔接：</strong> 箱体突破本质上是\"突破交易\"（03-strategies/02）的祖师爷版本；箱体底附近网格收割（04）也基于此结构。</p>\n<h4>举例说明</h4>\n<ul><li>某币创年内新高后横盘两周形成 10–11 万箱体 → 放量突破 11 万买入，止损 10.9 万 → 新箱体 11–13 万形成后，止损逐步上移到 11 万下方，跌破离场</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"任何横盘都算箱体\" → 达瓦斯要求箱体处于<strong>新高区</strong>（强势背景下），低位弱势横盘不是买入结构</li><li>❌ \"突破后跌回箱体再等等\" → 达瓦斯规则的机械性正是其优势：跌回即走，把\"等等看\"的情绪从系统里剔除</li><li>❌ \"箱体底可以买\" → 达瓦斯从不在箱体底买入，他只买向上突破——右侧交易者</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">箱体</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Box / Range</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">达瓦斯箱体</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Darvas Box</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">新高突破</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Breakout to New Highs</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>市场是箱体的堆叠；箱体顶突破 = 买入，跌回 = 止损</li><li>达瓦斯三要素：新高区的箱体、放量突破、机械化止损</li><li>只做右侧突破，不做箱体内部的抄底</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：达瓦斯操作法的买入触发条件是？</strong></p>\n<ul><li>A. 价格跌到箱体底部</li><li>B. 价格放量突破箱体顶部</li><li>C. RSI 超卖</li><li>D. 缩量横盘</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：达瓦斯只买新高区箱体的向上突破，是典型的右侧突破交易。</p>\n</details>\n<p><strong>2. 判断题：达瓦斯规则中，突破后跌回箱体内应该止损离场。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：正确 解析：跌回箱体 = 突破失败信号，机械止损正是该体系长期有效的核心。</p>\n</details>\n<p><strong>3. 选择题：达瓦斯箱体的正确画法是？</strong></p>\n<ul><li>A. 任意两个低点连线</li><li>B. 价格创新高后，高位震荡平台的高点和低点</li><li>C. 用均线代替</li><li>D. 看心情</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：箱体来自创新高后的高位整理平台，顶是阻力、底是突破后的止损参照。</p>\n</details>\n<p>---</p>\n<p><a href=\"17-chanlun\" style=\"color:#4dd0e1\">上一篇：缠论</a> | <a href=\"19-trendline\" style=\"color:#4dd0e1\">下一篇：趋势线与通道</a></p>",
    "quiz": []
   },
   {
    "id": "s6-19-trendline",
    "title": "趋势线与通道（Trendline & Channel）",
    "dur": "约 40 分钟",
    "intro": "趋势线是技术分析中最古老的工具，也是画得最差、被滥用最多的工具。正确画法只有一条规则：连接两个以上有意义的低点（上升趋势）或高点（下降趋势）",
    "content": "<h4>本节目标</h4>\n<ul><li>学会正确画出上升/下降趋势线</li><li>理解趋势线的三大原则（触点、角度、破位）</li><li>掌握通道的用法与假突破</li></ul>\n<h4>核心概念</h4>\n<p><strong>趋势线是技术分析中最古老的工具</strong>，也是画得最差、被滥用最多的工具。正确画法只有一条规则：<strong>连接两个以上有意义的低点（上升趋势）或高点（下降趋势）</strong>。</p>\n<p><strong>三大原则：</strong></p>\n<ol><li><strong>触点越多越有效</strong>：两点成线，三点以上确认。被价格触及并反弹 3 次以上的趋势线是重要支撑</li><li><strong>角度代表健康度</strong>：45 度左右的趋势最健康、最持久；过于陡峭（&gt;60 度）的趋势不可持续，容易崩；过于平缓说明动力不足</li><li><strong>破位需要确认</strong>：短暂刺破（插针）不算破位，<strong>收盘有效跌破</strong>才算；且跌破后常有反抽趋势线的动作（由支撑变阻力）</li></ol>\n<p><strong>趋势线的加速与扇形：</strong></p>\n<ul><li>趋势持续中，价格可能脱离原趋势线，需要画更陡的新线（加速）</li><li>上升趋势中趋势线连续被破 3 次（扇形原理）→ 趋势终结信号</li></ul>\n<p><strong>通道（Channel）：</strong></p>\n<ul><li>在趋势线基础上，过对侧的两个高点/低点画平行线，形成上升通道/下降通道</li><li>用法：通道下轨买、上轨减（<strong>只在震荡上升行情中适用</strong>；强趋势中价格会贴着上轨走，不适用）</li></ul>\n<h4>举例说明</h4>\n<ul><li>牛市中 BTC 沿 45 度趋势线运行八个月，每次回踩都是买点；某日放量长阴<strong>收盘跌破</strong>趋势线，三天反抽站不回去 → 趋势终结，离场观望</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"把趋势线当精确价格线\" → 趋势线是一个斜向的\"区域\"，价格穿越一点点不等于破位</li><li>❌ \"趋势线画得越多越好\" → 满屏的线等于没有线；只画最重要的 1–2 条</li><li>❌ \"跌破趋势线立即全仓反手\" → 假破位常见，收盘确认 + 反抽失败再行动</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">趋势线</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Trendline</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">通道</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Price Channel</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">扇形原理</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Fan Principle</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">假突破 / 假跌破</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Fakeout</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>趋势线连接有意义的低点/高点，触点越多越好</li><li>45 度最健康，过陡不可持续；破位以收盘确认，警惕插针</li><li>通道只在震荡趋势中好用，强趋势会\"出轨\"</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：上升趋势线的正确画法是连接？</strong></p>\n<ul><li>A. 两个以上有意义的高点</li><li>B. 两个以上有意义的低点</li><li>C. 开盘价</li><li>D. 任意两点</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：上升趋势线连接抬升的低点，作为动态支撑；下降趋势线连接降低的高点。</p>\n</details>\n<p><strong>2. 判断题：价格盘中短暂跌破趋势线（插针）就应视为趋势终结。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：应以收盘有效跌破为准，且常需反抽确认；插针多是假跌破。</p>\n</details>\n<p><strong>3. 选择题：从健康度角度看，最理想的趋势线角度约为？</strong></p>\n<ul><li>A. 接近 90 度</li><li>B. 45 度左右</li><li>C. 接近 0 度</li><li>D. 角度不重要</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：45 度趋势代表供需平衡推进，最持久；过陡（&gt;60 度）易崩塌，过缓动力不足。</p>\n</details>\n<p>---</p>\n<p><a href=\"18-darvas-box\" style=\"color:#4dd0e1\">上一篇：箱体理论</a> | <a href=\"20-gap\" style=\"color:#4dd0e1\">下一篇：缺口理论</a></p>",
    "quiz": []
   },
   {
    "id": "s6-20-gap",
    "title": "缺口理论（Gap Theory）",
    "dur": "约 50 分钟",
    "intro": "缺口（Gap）：相邻两根 K 线之间出现的真空价格区间（最低价高于前一根的最高价，或最高价低于前一根的最低价）。币圈 K 线图上表现为相邻蜡",
    "content": "<h4>本节目标</h4>\n<ul><li>理解缺口的形成原因和四种类型</li><li>掌握\"缺口必补\"的适用边界</li><li>知道币圈 24/7 交易下缺口的特殊性</li></ul>\n<h4>核心概念</h4>\n<p><strong>缺口（Gap）</strong>：相邻两根 K 线之间出现的<strong>真空价格区间</strong>（最低价高于前一根的最高价，或最高价低于前一根的最低价）。币圈 K 线图上表现为相邻蜡烛不接拢。</p>\n<p><strong>缺口的四种类型：</strong></p>\n<ol><li><strong>普通缺口（Common Gap）</strong>：盘整中随机出现，无特别意义，通常很快回补</li><li><strong>突破缺口（Breakaway Gap）</strong>：突破关键位/盘整区时跳空，<strong>伴随放量</strong>——新趋势启动的强信号，通常不回补</li><li><strong>持续缺口（Runaway Gap）</strong>：趋势中段出现的缺口，确认趋势强劲，一般也不回补</li><li><strong>竭尽缺口（Exhaustion Gap）</strong>：趋势末端出现的缺口，随后迅速回补——趋势衰竭的警示，常配合天量</li></ol>\n<p><strong>\"缺口必补\"的真实含义：</strong></p>\n<ul><li>完整说法是\"<strong>普通缺口和竭尽缺口大概率回补，突破缺口和持续缺口短期不回补</strong>\"</li><li>回补的逻辑：缺口区域没有成交（真空区），价格回来\"补课\"时阻力支撑都薄弱</li><li>但强劲趋势中的突破缺口可能<strong>几年不补</strong>（如美股某些缺口）——把\"必补\"当交易依据是大错</li></ul>\n<p><strong>币圈的特殊性：</strong> 现货 7×24 交易，<strong>真正的缺口很少</strong>，主要出现在：</p>\n<ul><li>周末 CME 比特币期货（周五收盘→周一开盘）的跳空</li><li>交易所短暂宕机/极端行情后的恢复交易</li><li>所以缺口理论对币圈的参考价值<strong>低于股市</strong>，更多用于期货市场和传统市场</li></ul>\n<h4>举例说明</h4>\n<ul><li>CME 比特币期货周末收盘 10 万，周一开盘直接跳空高开后持续走高不回补 → 突破性缺口，偏多信号</li><li>暴涨末端出现向上跳空 + 天量，随后三天内跌回缺口内 → 竭尽缺口，趋势终结警示</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"缺口一定会补，所以突破缺口后做空等回补\" → 强势突破缺口可能长期不回补，逆势做空必死</li><li>❌ \"币圈缺口很多很好用\" → 币圈 24/7 缺口稀少，此理论主要适用于股市和期货市场</li><li>❌ \"所有缺口意义相同\" → 位置（趋势阶段）+ 量能才是判断缺口类型的关键</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">缺口</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Gap</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">突破 / 持续 / 竭尽缺口</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Breakaway / Runaway / Exhaustion Gap</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">回补</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Filling the Gap</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">真空区</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Price Vacuum</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>四类缺口：普通、突破、持续、竭尽；位置与量能决定类型</li><li>\"必补\"只适用于普通与竭尽缺口；突破缺口强势期不回补</li><li>币圈 24/7 缺口稀少，此理论主战场在股市/期货市场（如 CME 期货）</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：趋势末端出现向上跳空缺口且伴随天量，随后迅速回补，这是？</strong></p>\n<ul><li>A. 突破缺口</li><li>B. 竭尽缺口（趋势衰竭警示）</li><li>C. 普通缺口</li><li>D. 持续缺口</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：趋势末端的放量跳空+快速回补是竭尽缺口的经典特征，提示趋势可能终结。</p>\n</details>\n<p><strong>2. 判断题：所有缺口最终都会被回补，所以可以在突破缺口后做空。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：强势突破缺口可能长期不回补；\"必补\"只适用于普通与竭尽缺口。</p>\n</details>\n<p><strong>3. 选择题：为什么缺口理论在币圈现货市场的适用性较弱？</strong></p>\n<ul><li>A. 币圈没有成交量</li><li>B. 币圈 7×24 交易，真正的缺口很少出现</li><li>C. 币圈没有 K 线</li><li>D. 币圈不允许跳空</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：连续交易使得价格真空很少形成；缺口多见于 CME 期货等收盘-开盘的市场。</p>\n</details>\n<p>---</p>\n<p><a href=\"19-trendline\" style=\"color:#4dd0e1\">上一篇：趋势线</a> | <a href=\"21-divergence\" style=\"color:#4dd0e1\">下一篇：背离综合</a></p>",
    "quiz": []
   },
   {
    "id": "s6-21-divergence",
    "title": "背离综合（Divergence Masterclass）",
    "dur": "约 40 分钟",
    "intro": "背离（Divergence）：价格走势与某种参考量（动量指标、成交量、市场广度）走势不一致。它是技术分析中可靠性最高的警示信号之一——前提是",
    "content": "<h4>本节目标</h4>\n<ul><li>系统梳理各类背离（指标背离、量价背离、广度背离）</li><li>掌握背离的强度分级</li><li>学会\"背离 + 确认\"的完整操作流程</li></ul>\n<h4>核心概念</h4>\n<p><strong>背离（Divergence）</strong>：价格走势与某种参考量（动量指标、成交量、市场广度）走势不一致。<strong>它是技术分析中可靠性最高的警示信号之一</strong>——前提是你用对了。</p>\n<p><strong>三类背离：</strong></p>\n<ol><li><strong>顶背离</strong>：价格新高，指标不新高 → 上涨动力衰竭（RSI/MACD/KDJ 均适用）</li><li><strong>底背离</strong>：价格新低，指标不新低 → 下跌动力衰竭</li><li><strong>量价背离</strong>：价格新高，成交量/OBV 不新高（或缩小）→ 见 OBV 一篇</li></ol>\n<p><strong>背离的强度分级（越多越好）：</strong></p>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">级别</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">特征</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">可靠性</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">★</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">单一指标背离</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">弱，常出现在强趋势中</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">★★</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">两指标共振背离（如 RSI + MACD 同时背离）</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">中</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">★★★</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">指标背离 + 量价背离</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">强</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">★★★★</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">多指标背离 + 量价背离 + 关键阻力区</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">极强，趋势反转概率高</td></tr></tbody></table>\n<p><strong>背离的致命误区是把它当\"指令\"。背离不是信号，是警报。</strong> 强趋势中可以连续出现三次背离价格才反转（\"背离之后再背离\"）。完整操作流程：</p>\n<ol><li>背离出现 → 提高警惕，停止加仓</li><li>价格自身发出转折信号（跌破趋势线/前低、跌破关键均线）→ 减仓</li><li>反抽不过前高/趋势线 → 清仓或反手</li></ol>\n<p><strong>周期匹配原则：</strong> 做日线级别的背离，就看日线级别的指标，别拿 1 小时图背离来推翻日线趋势。</p>\n<h4>举例说明</h4>\n<ul><li>BTC 10 万新高，RSI 和 MACD 双顶背离（★★），成交量缩减（升为 ★★★），且 10 万恰是通道上轨（升为 ★★★★）→ 一套完整减仓流程启动；随后跌破 MA20 确认</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"背离出现立刻反手\" → 强趋势中背离可连续出现多次，反手是接飞刀</li><li>❌ \"背离级别越高越精确\" → 级别只提高概率，反转点仍需价格确认</li><li>❌ \"用小周期背离做日线决策\" → 周期错配是背离使用者最常见的亏损来源</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">背离</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Divergence</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">隐藏背离</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Hidden Divergence（顺势中的回调信号，进阶）</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">衰竭</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Exhaustion</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">共振</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Confluence</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>背离 = 价格与动量/量的不一致，是警报不是指令</li><li>强度四档：单指标 &lt; 双指标 &lt; +量价 &lt; +关键位共振</li><li>背离 → 停加仓 → 等价格确认（破趋势线/前低）→ 减仓，流程走完才算数</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：可靠性最高的背离组合是？</strong></p>\n<ul><li>A. 单一 RSI 背离</li><li>B. 多指标背离 + 量价背离 + 关键阻力区共振</li><li>C. 1 分钟图背离</li><li>D. 任何背离都一样</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：多重共振（指标+量价+位置）的背离是最强警示；单指标、小周期背离可靠性最低。</p>\n</details>\n<p><strong>2. 判断题：出现顶背离后应立即反手做空。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：背离是警报不是指令，强趋势中背离可多次出现；须等价格自身的转折确认。</p>\n</details>\n<p><strong>3. 选择题：背离出现后，第一步正确的动作是？</strong></p>\n<ul><li>A. 全仓卖出</li><li>B. 停止加仓并等待价格确认信号</li><li>C. 加仓摊平</li><li>D. 换小周期再看</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：背离触发的是风控动作（停止加仓、收紧止损），交易动作等价格确认。</p>\n</details>\n<p>---</p>\n<p><a href=\"20-gap\" style=\"color:#4dd0e1\">上一篇：缺口理论</a> | <a href=\"22-sar-ichimoku\" style=\"color:#4dd0e1\">下一篇：SAR 与一目均衡表</a></p>",
    "quiz": []
   },
   {
    "id": "s6-22-sar-ichimoku",
    "title": "SAR 抛物线指标与一目均衡表（Parabolic SAR & Ichimoku Cloud）",
    "dur": "约 50 分钟",
    "intro": "SAR（Stop And Reverse，抛物线转向指标，Welles Wilder 创立）：在 K 线图上画一串点——上涨趋势中点在 K ",
    "content": "<h4>本节目标</h4>\n<ul><li>掌握 SAR\"移动止损点\"的用法</li><li>了解一目均衡表五要素的基本读法</li><li>知道两者各自的适用边界</li></ul>\n<h4>核心概念</h4>\n<p><strong>SAR（Stop And Reverse，抛物线转向指标，Welles Wilder 创立）</strong>：在 K 线图上画一串点——<strong>上涨趋势中点在 K 线下方（移动止损位），下跌趋势中点在上方</strong>。它的本职不是\"买卖信号\"而是<strong>移动止损工具</strong>。</p>\n<p><strong>SAR 读法：</strong></p>\n<ul><li>点在价格下方 = 持有多单，点的位置就是<strong>每日上移的止损价</strong></li><li>点翻到价格上方 = 趋势可能反转，多单离场（激进的反手做空信号）</li><li><strong>加速因子</strong>：趋势持续越久，点收敛越快——\"抛物线\"会不断追赶价格</li><li><strong>失效场景</strong>：横盘震荡中 SAR 会来回翻转（价格在点的两侧反复穿越），此时应停用——<strong>必须配合趋势过滤器（如 ADX &gt; 25）使用</strong></li></ul>\n<p><strong>一目均衡表（Ichimoku Cloud，日本最主流的图表系统）：</strong></p>\n<ul><li><strong>转换线</strong>（9 期高低均值）与<strong>基准线</strong>（26 期高低均值）：短期与中期均衡，转换线上穿基准线 = 金叉信号</li><li><strong>先行带 A / B</strong>（云）：两条线之间的填充区域。<strong>价格在云上 = 多头，云下 = 空头，云中 = 震荡</strong></li><li><strong>云层</strong>：云越厚支撑/阻力越强；云由红翻绿（先行带 B 上穿 A）是中期转势信号</li><li><strong>延迟线</strong>（当前收盘 vs 26 期前）：看价格相对 26 期前是强是弱</li></ul>\n<p><strong>一目均衡表一句话：云给你方向和支撑阻力，转换线/基准线给你时机，延迟线给你动能确认。</strong></p>\n<h4>举例说明</h4>\n<ul><li>用 SAR 管理趋势单：买点入场后，每天把止损设在 SAR 点的位置，让抛物线替你\"跟踪\"利润，直到被扫出——机械化版的移动止损</li><li>BTC 站上云层 + 转换线上穿基准线 + 延迟线在 K 线上方 → 一目均衡表三重多头确认</li></ul>\n<h4>常见误区</h4>\n<ul><li>❌ \"SAR 翻点就反手\" → 震荡市反复打脸；SAR 是止损工具不是预测工具</li><li>❌ \"一目均衡表太复杂不如均线\" → 它用一张图整合方向+位置+动能+支撑阻力，信息密度其实更高</li><li>❌ \"云内也可以重仓做\" → 云内是均衡震荡区，方向不明，应轻仓或观望</li></ul>\n<h4>关键术语</h4>\n<table style=\"width:100%;border-collapse:collapse;font-size:.82rem;margin:0 0 1.1rem\"><thead><tr><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">中文</th><th style=\"text-align:left;padding:.45rem .7rem;border-bottom:1px solid rgba(148,180,255,.2);color:#8ba3c7\">英文</th></tr></thead><tbody><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">抛物线转向</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Parabolic SAR</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">一目均衡表</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Ichimoku Cloud / Ichimoku Kinko Hyo</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">云层</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Cloud / Kumo</td></tr><tr><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">转换线 / 基准线</td><td style=\"padding:.4rem .7rem;border-bottom:1px solid rgba(148,180,255,.08);color:#b9cbe8\">Tenkan-sen / Kijun-sen</td></tr></tbody></table>\n<h4>本节小结</h4>\n<ol><li>SAR 是机械移动止损工具：点在下方持多、翻走离场；震荡市停用</li><li>一目均衡表：云上多、云下空、云中观望；转换/基准线定时机</li><li>两者都需趋势过滤，都不在震荡市使用</li></ol>\n<h4>测验题</h4>\n<p><strong>1. 选择题：SAR 指标最本质的用途是？</strong></p>\n<ul><li>A. 预测目标价</li><li>B. 移动止损工具</li><li>C. 测量成交量</li><li>D. 计算估值</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：SAR 的点随趋势加速收敛，本质是替你把止损位一天天上移/下移的机械工具。</p>\n</details>\n<p><strong>2. 判断题：价格处于一目均衡表云层内部时，是重仓交易的好机会。</strong></p>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：错误 解析：云内代表多空均衡、方向不明，应轻仓或观望；云上和云下才有方向性。</p>\n</details>\n<p><strong>3. 选择题：使用 SAR 的必要配合是？</strong></p>\n<ul><li>A. 情绪指标</li><li>B. 趋势过滤器（如 ADX），避免震荡市来回翻转</li><li>C. 财务报告</li><li>D. 新闻推送</li></ul>\n<details>\n<summary>点击查看答案</summary>\n<p>答案：B 解析：SAR 在震荡市频繁翻转失效，必须用 ADX 等指标确认趋势存在后再使用。</p>\n</details>\n<p>---</p>\n<p><a href=\"21-divergence\" style=\"color:#4dd0e1\">上一篇：背离综合</a> | <a href=\"index\" style=\"color:#4dd0e1\">返回附录目录</a></p>",
    "quiz": []
   }
  ],
  "exam": false
 }
];

const EXAMS = [
 {
  "stageId": "s1",
  "pass": 70,
  "questions": [
   {
    "chId": "s1-01-money",
    "chTitle": "第 1 节：货币与法币",
    "q": {
     "q": "区块链的\"不可篡改\"主要依靠什么实现？",
     "opts": [
      "政府监管",
      "每个区块包含前一区块的哈希，形成链式关联",
      "数据存在云端加密",
      "矿工人品可靠"
     ],
     "a": 1,
     "exp": "哈希链结构使得改动任何一个区块都会破坏其后所有区块的哈希，从而被全网发现。"
    }
   },
   {
    "chId": "s1-01-money",
    "chTitle": "第 1 节：货币与法币",
    "q": {
     "q": "比特币的总量可以通过社区投票修改。",
     "opts": [
      "正确",
      "错误"
     ],
     "a": 1,
     "exp": "2100 万上限写死在代码中，修改需要全网几乎所有节点同意，实际上不可能实现——这正是其价值主张。"
    }
   },
   {
    "chId": "s1-02-blockchain",
    "chTitle": "第 2 节：区块链",
    "q": {
     "q": "比特币\"减半\"直接影响的是？",
     "opts": [
      "矿工出块奖励",
      "交易手续费",
      "总量上限",
      "区块大小"
     ],
     "a": 0,
     "exp": "减半指矿工打包新区块的奖励减半，新币产出速率下降，直到约 2140 年挖完全部 2100 万枚。"
    }
   },
   {
    "chId": "s1-03-bitcoin",
    "chTitle": "第 3 节：比特币",
    "q": {
     "q": "以太坊相对比特币最大的创新是？",
     "opts": [
      "总量更少",
      "智能合约——链上可运行程序",
      "交易速度完全一样",
      "创始人更年轻"
     ],
     "a": 1,
     "exp": "智能合约让区块链从\"记账工具\"升级为\"应用平台\"，DeFi、NFT 都建立其上。"
    }
   },
   {
    "chId": "s1-04-ethereum",
    "chTitle": "第 4 节：以太坊",
    "q": {
     "q": "关于助记词，下列说法正确的是？",
     "opts": [
      "可以截图存手机",
      "是钱包的\"总根\"，泄露等于交出全部资产",
      "丢失后可以找客服重置",
      "每个地址对应一个独立助记词"
     ],
     "a": 1,
     "exp": "助记词可派生出钱包内所有私钥，泄露即失去全部资产；丢失无法找回，没有客服。"
    }
   },
   {
    "chId": "s1-05-wallet",
    "chTitle": "第 5 节：钱包",
    "q": {
     "q": "USDT 与 UST 的本质区别是？",
     "opts": [
      "名字不同，机制一样",
      "USDT 靠法币储备，UST 靠算法无抵押",
      "UST 更安全",
      "USDT 是算法稳定币"
     ],
     "a": 1,
     "exp": "USDT 是法币抵押型；UST 是算法稳定币，2022 年脱锚崩盘。"
    }
   },
   {
    "chId": "s1-06-exchange",
    "chTitle": "第 6 节：交易所",
    "q": {
     "q": "把币长期放在交易所，资产就真正属于自己。",
     "opts": [
      "正确",
      "错误"
     ],
     "a": 1,
     "exp": "私钥在平台手里，你的资产本质是平台欠条，存在托管风险（Not your keys, not your coins）。"
    }
   },
   {
    "chId": "s1-07-onchain",
    "chTitle": "第 7 节：链上",
    "q": {
     "q": "链上交易一旦确认就无法撤销。",
     "opts": [
      "正确",
      "错误"
     ],
     "a": 0,
     "exp": "区块链交易不可逆、无客服，转错地址就是永久损失，所以每次操作前必须核对地址。"
    }
   },
   {
    "chId": "s1-08-stablecoin",
    "chTitle": "第 8 节：稳定币",
    "q": {
     "q": "公链上的交易记录任何人都可以查询。",
     "opts": [
      "正确",
      "错误"
     ],
     "a": 0,
     "exp": "公开透明是公链的基本属性，区块浏览器可以查到任何地址和交易的历史。"
    }
   },
   {
    "chId": "s1-09-security",
    "chTitle": "第 9 节：安全",
    "q": {
     "q": "只要项目方承诺高收益，就可以放心授权钱包参与。",
     "opts": [
      "正确",
      "错误"
     ],
     "a": 1,
     "exp": "高收益承诺是最典型的骗局信号；授权恶意合约可直接导致资产被盗。"
    }
   }
  ]
 },
 {
  "stageId": "s2",
  "pass": 70,
  "questions": [
   {
    "chId": "s2-01-spot",
    "chTitle": "第 1 节：现货交易",
    "q": {
     "q": "限价单的特点是？",
     "opts": [
      "保证成交",
      "保证价格（如果成交），但不保证成交",
      "手续费最低",
      "只能卖不能买"
     ],
     "a": 1,
     "exp": "限价单挂指定价格等待成交，成交价格可控，但市场不触及该价就成交不了。"
    }
   },
   {
    "chId": "s2-01-spot",
    "chTitle": "第 1 节：现货交易",
    "q": {
     "q": "RSI 超过 70 就必须立刻卖出。",
     "opts": [
      "正确",
      "错误"
     ],
     "a": 1,
     "exp": "超买不等于反转，强趋势中 RSI 可长期维持高位，单独据此操作会过早下车。"
    }
   },
   {
    "chId": "s2-02-kline",
    "chTitle": "第 2 节：K 线基础",
    "q": {
     "q": "一根 K 线包含以下哪些价格？（多选）",
     "opts": [
      "开盘价",
      "收盘价",
      "最高价",
      "最低价"
     ],
     "a": 0,
     "exp": "K 线完整记录 OHLC 四个价格：开、收、高、低。"
    }
   },
   {
    "chId": "s2-02-kline",
    "chTitle": "第 2 节：K 线基础",
    "q": {
     "q": "单笔交易的风险敞口建议控制在总资金的 1%–2% 以内。",
     "opts": [
      "正确",
      "错误"
     ],
     "a": 0,
     "exp": "这是风控的基本准则之一，能保证连续亏损后本金不受致命损伤。"
    }
   },
   {
    "chId": "s2-03-support",
    "chTitle": "第 3 节：支撑与阻力",
    "q": {
     "q": "价格突破阻力后回踩不破，通常被视为？",
     "opts": [
      "假突破",
      "有效突破的确认信号",
      "立即暴跌的信号",
      "随机噪音"
     ],
     "a": 1,
     "exp": "突破后回踩站稳（原阻力变支撑）是教科书式的有效突破确认。"
    }
   },
   {
    "chId": "s2-03-support",
    "chTitle": "第 3 节：支撑与阻力",
    "q": {
     "q": "锚定自己的买入价做决策（\"不回本不卖\"）是理性的。",
     "opts": [
      "正确",
      "错误"
     ],
     "a": 1,
     "exp": "市场不知道也不在乎你的成本价，决策应基于当前市场结构而非沉没成本。"
    }
   },
   {
    "chId": "s2-04-indicators",
    "chTitle": "第 4 节：常用指标",
    "q": {
     "q": "关于技术指标，正确的是？",
     "opts": [
      "指标能预测未来",
      "指标基于历史数据，是滞后性的辅助工具",
      "指标越多越好",
      "小周期指标信号最可靠"
     ],
     "a": 1,
     "exp": "所有指标由历史价格计算，描述过去而非预测未来，且周期越小噪音越多。"
    }
   },
   {
    "chId": "s2-05-position",
    "chTitle": "第 5 节：仓位管理",
    "q": {
     "q": "盈亏比 3:1 意味着？",
     "opts": [
      "每单必须赚 3%",
      "潜在盈利是潜在亏损的 3 倍",
      "胜率必须是 75%",
      "仓位必须是 3 倍"
     ],
     "a": 1,
     "exp": "盈亏比 = 潜在盈利 ÷ 潜在亏损。3:1 下 40% 胜率长期仍可盈利。"
    }
   },
   {
    "chId": "s2-06-risk",
    "chTitle": "第 6 节：风险控制",
    "q": {
     "q": "纯现货买入的币，只要不加杠杆，就永远不会爆仓。",
     "opts": [
      "正确",
      "错误"
     ],
     "a": 0,
     "exp": "没有负债就没有清算机制，币始终在账户中，损失的只是市值。"
    }
   },
   {
    "chId": "s2-07-psychology",
    "chTitle": "第 7 节：交易心理",
    "q": {
     "q": "支撑位触点越多、经受考验时间越长，该区域越可靠。",
     "opts": [
      "正确",
      "错误"
     ],
     "a": 0,
     "exp": "多次验证的支撑反映了市场的共识，比单次触点可靠得多。"
    }
   }
  ]
 },
 {
  "stageId": "s3",
  "pass": 70,
  "questions": [
   {
    "chId": "s3-01-trend",
    "chTitle": "第 1 节：趋势跟踪",
    "q": {
     "q": "趋势跟踪策略在震荡市中反复小亏，正确的态度是？",
     "opts": [
      "立即放弃该策略",
      "认识到这是策略固有成本，坚持纪律等待趋势",
      "加大仓位一把赚回",
      "改做日内高频"
     ],
     "a": 1,
     "exp": "磨损是趋势策略的必然成本，趋势到来时的大利润覆盖多次小亏。"
    }
   },
   {
    "chId": "s3-02-breakout",
    "chTitle": "第 2 节：突破交易",
    "q": {
     "q": "判断有效突破时，下列哪项参考价值最低？",
     "opts": [
      "放量",
      "实体收盘在关键位外",
      "回踩确认",
      "群里喊单的激烈程度"
     ],
     "a": 3,
     "exp": "市场情绪噪音是反向指标都不如的东西；前三项才是突破确认的技术依据。"
    }
   },
   {
    "chId": "s3-03-pullback",
    "chTitle": "第 3 节：回调买入",
    "q": {
     "q": "网格交易最怕的行情是？",
     "opts": [
      "宽幅震荡",
      "单边下跌跌破下沿",
      "小幅横盘",
      "缓慢上涨"
     ],
     "a": 1,
     "exp": "跌破下沿意味着网格一路买满后价格继续下跌，满仓套牢且弹尽粮绝。"
    }
   },
   {
    "chId": "s3-04-grid",
    "chTitle": "第 4 节：网格交易",
    "q": {
     "q": "关于定投（DCA），正确的说法是？",
     "opts": [
      "适合所有币种包括山寨",
      "下跌时应暂停等企稳",
      "只适用于长期存活资产，且难点在牛市卖出",
      "稳赚不赔"
     ],
     "a": 2,
     "exp": "定投的前提是资产长期存活；熊市坚持买入，牛市分批卖出才是完整闭环。"
    }
   },
   {
    "chId": "s3-05-dca",
    "chTitle": "第 5 节：定投（DCA）",
    "q": {
     "q": "马丁格尔策略的本质风险是？",
     "opts": [
      "手续费",
      "连输时资金需求指数增长，必然撞上资金上限",
      "操作复杂",
      "胜率太低"
     ],
     "a": 1,
     "exp": "指数增长的资金需求 + 必然出现的连输 = 必然破产，只是时间问题。"
    }
   },
   {
    "chId": "s3-06-arbitrage",
    "chTitle": "第 6 节：套利",
    "q": {
     "q": "海龟法则中 ATR 的作用是？",
     "opts": [
      "预测价格目标",
      "标准化各资产的波动，使每次止损风险等额",
      "计算盈利",
      "判断牛熊"
     ],
     "a": 1,
     "exp": "ATR 仓位法保证不同波动率的品种亏起来金额一致，是资金管理的精髓。"
    }
   },
   {
    "chId": "s3-07-hedge",
    "chTitle": "第 7 节：对冲",
    "q": {
     "q": "套利是无风险的，适合普通投资者作为主要盈利手段。",
     "opts": [
      "正确",
      "错误"
     ],
     "a": 1,
     "exp": "存在执行风险（时间差、手续费、平台风险），且有效机会多被机器人抢占，普通人难以稳定获利。"
    }
   },
   {
    "chId": "s3-08-martingale",
    "chTitle": "第 8 节：马丁格尔（警惕）",
    "q": {
     "q": "对冲的目的是降低风险，需要付出手续费、资金费率等成本。",
     "opts": [
      "正确",
      "错误"
     ],
     "a": 0,
     "exp": "对冲是保险，保费是持有成本；它同时对冲掉了上涨收益。"
    }
   },
   {
    "chId": "s3-09-turtle",
    "chTitle": "第 9 节：海龟交易法",
    "q": {
     "q": "回测收益很高的策略可以直接大资金实盘。",
     "opts": [
      "正确",
      "错误"
     ],
     "a": 1,
     "exp": "需警惕过拟合，且必须经过样本外验证、模拟盘和小资金实盘的逐级检验。"
    }
   },
   {
    "chId": "s3-10-styles",
    "chTitle": "第 10 节：策略风格匹配",
    "q": {
     "q": "策略选择与性格无关，收益最高的策略适合所有人。",
     "opts": [
      "正确",
      "错误"
     ],
     "a": 1,
     "exp": "回撤承受力、时间、性格决定执行力；执行不了的策略等于没有策略。"
    }
   }
  ]
 },
 {
  "stageId": "s4",
  "pass": 70,
  "questions": [
   {
    "chId": "s4-01-defi",
    "chTitle": "第 1 节：DeFi",
    "q": {
     "q": "Uniswap 属于哪类 DeFi 协议？",
     "opts": [
      "借贷",
      "去中心化交易所（AMM）",
      "跨链桥",
      "预言机"
     ],
     "a": 1,
     "exp": "Uniswap 是 AMM 型 DEX，靠流动性池和算法定价。"
    }
   },
   {
    "chId": "s4-01-defi",
    "chTitle": "第 1 节：DeFi",
    "q": {
     "q": "监管征税往往意味着加密资产在该法域被承认为合法资产类别。",
     "opts": [
      "正确",
      "错误"
     ],
     "a": 0,
     "exp": "可征税是合法化的标志之一；关键监管事件需要区分情绪冲击与实质变化。"
    }
   },
   {
    "chId": "s4-02-nft",
    "chTitle": "第 2 节：NFT",
    "q": {
     "q": "无常损失影响的是？",
     "opts": [
      "现货持有者",
      "流动性提供者（LP）",
      "矿工",
      "交易所"
     ],
     "a": 1,
     "exp": "LP 的双币持仓随价格波动偏离，收益可能低于单纯持有。"
    }
   },
   {
    "chId": "s4-02-nft",
    "chTitle": "第 2 节：NFT",
    "q": {
     "q": "低流通市值、高 FDV 的代币设计对长期持有者有利。",
     "opts": [
      "正确",
      "错误"
     ],
     "a": 1,
     "exp": "巨额未解锁筹码是悬在头顶的确定性抛压，对长期持有者非常不利。"
    }
   },
   {
    "chId": "s4-03-layer2",
    "chTitle": "第 3 节：Layer 2",
    "q": {
     "q": "Optimistic Rollup 与 ZK Rollup 的核心区别在于？",
     "opts": [
      "手续费高低",
      "前者靠挑战期+欺诈证明，后者靠密码学有效性证明",
      "支持的代币不同",
      "开发团队国籍"
     ],
     "a": 1,
     "exp": "验证机制不同：乐观假设+事后挑战 vs 事前密码学证明。"
    }
   },
   {
    "chId": "s4-03-layer2",
    "chTitle": "第 3 节：Layer 2",
    "q": {
     "q": "DeFi 借贷协议要求借款人提供信用记录和收入证明。",
     "opts": [
      "正确",
      "错误"
     ],
     "a": 1,
     "exp": "DeFi 借贷是纯抵押模式，只看抵押物价值，因此必须超额抵押。"
    }
   },
   {
    "chId": "s4-04-bridge",
    "chTitle": "第 4 节：跨链桥",
    "q": {
     "q": "跨链桥频繁被盗的根本原因是？",
     "opts": [
      "运气差",
      "合约复杂且锁定资金巨大，是黑客最高价值目标",
      "员工工资低",
      "服务器在国外"
     ],
     "a": 1,
     "exp": "巨额集中资金 + 庞大攻击面，使桥成为链上安全重灾区。"
    }
   },
   {
    "chId": "s4-05-stablecoin-mech",
    "chTitle": "第 5 节：稳定币机制",
    "q": {
     "q": "UST 死亡螺旋的直接机制是？",
     "opts": [
      "储备被黑客转走",
      "脱锚→套利铸造 Luna→Luna 抛压→更深脱锚的正反馈",
      "美联储加息",
      "交易所下架"
     ],
     "a": 1,
     "exp": "用波动资产支撑稳定资产的结构性缺陷，在下跌中触发自我强化的崩盘。"
    }
   },
   {
    "chId": "s4-06-regulation",
    "chTitle": "第 6 节：监管与合规",
    "q": {
     "q": "购买 NFT 通常自动包含作品的完整版权。",
     "opts": [
      "正确",
      "错误"
     ],
     "a": 1,
     "exp": "多数项目只转让所有权凭证和有限展示权，版权仍归创作者。"
    }
   },
   {
    "chId": "s4-07-tokenomics",
    "chTitle": "第 7 节：代币经济学",
    "q": {
     "q": "侧链与 Layer 2 的区别在于侧链不依赖主网安全保障。",
     "opts": [
      "正确",
      "错误"
     ],
     "a": 0,
     "exp": "侧链有独立验证人，安全自负；Rollup 类 L2 的安全性锚定主网。"
    }
   }
  ]
 }
];
/* =====================================================================
 * Chain Academy v4 · 第七学段：顶级交易思维（MASTER CLASS）
 * 定位：在「交易基础 / 策略全集 / 指标理论」之后，进入职业化的思考框架：
 *      期望值 → 生存 → 下注尺度 → 市场结构 → 周期 → 衍生品 → 组合 → 研究 → 执行 → 心性
 * 声明：全部内容为理论与历史案例研究，不构成投资建议，不提供任何标的与点位。
 * ===================================================================== */

const MASTER_CHAPTERS = [

/* ------------------------------------------------------------------ 01 */
{
  id: 's7-01-expectancy',
  title: '第 1 节：期望值——交易唯一的地基',
  dur: '约 55 分钟',
  intro: '如果一笔交易的期望值是负的，那么把它重复一千次，只是把亏损变成了一门确定性很高的生意。',
  content: `
<h4>本节目标</h4>
<ul>
  <li>把"赚钱"拆成可以独立测量的三个变量：胜率、赔率、成本</li>
  <li>学会用 <strong>R 倍数</strong>记账，而不是用金额记账</li>
  <li>能算出任何策略的盈亏平衡胜率，并判断它是否现实</li>
  <li>理解算术期望与几何增长的区别——这是"长期活着"的关键</li>
</ul>

<h3>一、交易结果是一个乘法，不是一个加法</h3>
<p>任何一套可重复的交易方法，长期结果都可以写成四个因子的乘积：</p>
<div class="formula">
  <span class="formula__name">RESULT</span>
  长期结果 = <em>单笔期望 E</em> × 交易次数 N × 单笔风险占比 f − 成本 C
</div>
<p>四个因子里，只有 <strong>E</strong> 依赖于你的"判断"，N 依赖于纪律，f 依赖于资金管理，C 依赖于执行与基础设施。多数人把全部注意力放在 E 上，却让另外三个因子随意漂移——这正是"看对了却没赚到"的结构性原因。</p>

<h3>二、用 R 记账：把风险单位化</h3>
<p><strong>1R = 你在这一笔交易中愿意亏损的金额</strong>，通常等于入场价与止损价之间的距离乘以仓位。把所有结果换算成 R，你就获得了跨品种、跨时间、跨账户规模都可比较的度量单位。</p>
<table>
  <thead><tr><th>交易</th><th>风险（R）</th><th>结果</th><th>R 倍数</th></tr></thead>
  <tbody>
    <tr><td>A</td><td>止损 4%，仓位 2,000</td><td>+6%</td><td>+1.5R</td></tr>
    <tr><td>B</td><td>止损 2%，仓位 4,000</td><td>−2%</td><td>−1.0R</td></tr>
    <tr><td>C</td><td>止损 5%，仓位 1,600</td><td>+10%</td><td>+2.0R</td></tr>
  </tbody>
</table>
<p>换算成 R 以后，A、B、C 三笔交易的"好坏"才有统一的坐标系。用金额记账的人，会因为仓位大小而误判自己的能力；用 R 记账的人，记录的是决策质量。</p>

<h3>三、期望值公式与盈亏平衡点</h3>
<div class="formula">
  <span class="formula__name">EXPECTANCY</span>
  E[R] = <em>p</em> × W − (1 − p) × L
  <br>盈亏平衡胜率：<em>p*</em> = L / (W + L)
</div>
<p>其中 p 是胜率，W 是平均盈利（以 R 计），L 是平均亏损（以 R 计，通常略大于 1，因为止损滑点与手续费）。</p>
<table>
  <thead><tr><th>盈亏比 W : L</th><th>盈亏平衡胜率</th><th>含义</th></tr></thead>
  <tbody>
    <tr><td>1 : 1</td><td>50.0%</td><td>扣掉成本后需要显著高于 50% 才能存活</td></tr>
    <tr><td>1.5 : 1</td><td>40.0%</td><td>接近多数趋势策略的真实区间</td></tr>
    <tr><td>2 : 1</td><td>33.3%</td><td>允许大量小亏，但要求抓住大行情</td></tr>
    <tr><td>3 : 1</td><td>25.0%</td><td>胜率极低，对执行与心理要求极高</td></tr>
  </tbody>
</table>
<div class="callout callout--note">
  <span class="callout__label">关键推论</span>
  高胜率不是目标，<strong>期望值为正</strong>才是目标。市场上大量"胜率 80%"的系统，靠的是小赚多次、大亏一次；它们在样本内漂亮，在样本外致命。
</div>

<h3>四、算一笔真实的账</h3>
<p>假设某方法：胜率 45%，平均盈利 2.0R，平均亏损 1.05R（含滑点与手续费），每笔风险 1% 权益。</p>
<div class="formula">
  <span class="formula__name">EXAMPLE</span>
  E[R] = 0.45 × 2.0 − 0.55 × 1.05 = 0.90 − 0.5775 = <em>+0.3225R</em>
  <br>每笔期望收益 ≈ 1% × 0.3225 = <em>0.32%</em> 权益
  <br>100 笔交易的算术期望 ≈ +32R，但路径上出现连续 7 次亏损的概率并不低
</div>
<p>注意最后一句：<strong>期望值只描述"平均"，不描述"路径"</strong>。连续亏损的概率、最大回撤的深度、以及你在回撤中的行为，由方差与仓位决定——这是下一节的内容。</p>

<h3>五、算术期望与几何增长：两个必须区分的概念</h3>
<p>如果你每次都把全部资金投入，算术期望为正也可能让你破产。原因是对数增长：</p>
<div class="formula">
  <span class="formula__name">GEOMETRIC GROWTH</span>
  g(f) = p · ln(1 + f·W) + (1 − p) · ln(1 − f·L)
  <br>近似式：g ≈ μ − σ² / 2（波动率拖累）
</div>
<p>举个直观的例子：某资产年化算术收益 20%、年化波动 40%。你长期持有的几何收益约 20% − 0.4²/2 = 12%。<strong>波动本身就是一种成本</strong>，波动越大的策略，越需要控制暴露，否则"平均值"永远无法兑现为"复利"。</p>

<h3>六、七个关于期望值的常见误区</h3>
<ul>
  <li><strong>误区一：用胜率评价方法。</strong>胜率必须与赔率、成本一起看，单独看没有意义。</li>
  <li><strong>误区二：忽略成本项。</strong>高频策略里，手续费与滑点经常吃掉全部边际；0.1R 的成本能让 0.35R 的期望变成 0.25R。</li>
  <li><strong>误区三：小样本外推。</strong>10 笔交易的胜率没有统计意义。判断 E 需要至少数十到数百个独立样本，且要覆盖不同市场状态。</li>
  <li><strong>误区四：把"盈亏比"当作固定参数。</strong>盈亏比是分布的结果，不是设定；它会随市场波动率一起漂移。</li>
  <li><strong>误区五：忽略机会成本与资金占用。</strong>同一笔资金在同一时间只能服务于一个策略。</li>
  <li><strong>误区六：用事后挑选的样本计算期望值。</strong>这是幸存者偏差的温床，详见第 11 节。</li>
  <li><strong>误区七：把正期望当成"确定性"。</strong>正期望意味着"值得重复"，不意味着"这次会赢"。</li>
</ul>

<details>
  <summary>深度补充：为什么"截断亏损、让利润奔跑"在数学上成立</summary>
  <p>趋势跟踪的期望值来自收益分布的右偏：大多数交易小亏（−1R），少数交易 +5R 到 +20R。只要右尾足够长，即使胜率只有 30%，E 依然为正。但右偏分布有三个代价：第一，需要极长的样本才能观察到尾部；第二，回撤期会很长；第三，执行者必须容忍大量"看起来毫无意义"的小额止损。</p>
  <p>反过来，卖期权之类的负偏策略，胜率可以高达 90%，收益曲线平滑，但左尾极厚。它不是"更好"或"更差"，而是<strong>把风险从频率转移到了幅度</strong>——这一点在第 9 节会展开。</p>
</details>

<h4>本节要点</h4>
<ul>
  <li>结果 = E × N × f − C，四个因子同等重要</li>
  <li>用 R 记账，才能比较不同仓位、不同标的的决策质量</li>
  <li>盈亏平衡胜率 = L / (W + L)；成本会把这条线整体抬高</li>
  <li>算术期望决定"值不值得做"，几何增长决定"能不能长期做"</li>
</ul>

<h4>推荐阅读</h4>
<ul>
  <li>Edward Thorp,《The Kelly Criterion in Blackjack, Sports Betting, and the Stock Market》</li>
  <li>Ralph Vince,《The Mathematics of Money Management》（期望值与最优 f 的经典推导）</li>
  <li>Van K. Tharp,《Trade Your Way to Financial Freedom》（R 倍数记账法的普及者）</li>
</ul>
`,
  quiz: [
    { q:'某方法胜率 40%，平均盈利 2R，平均亏损 1R，则单笔期望值约为？', opts:['+0.2R','+0.4R','−0.2R','+0.8R'], a:0, exp:'0.40×2 − 0.60×1 = 0.8 − 0.6 = +0.2R。正期望但幅度不大，对成本高度敏感。' },
    { q:'盈亏比 2:1 时，理论盈亏平衡胜率是多少？', opts:['50%','40%','33.3%','25%'], a:2, exp:'p* = L/(W+L) = 1/(2+1) ≈ 33.3%。实际交易中还要加上成本，因此真实门槛更高。' },
    { q:'关于"期望值为正"，下列说法正确的是？', opts:['只要期望为正，仓位越重赚得越多','期望值只描述平均结果，不保证单次盈利，也不描述路径风险','胜率越高，期望值一定越高','期望值为正的系统不会出现连续亏损'], a:1, exp:'期望值是长期平均概念。仓位过重会让正期望系统在兑现期望之前就破产；连续亏损是随机序列的正常现象。' },
  ],
},

/* ------------------------------------------------------------------ 02 */
{
  id: 's7-02-ruin',
  title: '第 2 节：破产概率与生存优先',
  dur: '约 60 分钟',
  intro: '专业交易者的第一目标不是收益最大化，而是让"继续下注的资格"尽可能长久。',
  content: `
<h4>本节目标</h4>
<ul>
  <li>把"风险"从"波动"重新定义为"不可恢复的损失"</li>
  <li>理解吸收壁、回撤恢复的数学，以及连续亏损的概率</li>
  <li>用蒙特卡洛思维评估一套方法的生存能力，而不是只看收益</li>
  <li>建立"生存约束优先于收益最大化"的决策顺序</li>
</ul>

<h3>一、风险不是波动，而是退出游戏</h3>
<p>学术界用波动率衡量风险，因为波动是对称且可分散的。但对一个有资金约束、有心理极限、有外部压力的个人来说，真正的风险是<strong>某一刻之后你无法再参与</strong>：保证金被清算、资金被撤走、信心崩塌、或者家庭与健康被拖垮。</p>
<div class="callout callout--quote">
  破产不是一个概率事件，而是一个吸收壁：一旦触碰，之前所有的期望值都失效。
  <cite>ABSORBING BARRIER</cite>
</div>

<h3>二、回撤恢复的不对称性</h3>
<p>亏损与恢复从来不是对称的。亏 50% 之后，你需要赚 100% 才回到原点。</p>
<table>
  <thead><tr><th>回撤</th><th>所需恢复涨幅</th><th>直观含义</th></tr></thead>
  <tbody>
    <tr><td>−10%</td><td>+11.1%</td><td>尚可承受</td></tr>
    <tr><td>−20%</td><td>+25.0%</td><td>开始影响心态</td></tr>
    <tr><td>−30%</td><td>+42.9%</td><td>多数人开始改规则</td></tr>
    <tr><td>−50%</td><td>+100%</td><td>需要一次完整的牛市</td></tr>
    <tr><td>−80%</td><td>+400%</td><td>事实上已经退出游戏</td></tr>
  </tbody>
</table>
<div class="formula">
  <span class="formula__name">RECOVERY</span>
  所需恢复涨幅 = DD / (1 − DD)
</div>

<h3>三、连续亏损：被低估的常态</h3>
<p>假设单笔胜率 50%，连续 6 次亏损的概率是 0.5⁶ ≈ 1.6%。看起来很低，但在 500 笔交易中，至少出现一次 6 连亏的概率约为 1 − (1 − 0.0156)^495 ≈ <strong>99.9%</strong>。也就是说，<strong>连续亏损不是"运气差"，而是必然会遇到的结构</strong>。</p>
<p>如果每笔风险 2%，6 连亏是 −11.4%；如果每笔风险 10%，6 连亏是 −46.9%——同一套方法，因为 f 不同，一个只是不舒服，另一个接近出局。</p>

<h3>四、用蒙特卡洛看生存，而不是看收益</h3>
<p>闭式解在真实策略上很难成立，实务中用蒙特卡洛模拟：</p>
<ol>
  <li>从历史交易中估计胜率 p、平均盈 W、平均亏 L（以及它们的分布，而不只是均值）</li>
  <li>随机重排或按分布重采样，生成 2,000–10,000 条长度为 N 的权益曲线</li>
  <li>统计三个指标：<strong>破产率</strong>（触及生存线）、<strong>最大回撤中位数</strong>、<strong>收益分布的 5% 分位</strong></li>
</ol>
<p>重点看 5% 分位，而不是平均值。平均值描述"理想人生"，5% 分位描述"你会不会死"。</p>
<div class="callout callout--note">
  <span class="callout__label">生存线</span>
  建议在开始前就定义一条<strong>生存线</strong>（例如权益的 70%），并把它当作不可协商的规则：触线即降杠杆、暂停、复盘。生存线的作用不是预测风险，而是把"情绪决策"改成"预设决策"。
</div>

<h3>五、波动率拖累：看不见的抽水</h3>
<div class="formula">
  <span class="formula__name">VOL DRAG</span>
  g ≈ μ − σ² / 2
  <br>例：μ = 30%，σ = 60% → g ≈ 30% − 18% = 12%
</div>
<p>这意味着：加杠杆放大 μ 的同时，σ² 以平方速度增长。2 倍杠杆下，μ 变成 60%，σ 变成 120%，g ≈ 60% − 72% = <strong>−12%</strong>。数学上，杠杆对几何增长的边际收益在某个点之后转为负值——这就是为什么"提高收益"和"提高破产概率"经常是同一个动作。</p>

<h3>六、把生存写进规则</h3>
<ul>
  <li><strong>单笔风险上限：</strong>0.25%–1% 权益，随策略频率与胜率调整，而不是随信心调整。</li>
  <li><strong>组合风险上限：</strong>同时持有的相关性仓位，按相关性折算总风险（第 10 节）。</li>
  <li><strong>回撤分级响应：</strong>−10% 降半仓、−15% 只做 A 级机会、−20% 停止并复盘——写下来，事先签字。</li>
  <li><strong>杠杆上限：</strong>由"最坏情况下的清算距离"反推，而不是由保证金能开多少决定。</li>
  <li><strong>外部约束：</strong>不借贷、不用生活必需资金、不把时间压力转化为仓位压力。</li>
</ul>

<details>
  <summary>深度补充：赌徒破产问题与"优势"的真实含义</summary>
  <p>经典的赌徒破产问题给出一个反直觉结论：在公平赌局中，资金有限的一方最终必然破产，无论下注多小——因为对手的资金是无限的（赌场）。而在有正期望的游戏中，破产概率随资金/下注比例呈指数下降。</p>
  <p>交易中的"优势"不是"我比市场聪明"，而是<strong>在一个足够长的序列中，我的决策分布略微偏离随机</strong>。这个偏离非常小：Sharpe 1.0 的策略，单笔的统计优势可能只有几个基点。因此，"优势"必须靠大量重复才能显现，而重复的前提是——你还活着。</p>
</details>

<h4>本节要点</h4>
<ul>
  <li>回撤恢复不对称：亏 50% 需要赚 100%</li>
  <li>连续亏损在长序列中近乎必然，仓位决定它是"不适"还是"出局"</li>
  <li>看 5% 分位与破产率，而不是平均收益</li>
  <li>波动率拖累会吞噬杠杆带来的算术收益</li>
  <li>事先定义生存线与回撤响应，把风险决策从情绪中剥离</li>
</ul>
`,
  quiz: [
    { q:'账户回撤 40% 后，需要上涨多少才能回到原点？', opts:['40%','50%','66.7%','80%'], a:2, exp:'0.4 / (1 − 0.4) ≈ 66.7%。回撤越深，恢复难度呈非线性上升。' },
    { q:'某策略单笔胜率 50%，在一段 500 笔的交易序列中，"至少出现一次 6 连亏"的概率大致是？', opts:['约 1.6%','约 15%','约 50%','接近 100%'], a:3, exp:'单次出现 6 连亏的概率约 1.56%，但 500 笔中有近 495 个窗口，累积概率接近 1。连续亏损是结构的必然。' },
    { q:'关于波动率拖累，下列表述最准确的是？', opts:['杠杆越高，长期复利增长一定越快','几何增长近似为 μ − σ²/2，杠杆放大 σ² 的速度快于 μ','波动率只影响短期，不影响长期复利','只要期望为正，波动率可以忽略'], a:1, exp:'g ≈ μ − σ²/2。杠杆线性放大 μ，但平方级放大 σ²，超过某点后几何增长反而下降。' },
  ],
},

/* ------------------------------------------------------------------ 03 */
{
  id: 's7-03-kelly',
  title: '第 3 节：凯利公式与分数凯利',
  dur: '约 60 分钟',
  intro: '凯利公式回答的不是"该不该做"，而是"该用多重的手"。它的答案在数学上最优，在现实中过于激进。',
  content: `
<h4>本节目标</h4>
<ul>
  <li>掌握凯利公式的推导与适用边界</li>
  <li>理解"增长率最优"与"回撤可承受"之间的张力</li>
  <li>学会用 1/4–1/2 凯利做实务折中，并知道为什么</li>
  <li>识别参数估计误差导致"过度下注"的机制</li>
</ul>

<h3>一、从赌注到公式</h3>
<p>假设一个二元赌局：赢的概率 p，赢时获得 b 倍下注额，输时损失下注额。下注比例为 f。长期财富的增长率是：</p>
<div class="formula">
  <span class="formula__name">KELLY</span>
  g(f) = p · ln(1 + f·b) + (1 − p) · ln(1 − f)
  <br>对其求导并令导数为零：<em>f* = p − (1 − p) / b</em>
</div>
<p>把 b 换成交易中的盈亏比 W/L，就得到交易版：</p>
<div class="formula">
  <span class="formula__name">TRADING KELLY</span>
  f* = p − (1 − p) × (L / W)
  <br>代入 p = 45%，W = 2R，L = 1R：f* = 0.45 − 0.55 × 0.5 = <em>17.5%</em>
</div>
<p>意思是：如果这套方法的参数是"真实且稳定"的，那么每次风险 17.5% 的权益，长期几何增长率最高。注意是<strong>每次</strong> 17.5%——这已经远超绝大多数人的心理与制度承受力。</p>

<h3>二、增长率与回撤的取舍</h3>
<p>凯利点只最大化增长率，不控制回撤。实际曲线是：下注比例从 0 增加到 f*，增长率上升；超过 f* 后增长率下降；到 2f* 时增长率归零；超过 2f* 则长期必亏。</p>
<table>
  <thead><tr><th>下注比例</th><th>相对增长率</th><th>典型回撤量级</th><th>实务评价</th></tr></thead>
  <tbody>
    <tr><td>1/4 凯利</td><td>约 44%</td><td>个位数百分比</td><td>机构常用，可长期承受</td></tr>
    <tr><td>1/2 凯利</td><td>约 75%</td><td>约 25%–35%</td><td>进取型个人交易者上限</td></tr>
    <tr><td>全凯利</td><td>100%</td><td>50% 以上常见</td><td>理论上最优，现实几乎不可执行</td></tr>
    <tr><td>2 倍凯利</td><td>0</td><td>接近必然的深回撤</td><td>数学上的自杀</td></tr>
  </tbody>
</table>
<div class="callout callout--warn">
  <span class="callout__label">为什么不是全凯利</span>
  全凯利要求参数<strong>精确已知且恒定</strong>。真实交易中 p、W、L 都是估计值，且会随市场状态漂移。参数高估 20%，就足以让"最优"变成"过度下注"。分数凯利的本质，是为估计误差买保险。
</div>

<h3>三、估计误差如何杀死账户</h3>
<p>设真实 p = 45%、b = 2，则 f* = 17.5%。如果你因为样本偏差误以为 p = 55%，你会算出 f* = 32.5%，接近 2 倍凯利。此时几何增长率从正转负——<strong>你以为在优化，其实在慢性破产</strong>。</p>
<p>这就是为什么职业做法是：先用保守参数（下偏的 p、上偏的 L）算出 f*，再乘以 0.25–0.5。宁可少赚，也不要让"估计误差"直接决定生死。</p>

<h3>四、凯利在真实市场中的四个不成立假设</h3>
<ul>
  <li><strong>假设一：结果是二元的、可重复的。</strong>真实交易的盈亏是连续分布，且尾部不自限。</li>
  <li><strong>假设二：p 与 b 稳定。</strong>市场状态切换会让参数整体漂移（第 8 节）。</li>
  <li><strong>假设三：可以无限分割下注。</strong>最小交易单位、保证金与流动性限制让 f 无法精确执行。</li>
  <li><strong>假设四：没有摩擦。</strong>手续费、资金费、滑点会系统性地下移 g(f) 曲线，把最优 f 左移。</li>
</ul>
<p>四项假设中任何一项不成立，凯利值就会高估。四项同时不成立时，"全凯利"几乎必然过度下注。</p>

<details>
  <summary>深度补充：从凯利到风险预算——机构为什么不直接算凯利</summary>
  <p>大型机构很少直接使用凯利公式，而是使用风险预算（risk budgeting）与波动率目标（volatility targeting）：先设定组合的目标波动率（例如年化 8%–12%），再按各策略的波动率与相关性分配风险。原因有三：一是凯利对参数极度敏感；二是机构的目标函数不是几何增长最大化，而是"在约束条件下最大化风险调整收益"；三是监管与委托责任要求回撤可控。</p>
  <p>对个人而言，更实用的做法是把凯利当作<strong>上限校验</strong>：如果你的实际下注规模远低于 1/4 凯利，说明你还有空间；如果接近或超过全凯利，几乎可以确定你在过度下注。</p>
</details>

<h4>本节要点</h4>
<ul>
  <li>f* = p − (1−p)/b，是"增长率最优"而非"最舒适"</li>
  <li>超 2f* 长期必亏；参数误差让"最优"变成"过度"</li>
  <li>实务用 1/4–1/2 凯利，为估计误差买保险</li>
  <li>凯利的四个假设在市场中都不严格成立</li>
</ul>
`,
  quiz: [
    { q:'胜率 40%，盈亏比 b = 2（赢 2R 输 1R），凯利下注比例 f* 约为？', opts:['10%','20%','30%','40%'], a:0, exp:'f* = 0.4 − 0.6/2 = 0.4 − 0.3 = 10%。' },
    { q:'为什么实务中普遍使用"分数凯利"而不是全凯利？', opts:['因为分数凯利收益更高','因为全凯利要求参数精确已知，而真实参数只是估计值且会漂移','因为分数凯利不需要计算','因为全凯利在数学上是错误的'], a:1, exp:'全凯利对参数误差极度敏感。分数凯利牺牲部分增长率，换取对估计误差与回撤的容错。' },
    { q:'当实际下注比例达到凯利值的 2 倍时，长期几何增长率大致为？', opts:['仍然是最大值','约等于最大值的一半','约为零','变为负无穷'], a:2, exp:'在经典模型中，2f* 处几何增长率归零；超过 2f* 才转为负值。' },
  ],
},

/* ------------------------------------------------------------------ 04 */
{
  id: 's7-04-sizing',
  title: '第 4 节：仓位、波动率目标与风险预算',
  dur: '约 55 分钟',
  intro: '仓位管理的本质，是把"我看好"翻译成"我承担得起"。',
  content: `
<h4>本节目标</h4>
<ul>
  <li>掌握固定比例风险法（fixed fractional）的计算与变形</li>
  <li>理解波动率目标、ATR 止损与等风险贡献的差异</li>
  <li>能计算相关性仓位的合并风险，避免"看似分散实则叠加"</li>
  <li>建立以"最坏情况"为起点的杠杆决策流程</li>
</ul>

<h3>一、固定比例风险：最基础也最可靠</h3>
<div class="formula">
  <span class="formula__name">POSITION SIZE</span>
  仓位数量 = (权益 × 单笔风险比例 r) / |入场价 − 止损价|
  <br>名义价值 = 仓位数量 × 入场价；实际杠杆 = 名义价值 / 权益
</div>
<p>例：权益 10,000，r = 0.75%，入场 100，止损 96（4% 距离）。</p>
<div class="formula">
  <span class="formula__name">EXAMPLE</span>
  风险金额 = 10,000 × 0.0075 = 75
  <br>数量 = 75 / 4 = 18.75 → 名义价值 1,875，实际杠杆 <em>0.19×</em>
</div>
<p>注意这个反直觉的结果：<strong>止损越远，仓位越小；止损越近，仓位越大</strong>。很多人做反了——他们因为"看好"而放大仓位，又因为"怕亏"而收紧止损，结果风险敞口被双向放大。</p>

<h3>二、波动率目标：让风险恒定，而不是让金额恒定</h3>
<p>固定金额的仓位，在低波动期风险偏小、在高波动期风险偏大。波动率目标法把仓位与已实现波动率挂钩：</p>
<div class="formula">
  <span class="formula__name">VOL TARGETING</span>
  仓位系数 = 目标波动率 / 已实现波动率
  <br>例：目标年化 15%，当前已实现 60% → 系数 0.25
</div>
<p>它的效果是：波动放大时自动减仓，波动收敛时自动加仓。代价是在极端行情中会被动卖在低点（这也是 2020 年 3 月与 2022 年多次出现"波动率目标策略放大跌幅"讨论的原因）。</p>

<h3>三、ATR 止损：把"距离"标准化</h3>
<p>用 ATR（平均真实波幅）而不是固定百分比定义止损，可以让不同品种、不同波动环境下的止损具有可比性：</p>
<div class="formula">
  <span class="formula__name">ATR STOP</span>
  止损距离 = k × ATR(n)，常用 k = 1.5–3
  <br>仓位 = (权益 × r) / (k × ATR)
</div>

<h3>四、相关性：分散化的幻觉</h3>
<p>同时持有 3 个"不同"标的，如果它们的日收益相关性是 0.85，你实际上只持有了约 1.8 个独立风险单位。组合波动率为：</p>
<div class="formula">
  <span class="formula__name">PORTFOLIO VOL</span>
  σp = √( ΣΣ wi·wj·σi·σj·ρij )
  <br>两个等权、σ 均为 40%、ρ = 0.6：σp = √(0.25·0.16 + 0.25·0.16 + 2·0.25·0.16·0.6) ≈ <em>35.8%</em>
</div>
<p>相关性从 0.6 降到 0.2，同样配置的组合波动降到约 25.3%。<strong>分散化的收益几乎全部来自低相关，而不是来自标的数量。</strong></p>
<div class="callout callout--risk">
  <span class="callout__label">尾部相关</span>
  危机中相关性会趋近于 1。2020 年 3 月、2022 年 5 月（LUNA）与 2022 年 11 月（FTX）期间，主流加密资产的相关性一度显著上升，分散化在最需要它的时候失效。因此仓位计算必须包含一个"相关性 = 1"的压力测试版本。
</div>

<h3>五、从最坏情况反推杠杆</h3>
<p>正确的顺序是：先问"最坏情况下我会亏多少"，再决定能开多大。</p>
<ol>
  <li>定义最坏情形：单日跳空 −30%，或连续 5 日下跌</li>
  <li>计算该情形下的组合损失，必须小于生存线的剩余空间</li>
  <li>反推可用杠杆，而不是从平台允许的最大杠杆往下调</li>
  <li>把强平价格写进交易计划，并要求它与你的止损位有足够距离</li>
</ol>
<div class="formula">
  <span class="formula__name">LIQUIDATION (隔离)</span>
  多单强平价 ≈ 入场价 × (1 − 1/杠杆 + 维持保证金率)
  <br>例：10× 多单，MMR 0.5% → 强平价 ≈ 入场价 × 0.905
</div>
<p>这意味着 10 倍杠杆下，价格下跌约 9.5% 就会触发清算——远早于多数人的"止损位"。<strong>杠杆真正改变的，不是期望值，而是破产时间。</strong></p>

<details>
  <summary>深度补充：风险预算与等风险贡献（ERC）</summary>
  <p>等权配置会让高波动资产主导组合风险。等风险贡献的做法是让每个资产对组合波动的贡献相等，通常需要给低波动资产更高的权重。实务中常用简化版本：按 1/σ 分配权重（逆波动率加权），再按相关性矩阵做一次修正。</p>
  <p>对个人交易者，一个够用的近似是：把每个策略的"风险单位"定义为<strong>该策略在最坏情况下的损失</strong>，然后让所有策略的风险单位之和不超过账户的既定风险预算。</p>
</details>

<h4>本节要点</h4>
<ul>
  <li>仓位 = 风险金额 / 止损距离；止损越远，仓位越小</li>
  <li>波动率目标让风险恒定，但在极端行情中会放大被动卖出</li>
  <li>分散化收益来自低相关；危机中相关性趋近于 1</li>
  <li>杠杆由最坏情况反推，而不是由平台上限决定</li>
</ul>
`,
  quiz: [
    { q:'权益 20,000，单笔风险 1%，入场价 50，止损价 46，则仓位数量约为？', opts:['50 单位','100 单位','200 单位','400 单位'], a:0, exp:'风险金额 200，止损距离 4，数量 = 200/4 = 50 单位，名义价值 2,500，杠杆 0.125×。' },
    { q:'两个资产各配置 50%，波动率均为 40%，相关系数为 0.6，组合波动率约为？', opts:['40%','35.8%','30%','20%'], a:1, exp:'σp = √(0.25·0.16+0.25·0.16+2·0.25·0.16·0.6) ≈ 35.8%。相关性越高，分散效果越弱。' },
    { q:'关于杠杆，下列说法正确的是？', opts:['杠杆提高了策略的期望值','杠杆会让强平价靠近入场价，主要改变的是破产时间','只要止损设置得当，杠杆大小无所谓','杠杆只影响手续费'], a:1, exp:'杠杆不改变单笔交易的期望值，但压缩了容错空间，使清算更早发生。' },
  ],
},

/* ------------------------------------------------------------------ 05 */
{
  id: 's7-05-microstructure',
  title: '第 5 节：市场微结构——订单簿、流动性与冲击成本',
  dur: '约 65 分钟',
  intro: '你看到的"价格"是上一笔成交的价格，而不是下一笔你能成交的价格。这两者之间的差距，就是微结构。',
  content: `
<h4>本节目标</h4>
<ul>
  <li>理解限价单、市价单、订单簿与价差的运作机制</li>
  <li>掌握滑点与市场冲击的估算思路，知道大单为什么"越买越贵"</li>
  <li>理解做市商的库存风险与逆向选择</li>
  <li>认识清算瀑布、流动性真空与"插针"的微观成因</li>
</ul>

<h3>一、订单簿是一个实时排队系统</h3>
<p>任何撮合市场都由两侧的挂单构成：买方的限价买单形成 <strong>bid</strong>，卖方的限价卖单形成 <strong>ask</strong>，二者之差是价差（spread）。价差不是手续费，而是<strong>立即成交的隐性成本</strong>。</p>
<table>
  <thead><tr><th>概念</th><th>机制</th><th>对交易者的含义</th></tr></thead>
  <tbody>
    <tr><td>价差 spread</td><td>最优买价与最优卖价之差</td><td>市价买入立刻承担半个到一个价差</td></tr>
    <tr><td>深度 depth</td><td>各价位上的挂单量</td><td>决定一笔大单能吃掉多少而价格不变</td></tr>
    <tr><td>Maker / Taker</td><td>挂单者提供流动性，吃单者消耗流动性</td><td>两者费率不同，长期会显著改变期望值</td></tr>
    <tr><td>逆向选择</td><td>你的挂单被成交，往往是因为对手知道得更多</td><td>做市不是"无风险收租"</td></tr>
    <tr><td>Mark / Index</td><td>标记价格通常取多来源指数，用于强平</td><td>强平依据的是标记价，不是最新成交价</td></tr>
  </tbody>
</table>

<h3>二、滑点与冲击：大单的真实成本</h3>
<p>市价单会沿着订单簿逐档成交。名义金额越大，成交均价越差。经验模型认为冲击成本大致与规模的平方根成正比：</p>
<div class="formula">
  <span class="formula__name">MARKET IMPACT</span>
  冲击成本 ≈ k · σ · √( Q / ADV )
  <br>Q = 你的下单量，ADV = 日均成交量，σ = 日波动率，k 为经验系数
</div>
<p>平方根意味着：下单量放大 4 倍，冲击只放大 2 倍——但绝对成本仍在上升。这也是为什么大资金必须使用执行算法（第 12 节），而小额交易者更该关心费率与价差。</p>
<div class="callout callout--note">
  <span class="callout__label">算一笔账</span>
  若某标的日波动 3%，你的订单占日成交量的 1%，在 k = 1 的粗略假设下，冲击约 0.3%。对于目标年化 15% 的策略，单次 0.3% 的额外成本足以吞掉大部分边际。
</div>

<h3>三、做市商在赚什么，又在承担什么</h3>
<p>做市商同时挂出买卖两侧，赚取价差，但承担两类风险：</p>
<ul>
  <li><strong>库存风险：</strong>成交后持仓方向与市场走势相反，价差收入无法覆盖库存亏损。</li>
  <li><strong>逆向选择：</strong>当信息优势方集中吃单时，做市商会被"挑走"有利的一侧。</li>
</ul>
<p>因此做市商的报价会随库存与波动率动态调整：库存偏离中性时，向不利方向报价；波动率上升时，扩大价差。你看到的"价差变宽"，往往是做市商在告诉你：<strong>现在的不确定性变高了</strong>。</p>

<h3>四、清算瀑布：杠杆如何制造价格</h3>
<p>在合约市场，价格下跌会触发多单强平，强平本身是市价卖单，进一步压低价格，触发更多强平。这个正反馈机制形成"清算瀑布"，其特征是：</p>
<ul>
  <li>短时间内成交量骤增，价格快速偏离，价差急剧扩大</li>
  <li>标记价格与最新成交价出现背离，套利与预言机风险上升</li>
  <li>流动性提供者撤单，深度瞬间蒸发，形成"插针"</li>
</ul>
<div class="callout callout--risk">
  <span class="callout__label">流动性的状态依赖</span>
  平时看到的深度，不代表极端时刻的深度。流动性会在最需要它的时候消失，这是所有止损与杠杆计算都必须假设的情景。
</div>

<h3>五、交易场所的碎片化</h3>
<p>同一资产在不同场所的价格并不完全一致，价差由以下因素解释：费率结构、提币限制、法币通道、托管风险、区域监管、以及各场所的流动性深度。跨场所价差看起来是"无风险套利"，实际上要扣除：</p>
<ul>
  <li>两边的手续费与资金费</li>
  <li>资金划转的时间成本与网络费用</li>
  <li>提币暂停、滑点、以及对手方违约风险</li>
  <li>价差收敛的时间不确定性与库存风险</li>
</ul>
<p>很多所谓的"搬砖机会"，在扣除这些成本与风险后，期望值接近零甚至为负——这正是第 6 节套利讨论的出发点。</p>

<details>
  <summary>深度补充：延迟、抢跑与 MEV</summary>
  <p>在链上交易中，交易进入内存池（mempool）后，会被区块生产者按手续费排序。这产生了 MEV（Maximal Extractable Value）：搜索者通过前置交易（front-running）、三明治攻击（sandwich）等方式，从普通交易者的滑点中获利。防御手段包括：设置更紧的滑点容忍度、使用私有交易通道、拆分订单、以及避免在拥堵时段做大额市价交易。</p>
  <p>中心化交易所同样存在延迟竞赛：更快的行情与更低的延迟，本身就是一种"结构性优势"。对个人而言，与其在速度上竞争，不如选择<strong>不依赖毫秒级反应的策略</strong>。</p>
</details>

<h4>本节要点</h4>
<ul>
  <li>价差是立即成交的隐性成本；深度决定大单的真实成交价</li>
  <li>冲击成本近似与 √(规模) 成正比</li>
  <li>做市赚价差，承担库存风险与逆向选择</li>
  <li>清算瀑布会让流动性在关键时刻消失</li>
  <li>跨场所价差必须扣除全部摩擦与对手方风险</li>
</ul>
`,
  quiz: [
    { q:'市价单买入时，交易者主要承担哪种隐性成本？', opts:['只有手续费','价差与逐档成交造成的滑点','只有资金费','没有任何成本'], a:1, exp:'市价单立即消耗订单簿深度，成交均价劣于最优卖价，这部分差距就是价差与滑点。' },
    { q:'关于市场冲击成本，经验模型通常认为它与什么近似成正比？', opts:['下单量的平方','下单量的平方根','下单量的对数','与下单量无关'], a:1, exp:'平方根模型：冲击 ≈ k·σ·√(Q/ADV)。规模越大成本越高，但边际递增速度递减。' },
    { q:'危机时"流动性消失"最直接的后果是？', opts:['手续费下降','价差扩大、深度变薄，止损滑点显著增大','波动率下降','资金费率归零'], a:1, exp:'流动性提供者在不确定性升高时撤单或扩大价差，导致深度变薄，市价单的滑点急剧上升。' },
  ],
},

/* ------------------------------------------------------------------ 06 */
{
  id: 's7-06-auction',
  title: '第 6 节：拍卖、价值区间与订单流',
  dur: '约 60 分钟',
  intro: '价格不是被"画"出来的，而是被一次次拍卖发现的。理解拍卖，比背诵形态更接近市场的物理层。',
  content: `
<h4>本节目标</h4>
<ul>
  <li>理解连续双向拍卖与价值区间（Value Area）的形成</li>
  <li>掌握失衡、吸收、冰山单、成交量 Delta 等订单流概念</li>
  <li>区分"订单流作为执行工具"与"订单流作为预测工具"</li>
  <li>识别订单流工具被过度包装时的伪精确</li>
</ul>

<h3>一、市场是一台持续进行的拍卖机</h3>
<p>每一笔成交都需要一个愿意买的和一个愿意卖的。价格的作用是<strong>寻找能让成交量最大化的区间</strong>：当价格离开多数人认可的价值区间，成交量往往下降，价格被拉回；当新的信息进入，拍卖会向上或向下"寻找"新的价值区间。</p>
<table>
  <thead><tr><th>概念</th><th>定义</th><th>用途</th></tr></thead>
  <tbody>
    <tr><td>价值区间 VA</td><td>包含约 70% 成交量的价格带</td><td>判断"公允区"，识别偏离</td></tr>
    <tr><td>控制点 POC</td><td>成交量最大的单一价位</td><td>多空争夺的锚点</td></tr>
    <tr><td>失衡 Imbalance</td><td>买卖主动成交量显著不对称</td><td>短期方向压力的证据</td></tr>
    <tr><td>吸收 Absorption</td><td>大额主动单被挂单吸收，价格不动</td><td>潜在的反转或派发信号</td></tr>
    <tr><td>冰山单 Iceberg</td><td>隐藏真实数量的分批挂单</td><td>解释"打不穿"的支撑/阻力</td></tr>
  </tbody>
</table>

<h3>二、成交量 Delta 与"谁更急"</h3>
<div class="formula">
  <span class="formula__name">DELTA</span>
  Delta = 主动买入量 − 主动卖出量
  <br>CVD = Delta 的累计值（Cumulative Volume Delta）
</div>
<p>Delta 回答的是"这一段时间里，谁更愿意付出价差"。但要注意两个陷阱：</p>
<ul>
  <li><strong>交易所偏差：</strong>不同场所的 Delta 口径不同，跨场所加总会失真。</li>
  <li><strong>虚假主动单：</strong>大额市价单可能来自清算引擎、做市商对冲或指数再平衡，而非"聪明钱的方向判断"。</li>
</ul>
<div class="callout callout--warn">
  <span class="callout__label">关键区分</span>
  订单流最适合回答"<strong>现在成交的成本是多少、流动性在哪里</strong>"，也就是<strong>执行问题</strong>；它对"未来方向"的解释力远弱于营销话术所暗示的程度。把执行工具当预测工具，是订单流交易者最常见的亏损来源。
</div>

<h3>三、吸收与失衡：两个可检验的观察</h3>
<p>假设价格反复冲击某一价位，主动买盘持续放大，但价格始终无法突破，同时该价位的挂单量不断补充——这是"吸收"的典型结构。它可能意味着：</p>
<ol>
  <li>有耐心的大额卖方在该价位派发；</li>
  <li>做市商在对冲库存，而非表达方向；</li>
  <li>止损单密集区被反复触发后耗尽。</li>
</ol>
<p>三种解释都成立，因此"吸收"本身不是信号，而是<strong>假设</strong>。可检验的做法是：事先定义观察条件（例如"连续 3 次冲击同一价位未破且 CVD 创新高"），统计后续 N 根 K 线的收益分布，看它是否显著偏离基准。第 11 节会给出完整的检验流程。</p>

<h3>四、开盘拍卖与时间结构</h3>
<p>不同市场时段的参与者结构不同：亚洲时段偏做市与套利，欧美时段偏方向性资金，重大数据发布前后流动性会短暂恶化。这导致：</p>
<ul>
  <li>同一形态在不同时段的可靠性不同</li>
  <li>止损更容易被"时段性流动性真空"触发</li>
  <li>隔夜与周末的跳空风险需要单独定价</li>
</ul>
<p>对策略的影响是实质性的：一个在欧美时段有效的突破策略，可能在亚洲时段因为流动性不足而频繁假突破。<strong>时间维度是策略参数的一部分，不是背景噪音。</strong></p>

<h3>五、订单流工具的正确用法</h3>
<ul>
  <li><strong>用于执行：</strong>判断当前价差是否合理、分批下单的节奏、止损应放在流动性之外还是之内。</li>
  <li><strong>用于风险：</strong>识别止损密集区与清算价位，避免把止损放在"必然被扫"的位置。</li>
  <li><strong>用于验证：</strong>把订单流观察作为假设的一部分，用统计检验确认，而不是作为入场理由。</li>
</ul>
<p>反过来，把"足迹图""大单墙"当作确定性的方向指引，本质上是在用高频噪音解释低频结果。</p>

<details>
  <summary>深度补充：为什么"看见大单"不等于"跟随大单"</summary>
  <p>订单簿上的大额挂单可能是真实的，也可能是"幌骗"（spoofing）：挂出大单制造压力，成交前撤单。即使挂单是真实的，它也可能随时被撤走——你看到的是<strong>意愿</strong>，不是<strong>承诺</strong>。</p>
  <p>更可靠的观察是"成交后的价格行为"：大单被吃掉后价格是否继续、吸收发生后价格是否反向。把观察从"挂单"移到"成交与后续反应"，能显著降低被误导的概率。</p>
</details>

<h4>本节要点</h4>
<ul>
  <li>价格是拍卖的结果，价值区间描述"公允带"</li>
  <li>Delta 反映主动成交的方向压力，但口径与来源会影响结论</li>
  <li>吸收、失衡是假设，不是信号；需要事先定义并统计检验</li>
  <li>时段结构会改变策略的有效性</li>
  <li>订单流首先是执行与风险工具，其次才是研究素材</li>
</ul>
`,
  quiz: [
    { q:'"价值区间（Value Area）"通常指什么？', opts:['价格的历史最高与最低区间','包含约 70% 成交量的价格带','交易所规定的最小报价单位','做市商的库存区间'], a:1, exp:'价值区间是成交量分布中覆盖约 70% 成交量的价格带，用于描述市场认可的"公允区"。' },
    { q:'关于订单流工具，下列判断最合理的是？', opts:['大额挂单一旦出现就应立刻跟随','订单流主要解决执行与风险问题，对方向的解释力有限','Delta 为正就一定上涨','订单流可以完全替代风险管理'], a:1, exp:'挂单是意愿而非承诺，且主动单来源复杂。订单流更适合评估成本、流动性与止损位置。' },
    { q:'"吸收"现象指的是？', opts:['主动买单被挂单大量承接，价格未能继续上行','交易所暂停撮合','资金费率归零','订单簿深度突然增加'], a:0, exp:'吸收指大额主动成交被对手方挂单消化而价格变化有限，可能反映派发、对冲或止损耗尽等多种机制。' },
  ],
},

/* ------------------------------------------------------------------ 07 */
{
  id: 's7-07-wyckoff',
  title: '第 7 节：威科夫与"聪明钱"——哪些能用，哪些是叙事',
  dur: '约 60 分钟',
  intro: '威科夫提供了一套描述供需转换的语言，但它的很多现代变体已经退化成"事后总能自圆其说"的叙事。',
  content: `
<h4>本节目标</h4>
<ul>
  <li>理解威科夫三定律与吸筹/派发的基本结构</li>
  <li>区分"描述性框架"与"可证伪的交易规则"</li>
  <li>识别 SMC / ICT 等现代变体中可用的内核与不可验证的部分</li>
  <li>学会把形态语言转写为事前可检验的假设</li>
</ul>

<h3>一、威科夫三定律</h3>
<ol>
  <li><strong>供需定律：</strong>价格由供需失衡驱动；成交量是需求/供给强度的证据。</li>
  <li><strong>因果定律：</strong>横盘积累（cause）决定后续行情的幅度（effect）；盘整越久，潜在空间越大。</li>
  <li><strong>努力与结果定律：</strong>成交量（努力）与价格进展（结果）应一致；背离意味着吸收或衰竭。</li>
</ol>
<p>这三条本质上是对"量价关系"的定性描述，与第 6 节的拍卖理论高度兼容。</p>

<h3>二、吸筹与派发的经典结构</h3>
<table>
  <thead><tr><th>阶段</th><th>吸筹（Accumulation）</th><th>派发（Distribution）</th></tr></thead>
  <tbody>
    <tr><td>起点</td><td>PS 初步支撑 → SC 抛售高潮</td><td>BC 买入高潮 → AR 自动回落</td></tr>
    <tr><td>测试</td><td>ST 二次测试、Spring 弹簧（假破）</td><td>UT 上冲失败、UTAD 假突破</td></tr>
    <tr><td>确认</td><td>SOS 强势信号、LPS 回踩不破</td><td>SOW 弱势信号、LPSY 反弹无力</td></tr>
    <tr><td>结果</td><td>放量突破区间上沿</td><td>跌破区间下沿，进入下跌</td></tr>
  </tbody>
</table>
<div class="callout callout--note">
  <span class="callout__label">有用的部分</span>
  这套语言强迫你回答三个好问题：<strong>谁在被吸收？成交量支持这个方向吗？如果这里是"弹簧"，失效点在哪里？</strong> 它把注意力从"形态像不像"转移到"供需是否真的转换"。
</div>

<h3>三、问题：事后可标注性</h3>
<p>威科夫结构最大的弱点，是<strong>只能在事后被清晰标注</strong>。同一段走势，在突破前可以被解释为"吸筹完成"，在跌破后可以被解释为"派发陷阱"。如果一套方法在任何结果下都能给出解释，它就不可证伪——而不可证伪的框架无法产生可执行的期望值。</p>
<div class="callout callout--warn">
  <span class="callout__label">判断标准</span>
  一个方法是否可用，不看它"解释得多好"，而看它能否在<strong>事前</strong>写出：入场条件、失效条件、样本量与统计结果。写不出失效条件的形态，不是方法，是叙事。
</div>

<h3>四、SMC / ICT 的可验证内核</h3>
<p>现代"聪明钱"体系提出了一些新名词。剥离营销语言后，其中有一部分与既有的市场微结构知识重合：</p>
<table>
  <thead><tr><th>术语</th><th>可对应的机制</th><th>验证方式</th></tr></thead>
  <tbody>
    <tr><td>流动性池 / 止损猎取</td><td>止损密集区被触发形成的短时冲击</td><td>统计"前高/前低被扫后"的收益分布</td></tr>
    <tr><td>订单块 Order Block</td><td>大额成交留下的供需区，类似支撑阻力</td><td>用触碰后的反应率与盈亏比检验</td></tr>
    <tr><td>FVG / 失衡缺口</td><td>快速行情留下的未成交区间，具均值回归倾向</td><td>测量回补概率与时间分布</td></tr>
    <tr><td>溢价/折价</td><td>相对区间中值的偏离，类似价值区间概念</td><td>与成交量分布对照</td></tr>
  </tbody>
</table>
<p>而"机构在某个特定时间窗口必然入场""某个固定时段必然反转"这类说法，缺少可公开验证的机制，应当被降级为假设，而不是规则。</p>

<h3>五、把形态翻译成假设</h3>
<p>以"弹簧（Spring）"为例，可执行的写法是：</p>
<ol>
  <li><strong>定义：</strong>价格跌破过去 N 日区间下沿，但收盘回到区间内，且当日成交量高于 20 日均量。</li>
  <li><strong>入场：</strong>次日开盘或回踩区间下沿时入场。</li>
  <li><strong>失效：</strong>收盘价再次跌破区间下沿超过 X%，或 3 日内未出现正向跟进。</li>
  <li><strong>统计：</strong>在多个标的、多个时间段上计算胜率、平均 R、最大回撤，并与"随机入场"基准对比。</li>
</ol>
<p>只有完成第 4 步，你才知道这个形态是不是真的有边际。<strong>形态是问题的起点，统计是答案的唯一来源。</strong></p>

<details>
  <summary>深度补充：为什么"聪明钱"叙事如此有吸引力</summary>
  <p>它提供了三样人们渴望的东西：确定性的因果（"是机构在洗盘"）、可识别的标记（"看这个订单块"）、以及失败时的解释（"他们扫了你的止损"）。这三者共同构成一个心理上高度自洽的系统，让人在连续亏损后仍能维持信念。</p>
  <p>但交易需要的不是自洽，而是<strong>可检验的边际</strong>。一个诚实的研究者应当经常问：如果把这套规则交给一个不知道它叫什么的程序去执行，结果会不同吗？</p>
</details>

<h4>本节要点</h4>
<ul>
  <li>威科夫三定律是量价关系的定性描述，可作为观察框架</li>
  <li>吸筹/派发结构容易事后标注，必须转化为事前规则</li>
  <li>SMC/ICT 部分术语可映射到微结构机制，可被检验</li>
  <li>没有失效条件的形态不构成方法</li>
</ul>
`,
  quiz: [
    { q:'威科夫"努力与结果"定律的核心含义是？', opts:['成交量越大价格一定越高','成交量（努力）与价格进展（结果）应相互印证，背离提示吸收或衰竭','盘整时间越长越好','只有机构能看懂成交量'], a:1, exp:'该定律强调量价一致性：放量却无进展，或缩量却大幅推进，都提示供需结构可能变化。' },
    { q:'为什么说威科夫的吸筹/派发结构存在"事后可标注"问题？', opts:['因为它只在股票市场有效','因为同一段走势在结果出现后可以被解释为不同阶段，缺乏事前可证伪性','因为它不需要成交量','因为它的作者没有交易经验'], a:1, exp:'如果任何结果都能被纳入解释，框架就不可证伪，无法产生可统计的期望值。' },
    { q:'把"弹簧（Spring）"转化为可检验假设，最关键的一步是？', opts:['给它换一个更专业的名词','事先定义入场、失效条件，并在多标的多时段上统计结果','只在一段历史行情上画出成功案例','增加更多指标确认'], a:1, exp:'可证伪的关键是事前规则 + 样本外统计。否则只是挑选有利案例。' },
  ],
},

/* ------------------------------------------------------------------ 08 */
{
  id: 's7-08-regime',
  title: '第 8 节：周期与 Regime——同一策略为何忽然失效',
  dur: '约 65 分钟',
  intro: '策略不是"好"或"坏"，而是"在某种市场状态下有效"。识别状态，比优化参数更重要。',
  content: `
<h4>本节目标</h4>
<ul>
  <li>理解 Regime（市场状态）的定义与识别维度</li>
  <li>掌握宏观流动性、实际利率、美元与实际波动率的观察框架</li>
  <li>了解链上与衍生品内部指标（资金费、未平仓量、基差、估值比率）</li>
  <li>学会按状态配置策略，而不是寻找"全天候圣杯"</li>
</ul>

<h3>一、Regime 是什么</h3>
<p>Regime 是一段时间内相对稳定的<strong>统计特征组合</strong>：趋势强度、波动率水平、相关性结构、流动性深浅。同一个突破策略，在高波动趋势市里期望为正，在低波动震荡市里会被反复止损；网格策略则相反。</p>
<table>
  <thead><tr><th>状态</th><th>典型特征</th><th>更适配的策略</th><th>容易失效的策略</th></tr></thead>
  <tbody>
    <tr><td>低波动上行</td><td>波动收敛、回撤浅、相关性低</td><td>趋势跟踪、持有、定投</td><td>高频均值回归（空间不足）</td></tr>
    <tr><td>高波动趋势</td><td>单边、放量、资金费偏高</td><td>突破、动量</td><td>网格、卖波动率</td></tr>
    <tr><td>高波动震荡</td><td>上下扫、假突破多</td><td>区间交易、期权卖方（需严格风控）</td><td>突破、趋势跟踪</td></tr>
    <tr><td>流动性收缩</td><td>深度变薄、价差扩大、相关性上升</td><td>降低总暴露、持有现金</td><td>杠杆、套利（对手方风险）</td></tr>
  </tbody>
</table>

<h3>二、宏观维度：流动性是分母</h3>
<p>风险资产的价格可以粗略地理解为"流动性 / 资产供给"的比值。观察宏观流动性的常用代理变量：</p>
<ul>
  <li><strong>实际利率：</strong>名义利率减去通胀预期。实际利率上行通常压制长久期风险资产。</li>
  <li><strong>美元指数：</strong>美元走强阶段，全球美元流动性趋紧，风险资产承压的概率上升。</li>
  <li><strong>央行资产负债表与财政账户：</strong>常用"净流动性"近似 = 央行资产 − 财政存款 − 隔夜逆回购。</li>
  <li><strong>信用利差：</strong>高收益债利差走阔，往往先于风险资产下跌。</li>
</ul>
<div class="callout callout--note">
  <span class="callout__label">重要限定</span>
  这些都是<strong>相关性观察</strong>，不是因果定律。宏观数据的发布有滞后与修正，用它们做短周期择时的信噪比极低；它们更适合用来设定"总暴露的上限"，而不是"买卖的时点"。
</div>

<h3>三、加密市场的内部指标</h3>
<table>
  <thead><tr><th>指标</th><th>定义/口径</th><th>能说明什么</th><th>局限</th></tr></thead>
  <tbody>
    <tr><td>资金费率 Funding</td><td>永续合约多空之间的周期性支付</td><td>杠杆多空拥挤程度</td><td>可被套利与对冲扭曲</td></tr>
    <tr><td>未平仓量 OI</td><td>未结算合约名义价值</td><td>杠杆总量与拥挤度</td><td>不区分方向与对冲</td></tr>
    <tr><td>基差 Basis</td><td>期货价格相对现货的溢价</td><td>期限结构与套保需求</td><td>受资金成本与制度影响</td></tr>
    <tr><td>MVRV</td><td>市值 / 已实现市值</td><td>整体持仓成本与盈亏状态</td><td>依赖链上数据口径与地址去重</td></tr>
    <tr><td>NUPL / SOPR</td><td>未实现盈亏 / 花费产出利润率</td><td>持有者情绪与获利了结压力</td><td>样本偏差、交易所内部转账干扰</td></tr>
    <tr><td>稳定币供应</td><td>链上稳定币总量变化</td><td>潜在购买力与资金流入</td><td>发行与赎回的时滞</td></tr>
  </tbody>
</table>
<p>这些指标的共同问题是：<strong>它们测量的是"已经发生"的持仓状态，而不是"将要发生"的方向</strong>。高资金费可能意味着拥挤，也可能意味着持续的需求；指标本身不提供方向，只提供条件的概率分布。</p>

<h3>四、四象限框架</h3>
<p>把"流动性方向"与"风险偏好"作为两个轴，可以得到一个简化的四象限：</p>
<table>
  <thead><tr><th></th><th>风险偏好上升</th><th>风险偏好下降</th></tr></thead>
  <tbody>
    <tr><td><strong>流动性扩张</strong></td><td>顺风：趋势与 beta 占优</td><td>轮动：质量与现金流占优</td></tr>
    <tr><td><strong>流动性收缩</strong></td><td>脆弱：反弹但缺乏承接</td><td>逆风：降低暴露，控制回撤</td></tr>
  </tbody>
</table>
<p>框架的价值不在于精确预测，而在于<strong>避免在逆风象限里使用顺风策略</strong>。当状态不确定时，正确答案通常是"降低暴露"，而不是"加大预测强度"。</p>

<h3>五、状态识别的三个现实约束</h3>
<ul>
  <li><strong>滞后性：</strong>任何确认型指标都滞后，等状态确认时，行情往往已经走了一段。</li>
  <li><strong>假切换：</strong>短期波动率上升可能只是事件冲击，不是状态切换。</li>
  <li><strong>样本稀少：</strong>完整的周期只有个位数样本，无法用统计方法验证"周期规律"。</li>
</ul>
<p>因此，务实做法是把 Regime 当作<strong>概率权重的调整器</strong>（例如逆风时把仓位上限从 100% 降到 40%），而不是二元开关。</p>

<details>
  <summary>深度补充：为什么"周期"无法被精确预测</summary>
  <p>周期的本质是参与者行为的自我强化与自我修正：上涨吸引资金，资金推高价格，价格强化叙事，叙事吸引更多资金；当边际资金耗尽，反向过程开始。这个机制是真实的，但它的<strong>时点取决于参与者的反应函数</strong>，而反应函数会随制度、杠杆结构、信息传播速度而变化。</p>
  <p>因此，周期可以用于"定位风险收益比的大致区间"（例如极端乐观时降低暴露），但不能用于"精确择时"。Howard Marks 的说法值得记住：我们无法预测，但可以准备。</p>
</details>

<h4>本节要点</h4>
<ul>
  <li>策略的有效性依赖于市场状态，而不是普遍有效</li>
  <li>宏观流动性是观察风险资产的重要背景，但信噪比低、滞后明显</li>
  <li>链上与衍生品指标测量持仓状态，不提供方向</li>
  <li>用四象限调整暴露上限，而不是当二元开关</li>
  <li>状态识别有三重约束：滞后、假切换、样本稀少</li>
</ul>
`,
  quiz: [
    { q:'关于资金费率（Funding Rate），下列理解最准确的是？', opts:['资金费率为正说明价格一定上涨','资金费率反映永续合约多空的拥挤程度，但不直接指示方向','资金费率由交易所随意设定','资金费率为负意味着市场无效'], a:1, exp:'资金费是永续价格与现货锚定的机制，反映多空失衡与杠杆拥挤，但拥挤可以持续，方向仍不确定。' },
    { q:'当市场进入"流动性收缩 + 风险偏好下降"象限时，更合理的做法是？', opts:['提高杠杆以摊低成本','降低总暴露并控制回撤','加大网格密度','忽略宏观只看技术面'], a:1, exp:'在逆风象限中，策略的容错空间变小，降低暴露是概率上更优的选择。' },
    { q:'Regime 识别最主要的现实约束不包括？', opts:['指标滞后','假切换频繁','完整周期样本稀少','市场完全没有规律'], a:3, exp:'市场存在统计规律，只是规律不稳定、样本稀少。前三项是识别 Regime 的真实约束。' },
  ],
},

/* ------------------------------------------------------------------ 09 */
{
  id: 's7-09-derivatives',
  title: '第 9 节：衍生品——永续、基差与波动率曲面',
  dur: '约 70 分钟',
  intro: '衍生品不创造收益，它只重新分配风险。理解定价与成本结构，才能看清自己在承担什么。',
  content: `
<h4>本节目标</h4>
<ul>
  <li>理解永续合约的资金费、标记价格与清算机制</li>
  <li>掌握基差、年化溢价与套保成本的换算</li>
  <li>建立期权 Greeks 的直觉，理解波动率风险溢价与偏斜</li>
  <li>认识负偏策略的收益结构与尾部风险</li>
</ul>
<div class="callout callout--risk">
  <span class="callout__label">合规提示</span>
  本节内容为定价理论与风险结构的教学，不构成参与任何衍生品交易的建议。在中国境内，虚拟货币相关业务活动属于非法金融活动；衍生品交易还可能涉及额外的法律与合规风险。
</div>

<h3>一、永续合约：用资金费替代到期日</h3>
<p>永续合约没有到期日，靠<strong>资金费（funding）</strong>把价格锚定在现货附近。当永续价格高于现货，多头向空头支付资金费；反之亦然。</p>
<div class="formula">
  <span class="formula__name">FUNDING COST</span>
  单次资金费 = 名义价值 × 资金费率
  <br>年化成本 ≈ 费率 × 每日结算次数 × 365
  <br>例：0.01% / 8 小时 → 0.03%/日 → 约 <em>10.95%/年</em>
</div>
<p>这意味着：长期持有永续多单，不仅要承担价格风险，还要持续支付"持有成本"。在资金费持续为正的环境中，多头的时间成本可能远高于手续费。</p>

<h3>二、基差与年化溢价</h3>
<div class="formula">
  <span class="formula__name">BASIS</span>
  基差 = 期货价格 − 现货价格
  <br>年化 = (期货/现货 − 1) × 365 / 到期天数
  <br>例：30 天期货溢价 0.6% → 年化约 <em>7.3%</em>
</div>
<p>正向市场（期货溢价）通常反映持有成本与套保需求；深度贴水往往出现在恐慌或强制去杠杆阶段。基差交易（买入现货、卖出期货）看似"无风险"，实际承担：交易所对手方风险、保证金管理风险、资金费波动、以及极端行情下的流动性风险。</p>

<h3>三、清算机制与保证金</h3>
<div class="formula">
  <span class="formula__name">LIQUIDATION</span>
  全仓：强平价取决于全部保证金与全部仓位
  <br>逐仓：强平价 ≈ 入场价 × (1 − 1/杠杆 + 维持保证金率)
</div>
<p>三个容易被忽略的细节：</p>
<ul>
  <li>强平依据<strong>标记价格</strong>，而不是最新成交价；插针可能只影响成交价，也可能通过指数传导影响标记价。</li>
  <li>维持保证金率会随仓位规模变化（分层保证金），大仓位实际更脆弱。</li>
  <li>自动减仓（ADL）机制意味着：即使你未被强平，也可能在极端行情中被强制平仓。</li>
</ul>

<h3>四、期权：把不确定性本身变成可交易资产</h3>
<p>期权的价格由五个变量决定：标的价格、行权价、到期时间、无风险利率、<strong>隐含波动率（IV）</strong>。前四个是已知的，因此期权交易的本质是<strong>交易波动率</strong>。</p>
<table>
  <thead><tr><th>Greeks</th><th>直觉</th><th>头寸含义</th></tr></thead>
  <tbody>
    <tr><td>Delta</td><td>标的价格变动 1 单位，期权价格变动多少</td><td>方向暴露，可用于对冲</td></tr>
    <tr><td>Gamma</td><td>Delta 的变化速度</td><td>买方正 Gamma，卖方负 Gamma</td></tr>
    <tr><td>Vega</td><td>波动率变动 1%，期权价格变动多少</td><td>买方做多波动率</td></tr>
    <tr><td>Theta</td><td>时间流逝带来的价值损耗</td><td>买方每天支付"时间租金"</td></tr>
  </tbody>
</table>
<div class="callout callout--note">
  <span class="callout__label">核心不对称</span>
  期权买方：最大亏损有限（权利金），胜率低、赔率高，正 Gamma、负 Theta。<br>
  期权卖方：收益有限（权利金），胜率高、赔率负，负 Gamma、正 Theta。<br>
  这不是"谁更聪明"，而是<strong>把风险从频率转移到幅度</strong>。
</div>

<h3>五、波动率曲面与偏斜</h3>
<p>不同行权价的隐含波动率并不相同，画出来是一条曲线（smile / skew）。常见的经验规律：</p>
<ul>
  <li>加密资产长期存在<strong>下行偏斜</strong>：虚值看跌期权更贵，反映对暴跌的保护需求。</li>
  <li>期限结构可以是正向（contango）或倒挂（backwardation），倒挂常出现在恐慌期。</li>
  <li>隐含波动率显著高于随后实现的波动率时，存在<strong>波动率风险溢价</strong>——这是卖方收益的来源，也是尾部风险的代价。</li>
</ul>
<p>判断"期权贵不贵"，不是看权利金的绝对金额，而是看 IV 相对于已实现波动率、历史分位与事件日程的位置。</p>

<h3>六、负偏策略的数学代价</h3>
<p>持续卖出波动率的收益曲线像"在推土机前捡硬币"：大多数时候小赚，偶尔一次巨亏。它的期望值可以为正，但分布极度左偏，且回撤恢复极慢。评估这类策略时，必须看：</p>
<ul>
  <li>在历史最差 1% 情景下的损失</li>
  <li>保证金要求随波动率上升的路径</li>
  <li>强平与追加保证金的时间窗口</li>
  <li>极端相关性（所有仓位同时亏损）的压力测试</li>
</ul>

<details>
  <summary>深度补充：为什么"高胜率"的卖方策略容易让人破产</summary>
  <p>因为它的亏损不是线性累积，而是<strong>跳跃式</strong>的。假设一个策略每月胜率 95%，单月平均收益 2%，最差月份 −35%。在 24 个月的样本中，你可能经历 23 次"验证"，1 次"意外"。行为上，连续的验证会强化"这次也一样"的信念，让人在真正的尾部事件中加仓而非减仓。</p>
  <p>数学上的应对方式只有两个：限制单次尾部暴露（仓位），以及预设极端情景下的强制减仓规则。没有第三个答案。</p>
</details>

<h4>本节要点</h4>
<ul>
  <li>永续用资金费锚定现货，长期持有有持续成本</li>
  <li>基差年化 = 溢价 × 365 / 天数；"无风险套利"包含多重隐性风险</li>
  <li>强平依据标记价格与分层保证金</li>
  <li>期权交易的本质是交易波动率；买方付 Theta，卖方承担负 Gamma</li>
  <li>负偏策略的期望值可能为正，但尾部与恢复时间是主要风险</li>
</ul>
`,
  quiz: [
    { q:'永续合约资金费率为每 8 小时 0.01%，仅考虑资金费，多头一年的持有成本约为？', opts:['约 1.1%','约 3.65%','约 11%','约 36.5%'], a:2, exp:'0.01% × 3 次/日 × 365 ≈ 10.95%，约 11%/年。' },
    { q:'30 天到期的期货相对现货溢价 0.6%，其年化基差约为？', opts:['0.6%','2.2%','7.3%','12%'], a:2, exp:'0.6% × 365/30 ≈ 7.3%。基差年化需要按到期时间折算。' },
    { q:'关于期权卖方，下列说法正确的是？', opts:['卖方收益无限、风险有限','卖方胜率通常较高，但承担负 Gamma 与尾部风险','卖方不需要考虑波动率','卖方没有时间价值收益'], a:1, exp:'卖方收取权利金，胜率较高、收益有限、亏损可能很大，属于负偏结构。' },
  ],
},

/* ------------------------------------------------------------------ 10 */
{
  id: 's7-10-portfolio',
  title: '第 10 节：组合、相关性与回撤的数学',
  dur: '约 60 分钟',
  intro: '单笔交易的期望值决定你能不能赚，组合结构决定你能不能一直赚。',
  content: `
<h4>本节目标</h4>
<ul>
  <li>理解组合波动率与相关性的数学关系</li>
  <li>掌握波动率目标、逆波动率加权与风险预算的基本做法</li>
  <li>认识危机相关性、回撤预算与再平衡的取舍</li>
  <li>建立"相关性是动态的"这一风险前提</li>
</ul>

<h3>一、组合不是仓位的加法</h3>
<div class="formula">
  <span class="formula__name">PORTFOLIO VOL</span>
  σp² = Σi Σj wi·wj·σi·σj·ρij
  <br>两资产：σp² = w1²σ1² + w2²σ2² + 2w1w2σ1σ2ρ
</div>
<p>关键结论：当 ρ &lt; 1 时，组合波动率小于加权平均波动率；ρ 越低，分散收益越大。当 ρ = 1 时，分散完全失效。</p>
<table>
  <thead><tr><th>相关系数</th><th>两资产各 50%、σ = 40% 的组合波动</th><th>相对单资产</th></tr></thead>
  <tbody>
    <tr><td>1.0</td><td>40.0%</td><td>无分散</td></tr>
    <tr><td>0.6</td><td>35.8%</td><td>−10.5%</td></tr>
    <tr><td>0.2</td><td>31.0%</td><td>−22.5%</td></tr>
    <tr><td>0.0</td><td>28.3%</td><td>−29.3%</td></tr>
    <tr><td>−0.3</td><td>23.7%</td><td>−40.9%</td></tr>
  </tbody>
</table>

<h3>二、三类常见的权重方案</h3>
<ul>
  <li><strong>等权：</strong>简单，但高波动资产主导风险。</li>
  <li><strong>逆波动率加权：</strong>权重 ∝ 1/σ，让各资产的风险贡献接近，是最实用的近似。</li>
  <li><strong>风险预算 / 等风险贡献：</strong>显式求解使每个资产对组合波动的边际贡献相等，需要估计协方差矩阵。</li>
</ul>
<div class="formula">
  <span class="formula__name">INVERSE VOL</span>
  wi = (1/σi) / Σ(1/σj)
  <br>例：σ 分别为 30% 与 60% → 权重 66.7% / 33.3%
</div>
<p>对个人交易者，更实用的版本是：<strong>按策略的"最坏情况损失"分配风险预算</strong>，并定期（例如每月）再平衡。</p>

<h3>三、波动率目标与再平衡</h3>
<p>波动率目标策略会按 σ_target / σ_realized 调整总暴露。它带来两个副作用：</p>
<ul>
  <li><strong>动量效应：</strong>波动下降时加仓，会在上涨趋势中逐步增加暴露。</li>
  <li><strong>顺周期减仓：</strong>波动飙升时被迫降杠杆，可能在底部卖出。</li>
</ul>
<p>再平衡同理：定期再平衡会在上涨后卖出、下跌后买入，长期有"再平衡溢价"，但在单边趋势中会拖累收益。选择哪种，取决于你相信均值回归还是趋势延续——这不是技术细节，而是世界观。</p>

<h3>四、危机相关性：最需要分散时它消失</h3>
<div class="callout callout--risk">
  <span class="callout__label">压力测试原则</span>
  组合的风险计算至少要做两个版本：<strong>正常相关性</strong>与<strong>相关性 = 1</strong>。后者告诉你"如果所有仓位同时下跌，我会亏多少"。如果这个数字超过生存线，那么所谓的分散只是账面幻觉。
</div>
<p>历史案例反复验证：在去杠杆事件中，几乎所有风险资产的相关性都会上升，因为抛售是为了换取流动性，而不是基于基本面判断。</p>

<h3>五、回撤预算与恢复时间</h3>
<p>除了波动率，还应当设定<strong>回撤预算</strong>：组合可以承受的最大回撤，以及对应的恢复时间预期。</p>
<table>
  <thead><tr><th>年化收益</th><th>年化波动</th><th>典型最大回撤</th><th>恢复时间量级</th></tr></thead>
  <tbody>
    <tr><td>8%</td><td>10%</td><td>10%–15%</td><td>数月</td></tr>
    <tr><td>15%</td><td>20%</td><td>20%–30%</td><td>半年到一年</td></tr>
    <tr><td>30%</td><td>45%</td><td>40%–55%</td><td>一到三年</td></tr>
  </tbody>
</table>
<p>经验关系：最大回撤的量级通常约为年化波动率的 1–2 倍。若你无法承受表中对应量级的回撤，那么问题不在策略，而在目标收益与风险承受度的不匹配。</p>

<h3>六、杠铃结构：把不确定性变成优势</h3>
<p>塔勒布提出的杠铃策略：把绝大部分资金放在极度安全的位置，把很小一部分放在高不确定性、高赔率的位置，避免"中等风险"的中间地带——因为中间地带同时承担了两端的劣势。</p>
<p>在交易组合中，这可以翻译为：<strong>核心仓位低杠杆、低换手、长期持有；卫星仓位小比例、高赔率、严格止损。</strong>两部分的资金与规则完全隔离，互不挪用。</p>

<details>
  <summary>深度补充：为什么"多策略"不等于"分散"</summary>
  <p>如果多个策略依赖相同的信号源（例如都做动量）、相同的流动性环境、相同的杠杆结构，它们在压力情景下会同时失效。真正的分散需要<strong>收益驱动因素</strong>的不同：趋势、套利、波动率、事件驱动、现金流。评估分散度时，应该看策略在极端月份的相关性，而不是全样本相关性。</p>
</details>

<h4>本节要点</h4>
<ul>
  <li>组合波动由权重、波动率与相关性共同决定</li>
  <li>逆波动率加权是实用的风险均衡近似</li>
  <li>危机中相关性趋近于 1，必须做压力测试</li>
  <li>最大回撤量级约为年化波动的 1–2 倍</li>
  <li>真正的分散来自不同的收益驱动因素</li>
</ul>
`,
  quiz: [
    { q:'两个资产各配 50%，波动率均为 40%，相关系数为 0，组合波动率约为？', opts:['40.0%','31.0%','28.3%','20.0%'], a:2, exp:'σp = √(0.25·0.16 + 0.25·0.16) = √0.08 ≈ 28.3%。' },
    { q:'逆波动率加权会给哪类资产更高权重？', opts:['波动率更高的资产','波动率更低的资产','收益率更高的资产','相关性更高的资产'], a:1, exp:'权重 ∝ 1/σ，低波动资产获得更高权重，使各资产的风险贡献更接近。' },
    { q:'关于危机中的相关性，正确的做法是？', opts:['假设历史相关性永远成立','额外做"相关性 = 1"的压力测试','只持有一种资产以规避相关性','忽略相关性，只看单笔风险'], a:1, exp:'极端行情下相关性会显著上升，组合风险必须按最坏情况评估。' },
  ],
},

/* ------------------------------------------------------------------ 11 */
{
  id: 's7-11-research',
  title: '第 11 节：研究纪律——回测如何骗你',
  dur: '约 70 分钟',
  intro: '回测最大的功能不是证明策略有效，而是让你在付出真金白银之前，先被自己的数据骗一次。',
  content: `
<h4>本节目标</h4>
<ul>
  <li>识别回测中的七类系统性偏差</li>
  <li>理解多重检验、Deflated Sharpe 与过拟合的数学</li>
  <li>掌握样本外、walk-forward 与参数平原的基本做法</li>
  <li>建立"先写假设、再做检验"的研究流程</li>
</ul>

<h3>一、七类常见的回测偏差</h3>
<table>
  <thead><tr><th>偏差</th><th>表现</th><th>修正</th></tr></thead>
  <tbody>
    <tr><td>前视偏差</td><td>使用了当时还不可得的数据（收盘价、修正后的财报）</td><td>严格对齐数据发布时间戳</td></tr>
    <tr><td>幸存者偏差</td><td>只统计至今仍存在的标的</td><td>使用包含退市/归零标的的全样本</td></tr>
    <tr><td>数据窥探</td><td>反复调参直到曲线好看</td><td>预注册假设、限制试验次数</td></tr>
    <tr><td>过拟合</td><td>参数过多、样本过少</td><td>参数平原、正则化、样本外验证</td></tr>
    <tr><td>成本低估</td><td>忽略滑点、资金费、冲击</td><td>成本敏感性分析（2×、3× 成本）</td></tr>
    <tr><td>制度变化</td><td>市场结构、监管、参与者已改变</td><td>分段检验、Regime 条件化</td></tr>
    <tr><td>短样本</td><td>统计功效不足，结论不可靠</td><td>计算所需样本量，关注置信区间</td></tr>
  </tbody>
</table>

<h3>二、Sharpe 的显著性：你需要多少样本</h3>
<div class="formula">
  <span class="formula__name">T-STAT</span>
  t ≈ SR × √T &nbsp;（SR 为年化夏普，T 为年数）
  <br>例：SR = 1.0，T = 3 年 → t ≈ 1.73，p ≈ 0.08，<em>未达传统显著水平</em>
</div>
<p>这意味着：一个"看起来很漂亮"的三年回测，在统计上可能只是噪音。若把试验次数考虑进去，问题更严重——</p>
<div class="formula">
  <span class="formula__name">MULTIPLE TESTING</span>
  试了 N 个策略后，最好那个的期望 Sharpe 会因选择效应而虚高
  <br>Deflated Sharpe Ratio 对此做校正（Bailey &amp; López de Prado）
</div>

<h3>三、参数平原，而不是参数尖峰</h3>
<p>如果策略只在参数 = 14 时有效，参数 = 13 或 15 就崩溃，那它更可能是拟合噪音。健康的策略应当在参数邻域内表现平滑——这就是"参数平原"。</p>
<ul>
  <li>画出参数网格的收益/回撤热力图</li>
  <li>选择平原中心，而不是最高点</li>
  <li>检查不同标的上的一致性</li>
  <li>检查不同时间段的一致性</li>
</ul>

<h3>四、样本外与 walk-forward</h3>
<ol>
  <li><strong>训练集：</strong>用于形成假设与初步参数。</li>
  <li><strong>验证集：</strong>用于选择模型，不参与参数拟合。</li>
  <li><strong>测试集：</strong>只使用一次，看了就作废。</li>
  <li><strong>Walk-forward：</strong>滚动向前，每次只用历史数据训练，预测下一段，模拟真实的信息约束。</li>
</ol>
<p>对时间序列数据，普通 K 折交叉验证会泄漏未来信息，应使用<strong>按时间切分</strong>或带净化（purge）的交叉验证。</p>

<h3>五、先写假设，再做检验</h3>
<p>专业研究流程与业余流程的区别，往往不在数学水平，而在顺序：</p>
<ol>
  <li><strong>写下可证伪的假设：</strong>"当 X 发生时，未来 N 期的收益分布相对基准有正偏移。"</li>
  <li><strong>写下失效条件：</strong>如果出现 Y，假设被否定。</li>
  <li><strong>固定检验方案：</strong>样本区间、成本假设、评价指标，事先确定。</li>
  <li><strong>记录试验次数：</strong>知道自己试了多少次，才能校正选择效应。</li>
  <li><strong>用最保守的参数上线小规模验证。</strong></li>
</ol>
<div class="callout callout--warn">
  <span class="callout__label">研究者的诚实</span>
  最危险的不是"策略无效"，而是"你无法知道自己是否只是运气好"。因此，记录试验次数、保留失败结果、使用样本外数据，是研究纪律的核心，而不是可选项。
</div>

<details>
  <summary>深度补充：为什么"圣杯策略"在逻辑上不太可能存在</summary>
  <p>如果存在一个稳定、简单、可公开获得的策略，它能持续产生超额收益，那么资金会迅速涌入，直到边际消失。这个自我修正机制意味着：<strong>长期有效的策略要么容量有限，要么需要持续的研究投入，要么承担了别人不愿承担的风险</strong>。任何声称"稳定、简单、高收益、无风险"的组合，在逻辑上就自相矛盾。</p>
</details>

<h4>本节要点</h4>
<ul>
  <li>回测的七类偏差中，前视、幸存者与数据窥探最常见</li>
  <li>Sharpe 的显著性约等于 SR×√T，三年 SR=1 并不显著</li>
  <li>选择最优参数会产生虚高的期望表现，需要 Deflated Sharpe 校正</li>
  <li>时间序列必须按时间切分，避免信息泄漏</li>
  <li>先写假设与失效条件，再动手检验</li>
</ul>
`,
  quiz: [
    { q:'一个年化夏普 1.0、回测 3 年的策略，其 t 统计量约为？', opts:['1.0','1.73','3.0','6.0'], a:1, exp:'t ≈ SR × √T = 1.0 × √3 ≈ 1.73，未达到常用的 1.96 显著门槛。' },
    { q:'"前视偏差"最典型的例子是？', opts:['使用包含退市标的的数据','在回测中使用当日收盘价作为当日入场价','提高交易成本假设','使用更长的历史数据'], a:1, exp:'收盘价只有在收盘后才可知，用它作为当日入场价等于使用了未来信息。' },
    { q:'"参数平原"之所以重要，是因为？', opts:['参数越少越好','有效策略应在参数邻域内表现平滑，尖峰更可能是拟合噪音','平原意味着收益更高','参数必须为整数'], a:1, exp:'参数尖峰说明结果对参数极度敏感，通常是过拟合的表现。' },
  ],
},

/* ------------------------------------------------------------------ 12 */
{
  id: 's7-12-execution',
  title: '第 12 节：执行、成本与交易者的操作系统',
  dur: '约 70 分钟',
  intro: '把判断变成流程，把流程变成可复盘的记录，再把记录变成下一次的改进——这是"操作系统"的含义。',
  content: `
<h4>本节目标</h4>
<ul>
  <li>理解执行落差（implementation shortfall）与常见执行算法</li>
  <li>掌握决策日志的字段设计与复盘节奏</li>
  <li>识别影响交易的主要认知偏差及其制度性对策</li>
  <li>建立个人交易系统的完整结构：假设—规则—风控—记录—迭代</li>
</ul>

<h3>一、执行落差：从"想的价格"到"成交的价格"</h3>
<div class="formula">
  <span class="formula__name">SHORTFALL</span>
  执行落差 = 决策时价格 − 实际成交均价（含费用）
  <br>拆分：价差 + 冲击 + 延迟 + 机会成本（未成交）
</div>
<p>常见执行方式与适用场景：</p>
<table>
  <thead><tr><th>方式</th><th>机制</th><th>适合</th><th>风险</th></tr></thead>
  <tbody>
    <tr><td>市价单</td><td>立即成交，承担价差与冲击</td><td>小单、需要确定性</td><td>滑点大</td></tr>
    <tr><td>限价单</td><td>指定价格挂单，可能不成交</td><td>不急于成交、愿承担机会成本</td><td>逆向选择、未成交</td></tr>
    <tr><td>TWAP</td><td>按时间切片下单</td><td>流动性一般、追求均价</td><td>趋势行情中偏离</td></tr>
    <tr><td>VWAP</td><td>按成交量分布切片</td><td>大单、降低冲击</td><td>依赖成交量预测</td></tr>
    <tr><td>POV</td><td>按市场成交量比例参与</td><td>控制冲击、跟随流动性</td><td>成交时间不确定</td></tr>
  </tbody>
</table>
<div class="callout callout--note">
  <span class="callout__label">个人交易者的执行原则</span>
  ① 用限价单替代市价单，除非必须立刻成交；② 避免在流动性最差的时段做市价大单；③ 把止损写成条件单，而不是"看着办"；④ 记录每次执行的滑点，把它当作策略成本的一部分。
</div>

<h3>二、决策日志：把"感觉"变成数据</h3>
<p>一份合格的交易日志，至少要包含以下字段（缺一不可）：</p>
<table>
  <thead><tr><th>字段</th><th>作用</th></tr></thead>
  <tbody>
    <tr><td>日期 / 标的 / 方向</td><td>基础索引</td></tr>
    <tr><td>入场理由（假设）</td><td>区分"策略内"与"临时起意"</td></tr>
    <tr><td>触发条件与失效条件</td><td>把决策转为可证伪的规则</td></tr>
    <tr><td>风险（R）与仓位</td><td>检验是否遵守风险预算</td></tr>
    <tr><td>结果（R 倍数）</td><td>统一度量</td></tr>
    <tr><td>当时情绪与身体状态</td><td>识别情绪与结果的统计关系</td></tr>
    <tr><td>事后归因（做对/做错）</td><td>区分"结果好"与"决策好"</td></tr>
  </tbody>
</table>
<p>关键原则：<strong>评价决策，而不是评价结果</strong>。一笔按规则执行但亏损的交易，是好交易；一笔违反规则却盈利的交易，是坏交易——因为它强化了错误的行为。</p>

<h3>三、认知偏差与制度化对策</h3>
<table>
  <thead><tr><th>偏差</th><th>表现</th><th>对策</th></tr></thead>
  <tbody>
    <tr><td>损失厌恶</td><td>亏损带来的痛苦约为等额盈利快感的 2 倍</td><td>预设止损、缩小单笔风险</td></tr>
    <tr><td>处置效应</td><td>急于卖出盈利、死扛亏损</td><td>规则化出场，禁止临时修改</td></tr>
    <tr><td>确认偏误</td><td>只看支持自己观点的信息</td><td>强制记录反方证据</td></tr>
    <tr><td>近因效应</td><td>用最近几次结果推断系统有效性</td><td>滚动统计 100 笔以上</td></tr>
    <tr><td>过度自信</td><td>连续盈利后放大仓位</td><td>仓位与连胜次数脱钩</td></tr>
    <tr><td>沉没成本</td><td>"已经亏这么多，不能现在走"</td><td>只看未来期望值，不看历史成本</td></tr>
    <tr><td>热手谬误</td><td>相信"手感好"时胜率更高</td><td>用日志检验，而非相信感觉</td></tr>
  </tbody>
</table>

<h3>四、事前验尸与检查清单</h3>
<p><strong>事前验尸（pre-mortem）：</strong>在下单前假设"这笔交易已经亏损"，写下最可能的三个原因。如果其中任何一个无法被规则覆盖，就不要下单。</p>
<p><strong>检查清单：</strong>飞行员不会因为"经验丰富"而跳过检查单，交易同理。一个最小可用的清单：</p>
<ol>
  <li>这笔交易属于我的哪一个策略？</li>
  <li>入场、止损、目标、仓位是否都已写定？</li>
  <li>当前 Regime 是否与策略适配？</li>
  <li>相关性叠加后的总风险是多少？</li>
  <li>如果连续亏损 5 次，我的回撤是多少？</li>
  <li>我现在的情绪状态是否适合决策？</li>
</ol>

<h3>五、心智模型：四位值得反复阅读的实践者</h3>
<ul>
  <li><strong>Howard Marks（周期）：</strong>"我们无法预测，但可以准备。" 关注风险溢价的位置，而不是精确的时点。</li>
  <li><strong>George Soros（反身性）：</strong>参与者的认知会改变基本面，价格与叙事互相强化。适用于识别泡沫的形成与破裂，但不能给出精确时点。</li>
  <li><strong>Nassim Taleb（反脆弱 / 杠铃）：</strong>避免尾部破产，保留从不确定性中获益的敞口。</li>
  <li><strong>Stanley Druckenmiller（集中与保本）：</strong>在把握大时集中下注，但把"保住本金"作为第一原则——两者并不矛盾，因为集中建立在严格的风险上限之上。</li>
</ul>
<div class="callout callout--quote">
  业余者问"这次能赚多少"，专业者问"如果我错了，会怎样"。
  <cite>THE PROFESSIONAL QUESTION</cite>
</div>

<h3>六、系统的闭环</h3>
<ol>
  <li><strong>假设：</strong>一个可证伪的边际来源。</li>
  <li><strong>规则：</strong>入场、出场、仓位、风控，全部写成文字。</li>
  <li><strong>执行：</strong>按规则执行，记录滑点与偏差。</li>
  <li><strong>记录：</strong>决策日志 + R 倍数 + 情绪状态。</li>
  <li><strong>复盘：</strong>每周看执行质量，每月看统计，每季度看假设是否仍成立。</li>
  <li><strong>迭代：</strong>一次只改一个变量，保留旧版本以便对照。</li>
</ol>
<p>这套闭环的价值不在于让你"更努力"，而在于让你<strong>更快地发现自己错在哪里</strong>。市场会持续给你反馈，但只有被记录的反馈才是信息。</p>

<details>
  <summary>深度补充：如果结论是"我不适合交易"</summary>
  <p>这是一个完全正当、甚至更常见的结论。交易需要同时具备：可验证的边际、严格的执行纪律、稳定的现金流、以及承受回撤的心理结构。缺少任何一项，长期结果都可能为负。</p>
  <p>把时间投入到研究、职业能力、现金流与健康上，期望值往往远高于在市场上寻找"圣杯"。这不是失败，而是对概率的尊重。本站的立场始终是：先理解风险，再决定是否参与；不参与，也是一个理性答案。</p>
</details>

<h4>本节要点</h4>
<ul>
  <li>执行落差 = 价差 + 冲击 + 延迟 + 机会成本</li>
  <li>日志要记录假设、失效条件、情绪与归因，评价决策而非结果</li>
  <li>认知偏差靠制度化对策管理，而不是靠意志力</li>
  <li>清单与事前验尸能把冲动决策变成流程决策</li>
  <li>系统的闭环是：假设—规则—执行—记录—复盘—迭代</li>
</ul>
`,
  quiz: [
    { q:'"执行落差"通常不包括下列哪一项？', opts:['买卖价差','市场冲击','延迟成交的成本','策略的期望值'], a:3, exp:'执行落差衡量决策价格与实际成交之间的差距，期望值是策略层面的概念，不属于执行成本。' },
    { q:'评价一笔交易的好坏，更专业的标准是？', opts:['是否盈利','是否遵守了事先写定的规则与风险预算','持仓时间长短','是否买在最低点'], a:1, exp:'遵守规则但亏损的交易是好交易；违反规则却盈利的交易会强化错误行为，长期有害。' },
    { q:'下列哪一项是应对"处置效应"的制度化对策？', opts:['亏损时加倍买入','事先规则化出场条件，禁止临时修改','只看盈利的交易','增加交易频率'], a:1, exp:'处置效应表现为急于卖出盈利、拖延亏损。规则化出场条件可以减少临场情绪干预。' },
  ],
},
];

/* ---------------- 组装第七学段 ---------------- */
const MASTER_STAGE = {
  id: 's7',
  num: '07',
  title: '顶级交易思维',
  en: 'MASTER CLASS',
  risky: true,
  open: true,
  desc: '在掌握基础与工具之后，进入职业化的思考框架：期望值、生存、下注尺度、市场结构、周期、衍生品、组合、研究与执行。本学段可独立进入，但建议先完成前置内容。',
  chapters: MASTER_CHAPTERS,
  exam: true,
};
STAGES.push(MASTER_STAGE);

/* ---------------- 第七学段结业考核 ---------------- */
const MASTER_EXAM_QUESTIONS = [
  { chId:'s7-01-expectancy', chTitle:'期望值', q:{ q:'盈亏比 3:1 时，理论盈亏平衡胜率约为？', opts:['25%','33.3%','40%','50%'], a:0, exp:'p* = 1/(3+1) = 25%。实际门槛会因成本而更高。' } },
  { chId:'s7-01-expectancy', chTitle:'期望值', q:{ q:'"算术期望为正"与"长期能赚钱"之间缺少的关键条件是？', opts:['更高的胜率','几何增长为正，即波动率拖累与仓位可承受','更多的交易品种','更短的下单延迟'], a:1, exp:'算术期望决定值不值得做；几何增长 g ≈ μ − σ²/2 决定复利能否兑现。' } },
  { chId:'s7-02-ruin', chTitle:'破产概率', q:{ q:'回撤 25% 后需要上涨约多少才能回本？', opts:['25%','33.3%','42.9%','50%'], a:1, exp:'0.25/(1−0.25) ≈ 33.3%。' } },
  { chId:'s7-03-kelly', chTitle:'凯利公式', q:{ q:'胜率 55%、盈亏比 1:1 时，凯利下注比例为？', opts:['5%','10%','20%','55%'], a:1, exp:'f* = 0.55 − 0.45/1 = 0.10，即 10%。' } },
  { chId:'s7-04-sizing', chTitle:'仓位管理', q:{ q:'权益 50,000，风险 0.5%，入场 200，止损 190，则仓位数量约为？', opts:['25 单位','50 单位','125 单位','250 单位'], a:0, exp:'风险金额 250，止损距离 10，数量 = 25 单位，名义价值 5,000。' } },
  { chId:'s7-05-microstructure', chTitle:'市场微结构', q:{ q:'关于市价单成本，下列描述最准确的是？', opts:['只承担手续费','承担价差与逐档滑点，规模越大冲击越高','永远优于限价单','与订单簿深度无关'], a:1, exp:'市价单消耗深度，成交均价劣于盘口最优价；冲击随规模上升（近似平方根）。' } },
  { chId:'s7-07-wyckoff', chTitle:'威科夫方法', q:{ q:'判断一套形态方法是否可用，最关键的标准是？', opts:['图形是否美观','能否在事前写明入场、失效条件并在样本外统计验证','是否有知名交易者使用','是否包含足够多的术语'], a:1, exp:'可证伪性 + 样本外统计，是形态从叙事变成方法的唯一路径。' } },
  { chId:'s7-08-regime', chTitle:'周期与 Regime', q:{ q:'流动性收缩且风险偏好下降时，更合理的应对是？', opts:['提高杠杆摊低成本','降低总暴露并收紧风险预算','增加高相关仓位','忽略宏观继续满仓'], a:1, exp:'逆风象限中容错空间缩小，降低暴露是概率上更优的选择。' } },
  { chId:'s7-09-derivatives', chTitle:'衍生品', q:{ q:'关于卖波动率策略，下列描述正确的是？', opts:['收益无限、风险有限','胜率较高但承担负 Gamma 与尾部风险','没有时间价值收益','不受波动率变化影响'], a:1, exp:'卖方收权利金，正 Theta、负 Gamma，属于负偏结构，尾部损失可能很大。' } },
  { chId:'s7-10-portfolio', chTitle:'组合管理', q:{ q:'两个资产各 50%，波动均为 40%，相关系数 1.0 时，组合波动率为？', opts:['20%','28.3%','35.8%','40%'], a:3, exp:'ρ=1 时分散完全失效，组合波动等于加权平均，即 40%。' } },
  { chId:'s7-11-research', chTitle:'研究纪律', q:{ q:'回测中反复调参直到曲线变好，主要导致？', opts:['前视偏差','数据窥探与过拟合','幸存者偏差','成本低估'], a:1, exp:'反复试验会抬高"最优结果"的期望表现，需用 Deflated Sharpe 等方法校正。' } },
  { chId:'s7-12-execution', chTitle:'执行与系统', q:{ q:'交易日志最重要的作用之一是？', opts:['记录盈利金额以便炫耀','区分"决策质量"与"结果好坏"，发现可改进的环节','替代风险管理','预测下一笔交易'], a:1, exp:'日志把决策过程数据化，使复盘可以针对行为而非仅仅针对盈亏。' } }
];

EXAMS.push({ stageId:'s7', pass:70, questions: MASTER_EXAM_QUESTIONS });
/* =====================================================================
 * Chain Academy v5 · 技术知识库
 * 结构：LEVELS（难度分级）/ CATS（分类）/ KNOWLEDGE（条目）
 * 每条：id, cat, level, name, en, summary, use, caveat, chapter(可选)
 * 说明：内容为公开技术知识的整理，用于理论学习；不构成投资建议。
 * ===================================================================== */

const KNOWLEDGE_LEVELS = [
  { key:'basic',    label:'基础', en:'BASIC',    desc:'必须先掌握的语言：价格、趋势、风险单位。' },
  { key:'intro',    label:'入门', en:'INTRO',    desc:'常用工具与单一策略，能独立完成一次完整交易流程。' },
  { key:'advanced', label:'进阶', en:'ADVANCED', desc:'组合工具、市场结构与统计检验，开始形成体系。' },
  { key:'pro',      label:'高级', en:'PRO',      desc:'研究、执行、组合与心性：把交易当作一门工程。' },
];

const KNOWLEDGE_CATS = [
  { key:'market',   label:'市场结构', en:'MARKET STRUCTURE' },
  { key:'candle',   label:'K 线与形态', en:'PRICE ACTION' },
  { key:'indicator',label:'指标', en:'INDICATORS' },
  { key:'flow',     label:'量价与订单流', en:'ORDER FLOW' },
  { key:'theory',   label:'经典理论', en:'THEORY' },
  { key:'strategy', label:'策略', en:'STRATEGIES' },
  { key:'deriv',    label:'衍生品', en:'DERIVATIVES' },
  { key:'risk',     label:'风险与仓位', en:'RISK' },
  { key:'research', label:'研究与执行', en:'RESEARCH' },
  { key:'psych',    label:'心理与纪律', en:'PSYCHOLOGY' },
];

const KNOWLEDGE = [
/* ---------------- 市场结构 ---------------- */
{ id:'trend', cat:'market', level:'basic', name:'趋势', en:'Trend', chapter:'s6-06-dow-theory',
  summary:'价格在更高高点与更高低点（上升）或更低高点与更低低点（下降）之间的持续方向。趋势不是一条线，而是一组不断抬升或下移的摆动结构。',
  use:'先判断趋势，再选策略：趋势市用回调与突破，震荡市用区间。',
  caveat:'趋势只能事后确认，实时判断必然滞后；周期越小，噪音越多。' },
{ id:'trendline', cat:'market', level:'basic', name:'趋势线与通道', en:'Trendline / Channel', chapter:'s6-19-trendline',
  summary:'连接两个以上显著低点（上升）或高点（下降）的直线，配合平行线构成通道。它的价值在于把"斜率"变成可观察的对象。',
  use:'用第三、第四个触碰点验证有效性；通道中轨常作为加减仓参考。',
  caveat:'画线带有主观性，同一段行情可以画出多条都"成立"的线；不要用趋势线替代止损。' },
{ id:'sr', cat:'market', level:'basic', name:'支撑与阻力', en:'Support / Resistance', chapter:'s2-03-support',
  summary:'价格多次止跌（支撑）或止涨（阻力）的区域。本质是订单密度的记忆：该价位曾有大量成交与止损挂单。',
  use:'把它当作"区域"而非精确价位；结合成交量与触碰次数评估强度。',
  caveat:'支撑阻力会被突破；越是人人可见的位置，越容易成为止损猎取的目标。' },
{ id:'zone', cat:'market', level:'intro', name:'供需区', en:'Supply / Demand Zone',
  summary:'价格快速离开的起点区域：那里留下了未成交的订单与情绪记忆。与支撑阻力的区别是它强调"出发点的动量"。',
  use:'回调到供需区时观察反应（拒绝影线、缩量、Delta 转正）再决策。',
  caveat:'区域识别主观，且大额订单可能早已撤走；不要把"画出来的框"当成承诺。' },
{ id:'ms', cat:'market', level:'intro', name:'市场结构（HH/HL）', en:'Market Structure',
  summary:'用摆动高低点描述市场：HH+HL 为上升结构，LH+LL 为下降结构，区间为震荡。结构破坏（BOS）常被视为趋势转换的第一证据。',
  use:'在多周期上对齐结构方向；结构破坏后再等回踩确认。',
  caveat:'结构破坏频繁出现于震荡市，假破坏会造成连续止损。' },
{ id:'breakout', cat:'market', level:'intro', name:'突破与假突破', en:'Breakout / Fakeout', chapter:'s3-02-breakout',
  summary:'价格越过关键区间边界。有效突破通常伴随成交量放大与回踩不破；假突破则快速收回区间，形成"弹簧"。',
  use:'用收盘价确认、成交量确认、回踩确认三层过滤，牺牲部分利润换取胜率。',
  caveat:'加密市场假突破比例高，追突破的滑点与回撤都大。' },
{ id:'liquidity', cat:'market', level:'advanced', name:'流动性池与止损猎取', en:'Liquidity Pool / Stop Hunt',
  summary:'前高、前低、整数关口附近常聚集止损单。价格短暂刺穿这些位置以获取流动性，再反向运行，形成"猎取"。',
  use:'把止损放在流动性之外（如前低下方一段距离），或等待刺穿后的回收再入场。',
  caveat:'"每次插针都是猎取"是一种叙事；也可能只是流动性真空下的正常滑点。' },
{ id:'va', cat:'market', level:'advanced', name:'价值区间（VA / POC）', en:'Value Area / POC', chapter:'s7-06-auction',
  summary:'一段时间内约 70% 成交量所在的价格带为价值区间，成交量最大的价位为控制点（POC）。价格离开价值区后，往往回访其边缘。',
  use:'判断"公允价"与偏离程度；POC 常作为多空争夺的锚点。',
  caveat:'依赖成交量数据的口径与周期选择，不同平台结果可能不同。' },
{ id:'gap', cat:'market', level:'intro', name:'缺口', en:'Gap', chapter:'s6-20-gap',
  summary:'相邻两根 K 线之间没有成交的价格区间。缺口常被视为情绪失衡的证据，分为普通、突破、持续与衰竭四类。',
  use:'关注缺口回补概率与缺口边缘的反应；加密 24/7 市场缺口多出现在周末流动性空档。',
  caveat:'"缺口必补"没有统计保证，强趋势中的缺口可以长期不回补。' },
{ id:'mtf', cat:'market', level:'advanced', name:'多周期共振', en:'Multi-Timeframe Alignment',
  summary:'在更高周期确定方向，在较低周期寻找入场，使"方向—位置—触发"三层一致。周期比例常用 4–6 倍（如日线/4 小时/1 小时）。',
  use:'高周期定方向，中周期定区域，低周期定触发与止损。',
  caveat:'周期越多，等待越久；过度共振会导致错过大部分行情。' },

/* ---------------- K 线与形态 ---------------- */
{ id:'anatomy', cat:'candle', level:'basic', name:'K 线解剖', en:'Candlestick Anatomy', chapter:'s2-02-kline',
  summary:'一根 K 线记录开盘、收盘、最高、最低四个价格。实体反映多空力量对比，影线反映被拒绝的价格。',
  use:'先读实体与影线的比例，再结合位置（支撑/阻力/趋势）判断。',
  caveat:'单根 K 线几乎没有统计优势，必须结合位置、成交量与周期。' },
{ id:'pinbar', cat:'candle', level:'intro', name:'锤子线 / 上吊线 / 长影线', en:'Pin Bar',
  summary:'长下影线 + 小实体出现在下跌末端为锤子线（潜在反转），出现在上涨末端为上吊线（潜在见顶）。',
  use:'等待下一根 K 线确认方向，并把止损放在影线之外。',
  caveat:'强趋势中长影线可能只是流动性猎取，反转信号经常失败。' },
{ id:'engulf', cat:'candle', level:'intro', name:'吞没形态', en:'Engulfing',
  summary:'后一根 K 线实体完全包住前一根实体。看涨吞没出现在下跌后，看跌吞没出现在上涨后。',
  use:'结合成交量放大与关键位置，胜率明显高于孤立形态。',
  caveat:'大实体吞没也常出现在数据发布瞬间，随后迅速反向。' },
{ id:'harami', cat:'candle', level:'intro', name:'孕线', en:'Harami',
  summary:'后一根 K 线实体完全被前一根实体包含，代表动能收缩。常作为趋势暂缓或反转的早期信号。',
  use:'配合趋势与位置使用；孕线本身只是"犹豫"，不是方向。',
  caveat:'震荡市中孕线极多，单独使用没有意义。' },
{ id:'star', cat:'candle', level:'intro', name:'启明星 / 黄昏星', en:'Morning / Evening Star',
  summary:'三根 K 线组合：大实体 → 小实体跳空 → 反向大实体，代表动能由一方转向另一方。',
  use:'出现在关键支撑阻力或趋势末端时参考价值更高。',
  caveat:'加密市场跳空少，形态常不标准，需要放宽识别条件。' },
{ id:'doji', cat:'candle', level:'basic', name:'十字星', en:'Doji',
  summary:'开盘与收盘几乎相同，实体极小。代表多空均衡与方向不明。',
  use:'在关键位置出现时，等待下一根 K 线选择方向。',
  caveat:'十字星是最容易被过度解读的形态，噪音比例很高。' },
{ id:'soldiers', cat:'candle', level:'intro', name:'红三兵 / 三只乌鸦', en:'Three Soldiers / Crows',
  summary:'连续三根同向、实体饱满、收盘递进的 K 线，代表持续动能。',
  use:'顺势环境中的持续信号，而非反转信号。',
  caveat:'连续上涨后出现，可能已是情绪尾部。' },
{ id:'island', cat:'candle', level:'advanced', name:'岛形反转', en:'Island Reversal',
  summary:'价格跳空离开一段区间后又以相反方向跳空回来，形成孤岛。代表情绪极端后的快速反转。',
  use:'在加密市场更多见于重大事件前后，需结合成交量与消息面。',
  caveat:'形态罕见，样本少，难以统计验证。' },
{ id:'volcandle', cat:'candle', level:'advanced', name:'量价 K 线', en:'Volume-Price Candle',
  summary:'把成交量叠加到 K 线上：放量长阳、缩量回调、放量滞涨等组合，比单看价格更有信息量。',
  use:'用"努力与结果"是否一致来判断趋势健康度。',
  caveat:'成交量口径（现货/合约/场所）不同，结论可能相反。' },
{ id:'timeframe', cat:'candle', level:'basic', name:'周期选择', en:'Timeframe',
  summary:'周期决定噪音与机会的比率。周期越短，交易次数越多、成本越高、对执行要求越苛刻。',
  use:'先确定持仓时长，再选择图表周期；不要用 1 分钟图做日线决策。',
  caveat:'多周期混用容易产生"总有一个周期支持我"的确认偏误。' },

/* ---------------- 指标 ---------------- */
{ id:'ma', cat:'indicator', level:'basic', name:'移动平均线（MA）', en:'Moving Average', chapter:'s6-08-ma-granville',
  summary:'过去 N 个收盘价的算术平均。用于平滑价格、描述趋势方向与动态支撑阻力。',
  use:'常用 20/50/200；均线多头排列与价格在均线上方是趋势过滤条件。',
  caveat:'均线是滞后指标，震荡市会反复发出假信号。' },
{ id:'ema', cat:'indicator', level:'basic', name:'指数移动平均（EMA）', en:'Exponential MA',
  summary:'对近期价格赋予更高权重的均线，比 MA 反应更快，也更敏感。',
  use:'短周期交易常用 EMA9/EMA21 判断动能与回调结束。',
  caveat:'更快意味着更多假信号；不要同时用多条均线制造"精确感"。' },
{ id:'macd', cat:'indicator', level:'intro', name:'MACD', en:'MACD', chapter:'s6-03-macd',
  summary:'快慢 EMA 之差（DIF）与其均线（DEA）。柱状图反映动能加速或衰减，零轴反映中期方向。',
  use:'零轴上方金叉偏多、下方死叉偏空；背离用于提示动能衰竭。',
  caveat:'MACD 在震荡市中反复缠绕，是最容易产生"看起来有用"错觉的指标。' },
{ id:'rsi', cat:'indicator', level:'intro', name:'RSI', en:'Relative Strength Index', chapter:'s6-02-rsi',
  summary:'0–100 的动量指标，衡量近期上涨与下跌幅度之比。常用 14 周期，70/30 为超买超卖阈值。',
  use:'强趋势中 RSI 可长期钝化在 70 以上；用它看背离与动能变化，而非机械抄底摸顶。',
  caveat:'超买不等于要跌，超卖不等于要涨，这是 RSI 最常见的误用。' },
{ id:'kdj', cat:'indicator', level:'intro', name:'KDJ / 随机指标', en:'Stochastic', chapter:'s6-10-kdj',
  summary:'收盘价在近期高低区间中的相对位置，K、D、J 三线构成。对短期波动敏感。',
  use:'适合震荡市的高抛低吸参考，需结合趋势过滤。',
  caveat:'趋势市中会长期钝化，逆势使用极易连续止损。' },
{ id:'boll', cat:'indicator', level:'intro', name:'布林带', en:'Bollinger Bands', chapter:'s6-04-bollinger',
  summary:'中轨为均线，上下轨为中轨 ± 2 倍标准差。带宽反映波动率，收口预示波动收敛，开口预示扩张。',
  use:'用带宽判断波动状态；价格触及外轨不等于反转，也可能是趋势加速。',
  caveat:'标准差假设收益近似正态，而市场尾部远厚于正态。' },
{ id:'atr', cat:'indicator', level:'basic', name:'ATR（真实波幅）', en:'Average True Range',
  summary:'一段时间内真实波幅的平均值，衡量波动而非方向。是止损距离与仓位计算的基础工具。',
  use:'止损常用 1.5–3 倍 ATR；仓位 = 风险金额 / (k × ATR)。',
  caveat:'ATR 滞后于波动率突变，事件行情中会显著低估风险。' },
{ id:'adx', cat:'indicator', level:'advanced', name:'ADX / DMI', en:'ADX / DMI', chapter:'s6-09-adx',
  summary:'衡量趋势强度的指标（不辨方向）。ADX 高于 25 常视为趋势市，低于 20 视为震荡市。',
  use:'作为策略开关：趋势策略只在 ADX 抬升时启用。',
  caveat:'ADX 滞后明显，转折点附近常给出错误的状态判断。' },
{ id:'obv', cat:'indicator', level:'advanced', name:'OBV 能量潮', en:'On-Balance Volume', chapter:'s6-13-obv',
  summary:'按涨跌方向累加成交量，试图用量的方向验证价格方向。',
  use:'观察 OBV 与价格是否同步；背离提示资金流与价格不一致。',
  caveat:'只按收盘涨跌归类，无法区分主动买卖，精度有限。' },
{ id:'cci', cat:'indicator', level:'advanced', name:'CCI 商品通道指数', en:'Commodity Channel Index', chapter:'s6-12-cci',
  summary:'衡量价格偏离统计平均的程度，可正可负。±100 常作为超买超卖阈值。',
  use:'适合识别极端偏离后的均值回归，也可用于趋势初期突破。',
  caveat:'阈值在不同品种与周期上需要重新校准，不能照搬。' },
{ id:'wr', cat:'indicator', level:'advanced', name:'威廉指标 %R', en:'Williams %R', chapter:'s6-11-stoch-wr',
  summary:'收盘价相对近期高低点的位置，取值 −100 到 0，与随机指标高度相关。',
  use:'短线超买超卖参考，常与趋势过滤配合。',
  caveat:'与 KDJ 信息高度重叠，同时使用不会增加信息量。' },
{ id:'roc', cat:'indicator', level:'intro', name:'动量 / ROC', en:'Momentum / Rate of Change',
  summary:'当前价格相对 N 周期前价格的变化率，直接度量"速度"。',
  use:'动量排序可用于轮动；动量转负常先于价格转势。',
  caveat:'动量在震荡市中频繁穿越零轴，噪音大。' },
{ id:'ichimoku', cat:'indicator', level:'advanced', name:'一目均衡表', en:'Ichimoku Cloud', chapter:'s6-22-sar-ichimoku',
  summary:'由转换线、基准线、先行带 A/B 与迟行线构成的综合系统，把支撑阻力、趋势与时间窗口放在一张图上。',
  use:'云层上下判断大方向，云层厚度判断支撑强度。',
  caveat:'参数为日本市场设计，直接套用到 24/7 加密市场需要重新验证。' },
{ id:'psar', cat:'indicator', level:'advanced', name:'抛物线 SAR', en:'Parabolic SAR', chapter:'s6-22-sar-ichimoku',
  summary:'以加速因子跟随趋势的止损点系统，点阵在价格下方为多头、上方为空头。',
  use:'作为移动止损的机械规则，减少主观干预。',
  caveat:'震荡市频繁翻转，连续小亏会快速累积。' },
{ id:'vwap', cat:'indicator', level:'advanced', name:'VWAP', en:'Volume Weighted Average Price',
  summary:'按成交量加权的平均成交价，代表一段时间内市场的平均成本。机构常以它作为执行基准。',
  use:'价格在 VWAP 上方偏强、下方偏弱；日内回归 VWAP 是常见现象。',
  caveat:'VWAP 依赖起点选择（日内/锚定），不同起点结论不同。' },
{ id:'vp', cat:'indicator', level:'advanced', name:'成交量分布', en:'Volume Profile',
  summary:'按价格而非时间统计成交量，形成横向柱状图。高量区为价值区，低量区为价格快速通过的"真空"。',
  use:'识别支撑阻力与目标位；低量区常被快速穿越。',
  caveat:'数据窗口与 tick 规则的选择会显著改变形态。' },
{ id:'mfi', cat:'indicator', level:'advanced', name:'MFI / CMF 资金流', en:'Money Flow Index', chapter:'s6-13-obv',
  summary:'把成交量与价格方向结合的资金流指标，MFI 可理解为"带量的 RSI"。',
  use:'背离与超买超卖结合使用，比单纯 RSI 多一层量的验证。',
  caveat:'仍无法区分主动买卖，只是近似。' },
{ id:'divergence', cat:'indicator', level:'advanced', name:'背离', en:'Divergence', chapter:'s6-21-divergence',
  summary:'价格创新高/新低而指标未同步，提示动能与价格不一致。分为顶背离、底背离与隐藏背离。',
  use:'背离是警报而非指令，必须等待价格结构确认（破趋势线/破前低）。',
  caveat:'强趋势中背离可以连续出现多次，逆势交易者最容易死在这里。' },

/* ---------------- 量价与订单流 ---------------- */
{ id:'volume', cat:'flow', level:'basic', name:'成交量基础', en:'Volume',
  summary:'一段时间内的成交数量，是"努力"的度量。量增价涨代表共识增强，量增价滞代表有人在派发。',
  use:'把成交量当作过滤器：无量突破的可信度显著低于放量突破。',
  caveat:'合约市场的成交量包含大量对冲与刷量，不能直接等同真实需求。' },
{ id:'volprice', cat:'flow', level:'intro', name:'量价关系', en:'Volume-Price Relationship', chapter:'s6-13-obv',
  summary:'九种基本组合（量增价涨、量增价跌、量缩价涨……）描述供需的健康度。核心是"努力与结果是否一致"。',
  use:'趋势末端出现放量滞涨或缩量新高，提示动能衰竭。',
  caveat:'单一量价信号无法区分洗盘与派发，需要结合位置与结构。' },
{ id:'delta', cat:'flow', level:'advanced', name:'Delta / CVD', en:'Cumulative Volume Delta', chapter:'s7-06-auction',
  summary:'主动买入量与主动卖出量之差为 Delta，累计值为 CVD。它反映"谁更急"，而不是"谁更对"。',
  use:'观察价格与 CVD 的背离；结合关键价位的吸收判断买卖压力。',
  caveat:'主动单来源复杂（清算、对冲、做市），且不同场所口径不同。' },
{ id:'orderbook', cat:'flow', level:'advanced', name:'订单簿', en:'Order Book', chapter:'s7-05-microstructure',
  summary:'买卖双方限价单的实时队列。买卖价差、深度与挂单分布决定即时成交成本。',
  use:'评估滑点与流动性；识别大额挂单与流动性真空。',
  caveat:'挂单是意愿不是承诺，可随时撤走；幌骗在盘口中很常见。' },
{ id:'footprint', cat:'flow', level:'advanced', name:'足迹图', en:'Footprint Chart',
  summary:'把每根 K 线内部按价格切片的成交量与 Delta 可视化，能看到"在哪个价位成交了多少主动买卖"。',
  use:'识别吸收、失衡与关键价位的攻防。',
  caveat:'数据量大、解读主观，容易把噪音当信号。' },
{ id:'absorption', cat:'flow', level:'advanced', name:'吸收', en:'Absorption', chapter:'s7-06-auction',
  summary:'大额主动成交被对手方挂单消化而价格变化有限。可能意味着派发、对冲或止损耗尽。',
  use:'结合后续价格反应判断：吸收后不跌，往往有承接。',
  caveat:'三种解释都成立，不能单独作为入场理由。' },
{ id:'liqmap', cat:'flow', level:'advanced', name:'清算热图', en:'Liquidation Heatmap',
  summary:'根据杠杆与保证金推算的潜在强平价位分布。价格接近密集区时，容易触发连锁清算。',
  use:'识别"磁吸"价位与潜在插针区域，避免把止损放在密集区。',
  caveat:'依赖交易所持仓与杠杆假设，只是估算而非真实数据。' },
{ id:'funding', cat:'flow', level:'advanced', name:'资金费率', en:'Funding Rate', chapter:'s7-09-derivatives',
  summary:'永续合约多空之间的周期性支付，用于把永续价格锚定在现货附近。正费率代表多头拥挤。',
  use:'观察杠杆拥挤度与持有成本；极端费率常出现在情绪极值附近。',
  caveat:'费率可被套利与对冲扭曲，高费率不等于马上反转。' },

/* ---------------- 经典理论 ---------------- */
{ id:'dow', cat:'theory', level:'intro', name:'道氏理论', en:'Dow Theory', chapter:'s6-06-dow-theory',
  summary:'趋势分为主要、次要与日常波动；趋势需通过成交量确认；趋势在明确反转前假定延续。',
  use:'建立"顺势"与"确认"的基本框架，是所有趋势策略的思想源头。',
  caveat:'理论本身不给入场点，且反转确认总是滞后。' },
{ id:'elliott', cat:'theory', level:'advanced', name:'艾略特波浪', en:'Elliott Wave', chapter:'s6-14-elliott',
  summary:'把价格运动分解为 5 浪推进 + 3 浪调整的嵌套结构，试图描述群体情绪的节奏。',
  use:'作为"结构计数"的辅助语言，帮助设定目标位与失效点。',
  caveat:'浪型计数高度主观，同一段行情常有多种数法，事后可完美解释。' },
{ id:'gann', cat:'theory', level:'pro', name:'江恩理论', en:'Gann Theory', chapter:'s6-07-gann-theory',
  summary:'以时间、价格、角度线与几何比例为核心的体系，强调时间周期与价格共振。',
  use:'作为观察"时间窗口"的补充视角。',
  caveat:'大量结论缺乏可重复验证，容易滑向玄学；学习时保持怀疑。' },
{ id:'wyckoff', cat:'theory', level:'advanced', name:'威科夫方法', en:'Wyckoff Method', chapter:'s6-16-wyckoff',
  summary:'通过供需、因果与努力—结果三定律，描述吸筹、拉升、派发、下跌四阶段。',
  use:'识别盘整区内的供需转换，寻找弹簧与测试后的入场。',
  caveat:'阶段划分高度依赖事后标注，必须转化为事前可检验的规则。' },
{ id:'chan', cat:'theory', level:'pro', name:'缠论', en:'Chan Theory', chapter:'s6-17-chanlun',
  summary:'以分型、笔、线段、中枢与走势类型构建的递归结构体系，强调"走势终完美"。',
  use:'用于多级别结构与中枢震荡的划分。',
  caveat:'概念复杂、实现分歧大，容易陷入"解释一切"的循环。' },
{ id:'box', cat:'theory', level:'intro', name:'箱体 / 达瓦斯', en:'Darvas Box', chapter:'s6-18-darvas-box',
  summary:'用区间高低点定义箱体，突破箱体上沿视为趋势启动，跌破下沿视为失效。',
  use:'机械化的突破框架，适合规则化执行。',
  caveat:'震荡市中的箱体突破假信号比例高。' },
{ id:'fib', cat:'theory', level:'intro', name:'斐波那契回撤与扩展', en:'Fibonacci', chapter:'s6-15-fibonacci',
  summary:'用 0.382 / 0.5 / 0.618 等比例描述回调深度，用 1.272 / 1.618 等估算扩展目标。',
  use:'作为"区域"参考，与结构、成交量结合使用。',
  caveat:'比例本身没有因果机制，属于自我实现的叙事之一。' },
{ id:'reflexivity', cat:'theory', level:'pro', name:'反身性与周期', en:'Reflexivity / Cycles', chapter:'s7-08-regime',
  summary:'索罗斯的反身性：参与者的认知会改变基本面，价格与叙事互相强化，直到失衡修正。',
  use:'识别泡沫的形成与破裂阶段，调整风险暴露而非精确择时。',
  caveat:'无法给出时点；"泡沫"可以持续远超预期。' },

/* ---------------- 策略 ---------------- */
{ id:'trendfollow', cat:'strategy', level:'intro', name:'趋势跟踪', en:'Trend Following', chapter:'s3-01-trend',
  summary:'在趋势确认后顺势入场，用移动止损持有，靠少数大盈利覆盖大量小亏损。',
  use:'适合高波动趋势市；胜率低、盈亏比高，需要极强纪律。',
  caveat:'震荡市连续小亏，回撤期长，是心理上最难坚持的策略。' },
{ id:'breakoutstrat', cat:'strategy', level:'intro', name:'突破策略', en:'Breakout Strategy', chapter:'s3-02-breakout',
  summary:'在关键区间被突破时入场，假设波动扩张会延续。',
  use:'配合成交量、收盘确认与回踩过滤假突破。',
  caveat:'加密市场假突破多，追高滑点大。' },
{ id:'pullback', cat:'strategy', level:'intro', name:'回调买入', en:'Pullback', chapter:'s3-03-pullback',
  summary:'趋势中等待价格回撤到均线、供需区或斐波那契区域再顺势入场。',
  use:'风险回报通常优于追突破，止损更近。',
  caveat:'强趋势可能不给回调机会；回调过深则趋势可能已破坏。' },
{ id:'range', cat:'strategy', level:'intro', name:'区间 / 网格', en:'Range / Grid', chapter:'s3-04-grid',
  summary:'在无趋势的区间内低买高卖，网格是它的机械化版本。',
  use:'适合低波动震荡市，收益来自反复波动。',
  caveat:'一旦出现单边趋势，网格会持续加仓亏损，是最容易爆仓的策略之一。' },
{ id:'dca', cat:'strategy', level:'basic', name:'定投（DCA）', en:'Dollar Cost Averaging', chapter:'s3-05-dca',
  summary:'按固定时间与金额分批买入，摊平成本，降低择时依赖。',
  use:'适合长期配置与现金流稳定的投资者。',
  caveat:'定投不能避免标的基本面归零；"越跌越买"需要标的仍具长期价值。' },
{ id:'arb', cat:'strategy', level:'advanced', name:'套利', en:'Arbitrage', chapter:'s3-06-arbitrage',
  summary:'利用同一资产在不同场所/期限的价差获利，包括跨所、期现、资金费等类型。',
  use:'价差收敛的统计优势，通常低波动、高胜率。',
  caveat:'价差不收敛、提币暂停、对手方违约都会造成大额损失；"无风险"是错觉。' },
{ id:'hedge', cat:'strategy', level:'advanced', name:'对冲', en:'Hedging', chapter:'s3-07-hedge',
  summary:'用相关资产或衍生品抵消部分风险暴露，降低方向性波动。',
  use:'保护现货持仓、锁定利润、降低组合波动。',
  caveat:'对冲有成本（资金费、基差、期权权利金），且可能对冲掉收益。' },
{ id:'turtle', cat:'strategy', level:'intro', name:'海龟交易法', en:'Turtle Trading', chapter:'s3-09-turtle',
  summary:'以唐奇安通道突破入场，ATR 定仓位，2N 止损，逐步加仓的完整机械系统。',
  use:'学习"规则化 + 仓位 + 止损"如何组合成系统。',
  caveat:'原始参数在加密市场未必有效，需重新检验。' },
{ id:'momentum', cat:'strategy', level:'advanced', name:'动量轮动', en:'Momentum Rotation',
  summary:'定期在多个资产中持有近期动量最强者，利用动量的持续性。',
  use:'分散单一标的风险，适合中低频调仓。',
  caveat:'动量会在风格切换时剧烈回撤；交易成本会侵蚀收益。' },
{ id:'event', cat:'strategy', level:'advanced', name:'事件驱动', en:'Event Driven',
  summary:'围绕宏观数据、监管决定、升级/解锁等事件构建头寸，赚取事件前后的定价偏差。',
  use:'需要提前定义事件窗口、预期与失效条件。',
  caveat:'事件结果二元化，滑点与流动性风险极高，不适合重仓。' },
{ id:'marketmaking', cat:'strategy', level:'pro', name:'做市', en:'Market Making',
  summary:'同时挂出买卖双边报价赚取价差，靠库存管理与对冲控制风险。',
  use:'高频、低单笔利润、依赖基础设施与费率。',
  caveat:'逆向选择与库存风险会让"稳定收租"变成尾部巨亏；个人极难竞争。' },
{ id:'scalping', cat:'strategy', level:'pro', name:'剥头皮', en:'Scalping',
  summary:'极短周期内频繁进出，赚取微小价差。',
  use:'需要极低延迟、极低费率与极强执行力。',
  caveat:'成本吃掉大部分边际；对个人而言期望值常为负。' },
{ id:'swing', cat:'strategy', level:'intro', name:'波段交易', en:'Swing Trading',
  summary:'持有数天到数周，捕捉中期趋势或区间波动。',
  use:'平衡交易频率与生活节奏，适合有本职工作的交易者。',
  caveat:'隔夜与周末跳空风险；需要接受较长时间的回撤。' },
{ id:'martingale', cat:'strategy', level:'advanced', name:'马丁格尔（警示）', en:'Martingale', chapter:'s3-08-martingale',
  summary:'亏损后加倍下注以图一次回本。短期胜率高，长期必然遇到无法承受的连续亏损。',
  use:'仅作为反面教材：理解"高胜率 + 负偏"如何摧毁账户。',
  caveat:'在有限资金与无限尾部面前，马丁的破产概率趋近于 1。' },

/* ---------------- 衍生品 ---------------- */
{ id:'perp', cat:'deriv', level:'intro', name:'永续合约', en:'Perpetual Swap', chapter:'s7-09-derivatives',
  summary:'没有到期日的合约，通过资金费锚定现货。可用杠杆放大暴露，也放大破产概率。',
  use:'理解资金费、标记价格、保证金模式与强平机制。',
  caveat:'杠杆改变的不是期望值，而是破产时间；强平可能先于你的止损。' },
{ id:'basis', cat:'deriv', level:'advanced', name:'基差', en:'Basis', chapter:'s7-09-derivatives',
  summary:'期货价格与现货价格之差，年化后可与持有成本比较。',
  use:'判断期限结构与套保成本；基差交易是常见的低波动策略。',
  caveat:'基差收敛时间不确定，且包含对手方与保证金风险。' },
{ id:'options', cat:'deriv', level:'advanced', name:'期权基础', en:'Options',
  summary:'赋予买方在约定时间以约定价格买卖的权利。买方风险有限、卖方收益有限。',
  use:'用于表达波动率观点、对冲尾部风险或增强收益。',
  caveat:'卖方胜率高但承担负 Gamma 与尾部风险，一次极端行情可抹去长期收益。' },
{ id:'greeks', cat:'deriv', level:'advanced', name:'Greeks', en:'The Greeks',
  summary:'Delta（方向）、Gamma（Delta 变化）、Vega（波动率）、Theta（时间）描述期权价格对各因素的敏感度。',
  use:'理解头寸的真实暴露：买方做多波动率、卖方做空波动率。',
  caveat:'Greeks 是局部线性近似，极端行情下会失效。' },
{ id:'volsurface', cat:'deriv', level:'pro', name:'波动率曲面', en:'Volatility Surface',
  summary:'不同行权价与到期日的隐含波动率构成曲面。偏斜（skew）反映市场对尾部风险的定价。',
  use:'判断期权相对贵贱；识别市场对下跌保护的需求。',
  caveat:'隐含波动率是报价推导值，不是可交易的真实波动率。' },
{ id:'covered', cat:'deriv', level:'intro', name:'备兑与保护性看跌', en:'Covered Call / Protective Put',
  summary:'备兑：持有现货卖出看涨，换取权利金但封顶收益；保护性看跌：买入看跌对冲下跌。',
  use:'用确定的成本换取确定的保护或增强收益。',
  caveat:'备兑在暴涨时跑输现货；保护性看跌长期成本不低。' },
{ id:'liquidation', cat:'deriv', level:'intro', name:'清算机制', en:'Liquidation',
  summary:'保证金不足时交易所强制平仓。逐仓与全仓、标记价格与最新成交价、分层保证金都会影响强平价。',
  use:'计算强平价并与止损位比较，确保止损先于强平。',
  caveat:'ADL（自动减仓）可能在极端行情中强制平掉盈利仓位。' },

/* ---------------- 风险与仓位 ---------------- */
{ id:'expectancy', cat:'risk', level:'basic', name:'期望值', en:'Expectancy', chapter:'s7-01-expectancy',
  summary:'E = p·W − (1−p)·L，衡量一套方法长期是否为正。盈亏平衡胜率 = L/(W+L)。',
  use:'用 R 倍数记账，先证明期望为正，再讨论仓位。',
  caveat:'正期望只说明值得重复，不保证单次盈利，也不描述路径风险。' },
{ id:'kelly', cat:'risk', level:'advanced', name:'凯利公式', en:'Kelly Criterion', chapter:'s7-03-kelly',
  summary:'最大化长期几何增长率的下注比例：f* = p − (1−p)/b。',
  use:'作为仓位上限校验；实务使用 1/4–1/2 凯利吸收参数误差。',
  caveat:'参数估计误差会让"最优"变成"过度下注"；全凯利回撤极大。' },
{ id:'ruin', cat:'risk', level:'advanced', name:'破产概率', en:'Risk of Ruin', chapter:'s7-02-ruin',
  summary:'在给定仓位与生存线下，权益触及不可恢复水平的概率。连续亏损在长序列中近乎必然。',
  use:'用蒙特卡洛看 5% 分位与破产率，而不是只看平均收益。',
  caveat:'模型假设独立同分布，真实市场的序列相关与尾部事件会让结果更差。' },
{ id:'fixedfrac', cat:'risk', level:'basic', name:'固定比例风险', en:'Fixed Fractional',
  summary:'每笔交易只冒固定比例（如 0.5%–1%）的权益风险，仓位 = 风险金额 / 止损距离。',
  use:'最可靠、最容易执行的仓位方法。',
  caveat:'止损越远仓位越小；连续亏损时仓位自动缩小，这是优点也是缺点。' },
{ id:'voltarget', cat:'risk', level:'advanced', name:'波动率目标', en:'Volatility Targeting', chapter:'s7-04-sizing',
  summary:'按目标波动率与已实现波动率的比例调整暴露，使风险保持恒定。',
  use:'控制组合波动与回撤；跨资产比较时更公平。',
  caveat:'波动率飙升时被迫减仓，可能放大下跌（顺周期）。' },
{ id:'corr', cat:'risk', level:'advanced', name:'相关性', en:'Correlation', chapter:'s7-10-portfolio',
  summary:'资产收益之间的同向程度。分散化的收益几乎全部来自低相关。',
  use:'计算组合波动 σp = √(ΣΣ wi·wj·σi·σj·ρij)；按"最坏情况"做压力测试。',
  caveat:'危机中相关性趋近于 1，分散化在最需要它的时候失效。' },
{ id:'drawdown', cat:'risk', level:'basic', name:'回撤', en:'Drawdown',
  summary:'权益从峰值下跌的幅度。恢复所需涨幅 = DD/(1−DD)，亏损与恢复从不对称。',
  use:'设定回撤预算与分级响应（降仓、停手、复盘）。',
  caveat:'回撤本身不告诉你策略是否失效，需要结合样本与假设判断。' },
{ id:'tail', cat:'risk', level:'pro', name:'尾部风险', en:'Tail Risk',
  summary:'极端但低频的损失。负偏策略（卖期权、马丁、高杠杆网格）的收益曲线平滑，尾部极厚。',
  use:'用最差 1% 情景、相关性=1、流动性消失三种压力测试评估。',
  caveat:'历史尾部样本极少，任何"最大回撤"都可能被未来突破。' },
{ id:'leverage', cat:'risk', level:'basic', name:'杠杆', en:'Leverage',
  summary:'用借入资金放大暴露。杠杆不改变单笔期望，但压缩容错空间、加速破产。',
  use:'由最坏情况反推可用杠杆，而不是从平台上限往下调。',
  caveat:'强平价可能远早于你的止损位；波动率拖累会让高杠杆的长期复利转负。' },

/* ---------------- 研究与执行 ---------------- */
{ id:'backtest', cat:'research', level:'advanced', name:'回测', en:'Backtesting', chapter:'s7-11-research',
  summary:'用历史数据检验规则。回测的最大价值不是证明有效，而是先让数据骗你一次。',
  use:'固定样本、成本假设与评价指标；记录试验次数。',
  caveat:'过拟合、前视偏差与幸存者偏差会让结果系统性偏乐观。' },
{ id:'lookahead', cat:'research', level:'advanced', name:'前视偏差', en:'Look-ahead Bias',
  summary:'使用了当时还不可得的信息（收盘价入场、修正后的数据、未来才知道的成分股）。',
  use:'严格对齐数据发布时间戳与决策时点。',
  caveat:'很难完全排除，尤其是基本面与链上数据的发布时间。' },
{ id:'overfit', cat:'research', level:'advanced', name:'过拟合', en:'Overfitting',
  summary:'参数过多或试验次数过多，使策略拟合了噪音而非规律。表现为参数尖峰、样本外崩溃。',
  use:'参数平原、正则化、样本外验证、Deflated Sharpe 校正。',
  caveat:'"回测漂亮"本身就是过拟合的常见症状。' },
{ id:'oos', cat:'research', level:'advanced', name:'样本外验证', en:'Out-of-sample',
  summary:'用未参与训练的数据检验策略，模拟真实的信息约束。',
  use:'训练/验证/测试三分，或 walk-forward 滚动验证。',
  caveat:'样本外只能用一次；反复查看后它就变成了样本内。' },
{ id:'cost', cat:'research', level:'intro', name:'交易成本', en:'Trading Costs',
  summary:'手续费、价差、滑点、资金费与冲击成本。它们会系统性地下移期望值。',
  use:'做 2×、3× 成本的敏感性测试；把成本写进策略假设。',
  caveat:'高频策略的成本估计误差足以让正期望翻负。' },
{ id:'exec', cat:'research', level:'pro', name:'执行算法', en:'Execution Algorithms', chapter:'s7-12-execution',
  summary:'TWAP/VWAP/POV/冰山等下单方式，目标是在冲击成本与机会成本之间取舍。',
  use:'大单拆分、控制冲击；小单优先限价与低费率。',
  caveat:'算法无法消除逆向选择；趋势行情中被动执行会跑输基准。' },
{ id:'attribution', cat:'research', level:'pro', name:'绩效归因', en:'Performance Attribution',
  summary:'把收益拆解为市场 beta、风格因子、择时、选股与运气，判断收益来源是否可持续。',
  use:'区分"能力"与"行情"；用基准与随机策略对照。',
  caveat:'样本短时，归因结果本身也不可靠。' },

/* ---------------- 心理与纪律 ---------------- */
{ id:'lossaversion', cat:'psych', level:'basic', name:'损失厌恶', en:'Loss Aversion', chapter:'s7-12-execution',
  summary:'同等金额的亏损带来的痛苦约为盈利快感的 2 倍，导致止损拖延与过早止盈。',
  use:'预设止损、缩小单笔风险、用规则替代临场判断。',
  caveat:'知道偏差存在并不能消除它，只有流程能。' },
{ id:'disposition', cat:'psych', level:'intro', name:'处置效应', en:'Disposition Effect',
  summary:'倾向于卖出盈利、死扛亏损，导致"截断利润、让亏损奔跑"。',
  use:'规则化出场条件，禁止临时修改止损与目标。',
  caveat:'机械规则也会在震荡市中被反复打脸，需要统计验证。' },
{ id:'confirmation', cat:'psych', level:'intro', name:'确认偏误', en:'Confirmation Bias',
  summary:'只寻找支持自己观点的信息，忽略反方证据。',
  use:'强制写下反方论据与失效条件；用清单核对。',
  caveat:'信息越多，确认偏误越强（信息茧房）。' },
{ id:'overconfidence', cat:'psych', level:'intro', name:'过度自信', en:'Overconfidence',
  summary:'连续盈利后高估自己的能力，放大仓位与频率，通常出现在回撤之前。',
  use:'仓位与连胜次数脱钩；盈利后主动降杠杆。',
  caveat:'过度自信与"有把握"在体感上无法区分，只能靠日志与统计识别。' },
{ id:'revenge', cat:'psych', level:'advanced', name:'报复性交易', en:'Revenge Trading',
  summary:'亏损后急于回本，放大仓位、降低标准、频繁交易，形成快速亏损螺旋。',
  use:'设定单日最大亏损与强制冷静期；触发即停止。',
  caveat:'靠意志力对抗几乎无效，必须写成硬规则。' },
{ id:'process', cat:'psych', level:'advanced', name:'流程纪律', en:'Process Discipline',
  summary:'把决策拆成可重复的步骤（假设—触发—风险—执行—记录—复盘），减少临场发挥。',
  use:'用检查清单与事前验尸，把情绪决策变成流程决策。',
  caveat:'流程会增加摩擦，必须简单到能长期执行。' },
{ id:'journal', cat:'psych', level:'basic', name:'交易日志', en:'Trading Journal', chapter:'s7-12-execution',
  summary:'记录假设、风险、结果、情绪与归因。评价决策质量，而不是只看盈亏。',
  use:'定期统计不同标签下的期望值，找出真正的亏损来源。',
  caveat:'只记结果不记过程的日志，无法产生改进。' },
];

if (typeof window !== 'undefined') {
  window.KNOWLEDGE = KNOWLEDGE;
  window.KNOWLEDGE_LEVELS = KNOWLEDGE_LEVELS;
  window.KNOWLEDGE_CATS = KNOWLEDGE_CATS;
}
/* =====================================================================
 * Chain Academy v5 · 消息面数据层
 * 结构：IMPACT_LEVELS / NEWS_CATS / EVENT_LIBRARY / SOURCES / WEEKLY_RHYTHM
 * 说明：事件库是"影响机制"的结构化整理，不是实时新闻，也不构成任何交易建议。
 * ===================================================================== */

const IMPACT_LEVELS = [
  { key:'S', label:'系统性', weight:4, desc:'可能改变整个周期或流动性环境，影响持续数周至数月。', tone:'crit' },
  { key:'A', label:'重大',   weight:3, desc:'足以改变中期定价，影响持续数日至数周。', tone:'warn' },
  { key:'B', label:'中等',   weight:2, desc:'影响数小时至数日，通常需要与其他因素叠加。', tone:'gold' },
  { key:'C', label:'轻微',   weight:1, desc:'多为日内情绪与噪音，单独不足以改变趋势。', tone:'calm' },
];

const NEWS_DIRS = [
  { key:'bull', label:'偏多', sign:'↑' },
  { key:'bear', label:'偏空', sign:'↓' },
  { key:'mixed', label:'双向', sign:'↕' },
  { key:'neutral', label:'中性', sign:'·' },
];

const NEWS_CATS = [
  { key:'macro',     label:'宏观流动性' },
  { key:'regulation',label:'监管与政策' },
  { key:'onchain',   label:'链上与供给' },
  { key:'deriv',     label:'衍生品与杠杆' },
  { key:'industry',  label:'行业与机构' },
  { key:'narrative', label:'叙事与板块' },
];

const EVENT_LIBRARY = [
/* ---------------- 宏观流动性 ---------------- */
{ id:'fomc', cat:'macro', level:'S', dir:'mixed', name:'FOMC 利率决议与新闻发布会', window:'决议 → 数周',
  mechanism:'利率路径改变贴现率与美元流动性，直接影响风险资产估值；声明措辞与点阵图常比决议本身更重要。',
  watch:'联邦基金利率期货隐含路径、10 年期实际利率、美元指数、声明与上次的措辞差异。' },
{ id:'cpi', cat:'macro', level:'S', dir:'mixed', name:'美国 CPI / 核心 CPI', window:'公布 → 数日',
  mechanism:'通胀读数改变降息预期，进而改变实际利率与美元；超预期上行通常压制长久期风险资产。',
  watch:'核心环比、超级核心服务、数据公布后的利率期货重新定价。' },
{ id:'nfp', cat:'macro', level:'A', dir:'mixed', name:'非农就业与失业率', window:'公布 → 数日',
  mechanism:'就业强弱影响增长与利率预期；过强可能引发"紧缩更久"，过弱则引发衰退担忧。',
  watch:'新增就业、时薪同比、前值修正、失业率与劳动参与率。' },
{ id:'pce', cat:'macro', level:'A', dir:'mixed', name:'PCE 物价指数', window:'公布 → 数日',
  mechanism:'美联储偏好的通胀指标，影响政策路径预期。',
  watch:'核心 PCE 环比与同比、服务通胀分项。' },
{ id:'dots', cat:'macro', level:'S', dir:'mixed', name:'点阵图与经济预测（SEP）', window:'季度 → 数月',
  mechanism:'官员利率预期分布改变中期路径，常引发跨资产重定价。',
  watch:'中位数点位变化、长期利率预期、增长与失业预测。' },
{ id:'treasury', cat:'macro', level:'A', dir:'mixed', name:'美债拍卖与长端收益率', window:'拍卖 → 数周',
  mechanism:'长端利率是全球风险资产的贴现锚；拍卖需求疲弱会推高期限溢价。',
  watch:'投标倍数、间接投标占比、10y/30y 收益率与期限溢价。' },
{ id:'dxy', cat:'macro', level:'A', dir:'bear', name:'美元指数趋势性走强', window:'数周',
  mechanism:'美元走强收紧全球美元流动性，通常压制以美元计价的风险资产。',
  watch:'DXY 关键位、欧元与日元权重、离岸美元融资利差。' },
{ id:'boj', cat:'macro', level:'A', dir:'mixed', name:'日本央行政策与日元套息交易', window:'数日 → 数周',
  mechanism:'日元套息是全球杠杆的重要资金来源；日元快速升值会触发去杠杆与跨市场抛售。',
  watch:'日元汇率、日债收益率、套息头寸规模、波动率指数。' },
{ id:'cnliquidity', cat:'macro', level:'A', dir:'mixed', name:'中国流动性、汇率与监管环境', window:'数日 → 数周',
  mechanism:'影响区域风险偏好与场外资金通道；境内对虚拟货币的定性不因市场波动改变。',
  watch:'MLF/LPR、人民币中间价、社融、以及监管口径的正式表述。' },
{ id:'geopolitics', cat:'macro', level:'A', dir:'mixed', name:'地缘冲突与能源价格', window:'数日 → 数周',
  mechanism:'风险偏好与通胀预期同时受影响；避险资产与风险资产的相关性可能短暂反转。',
  watch:'油价、黄金、VIX、信用利差。' },
{ id:'debtceiling', cat:'macro', level:'A', dir:'mixed', name:'美国财政与债务上限', window:'数周',
  mechanism:'财政存款与发债节奏改变市场流动性；违约风险溢价会抬升波动。',
  watch:'TGA 余额、短端国库券利差、CDS。' },
{ id:'netliq', cat:'macro', level:'S', dir:'bull', name:'全球净流动性扩张', window:'数周 → 数月',
  mechanism:'央行资产负债表 − 财政存款 − 隔夜逆回购的净额变化，常与风险资产同向。',
  watch:'美联储资产、TGA、RRP、主要央行合计资产负债表。' },

/* ---------------- 监管与政策 ---------------- */
{ id:'etf', cat:'regulation', level:'A', dir:'bull', name:'现货 ETF 审批与资金流', window:'数日 → 数周',
  mechanism:'合规通道带来增量资金与叙事合法性；持续净流入会改变边际供需。',
  watch:'日均净流入、管理规模、溢价/折价、申报文件更新。' },
{ id:'sec', cat:'regulation', level:'A', dir:'bear', name:'SEC / 监管执法与诉讼', window:'数日 → 数周',
  mechanism:'对交易所、发行方或代币的定性改变合规预期与流动性通道。',
  watch:'正式起诉/和解文件、被点名的资产、交易所下架公告。' },
{ id:'stablebill', cat:'regulation', level:'A', dir:'mixed', name:'稳定币立法与储备要求', window:'数周 → 数月',
  mechanism:'决定稳定币发行方的储备、审计与准入，影响链上美元供给与信任。',
  watch:'立法文本、储备披露、发行方合规状态。' },
{ id:'mica', cat:'regulation', level:'B', dir:'mixed', name:'欧盟 MiCA 等区域监管落地', window:'数周',
  mechanism:'合规成本与牌照门槛改变交易所与发行方的区域布局。',
  watch:'牌照发放、下架清单、过渡期安排。' },
{ id:'cnpolicy', cat:'regulation', level:'A', dir:'bear', name:'中国监管口径与执法', window:'即时 → 长期',
  mechanism:'境内虚拟货币相关业务活动属于非法金融活动；监管表态会改变境内参与者预期与跨境通道。',
  watch:'央行/互金协会等正式文件、支付与营销整治、案件通报。' },
{ id:'tax', cat:'regulation', level:'B', dir:'mixed', name:'税收与申报规则变化', window:'数月',
  mechanism:'改变持有与交易的实际收益与合规成本。',
  watch:'资本利得税、申报口径、交易所税务报表。' },
{ id:'license', cat:'regulation', level:'B', dir:'bull', name:'交易所牌照与合规化', window:'数周',
  mechanism:'持牌经营提升机构参与意愿与托管信任。',
  watch:'牌照名单、托管审计、保险安排。' },
{ id:'cbdc', cat:'regulation', level:'C', dir:'neutral', name:'央行数字货币进展', window:'数月',
  mechanism:'影响支付叙事与隐私讨论，对现有加密资产影响间接。',
  watch:'试点范围、隐私设计、商业银行接入。' },

/* ---------------- 链上与供给 ---------------- */
{ id:'whale', cat:'onchain', level:'A', dir:'bear', name:'巨鲸转入交易所 / 大额抛售', window:'数小时 → 数日',
  mechanism:'大额持仓转入交易所通常被解读为潜在卖压；但归属与意图无法仅凭转账确定。',
  watch:'交易所净流入、鲸鱼地址标签、OTC 场外动向。' },
{ id:'stablemint', cat:'onchain', level:'A', dir:'bull', name:'稳定币增发与链上美元扩张', window:'数日 → 数周',
  mechanism:'稳定币供给增加代表潜在购买力入场；赎回则相反。',
  watch:'USDT/USDC 总供应、链上净发行、交易所稳定币余额。' },
{ id:'unlock', cat:'onchain', level:'A', dir:'bear', name:'代币解锁与线性释放', window:'事件日 → 数日',
  mechanism:'新增流通供给改变供需平衡，尤其当解锁占流通比例较高时。',
  watch:'解锁比例、接收方（团队/VC）、历史解锁后的价格行为。' },
{ id:'upgrade', cat:'onchain', level:'B', dir:'mixed', name:'协议升级 / 硬分叉', window:'事件前后',
  mechanism:'技术变更可能带来费用、通胀率或功能变化，也可能引发分叉与不确定性。',
  watch:'升级内容、验证者采用率、分叉风险、交易所支持公告。' },
{ id:'hack', cat:'onchain', level:'A', dir:'bear', name:'黑客攻击 / 合约漏洞', window:'数小时 → 数日',
  mechanism:'直接造成资金损失与信任冲击；可能引发挤兑与连锁清算。',
  watch:'链上异常转账、协议暂停公告、攻击者地址、保险覆盖。' },
{ id:'miner', cat:'onchain', level:'B', dir:'mixed', name:'矿工抛售 / 哈希率变化', window:'数周',
  mechanism:'矿工是结构性卖方；哈希率下降可能反映关机与盈利压力。',
  watch:'矿工余额、哈希率、难度调整、矿工持仓指数。' },
{ id:'valuation', cat:'onchain', level:'A', dir:'mixed', name:'链上估值极值（MVRV / NUPL 等）', window:'数周 → 数月',
  mechanism:'估值指标反映整体持仓成本与盈亏状态，极端读数提示风险收益比偏移。',
  watch:'MVRV、NUPL、SOPR、已实现波动率、长期持有者供应。',
  note:'指标口径依赖地址去重与交易所归类，不同数据商结果不同。' },
{ id:'exchbal', cat:'onchain', level:'B', dir:'bull', name:'交易所余额下降', window:'数周',
  mechanism:'通常被解读为提币自托管、卖压减少，但也可能只是托管方案变化。',
  watch:'交易所余额、净提币、托管机构披露。' },
{ id:'institutional', cat:'onchain', level:'B', dir:'bull', name:'机构持仓与链上金库披露', window:'季度',
  mechanism:'上市公司、基金与主权机构的配置改变长期供需叙事。',
  watch:'13F、季度财报、链上金库地址、ETF 持仓。' },
{ id:'burn', cat:'onchain', level:'C', dir:'bull', name:'销毁 / 回购机制', window:'事件日',
  mechanism:'减少流通供给，但影响取决于规模相对总量的大小。',
  watch:'销毁量占比、机制可持续性、是否只是营销。' },

/* ---------------- 衍生品与杠杆 ---------------- */
{ id:'expiry', cat:'deriv', level:'B', dir:'mixed', name:'期权大额到期（Max Pain）', window:'到期日前后',
  mechanism:'做市商对冲会在到期前放大或抑制波动；到期后对冲需求释放。',
  watch:'未平仓量分布、最大痛点、Gamma 敞口、到期名义规模。' },
{ id:'fundingext', cat:'deriv', level:'B', dir:'mixed', name:'资金费率极值', window:'数小时 → 数日',
  mechanism:'反映杠杆多空拥挤；极端正费率常伴随多头拥挤与潜在去杠杆。',
  watch:'资金费率年化、未平仓量、多空比、清算分布。' },
{ id:'oi', cat:'deriv', level:'B', dir:'mixed', name:'未平仓量激增', window:'数小时 → 数日',
  mechanism:'杠杆总量上升会放大双向波动；OI 与价格同向上升通常代表新资金进场。',
  watch:'OI 变化率、OI/市值、各交易所分布。' },
{ id:'liq', cat:'deriv', level:'A', dir:'bear', name:'大规模清算 / 去杠杆', window:'数小时 → 数日',
  mechanism:'强平本身是市价单，会进一步推动价格，形成正反馈的清算瀑布。',
  watch:'24h 清算额、多空清算比、深度变化、资金费率翻转。' },
{ id:'basisinv', cat:'deriv', level:'A', dir:'bear', name:'基差倒挂 / 期货贴水', window:'数日 → 数周',
  mechanism:'常出现在恐慌或强制去杠杆阶段，反映现货需求相对期货更强或套保需求激增。',
  watch:'年化基差、期限结构、交易所保证金规则。' },
{ id:'reserve', cat:'deriv', level:'B', dir:'bear', name:'交易所储备与穿仓风险', window:'数日',
  mechanism:'储备不足或风控失效会引发挤兑与信任危机。',
  watch:'储备证明、冷钱包余额、提币延迟、保险基金。' },

/* ---------------- 行业与机构 ---------------- */
{ id:'treasurybuy', cat:'industry', level:'B', dir:'bull', name:'上市公司 / 主权基金增持', window:'数日 → 数周',
  mechanism:'改变长期供给叙事与市场情绪，但需区分真实买入与公告炒作。',
  watch:'公告细节、实际持仓、融资方式（现金/发债/增发）。' },
{ id:'exchangeoutage', cat:'industry', level:'A', dir:'bear', name:'交易所事故 / 宕机 / 提币暂停', window:'数小时 → 数日',
  mechanism:'流动性碎片化与信任受损；极端行情中宕机会放大损失。',
  watch:'官方状态页、提币恢复时间、补偿方案、监管介入。' },
{ id:'mna', cat:'industry', level:'B', dir:'mixed', name:'并购 / IPO / 传统金融入场', window:'数周 → 数月',
  mechanism:'提升行业合法性与机构参与度，但也可能带来竞争与费用变化。',
  watch:'交易条款、监管审批、产品上线节奏。' },
{ id:'payment', cat:'industry', level:'B', dir:'bull', name:'支付与银行渠道接入', window:'数周',
  mechanism:'扩大真实使用场景与法币入口。',
  watch:'合作方、覆盖地区、手续费与限额。' },
{ id:'miningpolicy', cat:'industry', level:'B', dir:'mixed', name:'矿业政策与能源成本', window:'数周 → 数月',
  mechanism:'影响算力分布与抛压节奏。',
  watch:'电价、政策文件、算力迁移、矿机价格。' },
{ id:'brand', cat:'industry', level:'C', dir:'neutral', name:'品牌 / 体育合作', window:'事件日',
  mechanism:'多为情绪性叙事，对基本面影响有限。',
  watch:'合作规模、是否涉及代币支付。' },

/* ---------------- 叙事与板块 ---------------- */
{ id:'ai', cat:'narrative', level:'A', dir:'bull', name:'AI × Crypto 叙事升温', window:'数周 → 数月',
  mechanism:'资金向"AI 代理 / 算力 / 数据"叙事集中，板块内部相关性上升。',
  watch:'板块资金流、龙头代币表现、真实收入与用户。' },
{ id:'rwa', cat:'narrative', level:'B', dir:'bull', name:'RWA（真实资产上链）', window:'数周 → 数月',
  mechanism:'把国债、基金、商品搬上链，叙事与机构需求共振。',
  watch:'链上规模、发行方、合规结构、收益率。' },
{ id:'depin', cat:'narrative', level:'B', dir:'bull', name:'DePIN（去中心化物理网络）', window:'数周',
  mechanism:'用代币激励硬件网络，叙事依赖真实使用量与现金流。',
  watch:'设备数、收入、代币排放与通胀。' },
{ id:'meme', cat:'narrative', level:'B', dir:'mixed', name:'Meme 热潮', window:'数日 → 数周',
  mechanism:'高波动、高换手、低基本面，常出现在流动性充裕与风险偏好高位。',
  watch:'新发行数量、交易量占比、持币集中度、rug 风险。' },
{ id:'l2airdrop', cat:'narrative', level:'B', dir:'mixed', name:'L2 / 空投与积分活动', window:'数周',
  mechanism:'激励带来短期用户与 TVL，但可能在高排放后快速流失。',
  watch:'TVL、真实用户、排放速度、解锁时间表。' },
{ id:'privacy', cat:'narrative', level:'B', dir:'mixed', name:'隐私与合规叙事', window:'数周',
  mechanism:'监管压力与隐私需求的拉锯，影响特定板块的合规溢价。',
  watch:'监管表态、协议采用、交易所下架风险。' },
{ id:'halving', cat:'narrative', level:'A', dir:'bull', name:'减半 / 供给冲击', window:'数月 → 数年',
  mechanism:'新增供给减半改变矿工卖压与稀缺性叙事；但需求侧变化通常更关键。',
  watch:'发行率、矿工成本、历史减半后的回撤路径。' },
{ id:'seasonality', cat:'narrative', level:'C', dir:'neutral', name:'季节性 / 月末资金流', window:'数日',
  mechanism:'组合再平衡、税务与假期流动性会造成短期偏差。',
  watch:'月末/季末资金流、假期流动性、期权到期。' },
];

const SOURCES = [
  { group:'官方与监管', items:[
    { name:'美联储（FOMC 声明、SEP）', url:'https://www.federalreserve.gov/newsevents.htm' },
    { name:'美国劳工统计局（CPI / 非农）', url:'https://www.bls.gov/news.release/' },
    { name:'美国 SEC', url:'https://www.sec.gov/news/pressreleases' },
    { name:'CFTC', url:'https://www.cftc.gov/PressRoom' },
    { name:'欧洲央行', url:'https://www.ecb.europa.eu/press/html/index.en.html' },
    { name:'中国人民银行', url:'http://www.pbc.gov.cn/' },
  ]},
  { group:'行业媒体', items:[
    { name:'CoinDesk', url:'https://www.coindesk.com/' },
    { name:'The Block', url:'https://www.theblock.co/' },
    { name:'Blockworks', url:'https://blockworks.co/' },
  ]},
  { group:'链上与衍生品数据', items:[
    { name:'Glassnode', url:'https://glassnode.com/' },
    { name:'CryptoQuant', url:'https://cryptoquant.com/' },
    { name:'DefiLlama', url:'https://defillama.com/' },
    { name:'L2BEAT', url:'https://l2beat.com/' },
    { name:'Token Unlocks', url:'https://token.unlocks.app/' },
    { name:'Deribit Insights', url:'https://insights.deribit.com/' },
  ]},
  { group:'情绪与宏观', items:[
    { name:'Alternative.me 恐惧贪婪指数', url:'https://alternative.me/crypto/fear-and-greed-index/' },
    { name:'FRED 经济数据', url:'https://fred.stlouisfed.org/' },
    { name:'TradingView 经济日历', url:'https://www.tradingview.com/economic-calendar/' },
  ]},
];

const WEEKLY_RHYTHM = [
  { day:'周一', note:'亚洲开盘定周内情绪；周末流动性缺口常在此回补。', level:'B' },
  { day:'周二', note:'宏观数据预热；美股开盘后方向性资金增加。', level:'C' },
  { day:'周三', note:'FOMC 决议、CPI、EIA 等高频落点；波动率通常最高。', level:'S' },
  { day:'周四', note:'美国初请失业金；决议次日往往出现趋势延续或反转确认。', level:'B' },
  { day:'周五', note:'期权到期、非农（每月首个周五）、周末前降杠杆。', level:'A' },
  { day:'周六', note:'流动性最薄，插针与假突破概率上升。', level:'B' },
  { day:'周日', note:'周末收盘前的仓位调整；警惕低流动性下的异常波动。', level:'B' },
];

if (typeof window !== 'undefined') {
  window.IMPACT_LEVELS = IMPACT_LEVELS;
  window.NEWS_DIRS = NEWS_DIRS;
  window.NEWS_CATS = NEWS_CATS;
  window.EVENT_LIBRARY = EVENT_LIBRARY;
  window.SOURCES = SOURCES;
  window.WEEKLY_RHYTHM = WEEKLY_RHYTHM;
}
/* =====================================================================
 * Chain Academy v5 · 自检题库
 * 5 个维度 × 5 题 = 25 题 + 2 道开放题
 * 评分：每题 0–3 分，维度满分 15；仅用于自我认知，不构成任何评估结论。
 * ===================================================================== */

const CHECK_DIMS = [
  { key:'mind',       label:'心态与情绪', en:'MINDSET',    desc:'面对亏损、踏空与连续回撤时的稳定性。' },
  { key:'tech',       label:'技术与方法', en:'METHOD',     desc:'是否有可描述、可检验的入场与出场依据。' },
  { key:'discipline', label:'交易纪律',   en:'DISCIPLINE', desc:'规则是否写下来，并且真的被执行。' },
  { key:'risk',       label:'仓位与风控', en:'RISK',       desc:'风险预算、杠杆与最坏情况是否被量化。' },
  { key:'exit',       label:'止盈与止损', en:'EXIT',       desc:'出场是否先于入场被定义，是否会被情绪改写。' },
];

const CHECK_QUESTIONS = [
/* ---------------- 心态 ---------------- */
{ id:'m1', dim:'mind', q:'连续亏损 5 笔之后，你通常会做什么？', opts:[
  { t:'停下来复盘，检查规则是否仍被遵守', s:3 },
  { t:'降低仓位继续按规则执行', s:2 },
  { t:'加大仓位，试图一把回本', s:0 },
  { t:'立刻换一套策略或指标', s:1 },
]},
{ id:'m2', dim:'mind', q:'看到别人晒出大幅盈利时，你的第一反应是？', opts:[
  { t:'不关心，继续自己的节奏', s:3 },
  { t:'研究他的逻辑，但不上头', s:2 },
  { t:'焦虑，觉得自己错过了', s:1 },
  { t:'马上找标的跟进', s:0 },
]},
{ id:'m3', dim:'mind', q:'持仓期间，你能在多长时间内不看盘？', opts:[
  { t:'按计划设好条件单后，基本不看', s:3 },
  { t:'每隔几小时看一次', s:2 },
  { t:'几乎一直盯着', s:1 },
  { t:'每根 K 线都想操作', s:0 },
]},
{ id:'m4', dim:'mind', q:'连续盈利一段时间后，你会？', opts:[
  { t:'保持原有仓位与节奏，提醒自己样本还小', s:3 },
  { t:'小幅上调仓位，但仍受风险预算约束', s:2 },
  { t:'认为手感来了，明显加仓', s:0 },
  { t:'开始做更大周期的重仓尝试', s:1 },
]},
{ id:'m5', dim:'mind', q:'在睡眠不足、情绪低落或生活压力大时，你会？', opts:[
  { t:'当天不交易，或只做极小仓位', s:3 },
  { t:'只执行最简单的既定计划', s:2 },
  { t:'照常交易，觉得状态影响不大', s:1 },
  { t:'用交易来缓解压力', s:0 },
]},

/* ---------------- 技术 ---------------- */
{ id:'t1', dim:'tech', q:'你的入场依据通常是什么？', opts:[
  { t:'事先定义好的信号，且能说清失效条件', s:3 },
  { t:'形态或指标，但规则写得不够清楚', s:2 },
  { t:'感觉、盘感或别人的观点', s:1 },
  { t:'看到涨了就追', s:0 },
]},
{ id:'t2', dim:'tech', q:'你能否说出自己方法的胜率、平均盈亏比与期望值？', opts:[
  { t:'能，且有至少 100 笔样本支撑', s:3 },
  { t:'大致有概念，但没有统计', s:2 },
  { t:'只记得最近几笔的盈亏', s:1 },
  { t:'从没算过', s:0 },
]},
{ id:'t3', dim:'tech', q:'你如何区分趋势市与震荡市？', opts:[
  { t:'有明确规则（结构、均线排列、ADX 等）', s:3 },
  { t:'看大周期方向，凭经验判断', s:2 },
  { t:'不太区分，同一套方法一直用', s:1 },
  { t:'没想过这个问题', s:0 },
]},
{ id:'t4', dim:'tech', q:'对于你常用的指标，你是否知道它的假设与失效条件？', opts:[
  { t:'知道，并会在失效环境里停用', s:3 },
  { t:'知道一部分，主要靠经验', s:2 },
  { t:'只知道超买超卖这类用法', s:1 },
  { t:'默认指标是有效的', s:0 },
]},
{ id:'t5', dim:'tech', q:'你是否做过系统的复盘或回测？', opts:[
  { t:'有固定流程，记录假设、样本与结论', s:3 },
  { t:'偶尔复盘，主要看盈亏', s:2 },
  { t:'亏了才回头看一眼', s:1 },
  { t:'从不复盘', s:0 },
]},

/* ---------------- 纪律 ---------------- */
{ id:'d1', dim:'discipline', q:'你的交易规则写下来了吗？', opts:[
  { t:'写下来了，包含入场、出场、仓位与停止条件', s:3 },
  { t:'写在脑子里，比较清楚', s:2 },
  { t:'有一些零散的想法', s:1 },
  { t:'没有规则，随机应变', s:0 },
]},
{ id:'d2', dim:'discipline', q:'下单前，止损位是否已经确定？', opts:[
  { t:'永远先定止损，再算仓位', s:3 },
  { t:'通常会定，但偶尔会移动', s:2 },
  { t:'先下单，亏了再想', s:0 },
  { t:'看情况，有时扛有时割', s:1 },
]},
{ id:'d3', dim:'discipline', q:'过去一个月，你有多少次临时改变计划？', opts:[
  { t:'基本没有', s:3 },
  { t:'1–2 次，但事后有记录', s:2 },
  { t:'经常，情绪上头就改', s:1 },
  { t:'几乎每笔都在改', s:0 },
]},
{ id:'d4', dim:'discipline', q:'你是否有单日 / 单周最大亏损限制？', opts:[
  { t:'有，且触发后会强制停止', s:3 },
  { t:'有数字，但很少真的执行', s:2 },
  { t:'没有明确限制', s:1 },
  { t:'亏了就加仓摊平', s:0 },
]},
{ id:'d5', dim:'discipline', q:'你的交易频率主要由什么决定？', opts:[
  { t:'由信号与计划决定', s:3 },
  { t:'由空闲时间决定', s:2 },
  { t:'由情绪与行情热度决定', s:1 },
  { t:'手痒就交易', s:0 },
]},

/* ---------------- 风控 ---------------- */
{ id:'r1', dim:'risk', q:'单笔交易你通常冒多少风险？', opts:[
  { t:'0.25%–1% 权益，且固定', s:3 },
  { t:'1%–3%，视信心调整', s:2 },
  { t:'5% 以上', s:1 },
  { t:'不清楚具体比例', s:0 },
]},
{ id:'r2', dim:'risk', q:'你使用杠杆的情况是？', opts:[
  { t:'现货为主，或极低杠杆', s:3 },
  { t:'有杠杆，但会计算强平价', s:2 },
  { t:'习惯 10 倍以上', s:1 },
  { t:'能开多高开多高', s:0 },
]},
{ id:'r3', dim:'risk', q:'同时持有多个标的时，你会？', opts:[
  { t:'按相关性折算总风险', s:3 },
  { t:'大致控制总仓位', s:2 },
  { t:'每个单独看，没算合计', s:1 },
  { t:'越看好越多买', s:0 },
]},
{ id:'r4', dim:'risk', q:'你是否计算过"最坏情况下会亏多少"？', opts:[
  { t:'算过，并做过跳空与相关性=1 的压力测试', s:3 },
  { t:'大致有数', s:2 },
  { t:'没算过，应该不会太糟', s:1 },
  { t:'不认为会发生在自己身上', s:0 },
]},
{ id:'r5', dim:'risk', q:'你投入交易的钱是？', opts:[
  { t:'长期用不到的闲钱', s:3 },
  { t:'一部分积蓄，不影响生活', s:2 },
  { t:'大部分积蓄', s:1 },
  { t:'借贷、信用卡或生活必需资金', s:0 },
]},

/* ---------------- 出场 ---------------- */
{ id:'e1', dim:'exit', q:'你的止盈方式通常是？', opts:[
  { t:'事先定义目标位或移动止损规则', s:3 },
  { t:'分批止盈，有大致计划', s:2 },
  { t:'涨到心动就卖', s:1 },
  { t:'不舍得卖，总想再多一点', s:0 },
]},
{ id:'e2', dim:'exit', q:'盈利后，你会移动止损吗？', opts:[
  { t:'按规则移动（结构位或 ATR）', s:3 },
  { t:'偶尔移动，怕回吐', s:2 },
  { t:'从不移动，怕被扫', s:1 },
  { t:'看心情', s:0 },
]},
{ id:'e3', dim:'exit', q:'持仓亏损时，你更可能？', opts:[
  { t:'按计划止损，然后复盘', s:3 },
  { t:'等一等，看能否回到成本', s:1 },
  { t:'加仓摊平成本', s:0 },
  { t:'直接砍掉，不再看', s:2 },
]},
{ id:'e4', dim:'exit', q:'当一笔交易大幅盈利时，你会？', opts:[
  { t:'按规则持有，让趋势走完', s:3 },
  { t:'先落袋一半，剩下按规则', s:2 },
  { t:'全部卖出，怕利润回吐', s:1 },
  { t:'后悔买少了，马上加仓', s:0 },
]},
{ id:'e5', dim:'exit', q:'出场之后行情继续走，你会？', opts:[
  { t:'接受，出场是计划的一部分', s:3 },
  { t:'记录，复盘出场规则', s:3 },
  { t:'追回去，怕错过', s:0 },
  { t:'懊恼一整天，影响后续交易', s:1 },
]},
];

const CHECK_OPEN = [
  { id:'o1', q:'回忆最近一次亏损：你认为真正的原因是什么？（越具体越好）', hint:'例如：在震荡市用了突破策略，且没有按规则止损。' },
  { id:'o2', q:'如果只能保留一条交易规则，你会保留哪一条？为什么？', hint:'例如：单笔风险不超过 0.5%，因为它决定我能不能继续玩。' },
];

/* 本地规则引擎：无 API Key 时生成基础报告 */
function localAssessment(scores, answers){
  const dims = CHECK_DIMS.map(d => {
    const v = scores[d.key] || 0;
    return { ...d, score:v, pct: Math.round(v / 15 * 100) };
  });
  const sorted = [...dims].sort((a,b) => b.pct - a.pct);
  const strong = sorted.slice(0,2);
  const weak = sorted.slice(-2).reverse();
  const overall = Math.round(dims.reduce((a,d)=>a+d.pct,0) / dims.length);

  const advice = {
    mind:'把"连续亏损后的动作"写成硬规则：触发 N 连亏即降半仓并强制复盘一天。',
    tech:'选一个信号，固定周期与标的，记录 100 笔样本，算出胜率与平均盈亏比。',
    discipline:'把规则压缩到一页纸：入场、失效、仓位、停止条件，贴在屏幕旁。',
    risk:'先定单笔风险比例与单日最大亏损，再谈收益；用最坏情况反推杠杆。',
    exit:'入场前就写下止损与至少一种止盈规则，禁止在盘中修改。',
  };

  return {
    overall,
    dims,
    strong: strong.map(d => `${d.label}（${d.pct}%）`),
    weak: weak.map(d => `${d.label}（${d.pct}%）`),
    summary: overall >= 70
      ? '整体基础较好，真正的风险在于"知道但做不到"的环节。建议把优势维度固化成流程，把最弱维度设为接下来 30 天的唯一改进目标。'
      : overall >= 45
      ? '你已经具备部分框架，但规则化程度不足。当前阶段最值得投入的不是新指标，而是把已有做法写成可执行的规则并统计验证。'
      : '目前更接近"凭感觉交易"。在建立书面规则与风险预算之前，任何策略优化都没有意义。建议先停止放大仓位，从最小可行规则开始。',
    plan: weak.map(d => advice[d.key]),
    note: '本报告由本地规则生成，仅用于自我认知，不构成任何投资建议或能力评价。',
  };
}

/* DeepSeek 提示词 */
function buildCheckPrompt(scores, answers, open){
  const dimLines = CHECK_DIMS.map(d => {
    const v = scores[d.key] || 0;
    const qa = CHECK_QUESTIONS.filter(q => q.dim === d.key).map(q => {
      const a = answers[q.id];
      const opt = a != null ? q.opts[a] : null;
      return `- ${q.q}\n  回答：${opt ? opt.t : '未作答'}`;
    }).join('\n');
    return `【${d.label}】得分 ${v}/15\n${qa}`;
  }).join('\n\n');

  return `你是一位严谨的交易训练教练，擅长用风险数学与行为金融学分析交易者的短板。请基于以下自检结果，输出一份诚实、具体、可执行的中文评估。

背景：该用户正在使用一个纯理论学习站点做自我检查。站点不提供任何交易建议、标的或点位。你的任务不是鼓励交易，而是帮助他识别流程与认知上的问题；如果结论是"现阶段不适合交易"，请直接说明。

${dimLines}

【开放题】
1. 最近一次亏损的原因：${open.o1 || '（未填写）'}
2. 只能保留一条规则：${open.o2 || '（未填写）'}

请严格按以下结构输出，使用 Markdown，控制在 900 字以内：
## 总体判断
（2–3 句，指出当前最核心的矛盾，不要客套）

## 三个优势
（每条一句话，必须基于上面的具体回答，不要空泛）

## 三个风险点
（每条一句话，指出机制与可能的后果）

## 30 天训练计划
（4–6 条，按周给出，必须是可验证的动作，例如"记录 20 笔交易的 R 倍数"）

## 三条硬规则
（写成可以直接贴在屏幕上的短句，涉及仓位、止损、停止条件）

## 边界
（提醒：这不是投资建议，不构成能力评价；若存在借贷或生活资金参与，应优先停止）`;
}

if (typeof window !== 'undefined') {
  window.CHECK_DIMS = CHECK_DIMS;
  window.CHECK_QUESTIONS = CHECK_QUESTIONS;
  window.CHECK_OPEN = CHECK_OPEN;
  window.localAssessment = localAssessment;
  window.buildCheckPrompt = buildCheckPrompt;
}
/* =====================================================================
 * Chain Academy v5 · 交易纪律数据层
 * 全部保存在 localStorage（键 ca_discipline），不上传任何服务器。
 * ===================================================================== */
'use strict';

const DISC_DEFAULT = {
  rules: [
    { id:'r1', text:'单笔风险不超过账户的 0.75%', note:'仓位由止损距离反推，而不是由信心决定' },
    { id:'r2', text:'下单前必须写好止损与失效条件', note:'没有失效条件的交易不做' },
    { id:'r3', text:'单日亏损达到 3% 即停止交易', note:'触发后关闭行情软件，次日再复盘' },
    { id:'r4', text:'同时持有的相关性仓位不超过 3 个', note:'相关性高的标的按一个风险单位计算' },
    { id:'r5', text:'不在情绪剧烈波动时下单', note:'睡眠不足、愤怒、兴奋时只观察不操作' },
  ],
  checklist: [
    { id:'c1', text:'确认今日宏观日历与重大事件' },
    { id:'c2', text:'写下每笔交易的理由与失效条件' },
    { id:'c3', text:'检查相关性叠加后的总风险' },
    { id:'c4', text:'设置条件单，盘中不改止损' },
    { id:'c5', text:'复盘昨日交易并记录情绪状态' },
  ],
  params: { risk:0.75, dailyLoss:3, maxPos:3, leverage:1 },
  logs: {},
  violations: [],
};

const DISC_KEY = 'discipline';
function loadDisc(){
  const d = store.get(DISC_KEY, null);
  if(!d) return JSON.parse(JSON.stringify(DISC_DEFAULT));
  return {
    rules: d.rules && d.rules.length ? d.rules : DISC_DEFAULT.rules.slice(),
    checklist: d.checklist && d.checklist.length ? d.checklist : DISC_DEFAULT.checklist.slice(),
    params: Object.assign({}, DISC_DEFAULT.params, d.params || {}),
    logs: d.logs || {},
    violations: d.violations || [],
  };
}
function saveDisc(d){ store.set(DISC_KEY, d); }
function todayStr(offset){
  const t = new Date();
  if(offset) t.setDate(t.getDate() + offset);
  /* 使用本地时区日期，避免 UTC 与本地日期错位 */
  const local = new Date(t.getTime() - t.getTimezoneOffset() * 60000);
  return local.toISOString().slice(0,10);
}
function todayLog(d){
  const k = todayStr();
  d.logs[k] = d.logs[k] || { done:[], note:'' };
  return d.logs[k];
}
function todayRate(d){
  const log = todayLog(d);
  if(!d.checklist.length) return 0;
  return Math.round(log.done.length / d.checklist.length * 100);
}
function discStreak(d){
  let streak = 0;
  for(let i = 0; i < 90; i++){
    const k = todayStr(-i);
    const log = d.logs[k];
    const full = log && log.done.length >= d.checklist.length && d.checklist.length > 0;
    if(full) streak++;
    else if(i === 0) continue;      /* 今天还没做完不算断 */
    else break;
  }
  return streak;
}
function last14(d){
  const out = [];
  for(let i = 13; i >= 0; i--){
    const k = todayStr(-i);
    const log = d.logs[k];
    out.push({ date:k, full: !!(log && log.done.length >= d.checklist.length), today: i === 0 });
  }
  return out;
}
if (typeof window !== 'undefined') {
  window.DISC_DEFAULT = DISC_DEFAULT;
  window.loadDisc = loadDisc;
  window.saveDisc = saveDisc;
  window.todayStr = todayStr;
  window.todayLog = todayLog;
  window.todayRate = todayRate;
  window.discStreak = discStreak;
  window.last14 = last14;
}
/* =====================================================================
 * Chain Academy · 存储与领域逻辑（js/storage.js）
 * 依赖：先加载 js/content.js（提供 STAGES / EXAMS 全局变量）
 * 职责：localStorage 存取、线性解锁、i18n、共享渲染助手
 * ===================================================================== */
'use strict';

/* ---------- localStorage 存储层（键前缀 ca_） ---------- */
const store = {
  get(k, d){ try{ const v = JSON.parse(localStorage.getItem('ca_'+k)); return v==null?d:v; }catch(e){ return d; } },
  set(k, v){ localStorage.setItem('ca_'+k, JSON.stringify(v)); },
};
let progress = store.get('progress', { chapters:{}, exams:{}, wrong:[], stars:[], answers:0 });
const saveProgress = () => store.set('progress', progress);

/* ---------- 章节顺序与线性解锁 ---------- */
const ORDER = STAGES.flatMap(s => s.chapters.map(c => ({ stage: s, ch: c })));
ORDER.forEach((o, i) => { o.index = i; });
/* v5：取消顺序解锁。所有章节默认开放，进度只用于记录，不再作为门槛。 */
function chapterState(chId){
  return (progress.chapters[chId] && progress.chapters[chId].passed) ? 'done' : 'active';
}
const isUnlocked = () => true;
const STAGE_LEVEL = { s1:'basic', s2:'basic', s3:'intro', s4:'intro', s5:'intro', s6:'advanced', s7:'pro' };
function chapterLevel(ch){ return ch.level || null; }
function stageDone(stage){ return stage.chapters.every(c => progress.chapters[c.id] && progress.chapters[c.id].passed); }
function examState(exam){
  if(progress.exams[exam.stageId] && progress.exams[exam.stageId].passed) return 'done';
  return 'active';
}
function overallPct(){
  const doneCh = ORDER.filter(o => progress.chapters[o.ch.id] && progress.chapters[o.ch.id].passed).length;
  const doneEx = EXAMS.filter(e => progress.exams[e.stageId] && progress.exams[e.stageId].passed).length;
  return Math.round((doneCh + doneEx) / (ORDER.length + EXAMS.length) * 100);
}

/* ---------- 工具 ---------- */
const $id = id => document.getElementById(id);
function esc(s){ return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function fmtN(n, d){ return (n==null||isNaN(n))?'—':Number(n).toLocaleString('en-US',{minimumFractionDigits:d==null?2:d,maximumFractionDigits:d==null?2:d}); }

/* ---------- i18n（仅界面文案；正文内容请在 content.js 中翻译） ---------- */
const I18N = {
  zh: {
    navHome:'首页', navRoadmap:'学习路线', navLibrary:'章节库', navLab:'实操实验室', navProgress:'进度总览', navErrors:'错题复盘', navFeedback:'答疑反馈',
    ctaContinue:'继续上次学习',
    locked:'未解锁', active:'进行中', done:'已完成', start:'开始学习', retake:'重新自测', read:'阅读', pass:'合格',
    backLibrary:'返回章节库', prevCh:'← 上一章', nextCh:'下一章 →', quizTitle:'配套自测', submitQuiz:'提交并判分',
    yourScore:'得分', quizPass:'恭喜，通过本章自测！已解锁下一章。', quizFail:'未达到 60 分，看看解析再试一次。',
    markRead:'✓ 完成本节学习', readDone:'本节已标记为完成，继续加油！',
    examStart:'开始阶段考核', examLocked:'完成本阶段全部章节后解锁', examScore:'考核得分', examPass:'考核通过，阶段完成！', examFail:'未达 70 分，可返回章节复习后重考。',
    stageExam:'阶段考核', collapse:'收拢', expand:'展开',
    emptyTitle:'这里还空空如也', libEmpty:'没有符合筛选条件的章节', erEmpty:'暂无错题，保持这个状态！',
    retry:'重新作答', mastered:'已掌握', filterAll:'全部阶段', filterPending:'只看未掌握',
    saved:'已保存到本地', needQuestion:'请填写问题描述', pickChapter:'请选择章节',
    fbChapter:'当前章节', fbQuestion:'问题描述', fbNote:'备注（选填）', fbSubmit:'保存疑问',
    riskSummary:'虚拟货币相关业务活动在国内属于非法金融活动，不受法律保护。本站仅用于区块链技术理论学习，不提供、不引导任何交易行为。',
    disclaimer:'免责声明', viewFull:'查看完整监管说明',
  },
  en: {
    navHome:'Home', navRoadmap:'Roadmap', navLibrary:'Chapters', navLab:'Trade Lab', navProgress:'Progress', navErrors:'Error Review', navFeedback:'Feedback',
    ctaContinue:'Continue Last Study',
    locked:'Locked', active:'In Progress', done:'Completed', start:'Start', retake:'Retake Quiz', read:'Read', pass:'Pass',
    backLibrary:'Back to Library', prevCh:'← Prev', nextCh:'Next →', quizTitle:'Chapter Quiz', submitQuiz:'Submit & Grade',
    yourScore:'Score', quizPass:'Passed! Next chapter unlocked.', quizFail:'Below 60 — review the explanations and try again.',
    markRead:'✓ Mark as Studied', readDone:'Marked as studied. Keep going!',
    examStart:'Start Final Assessment', examLocked:'Finish all chapters in this stage first', examScore:'Exam score', examPass:'Stage passed!', examFail:'Below 70 — review and retake.',
    stageExam:'Final Assessment', collapse:'Collapse', expand:'Expand',
    emptyTitle:'Nothing here yet', libEmpty:'No chapters match the filter', erEmpty:'No errors yet — keep it that way!',
    retry:'Re-answer', mastered:'Mastered', filterAll:'All stages', filterPending:'Pending only',
    saved:'Saved locally', needQuestion:'Please write your question', pickChapter:'Select a chapter',
    fbChapter:'Current chapter', fbQuestion:'Your question', fbNote:'Notes (optional)', fbSubmit:'Save Question',
    riskSummary:'Virtual-currency-related activities are illegal financial activities in China and are not protected by law. This site is for blockchain theory study only; no trading is provided or encouraged.',
    disclaimer:'Disclaimer', viewFull:'View full regulation notice',
  },
};
let lang = store.get('lang', 'zh');
const t = k => (I18N[lang] && I18N[lang][k]) || I18N.zh[k] || k;
function applyLang(){
  document.querySelectorAll('[data-i18n]').forEach(n => { n.textContent = t(n.dataset.i18n); });
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
}
document.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => {
  lang = b.dataset.lang; store.set('lang', lang); applyLang();
}));

/* ---------- 共享 UI：页头页脚渲染 ---------- */
function renderNav(active){
  const links = [
    ['index.html','navHome'],['roadmap.html','navRoadmap'],['library.html','navLibrary'],
    ['lab.html','navLab'],['progress.html','navProgress'],['errors.html','navErrors'],['feedback.html','navFeedback'],
  ];
  document.querySelectorAll('.nav-links-slot').forEach(slot => {
    slot.innerHTML = links.map(l => `<a class="navlink ${active===l[1]?'active':''}" href="${l[0]}">${t(l[1])}</a>`).join('');
  });
  document.querySelectorAll('.cta-continue').forEach(b => {
    b.textContent = t('ctaContinue');
    b.onclick = e => {
      const last = progress.lastStudy;
      if(last && isUnlocked(last)){ e.preventDefault(); location.href = 'chapter.html?id=' + encodeURIComponent(last); }
      else location.href = 'course.html';
    };
  });
  document.querySelectorAll('.lang-sw').forEach(b => {
    b.textContent = b.dataset.lang === 'zh' ? '中文' : 'EN';
  });
}
function renderFooter(){
  document.querySelectorAll('.footer-slot').forEach(slot => {
    slot.innerHTML = `
    <footer class="site-footer">
      <div class="container-x">
        <div class="footer-grid">
          <div>
            <div class="flex items-center gap-2">
              <span class="w-7 h-7 rounded-md flex items-center justify-center text-white font-extrabold text-sm" style="background:linear-gradient(135deg,#0C4A6E,#38BDF8)">C</span>
              <span class="font-bold text-sm">Chain<span style="color:var(--brand)">Academy</span></span>
            </div>
            <p class="footer-p mt-4">${t('riskSummary')}</p>
          </div>
          <div>
            <div class="footer-h" data-i18n="disclaimer">${t('disclaimer')}</div>
            <p class="footer-p">本站为区块链技术理论知识学习平台，所有内容仅供学习参考，不构成投资建议。本站不提供行情、交易、合约、交易所、钱包充提等任何功能与外部链接。</p>
          </div>
          <div>
            <div class="footer-h">SITEMAP</div>
            <a class="footer-a" href="roadmap.html">${t('navRoadmap')}</a>
            <a class="footer-a" href="library.html">${t('navLibrary')}</a>
            <a class="footer-a" href="progress.html">${t('navProgress')}</a>
            <a class="footer-a" href="lab.html">${t('navLab')}</a>
            <a class="footer-a" href="feedback.html">${t('navFeedback')}</a>
            <p class="footer-p mt-4">Language / 语言：
              <a href="javascript:void 0" data-lang="zh" class="footer-a" style="display:inline">中文</a> ·
              <a href="javascript:void 0" data-lang="en" class="footer-a" style="display:inline">EN</a>
            </p>
          </div>
        </div>
        <div class="copyright">© 2026 Chain Academy · 仅用于区块链技术理论学习 · v3.0 ReDesign</div>
      </div>
    </footer>`;
    slot.querySelectorAll('[data-lang]').forEach(b => b.addEventListener('click', () => {
      lang = b.dataset.lang; store.set('lang', lang); location.reload();
    }));
  });
}
/* =====================================================================
 * Chain Academy v5.1 · 实时数据层
 * 数据源（均为公开接口，仅信息展示）：
 *   - 盘面：data-api.binance.vision（公开行情 API）
 *   - 情绪：api.alternative.me（恐惧贪婪指数）
 *   - 链上：api.blockchair.com / mempool.space
 *   - 消息：Cointelegraph / CoinDesk RSS，经 api.allorigins.win 公共代理
 * 说明：任何接口失败都不影响页面其他部分；会优先使用上次缓存。
 * 本站不提供交易功能，不构成投资建议。
 * ===================================================================== */
'use strict';

const LIVE = {
  prices: null,      /* { BTC:{price,change}, ETH:{...}, ... } */
  spark: null,       /* BTC 1m 收盘价数组 */
  fng: null,         /* { value, label } */
  chain: null,       /* { blocks, tx, fee } */
  news: null,        /* [{ title, link, source, date, level, dir }] */
  ts: {},
};

const LIVE_SYMBOLS = [
  { sym:'BTC', pair:'BTCUSDT' },
  { sym:'ETH', pair:'ETHUSDT' },
  { sym:'SOL', pair:'SOLUSDT' },
];
const LIVE_CACHE_KEY = 'live_cache';

function liveReadCache(){
  const c = store.get(LIVE_CACHE_KEY, null);
  if(!c) return;
  if(c.prices) LIVE.prices = c.prices;
  if(c.spark) LIVE.spark = c.spark;
  if(c.fng) LIVE.fng = c.fng;
  if(c.chain) LIVE.chain = c.chain;
  if(c.news) LIVE.news = c.news;
  if(c.ts) LIVE.ts = c.ts;
}
function liveSaveCache(){
  store.set(LIVE_CACHE_KEY, {
    prices: LIVE.prices, spark: LIVE.spark, fng: LIVE.fng, chain: LIVE.chain,
    news: LIVE.news, ts: LIVE.ts,
  });
}
function liveEmit(){
  window.dispatchEvent(new CustomEvent('live:update', { detail: LIVE }));
}

async function liveFetch(url, opts){
  const o = Object.assign({ timeout: 9000, json:true }, opts || {});
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), o.timeout);
  try{
    const res = await fetch(url, { signal: ctrl.signal, headers: o.headers || {} });
    if(!res.ok) throw new Error('HTTP ' + res.status);
    return o.json ? await res.json() : await res.text();
  } finally {
    clearTimeout(timer);
  }
}

/* ---------------- 盘面 ---------------- */
async function refreshPrices(){
  const q = encodeURIComponent(JSON.stringify(LIVE_SYMBOLS.map(s => s.pair)));
  const arr = await liveFetch('https://data-api.binance.vision/api/v3/ticker/24hr?symbols=' + q);
  const out = {};
  arr.forEach(x => {
    const s = LIVE_SYMBOLS.find(y => y.pair === x.symbol);
    if(s) out[s.sym] = { price: parseFloat(x.lastPrice), change: parseFloat(x.priceChangePercent) };
  });
  LIVE.prices = out; LIVE.ts.prices = Date.now();
  liveSaveCache(); liveEmit();
}
async function refreshSpark(){
  const arr = await liveFetch('https://data-api.binance.vision/api/v3/klines?symbol=BTCUSDT&interval=1m&limit=90');
  LIVE.spark = arr.map(k => parseFloat(k[4]));
  LIVE.ts.spark = Date.now();
  liveSaveCache(); liveEmit();
}
async function refreshFng(){
  const j = await liveFetch('https://api.alternative.me/fng/?limit=14');
  const map = { 'Extreme Fear':'极度恐惧', Fear:'恐惧', Neutral:'中性', Greed:'贪婪', 'Extreme Greed':'极度贪婪' };
  LIVE.fng = {
    value: parseInt(j.data[0].value, 10),
    label: map[j.data[0].value_classification] || j.data[0].value_classification,
    prev: j.data[1] ? parseInt(j.data[1].value, 10) : null,
    history: j.data.slice(0, 14).reverse().map(x => parseInt(x.value, 10)),
  };
  LIVE.ts.fng = Date.now();
  liveSaveCache(); liveEmit();
}
async function refreshChain(){
  const chain = LIVE.chain || {};
  try{
    const j = await liveFetch('https://api.blockchair.com/bitcoin/stats');
    const d = j.data || {};
    if(d.blocks) chain.blocks = d.blocks;
    if(d.transactions_24h) chain.tx = d.transactions_24h;
  }catch(e){}
  try{
    const j = await liveFetch('https://mempool.space/api/v1/fees/recommended');
    if(j.fastestFee) chain.fee = j.fastestFee;
  }catch(e){}
  LIVE.chain = chain; LIVE.ts.chain = Date.now();
  liveSaveCache(); liveEmit();
}

/* ---------------- 消息（RSS + 关键词初筛） ---------------- */
const NEWS_FEEDS = [
  { name:'Cointelegraph', url:'https://cointelegraph.com/rss' },
  { name:'CoinDesk', url:'https://www.coindesk.com/arc/outboundfeeds/rss/' },
];
const NEWS_LEVEL_WORDS = {
  S: ['federal reserve','fomc','cpi','rate cut','rate hike','sec sues','sec charges','ban','banned','hack','exploit','bankrupt','insolven','halts withdrawals','emergency','war','default','tariff'],
  A: ['etf','regulation','lawsuit','settlement','liquidat','whale','treasury','blackrock','microstrategy','approval','rejected','outflow','inflow','suspend','halt','delist','probe','investigat','reserve','stablecoin'],
  B: ['partnership','launch','listing','integration','funding','raise','acquisition','mainnet','airdrop','staking','layer 2','layer-2','all-time high','record high','valuation','ipo','jumps','surges','rally','plunge','slides','drops'],
};
const NEWS_POS = ['approve','approval','inflow','surge','jump','rally','record','high','buy','adopt','partnership','upgrade','launch','bullish','gain','rise','climb','soar','raise','eye','bet on','expand'];
const NEWS_NEG = ['sue','lawsuit','ban','hack','exploit','outflow','crash','plunge','slide','drop','fall','decline','sink','halt','suspend','liquidat','bearish','fraud','bankrupt','reject','probe','risk'];
function hasWord(text, w){
  const esc = w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  try{
    return new RegExp('\\b' + esc + '(s|es|ed|ing)?\\b', 'i').test(text);
  }catch(e){
    return text.indexOf(w) !== -1;
  }
}
function classifyHeadline(title){
  const t = title.toLowerCase();
  let level = 'C';
  for(const lv of ['S','A','B']){
    if(NEWS_LEVEL_WORDS[lv].some(w => hasWord(t, w))){ level = lv; break; }
  }
  let score = 0;
  NEWS_POS.forEach(w => { if(hasWord(t, w)) score++; });
  NEWS_NEG.forEach(w => { if(hasWord(t, w)) score--; });
  const dir = score > 0 ? 'bull' : score < 0 ? 'bear' : 'neutral';
  return { level, dir };
}
function parseRss(xml, source){
  const doc = new DOMParser().parseFromString(xml, 'text/xml');
  const items = [...doc.querySelectorAll('item')].slice(0, 12);
  return items.map(it => {
    const title = (it.querySelector('title')?.textContent || '').trim();
    const link = (it.querySelector('link')?.textContent || '').trim();
    const date = it.querySelector('pubDate')?.textContent || '';
    return Object.assign({ title, link, source, date: date ? new Date(date).toISOString() : '' }, classifyHeadline(title));
  }).filter(x => x.title && x.link);
}
function liveDelay(ms){ return new Promise(r => setTimeout(r, ms)); }
/* 公共 CORS 代理：并发竞速，谁先返回合法 RSS 用谁 */
function fetchViaProxy(feedUrl){
  const enc = encodeURIComponent(feedUrl);
  const jobs = [
    liveFetch('https://proxy.corsfix.com/?' + feedUrl, { json:false, timeout:9000 }),
    liveFetch('https://api.allorigins.win/raw?url=' + enc, { json:false, timeout:9000 }),
    liveFetch('https://api.allorigins.win/get?url=' + enc, { timeout:9000 }).then(j => (j && j.contents) || ''),
  ];
  return Promise.any(jobs.map(p => p.then(xml => {
    if(!xml || xml.indexOf('<rss') === -1) throw new Error('bad');
    return xml;
  })));
}
async function fetchFeedXml(feed){
  try{
    return await fetchViaProxy(feed.url);
  }catch(e){
    await liveDelay(1200);
    return await fetchViaProxy(feed.url);
  }
}
async function refreshNews(){
  let all = [];
  let ok = false;
  const jobs = NEWS_FEEDS.map(async f => {
    try{
      const xml = await fetchFeedXml(f);
      if(!xml || xml.indexOf('<rss') === -1) return;
      const items = parseRss(xml, f.name);
      if(!items.length) return;
      ok = true;
      all = all.concat(items);
      const seen = new Set();
      LIVE.news = all
        .filter(x => { if(seen.has(x.title)) return false; seen.add(x.title); return true; })
        .sort((a,b) => (b.date || '').localeCompare(a.date || ''))
        .slice(0, 18);
      LIVE.ts.news = Date.now();
      liveSaveCache(); liveEmit();
    }catch(e){ /* 单个源失败忽略 */ }
  });
  await Promise.allSettled(jobs);
  if(!ok){
    window.dispatchEvent(new CustomEvent('live:news-fail'));
  }
}

function fmtMoney(v){
  if(v == null || isNaN(v)) return '—';
  if(v >= 1000) return v.toLocaleString('en-US', { maximumFractionDigits:0 });
  if(v >= 1) return v.toLocaleString('en-US', { minimumFractionDigits:2, maximumFractionDigits:2 });
  return v.toLocaleString('en-US', { maximumFractionDigits:4 });
}
function fmtPct(v){
  if(v == null || isNaN(v)) return '—';
  return (v >= 0 ? '+' : '') + v.toFixed(2) + '%';
}
function timeAgo(iso){
  if(!iso) return '';
  const diff = (Date.now() - new Date(iso).getTime()) / 1000;
  if(diff < 60) return '刚刚';
  if(diff < 3600) return Math.floor(diff/60) + ' 分钟前';
  if(diff < 86400) return Math.floor(diff/3600) + ' 小时前';
  return Math.floor(diff/86400) + ' 天前';
}

let liveStarted = false;
function startLive(opts){
  const o = Object.assign({ prices:true, spark:true, fng:true, chain:true, news:true, interval:15000 }, opts || {});
  liveReadCache();
  liveEmit();
  if(liveStarted) return;
  liveStarted = true;
  const safe = fn => () => fn().catch(() => {});
  if(o.prices) safe(refreshPrices)();
  if(o.spark) safe(refreshSpark)();
  if(o.fng) safe(refreshFng)();
  if(o.chain) safe(refreshChain)();
  if(o.news) safe(refreshNews)();
  setInterval(() => {
    if(document.hidden) return;
    if(o.prices) safe(refreshPrices)();
    if(o.fng) safe(refreshFng)();
  }, o.interval);
  setInterval(() => {
    if(document.hidden) return;
    if(o.spark) safe(refreshSpark)();
  }, 60000);
  setInterval(() => { if(!document.hidden && o.news) safe(refreshNews)(); }, 10 * 60 * 1000);
  setInterval(() => { if(!document.hidden && o.chain) safe(refreshChain)(); }, 120000);
}

if (typeof window !== 'undefined') {
  window.LIVE = LIVE;
  window.startLive = startLive;
  window.refreshNews = refreshNews;
  window.fmtMoney = fmtMoney;
  window.fmtPct = fmtPct;
  window.timeAgo = timeAgo;
}
/* =====================================================================
 * Chain Academy v5 · DeepSeek 客户端
 * Key 只保存在本机 localStorage（键 ca_deepseek），请求直接从浏览器发出。
 * 没有后端、没有中转，也不会上传到本站（本站没有服务器）。
 * ===================================================================== */
'use strict';

const DEEPSEEK_URL = 'https://api.deepseek.com/chat/completions';
const DEEPSEEK_MODEL = 'deepseek-chat';
const AI_KEY = 'deepseek';

function getAIKey(){ return store.get(AI_KEY, ''); }
function setAIKey(k){ store.set(AI_KEY, (k || '').trim()); }
function hasAIKey(){ return !!getAIKey(); }

async function askDeepSeek(prompt, opts){
  const key = getAIKey();
  if(!key) throw new Error('NO_KEY');
  const o = Object.assign({ system:'', temperature:0.4, maxTokens:1800, timeout:90000 }, opts || {});
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), o.timeout);
  const messages = [];
  if(o.system) messages.push({ role:'system', content:o.system });
  messages.push({ role:'user', content:prompt });
  try{
    const res = await fetch(DEEPSEEK_URL, {
      method:'POST',
      headers:{ 'Content-Type':'application/json', 'Authorization':'Bearer ' + key },
      body: JSON.stringify({
        model: DEEPSEEK_MODEL,
        messages,
        temperature: o.temperature,
        max_tokens: o.maxTokens,
        stream: false,
      }),
      signal: ctrl.signal,
    });
    const text = await res.text();
    if(!res.ok){
      let msg = '请求失败（' + res.status + '）';
      try{ const j = JSON.parse(text); msg = j.error?.message || msg; }catch(e){}
      const err = new Error(msg);
      err.status = res.status;
      throw err;
    }
    const j = JSON.parse(text);
    return (j.choices?.[0]?.message?.content || '').trim();
  } finally {
    clearTimeout(timer);
  }
}

if (typeof window !== 'undefined') {
  window.getAIKey = getAIKey;
  window.setAIKey = setAIKey;
  window.hasAIKey = hasAIKey;
  window.askDeepSeek = askDeepSeek;
}
/* =====================================================================
 * Chain Academy v4 · 合成行情图（js/chart.js）
 * 用途：首页 / 课程图谱的视觉母版。全部数据由本地确定性随机数生成，
 *      不是真实行情，不接入任何交易所接口。仅作版面与教学示意。
 * ===================================================================== */
'use strict';

function mulberry32(seed){
  return function(){
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

/* 生成带趋势区间的合成 OHLC */
function synthSeries(n, seed){
  const rnd = mulberry32(seed);
  let price = 100;
  let drift = 0.0004, vol = 0.012, phase = 0;
  const out = [];
  for(let i = 0; i < n; i++){
    if(i % 34 === 0){
      phase = (phase + 1) % 4;
      drift = [0.0016, -0.0022, 0.0006, -0.0009][phase];
      vol = [0.010, 0.017, 0.008, 0.013][phase];
    }
    const open = price;
    const shock = (rnd() - 0.5) * 2;
    const close = open * (1 + drift + shock * vol * 0.55);
    const hi = Math.max(open, close) * (1 + rnd() * vol * 0.5);
    const lo = Math.min(open, close) * (1 - rnd() * vol * 0.5);
    out.push({ o:open, h:hi, l:lo, c:close, v:0.25 + rnd() * 0.75 + Math.abs(close-open)/open*22 });
    price = close;
  }
  return out;
}

function cssVar(name){
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

function initHeroChart(canvas, opts){
  if(!canvas) return;
  const o = Object.assign({ count:72, seed:20260214, showProfile:true, interactive:true }, opts || {});
  const ctx = canvas.getContext('2d');
  const data = synthSeries(o.count, o.seed);
  let W = 0, H = 0, dpr = 1, pad = { t:30, r:o.showProfile?74:18, b:26, l:14 };
  let reveal = 0, raf = null, hover = null, lastTick = 0;

  const priceMin = Math.min(...data.map(d => d.l));
  const priceMax = Math.max(...data.map(d => d.h));
  const padP = (priceMax - priceMin) * 0.14;
  const min = priceMin - padP, max = priceMax + padP;

  const X = i => pad.l + (i / (data.length - 1)) * (W - pad.l - pad.r);
  const Y = p => pad.t + (1 - (p - min) / (max - min)) * (H - pad.t - pad.b);

  function resize(){
    const rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = rect.width; H = rect.height;
    canvas.width = Math.round(W * dpr);
    canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw();
  }

  function draw(){
    const text = cssVar('--txt'), dim = cssVar('--txt-2'), faint = cssVar('--faint');
    const line = cssVar('--line'), lineStrong = cssVar('--line-strong');
    const gold = cssVar('--brand'), pos = cssVar('--pos'), neg = cssVar('--neg');
    const surface = cssVar('--bg-2');
    ctx.clearRect(0, 0, W, H);

    /* 网格 */
    ctx.strokeStyle = line; ctx.lineWidth = 1;
    for(let i = 0; i <= 4; i++){
      const y = pad.t + i * (H - pad.t - pad.b) / 4;
      ctx.beginPath(); ctx.moveTo(pad.l, y + .5); ctx.lineTo(W - pad.r + 8, y + .5); ctx.stroke();
    }
    for(let i = 0; i <= 6; i++){
      const x = pad.l + i * (W - pad.l - pad.r) / 6;
      ctx.beginPath(); ctx.moveTo(x + .5, pad.t); ctx.lineTo(x + .5, H - pad.b); ctx.stroke();
    }

    /* 价格刻度 */
    ctx.font = '10px "JetBrains Mono", ui-monospace, monospace';
    ctx.fillStyle = faint; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
    for(let i = 0; i <= 4; i++){
      const y = pad.t + i * (H - pad.t - pad.b) / 4;
      const p = max - i * (max - min) / 4;
      ctx.fillText(p.toFixed(1), W - pad.r + 14, y);
    }

    const nVis = Math.max(1, Math.floor(data.length * reveal));
    const bw = Math.max(2, (W - pad.l - pad.r) / data.length * 0.62);

    /* 成交量柱（底部，极淡） */
    const maxV = Math.max(...data.map(d => d.v));
    for(let i = 0; i < nVis; i++){
      const d = data[i];
      const h = (d.v / maxV) * 34;
      ctx.fillStyle = (d.c >= d.o ? gold : neg) + '';
      ctx.globalAlpha = 0.10;
      ctx.fillRect(X(i) - bw / 2, H - pad.b - h, bw, h);
      ctx.globalAlpha = 1;
    }

    /* K 线 */
    for(let i = 0; i < nVis; i++){
      const d = data[i], x = X(i), up = d.c >= d.o;
      ctx.strokeStyle = up ? pos : neg;
      ctx.fillStyle = up ? pos : neg;
      ctx.globalAlpha = 0.92;
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(x, Y(d.h)); ctx.lineTo(x, Y(d.l)); ctx.stroke();
      const yTop = Y(Math.max(d.o, d.c)), yBot = Y(Math.min(d.o, d.c));
      ctx.fillRect(x - bw / 2, yTop, bw, Math.max(1.2, yBot - yTop));
      ctx.globalAlpha = 1;
    }

    /* EMA 均线 */
    const ema = [];
    let prev = data[0].c;
    data.forEach((d, i) => { prev = i === 0 ? d.c : prev + (d.c - prev) * 0.16; ema.push(prev); });
    ctx.beginPath();
    for(let i = 0; i < nVis; i++){ const x = X(i), y = Y(ema[i]); i ? ctx.lineTo(x, y) : ctx.moveTo(x, y); }
    ctx.strokeStyle = gold; ctx.lineWidth = 1.6; ctx.lineJoin = 'round'; ctx.stroke();

    /* 支撑/阻力虚线 */
    const sup = Math.min(...data.slice(-24).map(d => d.l));
    const res = Math.max(...data.slice(-24).map(d => d.h));
    [[sup, '支撑 · SUPPORT'], [res, '阻力 · RESISTANCE']].forEach(([p, label], idx) => {
      ctx.save();
      ctx.setLineDash([4, 5]);
      ctx.strokeStyle = idx ? neg : pos;
      ctx.globalAlpha = .5;
      ctx.beginPath(); ctx.moveTo(pad.l, Y(p)); ctx.lineTo(W - pad.r, Y(p)); ctx.stroke();
      ctx.restore();
      ctx.font = '9px "JetBrains Mono", monospace';
      ctx.fillStyle = idx ? neg : pos;
      ctx.globalAlpha = .8;
      ctx.textAlign = 'left';
      ctx.fillText(label, pad.l + 2, Y(p) - 8);
      ctx.globalAlpha = 1;
    });

    /* 右侧成交量分布 / 流动性 */
    if(o.showProfile){
      const buckets = 14, top = pad.t, bottom = H - pad.b;
      const hist = new Array(buckets).fill(0);
      data.forEach(d => {
        const mid = (d.h + d.l) / 2;
        const k = Math.min(buckets - 1, Math.max(0, Math.floor((mid - min) / (max - min) * buckets)));
        hist[k] += d.v;
      });
      const maxH = Math.max(...hist);
      const x0 = W - pad.r + 6;
      for(let k = 0; k < buckets; k++){
        const y = bottom - (k + 1) * (bottom - top) / buckets;
        const w = (hist[k] / maxH) * (pad.r - 26);
        ctx.fillStyle = gold;
        ctx.globalAlpha = 0.18 + 0.34 * (hist[k] / maxH);
        ctx.fillRect(x0, y + 1, w, (bottom - top) / buckets - 2);
        ctx.globalAlpha = 1;
      }
      ctx.save();
      ctx.translate(W - 8, top + 46);
      ctx.rotate(Math.PI / 2);
      ctx.font = '9px "JetBrains Mono", monospace';
      ctx.fillStyle = faint; ctx.textAlign = 'left';
      ctx.fillText('VOLUME PROFILE', 0, 0);
      ctx.restore();
    }

    /* 最新价 */
    const last = data[nVis - 1];
    const lx = X(nVis - 1), ly = Y(last.c);
    ctx.strokeStyle = gold; ctx.globalAlpha = .35; ctx.setLineDash([2,4]);
    ctx.beginPath(); ctx.moveTo(lx, ly); ctx.lineTo(W - pad.r, ly); ctx.stroke();
    ctx.setLineDash([]); ctx.globalAlpha = 1;
    ctx.fillStyle = gold;
    ctx.fillRect(lx - 2.5, ly - 2.5, 5, 5);

    /* 悬停十字线 */
    if(o.interactive && hover != null && hover >= 0 && hover < data.length){
      const x = X(hover), d = data[hover];
      ctx.strokeStyle = lineStrong; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(x + .5, pad.t); ctx.lineTo(x + .5, H - pad.b); ctx.stroke();
      const y = Y(d.c);
      ctx.beginPath(); ctx.moveTo(pad.l, y + .5); ctx.lineTo(W - pad.r, y + .5); ctx.stroke();
      const label = `${d.c.toFixed(2)}  O ${d.o.toFixed(2)}  H ${d.h.toFixed(2)}  L ${d.l.toFixed(2)}`;
      ctx.font = '10px "JetBrains Mono", monospace';
      const tw = ctx.measureText(label).width + 16;
      ctx.fillStyle = surface;
      ctx.fillRect(pad.l, 4, tw, 18);
      ctx.strokeStyle = lineStrong; ctx.strokeRect(pad.l + .5, 4.5, tw, 18);
      ctx.fillStyle = text; ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
      ctx.fillText(label, pad.l + 8, 13);
    }
  }

  /* 首次进入视口后再播放展开动画 */
  let started = false;
  function play(){
    if(started) return;
    started = true;
    const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
    if(reduce){ reveal = 1; draw(); return; }
    const t0 = performance.now();
    (function step(now){
      const p = Math.min(1, (now - t0) / 1250);
      reveal = 1 - Math.pow(1 - p, 3);
      draw();
      if(p < 1) raf = requestAnimationFrame(step);
      else tickLoop();
    })(t0);
  }
  function tickLoop(){
    /* 极轻的“活着”的感觉：每 2.6 秒轻推最后一根 K 线 */
    setInterval(() => {
      if(document.hidden) return;
      const d = data[data.length - 1];
      d.c *= 1 + (Math.random() - 0.5) * 0.0012;
      d.h = Math.max(d.h, d.c); d.l = Math.min(d.l, d.c);
      draw();
    }, 2600);
  }

  if('IntersectionObserver' in window){
    const ob = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ play(); ob.disconnect(); } }), { threshold:.2 });
    ob.observe(canvas);
  } else play();

  new ResizeObserver(() => resize()).observe(canvas);
  resize();

  if(o.interactive){
    canvas.addEventListener('mousemove', e => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const i = Math.round((x - pad.l) / (W - pad.l - pad.r) * (data.length - 1));
      hover = Math.max(0, Math.min(data.length - 1, i));
      draw();
    });
    canvas.addEventListener('mouseleave', () => { hover = null; draw(); });
  }
}

/* 迷你走势线（用于卡片与索引行） */
function initSpark(canvas, seed, color){
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const data = synthSeries(40, seed);
  function draw(){
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = rect.width * dpr; canvas.height = rect.height * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const W = rect.width, H = rect.height;
    const vals = data.map(d => d.c);
    const min = Math.min(...vals), max = Math.max(...vals);
    ctx.clearRect(0, 0, W, H);
    ctx.beginPath();
    vals.forEach((v, i) => {
      const x = i / (vals.length - 1) * W;
      const y = H - ((v - min) / (max - min || 1)) * (H - 4) - 2;
      i ? ctx.lineTo(x, y) : ctx.moveTo(x, y);
    });
    ctx.strokeStyle = color || cssVar('--brand');
    ctx.lineWidth = 1.2; ctx.globalAlpha = .85; ctx.stroke();
    ctx.globalAlpha = 1;
  }
  draw();
  new ResizeObserver(draw).observe(canvas);
}
/* =====================================================================
 * Chain Academy v4 · 站点外壳（js/ui.js）
 * 依赖：js/content.js（STAGES / EXAMS）、js/storage.js（progress / store）
 * 职责：主题、导航与页脚渲染、⌘K 搜索、滚动动效、阅读进度条、弹层与提示
 * ===================================================================== */
'use strict';

/* ---------------- 图标 ---------------- */
const ICON = {
  search:'<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  sun:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>',
  moon:'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.6 6.6 0 0 0 9.8 9.8Z"/></svg>',
  arrow:'<svg class="arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 12h15M13 6l6 6-6 6"/></svg>',
  menu:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  close:'<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  lock:'<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="9" rx="1"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/></svg>',
  check:'<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><path d="m5 13 4 4L19 7"/></svg>',
  dot:'<svg width="7" height="7" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3" fill="currentColor"/></svg>',
};

/* ---------------- 导航条目 ---------------- */
const NAV_ITEMS = [
  { key:'home',      href:'index.html',     zh:'控制台', en:'Console' },
  { key:'course',    href:'course.html',    zh:'课程',   en:'Course' },
  { key:'news',      href:'news.html',      zh:'消息面', en:'Signals' },
  { key:'discipline',href:'discipline.html',zh:'纪律',   en:'Discipline' },
  { key:'selfcheck', href:'selfcheck.html', zh:'自检',   en:'Self-check' },
  { key:'tools',     href:'tools.html',     zh:'实验室', en:'Lab' },
];

const NAV_MORE = [
  { key:'progress', href:'progress.html', zh:'学习进度' },
  { key:'errors',   href:'errors.html',   zh:'错题复盘' },
  { key:'master',   href:'master.html',   zh:'顶级交易思维' },
  { key:'lab',      href:'lab.html',      zh:'复盘工作台' },
  { key:'feedback', href:'feedback.html', zh:'提问与反馈' },
  { key:'intro',    href:'index.html?intro=1', zh:'重播开场引导' },
];

/* ---------------- 主题 ---------------- */
function currentTheme(){ return document.documentElement.getAttribute('data-theme') || 'obsidian'; }
function applyTheme(name, announce){
  document.documentElement.setAttribute('data-theme', name);
  store.set('theme', name);
  document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
    btn.innerHTML = name === 'paper' ? ICON.moon : ICON.sun;
    btn.setAttribute('aria-label', name === 'paper' ? '切换到暗色主题' : '切换到纸本主题');
  });
  const meta = document.querySelector('meta[name="theme-color"]');
  if(meta) meta.setAttribute('content', name === 'paper' ? '#F3EFE6' : '#08090B');
  if(announce) toast(name === 'paper' ? '纸本主题 · 适合长文阅读' : '黑曜石主题');
}
function initTheme(){
  const saved = store.get('theme', null);
  applyTheme(saved || 'obsidian', false);
}

/* ---------------- 页头 ---------------- */
function renderChrome(activeKey){
  initTheme();
  const navMount = document.getElementById('siteNav');
  if(navMount){
    navMount.outerHTML = `
    <header class="site-nav" id="siteNav">
      <div class="nav-inner">
        <a href="index.html" class="brand" aria-label="Chain Academy 首页">
          <span class="brand__mark" aria-hidden="true"></span>
          <span class="brand__name">Chain <b>Academy</b></span>
          <span class="brand__ver">V5</span>
        </a>
        <nav class="nav-links" aria-label="主导航">
          ${NAV_ITEMS.map(n => `<a class="navlink ${activeKey===n.key?'active':''}" href="${n.href}">${n.zh}</a>`).join('')}
          <div class="nav-more">
            <button class="navlink nav-more__btn ${['progress','errors','master','lab','feedback'].includes(activeKey)?'active':''}" aria-haspopup="true" aria-expanded="false">更多</button>
            <div class="nav-more__menu" role="menu">
              ${NAV_MORE.map(n => `<a role="menuitem" href="${n.href}">${n.zh}</a>`).join('')}
            </div>
          </div>
        </nav>
        <div class="nav-actions">
          <button class="search-trigger" data-cmdk-open aria-label="搜索章节">
            ${ICON.search}<span>搜索</span><kbd class="kbd">⌘K</kbd>
          </button>
          <button class="icon-btn" data-theme-toggle aria-label="切换主题"></button>
          <button class="icon-btn nav-toggle" data-menu-toggle aria-label="菜单">${ICON.menu}</button>
          <a href="course.html" class="btn btn--primary btn--sm" data-continue>继续学习 ${ICON.arrow}</a>
        </div>
      </div>
    </header>
    <div class="mobile-menu" id="mobileMenu" hidden>
      <div class="mobile-menu__inner">
        ${NAV_ITEMS.map(n => `<a href="${n.href}" class="mobile-menu__link">${n.zh}<span>${n.en}</span></a>`).join('')}
        ${NAV_MORE.map(n => `<a href="${n.href}" class="mobile-menu__link" style="font-size:1.15rem;">${n.zh}<span>MORE</span></a>`).join('')}
      </div>
    </div>`;
  }

  const footMount = document.getElementById('siteFooter');
  if(footMount){
    footMount.outerHTML = `
    <footer class="site-footer">
      <div class="wrap">
        <div class="footer-grid">
          <div>
            <a href="index.html" class="brand" style="margin:0 0 18px;">
              <span class="brand__mark" aria-hidden="true"></span>
              <span class="brand__name">Chain <b>Academy</b></span>
            </a>
            <p class="footer-p" style="max-width:34ch;">一个用于理解区块链与市场结构的研究型学习站。内容为公开知识的整理与教学表达，不提供任何交易服务。</p>
            <p class="footer-p" style="margin-top:14px;color:var(--warn);">虚拟货币相关业务活动在中国境内属于非法金融活动，不受法律保护。本站仅用于技术理论学习。</p>
          </div>
          <div>
            <div class="footer-h">课程</div>
            <a class="footer-a" href="course.html">课程与技术库</a>
            <a class="footer-a" href="master.html">顶级交易思维</a>
            <a class="footer-a" href="news.html">消息面</a>
            <a class="footer-a" href="tools.html">交易数学实验室</a>
          </div>
          <div>
            <div class="footer-h">工具</div>
            <a class="footer-a" href="discipline.html">交易纪律</a>
            <a class="footer-a" href="selfcheck.html">交易自检</a>
            <a class="footer-a" href="progress.html">学习进度</a>
            <a class="footer-a" href="errors.html">错题复盘</a>
            <a class="footer-a" href="lab.html">复盘工作台</a>
          </div>
          <div>
            <div class="footer-h">免责声明</div>
            <p class="footer-p">本站内容仅供区块链技术理论学习与自测，不构成投资建议、要约或推荐。文中任何策略、公式与历史案例均不保证未来有效。请遵守所在地法律法规。</p>
          </div>
        </div>
        <div class="wordmark" aria-hidden="true">CHAIN ACADEMY</div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} CHAIN ACADEMY · 仅用于理论学习</span>
          <span>DESIGNED IN OBSIDIAN &amp; PAPER · V4.0</span>
        </div>
      </div>
    </footer>`;
  }

  /* 主题图标（导航刚插入，需要补画一次） */
  applyTheme(currentTheme(), false);

  /* 主题切换 */
  document.querySelectorAll('[data-theme-toggle]').forEach(btn => {
    btn.addEventListener('click', () => applyTheme(currentTheme() === 'paper' ? 'obsidian' : 'paper', true));
  });

  /* 更多菜单 */
  document.querySelectorAll('.nav-more').forEach(wrap => {
    const btn = wrap.querySelector('.nav-more__btn');
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const open = wrap.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', () => { wrap.classList.remove('open'); btn.setAttribute('aria-expanded','false'); });
  });

  /* 继续学习 */
  document.querySelectorAll('[data-continue]').forEach(el => {
    el.addEventListener('click', e => {
      const last = progress.lastStudy;
      if(last && typeof isUnlocked === 'function' && isUnlocked(last)){
        e.preventDefault();
        location.href = 'chapter.html?id=' + encodeURIComponent(last);
      }
    });
  });

  /* 移动端菜单 */
  const mt = document.querySelector('[data-menu-toggle]');
  const mm = document.getElementById('mobileMenu');
  if(mt && mm){
    mt.addEventListener('click', () => {
      const open = mm.hasAttribute('hidden');
      if(open){ mm.removeAttribute('hidden'); mt.innerHTML = ICON.close; document.body.style.overflow='hidden'; }
      else { mm.setAttribute('hidden',''); mt.innerHTML = ICON.menu; document.body.style.overflow=''; }
    });
  }

  initNavScroll();
  initCmdk();
  initReveals();
  syncContinueLabel();
}

function syncContinueLabel(){
  const last = progress.lastStudy;
  if(!last) return;
  const o = (typeof ORDER !== 'undefined') ? ORDER.find(x => x.ch.id === last) : null;
  if(!o) return;
  const short = o.ch.title.replace(/^第 \d+ 节：/,'');
  const label = short.length > 9 ? short.slice(0, 9) + '…' : short;
  document.querySelectorAll('[data-continue]').forEach(el => {
    el.innerHTML = `继续：${label} ${ICON.arrow}`;
  });
}

/* ---------------- 导航滚动态 ---------------- */
function initNavScroll(){
  const nav = document.querySelector('.site-nav');
  if(!nav) return;
  const onScroll = () => nav.classList.toggle('solid', (window.scrollY || 0) > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive:true });
}

/* ---------------- 进入视口 ---------------- */
let io, revealBound = false;
function initReveals(){
  if(!('IntersectionObserver' in window)){
    document.querySelectorAll('.reveal').forEach(n => n.classList.add('in'));
    return;
  }
  io = io || new IntersectionObserver(entries => {
    entries.forEach(en => {
      if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
    });
  }, { threshold:.08, rootMargin:'0px 0px -8% 0px' });
  document.querySelectorAll('.reveal:not(.in)').forEach(n => io.observe(n));
  /* 兜底：程序化跳转、锚点直达、快速滚动时，IO 可能漏掉中间区块 */
  if(!revealBound){
    revealBound = true;
    let queued = false;
    const sweep = () => {
      queued = false;
      const limit = window.innerHeight * 0.98;
      document.querySelectorAll('.reveal:not(.in)').forEach(n => {
        if(n.getBoundingClientRect().top < limit) n.classList.add('in');
      });
    };
    const onScroll = () => { if(!queued){ queued = true; requestAnimationFrame(sweep); } };
    window.addEventListener('scroll', onScroll, { passive:true });
    window.addEventListener('resize', onScroll);
    window.addEventListener('hashchange', () => setTimeout(sweep, 260));
    setTimeout(sweep, 320);
  }
}
function observeNew(root){
  if(!io) return;
  (root || document).querySelectorAll('.reveal:not(.in)').forEach(n => io.observe(n));
}

/* ---------------- ⌘K 搜索 ---------------- */
let cmdkIndex = 0, cmdkResults = [];
function chapterEntries(){
  if(typeof STAGES === 'undefined') return [];
  return STAGES.flatMap(s => s.chapters.map(c => ({
    id:c.id, title:c.title, stage:s.title, num:s.num, dur:c.dur, href:'chapter.html?id=' + encodeURIComponent(c.id),
  })));
}
function initCmdk(){
  if(document.getElementById('cmdk')) return;
  const el = document.createElement('div');
  el.id = 'cmdk'; el.className = 'cmdk'; el.setAttribute('role','dialog'); el.setAttribute('aria-modal','true');
  el.innerHTML = `
    <div class="cmdk__box">
      <input class="cmdk__input" id="cmdkInput" placeholder="搜索章节、阶段或工具…" autocomplete="off" spellcheck="false">
      <div class="cmdk__list" id="cmdkList"></div>
      <div class="cmdk__foot"><span>↑ ↓ 选择</span><span>↵ 打开</span><span>ESC 关闭</span></div>
    </div>`;
  document.body.appendChild(el);

  const input = el.querySelector('#cmdkInput');
  const list = el.querySelector('#cmdkList');
  const staticPages = [
    { k:'页面', title:'控制台', href:'index.html' },
    { k:'页面', title:'课程与知识库', href:'course.html' },
    { k:'页面', title:'技术知识库', href:'course.html#kb' },
    { k:'页面', title:'策略库', href:'course.html#strategy' },
    { k:'页面', title:'消息面', href:'news.html' },
    { k:'页面', title:'交易纪律', href:'discipline.html' },
    { k:'页面', title:'交易自检', href:'selfcheck.html' },
    { k:'页面', title:'重播开场引导', href:'index.html?intro=1' },
    { k:'页面', title:'交易数学实验室', href:'tools.html' },
    { k:'页面', title:'顶级交易思维', href:'master.html' },
    { k:'页面', title:'学习进度', href:'progress.html' },
    { k:'页面', title:'错题复盘', href:'errors.html' },
  ];
  function knowledgeEntries(){
    if(typeof KNOWLEDGE === 'undefined') return [];
    return KNOWLEDGE.map(k => ({ k:'知识', title:k.name, sub:k.en, href:'course.html#kb' }));
  }
  function eventEntries(){
    if(typeof EVENT_LIBRARY === 'undefined') return [];
    return EVENT_LIBRARY.map(e => ({ k:'事件', title:e.name, sub:e.level + ' 级', href:'news.html#' + e.id }));
  }
  const all = () => [
    ...chapterEntries().map(c => ({ k:c.num + ' 阶段', title:c.title, sub:c.stage, href:c.href })),
    ...knowledgeEntries(), ...eventEntries(), ...staticPages,
  ];

  function render(q){
    const kw = q.trim().toLowerCase();
    const pool = all();
    cmdkResults = !kw ? pool.slice(0, 9) : pool.filter(x => (x.title + ' ' + (x.sub||'')).toLowerCase().includes(kw)).slice(0, 40);
    cmdkIndex = 0;
    if(!cmdkResults.length){ list.innerHTML = '<div class="cmdk__empty">没有匹配结果</div>'; return; }
    list.innerHTML = cmdkResults.map((r,i) => `
      <div class="cmdk__item ${i===0?'on':''}" data-i="${i}">
        <span class="k">${esc(r.k)}</span>
        <span style="flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${hl(r.title, kw)}</span>
        ${r.sub ? `<span class="micro" style="letter-spacing:.08em;">${esc(r.sub)}</span>` : ''}
      </div>`).join('');
    [...list.children].forEach(node => {
      node.addEventListener('mouseenter', () => setActive(+node.dataset.i));
      node.addEventListener('click', () => go(+node.dataset.i));
    });
  }
  function hl(text, kw){
    if(!kw) return esc(text);
    const i = text.toLowerCase().indexOf(kw);
    if(i < 0) return esc(text);
    return esc(text.slice(0,i)) + '<mark>' + esc(text.slice(i, i+kw.length)) + '</mark>' + esc(text.slice(i+kw.length));
  }
  function setActive(i){
    cmdkIndex = i;
    [...list.children].forEach((n,idx) => n.classList.toggle('on', idx===i));
    const node = list.children[i];
    if(node && node.scrollIntoView) node.scrollIntoView({ block:'nearest' });
  }
  function go(i){
    const r = cmdkResults[i];
    if(r) location.href = r.href;
  }
  function open(){ el.classList.add('open'); input.value=''; render(''); setTimeout(()=>input.focus(),30); }
  function close(){ el.classList.remove('open'); }

  document.querySelectorAll('[data-cmdk-open]').forEach(b => b.addEventListener('click', open));
  document.addEventListener('keydown', e => {
    if((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k'){ e.preventDefault(); el.classList.contains('open') ? close() : open(); }
    if(e.key === 'Escape') close();
    if(!el.classList.contains('open')) return;
    if(e.key === 'ArrowDown'){ e.preventDefault(); setActive(Math.min(cmdkIndex+1, cmdkResults.length-1)); }
    if(e.key === 'ArrowUp'){ e.preventDefault(); setActive(Math.max(cmdkIndex-1, 0)); }
    if(e.key === 'Enter'){ e.preventDefault(); go(cmdkIndex); }
  });
  input.addEventListener('input', () => render(input.value));
  el.addEventListener('click', e => { if(e.target === el) close(); });
}

/* ---------------- 阅读进度条 ---------------- */
function initReadProgress(target){
  const bar = document.createElement('div');
  bar.className = 'read-progress';
  document.body.appendChild(bar);
  const onScroll = () => {
    const rect = target.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    const done = Math.min(1, Math.max(0, -rect.top / Math.max(total, 1)));
    bar.style.width = (done * 100).toFixed(2) + '%';
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive:true });
  window.addEventListener('resize', onScroll);
}

/* ---------------- Toast / Modal ---------------- */
let toastTimer;
function toast(msg){
  let tt = document.getElementById('toast');
  if(!tt){ tt = document.createElement('div'); tt.id = 'toast'; document.body.appendChild(tt); }
  tt.textContent = msg;
  requestAnimationFrame(() => tt.classList.add('show'));
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => tt.classList.remove('show'), 2800);
}
function openModal(html, label){
  let mask = document.getElementById('globalModal');
  if(!mask){
    mask = document.createElement('div');
    mask.id = 'globalModal'; mask.className = 'modal-mask';
    mask.innerHTML = '<div class="modal-box" style="padding:clamp(22px,4vw,40px)" id="globalModalBody"></div>';
    document.body.appendChild(mask);
    mask.addEventListener('click', e => { if(e.target === mask) closeModal(); });
  }
  document.getElementById('globalModalBody').innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:16px;margin-bottom:20px;">
      <div class="micro" style="color:var(--brand);">${label || 'RISK NOTICE'}</div>
      <button class="icon-btn" onclick="closeModal()" aria-label="关闭">${ICON.close}</button>
    </div>` + html;
  mask.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(){
  const mask = document.getElementById('globalModal');
  if(mask) mask.classList.remove('open');
  if(!document.getElementById('cmdk') || !document.getElementById('cmdk').classList.contains('open')) document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if(e.key === 'Escape') closeModal(); });

/* ---------------- 数字滚动 ---------------- */
function countUp(node, to, opts){
  const o = Object.assign({ dur:1100, decimals:0 }, opts || {});
  const from = 0, start = performance.now();
  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
  if(reduce){ node.textContent = to.toLocaleString('en-US',{minimumFractionDigits:o.decimals,maximumFractionDigits:o.decimals}); return; }
  function tick(now){
    const p = Math.min(1, (now-start)/o.dur);
    const e = 1 - Math.pow(1-p, 3);
    node.textContent = (from + (to-from)*e).toLocaleString('en-US',{minimumFractionDigits:o.decimals,maximumFractionDigits:o.decimals});
    if(p < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ---------------- 启动 ---------------- */
document.addEventListener('DOMContentLoaded', () => {
  initReveals();
  countUpNodes();
});
function countUpNodes(){
  document.querySelectorAll('[data-count]').forEach(n => {
    const v = parseFloat(n.dataset.count);
    const d = parseInt(n.dataset.decimals || '0', 10);
    if(!isNaN(v)) countUp(n, v, { decimals:d });
  });
}

/* ---------------- 极简 Markdown 渲染（仅用于 AI 回复） ---------------- */
function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}
function mdLite(md){
  if(!md) return '';
  let html = escapeHtml(md);
  html = html.replace(/^### (.*)$/gm, '<h3>$1</h3>')
             .replace(/^## (.*)$/gm, '<h2>$1</h2>')
             .replace(/^# (.*)$/gm, '<h2>$1</h2>')
             .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
             .replace(/`([^`]+)`/g, '<code>$1</code>');
  const lines = html.split('\n');
  const out = [];
  let list = null;
  const flush = () => { if(list){ out.push(`<${list}>${buf.join('')}</${list}>`); list = null; } };
  let buf = [];
  for(const raw of lines){
    const line = raw.trim();
    if(!line){ flush(); continue; }
    const m = line.match(/^[-*]\s+(.*)$/);
    const mo = line.match(/^\d+[.)]\s+(.*)$/);
    if(m){ if(list !== 'ul'){ flush(); list = 'ul'; buf = []; } buf.push(`<li>${m[1]}</li>`); continue; }
    if(mo){ if(list !== 'ol'){ flush(); list = 'ol'; buf = []; } buf.push(`<li>${mo[1]}</li>`); continue; }
    flush();
    if(/^<h[23]>/.test(line)) out.push(line);
    else out.push(`<p>${line}</p>`);
  }
  flush();
  return out.join('');
}
