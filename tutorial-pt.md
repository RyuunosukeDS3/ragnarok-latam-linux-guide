# 🎮 Como Instalar Ragnarok LATAM no Linux via Proton (usando Heroic)

Se você quer rodar o **Ragnarok LATAM** no Linux, dá pra fazer funcionar perfeitamente com o **Heroic Games Launcher** e **Proton GE**. Esse passo a passo foi testado e funciona — tudo graças ao **aleex5**, que descobriu esse método.

## ✅ Pré-requisitos

- **Heroic Games Launcher** instalado
- **Proton GE** (Proton GloriousEggroll)

## 📥 Instalando o Proton GE no Heroic

1. Abra o **Heroic Games Launcher**
2. Vá em `Configurações` → `Wine Manager`
3. Na aba **Proton-GE**, baixe a versão **GE-Proton9-27**  (Algumas pessoas obtiveram sucesso com o Proton 9.0 na Steam)

## 🎮 Instalando o Ragnarok no Heroic

1. No Heroic, clique em **Run Installer First** (Lembrando que a versão do proton tem que ser selecionada **ANTES** de instalar o .exe)
3. Selecione o instalador `.exe` do **Ragnarok LATAM** que você baixou
4. Rode o instalador normalmente
5. Ao final, localize o executável do jogo:
   - Caminho padrão:  
     `~/Games/Heroic/Prefixes/default/Ragnarok/pfx/drive_c/Gravity/Ragnarok/Ragnarok.exe`

6. Finalize a instalação

## ⚙️ Configurando o Wine (Proton)

1. No Heroic, abra as **Configurações** do jogo
2. Clique em **Wine Config (winecfg)** ([ver imagem](https://imgur.com/a/u7YgkpL ))
3. Na aba **Aplicativo**, selecione o modo de compatibilidade **Windows 7** ([ver imagem](https://imgur.com/a/XRz9tgW ))
4. Clique em **Aplicar** e depois em **OK**
5. **(Opcional)** Algumas pessoas tiveram que deletar o arquivo `dbghelp.dll`. Vale tentar! ([ver imagem](https://imgur.com/a/qmdd9jb ))

## 🚀 Rodando o Ragnarok

Agora é só iniciar o jogo normalmente pelo Heroic, escolhendo o executável correto.  
Se tudo estiver certo, ele vai abrir de boa!

## 🙌 Agradecimentos

Um agradecimento especial ao @aleex5 , que descobriu essa configuração e compartilhou com a galera — salvando a comunidade Linux que queria reviver esse clássico!
