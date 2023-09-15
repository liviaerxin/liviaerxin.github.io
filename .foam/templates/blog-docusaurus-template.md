---
foam_template:
  name: Blog Docusaurus Template
  description: Creates Docusaurus blog/slip
  filepath: blog/${FOAM_TITLE/([\S]*)([ ]*)/${1:/downcase}${2:+-}/g}.mdx # See using [Variable transforms](https://code.visualstudio.com/docs/editor/userdefinedsnippets#_variable-transforms )
authors:
  - frank
tags:
  - ${FOAM_TITLE}
description: ${FOAM_TITLE}
keywords:
  - ${FOAM_TITLE}
image: https://i.imgur.com/mErPwqL.png
date: ${FOAM_DATE_YEAR}-${FOAM_DATE_MONTH}-${FOAM_DATE_DATE}
draft: false
enableComments: true # for Gisqus
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
