---
tags: moc
aliases: 
---

## Drafts
```dataview
TABLE striptime(file.mtime) AS "Last Visited", date AS Due
FROM "CMS/Personal-Blog/content/posts"
WHERE draft = true
```

## Published
```dataview
TABLE date AS Published
FROM "CMS/Personal-Blog/content/posts"
WHERE draft = false
```


## Content planner
![[Blog content planner]]

## Tools
- [Image Resizer](http://www.simpleimageresizer.com)

## Steps to publish
1. mark `draft` as `false`
2. Open terminal at [My-Personal-Blog](hook://file/0wmQCwNLD?p=RG9jdW1lbnRzL1ZhdWx0&n=My-Personal-Blog)
3. Run `git commit -m "Published <blog title>"`
4. Run `git push`


## Completed
- [x] [[How to build a habit tracker in Obsidian]] ✅ 2021-07-17