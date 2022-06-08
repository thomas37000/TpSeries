import { Saison } from './saison-models';

export class Series {
  private _id: number;
  private _nom: string;
  private _image: string;
  private _saisons: Saison;

  constructor(id: number, nom: string, image: string, saisons: Saison) {
    this._id = id;
    this._nom = nom;
    this._image = image;
    this._saisons = saisons;
  }

  public getId(): number {
    return this._id;
  }

  public setId(value: number) {
    this._id = value;
  }

  public getNom(): string {
    return this._nom;
  }

  public setNom(value: string) {
    this._nom = value;
  }

  public getImage(): string {
    return this._image;
  }

  public setImage(value: string) {
    this._image = value;
  }

  public getSaisons(): Saison {
    return this._saisons;
  }
}
