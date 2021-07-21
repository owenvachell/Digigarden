---
tags: moc
aliases: 
---

```dataview
TABLE status, elink(author-url, author) AS author, pages, published, elink(reference, "source") AS ref, elink(kindle-link, "open in kindle") AS "app link", (date(now) - file.ctime).days AS "Vault age (days)", file.etags AS tags
FROM "Media/Books"
WHERE contains(file.name, "{ ")
SORT file.name
```