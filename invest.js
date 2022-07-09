var i;
function myFun(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '3413e0c36amsh91eaed68b9d8562p1df577jsne9a4ad8899fd',
            'X-RapidAPI-Host': 'realstonks.p.rapidapi.com'
        }
    };
    fetch('https://realstonks.p.rapidapi.com/TSLA', options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
                  document.getElementById("p1").innerHTML=data.change_percentage;
                  document.getElementById("p2").innerHTML=data.change_point;
                  document.getElementById("p3").innerHTML=data.price;
                  document.getElementById("p4").innerHTML=data.total_vol;
        })
        .catch((err)=>
        {
          console.error(err);
        });
}