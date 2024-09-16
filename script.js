function calc(){
var l15 =document.getElementById("1.5l").value;
var l1 =document.getElementById("1l").value;
var l05 =document.getElementById("0.5l").value;
var l5 =document.getElementById("5l").value;
var lg =document.getElementById("1g").value;
var lj =document.getElementById("1j").value;
var ljm =document.getElementById("1jm").value;
var dr =document.getElementById("dr").value;

var p1 =document.getElementById("p1").value;
var p2 =document.getElementById("p2").value;
var p3 =document.getElementById("p3").value;
var p4 =document.getElementById("p4").value;
var p5 =document.getElementById("p5").value;
var p6 =document.getElementById("p6").value;
var p7 =document.getElementById("p7").value;
var p8 =document.getElementById("p8").value;



var prixl15=p1*112*l15;
var prixl11=p4*120*l1;
var prixl05=p2*175*l05;
var prixl5=p3*192*l5;
var prixlg=p5*140*lg;
var prixlj=p6*150*lj;
var prixljm=p7*160*ljm;
var prixdr=p8*180*dr;

document.getElementById("result").value= parseFloat(prixl15)+parseFloat(prixl11)+parseFloat(prixl05)+parseFloat(prixl5)+parseFloat(prixlg)+parseFloat(prixlj)+parseFloat(prixljm)+parseFloat(prixdr);
}
function sus(){
    var s  =document.getElementById("s1").value;
   var prix =document.getElementById("result").value;
   document.getElementById("s1").value=prix-s;

    }
    function add(){
        var a = parseFloat(document.getElementById("a1").value);
            var prix = parseFloat(document.getElementById("result").value);
       document.getElementById("a1").value= prix+ a;
    
        }





        class Fournisseur {
            constructor(dbName, storeName) {
                this.dbName = dbName;
                this.storeName = storeName;
                this.db = null;
                this.initDB();
            }
        
            // Initialiser la base de données
            initDB() {
                const request = indexedDB.open(this.dbName, 1);
        
                request.onupgradeneeded = (event) => {
                    const db = event.target.result;
                    const store = db.createObjectStore(this.storeName, { keyPath: 'id' });
        
                    store.createIndex('nom', 'nom', { unique: true });
                    store.createIndex('montant_restant', 'montant_restant', { unique: false });
        
                    // Ajouter "Bougelez" lors de la création de la base de données
                    store.put({ id: 1, nom: 'Bougelez', montant_restant: 100000 });
                };
        
                request.onsuccess = (event) => {
                    this.db = event.target.result;
                    console.log('Base de données initialisée avec succès');
                };
        
                request.onerror = (event) => {
                    console.error('Erreur lors de l\'initialisation de la base de données', event);
                };
            }
        
            // Verser un montant
            verserMontant(montantVerse) {
                const transaction = this.db.transaction([this.storeName], 'readwrite');
                const store = transaction.objectStore(this.storeName);
        
                const index = store.index('nom');
                const getRequest = index.get('Bougelez');
        
                getRequest.onsuccess = (event) => {
                    const fournisseur = event.target.result;
        
                    if (fournisseur) {
                        fournisseur.montant_restant -= montantVerse;
                        const updateRequest = store.put(fournisseur);
        
                        updateRequest.onsuccess = () => {
                            console.log('Montant restant mis à jour avec succès');
                            document.getElementById("af").value = fournisseur.montant_restant;
                        };
        
                        updateRequest.onerror = (event) => {
                            console.error('Erreur lors de la mise à jour du montant restant', event);
                        };
                    } else {
                        console.log('Fournisseur non trouvé');
                    }
                };
        
                getRequest.onerror = (event) => {
                    console.error('Erreur lors de la récupération du fournisseur', event);
                };
            }
        
            // Ajouter un montant
            ajouterMontant(montantAdditionnel) {
                const transaction = this.db.transaction([this.storeName], 'readwrite');
                const store = transaction.objectStore(this.storeName);
        
                const index = store.index('nom');
                const getRequest = index.get('Bougelez');
        
                getRequest.onsuccess = (event) => {
                    const fournisseur = event.target.result;
        
                    if (fournisseur) {
                        fournisseur.montant_restant += montantAdditionnel;
                        const updateRequest = store.put(fournisseur);
        
                        updateRequest.onsuccess = () => {
                            console.log('Montant additionnel ajouté avec succès');
                            document.getElementById("af").value = fournisseur.montant_restant;
                        };
        
                        updateRequest.onerror = (event) => {
                            console.error('Erreur lors de l\'ajout du montant', event);
                        };
                    } else {
                        console.log('Fournisseur non trouvé');
                    }
                };
        
                getRequest.onerror = (event) => {
                    console.error('Erreur lors de la récupération du fournisseur', event);
                };
            }
        
            afficherMontantRestant() {
                const transaction = this.db.transaction([this.storeName], 'readonly');
                const store = transaction.objectStore(this.storeName);
        
                const index = store.index('nom');
                const getRequest = index.get('Bougelez');
        
                getRequest.onsuccess = (event) => {
                    const fournisseur = event.target.result;
        
                    if (fournisseur) {
                        document.getElementById("af").value = fournisseur.montant_restant;
                        console.log(`Montant restant pour Bougelez : ${fournisseur.montant_restant}`);
                    } else {
                        console.log('Fournisseur non trouvé');
                    }
                };
        
                getRequest.onerror = (event) => {
                    console.error('Erreur lors de la récupération du fournisseur', event);
                };
            }
        
            modifierFournisseur(nouveauMontantRestant) {
                const transaction = this.db.transaction([this.storeName], 'readwrite');
                const store = transaction.objectStore(this.storeName);
        
                const index = store.index('nom');
                const getRequest = index.get('Bougelez');
        
                getRequest.onsuccess = (event) => {
                    const fournisseur = event.target.result;
        
                    if (fournisseur) {
                        
                        fournisseur.montant_restant = nouveauMontantRestant;
                        const updateRequest = store.put(fournisseur);
        
                        updateRequest.onsuccess = () => {
                            console.log('Fournisseur modifié avec succès');
                            document.getElementById("af").value = fournisseur.montant_restant;
                        };
        
                        updateRequest.onerror = (event) => {
                            console.error('Erreur lors de la modification du fournisseur', event);
                        };
                    } else {
                        console.log('Fournisseur non trouvé');
                    }
                };
        
                getRequest.onerror = (event) => {
                    console.error('Erreur lors de la récupération du fournisseur', event);
                };
            }
        }
        const fournisseur = new Fournisseur('maBaseDeDonnees', 'Fournisseur');
        
       
        function verser() {
            let vr = parseFloat(document.getElementById("vr").value);
            fournisseur.verserMontant(vr);
        }
        
        function ajouterMontant() {
            let aj = parseFloat(document.getElementById("aj").value);
            fournisseur.ajouterMontant(aj);
        }
        
        function afficherMontantRestant() {
            fournisseur.afficherMontantRestant();
        }
        
        function modifierFournisseur() {
            let md = parseFloat(document.getElementById("md").value);
            fournisseur.modifierFournisseur(md);
        }
        
        