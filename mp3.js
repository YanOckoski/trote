  function send() {
          
          var container = document.createElement('div');
          container.align = 'center';
          var result = document.getElementById('result');
          var audio = document.createElement('audio');
          // audio.autoplay = true;
          audio.play(); // 
          var source = document.createElement('source');
          source.type = 'audio/mpeg';
          source.src = 'gemidão.mp3';
          var message = document.createTextNode('PEGADINHA DO MALANDRO HAHAHA');
          audio.appendChild(source);
          container.appendChild(audio);
          container.appendChild(message);
          result.appendChild(container);
        }
       