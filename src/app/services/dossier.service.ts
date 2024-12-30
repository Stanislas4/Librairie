// src/app/services/dossier.service.ts
import { Injectable } from '@angular/core';
import { Dossier } from '../models/dossier.model';
import { Livre } from '../models/livre.model';

@Injectable({
  providedIn: 'root',
})
export class DossierService {
  private dossiers: Dossier[] = [];

  constructor() {}

  // Ajouter un dossier
  creerDossier(dossier: Dossier): void {
    this.dossiers.push(dossier);
  }

  // Ajouter un livre dans un dossier spécifique
  ajouterLivreDansDossier(dossierNom: string, livre: Livre): void {
    const dossier = this.dossiers.find((d) => d.nom === dossierNom);
    if (dossier) {
      dossier.livres.push(livre);
    }
  }

  // Supprimer un livre dans un dossier spécifique
  supprimerLivreDansDossier(dossierNom: string, index: number): void {
    const dossier = this.dossiers.find((d) => d.nom === dossierNom);
    if (dossier) {
      dossier.livres.splice(index, 1);
    }
  }

  // Récupérer tous les dossiers
  getDossiers(): Dossier[] {
    return this.dossiers;
  }
}
