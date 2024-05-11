/*获取首页产品*/
function getIndexProduct() {
    $.ajax({
        type: 'POST',
        url: api + "/ashx/getdata.ashx?r=" + Math.random(),
        data: { "cmd": 33 },
        dataType: 'json',
        async: false,
        success: function (responseData) {
            var MyjsonObj = responseData;
            if (MyjsonObj != "") {
                var AppendHtml = "";
                for (var i = 0, l = MyjsonObj.length; i < l; i++) {

                    AppendHtml += "<li class=\"poster-item\"><a target=\"_blank\" href=\"" + MyjsonObj[i]["Product_Redirect"] + "\"><img src=\"" + MyjsonObj[i]["product_IndexPic"] + "\"></a></li>"

                }

                $('.poster-list').html(AppendHtml);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("请求失败，暂时无法获取数据");
        }
    });

};

/*获取首页左侧新闻*/
function getNewsIndexLeft() {
    $.ajax({
        type: 'POST',
        url: api + "/ashx/getdata.ashx?r=" + Math.random(),
        data: { "cmd": 32 },
        dataType: 'json',
        async: false,
        success: function (responseData) {
            var MyjsonObj = responseData;
            if (MyjsonObj != "") {
                var AppendHtml = "";
                var mydate = parseInt(MyjsonObj[0]["news_InputTime"].replace(/\D/igm, ""));
                //实例化一个新的日期格式，使用1970 年 1 月 1 日至今的毫秒数为参数
                var imydate = new Date(mydate);
                var imonth = GetMonth2(imydate.toDateString().split(" ")[1]);
                var iday = imydate.toDateString().split(" ")[2];
           

                AppendHtml += "<span class=\"m2_yue\">" + imonth + "</span>"
                AppendHtml += "<span class=\"m2_ri\">" + iday + "</span>";
                if (MyjsonObj[0]["news_Redirect"] != null) {
                    AppendHtml += "<a class=\"m2_n1\" href=\"" + MyjsonObj[0]["news_Redirect"] + "\" target=\"_blank\">" + MyjsonObj[0]["news_Title"] + "</a>";
                    AppendHtml += "<a href=\"" + MyjsonObj[0]["news_Redirect"] + "\" target=\"_blank\" class=\"nbg_img1\"><img src=\"" + MyjsonObj[0]["news_IndexPic"] + "\" alt=\"" + MyjsonObj[0]["news_Title"] + "\" with=\"266px\"  height=\"239px\" /></a>";
                }
                else {
                    AppendHtml += "<a class=\"m2_n1\" href=\"newsdetail.shtml#" + MyjsonObj[0]["news_Id"] + "\" alt=\"" +MyjsonObj[0]["news_Title"] +"\" target=\"_blank\">" + MyjsonObj[0]["news_Title"] + "</a>";
                    AppendHtml += "<a  href=\"newsdetail.shtml#" + MyjsonObj[0]["news_Id"] + "\" target=\"_blank\" class=\"nbg_img1\"><img src=\"" + MyjsonObj[0]["news_IndexPic"] + "\" alt=\"" + MyjsonObj[0]["news_Title"] + "\"  with=\"266px\"  height=\"239px\" /></a>";
                }
                $('.m2_nbg').html(AppendHtml);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("请求失败，暂时无法获取数据");
        }
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

/*获取首页新闻*/
function getNewsList1() {
    $.ajax({
        type: 'POST',
        url: api + "/ashx/getdata.ashx?r=" + Math.random(),
        data: { "cmd": 31 },
        dataType: 'json',
        async: false,
        success: function (responseData) {
            var MyjsonObj = responseData;
            if (MyjsonObj != "") {
                var AppendHtml = "";
                var iday = new Array();
                var imonth = new Array();
                for (var i = 0, l = MyjsonObj.length; i < l; i++) {
                    var mydate = parseInt(MyjsonObj[i]["news_InputTime"].replace(/\D/igm, ""));
                    //实例化一个新的日期格式，使用1970 年 1 月 1 日至今的毫秒数为参数
                    var imydate = new Date(mydate);

                    imonth[i] = GetMonth(imydate.toDateString().split(" ")[1]);
                    iday[i] = imydate.toDateString().split(" ")[2];
                }
                var j = 0, k = MyjsonObj.length;
                if (MyjsonObj[0]["news_Redirect"] != null) {
                    $('.m2_n2').attr("href", MyjsonObj[0]["news_Redirect"]);
                }
                else {
                    $('.m2_n2').attr("href", "newsdetail.shtml#" + MyjsonObj[0]["news_Id"]);
                }
                $('.m2_n2').attr("target", "_blank");
                $('#m2_n2_img').attr("src", MyjsonObj[0]["news_IndexPic"]);

                
             

                AppendHtml += "  <li class=\"i2l1\">"
                AppendHtml += "<div class=\"i2_date\">"
                AppendHtml += "<h3>" + imonth[0] + "</h3>"
                AppendHtml += iday[0]
                AppendHtml += "</div>"
                if (MyjsonObj[0]["news_Redirect"] != null) {
                    AppendHtml += " <a class=\"i2_contet\"  href=\"" + MyjsonObj[0]["news_Redirect"] + "\" target=\"_blank\">"
                }
                else {
                    AppendHtml += " <a class=\"i2_contet\"  href=\"newsdetail.shtml#" + MyjsonObj[0]["news_Id"] + "\" target=\"_blank\">"
                }
                AppendHtml += " <h2>" + MyjsonObj[0]["news_Title"] + "</h2>"
                AppendHtml += " <p>" + MyjsonObj[0]["news_Demo"] + "</p></a></li>"

                j++;

                if (j < k) {
                    AppendHtml += "<li class=\"i2l2\">"
                    AppendHtml += "<div class=\"i2_date\">"
                    AppendHtml += "<h3>" + imonth[1] + "</h3>"
                    AppendHtml += iday[1]
                    AppendHtml += "</div>"
                    if (MyjsonObj[1]["news_Redirect"] != null) {
                        AppendHtml += " <a class=\"i2_contet\"  href=\"" + MyjsonObj[1]["news_Redirect"] + "\" target=\"_blank\">"
                    }
                    else {
                        AppendHtml += " <a class=\"i2_contet\"  href=\"newsdetail.shtml#" + MyjsonObj[1]["news_Id"] + "\" target=\"_blank\">"
                    }
                    AppendHtml += "<h2>" + MyjsonObj[1]["news_Title"] + "</h2>"
                    AppendHtml += "<p> " + MyjsonObj[1]["news_Demo"] + "</p>  </a>  </li>"
                    j++
                }
                if (j < k) {
                    AppendHtml += "<li class=\"i2l3\">"
                    AppendHtml += "<div class=\"i2_date\">"
                    AppendHtml += " <h3>" + imonth[2] + "</h3>"
                    AppendHtml += iday[2]
                    AppendHtml += "</div>"
                    if (MyjsonObj[2]["news_Redirect"] != null) {
                        AppendHtml += " <a class=\"i2_contet\"  href=\"" + MyjsonObj[2]["news_Redirect"] + "\" target=\"_blank\">"
                    }
                    else {
                        AppendHtml += " <a class=\"i2_contet\"  href=\"newsdetail.shtml#" + MyjsonObj[2]["news_Id"] + "\" target=\"_blank\">"
                    }
                    AppendHtml += "<h2>" + MyjsonObj[2]["news_Title"] + "</h2>"
                    AppendHtml += "<p> " + MyjsonObj[2]["news_Demo"] + "</p>  </a>  </li>"
                }



                $('.i2_list').html(AppendHtml);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("请求失败，暂时无法获取数据");
        }
    });

};

/*获取月份中文*/
function GetMonth(idate) {
    var remonth;
    switch (idate) {
        case "Jan": remonth = "January"; break;
        case "Feb": remonth = "February"; break;
        case "Mar": remonth = "March"; break;
        case "Apr": remonth = "April"; break;
        case "May": remonth = "May"; break;
        case "Jun": remonth = "June"; break;
        case "Jul": remonth = "July"; break;
        case "Aug": remonth = "Aguest"; break;
        case "Sep": remonth = "September"; break;
        case "Oct": remonth = "October"; break;
        case "Nov": remonth = "November"; break;
        case "Dec": remonth = "December"; break;
    }
    return remonth;
}
function GetMonth2(idate) {
    var remonth;
    switch (idate) {
        case "Jan": remonth = "JAN"; break;
        case "Feb": remonth = "FEB"; break;
        case "Mar": remonth = "MAR"; break;
        case "Apr": remonth = "APR"; break;
        case "May": remonth = "MAY"; break;
        case "Jun": remonth = "JUN"; break;
        case "Jul": remonth = "JUL"; break;
        case "Aug": remonth = "AUG"; break;
        case "Sep": remonth = "SEP"; break;
        case "Oct": remonth = "OCT"; break;
        case "Nov": remonth = "NOV"; break;
        case "Dec": remonth = "DEC"; break;
    }
    return remonth;
}

/*获取首页视频*/
function getIndexVedio() {
    $.ajax({
        type: 'POST',
        url: api + "/ashx/getdata.ashx?r=" + Math.random(),
        data: { "cmd": 34 },
        dataType: 'json',
        async: false,
        success: function (responseData) {
            var MyjsonObj = responseData;
            if (MyjsonObj != "") {
                var AppendHtml = "";
                var vediourl = "";

                if (MyjsonObj[0]["vedio_Redirect"] != null) {
                    vediourl = MyjsonObj[0]["vedio_Redirect"];

                }
                else {
                    vediourl = MyjsonObj[0]["vedio_File"];
                }

                var so = new SWFObject("player.swf", "myCuPlayer", "1116", "626", "9", "#000000");

                so.addParam("allowfullscreen", "true");
                so.addParam("allowscriptaccess", "always");
                so.addParam("wmode", "opaque");
                so.addParam("quality", "high");
                so.addParam("salign", "lt");
                //播放器设置文件-----------------------------
                so.addVariable("JcScpFile", "CuSunV3set.xml");
                //视频文件及略缩图--------------------------
                //so.addVariable("JcScpServer","rtmp://www.yoursite.com/vod");//流媒体服务器
                so.addVariable("JcScpAutoPlay", "no"); //是否自动播放
                so.addVariable("JcScpVideoPath", vediourl); //视频文件地址
                so.addVariable("JcScpImg", "images/i4_videoimg.jpg");//视频缩略图
                so.write("CuPlayer");


            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("请求失败，暂时无法获取数据");
        }
    });
};


/*获取企业荣誉*/
function getHonorList() {
    $.ajax({
        type: 'POST',
        url: api + "/ashx/getdata.ashx?r=" + Math.random(),
        data: { "cmd": 20 },
        dataType: 'json',
        async: false,
        success: function (responseData) {
            var MyjsonObj = responseData;
            if (MyjsonObj != "") {
                var AppendHtml = "";
                var AppendHtml1 = "";
                var iYearList = GetDistrictYear(MyjsonObj);
                for (var p = 0, l = iYearList.length; p < l; p++) {

                    if (p == 0) {
                        AppendHtml += " <li class=\"featureBox featureUL_cur\">";
                        AppendHtml += iYearList[p] + "年";
                        AppendHtml += "</li>";
                    }
                    else {
                        AppendHtml += " <li class=\"featureBox \">";
                        AppendHtml += iYearList[p] + "年";
                        AppendHtml += "</li>";
                    }
                }
                $('.featureUL').html(AppendHtml);

                for (var i = 0, l = iYearList.length; i < l; i++) {

                    AppendHtml1 += "<div class=\"hon h_" + (i + 1) + "\">"

                    for (var j = 0; j < 13; j++) {
                        var titlelist = GetHonorByYearandMonth(MyjsonObj, iYearList[i], j.toString());
                        if (titlelist.length > 0) {
                            AppendHtml1 += "<div class=\"honor_month\">"
                            AppendHtml1 += "<div class=\"honor_month_bg\">" + j + "月</div>"
                            AppendHtml1 += "<ul class=\"honor_ul\">"
                            for (var k = 0, s = titlelist.length; k < s; k++) {
                                AppendHtml1 += "<li>"
                                AppendHtml1 += "<img src=\"images/honor_li_bg.png\" class=\"honor_li_bg\" />"
                                AppendHtml1 += "<b>" + iYearList[i] + "年" + j.toString() + "月</b>"
                                AppendHtml1 += "<p>" + titlelist[k] + "</p>"
                                AppendHtml1 += "</li>"
                            }
                            AppendHtml1 += "</ul>"
                            AppendHtml1 += "</div>"
                        }
                    }
                    AppendHtml1 += "<div class=\"clear\"></div>"
                    AppendHtml1 += "</div>"

                }
                $('.honor_3').html(AppendHtml1);


            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("请求失败，暂时无法获取数据");
        }
    });

};

/*获取企业荣誉年*/
function GetDistrictYear(responseData) {
    var list = new Array();
    for (var i = 0, l = responseData.length; i < l; i++) {
        if (list.indexOf(responseData[i]["honor_Year"]) == -1) {
            list.push(responseData[i]["honor_Year"]);
        }
    }
    return list;
}

/*获取企业荣誉月*/
function GetHonorByYearandMonth(responseData, year, month) {
    var list = new Array();
    for (var i = 0, l = responseData.length; i < l; i++) {
        if (responseData[i]["honor_Year"] == year && responseData[i]["honor_Month"] == month) {
            list.push(responseData[i]["honor_Title"]);
        }
    }
    return list;
}


/*获取新闻页码信息*/
function GetNewsPageInfo() {
    var itable = "News";
    $.ajax({
        type: 'POST',
        url: api + "/ashx/getdata.ashx?r=" + Math.random(),
        data: { "cmd": 99, "table": itable },
        dataType: 'json',
        async: false,
        success: function (responseData) {

            var MyjsonObj = responseData;
            if (MyjsonObj != "") {
                var pageindex = parseInt(GetPageIndex());
                var itemcount = parseInt(MyjsonObj) - 1;
                var pagecount = 1;
                var zd = 0;

                if ((itemcount % 10) == 0) {

                    pagecount = parseInt(itemcount / 10);

                }
                else {
                    pagecount = parseInt(itemcount / 10) + 1;
                }

                var AppendHtml = "";
                if (pagecount > 1 && pageindex > 1) {
                    pageindex = parseInt(GetPageIndex()) - 1;
                    AppendHtml += "<a class=\"page-pre\" href=\"?" + pageindex + "\">&lt;</a>"
                }
                else {
                    AppendHtml += "<a class=\"page-pre\">&lt;</a>"
                }

                for (var i = 1; i < pagecount + 1; i++) {
                    var curpage = parseInt(GetPageIndex());


                    if (curpage < 5 * zd) {
                        if (i == 5 * zd + 1) { AppendHtml += "<a>...</a>"; i = pagecount + 1; }
                        else { AppendHtml += "<a href=\"?" + i + "\">" + i + "</a>"; }

                    }
                    else if (curpage >= 5 * zd) {
                        zd = zd + 1;
                        AppendHtml += "<a href=\"?" + i + "\">" + i + "</a>"
                    }


                }


                if (pagecount > 1 && pageindex < pagecount) {
                    pageindex = parseInt(GetPageIndex()) + 1;
                    AppendHtml += "<a class=\"page-next\" href=\"?" + pageindex + "\">&gt;</a>"
                }
                else {
                    AppendHtml += "<a class=\"page-next\">&gt;</a>"
                }

                $(".ten-page").html(AppendHtml);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("请求失败，暂时无法获取数据");
        }
    });

};

         
 
/*获取推荐新闻*/
function getRecommandNews() {
    $.ajax({
        type: 'POST',
        url: api + "/ashx/getdata.ashx?r=" + Math.random(),
        data: { "cmd": 10 },
        dataType: 'json',
        async: false,
        success: function (responseData) {
            var MyjsonObj = responseData;
            if (MyjsonObj != "") {
                var AppendHtml = "";
                AppendHtml += "<img src=\"" + MyjsonObj[0]["Recommend_pic"] + "\" class=\"newslist_1_left\"/>"
                AppendHtml += " <div class=\"newslist_1_right\">";
                AppendHtml += "<h1>" + MyjsonObj[0]["news_Title"] + "</h1>";
                AppendHtml += "<div class=\"newslist_1_content\">";
                AppendHtml += MyjsonObj[0]["news_Demo"];
                AppendHtml += "</div>";
                if (MyjsonObj[0]["news_Redirect"] != null) {

                    AppendHtml += "<a class=\"newslist_1_more\" href=\"" + MyjsonObj[0]["news_Redirect"] + "\">MORE >></a>";
                }
                else {
                    AppendHtml += "<a class=\"newslist_1_more\" href=\"newsdetail.shtml#" + MyjsonObj[0]["news_Id"] + "\">MORE >></a>";
                }
                AppendHtml += "</div>"

                $('#newslist_1').html(AppendHtml);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("请求失败，暂时无法获取数据");
        }
    });
};

/*获取新闻列表*/
function getNewsList() {
    iPageIndex = GetPageIndex();
    $.ajax({
        type: 'POST',
        url: api + "/ashx/getdata.ashx?r=" + Math.random(),
        data: { "cmd": 11, "PageIndex": iPageIndex },
        dataType: 'json',
        async: false,
        success: function (responseData) {
            var MyjsonObj = responseData;
            if (MyjsonObj != "") {
                var AppendHtml = "";
                for (var i = 0, l = MyjsonObj.length; i < l; i++) {
                    var mydate = parseInt(MyjsonObj[i]["news_InputTime"].replace(/\D/igm, ""));
                    //实例化一个新的日期格式，使用1970 年 1 月 1 日至今的毫秒数为参数
                    var imydate = new Date(mydate);

                    var imonth = GetMonth2(imydate.toDateString().split(" ")[1]);
                    var iday = imydate.toDateString().split(" ")[2];

                    AppendHtml += "<li>"
                    if (MyjsonObj[i]["news_Redirect"] != null) {
                        AppendHtml += "<a href=\"" + MyjsonObj[i]["news_Redirect"] + "\" target=\"_blank\">";
                    }
                    else {
                        AppendHtml += "<a href=\"newsdetail.shtml#" + MyjsonObj[i]["news_Id"] + "\" target=\"_blank\">";
                    }
                    AppendHtml += "<div class=\"newslist_li_left\"><img src=\"" + MyjsonObj[i]["news_Pic"] + "\" /></div>";
                    AppendHtml += "<div class=\"newslist_li_right\">";
                    AppendHtml += "<h2>" + MyjsonObj[i]["news_Title"] + "</h2>";
                    AppendHtml += "<div class=\"i2_date\">";
                    AppendHtml += "<h3>" + imonth + "</h3>" + iday;
                    AppendHtml += "</div>";
                    AppendHtml += "<div>";
                    AppendHtml += MyjsonObj[i]["news_Demo"];
                    AppendHtml += "</div>";
                    AppendHtml += "</div>";
                    AppendHtml += " </a>";
                    AppendHtml += " </li>";

                }
                $('#newslist_ul').html(AppendHtml);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("请求失败，暂时无法获取数据");
        }
    });

};


 
/*获取URL上页码*/
function GetPageIndex() {
    var url = location.href;
    var i = url.indexOf('?');
    if (i == -1) return 1;
    var id = url.substr(i + 1);
    return id;
}



/*获取新闻内容*/
function getNewDetail() {
    var newsid = GetNewId();
    $.ajax({
        type: 'POST',
        url: api + "/ashx/getdata.ashx?r=" + Math.random(),
        data: { "cmd": 12, "news_Id": newsid },
        dataType: 'json',
        async: false,
        success: function (responseData) {
            var MyjsonObj = responseData;
            if (MyjsonObj != "") {
                var AppendHtml = "";
                var mydate = parseInt(MyjsonObj["news_InputTime"].replace(/\D/igm, ""));
                var imydate = new Date(mydate);
                var imonth = GetMonth1(imydate.toDateString().split(" ")[1]);
                var iday = imydate.toDateString().split(" ")[2];
                var iyear = imydate.toDateString().split(" ")[3];
                var idate = iyear + "-" + imonth + "-" + iday
                  

                AppendHtml += "<h1>" + MyjsonObj["news_Title"] + "</h1>"
                AppendHtml += "<div class=\"newsdetail_1_meta\">";
                AppendHtml += "FROM：" + MyjsonObj["news_From"];
                AppendHtml += "&nbsp;&nbsp;DATE：" + idate;
                AppendHtml += "</div>";
                AppendHtml += "<div class=\"newsdetail_1_content\">";
                AppendHtml += MyjsonObj["news_Content"];
                AppendHtml += "</div>"

                $('#newsdetail_1').html(AppendHtml);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("请求失败，暂时无法获取数据");
        }
    });

};
/*获取URL的新闻ID*/
function GetNewId() {
    var url = location.href;
    var i = url.indexOf('#');
    if (i == -1) return;
    var id = url.substr(i + 1);
    return id;
}
/*获取月份的阿拉伯数字*/
function GetMonth1(idate) {
    var remonth;
    switch (idate) {
        case "Jan": remonth = "01"; break;
        case "Feb": remonth = "02"; break;
        case "Mar": remonth = "03"; break;
        case "Apr": remonth = "04"; break;
        case "May": remonth = "05"; break;
        case "Jun": remonth = "06"; break;
        case "Jul": remonth = "07"; break;
        case "Aug": remonth = "08"; break;
        case "Sep": remonth = "09"; break;
        case "Oct": remonth = "10"; break;
        case "Nov": remonth = "11"; break;
        case "Dec": remonth = "12"; break;
    }
    return remonth;
}


//最新上架商品
function getLatestProducts() {
    $.ajax({
        type: 'POST',
        url: api + "/ashx/DataHandle.ashx?r=" + Math.random(),
        data: { 'key': 0 },
        dataType: 'json',
        async: false,
        success: function (responseData) {
            var result = responseData;
            if (result != "") {
                var temp = "";
                var resultLength = result.length;
                for (var i = 0; i < resultLength; i++) {
                    temp += '<li>';
                    temp += '<a target="_blank" href="' + result[i]["Product_Redirect"] + '">';
                    temp += '<div class="com1_img"><img src="' + result[i]["Product_Pic"] + '" class="cm1" /></div>';
                    temp += '<h2>' + result[i]["Product_Name"] + '</h2>';
                    temp += '<div class="com_price">￥' + result[i]["Product_Price"] + '</div>';
                    temp += '<img src="images/com_buy.jpg" class="com_buy" />'
                    temp += '<div class="clear"></div>';
                    temp += '</a>';
                    temp += '</li>';
                }
                $('.ul_com1').html(temp);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("请求失败，暂时无法获取数据");
        }
    })
}

//热销产品商品
function getHotSaleProducts() {
    $.ajax({
        type: 'POST',
        url: api + '/ashx/DataHandle.ashx?r=' + Math.random(),
        data: { 'key': 1 },
        dataType: 'json',
        async: false,
        success: function (responseData) {
            var data = responseData;
            if (data != '') {
                var temp = '';
                var l = data.length;
                for (var i = 0; i < l; i++) {
                    temp += '<li>';
                    temp += '<a target="_blank" href="' + data[i]["Product_Redirect"] + '">';
                    temp += '<div class="com2_img"><img src="' + data[i]["Product_Pic"] + '" class="cm2" /></div>';
                    temp += '<div class="com_price">￥' + data[i]["Product_Price"] + '</div>';
                    temp += '<div class="com_pay">' + data[i]["Product_Click"] + '人付款</div>';
                    temp += '<div class="clear"></div>';
                    temp += '<h2>' + data[i]["Product_Name"] + '</h2>';
                    temp += '<img src="images/com_buy.jpg" class="com_buy" />';
                    temp += '</a>';
                    temp += '</li>';
                }
                $('.ul_com2').html(temp);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("请求失败，暂时无法获取数据");
        }
    });
}

//高清图片列表
function getPictureList() {
    $.ajax({
        type: 'POST',
        url: api + "/ashx/getdata.ashx?r=" + Math.random(),
        data: { "cmd": 41 },
        dataType: 'json',
        async: false,
        success: function (responseData) {
            var MyjsonObj = responseData;
            if (MyjsonObj != "") {
                var AppendHtml = "<h3>首页 > 粉丝活动 > 粉丝福利 > 精彩图集</h3>";
                for (var i = 0, l = MyjsonObj.length; i < l; i++) {

                    if (i < l) {

                        var ilistimg = GetList(MyjsonObj[i]["welfare_ImgList"]);
                        var ilistimgText = GetList(MyjsonObj[i]["welfare_ImgTextList"]);

                        AppendHtml += "<div class=\"fsp_1 fspp1\">"
                        AppendHtml += "<h2>" + MyjsonObj[i]["welfare_Name"] + "</h2>"
                        if (i == 0) {
                            AppendHtml += "<div class=\"fsp_p\" style=\"display:block;\">"
                        }
                        else {
                            AppendHtml += "<div class=\"fsp_p\" style=\"display:none;\">"
                        }
                        AppendHtml += " <p class=\"fsp1_sp\">" + MyjsonObj[i]["welfare_Demo"] + "</p>"
                        AppendHtml += " <ul class=\"fsp_ul\">"

                        for (var j = 0, k = ilistimg.length; j < k; j++) {

                            AppendHtml += " <li>"
                            AppendHtml += "<a target=\"_blank\" href=\"" + ilistimg[j] + "\">"
                            AppendHtml += "   <div><img src=\"" + ilistimg[j] + "\" class=\"game_pic\" /></div>"
                            AppendHtml += "   <p>" + ilistimgText[j] + "</p>"
                            AppendHtml += "    </a>"
                            AppendHtml += " </li>"
                        }

                        AppendHtml += " </ul>"
                        AppendHtml += "  </div>"
                        AppendHtml += " </div>"
                        i++;
                    }
                    if (i < l) {

                        var ilistimg = GetList(MyjsonObj[i]["welfare_ImgList"]);
                        var ilistimgText = GetList(MyjsonObj[i]["welfare_ImgTextList"]);
                        AppendHtml += "<div class=\"fsp_1 fspp2\">"
                        AppendHtml += "<h2>" + MyjsonObj[i]["welfare_Name"] + "</h2>"
                        AppendHtml += "<div class=\"fsp_p\" style=\"display:none;\">"
                        AppendHtml += " <p class=\"fsp1_sp\">" + MyjsonObj[i]["welfare_Demo"] + "</p>"
                        AppendHtml += " <ul class=\"fsp_ul\">"

                        for (var j = 0, k = ilistimg.length; j < k; j++) {
                            AppendHtml += " <li>"
                            AppendHtml += "<a target=\"_blank\" href=\"" + ilistimg[j] + "\">"
                            AppendHtml += "   <div><img src=\"" + ilistimg[j] + "\" class=\"game_pic\" /></div>"
                            AppendHtml += "   <p>" + ilistimgText[j] + "</p>"

                            AppendHtml += "    </a>"
                            AppendHtml += " </li>"
                        }
                        AppendHtml += " </ul>"
                        AppendHtml += "  </div>"
                        AppendHtml += " </div>"
                        i++;
                    }
                    if (i < l) {

                        var ilistimg = GetList(MyjsonObj[i]["welfare_ImgList"]);
                        var ilistimgText = GetList(MyjsonObj[i]["welfare_ImgTextList"]);
                        AppendHtml += "<div class=\"fsp_1 fspp3\">"
                        AppendHtml += "<h2>" + MyjsonObj[i]["welfare_Name"] + "</h2>"
                        AppendHtml += "<div class=\"fsp_p\" style=\"display:none;\">"
                        AppendHtml += " <p class=\"fsp1_sp\">" + MyjsonObj[i]["welfare_Demo"] + "</p>"
                        AppendHtml += " <ul class=\"fsp_ul\">"

                        for (var j = 0, k = ilistimg.length; j < k; j++) {
                            AppendHtml += " <li>"
                            AppendHtml += "<a target=\"_blank\" href=\"" + ilistimg[j] + "\">"
                            AppendHtml += "   <div><img src=\"" + ilistimg[j] + "\" class=\"game_pic\" /></div>"
                            AppendHtml += "   <p>" + ilistimgText[j] + "</p>"
                            AppendHtml += "    </a>"
                            AppendHtml += " </li>"
                        }

                        AppendHtml += " </ul>"
                        AppendHtml += "  </div>"
                        AppendHtml += " </div>"

                    }
                }

                $('.fs_m').html(AppendHtml);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("请求失败，暂时无法获取数据");
        }
    });

};

function GetList(imgstring) {
    var list = new Array();
    if (imgstring == null) {
        list = [""];
    }
    else {
        list = imgstring.split("\|");
    }
    return list;
}

//游戏分页信息
function GetGamePageInfo() {
    var itable = "Games";
    $.ajax({
        type: 'POST',
        url: api + "/ashx/getdata.ashx?r=" + Math.random(),
        data: { "cmd": 99, "table": itable },
        dataType: 'json',
        async: false,
        success: function (responseData) {

            var MyjsonObj = responseData;
            if (MyjsonObj != "") {
                var pageindex = parseInt(GetPageIndex());
                var itemcount = parseInt(MyjsonObj);
                var pagecount = 1;
                var zd = 0;

                if ((itemcount % 5) == 0) {

                    pagecount = parseInt(itemcount / 5);

                }
                else {
                    pagecount = parseInt(itemcount / 5) + 1;
                }

                var AppendHtml = "";
                if (pagecount > 1 && pageindex > 1) {
                    pageindex = parseInt(GetPageIndex()) - 1;
                    AppendHtml += "<a class=\"page-pre\" href=\"?" + pageindex + "\">&lt;</a>"
                }
                else {
                    AppendHtml += "<a class=\"page-pre\">&lt;</a>"
                }

                for (var i = 1; i < pagecount + 1; i++) {
                    var curpage = parseInt(GetPageIndex());


                    if (curpage < 5 * zd) {
                        if (i == 5 * zd + 1) { AppendHtml += "<a>...</a>"; i = pagecount + 1; }
                        else { AppendHtml += "<a href=\"?" + i + "\">" + i + "</a>"; }

                    }
                    else if (curpage >= 5 * zd) {
                        zd = zd + 1;
                        AppendHtml += "<a href=\"?" + i + "\">" + i + "</a>"
                    }


                }


                if (pagecount > 1 && pageindex < pagecount) {
                    pageindex = parseInt(GetPageIndex()) + 1;
                    AppendHtml += "<a class=\"page-next\" href=\"?" + pageindex + "\">&gt;</a>"
                }
                else {
                    AppendHtml += "<a class=\"page-next\">&gt;</a>"
                }

                $(".ten-page").html(AppendHtml);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("请求失败，暂时无法获取数据");
        }
    });

};

//游戏列表
function getGameList() {
    iPageIndex = GetPageIndex();
    $.ajax({
        type: 'POST',
        url: api + "/ashx/getdata.ashx?r=" + Math.random(),
        data: { "cmd": 40, "PageIndex": iPageIndex },
        dataType: 'json',
        async: false,
        success: function (responseData) {
            var MyjsonObj = responseData;
            if (MyjsonObj != "") {
                var AppendHtml = "";
                for (var i = 0, l = MyjsonObj.length; i < l; i++) {

                    AppendHtml += "<li>"
                    AppendHtml += "<img src=\"" + MyjsonObj[i]["welfare_Pic"] + "\" class=\"game_pic\" />"
                    AppendHtml += "<div class=\"ful_r\">"
                    AppendHtml += " <h1>" + MyjsonObj[i]["welfare_Name"] + "</h1>"
                    AppendHtml += "<p>"
                    AppendHtml += MyjsonObj[i]["welfare_Demo"]
                    AppendHtml += "</p>"
                    if (MyjsonObj[i]["welfare_GameOS"] == "Ios") {
                        AppendHtml += "<img src=\"images/down_ios.png\" class=\"down down_ios\" />"
                    }
                    else if (MyjsonObj[i]["welfare_GameOS"] == "Flash") {
                        AppendHtml += "   <img src=\"images/down_flash.jpg\" class=\"down down_flash\" />"
                    }
                    else {
                        AppendHtml += " <img src=\"images/down_and.png\" class=\"down down_and\" />"
                    }
                    if (MyjsonObj[i]["welfare_Redirect"] != null) {
                        if (MyjsonObj[i]["welfare_QrCode"] != null) {
                            AppendHtml += "  <a class=\"game_link\" href=\"" + MyjsonObj[i]["welfare_Redirect"] + "\" target=\"_blank\">下载游戏<img src=\"" + MyjsonObj[i]["welfare_QrCode"] + "\" /></a>"
                        }
                        else {
                            AppendHtml += "  <a class=\"game_link\" href=\"" + MyjsonObj[i]["welfare_Redirect"] + "\" target=\"_blank\">下载游戏</a>"
                        }
                    }
                    else {
                        if (MyjsonObj[i]["welfare_QrCode"] != null) {
                            if (MyjsonObj[i]["welfare_File"] != null) {
                                AppendHtml += "  <a class=\"game_link\" href=\"" + MyjsonObj[i]["welfare_File"] + "\">下载游戏<img src=\"" + MyjsonObj[i]["welfare_QrCode"] + "\" /></a>"
                            }
                            else {
                                AppendHtml += "  <a class=\"game_link\" href=\"\" >下载游戏<img src=\"" + MyjsonObj[i]["welfare_QrCode"] + "\" /></a>"
                            }
                        }
                        else {
                            if (MyjsonObj[i]["welfare_File"] != null) {
                                AppendHtml += "  <a class=\"game_link\" href=\"" + MyjsonObj[i]["welfare_File"] + "\" >下载游戏</a>"
                            }
                            else {
                                AppendHtml += "  <a class=\"game_link\" href=\"\">下载游戏</a>"
                            }
                        }
                    }
                    AppendHtml += " </div>"
                    AppendHtml += " </li>"
                }
                $('.fsm_ul').html(AppendHtml);
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log("请求失败，暂时无法获取数据");
        }
    });

};

 