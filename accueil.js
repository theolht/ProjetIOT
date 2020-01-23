#calendarMain1, #calendarMain2{
    margin-left: 20%;
}
/* conteneur calendrier */
.calendarWrap{
    display: none;
    position: absolute;
    z-index: 1000;
    width: 210px;
    padding: 5px 10px 10px 10px;
    background-color: #2e373f;
    /*background-color: rgba(46, 55, 63, 0.95);*/
    border-radius: 10px;
    -moz-box-shadow: 0 0 10px #555;
    -webkit-box-shadow: 0 0 10px #555;
    box-shadow: 0 0 10px #555;
    font-size: 12px;
}
/* bouton d'affichage*/
#calendarMain1 > input, #calendarMain2 > input{
    display: block;
    width: 100px;
    height: 22px;
    padding-top: 2px;
    background-color: #2e373f;
    color: #fff;
    border-radius: 5px;
    border: none;
}
#calendarMain1 > input:hover, #calendarMain2 > input:hover{
    background-color: #2673cb;
}
/* navigation dans le calendrier */
.calendarWrap ul{
    margin: 5px 0 10px 0;
    padding: 0;
}
.calendarWrap li{
    margin: 0;
    padding: 0;
    width: 20px;
    display: inline-block;
    *display: inline;
}
.calendarWrap li.calendarTitle{
    width: 170px;
    color: #ccc;
    text-align: center;
}
.calendarWrap li input{
    width: 20px;
    background-color: #5d6f7f;
    border: none;
    color: #fff;
}
.calendarWrap li input:hover{
    background-color: #6f8598;
}
/* calendrier */
.jsCalendar{
    color: #fff;
    border-collapse: collapse;
}
.jsCalendar th{
    color: #8ba7bf;
    font-size: 16px;
    font-weight: normal;
    text-align: center;
}
.jsCalendar td{
    padding: 0;
    border: none;
}
.jsCalendar a{
    display: block;
    width: 30px;
    padding: 3px 0 3px 0;
    color: #fff;
    font-weight: bold;
    text-decoration: none;
    text-align: center;
}
.jsCalendar .day:hover a{
    background-color: #2673cb;
    border-color: #2673cb;
}
.jsCalendar .selectedDay a{
    background-color: #c44d38;
    border-color: #c44d38;
} (date.css)