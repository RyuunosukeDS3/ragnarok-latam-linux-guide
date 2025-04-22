# 🎮 Cómo Instalar Ragnarok LATAM en Linux con Proton (usando Heroic)

Si deseas jugar al **Ragnarok LATAM** en Linux, puedes hacerlo funcionar perfectamente con **Heroic Games Launcher** y **Proton GE**. Este paso a paso ha sido probado y funciona — todo gracias a **aleex5**, quien descubrió este método.

## ✅ Requisitos Previos

- **Heroic Games Launcher** instalado
- **Proton GE** (Proton GloriousEggroll)

## 📥 Instalando Proton GE en Heroic

1. Abre **Heroic Games Launcher**
2. Ve a `Configuraciones` → `Wine Manager`
3. En la pestaña **Proton-GE**, descarga la versión **GE-Proton9-27** (Algunas personas tuvieron éxito con Proton 9.0 en Steam)

## 🎮 Instalando Ragnarok en Heroic

1. En Heroic, haz clic en **Run Installer First** (Recuerda que debes seleccionar la versión de Proton **ANTES** de instalar el archivo .exe)
3. Selecciona el instalador `.exe` de **Ragnarok LATAM** que descargaste
4. Ejecuta el instalador normalmente
5. Al final, localiza el ejecutable del juego:
   - Ruta por defecto:  
     `~/Games/Heroic/Prefixes/default/Ragnarok/pfx/drive_c/Gravity/Ragnarok/Ragnarok.exe`

6. Finaliza la instalación

## ⚙️ Configurando Wine (Proton)

1. En Heroic, abre las **Configuraciones** del juego
2. Haz clic en **Wine Config (winecfg)** ([ver imagen](https://imgur.com/a/u7YgkpL ))
3. En la pestaña **Aplicación**, selecciona el modo de compatibilidad **Windows 7** ([ver imagen](https://imgur.com/a/XRz9tgW ))
4. Haz clic en **Aplicar** y luego en **OK**
5. **(Opcional)** Algunas personas tuvieron que eliminar el archivo `dbghelp.dll`. ¡Vale la pena intentarlo! ([ver imagen](https://imgur.com/a/qmdd9jb ))

## 🚀 Ejecutando Ragnarok

Ahora solo tienes que iniciar el juego normalmente desde Heroic, seleccionando el ejecutable correcto.  
¡Si todo está bien, debería abrir sin problemas!

## 🙌 Agradecimientos

Un agradecimiento especial a @aleex5, quien descubrió esta configuración y la compartió con la comunidad — ¡salvando a la comunidad Linux que quería revivir este clásico!
