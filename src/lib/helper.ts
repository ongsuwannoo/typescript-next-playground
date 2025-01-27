export function getFromLocalStorage(key: string): string | null {
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem(key);
  }
  return null;
}

export function getFromSessionStorage(key: string): string | null {
  if (typeof sessionStorage !== 'undefined') {
    return sessionStorage.getItem(key);
  }
  return null;
}

export async function getJsonFromFileSync<T>(path: string): Promise<T> {
  const response = await fetch(`/api/${path}`);
  const data = await response.json();
  return data;
}
