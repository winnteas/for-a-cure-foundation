export const subscribe = async (email: string) => {
  const res = await fetch("https://for-a-cure-foundation-backend.onrender.com/subscribe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Something went wrong");
  }

  return res.json();
};
