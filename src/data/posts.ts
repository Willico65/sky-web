// Artículos del blog (SE-10). Se redactan después de construir el sitio, cuando la empresa lo indique.
// Calendario aprobado: 16 oct, 30 oct, 13 nov, 27 nov, 11 dic y 23 dic de 2026.
export interface Post {
  slug: string
  title: string
  date: string // AAAA-MM-DD
  line: string
  excerpt: string
  body: string // Markdown sencillo
}

export const POSTS: Post[] = []
