// Krok 1: Definicja typu TaskType
type TaskType = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

// Krok 2: Tablica tasks z przykładowymi zadaniami
const tasks: TaskType[] = [
  {
    id: 1,
    title: "obejrzeć wykład",
    description: "włącz komputer, otwórz maila, uruchom nagranie",
    completed: true,
  },
  {
    id: 2,
    title: "przeczytaj prezentację",
    description:
      "włącz Discorda, ściągnij prezentację w pdf, otwórz prezentacje, zapoznaj się z wykładem",
    completed: false,
  },

  {
    id: 3,
    title: "napisz zadanie domowe",
    description:
      "otwórz Discord, otwórz VSC, otwórz projekt, zaponaj się z treścią zadania, napisz poprawny kod",
    completed: true,
  },
];

// Krok 3: Funkcja addTask
const addTask = (task: TaskType): void => {
  tasks.push(task);
};

// Krok 4: Funkcja findTaskById
const findTaskById = (id: number): TaskType | undefined =>
  tasks.find((task) => task.id === id);

// Przykład użycia
addTask({
  id: 4,
  title: "Zrób zakupy",
  description: "Kup mleko i chleb",
  completed: false,
});

const taskToFind = findTaskById(2);
if (taskToFind) {
  console.log(`Znalezione zadanie: ${taskToFind.title}`);
  console.log(`Tak wygląda polecenie: ${taskToFind.description}`);
  console.log(`Stan wykonania zadania jest na: ${taskToFind.completed}`);
} else {
  console.log("Nie znaleziono zadania o podanym id.");
}
