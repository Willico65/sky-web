// Cliente de la API. El backend en Python (FastAPI) se implementa en la fase 2.
// Mientras VITE_API_URL esté vacío, los formularios responden con { ok: false, offline: true }
// y la interfaz ofrece continuar por WhatsApp.

const BASE = (import.meta.env.VITE_API_URL ?? '').replace(/\/$/, '')

export const hasApi = () => !!BASE

export type SubmitResult = { ok: true } | { ok: false; offline?: boolean; message?: string }

export async function submitForm(endpoint: 'cotizaciones' | 'soporte' | 'pqrs', data: Record<string, unknown>): Promise<SubmitResult> {
  if (!BASE) return { ok: false, offline: true }
  try {
    const res = await fetch(`${BASE}/api/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (!res.ok) return { ok: false, message: `Error ${res.status}` }
    return { ok: true }
  } catch {
    return { ok: false, message: 'network' }
  }
}
