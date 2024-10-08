interface CreateGoalRequest {
  title: string;
  desiredWeeklyFrequence: number;
}

export async function createGoal({
  title,
  desiredWeeklyFrequence,
}: CreateGoalRequest) {
  await fetch("http://localhost:3333/goals", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      desiredWeeklyFrequence,
    }),
  });
}
