---
foam_template:
  name: Docs Docusaurus Template
  description: Creates Docusaurus docs/slip
  filepath: docs/learn-powershell.md
sidebar_label: Learn PowerShell
description: Learn PowerShell
keywords:
  - learn powershell
image: https://i.imgur.com/mErPwqL.png
tags:
  - powershell
  - learn
last_update:
  date: 2023-06-26
  author: frank
---

# Learn PowerShell

Set environment variables permanently

```powershell
[Environment]::SetEnvironmentVariable("VCPKG_ROOT", "Whatever you need it to be", "Machine")
```

<!--truncate-->

Get environment variables

```powershell
# Get all variables
[Environment]::GetEnvironmentVariable()

# Get specific variable
[Environment]::GetEnvironmentVariable("VCPKG_ROOT")
```
