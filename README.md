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

### Get one image:  
```
Requires:  
• phoneID  
• Two-digit number of image  

Responds:  
• Image as Base64 scheme  

Exapmle:  
https://hope-it-works.netlify.app/.netlify/functions/server/public/36/02  
```

### Get all images by ID:  
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
