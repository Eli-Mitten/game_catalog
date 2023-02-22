import{ISeller} from './seller.model'

export class Game {
    name!: string;
    dateRelease!: Date;
    imageUrl?: string;
    sellers?: ISeller[];

    constructor(name?: string, dateRealase?: string, imageUrl?: string, sellers?: ISeller[]) {
        this.name = name as string;
        this.dateRelease = new Date(dateRealase as string);
        this.imageUrl = imageUrl;
        this.sellers = sellers;
    }

    getYearsFromRelease(): number {
        const milliseconds = Date.now() - this.dateRelease.getTime();
        return this.convertToYears(new Date(milliseconds))
    }

    private convertToYears = (date: Date) => 
        Math.abs(date.getUTCFullYear() - 1970)
    
}

// IoC