export class Saison {
    private _id: number;
    private _numero: number;
    private _image: string;
    private _serie: string;


	constructor(id: number, numero: number, image: string, serie: string) {
		this._id = id;
		this._numero = numero;
		this._image = image;
		this._serie = serie;
	}

}