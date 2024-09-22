import AnimalCard from "@/components/Animal/AnimalCard/AnimalCard";
import errorHandlers from "@/components/ui/Errors/error.handler";

import Animal from "@/model/Animal";

import {ErrorName} from "@/errors/error-names";

type AnimalsListProps = {
  animals: Animal[] | undefined;
  error: Error | undefined;
};

export default function AnimalList({animals, error}: AnimalsListProps) {
  if (error) {
    const ErrorComponent = errorHandlers[error.name as ErrorName];
    return <ErrorComponent error={error} />;
  }

  return (
    <>
      <div className="cards">
        {
          animals?.map(animal => {
            return <AnimalCard key={animal.id} animal={animal}/>
          })
        }
      </div>
    </>
  )
}