var allEventsBackup = {
    "434":
    {
        "type": "input",
        "description": "This is a description of event 434.",
        "descriptionNoJ": "event 434无J描述。",
        "descriptionNoM": "你没有钱啦！但是没关系，因为你也没有输入框了！",
        "descriptionNoJM": "event 434无钱无J描述。",
        "hintText": "Correct input: 1 or testCard, easter egg input: 2",
        "getCards": ["testCard", "100", "101", "102"],
        "correctPrompt": ["testCard", "1"],
        "easterEggPrompt": {
            "2": "WOW! YOU TYPED THE EASTER EGG!!"
        },
        "nextEvent": "sample-choice"
    },
    "sample-choice":
    {
        "type": "output",
        "description": "This event has two choices",
        "choices": [
            {
                "buttonPrompt": "Go back to 434",
                "nextEvent": "434"
            },
            {
                "buttonPrompt": "Go to next event",
                "nextEvent": "1"
            }
        ]
    },
    "1":
    {
        "type": "output",
        "description": "该事件在无爱J时会有特殊描述。在持有卡牌111时也会有特殊描述（用debug区域加后刷新一下）",
        "specialDescription": true,
        "buttonPrompt": "Go back to 434",
        "nextEvent": "434"
    },
    "0":
    {
        "type": "output",
        "description": "你握着手中薄薄的一片钱包。3000块钱，或者说，3000个‘单位’的金钱，是以什么形式存放在里面的？硬币、纸币，或者干脆是一张信用卡、一个二维码？你*第一次*意识到这件事：没有人和你谈过找零、刷卡或者扫码，因为那些都不重要。 \n\n这就是价值的本质：一个数字，而SCP列表则是一张价目单。你们基金会当然不会把任何一个异常“出售”出去，但他——你手里的那个钱包，能让你们去做这件事。夸张一点来说，如果你们那些埋在加密下的001号异常是某种有形的物品，那把至今为止的二十八个一起卖掉，也只不过抵上一颗月球模型（SCP-CN-1028 晒月亮）的一个零头。\n\n紧张了吗？没关系，你已经凑出了购买它自身——SCP-CN-3000的“价值”。你拥有他，他自然向你展示性质。接下来要收容他、或者做些别的什么，都随你的便了。不过我在这里向你解释这些，纯粹是因为这孩子不会说话而已，不代表我会回答你别的什么问题。\n\n顺带一提，他是我们的游戏的重要构成，如果你收容了它，那么这个游戏会变成什么样……嗯，大概会是一个很无趣的样子吧。\n\n那么，在下一个家具塔的顶端再见。",
        "hintText": "Correct input: 1000",
        "correctPrompt": "1000",
        "nextEvent": "1000"
    },
    "1000":
    {
        "type": "input",
        "description": "这是事件1000，你会在此获得一张一笔兔。这个事件是用来展示获得卡片和一笔兔的立绘的。点击按钮可以获得一笔兔，然后输入1000进入下一个事件。",
        "hintText": "输入1000",
        "correctPrompt": "1000",
        "getCards": ["585"],
        "nextEvent": "2000"
    },
    "2000":
    {
        "type": "input",
        "description": "这是事件2000，你会在此失去一笔兔。这个事件是用来展示失去卡片的。输入1000进入下一个事件。",
        "hintText": "输入1000",
        "correctPrompt": "1000",
        "loseCards": ["585"],
        "nextEvent": "3000"
    },
    "3000":
    {
        "type": "input",
        "description": "结束了，但仍然会显示一笔兔。随便输入些什么也许会进入其他的事件。理论上这里应该结束了，但还不知道游戏结束的时候界面是什么样子的。",
        "hintText": "no hints.",
        "correctPrompt": "434",
        "getCards": ["1", "2", "3", "585"],
        "nextEvent": "434"
    },
}