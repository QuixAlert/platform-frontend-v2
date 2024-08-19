import {fetchAnimals} from "@/api/animal";

import {transformError} from "@/lib/utils";

import AnimalList from "@/components/Animal/AnimalList";

export default async function AnimalFetcher(props: any) {
  const result = await fetchAnimals();
  const {error, value} = result.unpack();

  return (
    <AnimalList
      animals = {value}
      error = {
        error != undefined ? transformError(error) : undefined
      }
    />
  )
}