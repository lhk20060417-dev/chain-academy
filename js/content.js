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
