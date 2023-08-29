---
authors:
  - frank
tags:
  - intel vroc
  - raid
  - ubuntu
  - best practice
description: Setup Intel VROC RAID on Ubuntu
keywords:
  - Setup Intel VROC RAID on Ubuntu
image: https://i.imgur.com/mErPwqL.png
date: 2023-08-29
draft: false
enableComments: true # for Gisqus
---

# Setup Intel VROC RAID on Ubuntu

[Linux VROC User Guide](https://www.intel.com/content/dam/support/us/en/documents/memory-and-storage/ssd-software/Linux_VROC_6-0_User_Guide.pdf)

[VROC Ubuntu Setup](https://www.intel.com/content/dam/support/us/en/documents/memory-and-storage/ssd-software/VROC-Ubuntu-Setup-UserGuide-342787-US.pdf)

[How To Create RAID Arrays with mdadm on Ubuntu 22.04  | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-create-raid-arrays-with-mdadm-on-ubuntu-22-04)

Recently, there is a chance for me to install Ubuntu(server) OS on a Dell Precision xxx workstation which is includes 2 NVMe SSDs and 8 SATA hard drives(HDDs) and has in-box hardware-assisted RAID controller(intel **VROC**). In the past, I just play cloud virtual machines or personal host with single disk.

Storage is an important consideration coming up to my mind. So firstly, how to organize these disks to their roles:

- 2 SSDs hold the system to load quickly
- 8 HDDs store data persistently

In order to access these physical disks easily and reduce damages from data loss, I need to combine multiple disks to act as one, while keep data redundant and backup. After step-by-step research, there are some enterprise solutions present for me. These drive layer or file system layer approaches designed for specific purposes have their own advantages over others while they maybe achieve some same features.

Here are some benefits and shortcomings of them alongside common use cases:

- **RAID**(Redundant Array of Independent Disks)
drive layer  
benefits: improve data redundancy and data read/write performance

- **LVM**(Logical Volume Management)
file system layer
benefits: combine multiple disks into one logical volume, extend the volume with new disk added, increase/decrease mounted folder in file system

- **ZFS**(Z File System)

As Wiki saying, there are three types of raid:

1. hardware RAID
2. software RAID
   - **mdadm** in Linux
3. hardware-assisted software RAID, firmware RAID, fake RAID
   - intel **VROC** (Virtual RAID on CPU)

To leverage the power of intel VROC in Ubuntu(Linux), you also need the `mdadm` command line tool to manage intel VROC to create RAID 0, RAID 1, RAID 5 and RAID 10.

:::note
In my understanding, the intel VROC register in system with the common interface with `mdadm`, so the `mdadm` software can operate it. And running command will show the `mdadm` is using intel VROC,

```sh
$ sudo mdadm --detail-platform

rms@rms:~$ sudo mdadm --detail-platform
[sudo] password for rms: 
       Platform : Intel(R) Virtual RAID on CPU
        Version : 8.0.3.1002
    RAID Levels : raid0 raid1 raid10 raid5
    Chunk Sizes : 4k 8k 16k 32k 64k 128k
    2TB volumes : supported
      2TB disks : supported
      Max Disks : 8
    Max Volumes : 2 per array, 8 per controller
 I/O Controller : /sys/devices/pci0000:00/0000:00:17.0 (SATA)
          Port7 : /dev/sdh (ZR909K07)
          Port6 : /dev/sdg (ZV70BN24)
          Port3 : /dev/sdd (ZV70BD3T)
          Port4 : /dev/sde (ZR909Q89)
          Port1 : /dev/sdb (ZRT0S2FM)
          Port5 : /dev/sdf (ZR9099MM)
          Port2 : /dev/sdc (ZR909AGN)
          Port0 : /dev/sda (ZV70BMH9)

       Platform : Intel(R) Virtual RAID on CPU
        Version : 8.0.3.1002
    RAID Levels : raid0 raid1 raid10
    Chunk Sizes : 4k 8k 16k 32k 64k 128k
    2TB volumes : supported
      2TB disks : supported
      Max Disks : 96
    Max Volumes : 2 per array, 24 per controller
 3rd party NVMe : supported
 I/O Controller : /sys/devices/pci0000:8d/0000:8d:00.5 (VMD)
 NVMe under VMD : /dev/nvme0n1 (633FC084FCVK)
 NVMe under VMD : /dev/nvme1n1 (633FC0DEFCVK)
 I/O Controller : /sys/devices/pci0000:6f/0000:6f:00.5 (VMD)
 I/O Controller : /sys/devices/pci0000:51/0000:51:00.5 (VMD)
```

:::


!!!IMPORTANT

Install Ubuntu Server on RAID:
Ubuntu Server Image has inbox `mdadm` utilities and `VMD` drivers(which enable intel VROC functionalities), so it is quite convenient to create the RAID 1 on 2 SSDs either in BIOS stage(for intel VROC only) or in storage layer step during OS installation stage(software RAID), then install Ubuntu Server OS on the RAID 1.

After creating the RAID 1 via intel VROC in BIOS, Ubuntu Server installation can detect the RAID created by VROC in step when set up the storage layer.

If you skip BIOS to create RAID during OS installation, remember to add `-e isms` when using `mdadm` to create RAID(you can enter the terminal, do ``) otherwise the RAID is software based and does not apply VROC.

Install Ubuntu Desktop on RAID:
Ubuntu Desk Image does not ship the `mdadm` tool, so it is nearly impossible to create RAID and install Ubuntu Desktop OS on the RAID(however this one [Install Ubuntu 20.04 desktop with RAID 1 and LVM on machine with UEFI BIOS](https://askubuntu.com/questions/1299978/install-ubuntu-20-04-desktop-with-raid-1-and-lvm-on-machine-with-uefi-bios) from stackoverflow seems to be successful)

## Create RAID Array with mdadm

Create RAID 0 array with device named `/dev/md0`

```sh
sudo mdadm --create --verbose /dev/md0 -l 0 -n 2 /dev/sda /dev/sdb
```

Create a filesystem on the array

```sh
sudo mkfs.ext4 -F /dev/md0
```

Mount the array

```sh
sudo mkdir -p /mnt/md0
```

```sh
sudo mount /dev/md0 /mnt/md0
```

Persist array config even after system reboot,

```sh
sudo mdadm --detail --scan | sudo tee -a /etc/mdadm/mdadm.conf
```

```sh
sudo update-initramfs -u
```

```sh
echo '/dev/md0 /mnt/md0 ext4 defaults,nofail,discard 0 0' | sudo tee -a /etc/fstab
```

## Remove RAID Array with mdadm

[Optional]Umount the array from filesystem if mounted,

```sh
sudo umount /dev/md0
```

Stop RAID array,

```sh
sudo mdadm --stop /dev/md0
# Stop all arrays
sudo mdadm --stop --scan
```

Removes the RAID metadata and resets them to normal on the **Drives**,

```sh
sudo mdadm --zero-superblock /dev/sda
sudo mdadm --zero-superblock /dev/sd[a-h]
```

Remove any persistent references to the array if exist. Edit the `/etc/fstab`:

```sh title="/etc/fstab"
sudo nano /etc/fstab
```

Also, remove the array definition if exist, from the `/etc/mdadm/mdadm.conf` file:

```sh title="/etc/mdadm/mdadm.conf"
sudo nano /etc/mdadm/mdadm.conf
```

## Manage RAID Array with mdadm

Finding the RAID arrays,

```sh
$ cat /proc/mdstat

Personalities : [raid1] [linear] [multipath] [raid0] [raid6] [raid5] [raid4] [raid10] 
md126 : active raid1 nvme0n1[1] nvme1n1[0]
      3800741888 blocks super external:/md127/0 [2/2] [UU]
      
md127 : inactive nvme0n1[1](S) nvme1n1[0](S)
      10402 blocks super external:imsm
       
unused devices: <none>
```

Querying for Information on RAID array,

```sh
sudo mdadm --detail /dev/md0
sudo mdadm --query /dev/md0
```

Getting Information on individual physical Devices,

```sh
sudo mdadm --query /dev/sda
sudo mdadm --examine /dev/sda
```

Stop RAID array,

```sh
sudo mdadm --stop /dev/md0
# Stop all arrays
sudo mdadm --stop --scan
```

Starting an Array,

```sh
# This works if the array is defined in the configuration `/etc/mdadm/mdadm.conf` file.
sudo mdadm --assemble --scan
sudo mdadm --assemble /dev/md0
# If the array is not persisted in `/etc/mdadm/mdadm.conf` file but keeping RAID metadata
sudo mdadm --assemble /dev/md0 /dev/sda /dev/sdb
```

Adding a Spare Device to an Array,

```sh
sudo mdadm /dev/md0 --add /dev/sde
```

```sh
$ lsblk -f
NAME        FSTYPE          FSVER  LABEL UUID                                 FSAVAIL FSUSE% MOUNTPOINTS
loop0       squashfs        4.0                                                     0   100% /snap/core20/1974
loop1       squashfs        4.0                                                     0   100% /snap/lxd/24322
loop2       squashfs        4.0                                                     0   100% /snap/snapd/19457
sda         isw_raid_member 1.3.00                                                           
sdb         isw_raid_member 1.3.00                                                           
sdc         isw_raid_member 1.3.00                                                           
sdd         isw_raid_member 1.3.00                                                           
sde         isw_raid_member 1.3.00                                                           
sdf         isw_raid_member 1.3.00                                                           
sdg         isw_raid_member 1.3.00                                                           
sdh         isw_raid_member 1.3.00                                                           
nvme0n1     isw_raid_member 1.3.00                                                           
├─md126                                                                                      
│ ├─md126p1 vfat            FAT32        292B-DB66                                 1G     1% /boot/efi
│ └─md126p2 ext4            1.0          0f58386c-334d-4877-8051-b855bae37fb0    3.3T     0% /
└─md127                                                                                      
nvme1n1     isw_raid_member 1.3.00                                                           
├─md126                                                                                      
│ ├─md126p1 vfat            FAT32        292B-DB66                                 1G     1% /boot/efi
│ └─md126p2 ext4            1.0          0f58386c-334d-4877-8051-b855bae37fb0    3.3T     0% /
└─md127                         
```

```sh
sudo fdisk -l /dev/sda
```

Delete partition and data in drive,

```sh
sudo dd if=/dev/zero of=/dev/sda  bs=512  count=1
```