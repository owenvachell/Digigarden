<%* if (tp.file.title.charAt(0) == "{") { %>
---
tags: #Inbox/book  
aliases:
  -
cssclass:
---
<%* } else if (tp.file.title.charAt(0) == "@") { %>
---
tags: #CRM/Person  
aliases:
  -
cssclass:
---
<%* } else if (tp.file.title.charAt(0) == "!") { %>
---
tags: #Inbox/tweet 
aliases:
  -
cssclass:
---
<%* } else if (tp.file.title.charAt(0) == "%") { %>
---
tags: #Inbox/podcast 
aliases:
  -
cssclass:
---
<%* } else if (tp.file.title.charAt(0) == "+") { %>
---
tags: #Inbox/youtube 
aliases:
  -
cssclass:
---
<%* } else if (tp.file.title.charAt(0) == "(") { %>
---
tags: #Inbox/article  
aliases:
  -
cssclass:
---
<%* } else if (tp.file.title.charAt(0) == "&") { %>
---
tags: #Inbox/paper 
aliases:
  -
cssclass:
---
<%* } else if (tp.file.title.charAt(0) == "=") { %>
---
tags: #Inbox/thought 
aliases:
  -
cssclass:
---
<%* } else { %>
---
aliases:
---
<%* } %>
