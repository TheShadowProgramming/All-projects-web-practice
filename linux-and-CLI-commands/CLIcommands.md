# Basic Bash commands

cd ../.. (takes you back 2 directories)
vi somefile (opens vim editor to edit the file, different commands for vim)
touch anything (add the file in the current directory)
pwd (previous working directory)
ls (list all items in the current working directory)
mkdir (Make a new directory)

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
- chmod +x ~/.local/share/applications/example.desktop
- sudo apt-get update
- sudo apt-get upgrade
