
const cardList = [
    {
        title: "butterfly-2",
        image: "images/butterfly-2.avif",
        link: "About butterfly-2",
        desciption: "Butterflies are attracted to certain flowers. They prefer brightly colored flowers with strong scents."
        },
   {
   title: "butterfly-3",
   image: "images/butterfly-3.jpeg",
   link: "About butterfly-3",
   desciption: "Butterflies have compound eyes. These eyes are made up of thousands of tiny lenses, giving them a wide field of vision."
   }

   ]
   const clickMe = () => {
   alert("Thanks for clicking me. Hope you have a nice day!")
   }
   const submitForm = () => {
   let formData = {};
   formData.first_name = $('#first_name').val();
   formData.last_name = $('#last_name').val();
   formData.password = $('#password').val();
   formData.email = $('#email').val();
   console.log("Form Data Submitted: ", formData);
   }
   const addCards = (items) => {
   items.forEach(item => {
   let itemToAppend = '<div class="col s4 center-align">'+
   '<div class="card medium"><div class="card-image waves-effect waves-block waves-light"><img class="activator" src="'+item.image+'">'+
   '</div><div class="card-content">'+
   '<span class="card-title activator grey-text text-darken-4">'+item.title+'<i class="material-icons right">more_vert</i></span><p><a href="#">'+item.link+'</a></p></div>'+
   '<div class="card-reveal">'+
   '<span class="card-title grey-text text-darken-4">'+item.title+'<i class="material-icons right">close</i></span>'+
   '<p class="card-text">'+item.desciption+'</p>'+
   '</div></div></div>';
   $("#card-section").append(itemToAppend)
   });
   }
   $(document).ready(function(){
   $('.materialboxed').materialbox();
   $('#clickMeButton').click(()=>{
       clickMe();
       $('.modal').modal();
   })
   $('#formSubmit').click(()=>{
   submitForm();
   })
   addCards(cardList);
  
   });
   
   