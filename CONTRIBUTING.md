# Guía de Contribución

¡Gracias por tu interés en contribuir a Pedagia! Este documento proporciona instrucciones para contribuir al proyecto.

---

## Código de Conducta

Al participar en este proyecto, te compromete a mantener un ambiente respetuoso y profesional. Cualquier forma de acoso, discriminación o comportamiento tóxico no será tolerada.

---

## ¿Cómo Contribuir?

### Reporting Bugs

Si encontraste un bug, por favor crea un issue con:

1. **Título claro** describiendo el problema
2. **Descripción detallada** del problema
3. **Pasos para reproducir** el bug
4. **Capturas de pantalla** si aplica
5. **Entorno** (navegador, sistema operativo, etc.)

### Sugerencias de Funcionalidades

Para sugerir nuevas funcionalidades:

1. Revisa que no exista ya la funcionalidad
2. Crea un issue con la etiqueta "enhancement"
3. Describe el caso de uso
4. Explica cómo debería funcionar
5. Considera si es algo que Beneficia al objetivo del proyecto

### Pull Requests

#### Proceso

1. **Fork** el repositorio
2. **Clona** tu fork: `git clone https://github.com/TU-USERNAME/PEDAGIA.git`
3. Crea una **branch** para tu feature:
   ```bash
   git checkout -b feature/nueva-caracteristica
   ```
4. Realiza tus **cambios** siguiendo las normas de código
5. **Commit** tus cambios:
   ```bash
   git commit -m 'Agrega: descripción breve de los cambios'
   ```
6. **Push** a tu fork:
   ```bash
   git push origin feature/nueva-caracteristica
   ```
7. Crea un **Pull Request** en GitHub

#### Normas de Código

- ✅ Usa ESLint para verificar el código
- ✅ Sigue las convenciones de Next.js y React
- ✅ Comenta el código cuando sea necesario
- ✅ Usa nombres descriptivos para variables y funciones
- ✅ Mantén el código limpio y organizado

#### Antes de Enviar PR

- [ ] El código pasa todas las pruebas
- [ ] El código no tiene errores de ESLint
- [ ] Los cambios están documentados si es necesario
- [ ] Actualizaste la documentación si es necesario

---

## Estructura de Commits

Usamos commits convencionales para mantener un historial limpio:

```
feat:     Nueva funcionalidad
fix:      Corrección de bug
docs:     Documentación
style:    Estilos (CSS, etc.)
refactor: Refactorización de código
test:     Agregar o corregir tests
chore:    Tareas de mantenimiento
```

Ejemplos:
- `feat: Agregar nueva página de servicios`
- `fix: Corregir labels en formulario de contacto`
- `docs: Actualizar README con nuevas instrucciones`

---

## Recursos Adicionales

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Guía de ESLint](https://eslint.org/docs/user-guide)

---

## Preguntas?

Si tienes alguna pregunta, no dudes en crear un issue o contactar al equipo.

¡Gracias por tu contribución! 🎉