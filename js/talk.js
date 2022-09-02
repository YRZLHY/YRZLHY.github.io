new TypeIt("#tqyxhj", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("wuli 海英，")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("这是我陪你度过的第二个生日！")
    .pause(3000)
	 .delete(null, {
        delay: 500
    })
	.type("嘿嘿，为此我感到十分荣幸...")
    .pause(3000)
    .go();

new TypeIt('#talkToXHJ', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();