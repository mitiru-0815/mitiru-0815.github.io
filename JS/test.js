var sweet_img = ['image/pocky_image.png', 'image/bakauke_image.png', 'image/hichu_image.png', 'image/dagashi_image.png', 'image/karamucho_image.png', ];

var Intro = ["とっても運気の高いあなたのラッキーお菓子は「ポッキー」。みんなと一緒に「シェアハピ」すれば、さらにハッピーになれるかも…", "1日順調に過ごせそうなあなたのラッキーお菓子は「ばかうけ」あなたの渾身のギャグもみんなに　ば・か・う・け　するかも…", "さらに幸せな１日を過ごしたい…そんなあなたのラッキーお菓子は「ハイチュウpremium」これを食べれば“premium”な１日になるかも…", "今日はついてなさそう…そんなあなたのラッキーお菓子は「駄菓子」こども時代を思い出しながら、初心にかえってみてはいかが…？", "今日は最悪…そんな予感がするあなたのラッキーお菓子は「カラムーチョ」。辛（つら）さを“辛（から）さ”に変えて消化してしまいましょう…。", ];

function lucky() {

    //    5までの整数で占いの言葉（前）を決定
    var text_number_l = Math.floor(Math.random() * 5);

    if (text_number_l == 4) {
        var text_l = "絶好調！願ってもないチャンスが訪れるかもしれません…";
    }

    if (text_number_l == 3) {
        var text_l = "昨日よりさらに成長できるかも、努力する姿勢は忘れずに。";
    }

    if (text_number_l == 2) {
        var text_l = "誰かから頼りにされるかも、笑顔を大切に。";
    }

    if (text_number_l == 1) {
        var text_l = "仕事で失敗してしまうかも、意気込みすぎに気を付けて。";
    }

    if (text_number_l == 0) {
        var text_l = "とにかくイライラしてしまいそう、深呼吸を忘れずに。";
    }

    document.getElementById("left").innerHTML = text_l;

    //    5までの整数で占いの言葉（後）を決定
    var text_number_r = Math.floor(Math.random() * 5);

    if (text_number_r == 4) {
        var text_r = "そんなあなたは…「今という幸せ」をかみしめましょう。";
    }

    if (text_number_r == 3) {
        var text_r = "そんなあなたは…「思いがけない巡り合わせ」を大切にしましょう。";
    }

    if (text_number_r == 2) {
        var text_r = "そんなあなたは…「成功体験」を思い出してみましょう。";
    }

    if (text_number_r == 1) {
        var text_r = "そんなあなたは…「不誠実な人」を警戒しましょう。";
    }

    if (text_number_r == 0) {
        var text_r = "そんなあなたは…「マイナスな感情」に注意しましょう。";
    }

    document.getElementById("right").innerHTML = text_r;

    //    お菓子を決めるための数字を計算
    var lucky_number = text_number_l + text_number_r;

    if (lucky_number >= 7) {
        var sweetImg = document.getElementById("Sweets-image");
        sweetImg.setAttribute('src', sweet_img[0]);
        document.getElementById("sweet_name").innerHTML = "あなたのラッキーお菓子は" + "「ポッキー」";
        document.getElementById("intro").innerHTML = Intro[0];
    } else if (lucky_number >= 5) {
        var sweetImg = document.getElementById("Sweets-image");
        sweetImg.setAttribute('src', sweet_img[1]);
        document.getElementById("sweet_name").innerHTML = "あなたのラッキーお菓子は" + "「ばかうけ」";
        document.getElementById("intro").innerHTML = Intro[1];
    } else if (lucky_number == 4) {
        var sweetImg = document.getElementById("Sweets-image");
        sweetImg.setAttribute('src', sweet_img[2]);
        document.getElementById("sweet_name").innerHTML = "あなたのラッキーお菓子は" + "「ハイチュウpremium」";
        document.getElementById("intro").innerHTML = Intro[2];
    } else if (lucky_number >= 2) {
        var sweetImg = document.getElementById("Sweets-image");
        sweetImg.setAttribute('src', sweet_img[3]);
        document.getElementById("sweet_name").innerHTML = "あなたのラッキーお菓子は" + "「駄菓子」";
        document.getElementById("intro").innerHTML = Intro[3];
    } else if (lucky_number <= 1) {
        var sweetImg = document.getElementById("Sweets-image");
        sweetImg.setAttribute('src', sweet_img[4]);
        document.getElementById("sweet_name").innerHTML = "あなたのラッキーお菓子は" + "「カラムーチョ」";
        document.getElementById("intro").innerHTML = Intro[4];
    }

}