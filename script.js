const form = document.getElementById('form');
let remaining_time = document.getElementById('remaining_time').value;

form.addEventListener('submit', function(event){
    event.preventDefault();
    let days = parseInt(document.getElementById('days').value);
    let hours = parseInt(document.getElementById('hours').value);
    let minutes = parseInt(document.getElementById('minutes').value);

    function convert(){
        if (!(days)){
            days = 0;
        }
        if (!(hours)){
            hours = 0;
        }
        if (!(minutes)){
            minutes = 0;
        }
        const convertall = ((days*1440) + (hours*60) + minutes);
        return convertall;
    }

    function raid_status(){
        let wait_time = Math.abs(40 - (convert()%40));
        let raid_time = (convert() + wait_time);
        console.log(raid_time)
        console.log(wait_time)
        console.log(convert())
        if (wait_time == 40){
            document.getElementById('remaining_time').textContent = 'Raid started.'
            return('Raid started.')
        } else{
            document.getElementById('remaining_time').textContent = `${wait_time} minutes until raid.`
            return('x amount of time until raid.')
        }

    }
    console.log(raid_status())

})