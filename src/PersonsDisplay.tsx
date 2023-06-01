import Card from "./UI/Card.tsx";
import Person from "./classes/Person.tsx";

interface Props {
  persons: Person[];
}
const PersonsDisplay = (props: Props) => {
  return (
    <>
      {props.persons.map((person: Person) => {
        return (
          <Card>
            <p>
              {person.username} ({person.age} years old)
            </p>
          </Card>
        );
      })}
    </>
  );
};

export default PersonsDisplay;
