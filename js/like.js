$(document).ready(function() {
    // 音乐暂停
    var musci = $(".musics")[0];
    musci.pause();
    // var musci = $(".musics")[0];
    // if (musci.play) {
    //     // musci.play();
    //     $('.mmuph').addClass('mmuphh')
    //     $('.pppp').removeClass('qq')
    // } else {
    //     // musci.pause();
    //     $('.mmuph').removeClass('mmuphh')
    //     $('.pppp').addClass('qq')
    //         // $("# $('.musics')_btn").attr("src", "pause.gif");
    // }
    // 控制音乐
    $(document).on('click', '.mmuph', function() {
        // $('.mmuph').toggleClass('mmuphh')
        var musci = $(".musics")[0];

        // musci.play()
        if (musci.paused) {
            musci.play();
            $('.mmuph').addClass('mmuphh')
            $('.pppp').removeClass('qq')
                // $("# $('.musics')_btn").attr("src", "play.gif");
        } else {
            musci.pause();
            $('.mmuph').removeClass('mmuphh')
            $('.pppp').addClass('qq')
                // $("# $('.musics')_btn").attr("src", "pause.gif");
        }
        // if ( musci.paly) {
        //      musci.pasuse();
        //     // $("# $('.musics')_btn").attr("src", "play.gif");
        // } else {
        //      musci.play();
        //     // $("# $('.musics')_btn").attr("src", "pause.gif");
        // }
    })
    $(document).on('click', '.start', function() {
        musci.play();
        for (var b = 1; b < 8; b++) {
            if (b % 2 == 0) {
                $('.container').animate({ left: -10 + "%" }, 1000);
            } else if (b % 2 == 1) {
                if (b == 7) {
                    $('.container').animate({ left: -100 + "%" }, 100);
                    $('.containerTwo').fadeIn(3000);
                } else {
                    $('.container').animate({ left: -60 + "%" }, 200);
                }
            }
        }
    })
    var b = 1;
    $(document).on('click', '.containerTwo', function() {
        // 
        // $('.sure').fadeIn("fast");
        // 
        // $('.word').text('请你滚~')


        if (b == 1) {
            $('.word').text("在点一下");
        }
        if (b == 2) {
            $('.word').text("真的是最后一下");
        }
        if (b == 3) {
            $('.word').text("哈哈哈，接下来一直慢慢点屏幕就好了");
        }
        if (b == 4) {
            $('.word').hide();
            $('.photoone').fadeIn("slow");
        }
        if (b == 5) {
            $('.displayNone .aaaaa').fadeIn("slow");
        }
        if (b == 7) {
            $('.displayNone .gggg').fadeIn("slow");
        }
        if (b == 8) {
            $('.displayNone i').fadeIn("slow");
        }
        if (b == 9) {
            $('.displayNone div').fadeIn("slow");
        }
        if (b == 10) {
            $('.displayNone em').fadeIn("slow");
        }
        if (b == 11) {
            $('.containerTwo').animate({ top: -990 + "%" }, 5000);
            $('.musics').attr("src","./徐心愉 - 我爱你（抖音完整版）（翻自 卢广仲）.mp3");
            $('.containerThree').fadeIn(8000);
            
        }
        b++;

    })
});


 

// .contain {
//         display: none;
//         position: absolute;
//         left: 50%;
//         top: 50%;
//         margin-left: -225px;
//         margin-top: -150px;
//         box-shadow: 0px 0px 1px 1px #514E4C;
//         width: 450px;
//         height: 300px;
//         /*background: red;*/
//     }

//     .contain>div:first-child {
//         height: 30px;
//         background: #EBEBEB;
//     }

//     .xiaogegeg {
//         padding-left: 20px;
//         /*background: grey;*/
//         font-size: 14px;
//         line-height: 30px;
//     }

//     .contain>div:first-child button {
//         float: right;
//         font-family: 黑体;
//         color: #000;
//         width: 46px;
//         height: 30px;
//         background: #EBEBEB;
//         border: none;
//     }

//     button span {
//         font-size: 22px;
//         /*margin-top: 2px;*/
//         line-height: 22px;
//     }

//     .contain>div:first-child button:hover {
//         background: #E81123;
//         color: #fff;
//     }

//     .wenzi {
//         position: relative;
//         top: 50px;
//         padding-left: 30px;
//     }

//     .wenzi>p:nth-child(1) {
//         font-size: 14px;
//     }

//     .wenzi>p:nth-child(2) {
//         font-size: 28px;
//         font-weight: bold;
//     }

//     .wenzi div {
//         position: absolute;
//         right: 20px;
//         top: -20px;
//     }

//     .anniu {
//         margin: 0 auto;
//         text-align: center;
//     }

//     .anniu button {
//         margin-top: 70px;
//         cursor: pointer;
//         /*font-family: 黑体;*/
//         color: #000;
//         width: 75px;
//         height: 36px;
//         background: #EBEBEB;
//         border: none;
//         font-size: 20px;
//         border-radius: 5px;
//         outline: none;
//         /*取消button外边蓝色阴影*/
//     }

//     .anniu button:hover {
//         background: #E81123;
//         color: #fff;
//     }

//     .sure {
//         display: none;
//         position: absolute;
//         top: 50%;
//         left: 50%;
//         margin-left: -90px;
//         margin-top: -50px;
//         /*background: red;*/
//         width: 200px;
//         height: 120px;
//         border-radius: 5px;
//         box-shadow: 0px 0px 1px 1px #514E4C;
//         background: #fff;

//     }
//     .sure div {
//         margin:30px auto 0;
//         width: 50px;
//         height: 28px;
//         line-height: 28px;
//         text-align: center;
//         cursor: pointer;
//         border-radius: 5px;
//         background: #E81123;
//         color: #fff;
//     }
//     .sure p{
//         margin-top: 24px;
//         text-align: center;
//         font-size: 15px;
//     }
//     ..start{
//         height: 100%;
//         height: 100%;
//     }
//     .start{
//         width: 80px;
//         height: 50px;
//         background: #EBEBEB;
//         text-align: center;
//         font-size: 20px;
//         line-height: 50px;
//         position: absolute;
//         top: 50%;
//         left: 50%;
//         margin-left: -40px;
//         margin-top:25px;
//         border-radius:5px;
//         cursor: pointer;
//         background: url(../img/111.png) center no-repeat;
//     }
//     .start:hover{
//         background: #E81123;
//         color: #fff;
//     }
