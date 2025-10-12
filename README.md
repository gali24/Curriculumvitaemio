# Portfolio CV — Starter (Lilac/Dark)

> Minimalista, limpio y 100% estático. Ideal para editar en Cursor y desplegar en Vercel o GitHub Pages.

## Estructura
```
portfolio-cv-jc-starter/
├── index.html
├── README.md
├── data/
│   └── projects.json        # Editá tus demos aquí
├── js/
│   └── app.js               # Lógica de render y filtros
├── assets/
│   └── style.css            # Tweaks extra (opcional)
└── vercel.json              # Para rutas limpias (opcional)
```

## Personaliza en 5 minutos
1. Abre `data/projects.json` y cargá tus proyectos reales (demoUrl y repoUrl).
2. En `index.html` cambiá tu nombre, email, WhatsApp y el link de tu CV PDF.
3. Ajustá paleta o componentes rápidos en `assets/style.css` (si querés).

## Correr local
- Sin Node: abre `index.html` directo (algunas features como fetch JSON pueden requerir servidor local).
- Con Node: `npx http-server -p 3000` y abrí http://localhost:3000

## Deploy
### Vercel
1. Subí el repo a GitHub.
2. En Vercel → **New Project** → importá tu repo.
3. Framework: **Other**. Build: *(vacío)*. Output: **/** (root).
4. Deploy.

### GitHub Pages
1. Push al repo → **Settings → Pages → Deploy from a branch**.
2. Branch: `main` y carpeta raíz `/`.

## Licencia
MIT — úsalo y modificalo a gusto.
