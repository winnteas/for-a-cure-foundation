export const sendContactEmail = async (email: string, message: string) => {
  const res = await fetch("https://for-a-cure-foundation-backend.onrender.com/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, message }),
  });

  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.error || "Something went wrong");
  }

  return res.json();
};
