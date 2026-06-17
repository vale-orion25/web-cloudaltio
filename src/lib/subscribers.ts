const KEY = "ca_subscribers";

export interface Subscriber {
  email: string;
  date: string;
}

export function getSubscribers(): Subscriber[] {
  try {
    return JSON.parse(localStorage.getItem(KEY) || "[]");
  } catch {
    return [];
  }
}

export function addSubscriber(email: string): boolean {
  const list = getSubscribers();
  if (list.some((s) => s.email.toLowerCase() === email.toLowerCase())) return false;
  const now = new Date();
  const date = now.toLocaleDateString("es-CL", { day: "2-digit", month: "short", year: "numeric" });
  list.unshift({ email, date });
  localStorage.setItem(KEY, JSON.stringify(list));
  return true;
}

export function removeSubscriber(email: string): void {
  const list = getSubscribers().filter((s) => s.email !== email);
  localStorage.setItem(KEY, JSON.stringify(list));
}
