
// src/app/components/livre/livre.component.ts
import { Component } from '@angular/core';
import { Livre } from '../models/livre.model';
import { Dossier } from '../models/dossier.model';
import { DossierService } from './../services/dossier.service';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent {
  // Données liées à l'UI
  dossierNom: string = '';
  titre: string = '';
  auteur: string = '';
  anneePublication: number = 0;

  // Accéder aux dossiers via le service
  dossiers: Dossier[] = [];

  constructor(private dossierService: DossierService) {}

  // Ajouter un dossier
  ajouterDossier(): void {
    if (this.dossierNom) {
      const dossier = new Dossier(this.dossierNom);

      this.dossierService.creerDossier(dossier);
      this.dossiers = this.dossierService.getDossiers();
      this.dossierNom = '';  // Réinitialiser le champ du dossier
    }
  }

  // Ajouter un livre dans un dossier spécifique
  ajouterLivreDansDossier(dossierNom: string): void {
    const livre = new Livre(this.titre, this.auteur, this.anneePublication);
    this.dossierService.ajouterLivreDansDossier(dossierNom, livre);
    this.titre = '';
    this.auteur = '';
    this.anneePublication = 0;
  }

  // Supprimer un livre dans un dossier
  supprimerLivre(dossierNom: string, index: number): void {
    this.dossierService.supprimerLivreDansDossier(dossierNom, index);
    this.dossiers = this.dossierService.getDossiers(); // Rafraîchir la liste des dossiers
  }
}
