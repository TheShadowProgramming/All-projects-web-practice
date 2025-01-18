# Basic Bash commands

cd ../.. (takes you back 2 directories)
vi somefile (opens vim editor to edit the file, different commands for vim)
touch anything (add the file in the current directory)
cat command to concatenate content to the file
pwd (previous working directory)
ls (list all items in the current working directory)
mkdir (Make a new directory)
rm command se we can remove any file in the current directory (isse sirf reference hatta hai disk ka, but we can remove the file completely using the shred command)

# Installing .deb files

- sudo dpkg -i example.deb
- sudo apt-get install -f

# Installing .AppImage files

- cd ~/Downloads
- chmod +x example.AppImage
- ./example.AppImage

### creating desktop shortcuts to include the files in the application finder menu

- nano ~/.local/share/applications/example.desktop
  - [Desktop Entry] (ye bhi likhna padega)
    Name=Example App
    Exec=/home/yourusername/Downloads/example.AppImage
    Icon=/home/yourusername/Downloads/example.png
    Type=Application
    Categories=Utility;
- exit by cltr + X, Y, enter
- chmod +x ~/.local/share/applications/example.desktop
- sudo apt-get update
- sudo apt-get upgrade

# xfce4

### applications
- ~/.local/applications ke andar saare applications ka list rehta hai jo apan download karte hai AppImage waale (this has the obstudio, obsidian, visual studio code, audacity app, openshot)
- snap list (this has node installed in it)
- apt list --installed (to get the list of softwares installed through the apt command)
- /usr/share/applications ke through .dektop files/applications ka list milega

### applications
- xfdesktop4 for desktop configuration 
- xfwm4 for window management
- xfce4-panel for panel management
- xfce4-settings for editing settings (choose graphical one)