export const sendTeamUpEmail = async (firstName: string, lastName: string, email: string, phone: string, message: string) => {
  const res = await fetch("https://for-a-cure-foundation-backend.onrender.com/team-up", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ firstName, lastName, email, phone, message}),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Something went wrong");
  }

  return res.json();
};
