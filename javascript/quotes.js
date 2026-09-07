const quotes = [
    {
        quote: "언제나 현재에 집중할 수 있다면 행복할 것이다.",
        author: "파울로 코엘료",
    },
    {
        quote: "삶이 있는 한 희망은 있다.",
        author: "키케로",
    },
    {
        quote: "그대의 하루 하루를 그대의 마지막 날이라고 생각하라.",
        author: "호라티우스",
    },
    {
        quote: "용기 있는 자로 살아라, 운이 따라주지 않는다면 용기 있는 가슴으로 불행에 맞서라",
        author: "키케로"
    },
    {
        quote: "내 비장의 무기는 아직 손 안에 있다. 그것은 희망이다.",
        author: "나폴레옹"
    },
    {
        quote: "인생을 다시 산다면 다음 번에는 더 많은 실수를 저지르리라.",
        author: "나딘 스테어",
    },
    {
        quote: "재산을 잃은 사람은 많이 잃은 것이고, 친구를 잃은 사람은 더 많이 잃은 것이며, 용기를 잃은 사람은 모든 것을 잃은 것이다.",
        author: "세르반테스"
    },
    {
        quote: "당신의 미래는 당신이 만든다.",
        author: "파블로 피카소"
    },
    {
        quote: "당신이 할 수 있다고 믿든, 할 수 없다고 믿든, 당신이 믿는 대로 될 것이다.",
        author: "헨리 포드"
    },
    {
        quote: "산에 오르는 것을 두려워하는 자는 평생 골짜기 사이에 갇혀 살게 된다.",
        author: "아부 알카심 알샤비"
    },
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child'); 

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;