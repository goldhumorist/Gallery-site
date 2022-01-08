const gallery = document.querySelector(".section");

fetch('images.json')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
   showImages(data);
  });

  function showImages(data){
      for(let i=0; i<data.length; i++){
          const a = document.createElement("a");
          a.href = "./img/" + data[i];
          a.setAttribute('download' , 'download')
          const img = document.createElement("img");
          img.src = "./img/min_" + data[i];
          a.setAttribute('loading' , 'lazy');
          a.append(img);
          gallery.append(a);
      }   
  }