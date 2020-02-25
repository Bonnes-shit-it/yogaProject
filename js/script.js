window.addEventListener('DOMContentLoaded', function(){

    'use strict';

    let info = document.querySelector('.info-header'),
        tab = document.querySelectorAll('.info-header-tab'),
        tabContent = document.querySelectorAll('.info-tabcontent');


    function hideTabContent(a){
        for (let i=a; i< tabContent.length ; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(b){
        if (tabContent[b].classList.contains('hide')){
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(e){
        if(e.target && e.target.classList.contains('info-header-tab')){
            for (let i=0; i< tab.length ; i++){
                if(e.target==tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });


    let deadline = '2020-02-24';

    function getTime(endtime){
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t/1000)%60),
            mins = Math.floor((t/1000/60)%60),
            hours = Math.floor((t/1000/60/60));
       
        if(seconds < 10){
               seconds= '0' + seconds;
        }
        if(hours < 10){
            hours= '0' + hours;
        }
        if(mins < 10){
            mins= '0' + mins;
        }
       
        return {
            'total' : t,
            'seconds' : seconds,
            'mins': mins,
            'hours' : hours
        }; 
    }

    function setClock(id,endtime){
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock(){
            let t = getTime(endtime);

            seconds.textContent = t.seconds;
            hours.textContent = t.hours;
            minutes.textContent = t.mins;

            if(t.total <= 0){
                clearInterval(timeInterval);
                seconds.textContent = '00';
                hours.textContent = '00';
                minutes.textContent = '00';
            }
        }
    }
    setClock('timer', deadline);

});