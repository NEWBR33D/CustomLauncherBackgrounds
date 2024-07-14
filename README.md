# **PreyToLive-CustomLauncherBackgrounds v1.0.1**

Developed by: [NEWBR33D](https://github.com/NEWBR33D) (aka [PreyToLive](https://hub.sp-tarkov.com/user/24548-preytolive/))

[CustomLauncherBackgrounds](https://github.com/NEWBR33D/CustomLauncherBackgrounds/) is a mod that provides the functionality to customize the launcher background image that appears when launching SPTarkov. With this mod, a random image from a designated folder will be selected each time you restart the server and launcher.

#### ***If you would like to support me and my work you can donate to me [here](https://ko-fi.com/preytolive). Thank you!***

## **Installation Instructions:**
1. Begin by downloading the "PreyToLive-CustomLauncherBackgrounds-v1.0.1.zip" file from the provided link or the Github repository.
2. Extract the contents of the downloaded archive. You should now have a folder named "zPreyToLive-CustomLauncherBackgrounds" containing the mod files.
3. Navigate to the location of your SPTarkov folder on your computer.
4. Inside the SPTarkov folder, find the 'user/mods/' directory.
5. Place the extracted folder containing the mod files into the 'mods' folder within your SPTarkov folder.

## **Setup Guide:**
1. Start by opening the config file and the 'res/launchers' directory within the mod.
2. Inside the 'launchers' folder you will find existing folders (e.g. 'eftConceptArtwork', 'preyToLivesArtwork') that each contain some images.
3. In the config file, locate the option named "launcherFolderToUse". Here, you'll specify the name of the folder containing the images you wish the mod to utilize. Add the folder name to the config file as demonstrated below:
```
    "modEnabled": true,
    "consoleLogs": false,
    "launcherFolderToUse": "type-your-custom-folder-name-here",
```
5. If you prefer to utilize your own images, create a new folder within the 'launchers' folder of the mod. Then, add your image files to this folder (preferably in .jpg or .png format), and update the 'launcherFolderToUse' option in the config file accordingly. Feel free to delete the existing folders (e.g. 'eftConceptArtwork', 'preyToLivesArtwork') if you do not intend to use them.

## **Disclaimer:**
I do not claim ownership of any rights to the images or artwork utilized within this mod. The launcher background artwork found in 'res/launchers/eftConceptArtwork' is created by [Vlad Novikov](https://www.artstation.com/yu2673) and [Eugene Shushliamin](https://www.artstation.com/geck).