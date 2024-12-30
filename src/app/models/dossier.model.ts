// src/app/models/dossier.model.ts
import { Livre } from './livre.model';

export class Dossier {
  constructor(
    public nom: string,
    public livres: Livre[] = []  // Liste des livres dans ce dossier
  ) {}
}
