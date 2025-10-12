# 🚀 Instrucciones para Personalizar tu Portafolio

## ✅ Cambios Realizados

He actualizado tu portafolio con la siguiente información:

### 📝 Información Personal
- **Nombre**: Juan Carlos Godoy Navarro
- **Perfil**: Estudiante de Análisis de Sistemas en Universidad Americana
- **Rol**: Freelancer en desarrollo web
- **Enfoque**: Desarrollo web, aplicaciones y soluciones digitales
- **Contacto**: jnavarro371@outlook.com / +595 994 748 140

### 🛠️ Skills Actualizados
- **Desarrollo Web**: HTML5, CSS3, JavaScript, React, Vue.js, Tailwind CSS
- **Backend & Bases de Datos**: Node.js, Python, PHP, MySQL, MongoDB, SQLite
- **Herramientas**: Git, GitHub, VS Code, Figma, Adobe Creative Suite

### 📱 Proyectos Reales
1. **eMarkira - Chat GPT Personalizado** - JavaScript, AI, Chat ([Demo](https://emarkira.vercel.app/))
2. **Imperium - Plataforma de Alianzas** - HTML, CSS, JavaScript ([Demo](https://imperium-umber.vercel.app/))
3. **Sistema de Gestión Académica** - React, Node.js, MongoDB
4. **E-commerce Responsive** - HTML, CSS, JavaScript

## 🔧 Personalización Adicional Necesaria

### 1. Información de Contacto ✅ COMPLETADO
**Archivo**: `index.html` (líneas 203-204)

```html
<!-- Ya configurado con tu información real -->
<a href="mailto:jnavarro371@outlook.com">✉️ jnavarro371@outlook.com</a>
<a href="https://wa.me/595994748140">💬 WhatsApp (+595 994 748 140)</a>
```

### 2. CV - Google Drive ✅ COMPLETADO
**Archivo**: `index.html` (línea 74)

```html
<!-- Ya configurado con tu CV de Google Drive -->
<a href="https://drive.google.com/uc?export=download&id=1qoYQ0dELC3pDFs5OkofYppUm39IjzlJQ">Descargar CV</a>
```

### 3. Proyectos Reales ✅ COMPLETADO
**Archivo**: `data/projects.json`

Ya agregué tus proyectos reales:

```json
{
  "title": "eMarkira - Chat GPT Personalizado",
  "desc": "Mini chat GPT personalizado con contexto automático y rol de asesor de ventas.",
  "tags": ["JavaScript", "AI", "Chat"],
  "demoUrl": "https://emarkira.vercel.app/",
  "repoUrl": "#",
  "image": "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
},
{
  "title": "Imperium - Plataforma de Alianzas",
  "desc": "Plataforma web para alianzas estratégicas empresariales con servicios de consultoría.",
  "tags": ["HTML", "CSS", "JavaScript"],
  "demoUrl": "https://imperium-umber.vercel.app/",
  "repoUrl": "#",
  "image": "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop"
}
```

### 4. Imagen de Portada
**Archivo**: `index.html` (línea 74)

Reemplaza la URL de Unsplash con tu foto personal:
```html
<img src="https://tu-imagen-personal.jpg" alt="Tu nombre" />
```

### 5. Skills Específicos
**Archivo**: `index.html` (líneas 128-151)

Actualiza las tecnologías con las que realmente trabajas.

## 🚀 Cómo Usar

1. **Desarrollo Local**:
   ```bash
   # Abre el archivo index.html en tu navegador
   open index.html
   ```

2. **Deploy en Vercel** (ya configurado):
   ```bash
   # Instala Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   ```

3. **Deploy en GitHub Pages**:
   - Sube el código a un repositorio de GitHub
   - Ve a Settings → Pages
   - Selecciona "Deploy from a branch" → "main"

## 📱 Características del Portafolio

- ✅ **Responsive**: Se adapta a móviles, tablets y desktop
- ✅ **Modo Oscuro**: Toggle automático con persistencia
- ✅ **Filtros de Proyectos**: Por tecnología y búsqueda de texto
- ✅ **Animaciones**: Transiciones suaves y efectos hover
- ✅ **SEO Optimizado**: Meta tags y estructura semántica
- ✅ **Accesible**: Navegación por teclado y contraste adecuado

## 🎨 Personalización Visual

### Colores
**Archivo**: `index.html` (líneas 20-24)
```javascript
colors: {
  brand: { DEFAULT: '#6d28d9', 700:'#5b21b6', 900:'#3b0764' },
  accent: { DEFAULT: '#22c55e' }
}
```

### Fuentes
**Archivo**: `index.html` (línea 19)
```javascript
fontFamily: { sans: ['Inter','system-ui','ui-sans-serif'] }
```

## 📞 Soporte

Si necesitas ayuda con alguna personalización específica, no dudes en preguntar. ¡Tu portafolio está listo para impresionar! 🎉
