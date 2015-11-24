if (navigator.webkitGetUserMedia) {  
  navigator.webkitGetUserMedia(
    // Первый параметр - так называемые constraints, ограничения;
    // в данном случае - предпочтительные параметры запрашиваемого потока:
    {
      audio: true,  // запрашиваем и аудио,...
      video: true   // ...и видео
    },
    // Второй параметр - функция, вызываемая в случае успеха
    function(stream) { // в качестве параметра передается объект LocalMediaStream
      console.log('Stream:', stream);
    },
    // Третий параметр - функция, вызываемая в случае ошибки
    function(error) { // в качестве параметра передается объект с ошибкой
      console.log('Error:', error);
    }
  );
} else {
  console.log('navigator.webkitGetUserMedia not supported. Are you using latest Chrome/Chromium?');
}