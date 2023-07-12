OC.L10N.register(
    "files_scripts",
    {
    "An error occurred when saving the action." : "Hiba történt a művelet mentése során.",
    "Action does not exist or is disabled." : "A művelet nem létezik vagy ki van kapcsolva.",
    "This action is not enabled on public shares." : "Ez a művelet nem engedélyezett a nyilvános megosztásokon",
    "Failed to create the action variables." : "A művelet változóinak létrehozása sikertelen.",
    "Lua extension not installed on the server." : "A Lua kiterjesztés nincs telepítve a kiszolgálóra.",
    "No script was chosen." : "Nem lett parancsfájl kiválasztva",
    "Run file action" : "Fájlművelet futtatása",
    "Pass files to a file action script and run it." : "Fájlok átadása a fájlművelet parancsfájljához, és futtatás.",
    "File actions" : "Fájlműveletek",
    "An unexpected error occurred when running the action." : "Váratlan hiba történt a művelet futtatása során.",
    "Title is empty." : "A cím üres.",
    "A script already exists with this title." : "Már létezik parancsfájl ezzel a címmel.",
    "Scripting tool which allows administrators to expand the file options menu." : "Parancsfájlkészítő-eszköz, amely lehetővé teszik, hogy a rendszergazdák kibővítsék a fájlok menüjét.",
    "Allows administrators to write small scripts which users can run through via the file actions menu in the Files app!\n\n- **🌕 Lua:** Script in Lua, its simple and has plenty of online resources.\n- **⚡️Empower users:** Make hard tasks easy, straight from the Files app.\n- **🙋 Open to suggestions:** Are you missing a function in the scripting API? Open an issue on Github!\n- **🤖 Integration with Nextcloud Flow:** allows you to fully automate workflows\n\n\n⚠️**Attention** This app requires additional configuration, and may not be suitable for all users. Make sure to read the documentation thoroughly.\n\n⚠️**Attention** Scripts may modify and delete files permanently. Take care and make sure to read the documentation thoroughly before scripting." : "Lehetővé teszi, hogy a rendszergazdák ki parancsfájlokat írjanak, melyeket a felhasználók a Fájlok alkalmazásban lévő fájlműveletek menüből futtathatnak.\n\n- **🌕 Lua:** Parancsfájlok Luában, egyszerű és számos online anyag érhető el róla.\n- **⚡️ Hatalom a felhasználók kezében:** Tegye könnyűvé a nehéz feladatokat, egyenesen a Fájlok alkalmazásból.\n- **🙋 Nyitottság a javaslatokra:** Valami hiányzik a parancsfájl API-ból? Nyisson egy jegyet a GitHubon!\n- **🤖 Integráció a Nextcloud Folyamattal:** lehetővé teszi a munkafolyamatok teljes automatizálását\n\n\n⚠️**Figyelem** Az alkalmazás további konfigurációt igényel, és nem biztos, hogy minden felhasználó számára megfelelő. Alaposan olvassa át a dokumentációt.\n\n⚠️**Figyelem** A parancsfájlok módosíthatják vagy véglegesen törölhetik a fájlokat. Figyeljen oda, és a parancsfájlok írása előtt alaposan olvassa át a dokumentációt.",
    "Edit" : "Szerkesztés",
    "Delete" : "Törlés",
    "Enabled" : "Engedélyezve",
    "Disabled" : "Letiltva",
    "Back" : "Vissza",
    "Variable name" : "Változónév",
    "User prompt" : "Felhasználói kérdés",
    "Input type" : "Bevitel típusa",
    "Large text area" : "Nagy szövegterület",
    "Allow multiple selections" : "Többszörös kiválasztások engedélyezése",
    "Multi-select options" : "Többszörös kiválasztás lehetőségei",
    "Allowed MIME types (defaults to all)" : "Engedélyezett MIME-típusok (alapértelmezés: összes)",
    "Save" : "Mentés",
    "Text" : "Szöveg",
    "Checkbox" : "Jelölőmező",
    "File picker" : "Fájlválasztó",
    "Multi-select" : "Többszörös kiválasztás",
    "User inputs" : "Felhasználói bemenetek",
    "Specify any number of input values the user may provide when running this action. These will be accessible to the script via the get_input() function." : "Adjon meg tetszőleges számú bemeneti értéket, amelyet a felhasználó megadhat a művelet futtatásakor. Ezek a get_input() függvény használatával lesznek elérhetők a parancsfájl számára.",
    "Move to bottom" : "Áthelyezés alulra",
    "Add input" : "Bemenet hozzáadása",
    "Script input name cannot be empty" : "A parancsfájl bemenetének neve nem lehet üres",
    "Script input name already in use." : "A parancsfájl bemenetének neve már használatban van.",
    "Script name" : "Parancsfájl neve",
    "A short description of what this action will do …" : "Rövid leírás arról, hogy a művelet mit csinál…",
    "Enable script" : "Parancsfájl engedélyezése",
    "Allow on public shares" : "Engedélyezés a nyilvános megosztásokon",
    "Limit to groups" : "Csoportokra korlátozás",
    "Select groups allowed to use this action" : "Válassza ki a csoportokat, akik használhatják a műveletet",
    "Limit to specific MIME type" : "Adott MIME-típusokra korlátozás",
    "Saved" : "Mentve",
    "An error occurred during saving" : "Hiba történt a mentés során",
    "Unknown error" : "Ismeretlen hiba",
    "Select an action to perform" : "Válasszon egy végrehajtandó műveletet",
    "Select action to perform" : "Válassza ki a végrehajtandó műveletet",
    "Execute" : "Végrehajtás",
    "Action completed!" : "A művelet kész.",
    "Action failed unexpectedly." : "A művelet váratlanul sikertelen lett.",
    "File actions are small Lua scripts that can create, modify, and/or delete files programatically. These actions may be triggered by users to be run on their files. Please read the documentation for more information." : "A fájlműveletek olyan Lua parancsfájlok, melyek programozottan tudnak fájlokat létrehozni, módosítani vagy törölni. Ezeket a műveleteket a felhasználók tudják kiváltani a saját fájljaikon. További információkért olvassa el a dokumentációt.",
    "File actions are not available because there is no available interpreter. Either install the Lua plugin on the server or enable the experimental interpreter." : "A fájlműveletek nem érhetők el, mert nem érhető el parancsértelmező. Vagy telepítse a Lua kiterjesztést a kiszolgálóra, vagy engedélyezze a kísérleti parancsértelmezőt.",
    "New action" : "Új művelet",
    "Actions in menu" : "Műveletek a menüben",
    "Shows file actions directly in the file menu, instead of needing to select it through the 'More actions' modal." : "A fájlműveletek megjelenítése közvetlenül a menüben ahelyett, hogy ki kellene választania a „További műveletek” párbeszédablakon.",
    "Experimental interpreter" : "Kísérleti parancsértelmező",
    "It is highly recommended to run the PHP Lua extension on your server. If this is not possible, the experimental Lua interpreter may be used. This interpreter is still under development and may not always produce the expected results." : "Ajánlatos, hogy a saját kiszolgálóján lévő PHP lua kiterjesztést futtassa. Ha ez nem lehetséges, akkor használhatja a kísérleti Lua értelmezőt. Ez a parancsértelmező még fejlesztés alatt áll, és nem biztos, hogy mindig a várt eredményt kapja.",
    "Use experimental interpreter" : "Kísérleti parancsértelmező használata",
    "More actions" : "További műveletek"
},
"nplurals=2; plural=(n != 1);");
