const DEV = true;

/*
   ===== PATHS =====
*/

const IMAGE_PATH = "./img/";
const JSON_PATH = "./json/"; // https://raw.githubusercontent.com/AndyBlocker/3k-tiny-game/main/json/

// for local debug
// const IMAGE_PATH = " https://raw.githubusercontent.com/AndyBlocker/3k-tiny-game/main/img/";
// const JSON_PATH = " https://raw.githubusercontent.com/AndyBlocker/3k-tiny-game/main/json/";

/* 
    ===== TUNABLES =====
*/
const SCP_COLOR = "#FF9D95";
const PROPS_COLOR = "#CCE9FF";
const EVENT_COLOR = "#CFB9FF";
const BOSS_COLOR = "#FFE4CC";
const CLINICAL_COLOR = "#BBBBBB";
const DEFAULT_CLINICAL_VAGUE_DESC = "该异常的性质不明。";
const DEFAULT_CONTINUE_TEXT = "前往下一事件";

/* 
    ===== VARIABLES =====
*/

const cardContainer = document.querySelector('.card-container');
const lootContainer = document.getElementById('loots');
const hintText1 = document.getElementById('hintText1');
const hintText2 = document.getElementById('hintText2');

var maxCardsToShow = 4;

const attributesCommon = [
    "description", "descriptionNoJ", "descriptionNoL", "descriptionNoJL"
];
const attributesEvent = [
    "type", "hintText", "getCards", "loseCards", "correctPrompt", "easterEggPrompt", "nextEvent", "choices", "buttonPrompt", "specialDescription"
];
const attributesCard = [
    "name", "img"
];
const DATA_TYPES = {
    Card: 0,
    Event: 1,
    __Count: 2,
}

/* 
    ===== GAME STATUS =====
*/
let currentEventId = "0";
let currentStartIndex = 0;
let deck = [];
let branch = {
    j: false, // J线完成情况
    d: false, // 梦线完成情况
    l: false, // 爱线完成情况
    m: false  // 钱线完成情况
};
let _lootToPick = 0;