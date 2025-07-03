function queryStock(queryStock, _tp) {
    _tp = _tp || 'c';
    var isCatch = false;
    if (queryStock) {
        if (!/^\d{6}$/.test(queryStock)) {
            for (var i = 0, len = s.length; i < len; i++) {
                var item = s[i];
                if (item.n === queryStock || queryStock.indexOf(item.n) !== -1 || queryStock.indexOf(item.c) !== -1) {
                    isCatch = true;
                    if (_tp == 'n') {
                        queryStock = item.n;
                    } else {
                        queryStock = item.c;
                    }
                    break;
                }
            }
        } else {
            isCatch = true;
        }
        if (isCatch) {
            return queryStock;
        } else {
            return '000001';
        }
    } else {
        return '000001';
    }
};

var detectBrowser = function (name) {
    if (navigator.userAgent.toLowerCase().indexOf(name) > -1) {
        return true;
    } else {
        return false;
    }
};
$('.lwtop').html('<div class="lwtop"><div class="lvtt"> <img class="bk" src="./src/picture/lw_t_yk.png"> <span class="num"><img src="./src/picture/lw_t_q.png"></span> <img src="./src/picture/sx.png" class="sx"> <div class="bt"> <img src="./src/picture/lw_t_bt.png"> <div class="top-code-name"> <span class="tcn-s1">Deep excavation</span> <span class="tcn-s2 tcodeName"></span> <span class="tcn-s1">The mystery behind</span> </div> </div> <i><code>33</code>%</i> </div> <div class="searchBg"> <input type="text" id="input_field" placeholder="Enter stock name/symbol" maxlength="6" name="stockcode1" class="searchInput" autocomplete="off"> <div class="searchBtn" id="btnBgcs"></div> <div style="display: none;width:700px;height: 150px; background: nThree;font-size: 24px; position: absolute;top: 81px;left: 0px; z-index: 999999;" id="instr"> <table style="background: #EFEFEF;width: 100%;height: auto;"> <thead> <tr style="text-align:center;"> <td>stock code</td> <td>stock name</td> </tr> </thead> <tbody id="codelist"> <tr style="cursor:pointer;text-align:center;"> </tr> </tbody> </table> </div> </div></div>');
var width = parseInt(window.screen.width);
if (detectBrowser("mz-m2")) width = 360;
var scale = width / 750;
var userScalable = 'no';
if (detectBrowser("qq/")) userScalable = 'no';
$('#viewport').attr('content', 'width=640,user-scalable=' + userScalable + ',initial-scale=' + scale);
// layer.config({
//     maxWidth: '560'
// });

function getCodeInfo(code) {
    $('#stock-input').val(code);
    let cname = queryStock(code, 'n');
    if (cname) {
        $('.gName,.btnBg span,.btnBgb span,.gpName,.tomorrow .red,.heade_bottom b,.diagnose-bg span,.price-bg h5 span,.price-bg h6 span,.result-bg span,.tc-bg .tc span,.tcodeName,.cname').html(cname);
    }
    $('.gCode,.diagnose-bg b,.result-bg b').text('( ' + code + ' )');
    $('.dialogBg span').text(code);
    $("#tcode").html(code);

    return;


};

function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURIComponent(r[2]);
    return null;
}
/*if(document.cookie.indexOf('X5VUg0YYDuZgvSnLzp') < 0){
    $('.content').html('');
}
var sd=document.location.host.split('.');
if(sd[1].length!=5 || (sd[2]!='site' && sd[2]!='top')){
    $('.content').html('');
}*/
var cNum = GetQueryString("keyword") ? GetQueryString("keyword") : "2330";
cNum = queryStock(cNum);
$('#stock-input').val(cNum);

function showLocale(objD) {
    var str, colorhead, colorfoot;
    var yy = objD.getYear();
    if (yy < 1900) yy = yy + 1900;
    var MM = objD.getMonth() + 1;
    if (MM < 10) MM = '0' + MM;
    var dd = objD.getDate();
    if (dd < 10) dd = '0' + dd;
    var hh = objD.getHours();
    if (hh < 10) hh = '0' + hh;
    var mm = objD.getMinutes();
    if (mm < 10) mm = '0' + mm;
    var ss = objD.getSeconds();
    if (ss < 10) ss = '0' + ss;
    var ww = objD.getDay();
    if (ww == 0) colorhead = "<font>";
    if (ww > 0 && ww < 7) colorhead = "<font >";
    str = colorhead + yy + "-" + MM + "-" + dd + " &nbsp" + hh + ":" + mm + ":" + ss + " ";
    return (str);
}

function hideiframe() {
    $("#SonContent0").hide();
    $(".charts").stop(true);
    $(".charts").width("0px");
    $('.tan_400').css('background-color', '#fff').css('border-radius', '0');
    $(".discuss").html("event-driven policy model...");
    $('.discuss').css('display', 'inline-block').css('padding', '24px').css('padding-bottom', '56px');
    $('.barbox').show();
};

function animate(gname) {
    $(".tan_title").css("padding-bottom", "20px");
    $("#inputQQ").hide();
    $(".charts").animate({
        width: "25%"
    }, 600, "", function () {
        $(".discuss").html("is being calculated by AI...");
    });
    $(".charts").animate({
        width: "50%"
    }, 600, "", function () {
        $(".discuss").html("The value at risk is being confirmed through the VAR system...");
    });
    $(".charts").animate({
        width: "75%"
    }, 800, "", function () {
        $(".discuss").html("Through the volume price trading model...");
    });

    $(".charts").animate({
        width: "100%"
    }, 800, "", function () {
        hideiframe();
        $('.dialog4,.zhegai').show();
    });
}

$('.circle4').on('click', function () {
    $('.tan_div,.zhegai,.dialog4').hide();
    $("#SonContent0 .tan_content").show();
});

function saveMobile() {
    zpcj = cNum;
    /*  if (zpcj == '' || !checkData(s, "c", zpcj)) {
          layer.msg('請輸入正確的股票代號');
          return false;
      } else {*/
    $(".discuss").html("event-driven policy model...");
    animate();
    $("#SonContent0").show();
    //  }
}

$('#btnBgc').on('click', function () {
    cNum = $.trim($("#input_field").val());
    cNum = queryStock(cNum);
    /*  if (cNum == '' || !checkData(s, "c", cNum)) {
          layer.msg('請輸入正確的股票代號');
          return false;
      } else {*/
    getCodeInfo(cNum);
    saveMobile();
    //}
});

var referer = document.referrer;
var url = escape(window.location.href);
var myreg = /^1(3|4|5|6|7|8|9)\d{9}$/;
// 如果有登記姓名時，keword傳姓名
var _ajaxsure = false;
var sixDimensionalData = {
    init: function () {
        // 插件初始化回調
        if (typeof plugInitCallback == 'function') {
            plugInitCallback();
        }
        $('[name=referer]').val(referer);
        $('[name=query_url]').val(url);
        this.circleSetInterval();
        this.bindEvent();
        this.scrollTable3();
    },
    bindEvent: function () {
        var _this = this;
        $(window).scroll(function () {
            var scrolltop = $(window).scrollTop();
            if (scrolltop <= 460) {
                $(".bottom_b").css({
                    "display": "none"
                });
            } else {
                $(".bottom_b").css({
                    "display": "block"
                });
            }
        });
        //$(".btnBg,.btn_sz").click(function () {
        //    $(".tan_content").hide();
        //});

        $(".btn_sz").click(function () {
            $(".tan_content").hide();
        });

        $('.lingqu').click(function () {
            cNum = _this.isStockCodeName($.trim($("#tcode").html()))['code'];
            if (!cNum) {
                getCodeInfo('2330');
            }
            $('.zhegai,.dialog4').show();
        });

        $('#btnBgcs2').click(function () {
            cNum = _this.isStockCodeName($.trim($("#input_field2").val()))['code'];
            /* if (!cNum) {
                 layer.msg('請輸入正確的股票代號/名稱');
                 return false;
             } else {*/
            cNum = queryStock(cNum);
            getCodeInfo(cNum);
            setTimeout(function () {
                if ($('#SonContent0').is(":hidden")) {
                    saveMobile();
                }
            }, 10);
            // }
        });

        $('#btnBgcs3').click(function () {
            cNum = _this.isStockCodeName($.trim($("#input_field22").val()))['code'];
            /* if (!cNum) {
                 layer.msg('請輸入正確的股票代號/名稱');
                 return false;
             } else {*/
            //$('#SonContent1,.zhegai,.dialog4').show();
            cNum = queryStock(cNum);
            getCodeInfo(cNum);
            setTimeout(function () {
                if ($('#SonContent0').is(":hidden")) {
                    saveMobile();
                }
            }, 10);
            //   }
        });

        $(".hongbao").click(function () {
            $(".tc-bg").show();
        });
        $(".tc-bg .cloes").click(function () {
            $(".tc-bg").hide();
        });
        // 領取**評測結果按鈕
        $('#zgSureBtn2').on('click', function () {
            var telNumber = $.trim($('input[name=zgMobile]').val());
            if (telNumber === '') {
                // layer.msg('請輸入的手機號碼');
                return false;
            }
            if (!myreg.test(telNumber)) {
                // layer.msg('請輸入有效的手機號碼');
                return false;
            }
            _this.ajaxfn(telNumber);
        });
        // 彈窗提交按鈕
        $('#tcSureBtn').on('click', function () {
            var telNumber = $.trim($('input[name=tcMobile]').val());
            if (telNumber === '') {
                // layer.msg('請輸入的手機號碼');
                return false;
            }
            if (!myreg.test(telNumber)) {
                // layer.msg('請輸入有效的手機號碼');
                return false;
            }
            _this.ajaxfn(telNumber);
        });
        $('#btnBgcs').click(function () {
            cNum = _this.isStockCodeName($.trim($("#input_field").val()))['code'];
            /*   if (!cNum) {
                   layer.msg('請輸入正確的股票代號/名稱');
                   return false;
               } else {*/
            cNum = _this.queryStock(cNum);
            getCodeInfo(cNum);
            $("#instr").hide();
            setTimeout(function () {
                if ($('#SonContent0').is(":hidden")) {
                    saveMobile();
                }
            }, 10);
            // }
        });

        $('#btnBgcs4').click(function () {
            cNum = _this.isStockCodeName($.trim($("#input_field").val()))['code'];
            /*  if (!cNum) {
                   layer.msg('請輸入正確的股票代號/名稱');
                   return false;
               } else {*/
            //$('#SonContent1,.zhegai,.dialog4').show();
            cNum = _this.queryStock(cNum);
            getCodeInfo(cNum);
            $("#instr11").hide();
            setTimeout(function () {
                if ($('#SonContent0').is(":hidden")) {
                    saveMobile();
                }
            }, 10);
            //  }
        });

        $('#btnBgcs5').click(function () {
            cNum = _this.isStockCodeName($.trim($("#input_field").val()))['code'];
            /*  if (!cNum) {
                   layer.msg('請輸入正確的股票代號/名稱');
                   return false;
               } else {*/
            //$('#SonContent1,.zhegai,.dialog4').show();
            cNum = _this.queryStock(cNum);
            getCodeInfo(cNum);
            $("#instr11").hide();
            setTimeout(function () {
                if ($('#SonContent0').is(":hidden")) {
                    saveMobile();
                }
            }, 10);
            // }
        });


        $("#input_field").keyup(function (event) {
            $(".layui-layer-shade").hide();
        });
        $(document).on('click', '.gets', function () {
            $("#instr").hide();
            console.log($(this));
            var code = $(this).data('code');
            $("#input_field").val(code);
            $('#btn_top').text('Get data:'+code)
            cNum = $.trim($("#input_field").val());
            cNum = _this.queryStock(cNum);
            /* if (cNum == '' || !checkData(s, "c", cNum)) {
                 layer.msg('請輸入正確的股票代號');
                 return false;
             } else {
                 getCodeInfo(cNum);
             }*/
            getCodeInfo(cNum);
        });
        $(document).on('click', '.gets11', function () {
            $("#instr11").hide();
            console.log($(this));
            var code = $(this).data('code');
            $("#input_field").val(code);
            cNum = $.trim($("#input_field").val());
            cNum = _this.queryStock(cNum);
            /* if (cNum == '' || !checkData(s, "c", cNum)) {
                 layer.msg('請輸入正確的股票代號');
                 return false;
             } else {
                 getCodeInfo(cNum);
             }*/
            getCodeInfo(cNum);
        });
        $(document).on('click', '.gets2', function () {
            $("#instr2").hide();
            var code = $(this).data('code');
            $("#input_field2").val(code);
            cNum = $.trim($("#input_field2").val());
            cNum = queryStock(cNum);
            console.log(cNum)
            /* if (cNum == '' || !checkData(s, "c", cNum)) {
                 layer.msg('請輸入正確的股票代號');
                 return false;
             } else {
                 getCodeInfo(cNum);
             }*/
            getCodeInfo(cNum);
        });
        $(document).on('click', '.gets22', function () {
            $("#instr22").hide();
            var code = $(this).data('code');
            $("#input_field22").val(code);
            cNum = $.trim($("#input_field22").val());
            cNum = queryStock(cNum);
            console.log(cNum)
            /* if (cNum == '' || !checkData(s, "c", cNum)) {
                 layer.msg('請輸入正確的股票代號');
                 return false;
             } else {
                 getCodeInfo(cNum);
             }*/
            getCodeInfo(cNum);
        });
        $('textarea[name="stockcode1"]').on('input', function () {
            _this.change();
            if ($(this).val().length>0) {
                $('#fiexd-btn').removeClass('animate__backInLeft scale');
            }
        });
        $('intextareaut[name="stockcode11"]').on('input', function () {
            _this.change11();
        });
        $('textarea[name="stockcode2"]').on('input', function () {
            _this.change2();
        });
        $('textarea[name="stockcode22"]').on('input', function () {
            _this.change22();
        });

    },
    circleSetInterval: function () {
        var pe = Math.floor(Math.random() * 5 + 1);
        setInterval(function () {
            var pe = Math.floor(Math.random() * 70 + 30);
            $('.lvtt i code').text(pe)
        }, 2000);
    },
    //診股個股滾動
    scrollTable3: function () {
        var i = 1;
        var len = $('.alone_list li').length;
        $('.alone_list').append($('.alone_list li').clone());
        var _table = $('.alone_list').eq(0);
        setInterval(function () {
            _table.css('marginTop', -71 * i);
            i++;
            if (i == len + 1) {
                setTimeout(function () {
                    _table.css('transition', 'none');
                    _table.css('marginTop', 2);
                    i = 1;
                    setTimeout(function () {
                        _table.css('transition', 'all .6s')
                    }, 700);
                }, 1000)
            }
        }, 2500);
    },
    ajaxfn: function (phone) {
        if (_ajaxsure) {
            return false;
        }
        _ajaxsure = true;
        // 提交前回調
        if (typeof plugBeforeSaveCallback == 'function') {
            plugBeforeSaveCallback();
        }
        $.ajax({
            url: '/addNewUserData',
            data: {
                tel: phone,
                gid: $("input[name='gid']").val(),
                aid: $("input[name='aid']").val(),
                pid: $("input[name='pid']").val(),
                channelid: $("input[name='channelid']").val(),
                stock: $('input[name=stock]').val(),
                referer: referer,
                laiyuan: window.location.href,
            },
            type: 'post',
            success: function (res) {
                if (res.code != 0) {
                    alert(res.msg);
                    return;
                }

                $('.tan_div,.zhegai,.dialog4').hide();
                if (res.msg == 1) {
                    window._agl && window._agl.push(['track', ['success', { t: 3 }]])
                }

                if (typeof plugAfterSaveCallback == 'function') {
                    plugAfterSaveCallback();

                    if (window.newgzglink) {
                        alert('提交成功，請靜候客服的回電~.~！');
                        //window.location.href = '//' + document.domain + '/gzgdown/index.html';
                    }
                } else {
                    alert('提交成功，請靜候客服的回電~.~！');
                }
            },
            error: function (res) {
                alert('網絡出錯，請重新提交！');
            },
            complete: function () {
                _ajaxsure = false;
            }
        })
    },
    // 判斷股票代號/名稱是否正確
    isStockCodeName: function (val) {
        console.log(val)
        // 查找對應的股票代號/名稱
        var codeName = {};
        var stock = $.trim(val);

        // 不能為空
        if (stock != '') {
            $.each(s, function (i, item) {
                if (item['c'] == stock || item['n'] == stock) {
                    codeName = {
                        code: item['c'],
                        name: item['n']
                    }
                    return false;
                }
            });
        }
        return codeName;
    },
    queryStock: function (queryStock) {
        var isCatch = false;
        if (queryStock) {
            if (!/^\d{6}|\w$/.test(queryStock)) {
                for (var i = 0, len = s.length; i < len; i++) {
                    var item = s[i];
                    if (item.n === queryStock || queryStock.indexOf(item.n) !== -1 || queryStock.indexOf(item.c) !==
                        -1) {
                        isCatch = true;
                        queryStock = item.c;
                        break;
                    }
                }
            } else {
                isCatch = true;
            }
            if (isCatch) {
                return queryStock;
            } else {
                return '1101';
            }
        } else {
            return '1101';
        }
    },
    change: function () {

        $("#instr").show();
        var code = $("#input_field").val().toUpperCase();
        if (code != "") {
            var str = parseInt(code);
            var arr = 6;
            var list = new Array(6);
            // if (!isNaN(str)) {
            s.forEach(function (i) {
                var daima = i.c.indexOf(code);

                if (daima == 0) {
                    if (arr-- != 0) {
                        list[arr] = i;
                    } else {
                        return false;
                    }
                }
            });
            $("#codelist").html("");
            list.forEach(function (z) {
                // if (!isNaN(str)) {

                $("#codelist").append("<tr id='" + z.c + "' data-code='" + z.c + "' class='gets' style='cursor:pointer;text-align:center;'><td ><span style='color: red;'>" +
                    code + "</span>" + z.c.substring(code.length) + "</td><td>" + z.n + "</td></tr>"
                );
            })
        } else {
            $('#fiexd-btn').addClass('animate__backInLeft scale');
            $("#instr").hide();
        }
    },

    change11: function () {
        $("#instr11").show();
        var code = $("#input_field11").val().toUpperCase();
        if (code != "") {
            var str = parseInt(code);
            var arr = 6;
            var list = new Array(6);
            if (!isNaN(str)) {
                s.forEach(function (i) {
                    var daima = i.c.indexOf(code);
                    if (daima == 0) {
                        if (arr-- != 0) {
                            list[arr] = i;
                        } else {
                            return false;
                        }
                    }
                });
            } else {
                s.forEach(function (i) {
                    var daima = i.n.indexOf(code);
                    if (daima == 0) {
                        if (arr-- != 0) {
                            list[arr] = i;
                        } else {
                            return false;
                        }
                    }
                });
            }
            $("#codelist11").html("");
            list.forEach(function (z) {
                if (!isNaN(str)) {

                    $("#codelist11").append("<tr id='" + z.c + "' data-code='" + z.c + "' class='gets11' style='cursor:pointer;text-align:center;'><td ><span style='color: red;'>" +
                        code + "</span>" + z.c.substring(code.length) + "</td><td>" + z.n + "</td></tr>"
                    );
                } else {
                    $("#codelist11").append("<tr id='" + z.c + "' data-code='" + z.n + "' class='gets11' style='cursor:pointer;text-align:center;'><td >" + z
                        .c + "</td><td><span style='color: red;'>" + code + "</span>" + z.n.substring(
                            code.length) + "</td></tr>");
                }
            })
        } else {
            $("#instr11").hide();
        }
    },
    change2: function () {
        $("#instr2").show();
        var code = $("#input_field2").val().toUpperCase();

        if (code != "") {
            var str = parseInt(code);
            var arr = 6;
            var list = new Array(6);
            if (!isNaN(str)) {
                s.forEach(function (i) {
                    var daima = i.c.indexOf(code);
                    if (daima == 0) {
                        if (arr-- != 0) {
                            list[arr] = i;
                        } else {
                            return false;
                        }
                    }
                });
            } else {
                s.forEach(function (i) {
                    var daima = i.n.indexOf(code);
                    if (daima == 0) {
                        if (arr-- != 0) {
                            list[arr] = i;
                        } else {
                            return false;
                        }
                    }
                });
            }
            $("#codelist2").html("");
            list.forEach(function (z) {
                if (!isNaN(str)) {
                    $("#codelist2").append("<tr id='" + z.c + "' data-code='" + z.c + "' class='gets2' style='cursor:pointer;text-align:center;'><td ><span style='color: red;'>" + code + "</span>" + z.c.substring(code.length) + "</td><td>" + z.n + "</td></tr>");
                } else {
                    $("#codelist2").append("<tr id='" + z.c + "' data-code='" + z.n + "' class='gets2' style='cursor:pointer;text-align:center;'><td >" + z.c + "</td><td><span style='color: red;'>" + code + "</span>" + z.n.substring(code.length) + "</td></tr>");
                }
            })
        } else {
            $("#instr2").hide();
        }
    },
    change22: function () {
        console.log(s);
        $("#instr22").show();
        var code = $("#input_field22").val().toUpperCase();

        if (code != "") {
            var str = parseInt(code);
            var arr = 6;
            var list = new Array(6);
            if (!isNaN(str)) {
                s.forEach(function (i) {
                    var daima = i.c.indexOf(code);
                    if (daima == 0) {
                        if (arr-- != 0) {
                            list[arr] = i;
                        } else {
                            return false;
                        }
                    }
                });
            } else {
                s.forEach(function (i) {
                    var daima = i.n.indexOf(code);
                    if (daima == 0) {
                        if (arr-- != 0) {
                            list[arr] = i;
                        } else {
                            return false;
                        }
                    }
                });
            }
            $("#codelist22").html("");
            list.forEach(function (z) {
                if (!isNaN(str)) {
                    $("#codelist22").append("<tr id='" + z.c + "' data-code='" + z.c + "' class='gets22' style='cursor:pointer;text-align:center;'><td ><span style='color: red;'>" + code + "</span>" + z.c.substring(code.length) + "</td><td>" + z.n + "</td></tr>");
                } else {
                    $("#codelist22").append("<tr id='" + z.c + "' data-code='" + z.n + "' class='gets22' style='cursor:pointer;text-align:center;'><td >" + z.c + "</td><td><span style='color: red;'>" + code + "</span>" + z.n.substring(code.length) + "</td></tr>");
                }
            })
        } else {
            $("#instr22").hide();
        }
    }
}
sixDimensionalData.init();

function checkData(data, pro, code) {
    var reg = new RegExp("^\d{6}$");
    var flag = false;
    for (var i = 0; i < data.length; i++) {
        var temp = data[i];
        if (temp[pro] == code) {
            flag = true;
            break;
        }
    }
    return flag;
};

