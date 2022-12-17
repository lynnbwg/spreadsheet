
$( document ).ready(function() {


$.getJSON({
      // 1) on définit le fichier vers lequel on envoye la requête POST , 

  // url : 'https://docs.google.com/spreadsheets/d/e/2PACX-1vS4gfkt-ejpOnYkYkwEZ1Pk-66IrvaOjZ4o9eDuj4iD5QmTz1c44Aip1RV9wF8WFcy8TKokRxi8kslO/pubhtml',
  url : 'https://sheets.googleapis.com/v4/spreadsheets/1fnFiXQ_t-5JQQ4yezHCiQucu43b9PxHTnybs_hirbRs/values/Sheet1?key=AIzaSyAJiGonV9z_YJkpJPb9So3iJIyzXS8KAbU',


  // 2/ on spécifie la méthode  
  type : 'GET', // Le type de la requête HTTP, ici  GET

  // 4) format de retour du fichier php dans "data"
  dataType : 'json',
  
  // 5) fonction à effectuer en cas de succès
  success : function(data){ //  contient le HTML renvoyé
       
    // console.log(data);

    var html = "";
    

    console.log(data.values);

    for (i=1; i<data.values.length;i++) {

      nom = data.values[i][0].toUpperCase();
      prenom = data.values[i][1];
      gender = data.values[i][2];
      imageurl = data.values[i][3];

      html += '<div class="'+gender+'">';
      html += '<img src="./img/'+imageurl+'">';
      html += '<p>'+prenom+'</p>';
      html += '<h3>'+nom+'</h3>';
      html += '</div>';

    }// for


$('.container').html(html);

    setTimeout(() => {
      gsap.to('.container > div', {
        delay:0.3,
        duration: 1,
        x: 30,
        opacity: 1,
        stagger: 0.2,
      })

    }, "1000")
    gsap.to

    gsap.fromTo(
      ['h3, p'],{
          opacity:0,
          y:-10,
      },
      {
          opacity:1, 
          y:0,
          delay:1.4,
          ease:'power3.out',
          stagger:0.2,
      },
    )

        } // success
}); // intro ajax function
      

 

});//reday


const timeline = gsap.timeline({
  defaults:{
      duration:1,
  },
});

timeline.from('body',{

})
.fromTo(
  ['h1', 'h2'],{
      opacity:0,
      y:-20,
  },
  {
      opacity:1, y:0,
      duration:0.8,
      ease:'power1.out',
      stagger:0.2,
  },
  


)




