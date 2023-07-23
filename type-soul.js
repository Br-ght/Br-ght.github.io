const raid_calculator = document.getElementById('raid_calculator');
let remaining_time = document.getElementById('remaining_time').value;

raid_calculator.addEventListener('submit', function(event){
    event.preventDefault();
    let days = parseInt(document.getElementById('days').value);
    let hours = parseInt(document.getElementById('hours').value);
    let minutes = parseInt(document.getElementById('minutes').value);

    let server_name = document.getElementById('server_name').value;
    var servers = document.getElementById('servers');
    var li = document.createElement('li');

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

        console.log("days = " + days);
        console.log("hours = " + hours);
        console.log("mins = " + minutes);
        console.log("Raid time = " + raid_time);
        console.log("Wait time = " + wait_time);
        console.log("Converted time = " + convert());

        let reverted_vals = [Math.round(raid_time/1440), parseInt((raid_time%1440)/60), Math.round(raid_time%60)]

        console.log("Reverted Vals = " + reverted_vals)

        function time_format() {
            tf_vals = [reverted_vals[0].toString(), reverted_vals[1].toString(), reverted_vals[2].toString()]
            let i = 0;
            while (i < reverted_vals.length){
                if (reverted_vals[i] < 10){
                    tf_vals[i] = tf_vals[i].padStart(2,"0")
                }
                i++;
            }
            return tf_vals;
        }
        if (wait_time == 40 && raid_time != 40){
            document.getElementById('remaining_time').textContent = 'Raid now!'
            document.getElementById('raid_at').textContent = `Next raid @ ${time_format()[0]} : ${time_format()[1]} : ${time_format()[2]}`
            li.appendChild(document.createTextNode(`${server_name.toUpperCase()} | Raid @\n${time_format()[0]} : ${time_format()[1]} : ${time_format()[2]}`));
            servers.appendChild(li);
            return('Raid started.')
        } else{
            document.getElementById('remaining_time').textContent = `${wait_time} minutes until raid.`
            document.getElementById('raid_at').textContent = `Raid @\n${time_format()[0]} : ${time_format()[1]} : ${time_format()[2]}`
            li.appendChild(document.createTextNode(`${server_name.toUpperCase()} | Raid @\n${time_format()[0]} : ${time_format()[1]} : ${time_format()[2]}`));
            servers.appendChild(li);
            return('x amount of time until raid.')
        }
    }
    console.log("Raid status = " + raid_status())

})