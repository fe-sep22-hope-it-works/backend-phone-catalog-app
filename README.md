# Backend phone catalog app  

## API work description:  

### Find one phone by ID:  
```
Requires:  
• phoneID  

Responds:  
• Phone object  

Exapmle:  
https://hope-it-works.netlify.app/.netlify/functions/server/phones/14  
```

### Find extended data by ID:  
```
Requires:  
• phoneID  

Responds:  
• Extended phone object including description  

Exapmle:  
https://hope-it-works.netlify.app/.netlify/functions/server/phones/ext/69  
```

### Get one image as Base64 scheme:  
```
Requires:  
• phoneID  
• Two-digit number of image  

Responds:  
• Image as Base64 scheme  

Exapmle:  
https://hope-it-works.netlify.app/.netlify/functions/server/public/36/02  
```

### Get all images by ID as Base64 scheme:  
```
Requires:  
• phoneID  

Responds:  
• Array of images by ID as Base64 scheme  

Exapmle:  
https://hope-it-works.netlify.app/.netlify/functions/server/phones/img/11 
```

### Get the phone list:  
```
Requires:  
• sortedBy parameter  
sortBy = 'newest' | 'alphabetically' | 'price_cheap' | 'price_expensive' | 'capacity' | 'ram' | 'screen'  
• Number of page  
• Number of phones per page  

Responds:  
• Object as:  
  {
    paginatedPhones,  
    page,  
    totalPages,  
    totalPhones,  
  };  

Exapmle:  
https://hope-it-works.netlify.app/.netlify/functions/server/phones?sortedby=price_expensive&page=3&phonesQuantity=4  
```

### Get images paths by ID:  
```
Requires:  
• phoneID  

Responds:  
• Array of paths to images  

Exapmle:  
https://hope-it-works.netlify.app/.netlify/functions/server/public/img/14 
```

### Get recommended phone by ID:  
```
Requires:  
• phoneID  

Responds:  
• Array of recommended phones with the same price  

Exapmle:  
https://hope-it-works.netlify.app/.netlify/functions/server/phones/recommended/63
```

### Get new phones:  
```
Responds:  
• Array new phones  

Exapmle:  
https://hope-it-works.netlify.app/.netlify/functions/server/phones/new
```

### Get phones with best discount:  
```
Responds:  
• Array of phones with biggest discount  

Exapmle:  
https://hope-it-works.netlify.app/.netlify/functions/server/phones/discount
```

### Get productType by query:  
```
Requires:  
• ProductType query  

Responds:  
• Array of ProductType products  

Exapmle:  
https://hope-it-works.netlify.app/.netlify/functions/server/tablets
```

### Get all favorites:  
```
Responds:  
• Array of favorite phones  

Exapmle:  
https://hope-it-works.netlify.app/.netlify/functions/server/favorites/getAll
```

### Add favorite by ID:  
```
Requires:  
• phoneID  

Responds:  
• Array of favorite phones with added phone  

Exapmle:  
https://hope-it-works.netlify.app/.netlify/functions/server/favorites/addOne/31
```

### Delete favorite by ID:  
```
Requires:  
• phoneID  

Responds:  
• Array of favorite phones without deleted phone  

Exapmle:  
https://hope-it-works.netlify.app/.netlify/functions/server/favorites/deleteOne/38
```
