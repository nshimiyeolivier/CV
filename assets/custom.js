$(document).ready(function(){
            $('.os').animate({width:'85%'},200);
            $('.office').animate({width:'85%'},400);
        		$('.maintenance').animate({width:'85%'},600);
            $('.gestion').animate({width:'85%'},800);
            $('.reseau').animate({width:'60%'},1000);
        		$('.css').animate({width:'99%'},1100);
        		$('.html').animate({width:'99%'},1200);
        		$('.css').animate({width:'99%'},1300);
        		$('.bootstrap').animate({width:'99%'},1400);
            $('.js').animate({width:'95%'},1500);
            $('.jquery').animate({width:'96%'},1600);
        		$('.php').animate({width:'85%'},1700);
        		$('.wp').animate({width:'90%'},1800);
            $('.react').animate({width:'80%'},1900);
            $('.git').animate({width:'95%'},1920);
            $('.xd').animate({width:'99%'},1940);
            $('.photoshop').animate({width:'90%'},1960);
            $('.illustrator').animate({width:'96%'},2000);
        	});


// Fonction pour charger la traduction en fonction de la langue choisie
function loadTranslation(language) {
  fetch(language + '.json')
      .then(response => {
          if (!response.ok) {
              throw new Error('Erreur lors du chargement de la traduction');
          }
          return response.json();
      })
      .then(translations => {
          document.getElementById('cv_pdf_mobile').textContent = translations.cv_pdf_mobile;
          document.getElementById('metier_1').textContent = translations.metier_1;
          document.getElementById('metier_2').textContent = translations.metier_2;
          document.getElementById('profile').textContent = translations.profile;
          document.getElementById('passionne').textContent = translations.passionne;
          document.getElementById('motive').textContent = translations.motive;
          document.getElementById('creatif').textContent = translations.creatif;
          document.getElementById('esprit_d_equipe').textContent = translations.esprit_d_equipe;
          document.getElementById('loisirs').textContent = translations.loisirs;
          document.getElementById('lecture').textContent = translations.lecture;
          document.getElementById('musique').textContent = translations.musique;
          document.getElementById('basketball').textContent = translations.basketball;
          document.getElementById('langues').textContent = translations.langues;
          document.getElementById('francais').textContent = translations.francais;
          document.getElementById('anglais').textContent = translations.anglais;
          document.getElementById('neerlandais').textContent = translations.neerlandais;
          /* document.getElementById('cv_en_format_pdf').textContent = translations.cv_en_format_pdf; */
          document.getElementById('competences').textContent = translations.competences;
          document.getElementById('maintenance').textContent = translations.maintenance;
          document.getElementById('gestion_logiciels').textContent = translations.gestion_logiciels;
          document.getElementById('reseau').textContent = translations.reseau;
          document.getElementById('maintenances').textContent = translations.maintenances;
          document.getElementById('gestion_logiciel').textContent = translations.gestion_logiciel;
          document.getElementById('reseaux').textContent = translations.reseaux;
          document.getElementById('experiences').textContent = translations.experiences;
          document.getElementById('agent_helpdesk').textContent = translations.agent_helpdesk;
          document.getElementById('technicien_it').textContent = translations.technicien_it;
          document.getElementById('developpeur_web').textContent = translations.developpeur_web;
          document.getElementById('stagiaire').textContent = translations.stagiaire;
          document.getElementById('technicien_maintenance').textContent = translations.technicien_maintenance;
          document.getElementById('etudes').textContent = translations.etudes;
          document.getElementById('developpement_web_becode').textContent = translations.developpement_web_becode;
          document.getElementById('hambourg').textContent = translations.hambourg;
          document.getElementById('nyarurema').textContent = translations.nyarurema;
          document.getElementById('liens').textContent = translations.liens;
          document.getElementById('projets').textContent = translations.projets;
      })
      .catch(error => console.error('Erreur:', error));
}

// Charger la langue par défaut (ex. français)
//document.addEventListener('DOMContentLoaded', () => {
 // const defaultLanguage = localStorage.getItem('language') || 'fr';
  //loadTranslation(defaultLanguage);
  //document.getElementById('language_select').value = defaultLanguage;
//});

// Mettre à jour la langue lors du changement de sélection
document.getElementById('language_select').addEventListener('change', function() {
  const selectedLanguage = this.value;
  localStorage.setItem('language', selectedLanguage);
  loadTranslation(selectedLanguage);
});

//--------------------------------------------------------------

// une fonction pour cree un lien vers la page index.html dans les options langue
function goToLink() {
  var select = document.getElementById("language_select");
  var selectedValue = select.value;
  
  // Si la valeur n'est pas "none" et n'est pas vide, redirige vers l'URL
  if (selectedValue && selectedValue == "index.html") {
      window.location.href = selectedValue;
  } 
  
}   

/*

// un script pour selectionner un fichier de telechargement qui va avec la langue selectionné

        // Récupérer l'élément du sélecteur de langue et les liens de téléchargement
        const languageSelector = document.getElementById('language_select');
        const downloadLink1 = document.getElementById('downloadLink1');
        const downloadLink2 = document.getElementById('downloadLink2');

        // Fonction pour mettre à jour le chemin des fichiers en fonction de la langue
        function updateDownloadLinks() {
            const selectedLanguage = languageSelector.value;

            // Mettre à jour les chemins des fichiers pour les deux liens
            downloadLink1.href = `CV/${selectedLanguage}/cv.pdf`;
            downloadLink2.href = `CV/${selectedLanguage}/cv.pdf`;
        }

        // Ajouter un écouteur d'événements pour détecter le changement de langue
        languageSelector.addEventListener('change', updateDownloadLinks);

        // Charger la langue initialement depuis l'URL ou par défaut
document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);

  document.getElementById('language_select').value = selectedLanguage;
  loadTranslation(selectedLanguage);
});

// Mettre à jour la langue lors du changement de sélection
document.getElementById('language_select').addEventListener('change', function() {
  const selectedLanguage = this.value;
  const newURL = `${window.location.pathname}?lang=${selectedLanguage}`;
  window.history.pushState({path: newURL}, '', newURL);  // Met à jour l'URL sans recharger la page
  loadTranslation(selectedLanguage);
});

*/