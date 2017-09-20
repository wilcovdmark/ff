<script type="text/javascript">

var nummer;
var geluiden =["sound-fx/1.mp3", "sound-fx/2.mp3", "sound-fx/3.mp3", "sound-fx/4.mp3", "sound-fx/5.mp3", "sound-fx/6.mp3", "sound-fx/7.mp3", "sound-fx/8.mp3",];
        
var maxLeft=(imagesWidth-windowWidth)*-1;
                nummer = 9-(((imagesWidth-(0-imagesLeft)) / windowWidth));
				//console.log(nummer)
				
                var audio = new Audio(geluiden[nummer]);
                audio.play();
</script>