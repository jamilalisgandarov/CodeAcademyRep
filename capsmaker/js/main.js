jQuery(document).ready(function() {
    $("#addBtn").click(function() {
        alert("a");
        var input1 = $("#text3").val();
        $(".picTexts").html(input1);
    });

    $(".addLinkBtn").click(function() {
        alert("bla");
        var input2 = $("#text4").val();
        $(".capsPic")
            .css({
                "background-image": 'url(' + input2 + ')'
            })
    });
    var count = 0
    $(".effect1").click(function() {
        count++;
        if (count % 2 == 0) {
            $(".capsPic").css({
                "border": "5px solid black"
            })
        } else {
            $(".capsPic").css({
                "border": 'none'
            });
        }
    });

    $(".effect2").click(function() {
        count++;
        if (count % 2 == 0) {
            $(".picText").css({
                "background-color": "blue"
            })
        } else {
            $(".picText").css({
                "background-color": "red"
            });
        }
    });

    $(".effect3").click(function() {
        count++;
        if (count % 2 == 0) {
            $(".picTexts").css({
                "font-weight": "bold"
            })
        } else {
            $(".picTexts").css({
                "font-weight": "normal"
            });
        }
    });

    $(".effect4").click(function() {
        count++;
        if (count % 2 == 0) {
            $(".picText")

            .css({
                "top": "0px",
                "bottom": ""
            })
        } else {
            $(".picText")

            .css({
                "bottom": "0px",
                "top": ""
            });
        }
    })
});
