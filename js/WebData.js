/*获取首页*/
function getIndexProduct() {
    $.ajax({
        type: 'POST',
        url: api + "/ashx/getdata.ashx?r=" + Math.random(),
        data: { "cmd": 33 },
        dataType: 'json',
        async: false,
       
    });

};

/*获取首页左侧海报*/
function getNewsIndexLeft() {
    $.ajax({
        type: 'POST',
        url: api + "/ashx/getdata.ashx?r=" + Math.random(),
        data: { "cmd": 32 },
        dataType: 'json',
        async: false,

    });
};

/*获取首页banner*/
function getIndexBanner() {
    $.ajax({
        type: 'POST',
        url: api + "/ashx/getdata.ashx?r=" + Math.random(),
        data: { "cmd": 30 },
        dataType: 'json',
        async: false,
        success: function (responseData) {
            var MyjsonObj = responseData;
            if (MyjsonObj != "") {
                var AppendHtml = "";
                for (var i = 0, l = MyjsonObj.length; i < l; i++) {

                    AppendHtml += "<li data-transition=\"slotfade-horizontal\" data-slotamount=\"12\" data-masterspeed=\"500\" date-a='" + MyjsonObj[i]["indexbanner_Redirect"] + "'>";
                    AppendHtml += "<img src=\"" + MyjsonObj[i]["indexbanner_Pic"] + "\" title=\"" + MyjsonObj[i]["indexbanner_Title"] + "\" alt=\"" + MyjsonObj[i]["indexbanner_Title"] + "\" data-fullwidthcentering=\"on\" />";
                    AppendHtml += "</li>"
                }
                $('#GetPPT').html(AppendHtml);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("请求失败，暂时无法获取数据");
        }
    });

};

/*获取首页海报*/
function getNewsList1() {
    $.ajax({
        type: 'POST',
        url: api + "/ashx/getdata.ashx?r=" + Math.random(),
        data: { "cmd": 31 },
        dataType: 'json',
        async: false,
        success: function (responseData) {
            var MyjsonObj = responseData;
           
            }
        },
    
   );

};

