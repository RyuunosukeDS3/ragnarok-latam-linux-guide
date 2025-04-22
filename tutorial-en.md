# 🎮 How to Install Ragnarok LATAM on Linux via Proton (using Heroic)

If you want to run **Ragnarok LATAM** on Linux, you can make it work perfectly with **Heroic Games Launcher** and **Proton GE**. This step-by-step guide has been tested and works — all thanks to **aleex5**, who discovered this method.

## ✅ Prerequisites

- **Heroic Games Launcher** installed
- **Proton GE** (Proton GloriousEggroll)

## 📥 Installing Proton GE in Heroic

1. Open **Heroic Games Launcher**
2. Go to `Settings` → `Wine Manager`
3. In the **Proton-GE** tab, download **GE-Proton9-27** (Some users had success with Proton 9.0 on Steam)

## 🎮 Installing Ragnarok in Heroic

1. In Heroic, click on **Run Installer First** (Remember to select the Proton version **BEFORE** installing the .exe)
3. Select the **Ragnarok LATAM** installer `.exe` that you downloaded
4. Run the installer normally
5. When finished, locate the game executable:
   - Default path:  
     `~/Games/Heroic/Prefixes/default/Ragnarok/pfx/drive_c/Gravity/Ragnarok/Ragnarok.exe`

6. Finish the installation

## ⚙️ Configuring Wine (Proton)

1. In Heroic, open the **Game Settings**
2. Click on **Wine Config (winecfg)** ([view image](https://imgur.com/a/u7YgkpL ))
3. In the **Application** tab, select compatibility mode **Windows 7** ([view image](https://imgur.com/a/XRz9tgW ))
4. Click **Apply** and then **OK**
5. **(Optional)** Some users had to delete the `dbghelp.dll` file. It's worth a try! ([view image](https://imgur.com/a/qmdd9jb ))

## 🚀 Running Ragnarok

Now just launch the game normally from Heroic, selecting the correct executable.  
If everything is set up properly, it should open without issues!

## 🙌 Acknowledgments

A special thanks to @aleex5, who discovered this configuration and shared it with the community — saving the Linux community that wanted to revive this classic!
