/* Wayne Barnett  Founder & CEO     wayne-barnett-founder-ceo.jpg
Angela Caroll  Chief Editor      angela-caroll-chief-editor.jpg
Walter Gordon  Office Manager    walter-gordon-office-manager.jpg
Angela Lopez   Social Media      Manager  angela-lopez-social-media-manager.jpg
Scott Estrada  Developer         scott-estrada-developer.jpg
Barbara Ramos  Graphic Designer  barbara-ramos-graphic-designer.jpg */

//MILESTONE 0:
//Creare l’array di oggetti con le informazioni fornite.

const user = [
   {
     nome: "Wayne Barnett",
     ruolo: "Founder & CEO",
     foto: "wayne-barnett-founder-ceo.jpg"
   },

   {
     nome: "Angela Caroll",
     ruolo: "Chief Editor",
     foto: "angela-caroll-chief-editor.jpg"
   },

   {
     nome: "Walter Gordon",
     ruolo: "Office Manager",
     foto: "walter-gordon-office-manager.jpg"
   },

   {
     nome: "Angela Lopez",
     ruolo: "Social Media Manager",
     foto: "angela-lopez-social-media-manager.jpg"
   },

   {
     nome: "Scott Estrada",
     ruolo: "Developer",
     foto: "scott-estrada-developer.jpg"
   },

   {
     nome: "Barbara Ramos",
     ruolo: "Graphic Designer",
     foto: "barbara-ramos-graphic-designer.jpg"
   },
 ]

 //console.log(user)
 
   for (let key in user){
      console.log(user[key])
   }

   const divContentBox= document.getElementById('mainBox')

   for (let i = 0; i < user.length; i++){
      divContentBox.innerHTML +=
      '<div class="userCard d-flex">' +
      '<img src="img/' + user[i].foto + '">' +
      '<div class="userName">' + user[i].nome + '</div>' +
      '<p class="ruolo">' + user[i].ruolo + '</p>' + '</div>'
   }