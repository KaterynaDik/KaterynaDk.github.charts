fetch("/regional-global-daily-latest.json").then(
    res => {
        res.json().then(
            data => {
                console.log(data);
                if (data.length > 0) {
                    var temp = "";
                    //--- start for loop
                    data.forEach((dt) => {
                        temp += '<tr>';
                        temp += '<td><a href="#staticBackdrop" class="chart-modal" data-bs-toggle="modal"><img class="chart-table-image"></img></a></td>';
                        temp += '<td class="chart-table-position">' + dt.Position + '</td>';
                        temp += '<td class="chart-table-track"><strong>' + dt.TrackName + '</strong>' + '<span> by ' + dt.Artist + '</span></td>';
                        temp += '<td class="chart-table-streams">' + dt.Streams + '</td></tr>';
                    });
                    //--- close for loop
                    document.getElementById("data").innerHTML = temp;

                }

            }
        )
    }
)









