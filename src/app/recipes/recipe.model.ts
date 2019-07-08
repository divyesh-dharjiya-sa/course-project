import { Ingrediant } from '../shopping-list/ingrediant.model';

export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingrediant: Ingrediant[];

    constructor(name: string, description: string, imagePath: string , ingrediant: Ingrediant[]) {
            this.name = name;
            this.description = description;
            this.imagePath = imagePath;
            this.ingrediant = ingrediant;
    }
}

