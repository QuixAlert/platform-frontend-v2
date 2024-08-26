import Animal from "@/model/Animal";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL_API

function convertAnimalType(type: string): string {
    if (type === "Dog") {
        return "-O3_Po8z51gd7qsdcQC-"
    }
    return "-O3_PvYNQ2-GIJj19tJf"
}


export const addAnimal = async (token: string, animal: Animal) => {
    try {
        const response = await fetch(`${baseUrl}/animals`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            method: 'POST',
            body: JSON.stringify({
                "name": animal.name,
                "id_animal_type": convertAnimalType(animal.animal_type.id),
                "animal_type": {
                    "id": convertAnimalType(animal.animal_type.id),
                    "type": animal.animal_type.id,
                },
                "age": animal.age,
                "gender": animal.gender,
                "description": animal.description,
                "size": animal.size || "Small",
                "photo": "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
                "address": "1234 Elm Street",
                "breed": animal.breed,
                "id_register_user": "-O3dGtS2S5Y7AeL4jww6"
            })
        })

        return await response.json() as Animal
    } catch (e) {
        const error = e as Error;
        throw new Error(`HTTP error! status: ${error.message}`);
    }
}