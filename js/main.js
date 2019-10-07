


let pics_src = ["url(/assets/top-1.png)",
                "url(/assets/top-2.png)",
                "url(/assets/top-3.png)", 
                "url(/assets/top-4.png)",
                "url(/assets/top-5.png)",
                "url(/assets/top-6.png)"]


var top_picture = document.getElementById('home');
top_picture.style.backgroundImage = 'url(/assets/top-1.png)';



let i = 1;
{ 
    const showTime = () => {
      console.log(new Date());
      i++;
      if(i >= pics_src.length) {
          i = 0;
      }
      top_picture.style.backgroundImage = pics_src[i]
    };
    let timerId = setInterval(showTime, 5000);
}

