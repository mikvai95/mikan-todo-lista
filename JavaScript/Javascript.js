// Tehtävän lisäys
document.querySelector('#lisaysNappi').onclick = function(){
    if(document.querySelector('#uusiTehtava input').value.length < 2){
        alert("Anna tehtävä, jossa on vähintään kaksi kirjainta.")
        document.getElementById('tekstikentta').style.borderColor = "red"; // Jos tehtävässä on vähemmän kuin kaksi merkkiä, tulee ilmoitus ja reuna muuttuu punaiseksi
    }
    else{

        // Onnistunut tehtävän lisäys antaa tekstikentälle vihreän reunan ja tehtävä tulee näkyviin tekstikentän alapuolelle, johon tulee tekstin lisäksi myös checkboxit ja poistonapit

        document.getElementById('tekstikentta').style.borderColor = "green";
        document.querySelector('#tehtavatnakyytassa').innerHTML += `
            <div class="tehtava">
            <input type="checkbox" class="suoritettu">
                <span id="tehtavanimi">
                    ${document.querySelector('#uusiTehtava input').value}
                </span>
                <button class="poista">
                    Poista tehtävä
                </button>
            </div>
        `;

        // Alla olevalla koodilla poistetaan tehtävä

        var nykyisetTehtavat = document.querySelectorAll(".poista");
        for(var i = 0; i < nykyisetTehtavat.length; i++){
            nykyisetTehtavat[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}
