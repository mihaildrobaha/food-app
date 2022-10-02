export interface IMealsData {

meals: [
    {
        id: number
        imageType: string
        title: string
        readyInMinutes: number
        servings: number
        sourceUrl: string
    },

    {
        id: number
        imageType: string
        title: string
        readyInMinutes: number
        servings: number
        sourceUrl: string
    },

    {
        id: number
        imageType: string
        title: string
        readyInMinutes: number
        servings: number
        sourceUrl: string
    },
],

nutrients: {
    calories: number
    protein: number
    fat: number
    carbohydrates: number
}

}