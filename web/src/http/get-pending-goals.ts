type PendingGoalResponse = {
  id: string;
  title: string;
  desiredWeeklyFrequence: number;
  completionCount: number;
}[];

export async function getPendingGoals(): Promise<PendingGoalResponse> {
  const response = await fetch("http://localhost:3333/pending-goals");
  const data = await response.json();

  return data;
}
