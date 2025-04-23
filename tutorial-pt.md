# 🎮 Como Instalar Ragnarok LATAM no Linux via Proton (usando Heroic)

Se você quer rodar o **Ragnarok LATAM** no Linux, dá pra fazer funcionar perfeitamente com o **Heroic Games Launcher** e **Proton GE**. Este passo a passo foi testado e comprovado — tudo graças ao **aleex5**, que descobriu esse método e compartilhou com a comunidade.

---

# 🛡️ Heroic

## ✅ Pré-requisitos

- **Heroic Games Launcher** instalado  
  <details>
    <summary>Clique para ver como instalar</summary>

    Se você ainda não tiver o Flatpak instalado:

    ```bash
    sudo apt install flatpak
    ```

    Adicione o repositório Flathub:

    ```bash
    flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
    ```

    Instale o Heroic:

    ```bash
    flatpak install flathub com.heroicgameslauncher.hgl
    ```

    <div style="background-color:rgba(0, 0, 0, 0.2); border-left: 4px solid #ffcc00; padding: 10px; margin-top: 10px; font-style: italic;">
    A versão Flatpak do Heroic Games Launcher é preferível, pois garante atualizações rápidas, maior controle de permissões e desempenho superior em relação ao APT e Snap, que podem ter versões desatualizadas ou sobrecarga de desempenho. Além disso, por ser a versão "Oficial" do app, é recomendada pelos próprios desenvolvedores.
    </div>
  </details>

- **Proton GE** (Proton GloriousEggroll)

## 📥 Instalando o Proton GE no Heroic

1. Abra o **Heroic Games Launcher**  
2. Vá em `Configurações` → `Wine Manager`

   ![Wine Manager image](assets/images/wine-manager.png)

3. Na aba **Proton-GE**, baixe a versão **GE-Proton9-27**  
   (Versões mais novas também podem funcionar)

   ![Proton GE image](assets/images/proton-ge.png)

## 🎮 Instalando o Ragnarok no Heroic

1. No Heroic, clique em **ADD GAME**

   ![ADD GAME image](assets/images/add-game.png)

2. Preencha o campo **Game/App Name** com **Ragnarok**  
   (O Heroic deve carregar a imagem automaticamente — opcional)

   ![Game Name image](assets/images/game-name.png)

3. Expanda a seção **Show Wine Settings**

   ![Show Wine Settings image](assets/images/show-wine-settings.png)

4. Selecione **GE-Proton9-27** em **Wine Version**

   ![Wine Version image](assets/images/wine-version.png)

5. Clique em **Run Installer First**  
   (Importante: escolha o Proton **antes** de rodar o `.exe`)

   ![Run Instaler First image](assets/images/run-installer-first.png)

6. Selecione o instalador `.exe` do **Ragnarok LATAM** que você baixou

   ![Setup.exe image](assets/images/setup-exe.png)

7. Rode o instalador normalmente

   ![Open Setup.exe image](assets/images/open-setup.png)

8. Após a instalação, localize o executável do jogo:

   ![Select Executable image](assets/images/select-executable.png)

   - Caminho padrão:  
     `~/path/to/prefix/Prefixes/default/Ragnarok/pfx/drive_c/Gravity/Ragnarok/Ragnarok.exe`

   ![Raganarok.exe image](assets/images/ragnarok-exe.png)

9. Finalize a instalação

## ⚙️ Configurando o Wine (Proton)

1. No Heroic, vá até as **Configurações** do jogo

   ![Game Settings image](assets/images/game-settings.png)

2. Clique em **Wine Config (winecfg)**

   ![Winecfg image](assets/images/winecfg.png)

3. Na aba **Aplicativo**, clique em **Add application...** e selecione o `Ragexe.exe` no caminho `Gravity/Ragnarok/Ragexe.exe`

   ![Add application image](assets/images/add-application.png)  
   ![Ragexe.exe image](assets/images/rag-exe.png)

4. Com o `Ragexe.exe` selecionado, defina o modo de compatibilidade como **Windows 7**

   ![Windows 7 image](assets/images/win-7.png)

5. Clique em **Aplicar** e depois em **OK**

### 📝 Passos opcionais

1. Instale as fontes do Windows clicando em **Winetricks**

   ![Wine Tricks image](assets/images/wine-tricks.png)

2. Instale o pacote `corefonts`

   ![Corefonts image](assets/images/corefonts.png)

<div style="background-color:rgba(0, 0, 0, 0.2); border-left: 4px solid #ffcc00; padding: 10px; margin-top: 10px; font-style: italic;">
  <b>Importante:</b>  
  Algumas pessoas relataram que precisaram deletar o arquivo `dbghelp.dll` da pasta `system32` para o jogo rodar corretamente. Vale a tentativa se algo não funcionar!
</div>

## 🚀 Rodando o Ragnarok

Agora é só abrir o jogo normalmente pelo Heroic.  
Se tudo estiver configurado certo, o Ragnarok vai iniciar sem problemas!

## 🙌 Agradecimentos

Agradecimento especial ao **@aleex5**, que descobriu essa configuração e compartilhou com a galera — salvando a comunidade Linux que queria reviver esse clássico!
