$(document).ready(function () {

    resizeTemplate();
    $(window).resize(resizeTemplate)

    function resizeTemplate() {
        if ($(window).width() <= 768) {
            $('#sidebar').collapse('hide');
        } else {
            $('#sidebar').collapse('show');
        }
    }

    $('#sidebar').on('hide.bs.collapse', function (e) {
        if (e.target == this) {
            $('#main').removeClass('col-md-10');
        }
    })

    $('#sidebar').on('show.bs.collapse', function (e) {
        if (e.target == this) {
            $('#main').addClass('col-md-10');
        }
    })
});


$(document).ready(function () {
    $("#mydate-1").persianDatepicker({

        "inline": false,
        "format": "LLLL",
        "viewMode": "day",
        "initialValue": true,
        "minDate": 1579771706476,
        "maxDate": 1580722106490,
        "autoClose": true,
        "position": "auto",
        "altFormat": "lll",
        "altField": "#altfieldExample",
        "onlyTimePicker": false,
        "onlySelectOnDate": false,
        "calendarType": "persian",
        "inputDelay": 800,
        "observer": false,
        "calendar": {
            "persian": {
                "locale": "fa",
                "showHint": true,
                "leapYearMode": "algorithmic"
            },
            "gregorian": {
                "locale": "en",
                "showHint": true
            }
        },
        "navigator": {
            "enabled": true,
            "scroll": {
                "enabled": true
            },
            "text": {
                "btnNextText": "<",
                "btnPrevText": ">"
            }
        },
        "toolbox": {
            "enabled": true,
            "calendarSwitch": {
                "enabled": true,
                "format": "MMMM"
            },
            "todayButton": {
                "enabled": true,
                "text": {
                    "fa": "امروز",
                    "en": "Today"
                }
            },
            "submitButton": {
                "enabled": true,
                "text": {
                    "fa": "تایید",
                    "en": "Submit"
                }
            },
            "text": {
                "btnToday": "امروز"
            }
        },
        "timePicker": {
            "enabled": true,
            "step": 1,
            "hour": {
                "enabled": true,
                "step": null
            },
            "minute": {
                "enabled": true,
                "step": null
            },
            "second": {
                "enabled": true,
                "step": null
            },
            "meridian": {
                "enabled": true
            }
        },
        "dayPicker": {
            "enabled": true,
            "titleFormat": "YYYY MMMM"
        },
        "monthPicker": {
            "enabled": true,
            "titleFormat": "YYYY"
        },
        "yearPicker": {
            "enabled": true,
            "titleFormat": "YYYY"
        }
    });
});

$(document).ready(function () {
    $("#mydate-2").persianDatepicker({

        "inline": false,
        "format": "LLLL",
        "viewMode": "day",
        "initialValue": true,
        "minDate": 1579771706476,
        "maxDate": 1580722106490,
        "autoClose": true,
        "position": "auto",
        "altFormat": "lll",
        "altField": "#altfieldExample",
        "onlyTimePicker": false,
        "onlySelectOnDate": false,
        "calendarType": "persian",
        "inputDelay": 800,
        "observer": false,
        "calendar": {
            "persian": {
                "locale": "fa",
                "showHint": true,
                "leapYearMode": "algorithmic"
            },
            "gregorian": {
                "locale": "en",
                "showHint": true
            }
        },
        "navigator": {
            "enabled": true,
            "scroll": {
                "enabled": true
            },
            "text": {
                "btnNextText": "<",
                "btnPrevText": ">"
            }
        },
        "toolbox": {
            "enabled": true,
            "calendarSwitch": {
                "enabled": true,
                "format": "MMMM"
            },
            "todayButton": {
                "enabled": true,
                "text": {
                    "fa": "امروز",
                    "en": "Today"
                }
            },
            "submitButton": {
                "enabled": true,
                "text": {
                    "fa": "تایید",
                    "en": "Submit"
                }
            },
            "text": {
                "btnToday": "امروز"
            }
        },
        "timePicker": {
            "enabled": true,
            "step": 1,
            "hour": {
                "enabled": true,
                "step": null
            },
            "minute": {
                "enabled": true,
                "step": null
            },
            "second": {
                "enabled": true,
                "step": null
            },
            "meridian": {
                "enabled": true
            }
        },
        "dayPicker": {
            "enabled": true,
            "titleFormat": "YYYY MMMM"
        },
        "monthPicker": {
            "enabled": true,
            "titleFormat": "YYYY"
        },
        "yearPicker": {
            "enabled": true,
            "titleFormat": "YYYY"
        }
    });
});

$(document).ready(function () {
    $("#mydate-3").persianDatepicker({

        "inline": false,
        "format": "LLLL",
        "viewMode": "day",
        "initialValue": true,
        "minDate": 1579771706476,
        "maxDate": 1580722106490,
        "autoClose": true,
        "position": "auto",
        "altFormat": "lll",
        "altField": "#altfieldExample",
        "onlyTimePicker": false,
        "onlySelectOnDate": false,
        "calendarType": "persian",
        "inputDelay": 800,
        "observer": false,
        "calendar": {
            "persian": {
                "locale": "fa",
                "showHint": true,
                "leapYearMode": "algorithmic"
            },
            "gregorian": {
                "locale": "en",
                "showHint": true
            }
        },
        "navigator": {
            "enabled": true,
            "scroll": {
                "enabled": true
            },
            "text": {
                "btnNextText": "<",
                "btnPrevText": ">"
            }
        },
        "toolbox": {
            "enabled": true,
            "calendarSwitch": {
                "enabled": true,
                "format": "MMMM"
            },
            "todayButton": {
                "enabled": true,
                "text": {
                    "fa": "امروز",
                    "en": "Today"
                }
            },
            "submitButton": {
                "enabled": true,
                "text": {
                    "fa": "تایید",
                    "en": "Submit"
                }
            },
            "text": {
                "btnToday": "امروز"
            }
        },
        "timePicker": {
            "enabled": true,
            "step": 1,
            "hour": {
                "enabled": true,
                "step": null
            },
            "minute": {
                "enabled": true,
                "step": null
            },
            "second": {
                "enabled": true,
                "step": null
            },
            "meridian": {
                "enabled": true
            }
        },
        "dayPicker": {
            "enabled": true,
            "titleFormat": "YYYY MMMM"
        },
        "monthPicker": {
            "enabled": true,
            "titleFormat": "YYYY"
        },
        "yearPicker": {
            "enabled": true,
            "titleFormat": "YYYY"
        }
    });
});

$(document).ready(function () {
    $("#mydate-4").persianDatepicker({

        "inline": false,
        "format": "LLLL",
        "viewMode": "day",
        "initialValue": true,
        "minDate": 1579771706476,
        "maxDate": 1580722106490,
        "autoClose": true,
        "position": "auto",
        "altFormat": "lll",
        "altField": "#altfieldExample",
        "onlyTimePicker": false,
        "onlySelectOnDate": false,
        "calendarType": "persian",
        "inputDelay": 800,
        "observer": false,
        "calendar": {
            "persian": {
                "locale": "fa",
                "showHint": true,
                "leapYearMode": "algorithmic"
            },
            "gregorian": {
                "locale": "en",
                "showHint": true
            }
        },
        "navigator": {
            "enabled": true,
            "scroll": {
                "enabled": true
            },
            "text": {
                "btnNextText": "<",
                "btnPrevText": ">"
            }
        },
        "toolbox": {
            "enabled": true,
            "calendarSwitch": {
                "enabled": true,
                "format": "MMMM"
            },
            "todayButton": {
                "enabled": true,
                "text": {
                    "fa": "امروز",
                    "en": "Today"
                }
            },
            "submitButton": {
                "enabled": true,
                "text": {
                    "fa": "تایید",
                    "en": "Submit"
                }
            },
            "text": {
                "btnToday": "امروز"
            }
        },
        "timePicker": {
            "enabled": true,
            "step": 1,
            "hour": {
                "enabled": true,
                "step": null
            },
            "minute": {
                "enabled": true,
                "step": null
            },
            "second": {
                "enabled": true,
                "step": null
            },
            "meridian": {
                "enabled": true
            }
        },
        "dayPicker": {
            "enabled": true,
            "titleFormat": "YYYY MMMM"
        },
        "monthPicker": {
            "enabled": true,
            "titleFormat": "YYYY"
        },
        "yearPicker": {
            "enabled": true,
            "titleFormat": "YYYY"
        }
    });
});


$("#btncreator-1").click(function () {
    Child = $("<a></a>");
    $("#addnumberClassSession-1").click(function () {
        $("#SessionContainer-1").append(Child );
            Child.addClass("btn btn-primary m-2 text-decoration-none ");
            Child.attr('href' , '../6 -  Attendance System/index.html');
            Child.text(" جلسه " + $("#numberClassSession-1").val());

    });
});

$("#btncreator-2").click(function () {
    Child = $("<a></a>");
    $("#addnumberClassSession-2").click(function () {
        $("#SessionContainer-2").append(Child);
        Child.addClass("btn btn-primary m-2 text-decoration-none ");
        Child.attr('href' , '../6 -  Attendance System/index.html');
        Child.text(" جلسه " + $("#numberClassSession-2").val());
        // $("div#SessionContainer button:not(last-of-type)").attr("disabled","disabled");
    });
});

$("#btncreator-3").click(function () {
    Child = $("<a></a>");
    $("#addnumberClassSession-3").click(function () {
        $("#SessionContainer-3").append(Child);
        Child.addClass("btn btn-primary m-2 text-decoration-none ");
        Child.attr('href' , '../6 -  Attendance System/index.html');
        Child.text(" جلسه " + $("#numberClassSession-3").val());
        // $("div#SessionContainer button:not(last-of-type)").attr("disabled","disabled");
    });
});

$("#btncreator-4").click(function () {
    Child = $("<a></a>");
    $("#addnumberClassSession-4").click(function () {
        $("#SessionContainer-4").append(Child);
        Child.addClass("btn btn-primary m-2 text-decoration-none ");
        Child.attr('href' , '../6 -  Attendance System/index.html');
        Child.text(" جلسه " + $("#numberClassSession-4").val());
        // $("div#SessionContainer button:not(last-of-type)").attr("disabled","disabled");
    });
});


// Child.attr('data-toggle' , 'modal');
// Child.attr('data-target' , '#Attendance');
 // $("div#SessionContainer button:not(last-of-type)").attr("disabled","disabled");

let xhttp;
if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
} else {
    xhttp = new ActiveXObject();
}
xhttp.open('GET', 'data.txt', true);
xhttp.onreadystatechange = function () {
    if ((xhttp.readyState === 4) && (xhttp.status === 200)) {
        let modify = document.getElementsByTagName('small');
        for (let index = 0; index < 36; index++) {
            modify[index].innerHTML = xhttp.responseText;
        }   
    }    
}