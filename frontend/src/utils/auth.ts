export const SESSION_KEY = "ai-code-review-user";

export interface UserSession {
  username: string;
}

export function getUserSession(): UserSession | null {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(SESSION_KEY);
    if (!raw) {
      return null;
    }

    return JSON.parse(raw) as UserSession;
  } catch {
    return null;
  }
}

export function saveUserSession(session: UserSession) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(SESSION_KEY, JSON.stringify(session));
}

export function clearUserSession() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(SESSION_KEY);
}
