---
foam_template:
  name: Docs Docusaurus Template
  description: Creates Docusaurus docs/slip
  filepath: docs/${FOAM_TITLE/([\S]*)([ ]*)/${1:/downcase}${2:+-}/g}.mdx
sidebar_label: ${FOAM_TITLE}
description: ${FOAM_TITLE}
keywords:
  - docs
  - docusaurus
image: https://i.imgur.com/mErPwqL.png
tags:
  - blog
  - docusaurus
last_update:
  date: ${CURRENT_YEAR}-${CURRENT_MONTH}-${CURRENT_DATE}
  author: frank
---

# ${FOAM_TITLE}

Foam includes note templates!
This allows you to easily create notes that have similar structure without having to use copy/paste :)

Templates support the [VS Code's Snippet Syntax](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_snippet-syntax), which means you can:

- add variables to the newly created note
- add tabstop to automatically navigate to the key parts of the note, just like a form
Below you can see an example showing a todo list and a timestamp.

<!--truncate-->

## Background
